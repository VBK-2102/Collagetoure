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

// Tour scenes configuration
const tourScenes = {
    aerialView: {
        title: "Aerial View",
        image: "scenes/aerial-view.jpg",
        thumbnail: "scenes/aerial-view.jpg",
        hotSpots: [
            {
                pitch: -2.1,
                yaw: 132.9,
                type: "scene",
                text: "Go to Main Gate",
                sceneId: "mainGate"
            },
            {
                pitch: -5,
                yaw: 90,
                type: "scene",
                text: "View Playground",
                sceneId: "playground"
            }
        ]
    },
    mainGate: {
        title: "Main Gate",
        image: "scenes/main-gate.jpg",
        thumbnail: "scenes/main-gate.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "Go to Admin Block",
                sceneId: "adminBlock"
            },
            {
                pitch: -10,
                yaw: 180,
                type: "scene",
                text: "View Aerial View",
                sceneId: "aerialView"
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
                yaw: 90,
                type: "scene",
                text: "Go to CSE Department",
                sceneId: "cseLab"
            }
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
            {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "Go to Library",
                sceneId: "library"
            }
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
                yaw: 90,
                type: "scene",
                text: "Go to Boys Hostel",
                sceneId: "boysHostel"
            }
        ]
    },
    classroom: {
        title: "Classroom",
        image: "scenes/Classroom.jpg",
        thumbnail: "scenes/Classroom.jpg",
        hotSpots: []
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
            }
        ]
    },
    cafe: {
        title: "Cafe",
        image: "scenes/Cafe,jpg.jpg",
        thumbnail: "scenes/Cafe,jpg.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: -90,
                type: "scene",
                text: "Back to Mess",
                sceneId: "mess"
            }
        ]
    },
    playground: {
        title: "Playground",
        image: "scenes/Playground.jpg",
        thumbnail: "scenes/Playground.jpg",
        hotSpots: [
            {
                pitch: 10,
                yaw: -45,
                type: "scene",
                text: "View Aerial View",
                sceneId: "aerialView"
            }
        ]
    },
    parking: {
        title: "Parking Area",
        image: "scenes/Parking.jpg",
        thumbnail: "scenes/Parking.jpg",
        hotSpots: []
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
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "Go to EEE Lab",
                sceneId: "eeeLab"
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
                yaw: -90,
                type: "scene",
                text: "Back to ME Lab",
                sceneId: "mechanicalLab"
            }
        ]
    },
    eeeLab: {
        title: "EEE Lab",
        image: "scenes/EEELab.jpg",
        thumbnail: "scenes/EEELab.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "Go to Physics Lab",
                sceneId: "physicsLab"
            },
            {
                pitch: 0,
                yaw: -90,
                type: "scene",
                text: "Back to ME Lab",
                sceneId: "mechanicalLab"
            }
        ]
    },
    physicsLab: {
        title: "Physics Lab",
        image: "scenes/PhyLab.jpg",
        thumbnail: "scenes/PhyLab.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: -90,
                type: "scene",
                text: "Back to EEE Lab",
                sceneId: "eeeLab"
            },
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "Go to Chemistry Lab",
                sceneId: "chemistryLab"
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
                yaw: -90,
                type: "scene",
                text: "Back to Physics Lab",
                sceneId: "physicsLab"
            },
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "Go to K-Tech Lab",
                sceneId: "ktechLab"
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
                yaw: -90,
                type: "scene",
                text: "Back to Chemistry Lab",
                sceneId: "chemistryLab"
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
                yaw: 90,
                type: "scene",
                text: "Go to MCA Department",
                sceneId: "mca"
            },
            {
                pitch: 0,
                yaw: 180,
                type: "scene",
                text: "Go to Diploma Block",
                sceneId: "diploma"
            }
        ]
    },
    mca: {
        title: "MCA Department",
        image: "scenes/MCA.jpg",
        thumbnail: "scenes/MCA.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: -90,
                type: "scene",
                text: "Back to MBA Department",
                sceneId: "mba"
            }
        ]
    },
    diploma: {
        title: "Diploma Block",
        image: "scenes/Diploma.jpg",
        thumbnail: "scenes/Diploma.jpg",
        hotSpots: [
            {
                pitch: 0,
                yaw: -90,
                type: "scene",
                text: "Back to MBA Department",
                sceneId: "mba"
            },
            {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "Go to Admin Block",
                sceneId: "adminBlock"
            }
        ]
    }
};

// Initialize viewer and variables
let viewer = null;
let currentScene = 'aerialView';
let isAutoRotating = false;
let rotationSpeed = 2; // degrees per second
let isMuted = false;

function initializeTour() {
    // Create thumbnails with titles
    const thumbnailStrip = document.querySelector('.thumbnail-strip');
    Object.entries(tourScenes).forEach(([id, scene]) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail';
        thumb.style.backgroundImage = `url(${scene.thumbnail})`;
        thumb.title = scene.title;
        thumb.dataset.sceneId = id;
        
        // Add title overlay to thumbnail
        const titleOverlay = document.createElement('div');
        titleOverlay.className = 'thumbnail-title';
        titleOverlay.textContent = scene.title;
        thumb.appendChild(titleOverlay);
        
        thumb.addEventListener('click', () => switchScene(id));
        thumbnailStrip.appendChild(thumb);
    });

    // Initialize Pannellum viewer with enhanced options
    viewer = pannellum.viewer('tourContainer', {
        default: {
            firstScene: 'aerialView',
            sceneFadeDuration: 1000,
            autoLoad: true,
            autoRotate: 0,
            autoRotateInactivityDelay: 3000
        },
        scenes: Object.entries(tourScenes).reduce((acc, [id, scene]) => {
            acc[id] = {
                title: scene.title,
                type: "equirectangular",
                panorama: scene.image,
                hotSpots: scene.hotSpots,
                yaw: 0,
                pitch: 0,
                hfov: 100
            };
            return acc;
        }, {})
    });

    // Add event listeners for navigation controls with visual feedback
    setupNavigationControls();
    
    // Update thumbnail highlighting when scene changes
    viewer.on('scenechange', (sceneId) => {
        currentScene = sceneId;
        updateThumbnailHighlight();
        // Reset auto-rotation when changing scenes
        if (isAutoRotating) {
            viewer.startAutoRotate(rotationSpeed);
        }
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
    
    // Mouse events
    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.classList.add('pressed');
        action();
        
        // Remove pressed state after animation
        setTimeout(() => button.classList.remove('pressed'), 200);
    });

    // Touch events
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
        fullscreenBtn.innerHTML = '';
    } else {
        document.exitFullscreen();
        fullscreenBtn.innerHTML = '';
    }
}

function toggleMute() {
    const muteBtn = document.getElementById('muteBtn');
    isMuted = !isMuted;
    muteBtn.classList.toggle('muted');
    muteBtn.innerHTML = isMuted ? '' : '';
    // Add your audio handling logic here
}

function toggleGrid() {
    const thumbnailStrip = document.querySelector('.thumbnail-strip');
    const gridBtn = document.getElementById('gridBtn');
    
    thumbnailStrip.classList.toggle('show');
    thumbnailStrip.classList.toggle('grid-view');
    gridBtn.classList.toggle('active');
    
    // Hide thumbnail strip when clicking outside
    if (thumbnailStrip.classList.contains('show')) {
        document.addEventListener('click', function closeGrid(e) {
            if (!thumbnailStrip.contains(e.target) && e.target !== gridBtn) {
                thumbnailStrip.classList.remove('show', 'grid-view');
                gridBtn.classList.remove('active');
                document.removeEventListener('click', closeGrid);
            }
        });
    }
}

function stopAutoRotate() {
    if (isAutoRotating) {
        isAutoRotating = false;
        viewer.stopAutoRotate();
    }
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

function switchScene(sceneId) {
    viewer.loadScene(sceneId);
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

    switchScene(sceneIds[newIndex]);
}

function updateThumbnailHighlight() {
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.toggle('active', thumb.dataset.sceneId === currentScene);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTour);

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});
