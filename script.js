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

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarClose = document.getElementById("sidebar-close");
const menuMain = document.getElementById("menu-main");
const menuMusic = document.getElementById("menu-music");
const sidebarItems = {
    "main-page": menuMain.closest("li"),
    "music-page": menuMusic.closest("li")
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

const youtubePlayerHost = document.getElementById("youtube-player-host");

const USERS_KEY = "magnusUsersV2";
const CURRENT_USER_KEY = "magnusCurrentUserV2";
const SHORTCUTS_KEY = "magnusShortcutsV2";
const MUSIC_LIBRARY_KEY_PREFIX = "musicLibraryMetaV3";
const MUSIC_STATE_KEY_PREFIX = "musicStateV3";
const MUSIC_DB_NAME = "magnusMusicDB";
const MUSIC_STORE_NAME = "tracks";
const DEFAULT_PLAYLIST_NAME = "기본 재생목록";

let pendingProfilePic = null;
let activeAudioUrl = null;
let musicDbPromise = null;
let guestTrackBlobs = new Map();
let musicAddSourceType = "youtube";
let youtubePlayer = null;
let youtubeApiPromise = null;
let youtubeReadyResolver = null;

let musicState = {
    library: [],
    playlists: [],
    currentPlaylistId: null,
    selectedTrackId: null,
    playingTrackId: null
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
};

function bindCoreEvents() {
    rainbowMode.onchange = (e) => applyBorderEffect(e.target.checked, borderColorInput.value);
    borderColorInput.oninput = (e) => applyBorderEffect(rainbowMode.checked, e.target.value);

    document.getElementById("profile-image-setup").onclick = () => imageInput.click();
    imageInput.onchange = handleProfileImageChange;

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
    document.getElementById("back-to-main").onclick = () => location.reload();
    document.getElementById("logo-main").onclick = () => location.reload();

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
    applyBorderEffect(isRainbow, savedColor);
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

function showPage(pageId) {
    ["main-page", "profile-page", "music-page"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
    });

    const target = document.getElementById(pageId);
    if (target) target.classList.remove("hidden");

    Object.values(sidebarItems).forEach((item) => item && item.classList.remove("active"));
    if (sidebarItems[pageId]) sidebarItems[pageId].classList.add("active");
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
        rainbowMode: false
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
    renderMusicUI();
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
    recordDisc.onclick = () => playSelectedTrack();

    editPlaylistBtn.onclick = () => openPlaylistEditor();
    closePlaylistEditorBtn.onclick = () => playlistEditorModal.classList.add("hidden");
    openLibraryPickerBtn.onclick = () => openLibraryPicker();
    closeLibraryPickerBtn.onclick = () => libraryPickerModal.classList.add("hidden");

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
        recordDisc.classList.add("is-playing");
        renderPlaylist();
        updatePlaybackTexts();
    });

    musicAudio.addEventListener("pause", () => {
        if (!isYoutubePlaying()) recordDisc.classList.remove("is-playing");
        renderPlaylist();
        updatePlaybackTexts();
    });

    musicAudio.addEventListener("ended", () => {
        if (!isYoutubePlaying()) recordDisc.classList.remove("is-playing");
        renderPlaylist();
        updatePlaybackTexts();
    });
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

    musicState.library = Array.isArray(savedLibrary) ? savedLibrary : [];
    musicState.playlists = Array.isArray(savedState.playlists) ? savedState.playlists : [];
    musicState.currentPlaylistId = savedState.currentPlaylistId || null;
    musicState.selectedTrackId = savedState.selectedTrackId || null;
    musicState.playingTrackId = savedState.playingTrackId || null;
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
        rainbowMode: localStorage.getItem("rainbowMode") === "true"
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

    if (!libraryKey || !stateKey) return;

    localStorage.setItem(libraryKey, JSON.stringify(musicState.library));
    localStorage.setItem(stateKey, JSON.stringify({
        playlists: musicState.playlists,
        currentPlaylistId: musicState.currentPlaylistId,
        selectedTrackId: musicState.selectedTrackId,
        playingTrackId: musicState.playingTrackId
    }));
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
            sourceType: "file"
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
    renderMusicUI();
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
    player.loadVideoById(track.youtubeId);
    youtubePlayerHost.classList.remove("hidden");
    renderMusicUI();
}

async function ensureYoutubePlayer() {
    await loadYoutubeApi();

    if (youtubePlayer) return youtubePlayer;

    youtubePlayer = new window.YT.Player("youtube-player", {
        width: "0",
        height: "0",
        videoId: "",
        playerVars: { autoplay: 1, controls: 0 },
        events: {
            onStateChange: handleYoutubeStateChange
        }
    });

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
        recordDisc.classList.add("is-playing");
    } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
        recordDisc.classList.remove("is-playing");
    }

    if (event.data === window.YT.PlayerState.ENDED) {
        renderPlaylist();
        updatePlaybackTexts();
    }
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
    const storageKey = getScopedTrackStorageKey(trackId);

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(MUSIC_STORE_NAME, "readwrite");
        transaction.objectStore(MUSIC_STORE_NAME).put(blob, storageKey);
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

async function getTrackBlob(trackId) {
    if (!isLoggedInUser()) {
        return guestTrackBlobs.get(trackId) || null;
    }

    const db = await openMusicDb();
    const storageKey = getScopedTrackStorageKey(trackId);

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(MUSIC_STORE_NAME, "readonly");
        const request = transaction.objectStore(MUSIC_STORE_NAME).get(storageKey);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error);
    });
}
