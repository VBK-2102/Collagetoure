// Handle navbar background on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
    } else {
        document.querySelector('.navbar').classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Tour scenes configuration with updated navigation structure
const tourScenes = {
    get1: {
        title: "Main Gate 1",
        image: "scenes/main-gate1.jpg",
        thumbnail: "scenes/main-gate1.jpg",
        audio: "scenes/get1.mp3",
        initialViewParameters: {
            pitch: 0,
            yaw: 180,
            fov: 100
        },
        hotSpots: [
            {
                pitch: 1,
                yaw: 160,
                type: "scene",
                text: "Go to Main Gate 2",
                sceneId: "get2"
            },
            {
                pitch: 1,
                yaw: 295,
                type: "scene",
                text: "Go to Boys Hostel",
                sceneId: "boysHostel"
            },
            {
                pitch: 1,
                yaw: 270,
                type: "scene",
                text: "Go to Girls Hostel",
                sceneId: "girlsHostel"
            }
        ]
    },
    get2: {
        title: "Main Gate 2",
        image: "scenes/main-gate2.jpg",
        thumbnail: "scenes/main-gate2.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "Go to Admin Block",
                sceneId: "adminBlock"
            },
            {
                pitch: 1,
                yaw: 180,
                type: "scene",
                text: "Go to Playground",
                sceneId: "playground"
            },
            {
                pitch: 0,
                yaw: 270,
                type: "scene",
                text: "Go to Main Gate 1",
                sceneId: "get1"
            }
        ]
    },
    adminBlock: {
        title: "Administrator Block",
        image: "scenes/Administratorblock.jpg",
        thumbnail: "scenes/Administratorblock.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }
        ]
    },
    openT: {
        title: "Open Theatre",
        image: "scenes/OpenT.jpg",
        thumbnail: "scenes/OpenT.jpg",
        hotSpots: [
            {
                pitch: 11,
                yaw: 340,
                type: "scene",
                text: "Go to CSE Lab",
                sceneId: "cseLab"
            },
            {
                pitch: 7,
                yaw: 200,
                type: "scene",
                text: "Go to AI Dept",
                sceneId: "AI"
            },{
                pitch: 15,
                yaw: 250,
                type: "scene",
                text: "Go to ClassRomm",
                sceneId: "classroom"
            },

            {
                pitch: 0,
                yaw: 310,
                type: "scene",
                text: "Go to Mechanical Lab",
                sceneId: "mechanicalLab"
            },
              {
                pitch: 0,
                yaw: 330,
                type: "scene",
                text: "Go to civil Staf ROOM",
                sceneId: "civil"
            },
            {
                pitch: 14,
                yaw: 20,
                type: "scene",
                text: "Go to MBA",
                sceneId: "mba"
            },
            {
                pitch: 15,
                yaw: 10,
                type: "scene",
                text: "Go to MCA",
                sceneId: "mca"
            },
            {
                pitch: 1,
                yaw: 300,
                type: "scene",
                text: "Go to Diploma",
                sceneId: "diploma"
            },
            {
                pitch: 15,
                yaw: 200,
                type: "scene",
                text: "Go to EEE Lab",
                sceneId: "eeeLab"
            },
            {
                pitch: 1,
                yaw: 30,
                type: "scene",
                text: "Go to Physics Lab",
                sceneId: "physicsLab"
            },
            {
                pitch: 13,
                yaw: 100,
                type: "scene",
                text: "Go to Library",
                sceneId: "library"
            },
            {
                pitch: -1,
                yaw: 35,
                type: "scene",
                text: "Go to Chemistry Lab",
                sceneId: "chemistryLab"
            },
            {
                pitch: 8,
                yaw: 90,
                type: "scene",
                text: "Go to K-Tech Lab",
                sceneId: "ktechLab"
            },{
                 pitch: 4,
                yaw: 290,
                type: "scene",
                text: "Go to Mathematics staff room",
                sceneId: "Mathematics"
            },
        ]
    },
    cseLab: {
        title: "CSE Lab",
        image: "scenes/CSELab.jpg",
        thumbnail: "scenes/CSELab.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "Go to CSE HOD Room",
                sceneId: "cseHOD"
            },
            {
                pitch: 0,
                yaw: -90,
                type: "scene",
                text: "Go to CSE Staff Room",
                sceneId: "cseStaffRoom"
            },
        ]
    },
    cseHOD: {
        title: "CSE HOD Room",
        image: "scenes/CSEHOD.jpg",
        thumbnail: "scenes/CSEHOD.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: -90,
                type: "scene",
                text: "Back to CSE Lab",
                sceneId: "cseLab"
            }
        ]
    },
    cseStaffRoom: {
        title: "CSE Staff Room",
        image: "scenes/CSEStafroom.jpg",
        thumbnail: "scenes/CSEStafroom.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "Go to CSE Lab",
                sceneId: "cseLab"
            },
            {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "Go to Classroom",
                sceneId: "classroom"
            }
        ]
    },
    library: {
        title: "Library",
        image: "scenes/Library.jpg",
        thumbnail: "scenes/Library.jpg",
        hotSpots: [
        {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }
        ]
    },
    classroom: {
        title: "Classroom",
        image: "scenes/Classroom.jpg",
        thumbnail: "scenes/Classroom.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }
        ]
    },
    boysHostel: {
        title: "Boys Hostel",
        image: "scenes/BoysHostal.jpg",
        thumbnail: "scenes/BoysHostal.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "View Hostel Room",
                sceneId: "hostelRoom"
            },
            {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "Go to Mess",
                sceneId: "mess"
            },
            {
                pitch: 0,
                yaw: 270,
                type: "scene",
                text: "Go to Main Gate 1",
                sceneId: "get1"
            }
        ]
    },
    girlsHostel: {
        title: "Girls Hostel",
        image: "scenes/GirlsHostal.jpg",
        thumbnail: "scenes/GirlsHostal.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "View Hostel Room",
                sceneId: "hostelRoom"
            },
            {
                pitch: 0,
                yaw: 270,
                type: "scene",
                text: "Go to Main Gate 1",
                sceneId: "get1"
            }
        ]
    },
    hostelRoom: {
        title: "Hostel Room",
        image: "scenes/Hostelroom.jpg",
        thumbnail: "scenes/Hostelroom.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: -90,
                type: "scene",
                text: "Back to Boys Hostel",
                sceneId: "boysHostel"
            },
            {
                pitch: 1,
                yaw: 180,
                type: "scene",
                text: "Go to Boys Hostel",
                sceneId: "boysHostel"
            }
        ]
    },
    mess: {
        title: "Mess",
        image: "scenes/Mess.jpg",
        thumbnail: "scenes/Mess.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "Go to Cafe",
                sceneId: "cafe"
            },
            {
                pitch: 1,
                yaw: 295,
                type: "scene",
                text: "Go to Boys Hostel",
                sceneId: "boysHostel"
            }
        ]
    },
    cafe: {
        title: "Cafe",
        image: "scenes/Cafe,jpg.jpg",
        thumbnail: "scenes/Cafe,jpg.jpg",
        hotSpots: [
            {
                pitch: 1,
                yaw: 180,
                type: "scene",
                text: "Go to Playground",
                sceneId: "playground"
            },
        ]
    },
    playground: {
        title: "Playground",
        image: "scenes/Playground.jpg",
        thumbnail: "scenes/Playground.jpg",
        hotSpots: [{
            pitch:1,
            yaw:120,
            type:"scene",
            text:"Go to Praking Area",
            sceneId:"parking"
        },
            {
                pitch: 1,
                yaw: 160,
                type: "scene",
                text: "Go to Main Gate 2",
                sceneId: "get2"
            },]
    },
    parking: {
        title: "Parking Area",
        image: "scenes/Parking.jpg",
        thumbnail: "scenes/Parking.jpg",
        hotSpots: [
            {
                pitch: 1,
                yaw: 160,
                type: "scene",
                text: "Go to Main Gate 2",
                sceneId: "get2"
            }
        ]
    },
    mechanicalLab: {
        title: "Mechanical Lab",
        image: "scenes/MELab.jpg",
        thumbnail: "scenes/MELab.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "Go to ME Staff Room",
                sceneId: "mechanicalStaffRoom"
            },
            {
                pitch: 1,
                yaw: 180,
                type: "scene",
                text: "Go to Playground",
                sceneId: "playground"
            }
        ]
    },
    mechanicalStaffRoom: {
        title: "Mechanical Staff Room",
        image: "scenes/MEStafroom.jpg",
        thumbnail: "scenes/MEStafroom.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            },
        ]
    },
    civil: {
        title: "Civil Staf Room",
        image: "scenes/Civilstafroom.jpg",
        thumbnail: "scenes/Civilstafroom.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }]
    },
    eeeLab: {
        title: "EEE Lab",
        image: "scenes/EEELab.jpg",
        thumbnail: "scenes/EEELab.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }]
    },
    physicsLab: {
        title: "Physics Lab",
        image: "scenes/PhyLab.jpg",
        thumbnail: "scenes/PhyLab.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }
        ]
    },
    chemistryLab: {
        title: "Chemistry Lab",
        image: "scenes/CheLab.jpg",
        thumbnail: "scenes/CheLab.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }
        ]
    },
    ktechLab: {
        title: "K-Tech Lab",
        image: "scenes/KTechlab.jpg",
        thumbnail: "scenes/KTechlab.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }
        ]
    },
    mba: {
        title: "MBA Department",
        image: "scenes/MBA.jpg",
        thumbnail: "scenes/MBA.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 100,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            },
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to MBA HOD room",
                sceneId: "MBAhod"
            }
        ]
    },
     MBAhod: {
        title: "MBA HOD room",
        image: "scenes/MABHOD.jpg",
        thumbnail: "scenes/MABHOD.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }]
    },
    mca: {
        title: "MCA Department",
        image: "scenes/MCA.jpg",
        thumbnail: "scenes/MCA.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }]
    },
    diploma: {
        title: "Diploma Block",
        image: "scenes/Diploma.jpg",
        thumbnail: "scenes/Diploma.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }
        ]
    },
    Mathematics: {
        title: "Mathematics Staf Room",
        image: "scenes/MathStafroom.jpg",
        thumbnail: "scenes/MathStafroom.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }
        ]
    },
    AI: {
        title: "AIStafroom",
        image: "scenes/AIStafroom.jpg",
        thumbnail: "scenes/AIStafroom.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 350,
                type: "scene",
                text: "Go to Open Theatre",
                sceneId: "openT"
            }
        ]
    }
};
// Initialize viewer and variables
let viewer = null;
let currentScene = 'get1';
let isAutoRotating = false;
let rotationSpeed = 3;
let isMuted = false;
let audioElement = null;
let gridClickHandler = null;

function initializeTour() {
    // Create thumbnails with titles
    const thumbnailStrip = document.querySelector('.thumbnail-strip');
    thumbnailStrip.innerHTML = ''; // Clear existing thumbnails
    
    Object.entries(tourScenes).forEach(([id, scene]) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail';
        thumb.style.backgroundImage = `url(${scene.thumbnail})`;
        thumb.dataset.sceneId = id;
        
        const titleOverlay = document.createElement('div');
        titleOverlay.className = 'thumbnail-title';
        titleOverlay.textContent = scene.title;
        thumb.appendChild(titleOverlay);
        
        thumb.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            switchScene(id);
            
            // Close grid after selection
            const thumbnailStrip = document.querySelector('.thumbnail-strip');
            const gridBtn = document.getElementById('gridBtn');
            thumbnailStrip.classList.remove('show');
            gridBtn.classList.remove('active');
            
            if (gridClickHandler) {
                document.removeEventListener('click', gridClickHandler);
                gridClickHandler = null;
            }
        });
        
        thumbnailStrip.appendChild(thumb);
    });
    // Initialize Pannellum viewer
    viewer = pannellum.viewer('tourContainer', {
        default: {
            firstScene: currentScene,
            sceneFadeDuration: 1000,
            autoLoad: true,
            autoRotate: 0,
            autoRotateInactivityDelay: 3000,
            hotSpotDebug: false,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            mouseZoom: false
        },
        scenes: Object.entries(tourScenes).reduce((acc, [id, scene]) => {
            acc[id] = {
                title: scene.title,
                type: "equirectangular",
                panorama: scene.image,
                hotSpots: scene.hotSpots.map(hotspot => ({
                    pitch: hotspot.pitch,
                    yaw: hotspot.yaw,
                    type: hotspot.type,
                    text: hotspot.text,
                    sceneId: hotspot.sceneId,
                    cssClass: 'custom-hotspot',
                    clickHandlerFunc: () => smoothSceneChange(hotspot.sceneId)
                })),
                yaw: scene.initialViewParameters?.yaw || 0,
                pitch: scene.initialViewParameters?.pitch || 0,
                hfov: scene.initialViewParameters?.fov || 100
            };
            return acc;
        }, {})
    });

    // Auto-play audio for first scene
    playSceneAudio(currentScene);

    // Update when scene changes
    viewer.on('scenechange', (newSceneId) => {
        currentScene = newSceneId;
        updateThumbnailHighlight();
        
        // Stop previous audio and play new scene audio
        stopAudio();
        playSceneAudio(newSceneId);
        
        // Reset auto-rotation when changing scenes
        if (isAutoRotating) {
            viewer.startAutoRotate(rotationSpeed);
        }
    });

    // Setup navigation controls
    setupNavigationControls();
}

function playSceneAudio(sceneId) {
    if (isMuted || !tourScenes[sceneId]?.audio) return;
    
    stopAudio();
    
    audioElement = new Audio(tourScenes[sceneId].audio);
    audioElement.volume = 0.7;
    
    // Enable autoplay by first playing on a user interaction
    const playAudio = () => {
        audioElement.play().catch(e => console.log("Audio play failed:", e));
        document.removeEventListener('click', playAudio);
        document.removeEventListener('keydown', playAudio);
    };
    
    // Wait for user interaction before playing
    document.addEventListener('click', playAudio, { once: true });
    document.addEventListener('keydown', playAudio, { once: true });
}

function stopAudio() {
    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
}

function toggleMute() {
    isMuted = !isMuted;
    const muteBtn = document.getElementById('muteBtn');
    muteBtn.classList.toggle('muted');
    muteBtn.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    
    if (isMuted) {
        stopAudio();
    } else {
        playSceneAudio(currentScene);
    }
}

function smoothSceneChange(sceneId) {
    // Create transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'transition-overlay';
    document.getElementById('tourContainer').appendChild(overlay);
    
    // Fade in overlay
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);
    
    // Change scene after delay
    setTimeout(() => {
        switchScene(sceneId);
        
        // After scene loads, fade out overlay
        viewer.on('load', function() {
            setTimeout(() => {
                overlay.style.opacity = '0';
                
                // Remove overlay after transition
                setTimeout(() => {
                    overlay.remove();
                }, 800);
            }, 300);
        }, { once: true });
    }, 500);
}

function switchScene(sceneId) {
    if (!viewer || !sceneId || !tourScenes[sceneId]) return;
    
    try {
        viewer.loadScene(sceneId);
        currentScene = sceneId;
        updateThumbnailHighlight();
    } catch (error) {
        console.error('Error loading scene:', error);
    }
}

function updateThumbnailHighlight() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.classList.toggle('active', thumb.dataset.sceneId === currentScene);
    });
}

function setupNavigationControls() {
    // Scene navigation
    setupButton('prevBtn', () => navigateScenes('prev'));
    setupButton('nextBtn', () => navigateScenes('next'));
    
    // View controls
    setupButton('leftBtn', () => {
        const currentYaw = viewer.getYaw();
        viewer.setYaw(currentYaw - 10);
        stopAutoRotate();
    });
    
    setupButton('rightBtn', () => {
        const currentYaw = viewer.getYaw();
        viewer.setYaw(currentYaw + 10);
        stopAutoRotate();
    });
    
    setupButton('upBtn', () => {
        const currentPitch = viewer.getPitch();
        viewer.setPitch(currentPitch + 10);
        stopAutoRotate();
    });
    
    setupButton('downBtn', () => {
        const currentPitch = viewer.getPitch();
        viewer.setPitch(currentPitch - 10);
        stopAutoRotate();
    });
    
    // Zoom controls
    setupButton('zoomInBtn', () => {
        viewer.setHfov(viewer.getHfov() - 10);
        stopAutoRotate();
    });
    
    setupButton('zoomOutBtn', () => {
        viewer.setHfov(viewer.getHfov() + 10);
        stopAutoRotate();
    });
    
    // Special controls
    setupButton('fullscreenBtn', toggleFullscreen);
    setupButton('muteBtn', toggleMute);
    setupButton('gridBtn', toggleGrid);

    // Double-click to fullscreen
    document.getElementById('tourContainer').addEventListener('dblclick', toggleFullscreen);

    // Keyboard controls
    document.addEventListener('keydown', handleKeyPress);
}

function setupButton(id, action) {
    const button = document.getElementById(id);
    if (!button) return;
    
    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.classList.add('pressed');
        action();
        setTimeout(() => button.classList.remove('pressed'), 200);
    });

    button.addEventListener('touchstart', (e) => {
        e.preventDefault();
        button.classList.add('pressed');
    });
    
    button.addEventListener('touchend', (e) => {
        e.preventDefault();
        action();
        button.classList.remove('pressed');
    });
}

function toggleFullscreen() {
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        document.exitFullscreen();
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    }
}

function toggleGrid() {
    const thumbnailStrip = document.querySelector('.thumbnail-strip');
    const gridBtn = document.getElementById('gridBtn');
    
    if (!thumbnailStrip || !gridBtn) return;
    
    // Remove previous handler if exists
    if (gridClickHandler) {
        document.removeEventListener('click', gridClickHandler);
    }
    
    // Toggle grid visibility
    thumbnailStrip.classList.toggle('show');
    gridBtn.classList.toggle('active');
    
    if (thumbnailStrip.classList.contains('show')) {
        // Add new handler
        gridClickHandler = (e) => {
            // Close if clicking outside grid or on grid button
            if (!thumbnailStrip.contains(e.target) && e.target !== gridBtn) {
                thumbnailStrip.classList.remove('show');
                gridBtn.classList.remove('active');
                document.removeEventListener('click', gridClickHandler);
                gridClickHandler = null;
            }
        };
        document.addEventListener('click', gridClickHandler);
    }
}

function stopAutoRotate() {
    if (isAutoRotating) {
        isAutoRotating = false;
        viewer.stopAutoRotate();
    }
}

function navigateScenes(direction) {
    const sceneIds = Object.keys(tourScenes);
    const currentIndex = sceneIds.indexOf(currentScene);
    let newIndex;

    if (direction === 'prev') {
        newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = sceneIds.length - 1;
    } else {
        newIndex = (currentIndex + 1) % sceneIds.length;
    }

    smoothSceneChange(sceneIds[newIndex]);
}

function handleKeyPress(e) {
    const keyActions = {
        'ArrowLeft': () => {
            const currentYaw = viewer.getYaw();
            viewer.setYaw(currentYaw - 10);
            stopAutoRotate();
        },
        'ArrowRight': () => {
            const currentYaw = viewer.getYaw();
            viewer.setYaw(currentYaw + 10);
            stopAutoRotate();
        },
        'ArrowUp': () => {
            const currentPitch = viewer.getPitch();
            viewer.setPitch(currentPitch + 10);
            stopAutoRotate();
        },
        'ArrowDown': () => {
            const currentPitch = viewer.getPitch();
            viewer.setPitch(currentPitch - 10);
            stopAutoRotate();
        },
        '+': () => {
            const currentHfov = viewer.getHfov();
            viewer.setHfov(Math.max(currentHfov - 10, 30));
            stopAutoRotate();
        },
        '-': () => {
            const currentHfov = viewer.getHfov();
            viewer.setHfov(Math.min(currentHfov + 10, 120));
            stopAutoRotate();
        },
        'f': toggleFullscreen,
        'm': toggleMute,
        'g': toggleGrid,
        ' ': () => {
            isAutoRotating = !isAutoRotating;
            if (isAutoRotating) {
                viewer.startAutoRotate(rotationSpeed);
            } else {
                viewer.stopAutoRotate();
            }
        }
    };

    if (keyActions[e.key]) {
        e.preventDefault();
        keyActions[e.key]();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTour);