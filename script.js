const userNameDisplay = document.getElementById("user-name");
const welcomeText = document.getElementById("welcome-text");
const welcomeToolbar = document.getElementById("welcome-toolbar");
const welcomeToolbarResetBtn = document.getElementById("welcome-toolbar-reset");
const welcomeTextColorInput = document.getElementById("welcome-text-color");
const welcomeFontSizeInput = document.getElementById("welcome-font-size");
const welcomeStrokeColorInput = document.getElementById("welcome-stroke-color");
const welcomeFontFamilySelect = document.getElementById("welcome-font-family");
const welcomeNeonToggle = document.getElementById("welcome-neon-toggle");
const shortcutToolbar = document.getElementById("shortcut-toolbar");
const shortcutTextColorInput = document.getElementById("shortcut-text-color");
const shortcutFontSizeInput = document.getElementById("shortcut-font-size");
const shortcutStrokeColorInput = document.getElementById("shortcut-stroke-color");
const shortcutFontFamilySelect = document.getElementById("shortcut-font-family");
const shortcutNeonToggle = document.getElementById("shortcut-neon-toggle");
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
const mainEditControls = document.getElementById("main-edit-controls");
const mainEditStartBtn = document.getElementById("main-edit-start-btn");
const mainEditSaveBtn = document.getElementById("main-edit-save-btn");
const mainEditCancelBtn = document.getElementById("main-edit-cancel-btn");
const mainEditResetBtn = document.getElementById("main-edit-reset-btn");
const mainContent = document.querySelector(".main-content");
const mainCustomLayer = document.getElementById("main-custom-layer");
const mainEditContextMenu = document.getElementById("main-edit-context-menu");
const mainAddTextBtn = document.getElementById("main-add-text-btn");
const mainAddImageBtn = document.getElementById("main-add-image-btn");
const mainCustomImageInput = document.getElementById("main-custom-image-input");
const mainSizeToolbar = document.getElementById("main-size-toolbar");
const mainSizeToolbarLabel = document.getElementById("main-size-toolbar-label");
const mainSizeRange = document.getElementById("main-size-range");
const mainSizeNeonColor = document.getElementById("main-size-neon-color");
const mainSizeNeonIntensity = document.getElementById("main-size-neon-intensity");
const mainSizeDeleteBtn = document.getElementById("main-size-delete-btn");
const mainLogoDeleteBtn = document.getElementById("main-logo-delete-btn");
const welcomeDeleteBtn = document.getElementById("welcome-delete-btn");
const mainPresetToggleBtn = document.getElementById("main-preset-toggle-btn");
const mainPresetPanel = document.getElementById("main-preset-panel");
const presetSaveButtons = document.querySelectorAll(".preset-save-btn");
const presetApplyButtons = document.querySelectorAll(".preset-apply-btn");

const profilePreview = document.getElementById("profile-preview");
const previewPlus = document.getElementById("preview-plus");
const imageInput = document.getElementById("image-input");
const profileImageLibrary = document.getElementById("profile-image-library");
const rainbowMode = document.getElementById("rainbow-mode");
const borderColorInput = document.getElementById("profile-border-color");
const backgroundImageSetupBtn = document.getElementById("background-image-setup");
const resetBackgroundImageBtn = document.getElementById("reset-background-image");
const backgroundImageInput = document.getElementById("background-image-input");
const backgroundImageLibrary = document.getElementById("background-image-library");
const applyHeaderWallpaperInput = document.getElementById("apply-header-wallpaper");
const musicBackgroundOpacityInput = document.getElementById("music-background-opacity");
const mainLogoWrap = document.getElementById("main-logo-wrap");
const mainCenterLogo = document.getElementById("main-center-logo");
const logoNeonHoverPanel = document.getElementById("logo-neon-hover-panel");
const logoNeonHoverColorInput = document.getElementById("logo-neon-hover-color");
const cursorStyleSelect = document.getElementById("cursor-style-select");
const showShortcutsToggle = document.getElementById("show-shortcuts-toggle");
const settingsTabAccount = document.getElementById("settings-tab-account");
const settingsTabEnvironment = document.getElementById("settings-tab-environment");
const settingsPanelAccount = document.getElementById("settings-panel-account");
const settingsPanelEnvironment = document.getElementById("settings-panel-environment");
const profileCropModal = document.getElementById("profile-crop-modal");
const closeProfileCropBtn = document.getElementById("close-profile-crop");
const profileCropStage = document.getElementById("profile-crop-stage");
const profileCropImage = document.getElementById("profile-crop-image");
const profileCropZoom = document.getElementById("profile-crop-zoom");
const saveProfileCropBtn = document.getElementById("save-profile-crop");
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
const playbackVolume = document.getElementById("header-playback-volume");
const navVolumeBtn = document.getElementById("nav-volume-btn");
const headerVolumePanel = document.getElementById("header-volume-panel");
const repeatToggleBtn = document.getElementById("repeat-toggle");
const autoplayToggleBtn = document.getElementById("autoplay-toggle");
const musicStyleEditBtn = document.getElementById("music-style-edit-btn");
const musicStyleCloseBtn = document.getElementById("music-style-close-btn");
const musicStylePanel = document.getElementById("music-style-panel");
const musicBarBgColorInput = document.getElementById("music-bar-bg-color");
const musicBarBorderColorInput = document.getElementById("music-bar-border-color");
const musicBarNeonColorInput = document.getElementById("music-bar-neon-color");
const musicBarOpacityInput = document.getElementById("music-bar-opacity");
const musicBarOpacityFillInput = document.getElementById("music-bar-opacity-fill");
const musicBarOpacityBorderInput = document.getElementById("music-bar-opacity-border");
const musicBarOpacityNeonInput = document.getElementById("music-bar-opacity-neon");
const musicTextColorInput = document.getElementById("music-text-color");
const musicTextStrokeColorInput = document.getElementById("music-text-stroke-color");
const musicTextNeonColorInput = document.getElementById("music-text-neon-color");
const musicTextOpacityInput = document.getElementById("music-text-opacity");
const musicTextOpacityFillInput = document.getElementById("music-text-opacity-fill");
const musicTextOpacityBorderInput = document.getElementById("music-text-opacity-border");
const musicTextOpacityNeonInput = document.getElementById("music-text-opacity-neon");
const musicNowColorInput = document.getElementById("music-now-color");
const musicNowStrokeColorInput = document.getElementById("music-now-stroke-color");
const musicNowNeonColorInput = document.getElementById("music-now-neon-color");
const musicNowOpacityInput = document.getElementById("music-now-opacity");
const musicNowOpacityFillInput = document.getElementById("music-now-opacity-fill");
const musicNowOpacityBorderInput = document.getElementById("music-now-opacity-border");
const musicNowOpacityNeonInput = document.getElementById("music-now-opacity-neon");
const musicProgressColorInput = document.getElementById("music-progress-color");
const musicProgressBorderColorInput = document.getElementById("music-progress-border-color");
const musicProgressNeonColorInput = document.getElementById("music-progress-neon-color");
const musicProgressOpacityInput = document.getElementById("music-progress-opacity");
const musicProgressOpacityFillInput = document.getElementById("music-progress-opacity-fill");
const musicProgressOpacityBorderInput = document.getElementById("music-progress-opacity-border");
const musicProgressOpacityNeonInput = document.getElementById("music-progress-opacity-neon");
const musicRecordNeonColorInput = document.getElementById("music-record-neon-color");
const musicRecordOpacityInput = document.getElementById("music-record-opacity");
const musicRecordOpacityFillInput = document.getElementById("music-record-opacity-fill");
const musicRecordOpacityBorderInput = document.getElementById("music-record-opacity-border");
const musicRecordOpacityNeonInput = document.getElementById("music-record-opacity-neon");
const musicActionBgColorInput = document.getElementById("music-action-bg-color");
const musicActionBorderColorInput = document.getElementById("music-action-border-color");
const musicActionNeonColorInput = document.getElementById("music-action-neon-color");
const musicActionOpacityInput = document.getElementById("music-action-opacity");
const musicActionOpacityFillInput = document.getElementById("music-action-opacity-fill");
const musicActionOpacityBorderInput = document.getElementById("music-action-opacity-border");
const musicActionOpacityNeonInput = document.getElementById("music-action-opacity-neon");
const musicActionTextColorInput = document.getElementById("music-action-text-color");
const musicActionTextStrokeColorInput = document.getElementById("music-action-text-stroke-color");
const musicActionTextNeonColorInput = document.getElementById("music-action-text-neon-color");
const musicActionTextOpacityInput = document.getElementById("music-action-text-opacity");
const musicActionTextOpacityFillInput = document.getElementById("music-action-text-opacity-fill");
const musicActionTextOpacityBorderInput = document.getElementById("music-action-text-opacity-border");
const musicActionTextOpacityNeonInput = document.getElementById("music-action-text-opacity-neon");
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
const trackBackgroundInput = document.getElementById("track-background-input");
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
let pendingProfileCrop = null;
let pendingBackgroundImage = null;
let pendingBackgroundReset = false;
let isEditingWelcomeText = false;
let welcomeToolbarDefaultsApplied = false;
let welcomeCompositionStart = null;
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
let pendingTrackBackgroundTargetId = null;
let lastAppliedMusicBackground = "";
let playlistAnimationTimer = null;
let lastRenderedPlaylistIndex = null;
let activeDragState = null;
let guestVideos = [];
let profileCropDraft = null;
let profileCropDragState = null;
let isEditingShortcutText = false;
let activeShortcutTextEl = null;
let currentShortcutEditingId = null;
let shortcutCompositionStart = null;
let isMainEditMode = false;
let mainEditSnapshot = null;
let mainContextMenuPoint = { x: 50, y: 50 };
let mainDragState = null;
let activeCustomTextId = null;
let customTextCompositionStart = null;
let activeSizeTarget = null;
let suppressMainEditClickUntil = 0;

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
const MAX_TRACK_BACKGROUND_SIZE = 1024 * 1024 * 4;
const MAX_PROFILE_IMAGE_SIZE = 1024 * 1024 * 8;
const MAX_BACKGROUND_IMAGE_SIZE = 1024 * 1024 * 12;

let musicState = {
    library: [],
    playlists: [],
    currentPlaylistId: null,
    selectedTrackId: null,
    playingTrackId: null,
    musicTheme: getDefaultMusicTheme(),
    globalRecordStyle: "classic",
    recordEffect: "none",
    repeatEnabled: false,
    autoplayEnabled: false,
    volume: 1
};
let videoState = {
    library: [],
    search: "",
    activeTags: [],
    currentVideoId: null,
    isMiniPlayer: false
};
let currentWelcomeToolState = getDefaultWelcomeToolState();
let currentShortcutToolState = getDefaultShortcutToolState();
let isMusicStyleEditMode = false;

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
    closeProfileCropBtn.onclick = () => closeProfileCropModal();
    profileCropZoom.oninput = () => {
        if (!profileCropDraft) return;
        profileCropDraft.crop.scale = Number(profileCropZoom.value);
        renderProfileCropStage();
    };
    saveProfileCropBtn.onclick = commitProfileCropSelection;
    profileCropStage.addEventListener("pointerdown", handleProfileCropPointerDown);
    profileCropStage.addEventListener("pointermove", handleProfileCropPointerMove);
    profileCropStage.addEventListener("pointerup", stopProfileCropDragging);
    profileCropStage.addEventListener("pointercancel", stopProfileCropDragging);
    backgroundImageSetupBtn.onclick = () => backgroundImageInput.click();
    backgroundImageInput.onchange = handleBackgroundImageChange;
    resetBackgroundImageBtn.onclick = resetBackgroundImage;
    applyHeaderWallpaperInput.onchange = () => {
        const wallpaper = pendingBackgroundImage !== null
            ? pendingBackgroundImage
            : (getCurrentUser()?.backgroundImage || "");
        applySiteWallpaper(wallpaper, applyHeaderWallpaperInput.checked);
    };
    musicBackgroundOpacityInput.oninput = () => {
        applyMusicBackgroundOpacity(Number(musicBackgroundOpacityInput.value || 100) / 100);
    };
    navVolumeBtn.onclick = (event) => {
        event.stopPropagation();
        headerVolumePanel.classList.toggle("hidden");
    };
    mainLogoWrap.addEventListener("click", (event) => {
        if (!isMainEditMode) return;
        event.stopPropagation();
        logoNeonHoverPanel.classList.toggle("hidden");
    });
    logoNeonHoverColorInput.oninput = () => {
        applyLogoNeonColor(logoNeonHoverColorInput.value);
        persistLogoNeonColor(logoNeonHoverColorInput.value);
    };
    logoNeonHoverColorInput.onchange = () => {
        applyLogoNeonColor(logoNeonHoverColorInput.value);
        persistLogoNeonColor(logoNeonHoverColorInput.value);
    };
    cursorStyleSelect.onchange = () => applyCursorStyle(cursorStyleSelect.value);
    settingsTabAccount.onclick = () => switchSettingsTab("account");
    settingsTabEnvironment.onclick = () => switchSettingsTab("environment");
    userNameDisplay.onclick = () => {
        if (!isMainEditMode) return;
        if (Date.now() < suppressMainEditClickUntil) return;
        startWelcomeTextEditing();
    };
    userNameDisplay.onkeydown = (event) => {
        if (!isMainEditMode) return;
        if (isEditingWelcomeText) return;
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            startWelcomeTextEditing();
        }
    };
    userNameDisplay.addEventListener("beforeinput", handleWelcomeBeforeInput);
    userNameDisplay.addEventListener("paste", handleWelcomePaste);
    userNameDisplay.addEventListener("keydown", handleWelcomeEditorKeydown);
    userNameDisplay.addEventListener("compositionstart", handleWelcomeCompositionStart);
    userNameDisplay.addEventListener("compositionend", handleWelcomeCompositionEnd);
    document.addEventListener("mousedown", handleWelcomeEditorOutsideClick);
    document.addEventListener("mousedown", handleCustomTextOutsideClick);
    welcomeToolbarResetBtn.onclick = resetWelcomeToolbarPosition;
    welcomeTextColorInput.oninput = () => { currentWelcomeToolState.color = welcomeTextColorInput.value; };
    welcomeFontSizeInput.oninput = () => { currentWelcomeToolState.fontSize = Number(welcomeFontSizeInput.value); };
    welcomeStrokeColorInput.oninput = () => { currentWelcomeToolState.strokeColor = welcomeStrokeColorInput.value; };
    welcomeFontFamilySelect.onchange = () => { currentWelcomeToolState.fontFamily = welcomeFontFamilySelect.value; };
    welcomeNeonToggle.onchange = () => { currentWelcomeToolState.neon = welcomeNeonToggle.checked; };
    document.addEventListener("mousedown", handleShortcutEditorOutsideClick);
    shortcutTextColorInput.oninput = () => { currentShortcutToolState.color = shortcutTextColorInput.value; };
    shortcutFontSizeInput.oninput = () => { currentShortcutToolState.fontSize = Number(shortcutFontSizeInput.value); };
    shortcutStrokeColorInput.oninput = () => { currentShortcutToolState.strokeColor = shortcutStrokeColorInput.value; };
    shortcutFontFamilySelect.onchange = () => { currentShortcutToolState.fontFamily = shortcutFontFamilySelect.value; };
    shortcutNeonToggle.onchange = () => { currentShortcutToolState.neon = shortcutNeonToggle.checked; };
    window.addEventListener("resize", () => {
        if (isEditingWelcomeText && welcomeToolbar.classList.contains("hidden") === false) {
            resetWelcomeToolbarPosition();
        }
        if (isEditingShortcutText && shortcutToolbar.classList.contains("hidden") === false) {
            positionShortcutToolbarDefault();
        }
    });

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

    addShortcutBtn.onclick = () => {
        if (!isMainEditMode) return;
        shortcutModal.classList.remove("hidden");
    };
    document.getElementById("save-shortcut").onclick = saveShortcut;
    mainEditStartBtn.onclick = enterMainEditMode;
    mainEditSaveBtn.onclick = completeMainEditMode;
    mainEditCancelBtn.onclick = cancelMainEditMode;
    mainEditResetBtn.onclick = resetMainEditToDefault;
    mainPresetToggleBtn.onclick = (event) => {
        event.stopPropagation();
        mainPresetPanel.classList.toggle("hidden");
        renderMainPresetPanel();
    };
    presetSaveButtons.forEach((button) => {
        button.onclick = () => saveMainPresetSlot(Number(button.dataset.slot));
    });
    presetApplyButtons.forEach((button) => {
        button.onclick = () => applyMainPresetSlot(Number(button.dataset.slot));
    });
    mainContent.addEventListener("contextmenu", handleMainContentContextMenu);
    mainAddTextBtn.onclick = addCustomTextAtContextPoint;
    mainAddImageBtn.onclick = () => {
        mainEditContextMenu.classList.add("hidden");
        mainCustomImageInput.click();
    };
    mainCustomImageInput.onchange = handleCustomImagePick;
    mainSizeRange.oninput = handleMainSizeChange;
    if (mainSizeNeonColor) mainSizeNeonColor.oninput = handleMainImageNeonChange;
    if (mainSizeNeonIntensity) mainSizeNeonIntensity.oninput = handleMainImageNeonChange;
    mainSizeDeleteBtn.onclick = handleMainSizeDelete;
    mainLogoWrap.addEventListener("pointerdown", (event) => handleMainItemPointerDown(event, "logo"));
    welcomeText.addEventListener("pointerdown", (event) => handleMainItemPointerDown(event, "welcome"));
    mainLogoDeleteBtn.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        deleteBaseMainItem("logo");
    };
    welcomeDeleteBtn.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        deleteBaseMainItem("welcome");
    };
    shortcutGrid.addEventListener("pointerdown", (event) => handleMainItemPointerDown(event, "shortcuts"));
    shortcutGrid.addEventListener("click", (event) => {
        if (!isMainEditMode) return;
        if (Date.now() < suppressMainEditClickUntil) return;
        if (event.target.closest(".editable-shortcut-text") || event.target.closest("#add-shortcut-btn")) return;
        event.stopPropagation();
        openSizeToolbarFor({ type: "shortcuts" }, event.clientX, event.clientY);
    });
    mainLogoWrap.addEventListener("click", (event) => {
        if (!isMainEditMode) return;
        if (Date.now() < suppressMainEditClickUntil) return;
        event.stopPropagation();
        openSizeToolbarFor({ type: "logo" }, event.clientX, event.clientY);
    });

    const saveSettingsBtn = document.getElementById("save-settings");
    if (saveSettingsBtn) saveSettingsBtn.addEventListener("click", saveProfileSettings);

    document.getElementById("nav-profile-btn").onclick = () => showPage("profile-page");
    navLogoutBtn.onclick = handleLogout;
    document.getElementById("back-to-main").onclick = () => showPage("main-page");
    document.getElementById("logo-main").onclick = () => showPage("main-page");

    window.onclick = (e) => {
        if (!headerVolumePanel.classList.contains("hidden") && !headerVolumePanel.contains(e.target) && !navVolumeBtn.contains(e.target)) {
            headerVolumePanel.classList.add("hidden");
        }
        if (!logoNeonHoverPanel.classList.contains("hidden") && !mainLogoWrap.contains(e.target)) {
            logoNeonHoverPanel.classList.add("hidden");
        }
        if (!mainEditContextMenu.classList.contains("hidden") && !mainEditContextMenu.contains(e.target)) {
            mainEditContextMenu.classList.add("hidden");
        }
        if (!mainPresetPanel.classList.contains("hidden") && !mainPresetPanel.contains(e.target) && !mainPresetToggleBtn.contains(e.target)) {
            mainPresetPanel.classList.add("hidden");
        }
        if (!mainSizeToolbar.classList.contains("hidden") && !mainSizeToolbar.contains(e.target)) {
            mainSizeToolbar.classList.add("hidden");
        }
        if (e.target.classList.contains("auth-overlay")) {
            e.target.classList.add("hidden");
        }
    };
    window.addEventListener("pointermove", handleMainItemPointerMove);
    window.addEventListener("pointerup", stopMainItemDragging);
}

function loadSettings() {
    const currentUser = getCurrentUser();
    const savedColor = currentUser?.borderColor || "#000000";
    const isRainbow = Boolean(currentUser?.rainbowMode);
    const wallpaperImage = currentUser?.backgroundImage || "";
    const applyHeaderWallpaper = Boolean(currentUser?.applyHeaderWallpaper);
    const logoNeonColor = currentUser?.logoNeonColor || "";
    const cursorStyle = currentUser?.cursorStyle || "default";
    const showShortcuts = currentUser?.showShortcuts !== false;
    const musicBackgroundOpacity = Number.isFinite(currentUser?.musicBackgroundOpacity)
        ? Math.min(1, Math.max(0, currentUser.musicBackgroundOpacity))
        : 1;
    const welcomeMessage = currentUser?.welcomeMessage || (currentUser ? `${currentUser.id}님 환영합니다` : "아무개님 환영합니다");

    if (currentUser) {
        document.getElementById("nav-signup-btn").classList.add("hidden");
        document.getElementById("nav-login-btn").classList.add("hidden");
        navProfileGroup.classList.remove("hidden");
        userNameDisplay.innerText = welcomeMessage;
    } else {
        document.getElementById("nav-signup-btn").classList.remove("hidden");
        document.getElementById("nav-login-btn").classList.remove("hidden");
        navProfileGroup.classList.add("hidden");
        userNameDisplay.innerText = "아무개님 환영합니다";
    }

    if (currentUser?.profilePic) {
        updateProfileDisplay(currentUser.profilePic, currentUser.profilePicCrop);
    } else {
        clearProfileDisplay();
    }

    rainbowMode.checked = isRainbow;
    borderColorInput.value = savedColor;
    applyHeaderWallpaperInput.checked = applyHeaderWallpaper;
    logoNeonHoverColorInput.value = logoNeonColor || "#62e7ff";
    cursorStyleSelect.value = cursorStyle;
    showShortcutsToggle.checked = showShortcuts;
    musicBackgroundOpacityInput.value = String(Math.round(musicBackgroundOpacity * 100));
    pendingBackgroundImage = null;
    pendingBackgroundReset = false;
    applyBorderEffect(isRainbow, savedColor);
    applySiteWallpaper(wallpaperImage, applyHeaderWallpaper);
    applyMusicBackgroundOpacity(musicBackgroundOpacity);
    applyCursorStyle(cursorStyle);
    applyLogoNeonColor(logoNeonColor);
    renderWelcomeMessage(currentUser);
    applyMainPageLayout(currentUser);
    renderProfileImageLibrary(currentUser);
    renderBackgroundImageLibrary(currentUser);
    renderMainPresetPanel();
    updateMainEditModeUI();
}

function updateProfileDisplay(picData, cropData = null) {
    [headerProfileImg, profilePreview].forEach((img) => {
        img.src = picData;
        img.classList.remove("hidden");
        applyProfileCropStyles(img, cropData);
    });
    [defaultAvatar, previewPlus].forEach((el) => el.classList.add("hidden"));
}

function addImageToHistory(list = [], imageData, limit = 12) {
    if (!imageData) return Array.isArray(list) ? list : [];
    const normalized = Array.isArray(list) ? list.filter(Boolean) : [];
    const next = [imageData, ...normalized.filter((item) => item !== imageData)];
    return next.slice(0, limit);
}

function renderProfileImageLibrary(user = getCurrentUser()) {
    if (!profileImageLibrary) return;
    const items = Array.isArray(user?.profileImageHistory) ? user.profileImageHistory : [];
    profileImageLibrary.innerHTML = "";
    items.forEach((src) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "image-history-item";
        btn.innerHTML = `<img src="${src}" alt="프로필 후보">`;
        btn.onclick = () => {
            openProfileCropModal(src, pendingProfileCrop || user?.profilePicCrop || getDefaultProfileCrop());
        };
        profileImageLibrary.appendChild(btn);
    });
}

function renderBackgroundImageLibrary(user = getCurrentUser()) {
    if (!backgroundImageLibrary) return;
    const items = Array.isArray(user?.backgroundImageHistory) ? user.backgroundImageHistory : [];
    backgroundImageLibrary.innerHTML = "";
    items.forEach((src) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "image-history-item";
        btn.innerHTML = `<img src="${src}" alt="배경 후보">`;
        btn.onclick = () => {
            pendingBackgroundImage = src;
            pendingBackgroundReset = false;
            applySiteWallpaper(src, applyHeaderWallpaperInput.checked);
        };
        backgroundImageLibrary.appendChild(btn);
    });
}

function clearProfileDisplay() {
    [headerProfileImg, profilePreview].forEach((img) => {
        img.src = "";
        img.classList.add("hidden");
        applyProfileCropStyles(img, null);
    });
    [defaultAvatar, previewPlus].forEach((el) => el.classList.remove("hidden"));
}

function getDefaultProfileCrop() {
    return { scale: 1, offsetX: 0, offsetY: 0 };
}

function applyProfileCropStyles(img, cropData) {
    const crop = { ...getDefaultProfileCrop(), ...(cropData || {}) };
    img.style.objectPosition = `${50 + crop.offsetX}% ${50 + crop.offsetY}%`;
    img.style.transform = `scale(${crop.scale})`;
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
    pageHeader.style.setProperty("background-color", "#ffffff", "important");
    pageHeader.style.setProperty("background-image", imageData && applyToHeader
        ? `linear-gradient(rgba(255,255,255,0.76), rgba(255,255,255,0.76)), url(${imageData})`
        : "none", "important");
    pageHeader.style.setProperty("background-position", "center", "important");
    pageHeader.style.setProperty("background-size", "cover", "important");
    pageHeader.style.setProperty("background-repeat", "no-repeat", "important");
}

function applyMusicBackgroundOpacity(opacityValue) {
    const nextOpacity = Number.isFinite(opacityValue) ? Math.min(1, Math.max(0, opacityValue)) : 1;
    document.documentElement.style.setProperty("--music-track-bg-opacity", String(nextOpacity));
}

function applyLogoNeonColor(color) {
    document.documentElement.style.setProperty("--logo-neon-color", color || "rgba(98, 231, 255, 0)");
}

function getMainPageLayoutForUser(user = getCurrentUser()) {
    return {
        ...getDefaultMainPageLayout(),
        ...(user?.mainPageLayout || {}),
        logo: {
            ...getDefaultMainPageLayout().logo,
            ...(user?.mainPageLayout?.logo || {})
        },
        welcome: {
            ...getDefaultMainPageLayout().welcome,
            ...(user?.mainPageLayout?.welcome || {})
        },
        shortcuts: {
            ...getDefaultMainPageLayout().shortcuts,
            ...(user?.mainPageLayout?.shortcuts || {})
        },
        customTexts: Array.isArray(user?.mainPageLayout?.customTexts) ? user.mainPageLayout.customTexts : [],
        customImages: Array.isArray(user?.mainPageLayout?.customImages) ? user.mainPageLayout.customImages : []
    };
}

function saveMainPageLayout(layout) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const users = getUsers();
    const index = users.findIndex((user) => user.id === currentUser.id);
    if (index === -1) return;
    users[index].mainPageLayout = layout;
    saveUsers(users);
}

function updateMainPageLayout(updater) {
    const currentUser = getCurrentUser();
    if (!currentUser) return null;
    const layout = getMainPageLayoutForUser(currentUser);
    const nextLayout = typeof updater === "function" ? updater(layout) : updater;
    saveMainPageLayout(nextLayout);
    return nextLayout;
}

function applyMainPageLayout(user = getCurrentUser()) {
    const layout = getMainPageLayoutForUser(user);
    const showShortcuts = user?.showShortcuts !== false;
    mainLogoWrap.style.left = `${layout.logo.x}%`;
    mainLogoWrap.style.top = `${layout.logo.y}%`;
    mainLogoWrap.style.transform = "translate(-50%, -50%)";
    mainCenterLogo.style.width = `${660 * (layout.logo.scale / 100)}px`;
    mainLogoWrap.classList.toggle("hidden", Boolean(layout.logo.hidden));

    welcomeText.style.left = `${layout.welcome.x}%`;
    welcomeText.style.top = `${layout.welcome.y}%`;
    welcomeText.style.transform = "translate(-50%, -50%)";
    welcomeText.classList.toggle("hidden", Boolean(layout.welcome.hidden));

    shortcutGrid.style.left = `${layout.shortcuts.x}%`;
    shortcutGrid.style.top = `${layout.shortcuts.y}%`;
    shortcutGrid.style.transform = `translate(-50%, -50%) scale(${layout.shortcuts.scale / 100})`;
    shortcutGrid.classList.toggle("hidden", !showShortcuts);
    renderCustomMainItems(layout);
}

function renderCustomMainItems(layout = getMainPageLayoutForUser()) {
    if (!mainCustomLayer) return;
    mainCustomLayer.innerHTML = "";

    layout.customTexts.forEach((item) => {
        const wrapper = document.createElement("div");
        wrapper.className = "main-custom-item";
        wrapper.dataset.type = "custom-text";
        wrapper.dataset.id = item.id;
        wrapper.style.left = `${item.x}%`;
        wrapper.style.top = `${item.y}%`;
        wrapper.style.transform = "translate(-50%, -50%)";

        const label = document.createElement("div");
        label.className = "main-custom-text editable-welcome";
        label.innerHTML = item.html || escapeHtml(item.text || "새 문구");
        if (!item.html) {
            const toolState = { ...getDefaultWelcomeToolState(), ...(item.toolState || {}) };
            label.style.color = toolState.color;
            label.style.fontSize = `${toolState.fontSize}px`;
            label.style.fontFamily = toolState.fontFamily;
            label.style.webkitTextStroke = `1px ${toolState.strokeColor}`;
            label.style.textShadow = toolState.neon
                ? `0 0 8px ${toolState.color}, 0 0 18px ${toolState.color}`
                : "none";
        }
        label.tabIndex = 0;
        label.setAttribute("role", "button");
        label.addEventListener("click", (event) => {
            if (!isMainEditMode) return;
            if (Date.now() < suppressMainEditClickUntil) return;
            event.stopPropagation();
            startCustomTextEditing(label, item.id);
        });
        label.addEventListener("keydown", (event) => {
            if (!isMainEditMode) return;
            if (!activeCustomTextId) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    startCustomTextEditing(label, item.id);
                }
                return;
            }
            handleCustomTextEditorKeydown(event);
        });
        label.addEventListener("beforeinput", handleCustomTextBeforeInput);
        label.addEventListener("paste", handleCustomTextPaste);
        label.addEventListener("compositionstart", handleCustomTextCompositionStart);
        label.addEventListener("compositionend", handleCustomTextCompositionEnd);

        wrapper.appendChild(label);
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "main-custom-delete";
        deleteBtn.textContent = "×";
        deleteBtn.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            deleteCustomMainItem("custom-text", item.id);
        });
        wrapper.appendChild(deleteBtn);
        wrapper.addEventListener("pointerdown", (event) => handleMainItemPointerDown(event, "custom-text", item.id));
        mainCustomLayer.appendChild(wrapper);
    });

    layout.customImages.forEach((item) => {
        const wrapper = document.createElement("div");
        wrapper.className = "main-custom-item";
        wrapper.dataset.type = "custom-image";
        wrapper.dataset.id = item.id;
        wrapper.style.left = `${item.x}%`;
        wrapper.style.top = `${item.y}%`;
        wrapper.style.transform = "translate(-50%, -50%)";

        const img = document.createElement("img");
        img.className = "main-custom-image";
        img.src = item.src;
        img.alt = item.alt || "Custom";
        img.style.width = `${item.width || 240}px`;
        img.style.setProperty("--image-neon-color", item.neonColor || "#62e7ff");
        img.style.setProperty("--image-neon-alpha", String(item.neonIntensity ?? 0.55));

        wrapper.appendChild(img);
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "main-custom-delete";
        deleteBtn.textContent = "×";
        deleteBtn.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            deleteCustomMainItem("custom-image", item.id);
        });
        wrapper.appendChild(deleteBtn);
        wrapper.addEventListener("click", (event) => {
            if (!isMainEditMode) return;
            if (Date.now() < suppressMainEditClickUntil) return;
            event.stopPropagation();
            openSizeToolbarFor({ type: "custom-image", id: item.id }, event.clientX, event.clientY);
        });
        wrapper.addEventListener("pointerdown", (event) => handleMainItemPointerDown(event, "custom-image", item.id));
        mainCustomLayer.appendChild(wrapper);
    });
}

function persistLogoNeonColor(color) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const users = getUsers();
    const index = users.findIndex((user) => user.id === currentUser.id);
    if (index === -1) return;
    users[index].logoNeonColor = color;
    saveUsers(users);
}

function applyCursorStyle(cursorStyle) {
    document.body.style.cursor = cursorStyle || "default";
}

function updateMainEditModeUI() {
    document.body.classList.toggle("is-main-edit-mode", isMainEditMode);
    mainEditStartBtn.classList.toggle("hidden", isMainEditMode);
    mainEditSaveBtn.classList.toggle("hidden", !isMainEditMode);
    mainEditCancelBtn.classList.toggle("hidden", !isMainEditMode);
    mainEditResetBtn.classList.toggle("hidden", !isMainEditMode);
    if (!isMainEditMode) {
        shortcutModal.classList.add("hidden");
        mainPresetPanel.classList.add("hidden");
        shortcutToolbar.classList.add("hidden");
        welcomeToolbar.classList.add("hidden");
        welcomeToolbarResetBtn.classList.add("hidden");
        logoNeonHoverPanel.classList.add("hidden");
        mainEditContextMenu.classList.add("hidden");
        mainSizeToolbar.classList.add("hidden");
    }
}

function cloneMainEditSnapshot() {
    return {
        userId: getCurrentUserId(),
        users: JSON.parse(JSON.stringify(getUsers())),
        shortcuts: JSON.parse(JSON.stringify(getShortcuts())),
        presetPanelOpen: !mainPresetPanel.classList.contains("hidden")
    };
}

function restoreMainEditSnapshot(snapshot) {
    if (!snapshot) return;
    saveUsers(snapshot.users);
    localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(snapshot.shortcuts));
    const user = snapshot.userId
        ? snapshot.users.find((item) => item.id === snapshot.userId) || null
        : null;
    renderWelcomeMessage(user);
    renderShortcuts();
    applyLogoNeonColor(user?.logoNeonColor || "");
    logoNeonHoverColorInput.value = user?.logoNeonColor || "#62e7ff";
    applyMainPageLayout(user);
    if (snapshot.presetPanelOpen) {
        renderMainPresetPanel();
        mainPresetPanel.classList.remove("hidden");
    }
}

function enterMainEditMode() {
    if (isMainEditMode) return;
    mainEditSnapshot = cloneMainEditSnapshot();
    isMainEditMode = true;
    updateMainEditModeUI();
    renderShortcuts();
}

function completeMainEditMode() {
    if (!isMainEditMode) return;
    if (isEditingWelcomeText) finishWelcomeTextEditing(true);
    if (isEditingShortcutText) finishShortcutTextEditing(true);
    mainEditSnapshot = null;
    isMainEditMode = false;
    updateMainEditModeUI();
    renderShortcuts();
}

function cancelMainEditMode() {
    if (!isMainEditMode) return;
    if (isEditingWelcomeText) finishWelcomeTextEditing(false);
    if (isEditingShortcutText) finishShortcutTextEditing(false);
    if (activeCustomTextId) finishCustomTextEditing(false);
    restoreMainEditSnapshot(mainEditSnapshot);
    mainEditSnapshot = null;
    isMainEditMode = false;
    updateMainEditModeUI();
}

function resetMainEditToDefault() {
    if (!isMainEditMode) return;
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const fallback = getDefaultWelcomeMessage(currentUser);
    const defaultToolState = getDefaultWelcomeToolState();
    updateMainPageLayout(getDefaultMainPageLayout());
    const users = getUsers();
    const index = users.findIndex((user) => user.id === currentUser.id);
    if (index !== -1) {
        users[index].welcomeMessage = fallback;
        users[index].welcomeMessageHtml = escapeHtml(fallback);
        users[index].welcomeToolState = { ...defaultToolState };
        users[index].logoNeonColor = "";
        saveUsers(users);
    }
    currentWelcomeToolState = defaultToolState;
    applyWelcomeToolbarState();
    applyLogoNeonColor("");
    logoNeonHoverColorInput.value = "#62e7ff";
    renderWelcomeMessage(getCurrentUser());
    applyMainPageLayout(getCurrentUser());
}

function getMainPagePresets(user = getCurrentUser()) {
    const presets = Array.isArray(user?.mainPagePresets) ? user.mainPagePresets : [];
    return Array.from({ length: 3 }, (_, index) => presets[index] || null);
}

function renderMainPresetPanel() {
    const presets = getMainPagePresets();
    document.querySelectorAll(".main-preset-slot").forEach((slotEl, index) => {
        const hasPreset = Boolean(presets[index]);
        slotEl.querySelector("strong").textContent = hasPreset ? `프리셋 ${index + 1} 저장됨` : `프리셋 ${index + 1}`;
        const applyBtn = slotEl.querySelector(".preset-apply-btn");
        applyBtn.disabled = !hasPreset;
        applyBtn.style.opacity = hasPreset ? "1" : "0.55";
    });
}

function saveMainPresetSlot(index) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        alert("로그인 후 프리셋을 저장할 수 있습니다.");
        return;
    }
    if (isEditingWelcomeText) finishWelcomeTextEditing(true);
    if (isEditingShortcutText) finishShortcutTextEditing(true);
    if (activeCustomTextId) finishCustomTextEditing(true);
    const users = getUsers();
    const userIndex = users.findIndex((user) => user.id === currentUser.id);
    if (userIndex === -1) return;
    const presets = getMainPagePresets(currentUser);
    presets[index] = {
        layout: getMainPageLayoutForUser(currentUser),
        shortcuts: JSON.parse(JSON.stringify(getShortcuts())),
        welcomeMessage: currentUser.welcomeMessage || getDefaultWelcomeMessage(currentUser),
        welcomeMessageHtml: currentUser.welcomeMessageHtml || escapeHtml(getDefaultWelcomeMessage(currentUser)),
        welcomeToolState: { ...getStoredWelcomeToolState(currentUser) },
        logoNeonColor: currentUser.logoNeonColor || "#62e7ff",
        showShortcuts: currentUser.showShortcuts !== false
    };
    users[userIndex].mainPagePresets = presets;
    saveUsers(users);
    renderMainPresetPanel();
}

function applyMainPresetSlot(index) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        alert("로그인 후 프리셋을 불러올 수 있습니다.");
        return;
    }
    const presets = getMainPagePresets(currentUser);
    const preset = presets[index];
    if (!preset) return;
    const users = getUsers();
    const userIndex = users.findIndex((user) => user.id === currentUser.id);
    if (userIndex === -1) return;
    users[userIndex].mainPageLayout = preset.layout;
    users[userIndex].welcomeMessage = preset.welcomeMessage;
    users[userIndex].welcomeMessageHtml = preset.welcomeMessageHtml;
    users[userIndex].welcomeToolState = preset.welcomeToolState;
    users[userIndex].logoNeonColor = preset.logoNeonColor;
    users[userIndex].showShortcuts = preset.showShortcuts;
    saveUsers(users);
    localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(preset.shortcuts || []));
    loadSettings();
    renderShortcuts();
}

function handleMainContentContextMenu(event) {
    if (!isMainEditMode) return;
    if (!getCurrentUser()) return;
    event.preventDefault();
    const rect = mainContent.getBoundingClientRect();
    mainContextMenuPoint = {
        x: clamp(((event.clientX - rect.left) / rect.width) * 100, 4, 96),
        y: clamp(((event.clientY - rect.top) / rect.height) * 100, 8, 92)
    };
    mainEditContextMenu.style.left = `${event.clientX}px`;
    mainEditContextMenu.style.top = `${event.clientY}px`;
    mainEditContextMenu.classList.remove("hidden");
}

function addCustomTextAtContextPoint() {
    if (!isMainEditMode || !getCurrentUser()) return;
    mainEditContextMenu.classList.add("hidden");
    const nextId = `text-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    updateMainPageLayout((layout) => ({
        ...layout,
        customTexts: [
            ...layout.customTexts,
            {
                id: nextId,
                x: mainContextMenuPoint.x,
                y: mainContextMenuPoint.y,
                text: "새 문구",
                html: escapeHtml("새 문구"),
                toolState: getDefaultWelcomeToolState()
            }
        ]
    }));
    applyMainPageLayout();
    requestAnimationFrame(() => {
        const label = mainCustomLayer.querySelector(`[data-id="${nextId}"] .main-custom-text`);
        if (label) startCustomTextEditing(label, nextId);
    });
}

function handleCustomImagePick(event) {
    if (!isMainEditMode || !getCurrentUser()) return;
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (file.size > MAX_BACKGROUND_IMAGE_SIZE) {
        alert("이미지 용량이 너무 큽니다. 12MB 이하 이미지를 사용해주세요.");
        return;
    }
    const reader = new FileReader();
    reader.onload = () => {
        const nextId = `image-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        updateMainPageLayout((layout) => ({
            ...layout,
            customImages: [
                ...layout.customImages,
                {
                    id: nextId,
                    x: mainContextMenuPoint.x,
                    y: mainContextMenuPoint.y,
                    width: 240,
                    neonColor: "#62e7ff",
                    neonIntensity: 0.55,
                    src: reader.result,
                    alt: file.name
                }
            ]
        }));
        applyMainPageLayout();
        openSizeToolbarFor({ type: "custom-image", id: nextId }, window.innerWidth / 2, window.innerHeight - 120);
    };
    reader.readAsDataURL(file);
}

function deleteCustomMainItem(type, id) {
    if (!isMainEditMode) return;
    if (type === "custom-text" && activeCustomTextId === id) {
        activeCustomTextId = null;
        welcomeToolbar.classList.add("hidden");
        welcomeToolbarResetBtn.classList.add("hidden");
    }
    updateMainPageLayout((layout) => ({
        ...layout,
        customTexts: type === "custom-text" ? layout.customTexts.filter((item) => item.id !== id) : layout.customTexts,
        customImages: type === "custom-image" ? layout.customImages.filter((item) => item.id !== id) : layout.customImages
    }));
    applyMainPageLayout();
}

function deleteBaseMainItem(type) {
    if (!isMainEditMode) return;
    if (type === "welcome" && isEditingWelcomeText) {
        finishWelcomeTextEditing(false);
    }
    updateMainPageLayout((layout) => ({
        ...layout,
        logo: type === "logo" ? { ...layout.logo, hidden: true } : layout.logo,
        welcome: type === "welcome" ? { ...layout.welcome, hidden: true } : layout.welcome
    }));
    applyMainPageLayout();
}

function handleMainItemPointerDown(event, type, id = null) {
    if (!isMainEditMode) return;
    if (event.target.closest("[contenteditable='true']")) return;
    if (event.target.closest("#logo-neon-hover-panel")) return;
    event.preventDefault();
    const rect = mainContent.getBoundingClientRect();
    mainDragState = {
        type,
        id,
        rect,
        pointerId: event.pointerId,
        moved: false
    };
}

function handleMainItemPointerMove(event) {
    if (!mainDragState || mainDragState.pointerId !== event.pointerId) return;
    mainDragState.moved = true;
    const { rect, type, id } = mainDragState;
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 4, 96);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 8, 92);
    updateMainPageLayout((layout) => {
        const next = {
            ...layout,
            logo: { ...layout.logo },
            welcome: { ...layout.welcome },
            shortcuts: { ...layout.shortcuts },
            customTexts: [...layout.customTexts],
            customImages: [...layout.customImages]
        };
        if (type === "logo") {
            next.logo.x = x;
            next.logo.y = y;
        } else if (type === "welcome") {
            next.welcome.x = x;
            next.welcome.y = y;
        } else if (type === "shortcuts") {
            next.shortcuts.x = x;
            next.shortcuts.y = y;
        } else if (type === "custom-text") {
            next.customTexts = next.customTexts.map((item) => item.id === id ? { ...item, x, y } : item);
        } else if (type === "custom-image") {
            next.customImages = next.customImages.map((item) => item.id === id ? { ...item, x, y } : item);
        }
        return next;
    });
    applyMainPageLayout();
}

function stopMainItemDragging() {
    if (mainDragState?.moved) {
        suppressMainEditClickUntil = Date.now() + 180;
    }
    mainDragState = null;
}

function openSizeToolbarFor(target, clientX, clientY) {
    if (!isMainEditMode || !getCurrentUser()) return;
    activeSizeTarget = target;
    const layout = getMainPageLayoutForUser();
    let label = "크기";
    let value = 100;
    let deletable = false;
    if (target.type === "logo") {
        label = "로고 크기";
        value = layout.logo.scale || 100;
        if (mainSizeNeonColor) mainSizeNeonColor.value = getCurrentUser()?.logoNeonColor || "#62e7ff";
        if (mainSizeNeonIntensity) mainSizeNeonIntensity.value = "70";
    } else if (target.type === "shortcuts") {
        label = "즐겨찾기 크기";
        value = layout.shortcuts.scale || 100;
        if (mainSizeNeonColor) mainSizeNeonColor.value = "#62e7ff";
        if (mainSizeNeonIntensity) mainSizeNeonIntensity.value = "0";
    } else if (target.type === "custom-image") {
        const item = layout.customImages.find((entry) => entry.id === target.id);
        label = "이미지 크기";
        value = Math.round(((item?.width || 240) / 240) * 100);
        deletable = true;
        if (mainSizeNeonColor) mainSizeNeonColor.value = item?.neonColor || "#62e7ff";
        if (mainSizeNeonIntensity) mainSizeNeonIntensity.value = String(Math.round((item?.neonIntensity ?? 0.55) * 100));
    }
    mainSizeToolbarLabel.textContent = label;
    mainSizeRange.value = String(clamp(value, 40, 220));
    mainSizeDeleteBtn.classList.toggle("hidden", !deletable);
    mainSizeToolbar.style.left = `${clientX}px`;
    mainSizeToolbar.style.top = `${clientY + 18}px`;
    mainSizeToolbar.classList.remove("hidden");
}

function handleMainSizeChange() {
    if (!activeSizeTarget) return;
    const nextValue = Number(mainSizeRange.value);
    updateMainPageLayout((layout) => {
        const next = {
            ...layout,
            logo: { ...layout.logo },
            shortcuts: { ...layout.shortcuts },
            customImages: [...layout.customImages]
        };
        if (activeSizeTarget.type === "logo") {
            next.logo.scale = nextValue;
        } else if (activeSizeTarget.type === "shortcuts") {
            next.shortcuts.scale = nextValue;
        } else if (activeSizeTarget.type === "custom-image") {
            next.customImages = next.customImages.map((item) =>
                item.id === activeSizeTarget.id ? { ...item, width: Math.round(240 * (nextValue / 100)) } : item
            );
        }
        return next;
    });
    applyMainPageLayout();
}

function handleMainImageNeonChange() {
    if (!activeSizeTarget || !mainSizeNeonColor || !mainSizeNeonIntensity) return;
    const neonColor = mainSizeNeonColor.value;
    const neonIntensity = Number(mainSizeNeonIntensity.value) / 100;

    if (activeSizeTarget.type === "logo") {
        logoNeonHoverColorInput.value = neonColor;
        applyLogoNeonColor(neonColor);
        return;
    }

    if (activeSizeTarget.type !== "custom-image") return;
    updateMainPageLayout((layout) => ({
        ...layout,
        customImages: layout.customImages.map((item) =>
            item.id === activeSizeTarget.id ? { ...item, neonColor, neonIntensity } : item
        )
    }));
    applyMainPageLayout();
}

function handleMainSizeDelete() {
    if (!activeSizeTarget || activeSizeTarget.type !== "custom-image") return;
    updateMainPageLayout((layout) => ({
        ...layout,
        customImages: layout.customImages.filter((item) => item.id !== activeSizeTarget.id)
    }));
    mainSizeToolbar.classList.add("hidden");
    activeSizeTarget = null;
    applyMainPageLayout();
}

function switchSettingsTab(tab) {
    const isAccount = tab === "account";
    settingsTabAccount.classList.toggle("is-active", isAccount);
    settingsTabEnvironment.classList.toggle("is-active", !isAccount);
    settingsPanelAccount.classList.toggle("hidden", !isAccount);
    settingsPanelEnvironment.classList.toggle("hidden", isAccount);
    settingsPanelAccount.classList.toggle("is-active", isAccount);
    settingsPanelEnvironment.classList.toggle("is-active", !isAccount);
}

function handleProfileImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("이미지 파일만 업로드할 수 있습니다.");
        e.target.value = "";
        return;
    }

    if (file.size > MAX_PROFILE_IMAGE_SIZE) {
        alert("프로필 이미지는 8MB 이하로 업로드해주세요. 움직이는 이미지는 용량이 큰 경우가 많습니다.");
        e.target.value = "";
        return;
    }

    if (file.size > 2 * 1024 * 1024) {
        alert("움직이는 이미지를 포함해 프로필 사진은 8MB 이하까지 사용할 수 있습니다. 현재 파일은 조금 큰 편입니다.");
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
        const imageData = ev.target.result;
        const currentUser = getCurrentUser();
        if (currentUser) {
            const users = getUsers();
            const index = users.findIndex((user) => user.id === currentUser.id);
            if (index !== -1) {
                users[index].profileImageHistory = addImageToHistory(users[index].profileImageHistory, imageData);
                saveUsers(users);
                renderProfileImageLibrary(users[index]);
            }
        }
        openProfileCropModal(imageData, pendingProfileCrop || getCurrentUser()?.profilePicCrop || getDefaultProfileCrop());
    };
    reader.readAsDataURL(file);
    e.target.value = "";
}

function handleBackgroundImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("이미지 파일만 업로드할 수 있습니다.");
        event.target.value = "";
        return;
    }

    if (file.size > MAX_BACKGROUND_IMAGE_SIZE) {
        alert("배경화면 이미지는 12MB 이하로 업로드해주세요. 움직이는 배경은 용량이 클 수 있습니다.");
        event.target.value = "";
        return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
        pendingBackgroundImage = ev.target.result;
        pendingBackgroundReset = false;
        const currentUser = getCurrentUser();
        if (currentUser) {
            const users = getUsers();
            const index = users.findIndex((user) => user.id === currentUser.id);
            if (index !== -1) {
                users[index].backgroundImageHistory = addImageToHistory(users[index].backgroundImageHistory, pendingBackgroundImage);
                saveUsers(users);
                renderBackgroundImageLibrary(users[index]);
            }
        }
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

function openProfileCropModal(imageData, initialCrop) {
    profileCropDraft = {
        imageData,
        crop: { ...getDefaultProfileCrop(), ...(initialCrop || {}) }
    };
    profileCropImage.src = imageData;
    profileCropZoom.value = String(profileCropDraft.crop.scale);
    renderProfileCropStage();
    profileCropModal.classList.remove("hidden");
}

function closeProfileCropModal() {
    profileCropModal.classList.add("hidden");
    profileCropDragState = null;
    profileCropDraft = null;
}

function renderProfileCropStage() {
    if (!profileCropDraft) return;
    applyProfileCropStyles(profileCropImage, profileCropDraft.crop);
}

function commitProfileCropSelection() {
    if (!profileCropDraft) return;
    pendingProfilePic = profileCropDraft.imageData;
    pendingProfileCrop = { ...profileCropDraft.crop };
    updateProfileDisplay(profileCropDraft.imageData, pendingProfileCrop);
    closeProfileCropModal();
}

function handleProfileCropPointerDown(event) {
    if (!profileCropDraft) return;
    profileCropDragState = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        originX: profileCropDraft.crop.offsetX,
        originY: profileCropDraft.crop.offsetY
    };
    profileCropStage.setPointerCapture(event.pointerId);
}

function handleProfileCropPointerMove(event) {
    if (!profileCropDragState || profileCropDragState.pointerId !== event.pointerId || !profileCropDraft) return;
    const dx = event.clientX - profileCropDragState.startX;
    const dy = event.clientY - profileCropDragState.startY;
    const width = profileCropStage.clientWidth || 1;
    const height = profileCropStage.clientHeight || 1;
    profileCropDraft.crop.offsetX = clamp(profileCropDragState.originX + (dx / width) * 100, -80, 80);
    profileCropDraft.crop.offsetY = clamp(profileCropDragState.originY + (dy / height) * 100, -80, 80);
    renderProfileCropStage();
}

function stopProfileCropDragging() {
    profileCropDragState = null;
}

function getDefaultWelcomeMessage(user) {
    return user ? `${user.id}님 환영합니다` : "아무개님 환영합니다";
}

function getDefaultWelcomeToolState() {
    return {
        color: "#111111",
        fontSize: 40,
        strokeColor: "#111111",
        fontFamily: "'Noto Sans KR', sans-serif",
        neon: false
    };
}

function getDefaultShortcutToolState() {
    return {
        color: "#333333",
        fontSize: 13,
        strokeColor: "#333333",
        fontFamily: "'Noto Sans KR', sans-serif",
        neon: false
    };
}

function getDefaultMusicTheme() {
    return {
        bar: {
            fillColor: "#ffffff",
            borderColor: "#111111",
            neonColor: "#74d6ff",
            fillOpacity: 0.9,
            borderOpacity: 0.48,
            neonOpacity: 0.22,
            opacityTargets: { fill: true, border: false, neon: false }
        },
        text: {
            fillColor: "#111111",
            strokeColor: "#111111",
            neonColor: "#74d6ff",
            fillOpacity: 1,
            strokeOpacity: 0.7,
            neonOpacity: 0.18,
            opacityTargets: { fill: true, border: false, neon: false }
        },
        now: {
            fillColor: "#111111",
            strokeColor: "#111111",
            neonColor: "#74d6ff",
            fillOpacity: 1,
            strokeOpacity: 0.7,
            neonOpacity: 0.18,
            opacityTargets: { fill: true, border: false, neon: false }
        },
        progress: {
            fillColor: "#69d2ff",
            borderColor: "#69d2ff",
            neonColor: "#69d2ff",
            fillOpacity: 1,
            borderOpacity: 0.8,
            neonOpacity: 0.24,
            opacityTargets: { fill: true, border: false, neon: false }
        },
        record: {
            neonColor: "#74d6ff",
            fillOpacity: 1,
            borderOpacity: 0.04,
            neonOpacity: 0.32,
            opacityTargets: { fill: true, border: false, neon: false }
        },
        action: {
            fillColor: "#ffffff",
            borderColor: "#dddddd",
            neonColor: "#74d6ff",
            fillOpacity: 1,
            borderOpacity: 0.7,
            neonOpacity: 0.18,
            textColor: "#333333",
            textStrokeColor: "#333333",
            textNeonColor: "#74d6ff",
            textFillOpacity: 1,
            textStrokeOpacity: 0.6,
            textNeonOpacity: 0.18,
            opacityTargets: { fill: true, border: false, neon: false },
            textOpacityTargets: { fill: true, border: false, neon: false }
        }
    };
}

function getStoredMusicTheme() {
    return {
        ...getDefaultMusicTheme(),
        ...(musicState.musicTheme || {}),
        bar: { ...getDefaultMusicTheme().bar, ...(musicState.musicTheme?.bar || {}) },
        text: { ...getDefaultMusicTheme().text, ...(musicState.musicTheme?.text || {}) },
        now: { ...getDefaultMusicTheme().now, ...(musicState.musicTheme?.now || {}) },
        progress: { ...getDefaultMusicTheme().progress, ...(musicState.musicTheme?.progress || {}) },
        record: { ...getDefaultMusicTheme().record, ...(musicState.musicTheme?.record || {}) },
        action: { ...getDefaultMusicTheme().action, ...(musicState.musicTheme?.action || {}) }
    };
}

function hexToRgbTriplet(hex) {
    const normalized = String(hex || "#000000").replace("#", "");
    const value = normalized.length === 3
        ? normalized.split("").map((char) => char + char).join("")
        : normalized.padEnd(6, "0").slice(0, 6);
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    return `${r}, ${g}, ${b}`;
}

function normalizeTrackData(track = {}) {
    return {
        recordStyle: "classic",
        customRecordArt: "",
        customBackgroundArt: "",
        rotateRecord: true,
        ...track
    };
}

function getMusicThemeDisplayOpacity(section) {
    if (!section) return 1;
    const targets = section.textOpacityTargets || section.opacityTargets || {};
    if (targets.fill && typeof section.fillOpacity === "number") return section.fillOpacity;
    if (targets.border) {
        if (typeof section.strokeOpacity === "number") return section.strokeOpacity;
        if (typeof section.borderOpacity === "number") return section.borderOpacity;
    }
    if (targets.neon) {
        if (typeof section.textNeonOpacity === "number") return section.textNeonOpacity;
        if (typeof section.neonOpacity === "number") return section.neonOpacity;
    }
    if (typeof section.fillOpacity === "number") return section.fillOpacity;
    if (typeof section.textFillOpacity === "number") return section.textFillOpacity;
    if (typeof section.borderOpacity === "number") return section.borderOpacity;
    if (typeof section.strokeOpacity === "number") return section.strokeOpacity;
    if (typeof section.neonOpacity === "number") return section.neonOpacity;
    if (typeof section.textNeonOpacity === "number") return section.textNeonOpacity;
    return 1;
}

function getDefaultMainPageLayout() {
    return {
        logo: { x: 50, y: 24, scale: 100, hidden: false },
        welcome: { x: 50, y: 56, hidden: false },
        shortcuts: { x: 50, y: 74, scale: 100 },
        customTexts: [],
        customImages: []
    };
}

function getStoredWelcomeToolState(user) {
    return {
        ...getDefaultWelcomeToolState(),
        ...(user?.welcomeToolState || {})
    };
}

function renderWelcomeMessage(user) {
    const fallback = getDefaultWelcomeMessage(user);
    userNameDisplay.innerHTML = user?.welcomeMessageHtml || escapeHtml(user?.welcomeMessage || fallback);
}

function applyWelcomeToolbarState() {
    welcomeTextColorInput.value = currentWelcomeToolState.color;
    welcomeFontSizeInput.value = String(currentWelcomeToolState.fontSize);
    welcomeStrokeColorInput.value = currentWelcomeToolState.strokeColor;
    welcomeFontFamilySelect.value = currentWelcomeToolState.fontFamily;
    welcomeNeonToggle.checked = currentWelcomeToolState.neon;
}

function applyShortcutToolbarState() {
    shortcutTextColorInput.value = currentShortcutToolState.color;
    shortcutFontSizeInput.value = String(currentShortcutToolState.fontSize);
    shortcutStrokeColorInput.value = currentShortcutToolState.strokeColor;
    shortcutFontFamilySelect.value = currentShortcutToolState.fontFamily;
    shortcutNeonToggle.checked = currentShortcutToolState.neon;
}

function buildStyledSpan(text, toolState) {
    const span = document.createElement("span");
    span.textContent = text.replaceAll(" ", "\u00A0");
    span.style.color = toolState.color;
    span.style.fontSize = `${toolState.fontSize}px`;
    span.style.fontFamily = toolState.fontFamily;
    span.style.webkitTextStroke = `1px ${toolState.strokeColor}`;
    span.style.textShadow = toolState.neon
        ? `0 0 8px ${toolState.color}, 0 0 18px ${toolState.color}`
        : "none";
    span.style.whiteSpace = "pre";
    return span;
}

function buildWelcomeStyledSpan(text) {
    return buildStyledSpan(text, currentWelcomeToolState);
}

function buildShortcutStyledSpan(text) {
    return buildStyledSpan(text, currentShortcutToolState);
}

function insertNodeAtCurrentSelection(node) {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(node);
    range.setStartAfter(node);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
}

function placeCaretAtEnd(element) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
}

function positionWelcomeToolbarDefault() {
    if (!welcomeToolbar.offsetWidth) {
        requestAnimationFrame(positionWelcomeToolbarDefault);
        return;
    }
    const left = Math.max(24, (window.innerWidth - welcomeToolbar.offsetWidth) / 2);
    const top = Math.max(120, window.innerHeight - welcomeToolbar.offsetHeight - 28);
    welcomeToolbar.style.left = `${left + welcomeToolbar.offsetWidth / 2}px`;
    welcomeToolbar.style.top = `${top + welcomeToolbar.offsetHeight / 2}px`;
    welcomeToolbar.style.transform = "translate(-50%, -50%)";
}

function resetWelcomeToolbarPosition() {
    positionWelcomeToolbarDefault();
}

function positionShortcutToolbarDefault() {
    shortcutToolbar.style.left = "50%";
    shortcutToolbar.style.bottom = "28px";
    shortcutToolbar.style.transform = "translateX(-50%)";
}

function startWelcomeTextEditing() {
    if (isEditingWelcomeText) return;
    if (!isMainEditMode) return;
    if (isEditingShortcutText) finishShortcutTextEditing(true);
    const currentUser = getCurrentUser();
    if (!currentUser) {
        alert("로그인한 상태에서만 환영 문구를 수정할 수 있습니다.");
        return;
    }

    isEditingWelcomeText = true;
    userNameDisplay.classList.add("is-editing");
    userNameDisplay.setAttribute("contenteditable", "true");
    userNameDisplay.setAttribute("role", "textbox");
    if (!userNameDisplay.innerHTML.trim()) {
        userNameDisplay.innerHTML = escapeHtml(getDefaultWelcomeMessage(currentUser));
    }

    currentWelcomeToolState = getStoredWelcomeToolState(currentUser);
    applyWelcomeToolbarState();
    welcomeToolbar.classList.remove("hidden");
    welcomeToolbarResetBtn.classList.remove("hidden");
    if (!welcomeToolbarDefaultsApplied) {
        positionWelcomeToolbarDefault();
        welcomeToolbarDefaultsApplied = true;
    }
    placeCaretAtEnd(userNameDisplay);
    userNameDisplay.focus();
}

function finishWelcomeTextEditing(shouldSave) {
    if (!isEditingWelcomeText) return;
    const currentUser = getCurrentUser();
    const fallback = getDefaultWelcomeMessage(currentUser);
    const nextText = userNameDisplay.textContent.trim() || fallback;

    if (shouldSave) {
        if (!userNameDisplay.textContent.trim()) {
            userNameDisplay.textContent = fallback;
        }
        saveWelcomeMessage(nextText, userNameDisplay.innerHTML);
    } else {
        renderWelcomeMessage(currentUser);
    }

    userNameDisplay.removeAttribute("contenteditable");
    userNameDisplay.setAttribute("role", "button");
    userNameDisplay.classList.remove("is-editing");
    welcomeToolbar.classList.add("hidden");
    welcomeToolbarResetBtn.classList.add("hidden");
    welcomeCompositionStart = null;
    isEditingWelcomeText = false;
}

function handleWelcomeEditorOutsideClick(event) {
    if (!isEditingWelcomeText) return;
    if (welcomeText.contains(event.target)) return;
    if (welcomeToolbar.contains(event.target)) return;
    if (welcomeToolbarResetBtn.contains(event.target)) return;
    finishWelcomeTextEditing(true);
}

function handleCustomTextOutsideClick(event) {
    if (!activeCustomTextId) return;
    const targetLabel = mainCustomLayer.querySelector(`[data-id="${activeCustomTextId}"] .main-custom-text`);
    if (targetLabel?.contains(event.target)) return;
    if (welcomeToolbar.contains(event.target)) return;
    if (welcomeToolbarResetBtn.contains(event.target)) return;
    finishCustomTextEditing(true);
}

function startCustomTextEditing(labelEl, textId) {
    if (!isMainEditMode) return;
    if (isEditingWelcomeText) finishWelcomeTextEditing(true);
    if (isEditingShortcutText) finishShortcutTextEditing(true);
    if (activeCustomTextId === textId) return;
    if (activeCustomTextId) finishCustomTextEditing(true);

    const item = getMainPageLayoutForUser().customTexts.find((entry) => entry.id === textId);
    if (!item) return;
    activeCustomTextId = textId;
    currentWelcomeToolState = {
        ...getDefaultWelcomeToolState(),
        ...(item.toolState || {})
    };
    applyWelcomeToolbarState();
    labelEl.classList.add("is-editing");
    labelEl.setAttribute("contenteditable", "true");
    labelEl.setAttribute("role", "textbox");
    welcomeToolbar.classList.remove("hidden");
    welcomeToolbarResetBtn.classList.remove("hidden");
    if (!welcomeToolbarDefaultsApplied) {
        positionWelcomeToolbarDefault();
        welcomeToolbarDefaultsApplied = true;
    }
    placeCaretAtEnd(labelEl);
    labelEl.focus();
}

function finishCustomTextEditing(shouldSave) {
    if (!activeCustomTextId) return;
    const labelEl = mainCustomLayer.querySelector(`[data-id="${activeCustomTextId}"] .main-custom-text`);
    const fallback = "새 문구";
    if (labelEl && shouldSave) {
        const text = labelEl.textContent.trim() || fallback;
        updateMainPageLayout((layout) => ({
            ...layout,
            customTexts: layout.customTexts.map((item) =>
                item.id === activeCustomTextId
                    ? { ...item, text, html: labelEl.innerHTML, toolState: { ...currentWelcomeToolState } }
                    : item
            )
        }));
    }
    if (labelEl) {
        labelEl.removeAttribute("contenteditable");
        labelEl.setAttribute("role", "button");
        labelEl.classList.remove("is-editing");
    }
    activeCustomTextId = null;
    customTextCompositionStart = null;
    welcomeToolbar.classList.add("hidden");
    welcomeToolbarResetBtn.classList.add("hidden");
    applyMainPageLayout();
}

function handleCustomTextEditorKeydown(event) {
    if (!activeCustomTextId) return;
    if (event.isComposing) return;
    if (event.key === "Enter") {
        event.preventDefault();
        finishCustomTextEditing(true);
    } else if (event.key === "Escape") {
        event.preventDefault();
        finishCustomTextEditing(false);
    }
}

function handleCustomTextBeforeInput(event) {
    if (!activeCustomTextId) return;
    if (event.isComposing || event.inputType.includes("Composition")) return;
    if (event.inputType === "insertParagraph") {
        event.preventDefault();
        finishCustomTextEditing(true);
        return;
    }
    if (!event.inputType.startsWith("insert") || !event.data) return;
    event.preventDefault();
    insertNodeAtCurrentSelection(buildWelcomeStyledSpan(event.data));
}

function handleCustomTextPaste(event) {
    if (!activeCustomTextId) return;
    event.preventDefault();
    const text = event.clipboardData?.getData("text/plain") || "";
    if (!text) return;
    insertNodeAtCurrentSelection(buildWelcomeStyledSpan(text));
}

function handleCustomTextCompositionStart() {
    if (!activeCustomTextId) return;
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;
    const range = selection.getRangeAt(0).cloneRange();
    customTextCompositionStart = {
        startContainer: range.startContainer,
        startOffset: range.startOffset
    };
}

function handleCustomTextCompositionEnd() {
    if (!activeCustomTextId || !customTextCompositionStart) return;
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) {
        customTextCompositionStart = null;
        return;
    }
    try {
        const endRange = selection.getRangeAt(0).cloneRange();
        const range = document.createRange();
        range.setStart(customTextCompositionStart.startContainer, customTextCompositionStart.startOffset);
        range.setEnd(endRange.endContainer, endRange.endOffset);
        const composedText = range.toString();
        if (composedText) {
            range.deleteContents();
            const styledSpan = buildWelcomeStyledSpan(composedText);
            range.insertNode(styledSpan);
            placeCaretAfterNode(styledSpan);
        }
    } catch (error) {
        console.warn("Custom text composition styling skipped", error);
    }
    customTextCompositionStart = null;
}

function handleWelcomeEditorKeydown(event) {
    if (!isEditingWelcomeText) return;
    if (event.isComposing) return;
    if (event.key === "Enter") {
        event.preventDefault();
        finishWelcomeTextEditing(true);
    } else if (event.key === "Escape") {
        event.preventDefault();
        finishWelcomeTextEditing(false);
    }
}

function handleWelcomeBeforeInput(event) {
    if (!isEditingWelcomeText) return;
    if (event.isComposing || event.inputType.includes("Composition")) return;
    if (event.inputType === "insertParagraph") {
        event.preventDefault();
        finishWelcomeTextEditing(true);
        return;
    }
    if (!event.inputType.startsWith("insert") || !event.data) return;
    event.preventDefault();
    insertNodeAtCurrentSelection(buildWelcomeStyledSpan(event.data));
}

function handleWelcomePaste(event) {
    if (!isEditingWelcomeText) return;
    event.preventDefault();
    const text = event.clipboardData?.getData("text/plain") || "";
    if (!text) return;
    insertNodeAtCurrentSelection(buildWelcomeStyledSpan(text));
}

function handleWelcomeCompositionStart() {
    if (!isEditingWelcomeText) return;
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;
    const range = selection.getRangeAt(0).cloneRange();
    welcomeCompositionStart = {
        startContainer: range.startContainer,
        startOffset: range.startOffset
    };
}

function handleWelcomeCompositionEnd() {
    if (!isEditingWelcomeText || !welcomeCompositionStart) return;
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) {
        welcomeCompositionStart = null;
        return;
    }

    try {
        const endRange = selection.getRangeAt(0).cloneRange();
        const range = document.createRange();
        range.setStart(welcomeCompositionStart.startContainer, welcomeCompositionStart.startOffset);
        range.setEnd(endRange.endContainer, endRange.endOffset);
        const composedText = range.toString();
        if (composedText) {
            range.deleteContents();
            const styledSpan = buildWelcomeStyledSpan(composedText);
            range.insertNode(styledSpan);
            placeCaretAfterNode(styledSpan);
        }
    } catch (error) {
        console.warn("Welcome composition styling skipped", error);
    }

    welcomeCompositionStart = null;
}

function placeCaretAfterNode(node) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStartAfter(node);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
}

function saveWelcomeMessage(message, html) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const users = getUsers();
    const index = users.findIndex((user) => user.id === currentUser.id);
    if (index === -1) return;
    users[index].welcomeMessage = message;
    users[index].welcomeMessageHtml = html;
    users[index].welcomeToolState = { ...currentWelcomeToolState };
    saveUsers(users);
}

function getStoredShortcutToolState(item) {
    return {
        ...getDefaultShortcutToolState(),
        ...(item?.labelToolState || {})
    };
}

function normalizeShortcutItem(item, index) {
    return {
        id: item?.id || `shortcut-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
        name: item?.name || "즐겨찾기",
        url: item?.url || "",
        labelHtml: typeof item?.labelHtml === "string" ? item.labelHtml : "",
        labelToolState: {
            ...getDefaultShortcutToolState(),
            ...(item?.labelToolState || {})
        }
    };
}

function startShortcutTextEditing(labelEl, shortcutId) {
    if (!isMainEditMode) return;
    if (isEditingShortcutText && currentShortcutEditingId === shortcutId) return;
    if (isEditingWelcomeText) finishWelcomeTextEditing(true);
    if (isEditingShortcutText) finishShortcutTextEditing(true);

    const shortcut = getShortcuts().find((item) => item.id === shortcutId);
    if (!shortcut) return;

    isEditingShortcutText = true;
    currentShortcutEditingId = shortcutId;
    activeShortcutTextEl = labelEl;
    currentShortcutToolState = getStoredShortcutToolState(shortcut);

    activeShortcutTextEl.classList.add("is-editing");
    activeShortcutTextEl.setAttribute("contenteditable", "true");
    activeShortcutTextEl.setAttribute("role", "textbox");
    applyShortcutToolbarState();
    shortcutToolbar.classList.remove("hidden");
    positionShortcutToolbarDefault();
    placeCaretAtEnd(activeShortcutTextEl);
    activeShortcutTextEl.focus();
}

function finishShortcutTextEditing(shouldSave) {
    if (!isEditingShortcutText || !activeShortcutTextEl) return;

    const shortcutId = currentShortcutEditingId;
    const shortcuts = getShortcuts();
    const shortcut = shortcuts.find((item) => item.id === shortcutId);
    const fallback = shortcut?.name || "즐겨찾기";
    const nextText = activeShortcutTextEl.textContent.trim() || fallback;

    if (shouldSave && shortcut) {
        shortcut.name = nextText;
        shortcut.labelHtml = activeShortcutTextEl.innerHTML;
        shortcut.labelToolState = { ...currentShortcutToolState };
        localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(shortcuts));
    }

    activeShortcutTextEl.removeAttribute("contenteditable");
    activeShortcutTextEl.setAttribute("role", "button");
    activeShortcutTextEl.classList.remove("is-editing");
    shortcutToolbar.classList.add("hidden");
    shortcutCompositionStart = null;
    isEditingShortcutText = false;
    activeShortcutTextEl = null;
    currentShortcutEditingId = null;
    renderShortcuts();
}

function handleShortcutEditorOutsideClick(event) {
    if (!isEditingShortcutText || !activeShortcutTextEl) return;
    if (activeShortcutTextEl.contains(event.target)) return;
    if (shortcutToolbar.contains(event.target)) return;
    finishShortcutTextEditing(true);
}

function handleShortcutEditorKeydown(event) {
    if (!isEditingShortcutText || event.target !== activeShortcutTextEl) return;
    if (event.isComposing) return;
    if (event.key === "Enter") {
        event.preventDefault();
        finishShortcutTextEditing(true);
    } else if (event.key === "Escape") {
        event.preventDefault();
        finishShortcutTextEditing(false);
    }
}

function handleShortcutBeforeInput(event) {
    if (!isEditingShortcutText || event.target !== activeShortcutTextEl) return;
    if (event.isComposing || event.inputType.includes("Composition")) return;
    if (event.inputType === "insertParagraph") {
        event.preventDefault();
        finishShortcutTextEditing(true);
        return;
    }
    if (!event.inputType.startsWith("insert") || !event.data) return;
    event.preventDefault();
    insertNodeAtCurrentSelection(buildShortcutStyledSpan(event.data));
}

function handleShortcutPaste(event) {
    if (!isEditingShortcutText || event.target !== activeShortcutTextEl) return;
    event.preventDefault();
    const text = event.clipboardData?.getData("text/plain") || "";
    if (!text) return;
    insertNodeAtCurrentSelection(buildShortcutStyledSpan(text));
}

function handleShortcutCompositionStart(event) {
    if (!isEditingShortcutText || event.target !== activeShortcutTextEl) return;
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;
    const range = selection.getRangeAt(0).cloneRange();
    shortcutCompositionStart = {
        startContainer: range.startContainer,
        startOffset: range.startOffset
    };
}

function handleShortcutCompositionEnd(event) {
    if (!isEditingShortcutText || event.target !== activeShortcutTextEl || !shortcutCompositionStart) return;
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) {
        shortcutCompositionStart = null;
        return;
    }

    try {
        const endRange = selection.getRangeAt(0).cloneRange();
        const range = document.createRange();
        range.setStart(shortcutCompositionStart.startContainer, shortcutCompositionStart.startOffset);
        range.setEnd(endRange.endContainer, endRange.endOffset);
        const composedText = range.toString();
        if (composedText) {
            range.deleteContents();
            const styledSpan = buildShortcutStyledSpan(composedText);
            range.insertNode(styledSpan);
            placeCaretAfterNode(styledSpan);
        }
    } catch (error) {
        console.warn("Shortcut composition styling skipped", error);
    }

    shortcutCompositionStart = null;
}

function showPage(pageId) {
    if (pageId !== "main-page" && isMainEditMode) {
        cancelMainEditMode();
    }
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
        profilePicCrop: getDefaultProfileCrop(),
        borderColor: "#000000",
        rainbowMode: false,
        backgroundImage: "",
        applyHeaderWallpaper: false,
        logoNeonColor: "",
        cursorStyle: "default",
        showShortcuts: true,
        musicBackgroundOpacity: 1,
        profileImageHistory: [],
        backgroundImageHistory: [],
        mainPagePresets: [null, null, null],
        welcomeMessage: `${id}님 환영합니다`,
        welcomeMessageHtml: escapeHtml(`${id}님 환영합니다`),
        welcomeToolState: getDefaultWelcomeToolState(),
        mainPageLayout: getDefaultMainPageLayout()
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
    if (!isMainEditMode) return;
    const name = shortcutNameInput.value.trim();
    const url = shortcutUrlInput.value.trim();
    if (!name || !url) return alert("이름과 URL을 모두 입력해주세요!");

    const shortcuts = getShortcuts();
    shortcuts.push({
        id: `shortcut-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name,
        url,
        labelHtml: "",
        labelToolState: getDefaultShortcutToolState()
    });
    localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(shortcuts));
    shortcutNameInput.value = "";
    shortcutUrlInput.value = "";
    shortcutModal.classList.add("hidden");
    renderShortcuts();
}

function getShortcuts() {
    const parsed = JSON.parse(localStorage.getItem(SHORTCUTS_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];
    let needsSave = false;
    const normalized = parsed.map((item, index) => {
        const nextItem = normalizeShortcutItem(item, index);
        if (
            nextItem.id !== item?.id ||
            nextItem.labelHtml !== (item?.labelHtml || "") ||
            JSON.stringify(nextItem.labelToolState) !== JSON.stringify({
                ...getDefaultShortcutToolState(),
                ...(item?.labelToolState || {})
            })
        ) {
            needsSave = true;
        }
        return nextItem;
    });
    if (needsSave) {
        localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(normalized));
    }
    return normalized;
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
        a.className = "shortcut-link";
        a.addEventListener("click", (event) => {
            if (isMainEditMode || (isEditingShortcutText && currentShortcutEditingId === item.id)) {
                event.preventDefault();
            }
        });

        const iconUrl = `https://www.google.com/s2/favicons?sz=128&domain=${item.url}`;
        const icon = document.createElement("img");
        icon.src = iconUrl;
        icon.alt = item.name;
        icon.style.width = "55px";
        icon.style.height = "55px";
        icon.style.objectFit = "contain";

        const label = document.createElement("span");
        label.className = "shortcut-text editable-shortcut-text";
        label.tabIndex = 0;
        label.setAttribute("role", "button");
        label.setAttribute("aria-label", "즐겨찾기 텍스트 수정");
        label.innerHTML = item.labelHtml || escapeHtml(item.name);
        if (!item.labelHtml) {
            const defaultState = getStoredShortcutToolState(item);
            label.style.color = defaultState.color;
            label.style.fontSize = `${defaultState.fontSize}px`;
            label.style.fontFamily = defaultState.fontFamily;
            label.style.webkitTextStroke = `1px ${defaultState.strokeColor}`;
            label.style.textShadow = defaultState.neon
                ? `0 0 8px ${defaultState.color}, 0 0 18px ${defaultState.color}`
                : "none";
        }

        label.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            startShortcutTextEditing(label, item.id);
        });
        label.addEventListener("keydown", (event) => {
            if (!isEditingShortcutText) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    event.stopPropagation();
                    startShortcutTextEditing(label, item.id);
                }
                return;
            }
            handleShortcutEditorKeydown(event);
        });
        label.addEventListener("beforeinput", handleShortcutBeforeInput);
        label.addEventListener("paste", handleShortcutPaste);
        label.addEventListener("compositionstart", handleShortcutCompositionStart);
        label.addEventListener("compositionend", handleShortcutCompositionEnd);

        a.appendChild(icon);
        a.appendChild(label);

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
            if (!isMainEditMode) return;
            const shortcuts = getShortcuts();
            shortcuts.splice(index, 1);
            localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(shortcuts));
            if (isEditingShortcutText && currentShortcutEditingId === item.id) {
                shortcutToolbar.classList.add("hidden");
                isEditingShortcutText = false;
                activeShortcutTextEl = null;
                currentShortcutEditingId = null;
            }
            renderShortcuts();
        };

        wrapper.addEventListener("mouseenter", () => { deleteBtn.style.display = isMainEditMode ? "flex" : "none"; });
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
        if (pendingProfileCrop) users[currentIndex].profilePicCrop = { ...pendingProfileCrop };
        users[currentIndex].rainbowMode = rainbowMode.checked;
        users[currentIndex].borderColor = borderColorInput.value;
        users[currentIndex].logoNeonColor = logoNeonHoverColorInput.value;
        users[currentIndex].cursorStyle = cursorStyleSelect.value;
        users[currentIndex].showShortcuts = showShortcutsToggle.checked;
        users[currentIndex].musicBackgroundOpacity = Math.min(1, Math.max(0, Number(musicBackgroundOpacityInput.value || 100) / 100));
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
        pendingProfilePic = null;
        pendingProfileCrop = null;
        pendingBackgroundImage = null;
        pendingBackgroundReset = false;
        loadSettings();
        renderShortcuts();
        renderMusicUI();
        renderVideoUI();
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
    musicStyleEditBtn.onclick = () => openMusicStyleEditor();
    musicStyleCloseBtn.onclick = () => closeMusicStyleEditor();
    playbackProgress.addEventListener("input", handlePlaybackScrub);
    playbackProgress.addEventListener("change", applyPlaybackScrub);
    playbackVolume?.addEventListener("input", handlePlaybackVolumeChange);
    [
        musicBarBgColorInput,
        musicBarBorderColorInput,
        musicBarNeonColorInput,
        musicBarOpacityInput,
        musicTextColorInput,
        musicTextStrokeColorInput,
        musicTextNeonColorInput,
        musicTextOpacityInput,
        musicNowColorInput,
        musicNowStrokeColorInput,
        musicNowNeonColorInput,
        musicNowOpacityInput,
        musicProgressColorInput,
        musicProgressBorderColorInput,
        musicProgressNeonColorInput,
        musicProgressOpacityInput,
        musicRecordNeonColorInput,
        musicRecordOpacityInput,
        musicActionBgColorInput,
        musicActionBorderColorInput,
        musicActionNeonColorInput,
        musicActionOpacityInput,
        musicActionTextColorInput,
        musicActionTextStrokeColorInput,
        musicActionTextNeonColorInput,
        musicActionTextOpacityInput,
        musicBarOpacityFillInput,
        musicBarOpacityBorderInput,
        musicBarOpacityNeonInput,
        musicTextOpacityFillInput,
        musicTextOpacityBorderInput,
        musicTextOpacityNeonInput,
        musicNowOpacityFillInput,
        musicNowOpacityBorderInput,
        musicNowOpacityNeonInput,
        musicProgressOpacityFillInput,
        musicProgressOpacityBorderInput,
        musicProgressOpacityNeonInput,
        musicRecordOpacityFillInput,
        musicRecordOpacityBorderInput,
        musicRecordOpacityNeonInput,
        musicActionOpacityFillInput,
        musicActionOpacityBorderInput,
        musicActionOpacityNeonInput,
        musicActionTextOpacityFillInput,
        musicActionTextOpacityBorderInput,
        musicActionTextOpacityNeonInput
    ].forEach((input) => {
        input?.addEventListener("input", handleMusicThemeInput);
        input?.addEventListener("change", handleMusicThemeInput);
    });

    editPlaylistBtn.onclick = () => openPlaylistEditor();
    closePlaylistEditorBtn.onclick = () => playlistEditorModal.classList.add("hidden");
    openLibraryPickerBtn.onclick = () => openLibraryPicker();
    closeLibraryPickerBtn.onclick = () => libraryPickerModal.classList.add("hidden");
    recordStyleBtn.onclick = () => openRecordStyleModal();
    closeRecordStyleModalBtn.onclick = () => recordStyleModal.classList.add("hidden");
    openRecordEffectModalBtn.onclick = () => openRecordEffectModal();
    closeRecordEffectModalBtn.onclick = () => recordEffectModal.classList.add("hidden");
    trackArtInput.onchange = handleTrackArtUpload;
    trackBackgroundInput.onchange = handleTrackBackgroundUpload;

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
        ? savedLibrary.map((track) => normalizeTrackData(track))
        : [];
    musicState.playlists = Array.isArray(savedState.playlists) ? savedState.playlists : [];
    musicState.currentPlaylistId = savedState.currentPlaylistId || null;
    musicState.selectedTrackId = savedState.selectedTrackId || null;
    musicState.playingTrackId = savedState.playingTrackId || null;
    musicState.musicTheme = {
        ...getDefaultMusicTheme(),
        ...(savedState.musicTheme || {}),
        bar: { ...getDefaultMusicTheme().bar, ...(savedState.musicTheme?.bar || {}) },
        text: { ...getDefaultMusicTheme().text, ...(savedState.musicTheme?.text || {}) },
        now: { ...getDefaultMusicTheme().now, ...(savedState.musicTheme?.now || {}) },
        progress: { ...getDefaultMusicTheme().progress, ...(savedState.musicTheme?.progress || {}) },
        record: { ...getDefaultMusicTheme().record, ...(savedState.musicTheme?.record || {}) },
        action: { ...getDefaultMusicTheme().action, ...(savedState.musicTheme?.action || {}) }
    };
    musicState.globalRecordStyle = savedState.globalRecordStyle || "classic";
    musicState.recordEffect = savedState.recordEffect || (savedState.rainbowReflectionEnabled ? "rainbow-a" : "none");
    musicState.repeatEnabled = Boolean(savedState.repeatEnabled);
    musicState.autoplayEnabled = Boolean(savedState.autoplayEnabled);
    musicState.volume = Number.isFinite(savedState.volume) ? Math.min(1, Math.max(0, savedState.volume)) : 1;
    if (!musicState.playlists.length) {
        const defaultPlaylist = createPlaylistObject(DEFAULT_PLAYLIST_NAME);
        musicState.playlists = [defaultPlaylist];
        musicState.currentPlaylistId = defaultPlaylist.id;
    }

    if (!musicState.currentPlaylistId || !getCurrentPlaylist()) {
        musicState.currentPlaylistId = musicState.playlists[0].id;
    }

    musicAudio.volume = musicState.volume;
    if (playbackVolume) playbackVolume.value = String(Math.round(musicState.volume * 100));

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
        profilePicCrop: getDefaultProfileCrop(),
        borderColor: localStorage.getItem("profileBorderColor") || "#000000",
        rainbowMode: localStorage.getItem("rainbowMode") === "true",
        backgroundImage: "",
        applyHeaderWallpaper: false,
        logoNeonColor: "#62e7ff",
        cursorStyle: "default",
        showShortcuts: true,
        musicBackgroundOpacity: 1,
        profileImageHistory: [],
        backgroundImageHistory: [],
        mainPagePresets: [null, null, null],
        welcomeMessage: `${legacyId}님 환영합니다`,
        welcomeMessageHtml: escapeHtml(`${legacyId}님 환영합니다`),
        welcomeToolState: getDefaultWelcomeToolState(),
        mainPageLayout: getDefaultMainPageLayout()
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
            musicTheme: musicState.musicTheme,
            globalRecordStyle: musicState.globalRecordStyle,
            recordEffect: musicState.recordEffect,
            repeatEnabled: musicState.repeatEnabled,
            autoplayEnabled: musicState.autoplayEnabled,
            volume: musicState.volume
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
        musicState.library.push(normalizeTrackData({
            id: trackId,
            name: customTitle || "유튜브 음악",
            sourceType: "youtube",
            youtubeId,
            youtubeUrl
        }));
        playlist.trackIds.push(trackId);
    } else {
        const file = musicFileInput.files[0];
        if (!file) {
            alert("추가할 mp3 파일을 선택해주세요.");
            return;
        }

        const trackId = createId("track");
        await saveTrackBlob(trackId, file);
        musicState.library.push(normalizeTrackData({
            id: trackId,
            name: customTitle || file.name.replace(/\.[^.]+$/, "") || file.name,
            originalName: file.name,
            sourceType: "file"
        }));
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
    musicAudio.volume = musicState.volume;
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
    const previousIndex = lastRenderedPlaylistIndex;
    const movementClass = previousIndex === null || selectedIndex === previousIndex
        ? ""
        : (selectedIndex > previousIndex ? "is-moving-up" : "is-moving-down");

    playlistItemsEl.innerHTML = "";
    playlistItemsEl.classList.remove("is-moving-up", "is-moving-down");

    if (!trackIds.length) {
        playlistUpBtn.disabled = true;
        playlistDownBtn.disabled = true;
        musicEmptyState.classList.remove("hidden");
        lastRenderedPlaylistIndex = null;
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

async function deleteTrackBlob(trackId) {
    if (!isLoggedInUser()) {
        guestTrackBlobs.delete(trackId);
        return;
    }

    const db = await openMusicDb();
    const storageKeys = getLegacyTrackStorageKeys(trackId);

    await new Promise((resolve, reject) => {
        const transaction = db.transaction(MUSIC_STORE_NAME, "readwrite");
        const store = transaction.objectStore(MUSIC_STORE_NAME);
        storageKeys.forEach((storageKey) => store.delete(storageKey));
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
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
    if (typeof player.setVolume === "function") player.setVolume(Math.round(musicState.volume * 100));
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
    const playingTrack = getTrackById(musicState.playingTrackId);

    transportToggleBtn.disabled = !hasTrack && !hasSelectedTrack;
    transportToggleIcon.className = `fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`;
    recordDisc.classList.toggle("no-rotation", Boolean(playingTrack && playingTrack.rotateRecord === false));

    repeatToggleBtn.classList.toggle("is-active", musicState.repeatEnabled);
    repeatToggleBtn.setAttribute("aria-pressed", String(musicState.repeatEnabled));
    autoplayToggleBtn.classList.toggle("is-active", musicState.autoplayEnabled);
    autoplayToggleBtn.setAttribute("aria-pressed", String(musicState.autoplayEnabled));
    if (playbackVolume) playbackVolume.value = String(Math.round((musicState.volume ?? 1) * 100));
}

function syncPlaybackUi() {
    const isPlaying = isPlaybackActive();
    recordDisc.classList.toggle("is-playing", isPlaying);
    renderPlaylist();
    updatePlaybackTexts();
    updatePlaybackControls();
    updatePlaybackProgressUi();
    applyRecordAppearance();
    updateRecordStyleButton();
    applyMusicTrackBackdrop();
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

function handlePlaybackVolumeChange() {
    const nextVolume = Math.min(1, Math.max(0, Number(playbackVolume?.value || 100) / 100));
    musicState.volume = nextVolume;
    musicAudio.volume = nextVolume;
    if (youtubePlayer && typeof youtubePlayer.setVolume === "function") {
        youtubePlayer.setVolume(Math.round(nextVolume * 100));
    }
    saveMusicState();
}

function applyMusicTrackBackdrop() {
    const musicPage = document.getElementById("music-page");
    if (!musicPage) return;

    const activeTrack = getTrackById(musicState.playingTrackId) || getTrackById(musicState.selectedTrackId);
    const backgroundArt = activeTrack?.customBackgroundArt || "";

    if (!backgroundArt) {
        musicPage.classList.remove("has-track-background");
        musicPage.style.setProperty("--music-track-bg-url", "none");
        return;
    }

    musicPage.classList.add("has-track-background");
    musicPage.classList.remove("track-backdrop-refresh");
    void musicPage.offsetWidth;
    musicPage.classList.add("track-backdrop-refresh");
    musicPage.style.setProperty("--music-track-bg-url", `url("${backgroundArt}")`);
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
    applyMusicThemeToPage();
    applyMusicTrackBackdrop();
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

    lastRenderedPlaylistIndex = selectedIndex;
    if (movementClass) {
        void playlistItemsEl.offsetWidth;
        playlistItemsEl.classList.add(movementClass);
        if (playlistAnimationTimer) clearTimeout(playlistAnimationTimer);
        playlistAnimationTimer = setTimeout(() => {
            playlistItemsEl.classList.remove("is-moving-up", "is-moving-down");
        }, 360);
    }
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
    applyGlobalRecordPreview();
}

function applyMusicThemeToPage() {
    const theme = getStoredMusicTheme();
    const musicPage = document.getElementById("music-page");
    if (!musicPage) return;

    musicPage.style.setProperty("--music-bar-bg", hexToRgbTriplet(theme.bar.fillColor));
    musicPage.style.setProperty("--music-bar-border", hexToRgbTriplet(theme.bar.borderColor));
    musicPage.style.setProperty("--music-bar-neon", hexToRgbTriplet(theme.bar.neonColor));
    musicPage.style.setProperty("--music-bar-opacity", String(theme.bar.fillOpacity));
    musicPage.style.setProperty("--music-bar-border-opacity", String(theme.bar.borderOpacity));
    musicPage.style.setProperty("--music-bar-neon-opacity", String(theme.bar.neonOpacity));

    musicPage.style.setProperty("--music-text-color", hexToRgbTriplet(theme.text.fillColor));
    musicPage.style.setProperty("--music-text-stroke", hexToRgbTriplet(theme.text.strokeColor));
    musicPage.style.setProperty("--music-text-neon", hexToRgbTriplet(theme.text.neonColor));
    musicPage.style.setProperty("--music-text-opacity", String(theme.text.fillOpacity));
    musicPage.style.setProperty("--music-text-stroke-opacity", String(theme.text.strokeOpacity));
    musicPage.style.setProperty("--music-text-neon-opacity", String(theme.text.neonOpacity));

    musicPage.style.setProperty("--music-now-color", hexToRgbTriplet(theme.now.fillColor));
    musicPage.style.setProperty("--music-now-stroke", hexToRgbTriplet(theme.now.strokeColor));
    musicPage.style.setProperty("--music-now-neon", hexToRgbTriplet(theme.now.neonColor));
    musicPage.style.setProperty("--music-now-opacity", String(theme.now.fillOpacity));
    musicPage.style.setProperty("--music-now-stroke-opacity", String(theme.now.strokeOpacity));
    musicPage.style.setProperty("--music-now-neon-opacity", String(theme.now.neonOpacity));

    musicPage.style.setProperty("--music-progress-fill", hexToRgbTriplet(theme.progress.fillColor));
    musicPage.style.setProperty("--music-progress-border", hexToRgbTriplet(theme.progress.borderColor));
    musicPage.style.setProperty("--music-progress-neon", hexToRgbTriplet(theme.progress.neonColor));
    musicPage.style.setProperty("--music-progress-fill-opacity", String(theme.progress.fillOpacity));
    musicPage.style.setProperty("--music-progress-border-opacity", String(theme.progress.borderOpacity));
    musicPage.style.setProperty("--music-progress-neon-opacity", String(theme.progress.neonOpacity));

    musicPage.style.setProperty("--music-record-border", hexToRgbTriplet(theme.record.neonColor));
    musicPage.style.setProperty("--music-record-neon", hexToRgbTriplet(theme.record.neonColor));
    musicPage.style.setProperty("--music-record-opacity", String(theme.record.fillOpacity));
    musicPage.style.setProperty("--music-record-border-opacity", String(theme.record.borderOpacity));
    musicPage.style.setProperty("--music-record-neon-opacity", String(theme.record.neonOpacity));

    musicPage.style.setProperty("--music-action-bg", hexToRgbTriplet(theme.action.fillColor));
    musicPage.style.setProperty("--music-action-border", hexToRgbTriplet(theme.action.borderColor));
    musicPage.style.setProperty("--music-action-neon", hexToRgbTriplet(theme.action.neonColor));
    musicPage.style.setProperty("--music-action-opacity", String(theme.action.fillOpacity));
    musicPage.style.setProperty("--music-action-border-opacity", String(theme.action.borderOpacity));
    musicPage.style.setProperty("--music-action-neon-opacity", String(theme.action.neonOpacity));
    musicPage.style.setProperty("--music-action-text-color", hexToRgbTriplet(theme.action.textColor));
    musicPage.style.setProperty("--music-action-text-stroke", hexToRgbTriplet(theme.action.textStrokeColor));
    musicPage.style.setProperty("--music-action-text-neon", hexToRgbTriplet(theme.action.textNeonColor));
    musicPage.style.setProperty("--music-action-text-opacity", String(theme.action.textFillOpacity));
    musicPage.style.setProperty("--music-action-text-stroke-opacity", String(theme.action.textStrokeOpacity));
    musicPage.style.setProperty("--music-action-text-neon-opacity", String(theme.action.textNeonOpacity));
}

function syncMusicThemeInputs() {
    const theme = getStoredMusicTheme();
    musicBarBgColorInput.value = theme.bar.fillColor;
    musicBarBorderColorInput.value = theme.bar.borderColor;
    musicBarNeonColorInput.value = theme.bar.neonColor;
    musicBarOpacityFillInput.checked = Boolean(theme.bar.opacityTargets?.fill);
    musicBarOpacityBorderInput.checked = Boolean(theme.bar.opacityTargets?.border);
    musicBarOpacityNeonInput.checked = Boolean(theme.bar.opacityTargets?.neon);
    musicBarOpacityInput.value = String(getMusicThemeDisplayOpacity(theme.bar));
    musicTextColorInput.value = theme.text.fillColor;
    musicTextStrokeColorInput.value = theme.text.strokeColor;
    musicTextNeonColorInput.value = theme.text.neonColor;
    musicTextOpacityFillInput.checked = Boolean(theme.text.opacityTargets?.fill);
    musicTextOpacityBorderInput.checked = Boolean(theme.text.opacityTargets?.border);
    musicTextOpacityNeonInput.checked = Boolean(theme.text.opacityTargets?.neon);
    musicTextOpacityInput.value = String(getMusicThemeDisplayOpacity(theme.text));
    musicNowColorInput.value = theme.now.fillColor;
    musicNowStrokeColorInput.value = theme.now.strokeColor;
    musicNowNeonColorInput.value = theme.now.neonColor;
    musicNowOpacityFillInput.checked = Boolean(theme.now.opacityTargets?.fill);
    musicNowOpacityBorderInput.checked = Boolean(theme.now.opacityTargets?.border);
    musicNowOpacityNeonInput.checked = Boolean(theme.now.opacityTargets?.neon);
    musicNowOpacityInput.value = String(getMusicThemeDisplayOpacity(theme.now));
    musicProgressColorInput.value = theme.progress.fillColor;
    musicProgressBorderColorInput.value = theme.progress.borderColor;
    musicProgressNeonColorInput.value = theme.progress.neonColor;
    musicProgressOpacityFillInput.checked = Boolean(theme.progress.opacityTargets?.fill);
    musicProgressOpacityBorderInput.checked = Boolean(theme.progress.opacityTargets?.border);
    musicProgressOpacityNeonInput.checked = Boolean(theme.progress.opacityTargets?.neon);
    musicProgressOpacityInput.value = String(getMusicThemeDisplayOpacity(theme.progress));
    musicRecordNeonColorInput.value = theme.record.neonColor;
    musicRecordOpacityFillInput.checked = Boolean(theme.record.opacityTargets?.fill);
    musicRecordOpacityBorderInput.checked = Boolean(theme.record.opacityTargets?.border);
    musicRecordOpacityNeonInput.checked = Boolean(theme.record.opacityTargets?.neon);
    musicRecordOpacityInput.value = String(getMusicThemeDisplayOpacity(theme.record));
    musicActionBgColorInput.value = theme.action.fillColor;
    musicActionBorderColorInput.value = theme.action.borderColor;
    musicActionNeonColorInput.value = theme.action.neonColor;
    musicActionOpacityFillInput.checked = Boolean(theme.action.opacityTargets?.fill);
    musicActionOpacityBorderInput.checked = Boolean(theme.action.opacityTargets?.border);
    musicActionOpacityNeonInput.checked = Boolean(theme.action.opacityTargets?.neon);
    musicActionOpacityInput.value = String(getMusicThemeDisplayOpacity(theme.action));
    musicActionTextColorInput.value = theme.action.textColor;
    musicActionTextStrokeColorInput.value = theme.action.textStrokeColor;
    musicActionTextNeonColorInput.value = theme.action.textNeonColor;
    musicActionTextOpacityFillInput.checked = Boolean(theme.action.textOpacityTargets?.fill);
    musicActionTextOpacityBorderInput.checked = Boolean(theme.action.textOpacityTargets?.border);
    musicActionTextOpacityNeonInput.checked = Boolean(theme.action.textOpacityTargets?.neon);
    musicActionTextOpacityInput.value = String(getMusicThemeDisplayOpacity({
        fillOpacity: theme.action.textFillOpacity,
        strokeOpacity: theme.action.textStrokeOpacity,
        neonOpacity: theme.action.textNeonOpacity,
        opacityTargets: theme.action.textOpacityTargets
    }));
}

function openMusicStyleEditor() {
    isMusicStyleEditMode = true;
    musicStylePanel.classList.remove("hidden");
    musicStyleEditBtn.classList.add("hidden");
    musicStyleCloseBtn.classList.remove("hidden");
    syncMusicThemeInputs();
}

function closeMusicStyleEditor() {
    isMusicStyleEditMode = false;
    musicStylePanel.classList.add("hidden");
    musicStyleEditBtn.classList.remove("hidden");
    musicStyleCloseBtn.classList.add("hidden");
}

function handleMusicThemeInput() {
    const defaults = getDefaultMusicTheme();
    const barOpacityTargets = {
        fill: musicBarOpacityFillInput.checked,
        border: musicBarOpacityBorderInput.checked,
        neon: musicBarOpacityNeonInput.checked
    };
    const textOpacityTargets = {
        fill: musicTextOpacityFillInput.checked,
        border: musicTextOpacityBorderInput.checked,
        neon: musicTextOpacityNeonInput.checked
    };
    const nowOpacityTargets = {
        fill: musicNowOpacityFillInput.checked,
        border: musicNowOpacityBorderInput.checked,
        neon: musicNowOpacityNeonInput.checked
    };
    const progressOpacityTargets = {
        fill: musicProgressOpacityFillInput.checked,
        border: musicProgressOpacityBorderInput.checked,
        neon: musicProgressOpacityNeonInput.checked
    };
    const recordOpacityTargets = {
        fill: musicRecordOpacityFillInput.checked,
        border: musicRecordOpacityBorderInput.checked,
        neon: musicRecordOpacityNeonInput.checked
    };
    const actionOpacityTargets = {
        fill: musicActionOpacityFillInput.checked,
        border: musicActionOpacityBorderInput.checked,
        neon: musicActionOpacityNeonInput.checked
    };
    const actionTextOpacityTargets = {
        fill: musicActionTextOpacityFillInput.checked,
        border: musicActionTextOpacityBorderInput.checked,
        neon: musicActionTextOpacityNeonInput.checked
    };

    musicState.musicTheme = {
        ...getStoredMusicTheme(),
        bar: {
            ...getStoredMusicTheme().bar,
            fillColor: musicBarBgColorInput.value,
            borderColor: musicBarBorderColorInput.value,
            neonColor: musicBarNeonColorInput.value,
            fillOpacity: barOpacityTargets.fill ? Number(musicBarOpacityInput.value) : defaults.bar.fillOpacity,
            borderOpacity: barOpacityTargets.border ? Number(musicBarOpacityInput.value) : defaults.bar.borderOpacity,
            neonOpacity: barOpacityTargets.neon ? Number(musicBarOpacityInput.value) : defaults.bar.neonOpacity,
            opacityTargets: barOpacityTargets
        },
        text: {
            ...getStoredMusicTheme().text,
            fillColor: musicTextColorInput.value,
            strokeColor: musicTextStrokeColorInput.value,
            neonColor: musicTextNeonColorInput.value,
            fillOpacity: textOpacityTargets.fill ? Number(musicTextOpacityInput.value) : defaults.text.fillOpacity,
            strokeOpacity: textOpacityTargets.border ? Number(musicTextOpacityInput.value) : defaults.text.strokeOpacity,
            neonOpacity: textOpacityTargets.neon ? Number(musicTextOpacityInput.value) : defaults.text.neonOpacity,
            opacityTargets: textOpacityTargets
        },
        now: {
            ...getStoredMusicTheme().now,
            fillColor: musicNowColorInput.value,
            strokeColor: musicNowStrokeColorInput.value,
            neonColor: musicNowNeonColorInput.value,
            fillOpacity: nowOpacityTargets.fill ? Number(musicNowOpacityInput.value) : defaults.now.fillOpacity,
            strokeOpacity: nowOpacityTargets.border ? Number(musicNowOpacityInput.value) : defaults.now.strokeOpacity,
            neonOpacity: nowOpacityTargets.neon ? Number(musicNowOpacityInput.value) : defaults.now.neonOpacity,
            opacityTargets: nowOpacityTargets
        },
        progress: {
            ...getStoredMusicTheme().progress,
            fillColor: musicProgressColorInput.value,
            borderColor: musicProgressBorderColorInput.value,
            neonColor: musicProgressNeonColorInput.value,
            fillOpacity: progressOpacityTargets.fill ? Number(musicProgressOpacityInput.value) : defaults.progress.fillOpacity,
            borderOpacity: progressOpacityTargets.border ? Number(musicProgressOpacityInput.value) : defaults.progress.borderOpacity,
            neonOpacity: progressOpacityTargets.neon ? Number(musicProgressOpacityInput.value) : defaults.progress.neonOpacity,
            opacityTargets: progressOpacityTargets
        },
        record: {
            ...getStoredMusicTheme().record,
            neonColor: musicRecordNeonColorInput.value,
            fillOpacity: recordOpacityTargets.fill ? Number(musicRecordOpacityInput.value) : defaults.record.fillOpacity,
            borderOpacity: recordOpacityTargets.border ? Number(musicRecordOpacityInput.value) : defaults.record.borderOpacity,
            neonOpacity: recordOpacityTargets.neon ? Number(musicRecordOpacityInput.value) : defaults.record.neonOpacity,
            opacityTargets: recordOpacityTargets
        },
        action: {
            ...getStoredMusicTheme().action,
            fillColor: musicActionBgColorInput.value,
            borderColor: musicActionBorderColorInput.value,
            neonColor: musicActionNeonColorInput.value,
            fillOpacity: actionOpacityTargets.fill ? Number(musicActionOpacityInput.value) : defaults.action.fillOpacity,
            borderOpacity: actionOpacityTargets.border ? Number(musicActionOpacityInput.value) : defaults.action.borderOpacity,
            neonOpacity: actionOpacityTargets.neon ? Number(musicActionOpacityInput.value) : defaults.action.neonOpacity,
            opacityTargets: actionOpacityTargets,
            textColor: musicActionTextColorInput.value,
            textStrokeColor: musicActionTextStrokeColorInput.value,
            textNeonColor: musicActionTextNeonColorInput.value,
            textFillOpacity: actionTextOpacityTargets.fill ? Number(musicActionTextOpacityInput.value) : defaults.action.textFillOpacity,
            textStrokeOpacity: actionTextOpacityTargets.border ? Number(musicActionTextOpacityInput.value) : defaults.action.textStrokeOpacity,
            textNeonOpacity: actionTextOpacityTargets.neon ? Number(musicActionTextOpacityInput.value) : defaults.action.textNeonOpacity,
            textOpacityTargets: actionTextOpacityTargets
        }
    };
    saveMusicState();
    applyMusicThemeToPage();
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

function requestTrackBackgroundUpload(trackId) {
    pendingTrackBackgroundTargetId = trackId;
    trackBackgroundInput.value = "";
    trackBackgroundInput.click();
}

function handleTrackBackgroundUpload(event) {
    const file = event.target.files?.[0];
    const targetTrack = getTrackById(pendingTrackBackgroundTargetId);
    if (!file || !targetTrack) return;
    if (file.size > MAX_TRACK_BACKGROUND_SIZE) {
        alert("배경 이미지는 4MB 이하만 업로드할 수 있습니다.");
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        const previousArt = targetTrack.customBackgroundArt || "";
        targetTrack.customBackgroundArt = String(reader.result || "");

        if (!saveMusicState()) {
            targetTrack.customBackgroundArt = previousArt;
            alert("배경 이미지 저장에 실패했습니다. 파일 크기를 줄이거나 브라우저 저장 공간을 확인해주세요.");
            return;
        }

        renderMusicUI();
        renderLibraryPickerIfVisible();
    };
    reader.readAsDataURL(file);
}

function toggleTrackRotation(trackId) {
    const track = getTrackById(trackId);
    if (!track) return;
    track.rotateRecord = track.rotateRecord === false ? true : false;
    saveMusicState();
    renderMusicUI();
    renderLibraryPickerIfVisible();
}

async function deleteTrackFromLibrary(trackId) {
    const track = getTrackById(trackId);
    if (!track) return;

    const confirmed = confirm(`'${track.name}' 곡을 보관함에서 영구적으로 삭제할까요?`);
    if (!confirmed) return;

    if (musicState.playingTrackId === trackId) {
        stopYoutubePlayback();
        musicAudio.pause();
        musicAudio.removeAttribute("src");
        if (activeAudioUrl) {
            URL.revokeObjectURL(activeAudioUrl);
            activeAudioUrl = null;
        }
        musicState.playingTrackId = null;
    }

    if (musicState.selectedTrackId === trackId) {
        musicState.selectedTrackId = null;
    }

    musicState.library = musicState.library.filter((item) => item.id !== trackId);
    musicState.playlists = musicState.playlists.map((playlist) => ({
        ...playlist,
        trackIds: playlist.trackIds.filter((id) => id !== trackId)
    }));

    normalizeSelectedTrack();

    try {
        await deleteTrackBlob(trackId);
    } catch (error) {
        console.error("Failed to delete track blob", error);
    }

    saveMusicState();
    renderMusicUI();
    openPlaylistEditorIfVisible();
    renderLibraryPickerIfVisible();
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

        const rotateBtn = document.createElement("button");
        rotateBtn.type = "button";
        rotateBtn.className = "mini-btn";
        rotateBtn.title = "음반 회전 켜기 또는 끄기";
        rotateBtn.innerHTML = `<i class="fa-solid ${track.rotateRecord === false ? "fa-circle-stop" : "fa-rotate"}"></i>`;
        rotateBtn.onclick = () => toggleTrackRotation(track.id);

        const artBtn = document.createElement("button");
        artBtn.type = "button";
        artBtn.className = "mini-btn";
        artBtn.title = "곡 전용 음반 이미지";
        artBtn.innerHTML = '<i class="fa-solid fa-compact-disc"></i>';
        artBtn.onclick = () => requestTrackArtUpload(track.id);

        const backgroundBtn = document.createElement("button");
        backgroundBtn.type = "button";
        backgroundBtn.className = "mini-btn";
        backgroundBtn.title = "곡 전용 배경 이미지";
        backgroundBtn.innerHTML = '<i class="fa-solid fa-image"></i>';
        backgroundBtn.onclick = () => requestTrackBackgroundUpload(track.id);

        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "nav-btn";
        const alreadyAdded = Boolean(playlist && playlist.trackIds.includes(track.id));
        addBtn.textContent = alreadyAdded ? "추가됨" : "재생목록에 추가";
        addBtn.disabled = alreadyAdded;
        addBtn.onclick = () => addTrackToCurrentPlaylist(track.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "mini-btn";
        deleteBtn.title = "보관함에서 영구 삭제";
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.onclick = () => deleteTrackFromLibrary(track.id);

        actions.append(rotateBtn, artBtn, backgroundBtn, addBtn, deleteBtn);
        row.append(meta, actions);
        libraryPickerList.appendChild(row);
    });
}

function renderLibraryPickerIfVisible() {
    if (!libraryPickerModal.classList.contains("hidden")) {
        renderLibraryPicker();
    }
}

function applyGlobalRecordPreview() {
    const globalStyleId = musicState.globalRecordStyle || "classic";
    clearRecordStyleClasses(recordStylePreviewDisc);
    recordStylePreviewDisc.style.removeProperty("--custom-record-art");
    recordStylePreviewDisc.classList.add(`record-style-${globalStyleId}`);
}

function getTrackForMusicVisuals() {
    return getTrackById(musicState.playingTrackId) || getTrackById(musicState.selectedTrackId) || null;
}

function applyRecordAppearance() {
    const activeTrack = getTrackForMusicVisuals();
    const styleId = getEffectiveRecordStyle(activeTrack);
    const effectId = musicState.recordEffect || "none";

    clearRecordStyleClasses(recordDisc);
    recordDisc.style.removeProperty("--custom-record-art");
    recordDisc.classList.add(`record-style-${styleId}`);
    applyRecordEffectClasses(recordDisc, effectId);

    if (activeTrack?.customRecordArt) {
        const recordArtValue = `url("${activeTrack.customRecordArt}")`;
        recordDisc.style.setProperty("--custom-record-art", recordArtValue);
    }

    applyGlobalRecordPreview();
}

function applyMusicTrackBackdrop() {
    const musicPage = document.getElementById("music-page");
    if (!musicPage) return;

    const activeTrack = getTrackForMusicVisuals();
    const backgroundArt = activeTrack?.customBackgroundArt || "";
    const currentUser = getCurrentUser();
    const wallpaperImage = pendingBackgroundImage !== null
        ? pendingBackgroundImage
        : (currentUser?.backgroundImage || "");
    const applyHeaderWallpaper = Boolean(applyHeaderWallpaperInput?.checked || currentUser?.applyHeaderWallpaper);

    if (!backgroundArt) {
        lastAppliedMusicBackground = "";
        musicPage.classList.remove("has-track-background", "track-backdrop-refresh");
        musicPage.style.setProperty("--music-track-bg-url", "none");
        applySiteWallpaper(wallpaperImage, applyHeaderWallpaper);
        return;
    }

    const hasChanged = backgroundArt !== lastAppliedMusicBackground;
    lastAppliedMusicBackground = backgroundArt;
    musicPage.classList.add("has-track-background");
    musicPage.style.setProperty("--music-track-bg-url", `url("${backgroundArt}")`);
    pageHeader.style.setProperty("background-color", "#ffffff", "important");
    pageHeader.style.setProperty(
        "background-image",
        `linear-gradient(rgba(255,255,255,0.76), rgba(255,255,255,0.76)), url(${backgroundArt})`,
        "important"
    );
    pageHeader.style.setProperty("background-position", "center", "important");
    pageHeader.style.setProperty("background-size", "cover", "important");
    pageHeader.style.setProperty("background-repeat", "no-repeat", "important");

    if (hasChanged) {
        musicPage.classList.remove("track-backdrop-refresh");
        void musicPage.offsetWidth;
        musicPage.classList.add("track-backdrop-refresh");
    }
}

function clearTrackRecordArt(trackId) {
    const track = getTrackById(trackId);
    if (!track) return;
    track.customRecordArt = "";
    saveMusicState();
    renderMusicUI();
    renderLibraryPickerIfVisible();
}

function clearTrackBackgroundArt(trackId) {
    const track = getTrackById(trackId);
    if (!track) return;
    track.customBackgroundArt = "";
    saveMusicState();
    renderMusicUI();
    renderLibraryPickerIfVisible();
}

function renderLibraryPicker() {
    const playlist = getCurrentPlaylist();
    const activeVisualTrack = getTrackForMusicVisuals();
    const activeTrackId = activeVisualTrack?.id || null;
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

        const recordStatus = track.customRecordArt
            ? (activeTrackId === track.id ? "현재 음반 이미지 사용 중" : "음반 이미지 설정됨")
            : "음반 이미지 없음";
        const backgroundStatus = track.customBackgroundArt
            ? (activeTrackId === track.id ? "현재 배경 사용 중" : "배경 이미지 설정됨")
            : "배경 이미지 없음";

        const meta = document.createElement("div");
        meta.className = "playlist-edit-meta";
        meta.innerHTML = `
            <div class="playlist-edit-title">${track.name}</div>
            <div class="library-picker-type">${track.sourceType === "youtube" ? "유튜브 링크" : "mp3 파일"}</div>
            <div class="playlist-edit-subtitle">${recordStatus}</div>
            <div class="playlist-edit-subtitle">${backgroundStatus}</div>
        `;

        const actions = document.createElement("div");
        actions.className = "library-picker-actions";

        const rotateBtn = document.createElement("button");
        rotateBtn.type = "button";
        rotateBtn.className = "mini-btn";
        rotateBtn.title = "음반 회전 켜기 또는 끄기";
        rotateBtn.innerHTML = `<i class="fa-solid ${track.rotateRecord === false ? "fa-circle-stop" : "fa-rotate"}"></i>`;
        rotateBtn.onclick = () => toggleTrackRotation(track.id);

        const artBtn = document.createElement("button");
        artBtn.type = "button";
        artBtn.className = "mini-btn";
        artBtn.title = "곡 전용 음반 이미지 설정";
        artBtn.innerHTML = '<i class="fa-solid fa-compact-disc"></i>';
        artBtn.onclick = () => requestTrackArtUpload(track.id);

        const clearArtBtn = document.createElement("button");
        clearArtBtn.type = "button";
        clearArtBtn.className = "mini-btn";
        clearArtBtn.title = "음반 이미지 삭제";
        clearArtBtn.innerHTML = '<i class="fa-solid fa-eraser"></i>';
        clearArtBtn.disabled = !track.customRecordArt;
        clearArtBtn.onclick = () => clearTrackRecordArt(track.id);

        const backgroundBtn = document.createElement("button");
        backgroundBtn.type = "button";
        backgroundBtn.className = "mini-btn";
        backgroundBtn.title = "곡 전용 배경 이미지 설정";
        backgroundBtn.innerHTML = '<i class="fa-solid fa-image"></i>';
        backgroundBtn.onclick = () => requestTrackBackgroundUpload(track.id);

        const clearBackgroundBtn = document.createElement("button");
        clearBackgroundBtn.type = "button";
        clearBackgroundBtn.className = "mini-btn";
        clearBackgroundBtn.title = "배경 이미지 삭제";
        clearBackgroundBtn.innerHTML = '<i class="fa-solid fa-trash-can-arrow-up"></i>';
        clearBackgroundBtn.disabled = !track.customBackgroundArt;
        clearBackgroundBtn.onclick = () => clearTrackBackgroundArt(track.id);

        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "nav-btn";
        const alreadyAdded = Boolean(playlist && playlist.trackIds.includes(track.id));
        addBtn.textContent = alreadyAdded ? "추가됨" : "재생목록에 추가";
        addBtn.disabled = alreadyAdded;
        addBtn.onclick = () => addTrackToCurrentPlaylist(track.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "mini-btn";
        deleteBtn.title = "보관함에서 영구 삭제";
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.onclick = () => deleteTrackFromLibrary(track.id);

        actions.append(rotateBtn, artBtn, clearArtBtn, backgroundBtn, clearBackgroundBtn, addBtn, deleteBtn);
        row.append(meta, actions);
        libraryPickerList.appendChild(row);
    });
}

function getVideoLibraryKeyForUser(userId) {
    return userId ? `${VIDEO_LIBRARY_KEY_PREFIX}:${userId}` : null;
}

function getScopedVideoLibraryKey() {
    return getVideoLibraryKeyForUser(getCurrentUserId());
}

function initVideoPage() {
    if (videoViewer?.parentElement !== document.body) {
        document.body.appendChild(videoViewer);
    }
    if (miniVideoPlayer?.parentElement !== document.body) {
        document.body.appendChild(miniVideoPlayer);
    }
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
        miniVideoPlayer.classList.add("hidden");
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
        miniVideoPlayer.classList.add("hidden");
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

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
