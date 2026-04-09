const userNameDisplay = document.getElementById("user-name");
const navProfileGroup = document.getElementById("nav-profile-group");
const headerProfileImg = document.getElementById("header-profile-img");
const defaultAvatar = document.getElementById("default-avatar");
const headerImgWrapper = document.getElementById("header-profile-img-wrapper");

const shortcutGrid = document.getElementById("shortcut-grid");
const addShortcutBtn = document.getElementById("add-shortcut-btn");

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

const musicFileInput = document.getElementById("music-file-input");
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

const playlistEditorModal = document.getElementById("playlist-editor-modal");
const closePlaylistEditorBtn = document.getElementById("close-playlist-editor");
const playlistEditorSelect = document.getElementById("playlist-editor-select");
const playlistNameInput = document.getElementById("playlist-name-input");
const newPlaylistBtn = document.getElementById("new-playlist-btn");
const renamePlaylistBtn = document.getElementById("rename-playlist-btn");
const deletePlaylistBtn = document.getElementById("delete-playlist-btn");
const playlistEditList = document.getElementById("playlist-edit-list");

const MUSIC_LIBRARY_KEY_PREFIX = "musicLibraryMetaV2";
const MUSIC_STATE_KEY_PREFIX = "musicStateV2";
const MUSIC_DB_NAME = "magnusMusicDB";
const MUSIC_STORE_NAME = "tracks";
const DEFAULT_PLAYLIST_NAME = "기본 재생목록";

let pendingProfilePic = null;
let activeAudioUrl = null;
let musicDbPromise = null;
let guestTrackBlobs = new Map();

let musicState = {
    library: [],
    playlists: [],
    currentPlaylistId: null,
    selectedTrackId: null,
    playingTrackId: null
};

window.onload = function() {
    loadSettings();
    renderShortcuts();
    initMusicPage();
};

function loadSettings() {
    const savedId = localStorage.getItem("savedId");
    const savedPic = localStorage.getItem("userProfilePic");
    const savedColor = localStorage.getItem("profileBorderColor") || "#000000";
    const isRainbow = localStorage.getItem("rainbowMode") === "true";

    if (savedId) {
        document.getElementById("nav-signup-btn").classList.add("hidden");
        document.getElementById("nav-login-btn").classList.add("hidden");
        navProfileGroup.classList.remove("hidden");
        userNameDisplay.innerText = savedId;
    } else {
        document.getElementById("nav-signup-btn").classList.remove("hidden");
        document.getElementById("nav-login-btn").classList.remove("hidden");
        navProfileGroup.classList.add("hidden");
    }

    if (savedPic) updateProfileDisplay(savedPic);
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

rainbowMode.onchange = (e) => applyBorderEffect(e.target.checked, borderColorInput.value);
borderColorInput.oninput = (e) => applyBorderEffect(rainbowMode.checked, e.target.value);

document.getElementById("profile-image-setup").onclick = () => imageInput.click();
imageInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
        alert("이미지 용량이 너무 큽니다. 2MB 이하를 권장합니다.");
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
        const imageData = ev.target.result;
        updateProfileDisplay(imageData);
        pendingProfilePic = imageData;
    };
    reader.readAsDataURL(file);
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

document.getElementById("nav-signup-btn").onclick = () => {
    document.getElementById("auth-container").classList.remove("hidden");
};

document.getElementById("nav-login-btn").onclick = () => {
    document.getElementById("login-container").classList.remove("hidden");
};

document.getElementById("complete-signup").onclick = () => {
    const id = document.getElementById("signup-id").value.trim();
    const pw = document.getElementById("signup-pw").value.trim();
    if (!id || !pw) return alert("아이디와 비밀번호를 모두 입력해주세요!");

    localStorage.setItem("savedId", id);
    localStorage.setItem("savedPw", pw);
    document.getElementById("signup-id").value = "";
    document.getElementById("signup-pw").value = "";
    document.getElementById("auth-container").classList.add("hidden");
    alert("회원가입이 완료되었습니다.");
    location.reload();
};

document.getElementById("submit-login").onclick = () => {
    const id = document.getElementById("login-id").value.trim();
    const pw = document.getElementById("login-pw").value.trim();
    const savedId = localStorage.getItem("savedId");
    const savedPw = localStorage.getItem("savedPw");

    if (!id || !pw) return alert("아이디와 비밀번호를 모두 입력해주세요!");

    if (id === savedId && pw === savedPw) {
        document.getElementById("login-id").value = "";
        document.getElementById("login-pw").value = "";
        document.getElementById("login-container").classList.add("hidden");
        alert("로그인되었습니다.");
        location.reload();
    } else {
        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
};

addShortcutBtn.onclick = () => {
    document.getElementById("shortcut-modal").classList.remove("hidden");
};

document.getElementById("save-shortcut").onclick = () => {
    const name = document.getElementById("shortcut-name").value.trim();
    const url = document.getElementById("shortcut-url").value.trim();
    if (!name || !url) return alert("이름과 URL을 모두 입력해주세요!");

    const shortcuts = JSON.parse(localStorage.getItem("shortcuts") || "[]");
    shortcuts.push({ name, url });
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
    document.getElementById("shortcut-name").value = "";
    document.getElementById("shortcut-url").value = "";
    document.getElementById("shortcut-modal").classList.add("hidden");
    renderShortcuts();
};

function renderShortcuts() {
    const list = JSON.parse(localStorage.getItem("shortcuts") || "[]");
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
        deleteBtn.innerHTML = "×";
        deleteBtn.title = "삭제";
        deleteBtn.type = "button";
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
            const shortcuts = JSON.parse(localStorage.getItem("shortcuts") || "[]");
            shortcuts.splice(index, 1);
            localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
            renderShortcuts();
        };

        wrapper.addEventListener("mouseenter", () => { deleteBtn.style.display = "flex"; });
        wrapper.addEventListener("mouseleave", () => { deleteBtn.style.display = "none"; });

        wrapper.appendChild(a);
        wrapper.appendChild(deleteBtn);
        shortcutGrid.insertBefore(wrapper, addShortcutBtn);
    });
}

const saveSettingsBtn = document.getElementById("save-settings");
if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener("click", () => {
        try {
            const newId = document.getElementById("change-id").value.trim();
            const newPw = document.getElementById("change-pw").value.trim();
            if (newId) localStorage.setItem("savedId", newId);
            if (newPw) localStorage.setItem("savedPw", newPw);
            if (pendingProfilePic) localStorage.setItem("userProfilePic", pendingProfilePic);
            localStorage.setItem("rainbowMode", rainbowMode.checked);
            localStorage.setItem("profileBorderColor", borderColorInput.value);
            alert("설정이 저장되었습니다!");
            location.reload();
        } catch (error) {
            alert("저장 공간이 부족하거나 오류가 발생했습니다. 사진 크기를 줄여보세요.");
        }
    });
}

document.getElementById("nav-profile-btn").onclick = () => showPage("profile-page");
document.getElementById("back-to-main").onclick = () => location.reload();
document.getElementById("logo-main").onclick = () => location.reload();

window.onclick = (e) => {
    if (e.target.classList.contains("auth-overlay")) {
        e.target.classList.add("hidden");
    }
};

async function initMusicPage() {
    bindMusicEvents();
    await loadMusicState();
    renderMusicUI();
}

function bindMusicEvents() {
    addMusicBtn.onclick = () => musicFileInput.click();

    musicFileInput.onchange = async (e) => {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;
        await addMusicFiles(files);
        musicFileInput.value = "";
    };

    playlistPrevBtn.onclick = () => switchPlaylist(-1);
    playlistNextBtn.onclick = () => switchPlaylist(1);
    playlistUpBtn.onclick = () => moveSelection(-1);
    playlistDownBtn.onclick = () => moveSelection(1);
    recordDisc.onclick = () => playSelectedTrack();

    editPlaylistBtn.onclick = () => openPlaylistEditor();
    closePlaylistEditorBtn.onclick = () => playlistEditorModal.classList.add("hidden");

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
        recordDisc.classList.remove("is-playing");
        renderPlaylist();
        updatePlaybackTexts();
    });

    musicAudio.addEventListener("ended", () => {
        recordDisc.classList.remove("is-playing");
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

function getCurrentUserId() {
    return localStorage.getItem("savedId") || null;
}

function isLoggedInUser() {
    return Boolean(getCurrentUserId());
}

function getScopedMusicLibraryKey() {
    const userId = getCurrentUserId();
    return userId ? `${MUSIC_LIBRARY_KEY_PREFIX}:${userId}` : null;
}

function getScopedMusicStateKey() {
    const userId = getCurrentUserId();
    return userId ? `${MUSIC_STATE_KEY_PREFIX}:${userId}` : null;
}

function getScopedTrackStorageKey(trackId) {
    const userId = getCurrentUserId();
    return userId ? `${userId}::${trackId}` : trackId;
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

async function addMusicFiles(files) {
    const playlist = getCurrentPlaylist();
    if (!playlist) return;

    for (const file of files) {
        const trackId = createId("track");
        await saveTrackBlob(trackId, file);
        musicState.library.push({
            id: trackId,
            name: file.name.replace(/\.[^.]+$/, "") || file.name,
            originalName: file.name
        });
        playlist.trackIds.push(trackId);
    }

    normalizeSelectedTrack();
    saveMusicState();
    renderMusicUI();
    openPlaylistEditorIfVisible();
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
    } catch (error) {
        alert("브라우저가 재생을 시작하지 못했습니다. 다시 눌러주세요.");
    }

    renderMusicUI();
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
