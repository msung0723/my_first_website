/*
 * Music playback and backdrop coordinator.
 * This file intentionally owns backdrop synchronization so playback actions
 * never stack multiple YouTube player commands.
 */

function queueMusicBackdropSync(options = {}) {
    queueMusicBackdropSync.options = {
        ...(queueMusicBackdropSync.options || {}),
        ...options,
        forceSeek: Boolean(options.forceSeek || queueMusicBackdropSync.options?.forceSeek)
    };

    if (musicBackdropSyncTimer) {
        clearTimeout(musicBackdropSyncTimer);
    }

    musicBackdropSyncTimer = window.setTimeout(async () => {
        musicBackdropSyncTimer = null;
        if (musicBackdropSyncInFlight) {
            musicBackdropSyncQueued = true;
            return;
        }

        musicBackdropSyncInFlight = true;
        const nextOptions = queueMusicBackdropSync.options || {};
        queueMusicBackdropSync.options = {};
        try {
            await applyMusicTrackBackdrop(nextOptions);
        } catch (error) {
            console.warn("음악 배경 동기화에 실패했습니다.", error);
        } finally {
            musicBackdropSyncInFlight = false;
            if (musicBackdropSyncQueued) {
                musicBackdropSyncQueued = false;
                queueMusicBackdropSync();
            }
        }
    }, options.immediate ? 0 : 24);
}

function applyMusicHeaderBackground(imageUrl, enabled) {
    const currentUser = getCurrentUser();
    const wallpaperImage = resolveAssetUrl(
        pendingBackgroundImage !== null ? pendingBackgroundImage : (currentUser?.backgroundImage || "")
    );
    const applyHeaderWallpaper = Boolean(applyHeaderWallpaperInput?.checked || currentUser?.applyHeaderWallpaper);

    if (!enabled || !imageUrl) {
        applySiteWallpaper(wallpaperImage, applyHeaderWallpaper);
        return;
    }

    pageHeader.style.setProperty("background-color", "#ffffff", "important");
    pageHeader.style.setProperty(
        "background-image",
        `linear-gradient(rgba(255,255,255,0.76), rgba(255,255,255,0.76)), url("${imageUrl}")`,
        "important"
    );
    pageHeader.style.setProperty("background-position", "center top", "important");
    pageHeader.style.setProperty("background-size", "cover", "important");
    pageHeader.style.setProperty("background-repeat", "no-repeat", "important");
}

async function applyMusicTrackBackdrop(options = {}) {
    const musicPage = document.getElementById("music-page");
    if (!musicPage) return;

    const isMusicPageVisible = !musicPage.classList.contains("hidden");
    const activeTrack = getTrackForMusicVisuals();
    const backgroundArt = resolveAssetUrl(activeTrack?.customBackgroundArt || "");
    const backgroundVideoId = activeTrack?.customBackgroundVideoId || "";
    const backgroundVideoStart = Math.max(0, Number(activeTrack?.customBackgroundVideoStart || 0));
    const currentUser = getCurrentUser();
    const musicBackgroundOpacity = Math.min(
        1,
        Math.max(
            0,
            Number.isFinite(currentUser?.musicBackgroundOpacity)
                ? currentUser.musicBackgroundOpacity
                : Number(musicBackdropOpacityInput?.value ?? 1)
        )
    );
    const applyMusicHeaderWallpaper = currentUser?.applyMusicHeaderWallpaper !== false
        && Boolean(applyMusicHeaderWallpaperInput?.checked ?? true);
    const backdropKey = backgroundVideoId
        ? `video:${backgroundVideoId}@${backgroundVideoStart}`
        : (backgroundArt ? `image:${activeTrack?.customBackgroundArt || backgroundArt}` : "");
    const hasChanged = backdropKey !== lastAppliedMusicBackground;

    musicPage.style.setProperty("--music-track-bg-opacity", String(musicBackgroundOpacity));

    if (!backgroundArt && !backgroundVideoId) {
        lastAppliedMusicBackground = "";
        musicPage.classList.remove("has-track-background", "track-backdrop-refresh");
        musicPage.style.setProperty("--music-track-bg-url", "none");
        musicPage.style.setProperty("--music-track-bg-opacity", "0");
        stopMusicBackgroundVideoPlayback();
        applyMusicHeaderBackground("", false);
        return;
    }

    lastAppliedMusicBackground = backdropKey;

    if (!isMusicPageVisible) {
        musicVideoBackdrop?.classList.add("hidden");
        if (musicBackgroundVideoPlayer && typeof musicBackgroundVideoPlayer.pauseVideo === "function") {
            musicBackgroundVideoPlayer.pauseVideo();
        }
        applyMusicHeaderBackground("", false);
        return;
    }

    if (backgroundArt && !backgroundVideoId) {
        if (musicBackgroundVideoPlayer && typeof musicBackgroundVideoPlayer.pauseVideo === "function") {
            musicBackgroundVideoPlayer.pauseVideo();
        }
        musicVideoBackdrop?.classList.add("hidden");
        musicPage.classList.add("has-track-background");
        musicPage.style.setProperty("--music-track-bg-url", `url("${backgroundArt}")`);
        applyMusicHeaderBackground(backgroundArt, applyMusicHeaderWallpaper);
    } else {
        const thumbnailUrl = `https://i.ytimg.com/vi/${backgroundVideoId}/maxresdefault.jpg`;
        musicPage.classList.remove("has-track-background");
        musicPage.style.setProperty("--music-track-bg-url", "none");
        musicVideoBackdrop.classList.remove("hidden");
        musicVideoBackdrop.style.opacity = String(musicBackgroundOpacity);
        musicVideoBackdrop.style.backgroundImage = `url("${thumbnailUrl}")`;
        musicVideoBackdrop.style.backgroundPosition = "center";
        musicVideoBackdrop.style.backgroundSize = "cover";
        applyMusicHeaderBackground(thumbnailUrl, applyMusicHeaderWallpaper);

        const player = await ensureMusicBackgroundVideoPlayer();
        if (!player) return;

        const playingTrack = getTrackById(musicState.playingTrackId);
        const controlsThisTrack = Boolean(playingTrack && activeTrack?.id === playingTrack.id);
        const shouldPlay = controlsThisTrack && isPlaybackActive();
        const { currentTime } = getPlaybackMetrics();
        const rawTargetTime = Math.max(0, backgroundVideoStart + Number(currentTime || 0));
        const duration = typeof player.getDuration === "function" ? Number(player.getDuration() || 0) : 0;
        const targetTime = duration > 0 ? Math.min(rawTargetTime, Math.max(0, duration - 0.08)) : rawTargetTime;
        const reachedVideoEnd = duration > 0 && rawTargetTime >= duration - 0.18;
        const videoConfig = `${backgroundVideoId}@${backgroundVideoStart}`;
        const playerVideoId = typeof player.getVideoData === "function"
            ? player.getVideoData()?.video_id || ""
            : "";
        const needsLoad = lastAppliedMusicBackgroundVideoConfig !== videoConfig
            || playerVideoId !== backgroundVideoId;

        player.mute();
        if (needsLoad) {
            lastAppliedMusicBackgroundVideoConfig = videoConfig;
            musicBackgroundVideoEnded = false;
            if (shouldPlay) {
                player.loadVideoById({ videoId: backgroundVideoId, startSeconds: targetTime });
            } else {
                player.cueVideoById({ videoId: backgroundVideoId, startSeconds: targetTime });
            }
        } else {
            const playerTime = typeof player.getCurrentTime === "function"
                ? Number(player.getCurrentTime() || 0)
                : 0;
            const driftLimit = options.forceSeek ? 0.12 : 0.9;
            if ((options.forceSeek || options.driftCheck) && Math.abs(playerTime - targetTime) > driftLimit) {
                player.seekTo(targetTime, true);
                if (duration <= 0 || targetTime < duration - 0.25) {
                    musicBackgroundVideoEnded = false;
                }
            }
        }

        if (reachedVideoEnd) {
            musicBackgroundVideoEnded = true;
            player.seekTo(Math.max(0, duration - 0.08), true);
            player.pauseVideo();
        }

        const playerState = typeof player.getPlayerState === "function"
            ? player.getPlayerState()
            : null;
        if (shouldPlay && !musicBackgroundVideoEnded && !reachedVideoEnd) {
            if (!window.YT || playerState !== window.YT.PlayerState.PLAYING) {
                player.playVideo();
            }
        } else if (window.YT && (
            playerState === window.YT.PlayerState.PLAYING
            || playerState === window.YT.PlayerState.BUFFERING
        )) {
            player.pauseVideo();
        }
    }

    if (hasChanged) {
        musicPage.classList.remove("track-backdrop-refresh");
        void musicPage.offsetWidth;
        musicPage.classList.add("track-backdrop-refresh");
    }
}
