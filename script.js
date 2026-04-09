const userNameDisplay = document.getElementById("user-name");
const navProfileGroup = document.getElementById("nav-profile-group");
const headerProfileImg = document.getElementById("header-profile-img");
const defaultAvatar = document.getElementById("default-avatar");
const headerImgWrapper = document.getElementById("header-profile-img-wrapper");
const navLogoutBtn = document.getElementById("nav-logout-btn");

const shortcutGrid = document.getElementById("shortcut-grid");
const addShortcutBtn = document.getElementById("add-shortcut-btn");
const shortcutModal = document.getElementById("shortcut-modal");
const shortcutNameInput = document.getElementById("shortcut-name");
const shortcutUrlInput = document.getElementById("shortcut-url");

const profilePreview = document.getElementById("profile-preview");
const previewPlus = document.getElementById("preview-plus");
const imageInput = document.getElementById("image-input");
const rainbowMode = document.getElementById("rainbow-mode");
const borderColorInput = document.getElementById("profile-border-color");
const backgroundImageSetupBtn = document.getElementById("background-image-setup");
const resetBackgroundImageBtn = document.getElementById("reset-background-image");
const backgroundImageInput = document.getElementById("background-image-input");
const applyHeaderWallpaperInput = document.getElementById("apply-header-wallpaper");
const pageHeader = document.querySelector("header");

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarClose = document.getElementById("sidebar-close");
const menuMain = document.getElementById("menu-main");
const menuMusic = document.getElementById("menu-music");
const menuVideo = document.getElementById("menu-video");
const sidebarItems = {
    "main-page": menuMain.closest("li"),
    "music-page": menuMusic.closest("li"),
    "video-page": menuVideo.closest("li")
};

const addMusicBtn = document.getElementById("add-music-btn");
const editPlaylistBtn = document.getElementById("edit-playlist-btn");
const playlistPrevBtn = document.getElementById("playlist-prev");
const playlistNextBtn = document.getElementById("playlist-next");
const playlistUpBtn = document.getElementById("playlist-up");
const playlistDownBtn = document.getElementById("playlist-down");
const playlistNameEl = document.getElementById("playlist-name");
const playlistItemsEl = document.getElementById("playlist-items");
const recordDisc = document.getElementById("record-disc");
const recordHint = document.getElementById("record-hint");
const nowPlayingTitle = document.getElementById("now-playing-title");
const transportToggleBtn = document.getElementById("transport-toggle");
const transportToggleIcon = document.getElementById("transport-toggle-icon");
const playbackCurrentTime = document.getElementById("playback-current-time");
const playbackDuration = document.getElementById("playback-duration");
const playbackProgress = document.getElementById("playback-progress");
const repeatToggleBtn = document.getElementById("repeat-toggle");
const autoplayToggleBtn = document.getElementById("autoplay-toggle");
const musicEmptyState = document.getElementById("music-empty-state");
const musicAudio = document.getElementById("music-audio");

const musicAddModal = document.getElementById("music-add-modal");
const closeMusicAddBtn = document.getElementById("close-music-add");
const saveMusicBtn = document.getElementById("save-music-btn");
const musicTitleInput = document.getElementById("music-title-input");
const musicSourceYoutubeBtn = document.getElementById("music-source-youtube");
const musicSourceFileBtn = document.getElementById("music-source-file");
const youtubeSourcePanel = document.getElementById("youtube-source-panel");
const fileSourcePanel = document.getElementById("file-source-panel");
const youtubeLinkInput = document.getElementById("youtube-link-input");
const musicFileInput = document.getElementById("music-file-input");

const playlistEditorModal = document.getElementById("playlist-editor-modal");
const closePlaylistEditorBtn = document.getElementById("close-playlist-editor");
const playlistEditorSelect = document.getElementById("playlist-editor-select");
const playlistNameInput = document.getElementById("playlist-name-input");
const openLibraryPickerBtn = document.getElementById("open-library-picker-btn");
const newPlaylistBtn = document.getElementById("new-playlist-btn");
const renamePlaylistBtn = document.getElementById("rename-playlist-btn");
const deletePlaylistBtn = document.getElementById("delete-playlist-btn");
const playlistEditList = document.getElementById("playlist-edit-list");

const libraryPickerModal = document.getElementById("library-picker-modal");
const closeLibraryPickerBtn = document.getElementById("close-library-picker");
const libraryPickerList = document.getElementById("library-picker-list");
const recordStyleBtn = document.getElementById("record-style-btn");
const recordStylePreviewDisc = document.getElementById("record-style-preview-disc");
const recordCoverArt = document.getElementById("record-cover-art");
const recordStyleModal = document.getElementById("record-style-modal");
const openRecordEffectModalBtn = document.getElementById("open-record-effect-modal");
const closeRecordStyleModalBtn = document.getElementById("close-record-style-modal");
const recordStyleGrid = document.getElementById("record-style-grid");
const recordEffectModal = document.getElementById("record-effect-modal");
const closeRecordEffectModalBtn = document.getElementById("close-record-effect-modal");
const recordEffectGrid = document.getElementById("record-effect-grid");
const trackArtInput = document.getElementById("track-art-input");
const videoAddModal = document.getElementById("video-add-modal");
const closeVideoAddBtn = document.getElementById("close-video-add");
const videoAddFab = document.getElementById("video-add-fab");
const videoLinkInput = document.getElementById("video-link-input");
const videoTitleInput = document.getElementById("video-title-input");
const saveVideoBtn = document.getElementById("save-video-btn");
const videoSearchInput = document.getElementById("video-search-input");
const videoTagFilterToggle = document.getElementById("video-tag-filter-toggle");
const videoTagFilterPanel = document.getElementById("video-tag-filter-panel");
const videoSelectedTags = document.getElementById("video-selected-tags");
const videoAllTags = document.getElementById("video-all-tags");
const videoGrid = document.getElementById("video-grid");
const videoEmpty = document.getElementById("video-empty");
const videoViewer = document.getElementById("video-viewer");
const videoViewerBackdrop = document.getElementById("video-viewer-backdrop");
const videoPlayerMainHost = document.getElementById("video-player-main-host");
const videoPlayerMiniHost = document.getElementById("video-player-mini-host");
const videoPlayerFrame = document.getElementById("video-player-frame");
const videoEditorTitle = document.getElementById("video-editor-title");
const videoEditorDescription = document.getElementById("video-editor-description");
const videoSaveMetaBtn = document.getElementById("video-save-meta-btn");
const videoTagInput = document.getElementById("video-tag-input");
const videoAddTagBtn = document.getElementById("video-add-tag-btn");
const videoCurrentTags = document.getElementById("video-current-tags");
const videoCloseBtn = document.getElementById("video-close-btn");
const videoMiniBtn = document.getElementById("video-mini-btn");
const miniVideoPlayer = document.getElementById("mini-video-player");
const miniVideoTitle = document.getElementById("mini-video-title");
const miniVideoOpenBtn = document.getElementById("mini-video-open-btn");
const miniVideoCloseBtn = document.getElementById("mini-video-close-btn");

const youtubePlayerHost = document.getElementById("youtube-player-host");

const USERS_KEY = "magnusUsersV2";
const CURRENT_USER_KEY = "magnusCurrentUserV2";
const SHORTCUTS_KEY = "magnusShortcutsV2";
const MUSIC_LIBRARY_KEY_PREFIX = "musicLibraryMetaV3";
const MUSIC_STATE_KEY_PREFIX = "musicStateV3";
const VIDEO_LIBRARY_KEY_PREFIX = "videoLibraryV1";
const MUSIC_DB_NAME = "magnusMusicDB";
const MUSIC_STORE_NAME = "tracks";
const DEFAULT_PLAYLIST_NAME = "기본 재생목록";

let pendingProfilePic = null;
let pendingBackgroundImage = null;
let pendingBackgroundReset = false;
let activeAudioUrl = null;
let musicDbPromise = null;
let guestTrackBlobs = new Map();
let musicAddSourceType = "youtube";
let youtubePlayer = null;
let youtubeApiPromise = null;
let youtubeReadyResolver = null;
let youtubePlayerReadyPromise = null;
let playbackMonitorInterval = null;
let isScrubbingPlayback = false;
let pendingTrackArtTargetId = null;
let playlistAnimationTimer = null;
let activeDragState = null;
let guestVideos = [];

const RECORD_STYLE_OPTIONS = [
    { id: "classic", label: "클래식" },
    { id: "aurora", label: "오로라" },
    { id: "silver", label: "실버" },
    { id: "sunset", label: "선셋" }
];
const RECORD_EFFECT_OPTIONS = [
    { id: "none" },
    { id: "rainbow-a" },
    { id: "rainbow-b" },
    { id: "rainbow-c" },
    { id: "sky-glow" },
    { id: "prism" }
];
const MAX_TRACK_ART_SIZE = 1024 * 1024 * 1.5;
const MAX_BACKGROUND_IMAGE_SIZE = 1024 * 1024 * 4;

let musicState = {
    library: [],
    playlists: [],
    currentPlaylistId: null,
    selectedTrackId: null,
    playingTrackId: null,
    globalRecordStyle: "classic",
    recordEffect: "none",
    repeatEnabled: false,
    autoplayEnabled: false
};
let videoState = {
    library: [],
    search: "",
    activeTags: [],
    currentVideoId: null,
    isMiniPlayer: false
};

window.onYouTubeIframeAPIReady = function() {
    if (youtubeReadyResolver) youtubeReadyResolver();
};

window.onload = async function() {
    migrateLegacyUserData();
    loadSettings();
    renderShortcuts();
    bindCoreEvents();
    await initMusicPage();
    initVideoPage();
    initDraggablePanels();
};

function bindCoreEvents() {
    rainbowMode.onchange = (e) => applyBorderEffect(e.target.checked, borderColorInput.value);
    borderColorInput.oninput = (e) => applyBorderEffect(rainbowMode.checked, e.target.value);

    document.getElementById("profile-image-setup").onclick = () => imageInput.click();
    imageInput.onchange = handleProfileImageChange;
    backgroundImageSetupBtn.onclick = () => backgroundImageInput.click();
    backgroundImageInput.onchange = handleBackgroundImageChange;
    resetBackgroundImageBtn.onclick = resetBackgroundImage;
    applyHeaderWallpaperInput.onchange = () => {
        const wallpaper = pendingBackgroundImage !== null
            ? pendingBackgroundImage
            : (getCurrentUser()?.backgroundImage || "");
        applySiteWallpaper(wallpaper, applyHeaderWallpaperInput.checked);
    };

    sidebarToggle.onclick = () => sidebar.classList.add("active");
    sidebarClose.onclick = () => sidebar.classList.remove("active");

    menuMain.onclick = (e) => {
        e.preventDefault();
        sidebar.classList.remove("active");
        showPage("main-page");
    };

    menuMusic.onclick = (e) => {
        e.preventDefault();
        sidebar.classList.remove("active");
        showPage("music-page");
    };

    menuVideo.onclick = (e) => {
        e.preventDefault();
        sidebar.classList.remove("active");
        showPage("video-page");
    };

    document.getElementById("nav-signup-btn").onclick = () => {
        document.getElementById("auth-container").classList.remove("hidden");
    };

    document.getElementById("nav-login-btn").onclick = () => {
        document.getElementById("login-container").classList.remove("hidden");
    };

    document.getElementById("complete-signup").onclick = handleSignup;
    document.getElementById("submit-login").onclick = handleLogin;

    addShortcutBtn.onclick = () => shortcutModal.classList.remove("hidden");
    document.getElementById("save-shortcut").onclick = saveShortcut;

    const saveSettingsBtn = document.getElementById("save-settings");
    if (saveSettingsBtn) saveSettingsBtn.addEventListener("click", saveProfileSettings);

    document.getElementById("nav-profile-btn").onclick = () => showPage("profile-page");
    navLogoutBtn.onclick = handleLogout;
    document.getElementById("back-to-main").onclick = () => showPage("main-page");
    document.getElementById("logo-main").onclick = () => showPage("main-page");

    window.onclick = (e) => {
        if (e.target.classList.contains("auth-overlay")) {
            e.target.classList.add("hidden");
        }
    };
}

function loadSettings() {
    const currentUser = getCurrentUser();
    const savedColor = currentUser?.borderColor || "#000000";
    const isRainbow = Boolean(currentUser?.rainbowMode);
    const wallpaperImage = currentUser?.backgroundImage || "";
    const applyHeaderWallpaper = Boolean(currentUser?.applyHeaderWallpaper);

    if (currentUser) {
        document.getElementById("nav-signup-btn").classList.add("hidden");
        document.getElementById("nav-login-btn").classList.add("hidden");
        navProfileGroup.classList.remove("hidden");
        userNameDisplay.innerText = currentUser.id;
    } else {
        document.getElementById("nav-signup-btn").classList.remove("hidden");
        document.getElementById("nav-login-btn").classList.remove("hidden");
        navProfileGroup.classList.add("hidden");
        userNameDisplay.innerText = "아무개";
    }

    if (currentUser?.profilePic) {
        updateProfileDisplay(currentUser.profilePic);
    } else {
        clearProfileDisplay();
    }

    rainbowMode.checked = isRainbow;
    borderColorInput.value = savedColor;
    applyHeaderWallpaperInput.checked = applyHeaderWallpaper;
    pendingBackgroundImage = null;
    pendingBackgroundReset = false;
    applyBorderEffect(isRainbow, savedColor);
    applySiteWallpaper(wallpaperImage, applyHeaderWallpaper);
}

function updateProfileDisplay(picData) {
    [headerProfileImg, profilePreview].forEach((img) => {
        img.src = picData;
        img.classList.remove("hidden");
    });
    [defaultAvatar, previewPlus].forEach((el) => el.classList.add("hidden"));
}

function clearProfileDisplay() {
    [headerProfileImg, profilePreview].forEach((img) => {
        img.src = "";
        img.classList.add("hidden");
    });
    [defaultAvatar, previewPlus].forEach((el) => el.classList.remove("hidden"));
}

function applyBorderEffect(isRainbow, color) {
    if (isRainbow) {
        headerImgWrapper.classList.add("rainbow-border");
        headerImgWrapper.style.background = "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)";
        headerImgWrapper.style.backgroundSize = "400%";
        headerImgWrapper.style.border = "none";
    } else {
        headerImgWrapper.classList.remove("rainbow-border");
        headerImgWrapper.style.background = "#eee";
        headerImgWrapper.style.border = `3px solid ${color}`;
    }
}

function applySiteWallpaper(imageData, applyToHeader) {
    const hasWallpaper = Boolean(imageData);
    document.body.classList.toggle("has-custom-wallpaper", hasWallpaper);
    document.body.style.backgroundImage = hasWallpaper ? `url(${imageData})` : "";
    pageHeader.style.backgroundImage = hasWallpaper && applyToHeader ? `url(${imageData})` : "";
}

function handleProfileImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
        alert("이미지 용량이 큽니다. 2MB 이하를 권장합니다.");
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
        const imageData = ev.target.result;
        updateProfileDisplay(imageData);
        pendingProfilePic = imageData;
    };
    reader.readAsDataURL(file);
}

function handleBackgroundImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_BACKGROUND_IMAGE_SIZE) {
        alert("배경화면 이미지는 4MB 이하로 업로드해주세요.");
        event.target.value = "";
        return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
        pendingBackgroundImage = ev.target.result;
        pendingBackgroundReset = false;
        applySiteWallpaper(pendingBackgroundImage, applyHeaderWallpaperInput.checked);
    };
    reader.readAsDataURL(file);
    event.target.value = "";
}

function resetBackgroundImage() {
    pendingBackgroundImage = "";
    pendingBackgroundReset = true;
    applyHeaderWallpaperInput.checked = false;
    applySiteWallpaper("", false);
}

function showPage(pageId) {
    ["main-page", "profile-page", "music-page", "video-page"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
    });

    const target = document.getElementById(pageId);
    if (target) target.classList.remove("hidden");

    Object.values(sidebarItems).forEach((item) => item && item.classList.remove("active"));
    if (sidebarItems[pageId]) sidebarItems[pageId].classList.add("active");

    if (pageId === "music-page") {
        renderMusicUI();
    }
    if (pageId === "video-page") {
        renderVideoUI();
    }
}

function handleSignup() {
    const id = document.getElementById("signup-id").value.trim();
    const pw = document.getElementById("signup-pw").value.trim();
    if (!id || !pw) return alert("아이디와 비밀번호를 모두 입력해주세요!");

    const users = getUsers();
    if (users.some((user) => user.id === id)) {
        alert("이미 존재하는 아이디입니다.");
        return;
    }

    users.push({
        id,
        pw,
        profilePic: "",
        borderColor: "#000000",
        rainbowMode: false,
        backgroundImage: "",
        applyHeaderWallpaper: false
    });
    saveUsers(users);
    localStorage.setItem(CURRENT_USER_KEY, id);
    document.getElementById("signup-id").value = "";
    document.getElementById("signup-pw").value = "";
    document.getElementById("auth-container").classList.add("hidden");
    alert("회원가입이 완료되었습니다.");
    location.reload();
}

function handleLogin() {
    const id = document.getElementById("login-id").value.trim();
    const pw = document.getElementById("login-pw").value.trim();
    const matchedUser = getUsers().find((user) => user.id === id && user.pw === pw);

    if (!id || !pw) return alert("아이디와 비밀번호를 모두 입력해주세요!");

    if (!matchedUser) {
        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
        return;
    }

    document.getElementById("login-id").value = "";
    document.getElementById("login-pw").value = "";
    document.getElementById("login-container").classList.add("hidden");
    localStorage.setItem(CURRENT_USER_KEY, matchedUser.id);
    alert("로그인되었습니다.");
    location.reload();
}

function handleLogout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    stopYoutubePlayback();
    musicAudio.pause();
    location.reload();
}

function saveShortcut() {
    const name = shortcutNameInput.value.trim();
    const url = shortcutUrlInput.value.trim();
    if (!name || !url) return alert("이름과 URL을 모두 입력해주세요!");

    const shortcuts = getShortcuts();
    shortcuts.push({ name, url });
    localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(shortcuts));
    shortcutNameInput.value = "";
    shortcutUrlInput.value = "";
    shortcutModal.classList.add("hidden");
    renderShortcuts();
}

function getShortcuts() {
    const parsed = JSON.parse(localStorage.getItem(SHORTCUTS_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
}

function renderShortcuts() {
    const list = getShortcuts();
    document.querySelectorAll(".shortcut-item").forEach((el) => el.remove());

    list.forEach((item, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "shortcut-item";
        wrapper.style.position = "relative";

        const a = document.createElement("a");
        a.href = item.url.startsWith("http") ? item.url : `https://${item.url}`;
        a.target = "_blank";
        a.style.cssText = "text-decoration:none; color:#333; display:flex; flex-direction:column; align-items:center; gap:8px;";

        const iconUrl = `https://www.google.com/s2/favicons?sz=128&domain=${item.url}`;
        a.innerHTML = `
            <img src="${iconUrl}" style="width:55px; height:55px; object-fit:contain;" alt="${item.name}">
            <span class="shortcut-text" style="font-size:13px; margin-top:8px;">${item.name}</span>
        `;

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.innerHTML = "×";
        deleteBtn.title = "삭제";
        deleteBtn.style.cssText = `
            position:absolute; top:-8px; right:-8px;
            width:20px; height:20px; border-radius:50%;
            background:#ff4d4d; color:white; border:none;
            font-size:14px; line-height:1; cursor:pointer;
            display:none; justify-content:center; align-items:center;
        `;
        deleteBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const shortcuts = getShortcuts();
            shortcuts.splice(index, 1);
            localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(shortcuts));
            renderShortcuts();
        };

        wrapper.addEventListener("mouseenter", () => { deleteBtn.style.display = "flex"; });
        wrapper.addEventListener("mouseleave", () => { deleteBtn.style.display = "none"; });

        wrapper.appendChild(a);
        wrapper.appendChild(deleteBtn);
        shortcutGrid.insertBefore(wrapper, addShortcutBtn);
    });
}

async function saveProfileSettings() {
    try {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            alert("로그인한 뒤 설정을 저장할 수 있습니다.");
            return;
        }

        const previousUserId = currentUser.id;
        const newId = document.getElementById("change-id").value.trim();
        const newPw = document.getElementById("change-pw").value.trim();
        const users = getUsers();
        const currentIndex = users.findIndex((user) => user.id === currentUser.id);
        if (currentIndex === -1) return;

        if (newId && users.some((user, index) => user.id === newId && index !== currentIndex)) {
            alert("이미 사용 중인 이름입니다.");
            return;
        }

        if (newId) users[currentIndex].id = newId;
        if (newPw) users[currentIndex].pw = newPw;
        if (pendingProfilePic) users[currentIndex].profilePic = pendingProfilePic;
        users[currentIndex].rainbowMode = rainbowMode.checked;
        users[currentIndex].borderColor = borderColorInput.value;
        if (pendingBackgroundReset) {
            users[currentIndex].backgroundImage = "";
        } else if (pendingBackgroundImage !== null) {
            users[currentIndex].backgroundImage = pendingBackgroundImage;
        }
        users[currentIndex].applyHeaderWallpaper = applyHeaderWallpaperInput.checked && Boolean(users[currentIndex].backgroundImage);

        saveUsers(users);
        if (newId && newId !== previousUserId) {
            await migrateMusicScope(previousUserId, newId);
            localStorage.setItem(CURRENT_USER_KEY, newId);
        }

        alert("설정이 저장되었습니다!");
        location.reload();
    } catch (error) {
        alert("저장 공간이 부족하거나 오류가 발생했습니다. 사진 크기를 줄여보세요.");
    }
}

async function initMusicPage() {
    bindMusicEvents();
    await loadMusicState();
    startPlaybackMonitor();
    syncPlaybackUi();
}

function bindMusicEvents() {
    addMusicBtn.onclick = openMusicAddModal;
    closeMusicAddBtn.onclick = () => musicAddModal.classList.add("hidden");
    saveMusicBtn.onclick = saveMusicTrack;
    musicSourceYoutubeBtn.onclick = () => setMusicSourceType("youtube");
    musicSourceFileBtn.onclick = () => setMusicSourceType("file");

    playlistPrevBtn.onclick = () => switchPlaylist(-1);
    playlistNextBtn.onclick = () => switchPlaylist(1);
    playlistUpBtn.onclick = () => moveSelection(-1);
    playlistDownBtn.onclick = () => moveSelection(1);
    recordDisc.onclick = () => handleRecordInteraction();
    transportToggleBtn.onclick = () => handleTransportToggle();
    repeatToggleBtn.onclick = () => toggleRepeatMode();
    autoplayToggleBtn.onclick = () => toggleAutoplayMode();
    playbackProgress.addEventListener("input", handlePlaybackScrub);
    playbackProgress.addEventListener("change", applyPlaybackScrub);

    editPlaylistBtn.onclick = () => openPlaylistEditor();
    closePlaylistEditorBtn.onclick = () => playlistEditorModal.classList.add("hidden");
    openLibraryPickerBtn.onclick = () => openLibraryPicker();
    closeLibraryPickerBtn.onclick = () => libraryPickerModal.classList.add("hidden");
    recordStyleBtn.onclick = () => openRecordStyleModal();
    closeRecordStyleModalBtn.onclick = () => recordStyleModal.classList.add("hidden");
    openRecordEffectModalBtn.onclick = () => openRecordEffectModal();
    closeRecordEffectModalBtn.onclick = () => recordEffectModal.classList.add("hidden");
    trackArtInput.onchange = handleTrackArtUpload;

    playlistEditorSelect.onchange = () => {
        musicState.currentPlaylistId = playlistEditorSelect.value;
        normalizeSelectedTrack();
        saveMusicState();
        renderMusicUI();
        renderPlaylistEditor();
    };

    newPlaylistBtn.onclick = () => createPlaylist();
    renamePlaylistBtn.onclick = () => renameCurrentPlaylist();
    deletePlaylistBtn.onclick = () => deleteCurrentPlaylist();

    musicAudio.addEventListener("play", () => {
        syncPlaybackUi();
    });

    musicAudio.addEventListener("pause", () => {
        syncPlaybackUi();
    });

    musicAudio.addEventListener("ended", () => {
        handleTrackEnded();
    });

    musicAudio.addEventListener("loadedmetadata", () => updatePlaybackProgressUi());
    musicAudio.addEventListener("timeupdate", () => updatePlaybackProgressUi());
}

async function loadMusicState() {
    guestTrackBlobs = new Map();

    if (isLoggedInUser()) {
        await openMusicDb();
    }

    const libraryKey = getScopedMusicLibraryKey();
    const stateKey = getScopedMusicStateKey();
    const savedLibrary = libraryKey ? JSON.parse(localStorage.getItem(libraryKey) || "[]") : [];
    const savedState = stateKey ? JSON.parse(localStorage.getItem(stateKey) || "{}") : {};

    musicState.library = Array.isArray(savedLibrary)
        ? savedLibrary.map((track) => ({
            recordStyle: "classic",
            customRecordArt: "",
            ...track
        }))
        : [];
    musicState.playlists = Array.isArray(savedState.playlists) ? savedState.playlists : [];
    musicState.currentPlaylistId = savedState.currentPlaylistId || null;
    musicState.selectedTrackId = savedState.selectedTrackId || null;
    musicState.playingTrackId = savedState.playingTrackId || null;
    musicState.globalRecordStyle = savedState.globalRecordStyle || "classic";
    musicState.recordEffect = savedState.recordEffect || (savedState.rainbowReflectionEnabled ? "rainbow-a" : "none");
    musicState.repeatEnabled = Boolean(savedState.repeatEnabled);
    musicState.autoplayEnabled = Boolean(savedState.autoplayEnabled);
    if (!musicState.playlists.length) {
        const defaultPlaylist = createPlaylistObject(DEFAULT_PLAYLIST_NAME);
        musicState.playlists = [defaultPlaylist];
        musicState.currentPlaylistId = defaultPlaylist.id;
    }

    if (!musicState.currentPlaylistId || !getCurrentPlaylist()) {
        musicState.currentPlaylistId = musicState.playlists[0].id;
    }

    normalizeSelectedTrack();
    saveMusicState();
}

function createPlaylistObject(name) {
    return {
        id: createId("playlist"),
        name,
        trackIds: []
    };
}

function createId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function migrateLegacyUserData() {
    const users = getUsers();
    if (users.length) return;

    const legacyId = localStorage.getItem("savedId");
    const legacyPw = localStorage.getItem("savedPw");
    if (!legacyId || !legacyPw) return;

    const migratedUser = {
        id: legacyId,
        pw: legacyPw,
        profilePic: localStorage.getItem("userProfilePic") || "",
        borderColor: localStorage.getItem("profileBorderColor") || "#000000",
        rainbowMode: localStorage.getItem("rainbowMode") === "true",
        backgroundImage: "",
        applyHeaderWallpaper: false
    };

    saveUsers([migratedUser]);
    localStorage.setItem(CURRENT_USER_KEY, legacyId);
}

function getUsers() {
    const parsed = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    const currentUserId = localStorage.getItem(CURRENT_USER_KEY);
    if (!currentUserId) return null;
    return getUsers().find((user) => user.id === currentUserId) || null;
}

function getCurrentUserId() {
    return localStorage.getItem(CURRENT_USER_KEY) || null;
}

function isLoggedInUser() {
    return Boolean(getCurrentUserId());
}

function getMusicLibraryKeyForUser(userId) {
    return userId ? `${MUSIC_LIBRARY_KEY_PREFIX}:${userId}` : null;
}

function getMusicStateKeyForUser(userId) {
    return userId ? `${MUSIC_STATE_KEY_PREFIX}:${userId}` : null;
}

function getTrackStorageKeyForUser(userId, trackId) {
    return userId ? `${userId}::${trackId}` : trackId;
}

function getScopedMusicLibraryKey() {
    return getMusicLibraryKeyForUser(getCurrentUserId());
}

function getScopedMusicStateKey() {
    return getMusicStateKeyForUser(getCurrentUserId());
}

function getScopedTrackStorageKey(trackId) {
    return getTrackStorageKeyForUser(getCurrentUserId(), trackId);
}

function getLegacyTrackStorageKeys(trackId) {
    const currentUserId = getCurrentUserId();
    const candidates = [
        getScopedTrackStorageKey(trackId),
        trackId,
        currentUserId ? `${currentUserId}:${trackId}` : null,
        currentUserId ? `${currentUserId}-${trackId}` : null
    ];

    return [...new Set(candidates.filter(Boolean))];
}

function getCurrentPlaylist() {
    return musicState.playlists.find((playlist) => playlist.id === musicState.currentPlaylistId) || null;
}

function getTrackById(trackId) {
    return musicState.library.find((track) => track.id === trackId) || null;
}

function normalizeSelectedTrack() {
    const playlist = getCurrentPlaylist();
    if (!playlist || !playlist.trackIds.length) {
        musicState.selectedTrackId = null;
        return;
    }

    if (!playlist.trackIds.includes(musicState.selectedTrackId)) {
        musicState.selectedTrackId = playlist.trackIds[0];
    }
}

function saveMusicState() {
    const libraryKey = getScopedMusicLibraryKey();
    const stateKey = getScopedMusicStateKey();

    if (!libraryKey || !stateKey) return true;

    try {
        localStorage.setItem(libraryKey, JSON.stringify(musicState.library));
        localStorage.setItem(stateKey, JSON.stringify({
            playlists: musicState.playlists,
            currentPlaylistId: musicState.currentPlaylistId,
            selectedTrackId: musicState.selectedTrackId,
            playingTrackId: musicState.playingTrackId,
            globalRecordStyle: musicState.globalRecordStyle,
            recordEffect: musicState.recordEffect,
            repeatEnabled: musicState.repeatEnabled,
            autoplayEnabled: musicState.autoplayEnabled
        }));
        return true;
    } catch (error) {
        console.error("Failed to save music state", error);
        return false;
    }
}

function openMusicAddModal() {
    musicTitleInput.value = "";
    youtubeLinkInput.value = "";
    musicFileInput.value = "";
    setMusicSourceType("youtube");
    musicAddModal.classList.remove("hidden");
}

function setMusicSourceType(type) {
    musicAddSourceType = type;
    const isYoutube = type === "youtube";
    musicSourceYoutubeBtn.classList.toggle("is-active", isYoutube);
    musicSourceFileBtn.classList.toggle("is-active", !isYoutube);
    youtubeSourcePanel.classList.toggle("hidden", !isYoutube);
    fileSourcePanel.classList.toggle("hidden", isYoutube);
}

async function saveMusicTrack() {
    const playlist = getCurrentPlaylist();
    if (!playlist) return;

    const customTitle = musicTitleInput.value.trim();

    if (musicAddSourceType === "youtube") {
        const youtubeUrl = youtubeLinkInput.value.trim();
        const youtubeId = extractYouTubeId(youtubeUrl);
        if (!youtubeId) {
            alert("올바른 유튜브 링크를 입력해주세요.");
            return;
        }

        const trackId = createId("track");
        musicState.library.push({
            id: trackId,
            name: customTitle || "유튜브 음악",
            sourceType: "youtube",
            recordStyle: "classic",
            customRecordArt: "",
            youtubeId,
            youtubeUrl
        });
        playlist.trackIds.push(trackId);
    } else {
        const file = musicFileInput.files[0];
        if (!file) {
            alert("추가할 mp3 파일을 선택해주세요.");
            return;
        }

        const trackId = createId("track");
        await saveTrackBlob(trackId, file);
        musicState.library.push({
            id: trackId,
            name: customTitle || file.name.replace(/\.[^.]+$/, "") || file.name,
            originalName: file.name,
            sourceType: "file",
            recordStyle: "classic",
            customRecordArt: ""
        });
        playlist.trackIds.push(trackId);
    }

    normalizeSelectedTrack();
    saveMusicState();
    renderMusicUI();
    openPlaylistEditorIfVisible();
    musicAddModal.classList.add("hidden");
}

function extractYouTubeId(url) {
    try {
        const parsed = new URL(url);
        if (parsed.hostname.includes("youtu.be")) {
            return parsed.pathname.replace("/", "").trim() || null;
        }
        if (parsed.hostname.includes("youtube.com")) {
            return parsed.searchParams.get("v");
        }
        return null;
    } catch {
        return null;
    }
}

function switchPlaylist(direction) {
    if (musicState.playlists.length <= 1) return;

    const currentIndex = musicState.playlists.findIndex((playlist) => playlist.id === musicState.currentPlaylistId);
    const nextIndex = currentIndex + direction;
    if (nextIndex < 0 || nextIndex >= musicState.playlists.length) return;

    musicState.currentPlaylistId = musicState.playlists[nextIndex].id;
    normalizeSelectedTrack();
    saveMusicState();
    renderMusicUI();
    openPlaylistEditorIfVisible();
}

function moveSelection(direction) {
    const playlist = getCurrentPlaylist();
    if (!playlist || !playlist.trackIds.length) return;

    const currentIndex = playlist.trackIds.indexOf(musicState.selectedTrackId);
    const baseIndex = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex = baseIndex + direction;
    if (nextIndex < 0 || nextIndex >= playlist.trackIds.length) return;

    musicState.selectedTrackId = playlist.trackIds[nextIndex];
    saveMusicState();
    syncPlaybackUi();
}

async function handleRecordInteraction() {
    const selectedTrack = getTrackById(musicState.selectedTrackId);
    if (!selectedTrack) {
        alert("먼저 재생할 음악을 선택해주세요.");
        return;
    }

    if (musicState.playingTrackId === selectedTrack.id) {
        await toggleCurrentPlayback(selectedTrack);
        return;
    }

    await playSelectedTrack();
}

async function handleTransportToggle() {
    const playingTrack = getTrackById(musicState.playingTrackId);
    if (playingTrack) {
        await toggleCurrentPlayback(playingTrack);
        return;
    }

    await handleRecordInteraction();
}

async function toggleCurrentPlayback(track) {
    if (track.sourceType === "youtube") {
        const player = await ensureYoutubePlayer();
        if (!player || !window.YT) return;

        const state = typeof player.getPlayerState === "function"
            ? player.getPlayerState()
            : window.YT.PlayerState.UNSTARTED;
        const currentVideoId = typeof player.getVideoData === "function"
            ? player.getVideoData()?.video_id || ""
            : "";

        if (state === window.YT.PlayerState.PLAYING) {
            player.pauseVideo();
        } else if (state === window.YT.PlayerState.PAUSED && currentVideoId === track.youtubeId) {
            youtubePlayerHost.classList.remove("hidden");
            player.playVideo();
        } else {
            youtubePlayerHost.classList.remove("hidden");
            player.loadVideoById(track.youtubeId);
            player.playVideo();
        }

        syncPlaybackUi();
        return;
    }

    if (!musicAudio.src) {
        await playSelectedTrack();
        return;
    }

    if (!musicAudio.paused) {
        musicAudio.pause();
    } else {
        if (musicAudio.ended) musicAudio.currentTime = 0;
        try {
            await musicAudio.play();
        } catch {
            alert("브라우저가 재생을 다시 시작하지 못했습니다. 다시 눌러주세요.");
        }
    }

    syncPlaybackUi();
}

async function playSelectedTrack() {
    const selectedTrack = getTrackById(musicState.selectedTrackId);
    if (!selectedTrack) {
        alert("먼저 재생할 음악을 선택해주세요.");
        return;
    }

    if (selectedTrack.sourceType === "youtube") {
        await playYoutubeTrack(selectedTrack);
        return;
    }

    stopYoutubePlayback();

    if (activeAudioUrl) {
        URL.revokeObjectURL(activeAudioUrl);
        activeAudioUrl = null;
    }

    const blob = await getTrackBlob(selectedTrack.id);
    if (!blob) {
        alert("음악 파일을 불러오지 못했습니다.");
        return;
    }

    activeAudioUrl = URL.createObjectURL(blob);
    musicAudio.src = activeAudioUrl;
    musicState.playingTrackId = selectedTrack.id;
    saveMusicState();

    try {
        await musicAudio.play();
    } catch {
        alert("브라우저가 재생을 시작하지 못했습니다. 다시 눌러주세요.");
    }

    renderMusicUI();
}

async function playYoutubeTrack(track) {
    musicAudio.pause();
    musicAudio.removeAttribute("src");

    const player = await ensureYoutubePlayer();
    if (!player) {
        alert("유튜브 플레이어를 불러오지 못했습니다.");
        return;
    }

    musicState.playingTrackId = track.id;
    saveMusicState();
    youtubePlayerHost.classList.remove("hidden");
    player.loadVideoById(track.youtubeId);
    if (typeof player.unMute === "function") player.unMute();
    if (typeof player.setVolume === "function") player.setVolume(100);
    if (typeof player.playVideo === "function") {
        player.playVideo();
    }
    renderMusicUI();
}

async function ensureYoutubePlayer() {
    await loadYoutubeApi();

    if (youtubePlayer && youtubePlayerReadyPromise) {
        await youtubePlayerReadyPromise;
        return youtubePlayer;
    }

    if (youtubePlayerReadyPromise) {
        await youtubePlayerReadyPromise;
        return youtubePlayer;
    }

    youtubePlayerReadyPromise = new Promise((resolve) => {
        youtubePlayer = new window.YT.Player("youtube-player", {
            width: "1",
            height: "1",
            videoId: "",
            playerVars: { autoplay: 1, controls: 0 },
            events: {
                onReady: () => resolve(),
                onStateChange: handleYoutubeStateChange
            }
        });
    });

    await youtubePlayerReadyPromise;
    return youtubePlayer;
}

function loadYoutubeApi() {
    if (window.YT && window.YT.Player) return Promise.resolve();
    if (youtubeApiPromise) return youtubeApiPromise;

    youtubeApiPromise = new Promise((resolve) => {
        youtubeReadyResolver = resolve;
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(script);
    });

    return youtubeApiPromise;
}

function handleYoutubeStateChange(event) {
    if (!window.YT) return;

    if (event.data === window.YT.PlayerState.PLAYING) {
        syncPlaybackUi();
    } else if (event.data === window.YT.PlayerState.PAUSED) {
        syncPlaybackUi();
    }

    if (event.data === window.YT.PlayerState.ENDED) {
        handleTrackEnded();
        return;
    }

    updatePlaybackProgressUi();
}

function stopYoutubePlayback() {
    if (youtubePlayer && typeof youtubePlayer.stopVideo === "function") {
        youtubePlayer.stopVideo();
    }
    youtubePlayerHost.classList.add("hidden");
}

function isYoutubePlaying() {
    if (!youtubePlayer || !window.YT) return false;
    return youtubePlayer.getPlayerState && youtubePlayer.getPlayerState() === window.YT.PlayerState.PLAYING;
}

function renderMusicUI() {
    renderPlaylistSwitcher();
    renderPlaylist();
    updatePlaybackTexts();
    updatePlaybackControls();
    updatePlaybackProgressUi();
}

function renderPlaylistSwitcher() {
    const playlist = getCurrentPlaylist();
    playlistNameEl.textContent = playlist ? playlist.name : DEFAULT_PLAYLIST_NAME;

    const currentIndex = musicState.playlists.findIndex((item) => item.id === musicState.currentPlaylistId);
    playlistPrevBtn.disabled = currentIndex <= 0;
    playlistNextBtn.disabled = currentIndex === -1 || currentIndex >= musicState.playlists.length - 1;
}

function renderPlaylist() {
    const playlist = getCurrentPlaylist();
    const trackIds = playlist ? playlist.trackIds : [];
    const selectedIndex = trackIds.indexOf(musicState.selectedTrackId);

    playlistItemsEl.innerHTML = "";

    if (!trackIds.length) {
        playlistUpBtn.disabled = true;
        playlistDownBtn.disabled = true;
        musicEmptyState.classList.remove("hidden");
        return;
    }

    musicEmptyState.classList.add("hidden");
    playlistUpBtn.disabled = selectedIndex <= 0;
    playlistDownBtn.disabled = selectedIndex === -1 || selectedIndex >= trackIds.length - 1;

    const slots = [
        { index: selectedIndex - 1, role: "prev" },
        { index: selectedIndex, role: "selected" },
        { index: selectedIndex + 1, role: "next" }
    ];

    slots.forEach(({ index, role }) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "playlist-item";

        if (index < 0 || index >= trackIds.length) {
            item.style.visibility = "hidden";
            item.textContent = "-";
        } else {
            const track = getTrackById(trackIds[index]);
            item.textContent = track ? track.name : "알 수 없는 음악";

            if (role === "selected") item.classList.add("is-selected");
            if (role === "prev") item.classList.add("is-prev");
            if (role === "next") item.classList.add("is-next");
            if (track && track.id === musicState.playingTrackId) item.classList.add("is-playing");

            item.onclick = () => {
                musicState.selectedTrackId = trackIds[index];
                saveMusicState();
                renderMusicUI();
            };
        }

        playlistItemsEl.appendChild(item);
    });
}

function updatePlaybackTexts() {
    const selectedTrack = getTrackById(musicState.selectedTrackId);
    const playingTrack = getTrackById(musicState.playingTrackId);

    recordHint.textContent = selectedTrack
        ? `선택된 음악: ${selectedTrack.name}`
        : "재생할 음악을 선택한 뒤 음반을 눌러주세요";

    if (playingTrack) {
        nowPlayingTitle.textContent = `재생 중: ${playingTrack.name}`;
    } else {
        nowPlayingTitle.textContent = "재생 중인 음악 없음";
    }
}

function openPlaylistEditor() {
    playlistEditorModal.classList.remove("hidden");
    renderPlaylistEditor();
}

function openPlaylistEditorIfVisible() {
    if (!playlistEditorModal.classList.contains("hidden")) {
        renderPlaylistEditor();
    }
}

function renderPlaylistEditor() {
    const playlist = getCurrentPlaylist();
    if (!playlist) return;

    playlistEditorSelect.innerHTML = "";
    musicState.playlists.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.name;
        if (item.id === playlist.id) option.selected = true;
        playlistEditorSelect.appendChild(option);
    });

    playlistNameInput.value = playlist.name;
    playlistEditList.innerHTML = "";

    if (!playlist.trackIds.length) {
        const empty = document.createElement("div");
        empty.className = "playlist-edit-subtitle";
        empty.textContent = "이 재생목록에는 아직 음악이 없습니다.";
        playlistEditList.appendChild(empty);
        deletePlaylistBtn.disabled = musicState.playlists.length <= 1;
        return;
    }

    playlist.trackIds.forEach((trackId, index) => {
        const track = getTrackById(trackId);
        const row = document.createElement("div");
        row.className = "playlist-edit-item";

        const meta = document.createElement("div");
        meta.className = "playlist-edit-meta";
        meta.innerHTML = `
            <div class="playlist-edit-title">${track ? track.name : "알 수 없는 음악"}</div>
            <div class="playlist-edit-subtitle">${index + 1}번째 곡</div>
        `;

        const controls = document.createElement("div");
        controls.className = "playlist-edit-controls";

        const upBtn = createMiniButton("↑", "위로");
        upBtn.disabled = index === 0;
        upBtn.onclick = () => moveTrackInsidePlaylist(index, -1);

        const downBtn = createMiniButton("↓", "아래로");
        downBtn.disabled = index === playlist.trackIds.length - 1;
        downBtn.onclick = () => moveTrackInsidePlaylist(index, 1);

        const removeBtn = createMiniButton("×", "제거");
        removeBtn.onclick = () => removeTrackFromPlaylist(index);

        controls.append(upBtn, downBtn, removeBtn);
        row.append(meta, controls);
        playlistEditList.appendChild(row);
    });

    deletePlaylistBtn.disabled = musicState.playlists.length <= 1;
}

function openLibraryPicker() {
    libraryPickerModal.classList.remove("hidden");
    renderLibraryPicker();
}

function renderLibraryPicker() {
    const playlist = getCurrentPlaylist();
    libraryPickerList.innerHTML = "";

    if (!musicState.library.length) {
        const empty = document.createElement("div");
        empty.className = "playlist-edit-subtitle";
        empty.textContent = "보관함에 추가된 노래가 아직 없습니다.";
        libraryPickerList.appendChild(empty);
        return;
    }

    musicState.library.forEach((track) => {
        const row = document.createElement("div");
        row.className = "library-picker-item";

        const meta = document.createElement("div");
        meta.className = "playlist-edit-meta";
        meta.innerHTML = `
            <div class="playlist-edit-title">${track.name}</div>
            <div class="library-picker-type">${track.sourceType === "youtube" ? "유튜브 링크" : "mp3 파일"}</div>
        `;

        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "nav-btn";
        const alreadyAdded = Boolean(playlist && playlist.trackIds.includes(track.id));
        addBtn.textContent = alreadyAdded ? "추가됨" : "재생목록에 추가";
        addBtn.disabled = alreadyAdded;
        addBtn.onclick = () => addTrackToCurrentPlaylist(track.id);

        row.append(meta, addBtn);
        libraryPickerList.appendChild(row);
    });
}

function addTrackToCurrentPlaylist(trackId) {
    const playlist = getCurrentPlaylist();
    if (!playlist || playlist.trackIds.includes(trackId)) return;

    playlist.trackIds.push(trackId);
    normalizeSelectedTrack();
    saveMusicState();
    renderMusicUI();
    renderPlaylistEditor();
    renderLibraryPicker();
}

function createMiniButton(label, title) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mini-btn";
    button.textContent = label;
    button.title = title;
    return button;
}

function createPlaylist() {
    const rawName = playlistNameInput.value.trim();
    const name = rawName || `새 재생목록 ${musicState.playlists.length + 1}`;
    const newPlaylist = createPlaylistObject(name);
    musicState.playlists.push(newPlaylist);
    musicState.currentPlaylistId = newPlaylist.id;
    musicState.selectedTrackId = null;
    saveMusicState();
    renderMusicUI();
    renderPlaylistEditor();
}

function renameCurrentPlaylist() {
    const playlist = getCurrentPlaylist();
    if (!playlist) return;

    const newName = playlistNameInput.value.trim();
    if (!newName) return alert("재생목록 이름을 입력해주세요.");

    playlist.name = newName;
    saveMusicState();
    renderMusicUI();
    renderPlaylistEditor();
}

function deleteCurrentPlaylist() {
    if (musicState.playlists.length <= 1) {
        alert("마지막 재생목록은 삭제할 수 없습니다.");
        return;
    }

    const currentIndex = musicState.playlists.findIndex((playlist) => playlist.id === musicState.currentPlaylistId);
    if (currentIndex === -1) return;

    musicState.playlists.splice(currentIndex, 1);
    const fallbackIndex = Math.max(0, currentIndex - 1);
    musicState.currentPlaylistId = musicState.playlists[fallbackIndex].id;
    normalizeSelectedTrack();
    saveMusicState();
    renderMusicUI();
    renderPlaylistEditor();
}

function moveTrackInsidePlaylist(index, direction) {
    const playlist = getCurrentPlaylist();
    if (!playlist) return;

    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= playlist.trackIds.length) return;

    const [movedTrack] = playlist.trackIds.splice(index, 1);
    playlist.trackIds.splice(nextIndex, 0, movedTrack);
    normalizeSelectedTrack();
    saveMusicState();
    renderMusicUI();
    renderPlaylistEditor();
}

function removeTrackFromPlaylist(index) {
    const playlist = getCurrentPlaylist();
    if (!playlist) return;

    const removedTrackId = playlist.trackIds[index];
    playlist.trackIds.splice(index, 1);

    if (musicState.selectedTrackId === removedTrackId) {
        normalizeSelectedTrack();
    }

    saveMusicState();
    renderMusicUI();
    renderPlaylistEditor();
}

async function migrateMusicScope(oldUserId, newUserId) {
    const oldLibraryKey = getMusicLibraryKeyForUser(oldUserId);
    const oldStateKey = getMusicStateKeyForUser(oldUserId);
    const newLibraryKey = getMusicLibraryKeyForUser(newUserId);
    const newStateKey = getMusicStateKeyForUser(newUserId);

    const oldLibrary = localStorage.getItem(oldLibraryKey);
    const oldState = localStorage.getItem(oldStateKey);

    if (oldLibrary) localStorage.setItem(newLibraryKey, oldLibrary);
    if (oldState) localStorage.setItem(newStateKey, oldState);
    localStorage.removeItem(oldLibraryKey);
    localStorage.removeItem(oldStateKey);

    const db = await openMusicDb();
    const transaction = db.transaction(MUSIC_STORE_NAME, "readwrite");
    const store = transaction.objectStore(MUSIC_STORE_NAME);
    const keysRequest = store.getAllKeys();

    return new Promise((resolve, reject) => {
        keysRequest.onsuccess = () => {
            const keys = keysRequest.result || [];
            keys.forEach((key) => {
                if (typeof key !== "string" || !key.startsWith(`${oldUserId}::`)) return;
                const getRequest = store.get(key);
                getRequest.onsuccess = () => {
                    const nextKey = key.replace(`${oldUserId}::`, `${newUserId}::`);
                    store.put(getRequest.result, nextKey);
                    store.delete(key);
                };
            });
        };
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

function openMusicDb() {
    if (musicDbPromise) return musicDbPromise;

    musicDbPromise = new Promise((resolve, reject) => {
        const request = indexedDB.open(MUSIC_DB_NAME, 1);

        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(MUSIC_STORE_NAME)) {
                db.createObjectStore(MUSIC_STORE_NAME);
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });

    return musicDbPromise;
}

async function saveTrackBlob(trackId, blob) {
    if (!isLoggedInUser()) {
        guestTrackBlobs.set(trackId, blob);
        return;
    }

    const db = await openMusicDb();
    const storageKeys = getLegacyTrackStorageKeys(trackId);

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(MUSIC_STORE_NAME, "readwrite");
        const store = transaction.objectStore(MUSIC_STORE_NAME);
        storageKeys.forEach((storageKey) => store.put(blob, storageKey));
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

async function getTrackBlob(trackId) {
    if (!isLoggedInUser()) {
        return guestTrackBlobs.get(trackId) || null;
    }

    const db = await openMusicDb();
    const storageKeys = getLegacyTrackStorageKeys(trackId);

    for (const storageKey of storageKeys) {
        const blob = await new Promise((resolve, reject) => {
            const transaction = db.transaction(MUSIC_STORE_NAME, "readonly");
            const request = transaction.objectStore(MUSIC_STORE_NAME).get(storageKey);
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });

        if (blob) return blob;
    }

    return null;
}

async function handleRecordInteraction() {
    const selectedTrack = getTrackById(musicState.selectedTrackId);
    if (!selectedTrack) {
        alert("먼저 재생할 음악을 선택해주세요.");
        return;
    }

    if (musicState.playingTrackId === selectedTrack.id) {
        await toggleCurrentPlayback(selectedTrack);
        return;
    }

    await playSelectedTrack();
}

async function toggleCurrentPlayback(track) {
    if (track.sourceType === "youtube") {
        const player = await ensureYoutubePlayer();
        if (!player || !window.YT) return;

        const state = typeof player.getPlayerState === "function"
            ? player.getPlayerState()
            : window.YT.PlayerState.UNSTARTED;

        if (state === window.YT.PlayerState.PLAYING) {
            player.pauseVideo();
        } else {
            youtubePlayerHost.classList.remove("hidden");
            player.playVideo();
        }

        syncPlaybackUi();
        return;
    }

    if (!musicAudio.src) {
        await playSelectedTrack();
        return;
    }

    if (!musicAudio.paused) {
        musicAudio.pause();
    } else {
        if (musicAudio.ended) musicAudio.currentTime = 0;
        try {
            await musicAudio.play();
        } catch {
            alert("브라우저가 재생을 다시 시작하지 못했습니다. 다시 눌러주세요.");
        }
    }

    syncPlaybackUi();
}

async function playSelectedTrack() {
    const selectedTrack = getTrackById(musicState.selectedTrackId);
    if (!selectedTrack) {
        alert("먼저 재생할 음악을 선택해주세요.");
        return;
    }

    if (selectedTrack.sourceType === "youtube") {
        await playYoutubeTrack(selectedTrack);
        return;
    }

    stopYoutubePlayback();

    if (activeAudioUrl) {
        URL.revokeObjectURL(activeAudioUrl);
        activeAudioUrl = null;
    }

    const blob = await getTrackBlob(selectedTrack.id);
    if (!blob) {
        alert("음악 파일을 불러오지 못했습니다.");
        return;
    }

    activeAudioUrl = URL.createObjectURL(blob);
    musicAudio.src = activeAudioUrl;
    musicState.playingTrackId = selectedTrack.id;
    saveMusicState();

    try {
        await musicAudio.play();
    } catch {
        alert("브라우저가 재생을 시작하지 못했습니다. 다시 눌러주세요.");
    }

    syncPlaybackUi();
}

async function playYoutubeTrack(track) {
    musicAudio.pause();
    musicAudio.removeAttribute("src");

    const player = await ensureYoutubePlayer();
    if (!player) {
        alert("유튜브 플레이어를 불러오지 못했습니다.");
        return;
    }

    musicState.playingTrackId = track.id;
    saveMusicState();
    youtubePlayerHost.classList.remove("hidden");
    player.loadVideoById(track.youtubeId);
    if (typeof player.unMute === "function") player.unMute();
    if (typeof player.setVolume === "function") player.setVolume(100);
    if (typeof player.playVideo === "function") player.playVideo();
    syncPlaybackUi();
}

function handleYoutubeStateChange(event) {
    if (!window.YT) return;

    if (event.data === window.YT.PlayerState.PLAYING || event.data === window.YT.PlayerState.PAUSED) {
        syncPlaybackUi();
    }

    if (event.data === window.YT.PlayerState.ENDED) {
        handleTrackEnded();
        return;
    }

    updatePlaybackProgressUi();
}

function renderMusicUI() {
    renderPlaylistSwitcher();
    renderPlaylist();
    updatePlaybackTexts();
    updatePlaybackControls();
    updatePlaybackProgressUi();
}

function updatePlaybackTexts() {
    const selectedTrack = getTrackById(musicState.selectedTrackId);
    const playingTrack = getTrackById(musicState.playingTrackId);
    const isPaused = isPlaybackPaused();

    recordHint.textContent = selectedTrack
        ? `선택된 음악: ${selectedTrack.name}`
        : "재생할 음악을 선택한 뒤 음반을 눌러주세요";

    if (playingTrack) {
        nowPlayingTitle.textContent = `${isPaused ? "일시정지:" : "재생 중:"} ${playingTrack.name}`;
    } else {
        nowPlayingTitle.textContent = "재생 중인 음악 없음";
    }
}

function updatePlaybackControls() {
    const hasTrack = Boolean(musicState.playingTrackId);
    const hasSelectedTrack = Boolean(musicState.selectedTrackId);
    const isPlaying = isPlaybackActive();

    transportToggleBtn.disabled = !hasTrack && !hasSelectedTrack;
    transportToggleIcon.className = `fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`;

    repeatToggleBtn.classList.toggle("is-active", musicState.repeatEnabled);
    repeatToggleBtn.setAttribute("aria-pressed", String(musicState.repeatEnabled));
    autoplayToggleBtn.classList.toggle("is-active", musicState.autoplayEnabled);
    autoplayToggleBtn.setAttribute("aria-pressed", String(musicState.autoplayEnabled));
}

function syncPlaybackUi() {
    const isPlaying = isPlaybackActive();
    recordDisc.classList.toggle("is-playing", isPlaying);
    renderPlaylist();
    updatePlaybackTexts();
    updatePlaybackControls();
    updatePlaybackProgressUi();
}

function startPlaybackMonitor() {
    if (playbackMonitorInterval) clearInterval(playbackMonitorInterval);
    playbackMonitorInterval = setInterval(() => {
        updatePlaybackControls();
        updatePlaybackProgressUi();
    }, 500);
}

function isPlaybackActive() {
    if (isYoutubePlaying()) return true;
    return Boolean(musicState.playingTrackId && musicAudio.src && !musicAudio.paused && !musicAudio.ended);
}

function isPlaybackPaused() {
    if (!musicState.playingTrackId) return false;

    const playingTrack = getTrackById(musicState.playingTrackId);
    if (!playingTrack) return false;

    if (playingTrack.sourceType === "youtube") {
        if (!youtubePlayer || !window.YT || typeof youtubePlayer.getPlayerState !== "function") return false;
        return youtubePlayer.getPlayerState() === window.YT.PlayerState.PAUSED;
    }

    return Boolean(musicAudio.src) && musicAudio.paused && !musicAudio.ended;
}

function getPlaybackMetrics() {
    const playingTrack = getTrackById(musicState.playingTrackId);
    if (!playingTrack) return { currentTime: 0, duration: 0 };

    if (playingTrack.sourceType === "youtube") {
        if (!youtubePlayer) return { currentTime: 0, duration: 0 };
        return {
            currentTime: typeof youtubePlayer.getCurrentTime === "function" ? youtubePlayer.getCurrentTime() : 0,
            duration: typeof youtubePlayer.getDuration === "function" ? youtubePlayer.getDuration() : 0
        };
    }

    return {
        currentTime: Number.isFinite(musicAudio.currentTime) ? musicAudio.currentTime : 0,
        duration: Number.isFinite(musicAudio.duration) ? musicAudio.duration : 0
    };
}

function updatePlaybackProgressUi() {
    if (isScrubbingPlayback) return;

    const { currentTime, duration } = getPlaybackMetrics();
    playbackCurrentTime.textContent = formatTime(currentTime);
    playbackDuration.textContent = formatTime(duration);
    playbackProgress.disabled = !musicState.playingTrackId || duration <= 0;
    playbackProgress.value = duration > 0 ? (currentTime / duration) * 100 : 0;
}

function handlePlaybackScrub() {
    isScrubbingPlayback = true;
    const { duration } = getPlaybackMetrics();
    const previewTime = duration > 0 ? (Number(playbackProgress.value) / 100) * duration : 0;
    playbackCurrentTime.textContent = formatTime(previewTime);
}

function applyPlaybackScrub() {
    const { duration } = getPlaybackMetrics();
    const nextTime = duration > 0 ? (Number(playbackProgress.value) / 100) * duration : 0;
    seekPlayback(nextTime);
    isScrubbingPlayback = false;
    updatePlaybackProgressUi();
}

function seekPlayback(nextTime) {
    const playingTrack = getTrackById(musicState.playingTrackId);
    if (!playingTrack) return;

    if (playingTrack.sourceType === "youtube") {
        if (youtubePlayer && typeof youtubePlayer.seekTo === "function") {
            youtubePlayer.seekTo(nextTime, true);
        }
        return;
    }

    if (musicAudio.src) {
        musicAudio.currentTime = nextTime;
    }
}

function toggleRepeatMode() {
    musicState.repeatEnabled = !musicState.repeatEnabled;
    saveMusicState();
    updatePlaybackControls();
}

function toggleAutoplayMode() {
    musicState.autoplayEnabled = !musicState.autoplayEnabled;
    saveMusicState();
    updatePlaybackControls();
}

async function handleTrackEnded() {
    recordDisc.classList.remove("is-playing");

    if (musicState.repeatEnabled && musicState.playingTrackId) {
        await restartCurrentTrack();
        return;
    }

    if (musicState.autoplayEnabled && selectAdjacentTrackForPlayback(1)) {
        await playSelectedTrack();
        return;
    }

    musicState.playingTrackId = null;
    saveMusicState();
    syncPlaybackUi();
}

async function restartCurrentTrack() {
    const playingTrack = getTrackById(musicState.playingTrackId);
    if (!playingTrack) return;

    musicState.selectedTrackId = playingTrack.id;
    if (playingTrack.sourceType === "youtube") {
        const player = await ensureYoutubePlayer();
        if (!player) return;
        player.seekTo(0, true);
        player.playVideo();
    } else {
        musicAudio.currentTime = 0;
        try {
            await musicAudio.play();
        } catch {
            alert("반복 재생을 시작하지 못했습니다. 다시 눌러주세요.");
        }
    }

    syncPlaybackUi();
}

function selectAdjacentTrackForPlayback(direction) {
    const playlist = getCurrentPlaylist();
    if (!playlist || !playlist.trackIds.length) return false;

    const playingIndex = playlist.trackIds.indexOf(musicState.playingTrackId);
    const baseIndex = playingIndex === -1 ? playlist.trackIds.indexOf(musicState.selectedTrackId) : playingIndex;
    const nextIndex = baseIndex + direction;

    if (nextIndex < 0 || nextIndex >= playlist.trackIds.length) return false;

    musicState.selectedTrackId = playlist.trackIds[nextIndex];
    saveMusicState();
    renderMusicUI();
    return true;
}

function formatTime(seconds) {
    const totalSeconds = Math.max(0, Math.floor(seconds || 0));
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${String(secs).padStart(2, "0")}`;
}

function renderMusicUI() {
    renderPlaylistSwitcher();
    renderPlaylist();
    updatePlaybackTexts();
    updatePlaybackControls();
    updatePlaybackProgressUi();
    applyRecordAppearance();
    updateRecordStyleButton();
}

function renderPlaylist() {
    const playlist = getCurrentPlaylist();
    const trackIds = playlist ? playlist.trackIds : [];
    const selectedIndex = trackIds.indexOf(musicState.selectedTrackId);

    playlistItemsEl.innerHTML = "";

    if (!trackIds.length) {
        playlistUpBtn.disabled = true;
        playlistDownBtn.disabled = true;
        musicEmptyState.classList.remove("hidden");
        return;
    }

    musicEmptyState.classList.add("hidden");
    playlistUpBtn.disabled = selectedIndex <= 0;
    playlistDownBtn.disabled = selectedIndex === -1 || selectedIndex >= trackIds.length - 1;

    const slots = [
        { index: selectedIndex - 1, role: "prev" },
        { index: selectedIndex, role: "selected" },
        { index: selectedIndex + 1, role: "next" }
    ];

    slots.forEach(({ index, role }) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "playlist-item";

        if (index < 0 || index >= trackIds.length) {
            item.style.visibility = "hidden";
            item.textContent = "-";
        } else {
            const track = getTrackById(trackIds[index]);
            item.textContent = track ? track.name : "알 수 없는 음악";

            if (role === "selected") item.classList.add("is-selected");
            if (role === "prev") item.classList.add("is-prev");
            if (role === "next") item.classList.add("is-next");
            if (track && track.id === musicState.playingTrackId) item.classList.add("is-playing");

            item.onclick = () => {
                musicState.selectedTrackId = trackIds[index];
                saveMusicState();
                renderMusicUI();
            };
        }

        playlistItemsEl.appendChild(item);
    });

    playlistItemsEl.classList.remove("is-switching");
    void playlistItemsEl.offsetWidth;
    playlistItemsEl.classList.add("is-switching");
    if (playlistAnimationTimer) clearTimeout(playlistAnimationTimer);
    playlistAnimationTimer = setTimeout(() => {
        playlistItemsEl.classList.remove("is-switching");
    }, 420);
}

function updatePlaybackTexts() {
    const selectedTrack = getTrackById(musicState.selectedTrackId);
    const playingTrack = getTrackById(musicState.playingTrackId);
    const isPaused = isPlaybackPaused();

    recordHint.textContent = selectedTrack
        ? `선택된 음악: ${selectedTrack.name}`
        : "재생할 음악을 선택한 뒤 음반을 눌러주세요";

    if (playingTrack) {
        nowPlayingTitle.textContent = `${isPaused ? "일시정지:" : "재생 중:"} ${playingTrack.name}`;
    } else {
        nowPlayingTitle.textContent = "재생 중인 음악 없음";
    }
}

function renderLibraryPicker() {
    const playlist = getCurrentPlaylist();
    libraryPickerList.innerHTML = "";

    if (!musicState.library.length) {
        const empty = document.createElement("div");
        empty.className = "playlist-edit-subtitle";
        empty.textContent = "보관함에 추가된 노래가 아직 없습니다.";
        libraryPickerList.appendChild(empty);
        return;
    }

    musicState.library.forEach((track) => {
        const row = document.createElement("div");
        row.className = "library-picker-item";

        const meta = document.createElement("div");
        meta.className = "playlist-edit-meta";
        meta.innerHTML = `
            <div class="playlist-edit-title">${track.name}</div>
            <div class="library-picker-type">${track.sourceType === "youtube" ? "유튜브 링크" : "mp3 파일"}</div>
        `;

        const actions = document.createElement("div");
        actions.className = "library-picker-actions";

        const artBtn = document.createElement("button");
        artBtn.type = "button";
        artBtn.className = "mini-btn";
        artBtn.title = "이 곡 음반 이미지 업로드";
        artBtn.innerHTML = '<i class="fa-solid fa-compact-disc"></i>';
        artBtn.onclick = () => requestTrackArtUpload(track.id);

        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "nav-btn";
        const alreadyAdded = Boolean(playlist && playlist.trackIds.includes(track.id));
        addBtn.textContent = alreadyAdded ? "추가됨" : "재생목록에 추가";
        addBtn.disabled = alreadyAdded;
        addBtn.onclick = () => addTrackToCurrentPlaylist(track.id);

        actions.append(artBtn, addBtn);
        row.append(meta, actions);
        libraryPickerList.appendChild(row);
    });
}

function getEffectiveRecordStyle(track) {
    if (!track) return "classic";
    return track.customRecordArt ? "custom" : (musicState.globalRecordStyle || "classic");
}

function clearRecordStyleClasses(element) {
    element.classList.remove(
        "record-style-classic",
        "record-style-aurora",
        "record-style-silver",
        "record-style-sunset",
        "record-style-custom"
    );
}

function applyRecordAppearance() {
    const selectedTrack = getTrackById(musicState.selectedTrackId) || getTrackById(musicState.playingTrackId);
    const styleId = getEffectiveRecordStyle(selectedTrack);
    const effectId = musicState.recordEffect || "none";

    clearRecordStyleClasses(recordDisc);
    clearRecordStyleClasses(recordStylePreviewDisc);

    recordDisc.classList.add(`record-style-${styleId}`);
    recordStylePreviewDisc.classList.add(`record-style-${styleId}`);
    applyRecordEffectClasses(recordDisc, effectId);

    if (selectedTrack?.customRecordArt) {
        recordDisc.style.setProperty("--custom-record-art", `url("${selectedTrack.customRecordArt}")`);
        recordStylePreviewDisc.style.setProperty("--custom-record-art", `url("${selectedTrack.customRecordArt}")`);
    } else {
        recordDisc.style.removeProperty("--custom-record-art");
        recordStylePreviewDisc.style.removeProperty("--custom-record-art");
    }
}

function updateRecordStyleButton() {
    recordStyleBtn.disabled = false;
    recordStyleBtn.style.opacity = "1";
    applyRecordAppearance();
}

function openRecordStyleModal() {
    renderRecordStyleOptions();
    recordStyleModal.classList.remove("hidden");
}

function renderRecordStyleOptions() {
    const activeStyle = musicState.globalRecordStyle || "classic";
    recordStyleGrid.innerHTML = "";

    RECORD_STYLE_OPTIONS.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "record-style-option";
        if (activeStyle === option.id) {
            button.classList.add("is-active");
        }

        button.innerHTML = `
            <span class="record-style-preview">
                <span class="record-style-preview-disc record-style-${option.id}"></span>
            </span>
        `;
        button.onclick = () => setGlobalRecordStyle(option.id);
        recordStyleGrid.appendChild(button);
    });
}

function setGlobalRecordStyle(styleId) {
    musicState.globalRecordStyle = styleId;
    saveMusicState();
    renderRecordStyleOptions();
    renderMusicUI();
    renderLibraryPickerIfVisible();
}

function clearRecordEffectClasses(element) {
    element.classList.remove(
        "effect-none",
        "effect-rainbow-a",
        "effect-rainbow-b",
        "effect-rainbow-c",
        "effect-sky-glow",
        "effect-prism"
    );
}

function applyRecordEffectClasses(element, effectId) {
    clearRecordEffectClasses(element);
    element.classList.add(`effect-${effectId}`);
}

function openRecordEffectModal() {
    renderRecordEffectOptions();
    recordEffectModal.classList.remove("hidden");
}

function renderRecordEffectOptions() {
    const activeEffect = musicState.recordEffect || "none";
    recordEffectGrid.innerHTML = "";

    RECORD_EFFECT_OPTIONS.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "record-effect-option";
        if (activeEffect === option.id) {
            button.classList.add("is-active");
        }

        button.innerHTML = `
            <span class="record-effect-preview">
                <span class="record-effect-preview-disc effect-${option.id}"></span>
            </span>
        `;
        button.onclick = () => setGlobalRecordEffect(option.id);
        recordEffectGrid.appendChild(button);
    });
}

function setGlobalRecordEffect(effectId) {
    musicState.recordEffect = effectId;
    saveMusicState();
    renderRecordEffectOptions();
    renderMusicUI();
}

function initDraggablePanels() {
    document.querySelectorAll(".draggable-panel").forEach((panel) => {
        const handle = panel.querySelector(".draggable-handle");
        if (!handle) return;

        handle.addEventListener("pointerdown", (event) => {
            if (event.target.closest("button")) return;

            const rect = panel.getBoundingClientRect();
            panel.style.left = `${rect.left + rect.width / 2}px`;
            panel.style.top = `${rect.top + rect.height / 2}px`;
            panel.style.transform = "translate(-50%, -50%)";

            activeDragState = {
                panel,
                offsetX: event.clientX - rect.left,
                offsetY: event.clientY - rect.top
            };

            handle.setPointerCapture(event.pointerId);
        });

        handle.addEventListener("pointermove", (event) => {
            if (!activeDragState || activeDragState.panel !== panel) return;

            const nextLeft = event.clientX - activeDragState.offsetX;
            const nextTop = event.clientY - activeDragState.offsetY;
            const boundedLeft = Math.min(Math.max(nextLeft, 24), window.innerWidth - panel.offsetWidth - 24);
            const boundedTop = Math.min(Math.max(nextTop, 120), window.innerHeight - panel.offsetHeight - 24);

            panel.style.left = `${boundedLeft + panel.offsetWidth / 2}px`;
            panel.style.top = `${boundedTop + panel.offsetHeight / 2}px`;
        });

        const stopDragging = () => {
            if (activeDragState?.panel === panel) {
                activeDragState = null;
            }
        };

        handle.addEventListener("pointerup", stopDragging);
        handle.addEventListener("pointercancel", stopDragging);
    });
}

function requestTrackArtUpload(trackId) {
    pendingTrackArtTargetId = trackId;
    trackArtInput.value = "";
    trackArtInput.click();
}

function handleTrackArtUpload(event) {
    const file = event.target.files?.[0];
    const targetTrack = getTrackById(pendingTrackArtTargetId);
    if (!file || !targetTrack) return;
    if (file.size > MAX_TRACK_ART_SIZE) {
        alert("음반 이미지는 1.5MB 이하만 업로드할 수 있습니다. 이미지 크기를 줄여서 다시 시도해주세요.");
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        const previousArt = targetTrack.customRecordArt || "";
        targetTrack.customRecordArt = String(reader.result || "");

        if (!saveMusicState()) {
            targetTrack.customRecordArt = previousArt;
            alert("이미지 저장에 실패했습니다. 파일이 너무 크거나 브라우저 저장 공간이 부족할 수 있습니다.");
            return;
        }

        renderMusicUI();
        renderLibraryPickerIfVisible();
        if (!recordStyleModal.classList.contains("hidden") && musicState.selectedTrackId === targetTrack.id) {
            renderRecordStyleOptions();
        }
    };
    reader.readAsDataURL(file);
}

function renderLibraryPickerIfVisible() {
    if (!libraryPickerModal.classList.contains("hidden")) {
        renderLibraryPicker();
    }
}

function getVideoLibraryKeyForUser(userId) {
    return userId ? `${VIDEO_LIBRARY_KEY_PREFIX}:${userId}` : null;
}

function getScopedVideoLibraryKey() {
    return getVideoLibraryKeyForUser(getCurrentUserId());
}

function initVideoPage() {
    bindVideoEvents();
    loadVideoState();
    renderVideoUI();
}

function bindVideoEvents() {
    videoAddFab.onclick = () => openVideoAddModal();
    closeVideoAddBtn.onclick = () => videoAddModal.classList.add("hidden");
    saveVideoBtn.onclick = () => saveVideoEntry();
    videoSearchInput.addEventListener("input", () => {
        videoState.search = videoSearchInput.value.trim().toLowerCase();
        renderVideoUI();
    });
    videoTagFilterToggle.onclick = () => videoTagFilterPanel.classList.toggle("hidden");
    videoEditorTitle.addEventListener("input", updateCurrentVideoMeta);
    videoEditorDescription.addEventListener("input", updateCurrentVideoMeta);
    videoSaveMetaBtn.onclick = () => saveCurrentVideoMeta();
    videoAddTagBtn.onclick = () => addTagToCurrentVideo();
    videoTagInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addTagToCurrentVideo();
        }
    });
    videoCloseBtn.onclick = () => closeVideoViewer(true);
    videoMiniBtn.onclick = () => minimizeVideoViewer();
    miniVideoOpenBtn.onclick = () => restoreMiniVideo();
    miniVideoCloseBtn.onclick = () => closeVideoViewer(true);
    videoViewerBackdrop.onclick = () => closeVideoViewer(true);
    document.addEventListener("keydown", handleVideoViewerKeydown);
}

function loadVideoState() {
    const key = getScopedVideoLibraryKey();
    if (!key) {
        videoState.library = guestVideos;
        return;
    }

    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    videoState.library = Array.isArray(saved) ? saved : [];
}

function saveVideoState() {
    const key = getScopedVideoLibraryKey();
    if (!key) {
        guestVideos = [...videoState.library];
        return true;
    }

    try {
        localStorage.setItem(key, JSON.stringify(videoState.library));
        return true;
    } catch (error) {
        console.error("Failed to save video state", error);
        return false;
    }
}

function openVideoAddModal() {
    videoLinkInput.value = "";
    videoTitleInput.value = "";
    videoAddModal.classList.remove("hidden");
}

async function saveVideoEntry() {
    const youtubeUrl = videoLinkInput.value.trim();
    const youtubeId = extractYouTubeId(youtubeUrl);
    if (!youtubeId) {
        alert("올바른 유튜브 링크를 입력해주세요.");
        return;
    }

    let title = videoTitleInput.value.trim();
    if (!title) {
        title = await fetchYouTubeVideoTitle(youtubeUrl) || "유튜브 영상";
    }

    videoState.library.unshift({
        id: createId("video"),
        youtubeId,
        youtubeUrl,
        title,
        description: "",
        tags: []
    });

    saveVideoState();
    videoAddModal.classList.add("hidden");
    renderVideoUI();
}

async function fetchYouTubeVideoTitle(url) {
    try {
        const response = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(url)}`);
        if (!response.ok) return "";
        const data = await response.json();
        return data.title || "";
    } catch {
        return "";
    }
}

function renderVideoUI() {
    renderVideoGrid();
    renderVideoTagFilters();
    syncVideoViewer();
}

function getFilteredVideos() {
    const selectedTags = videoState.activeTags;
    const query = videoState.search;

    return videoState.library.filter((video) => {
        const haystack = `${video.title} ${video.description || ""} ${(video.tags || []).join(" ")}`.toLowerCase();
        const matchesQuery = !query || haystack.includes(query);
        const matchesTags = !selectedTags.length || selectedTags.every((tag) => (video.tags || []).includes(tag));
        return matchesQuery && matchesTags;
    });
}

function renderVideoGrid() {
    const videos = getFilteredVideos();
    videoGrid.innerHTML = "";

    if (!videos.length) {
        videoEmpty.classList.remove("hidden");
        return;
    }

    videoEmpty.classList.add("hidden");
    videos.forEach((video) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "video-card";
        card.innerHTML = `
            <div class="video-card-thumb">
                <img src="https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg" alt="${video.title}">
                <div class="video-card-overlay">
                    <div class="video-play-icon"><i class="fa-solid fa-play"></i></div>
                </div>
            </div>
            <div class="video-card-body">
                <div class="video-card-title">${escapeHtml(video.title)}</div>
                <div class="video-card-description">${escapeHtml((video.description || "").slice(0, 80) || "설명이 없습니다.")}</div>
                <div class="video-card-tags">${(video.tags || []).slice(0, 4).map((tag) => `<span class="video-card-tag">#${escapeHtml(tag)}</span>`).join("")}</div>
            </div>
        `;
        card.onclick = (event) => {
            event.stopPropagation();
            openVideoViewer(video.id);
        };
        videoGrid.appendChild(card);
    });
}

function renderVideoTagFilters() {
    const allTags = [...new Set(videoState.library.flatMap((video) => video.tags || []))];
    videoSelectedTags.innerHTML = "";
    videoAllTags.innerHTML = "";

    videoState.activeTags.forEach((tag) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "video-tag-chip is-active";
        chip.textContent = `#${tag}`;
        chip.onclick = () => toggleVideoTagFilter(tag);
        videoSelectedTags.appendChild(chip);
    });

    allTags.forEach((tag) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = `video-tag-chip${videoState.activeTags.includes(tag) ? " is-active" : ""}`;
        chip.textContent = `#${tag}`;
        chip.onclick = () => toggleVideoTagFilter(tag);
        videoAllTags.appendChild(chip);
    });
}

function toggleVideoTagFilter(tag) {
    if (videoState.activeTags.includes(tag)) {
        videoState.activeTags = videoState.activeTags.filter((item) => item !== tag);
    } else {
        videoState.activeTags = [...videoState.activeTags, tag];
    }
    renderVideoUI();
}

function openVideoViewer(videoId) {
    videoState.currentVideoId = videoId;
    videoState.isMiniPlayer = false;
    attachVideoPlayer(videoPlayerMainHost, true);
    videoViewer.classList.remove("hidden");
    miniVideoPlayer.classList.add("hidden");
    syncVideoViewer();
}

function attachVideoPlayer(host, autoplay) {
    const currentVideo = getCurrentVideo();
    if (!host || !currentVideo) return;
    const src = `https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`;
    if (videoPlayerFrame.parentElement !== host) {
        host.appendChild(videoPlayerFrame);
    }
    if (videoPlayerFrame.dataset.videoId !== currentVideo.youtubeId || videoPlayerFrame.src !== src) {
        videoPlayerFrame.src = src;
        videoPlayerFrame.dataset.videoId = currentVideo.youtubeId;
    }
    videoPlayerFrame.classList.remove("hidden");
}

function getCurrentVideo() {
    return videoState.library.find((video) => video.id === videoState.currentVideoId) || null;
}

function syncVideoViewer() {
    const currentVideo = getCurrentVideo();
    if (!currentVideo) {
        videoViewer.classList.add("hidden");
        if (!videoState.isMiniPlayer) {
            miniVideoPlayer.classList.add("hidden");
        }
        return;
    }

    videoEditorTitle.value = currentVideo.title || "";
    videoEditorDescription.value = currentVideo.description || "";
    miniVideoTitle.textContent = currentVideo.title || "영상 재생 중";
    renderCurrentVideoTags();

    if (videoState.isMiniPlayer) {
        attachVideoPlayer(videoPlayerMiniHost, true);
        miniVideoPlayer.classList.remove("hidden");
        videoViewer.classList.add("hidden");
    } else {
        attachVideoPlayer(videoPlayerMainHost, true);
        videoViewer.classList.remove("hidden");
    }
}

function renderCurrentVideoTags() {
    const currentVideo = getCurrentVideo();
    videoCurrentTags.innerHTML = "";
    if (!currentVideo) return;

    (currentVideo.tags || []).forEach((tag) => {
        const chip = document.createElement("span");
        chip.className = "video-current-tag";
        chip.innerHTML = `#${escapeHtml(tag)} <button type="button" aria-label="태그 삭제"><i class="fa-solid fa-xmark"></i></button>`;
        chip.querySelector("button").onclick = () => removeTagFromCurrentVideo(tag);
        videoCurrentTags.appendChild(chip);
    });
}

function updateCurrentVideoMeta() {
    const currentVideo = getCurrentVideo();
    if (!currentVideo) return;

    currentVideo.title = videoEditorTitle.value.trim() || currentVideo.title;
    currentVideo.description = videoEditorDescription.value.trim();
    renderVideoGrid();
    miniVideoTitle.textContent = currentVideo.title;
}

function saveCurrentVideoMeta() {
    updateCurrentVideoMeta();
    saveVideoState();
}

function addTagToCurrentVideo() {
    const currentVideo = getCurrentVideo();
    const tag = videoTagInput.value.trim();
    if (!currentVideo || !tag) return;

    currentVideo.tags = [...new Set([...(currentVideo.tags || []), tag])];
    videoTagInput.value = "";
    saveVideoState();
    renderCurrentVideoTags();
    renderVideoUI();
}

function removeTagFromCurrentVideo(tag) {
    const currentVideo = getCurrentVideo();
    if (!currentVideo) return;
    currentVideo.tags = (currentVideo.tags || []).filter((item) => item !== tag);
    saveVideoState();
    renderCurrentVideoTags();
    renderVideoUI();
}

function minimizeVideoViewer() {
    videoState.isMiniPlayer = true;
    syncVideoViewer();
}

function restoreMiniVideo() {
    videoState.isMiniPlayer = false;
    syncVideoViewer();
}

function closeVideoViewer(clearCurrent) {
    videoPlayerFrame.src = "";
    delete videoPlayerFrame.dataset.videoId;
    videoPlayerFrame.classList.add("hidden");
    videoViewer.classList.add("hidden");
    miniVideoPlayer.classList.add("hidden");
    if (clearCurrent) {
        videoState.currentVideoId = null;
        videoState.isMiniPlayer = false;
    }
}

function handleVideoViewerKeydown(event) {
    if (event.key !== "Escape") return;
    if (videoViewer.classList.contains("hidden")) return;
    if (videoState.isMiniPlayer) return;
    closeVideoViewer(true);
}

function escapeHtml(value) {
    return String(value || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}
