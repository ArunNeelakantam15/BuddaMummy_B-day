// Global JavaScript functions for the birthday website
let globalBirthdayMusicPlaying = false;

// Custom Love Cursor Trail
let cursorTrailElements = [];

document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.innerHTML = ['💜', '💖', '💕', '✨'][Math.floor(Math.random() * 4)];
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.position = 'fixed';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9999';
    trail.style.fontSize = '12px';
    trail.style.animation = 'cursorTrailFade 1s ease-out forwards';
    document.body.appendChild(trail);
    
    cursorTrailElements.push(trail);
    
    if (cursorTrailElements.length > 10) {
        const oldTrail = cursorTrailElements.shift();
        if (oldTrail.parentNode) {
            oldTrail.parentNode.removeChild(oldTrail);
        }
    }
    
    setTimeout(() => {
        if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
        }
    }, 1000);
});

// Continuous Hearts and Sparkles Rain (ALL PAGES)
function createContinuousHeartRain() {
    const container = document.getElementById('heartsRain');
    if (!container) return;
    
    const hearts = ['💜', '💖', '💕', '💗', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
        heart.style.position = 'absolute';
        heart.style.top = '-50px';
        heart.style.animation = `heartRain ${Math.random() * 3 + 2}s linear forwards`;
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1';
        heart.style.userSelect = 'none';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 5000);
    }, 200);
}

function createContinuousSparkleRain() {
    const container = document.getElementById('sparklesRain');
    if (!container) return;
    
    const sparkles = ['✨', '⭐', '🌟', '💫'];
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-particle';
        sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.fontSize = (Math.random() * 12 + 8) + 'px';
        sparkle.style.position = 'absolute';
        sparkle.style.top = '-50px';
        sparkle.style.animation = `sparkleRain ${Math.random() * 4 + 3}s linear forwards`;
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1';
        sparkle.style.userSelect = 'none';
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.remove();
            }
        }, 6000);
    }, 400);
}

// Intensive Hearts and Sparkles Rain (Personal Message Page)
function createIntensiveHeartRain() {
    const container = document.getElementById('intensiveHeartsRain');
    if (!container) return;
    
    const hearts = ['💜', '💖', '💕', '💗', '💝', '😍', '🥰', '😘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.position = 'absolute';
        heart.style.top = '-50px';
        heart.style.animation = `heartRain ${Math.random() * 2 + 1}s linear forwards`;
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '2';
        heart.style.userSelect = 'none';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 3000);
    }, 100);
}

function createIntensiveSparkleRain() {
    const container = document.getElementById('intensiveSparklesRain');
    if (!container) return;
    
    const sparkles = ['✨', '⭐', '🌟', '💫', '🌠', '🌈'];
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-particle';
        sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.fontSize = (Math.random() * 18 + 12) + 'px';
        sparkle.style.position = 'absolute';
        sparkle.style.top = '-50px';
        sparkle.style.animation = `sparkleRain ${Math.random() * 2 + 1.5}s linear forwards`;
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '2';
        sparkle.style.userSelect = 'none';
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.remove();
            }
        }, 3500);
    }, 80);
}

// FIXED: Music Control System - Starts from Beginning on Fresh Journey
function initializeBirthdayMusic() {
    const audio = document.getElementById('globalBirthdayMusic');
    const button = document.getElementById('globalMusicToggle');
    if (!audio) return;

    const savedTime = localStorage.getItem('birthdayMusicCurrentTime');
    const alreadyUsed = localStorage.getItem('birthdayMusicStarted') === 'true';

    // Only restore the time after the first play has happened
    if (alreadyUsed && savedTime) {
        audio.currentTime = parseFloat(savedTime);
    } else {
        audio.currentTime = 0; // Always begin from the start
    }

    if (button) {
        const playing = localStorage.getItem('birthdayMusicPlaying') === 'true';
        button.textContent = playing ? '🔇 Pause Birthday Music'
                                     : '🎵 Play Birthday Music';
        if (playing) audio.play().catch(() => {});
    }

    audio.removeAttribute('autoplay');
}

// Modified toggle function with time saving and first-play tracking
function toggleGlobalBirthdayMusic() {
    const audio = document.getElementById('globalBirthdayMusic');
    const button = document.getElementById('globalMusicToggle');
    
    if (!audio || !button) return;
    
    if (audio.paused) {
        audio.play().then(() => {
            button.textContent = '🔇 Pause Birthday Music';
            localStorage.setItem('birthdayMusicPlaying', 'true');
            localStorage.setItem('birthdayMusicStarted', 'true'); // Mark first play
        }).catch(e => {
            console.log('Music play failed:', e);
            alert('Please allow audio playback for the full birthday experience! 💜');
        });
    } else {
        audio.pause();
        localStorage.setItem('birthdayMusicPlaying', 'false');
        localStorage.setItem('birthdayMusicCurrentTime', audio.currentTime.toString());
        button.textContent = '🎵 Play Birthday Music';
    }
}

// Save music position when leaving page
function saveMusicState() {
    const audio = document.getElementById('globalBirthdayMusic');
    if (audio && !audio.paused) {
        localStorage.setItem('birthdayMusicCurrentTime', audio.currentTime.toString());
    }
}

// Add event listener for page unload
window.addEventListener('beforeunload', saveMusicState);

// Audio control functions
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play().catch(e => {
            console.log('Audio play failed:', e);
            alert('Please make sure the audio file exists in assets/audio/' + audioId + '.mp3');
        });
    }
}

function pauseAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.pause();
    }
}

// Multiple choice selection for Chamber 1
function selectChoice(element, type) {
    document.querySelectorAll('.choice-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    element.classList.add('selected');
    
    const radio = element.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
    }
    
    element.dataset.answerType = type;
}

function checkMultipleChoice() {
    const selectedOption = document.querySelector('.choice-option.selected');
    
    if (!selectedOption) {
        alert('Please select an answer, my darling! 💜');
        return;
    }
    
    const answerType = selectedOption.dataset.answerType;
    
    if (answerType === 'correct') {
        alert('Perfect answer, my love! You know Dada\'s heart so well! 💜');
        setTimeout(() => {
            window.location.href = 'chamber2.html';
        }, 1000);
    } else {
        alert('Think again, my sweetheart! What truly makes Dada the happiest? 💜');
        document.querySelectorAll('.choice-option').forEach(option => {
            option.classList.remove('selected');
        });
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
        });
    }
}

// Chat message display for Chamber 2
function displayChatMessages() {
    const chatMessages = [
        { sender: 'Dada', message: 'Ohhh Bujjammaaaaa, Naakocham oka paata paadochu kadha! 🎵', time: '6:00 PM' },
        { sender: 'Fafa', message: 'No dada, Naaku raavu', time: '6:01 PM' },
        { sender: 'Dada', message: 'Paadandi Bujjithalli naakocham naa Kuchamma kadhaaa', time: '6:02 PM' },
        { sender: 'Fafa', message: 'Chare Paadatha kani meeru Navvakudadu', time: '6:02 PM' },
        { sender: 'Dada', message: 'Chare assala navvanu paadandi', time: '6:02 PM' },
        { sender: 'Fafa', message: 'Chare Vinandi', time: '6:03 PM', hasAudio: true, audioId: 'fafa-song' },
        { sender: 'Dada', message: 'Chuperrrrrr Buddoruuu! Attttt Gaana koyilaaaaa! 😍', time: '6:04 PM' },
        { sender: 'Fafa', message: 'Hehe, Chare chare kani Dada eppudu meeru', time: '6:05 PM' },
        { sender: 'Dada', message: 'Nenu aa naaku paatal rav', time: '6:05 PM' },
        { sender: 'Fafa', message: 'Chare aithe naakosam cheppandi mee maatalalo 💝', time: '6:05 PM' },
        { sender: 'Dada', message: 'Already cheppesa kadha Bangaram chaalasarlu', time: '6:06 PM' },
        { sender: 'Fafa', message: 'It\'s okay dada. Avi anni text message lu kadha naaku vinali ani vundi cheppandi👂', time: '6:07 PM' },
        { sender: 'Dada', message: 'Ok my daughter, here it is! 💜', time: '6:08 PM', hasAudio: true, audioId: 'dada-message' },
        { sender: 'Fafa', message: 'Eyuuuuuuu Kaavi naa Nanna! 🥰', time: '6:09 PM' },
        { sender: 'Dada', message: 'Hehe, Chare kani enka muchatlu aapi cake koddam padhandi🎂', time: '6:10 PM' },
        { sender: 'Fafa', message: 'Chare Dada. Yethukondi, I don\'t know how to walk! 🤗', time: '6:11 PM' },
        { sender: 'Dada', message: 'Okay my sweetheart, come on! Let\'s cut the cake along with dancing! 💃🕺', time: '6:12 PM' }
    ];
    
    const container = document.getElementById('chatMessages');
    if (!container) return;
    
    if (container.dataset.messagesLoaded === 'true') {
        return;
    }
    
    container.innerHTML = '';
    container.dataset.messagesLoaded = 'true';
    
    chatMessages.forEach((msg, index) => {
        setTimeout(() => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${msg.sender.toLowerCase()}`;
            
            let audioControls = '';
            if (msg.hasAudio) {
                audioControls = `
                    <div class="audio-controls-inline">
                        <button class="audio-play-btn" onclick="playAudio('${msg.audioId}')">▶️ Play</button>
                        <button class="audio-pause-btn" onclick="pauseAudio('${msg.audioId}')">⏸️ Pause</button>
                        <audio id="${msg.audioId}" preload="auto">
                            <source src="assets/audio/${msg.audioId}.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                `;
            }
            
            messageDiv.innerHTML = `
                <div class="message-content">
                    <strong>${msg.sender}:</strong> ${msg.message}
                    ${audioControls}
                    <span class="message-time">${msg.time}</span>
                </div>
            `;
            container.appendChild(messageDiv);
            container.scrollTop = container.scrollHeight;
            
                        if (index === chatMessages.length - 1) {
                setTimeout(() => {
                    const nextSection = document.getElementById('nextChamberSection');
                    if (nextSection) {
                        nextSection.style.display = 'block';
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 1000);
            }
        }, index * 1800);
    });
}

// Chamber 2 to Chamber 3 transition
function proceedToChamber3() {
    const answer = document.getElementById('memoryAnswer');
    if (!answer) return;
    
    if (answer.value.trim()) {
        alert('Beautiful memory, my love! Now let\'s go cut the cake! 💜');
        setTimeout(() => {
            window.location.href = 'chamber3.html';
        }, 1000);
    } else {
        alert('Please share a memory with Dada! 💕');
        answer.focus();
    }
}

// SIMPLIFIED: Chamber 3 cake cutting (No overwhelming celebration effects)
function blowCandles() {
    const wishInput = document.getElementById('wishInput');
    if (!wishInput) return;
    
    const wish = wishInput.value.trim();
    if (!wish) {
        alert('Make a wish first, my love! 💜');
        wishInput.focus();
        return;
    }
    
    localStorage.setItem('birthdayWish', wish);
    localStorage.setItem('wishDate', new Date().toISOString());
    
    // Animate candles going out
    const flames = document.querySelectorAll('.flame');
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.opacity = '0';
            flame.style.transform = 'scale(0)';
        }, index * 300);
    });
    
    // Show cake cutting section (simplified, no overwhelming effects)
    setTimeout(() => {
        const cuttingSection = document.getElementById('cakeCuttingSection');
        const blowButton = document.getElementById('blowButton');
        
        if (cuttingSection) {
            cuttingSection.style.display = 'block';
            cuttingSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (blowButton) {
            blowButton.style.display = 'none';
        }
    }, 1000);
}

// FIXED: Cake Slices - No Double Animation
function cutCake() {
    const cakeSlices = document.getElementById('cakeSlices');
    const cutButton = document.getElementById('cutCakeButton');
    const memoriesButton = document.getElementById('memoriesButton');
    
    if (cakeSlices) {
        cakeSlices.style.display = 'flex';
        // Remove any existing animations first
        const fafaSlice = document.getElementById('fafaSlice');
        const dadaSlice = document.getElementById('dadaSlice');
        
        if (fafaSlice) {
            fafaSlice.style.animation = 'none';
            fafaSlice.style.opacity = '0';
        }
        if (dadaSlice) {
            dadaSlice.style.animation = 'none';
            dadaSlice.style.opacity = '0';
        }
    }
    
    if (cutButton) {
        cutButton.style.display = 'none';
    }
    if (memoriesButton) {
        memoriesButton.style.display = 'block';
    }
    
    // Apply animations after a brief delay for clean single animation
    setTimeout(() => {
        const fafaSlice = document.getElementById('fafaSlice');
        const dadaSlice = document.getElementById('dadaSlice');
        
        if (fafaSlice) {
            fafaSlice.style.animation = 'slideInLeft 1s ease-out forwards';
        }
        if (dadaSlice) {
            dadaSlice.style.animation = 'slideInRight 1s ease-out forwards';
        }
    }, 100);
}

function sendHug() {
    const hugAnimation = document.getElementById('hugAnimation');
    const hugButton = document.getElementById('hugButton');
    
    if (hugAnimation) {
        hugAnimation.style.display = 'block';
        hugAnimation.style.animation = 'hugPulse 2s ease-in-out';
        hugAnimation.style.textAlign = 'center';
    }
    
    if (hugButton) {
        hugButton.style.display = 'none';
    }
    
    const hugCount = parseInt(localStorage.getItem('hugCount') || '0') + 1;
    localStorage.setItem('hugCount', hugCount.toString());
    localStorage.setItem('lastHugDate', new Date().toISOString());
    
    setTimeout(() => {
        if (hugAnimation) {
            hugAnimation.style.display = 'none';
        }
        if (hugButton) {
            hugButton.style.display = 'block';
        }
    }, 3000);
}

function goToMemories() {
    window.location.href = 'chamber4.html';
}

// Chamber 4 memory functions
function loadMemoryWall() {
    const memoryPhotos = [
        { src: 'assets/images/photo1.jpg', caption: 'Our First Hug' },
        { src: 'assets/images/photo2.jpg', caption: 'Picnic Day' },
        { src: 'assets/images/photo3.jpg', caption: 'Bedtime Stories' },
        { src: 'assets/images/photo4.jpg', caption: 'Shopping Together' },
        { src: 'assets/images/photo5.jpg', caption: 'Cooking Fun' },
        { src: 'assets/images/photo6.jpg', caption: 'Movie Night' }
    ];
    
    const photoGrid = document.getElementById('photoGrid');
    if (!photoGrid) return;
    
    photoGrid.innerHTML = '';
    
    memoryPhotos.forEach((photo, index) => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        photoCard.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmMGYwZjAiLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1lbW9yeSBQaG90bzwvdGV4dD4KPC9zdmc+'">
            <div class="photo-caption">${photo.caption}</div>
        `;
        photoCard.style.animationDelay = `${index * 0.2}s`;
        photoGrid.appendChild(photoCard);
    });
}

function saveTimeCapsule() {
    const timeCapsuleMessage = document.getElementById('timeCapsuleMessage');
    if (!timeCapsuleMessage) return;
    
    const message = timeCapsuleMessage.value.trim();
    if (message) {
        const timestamp = new Date().toISOString();
        localStorage.setItem('timeCapsuleMessage', message);
        localStorage.setItem('timeCapsuleDate', timestamp);
        alert('Your message has been saved in our time capsule! 🕰️💜');
        timeCapsuleMessage.value = '';
    } else {
        alert('Please write a message for the time capsule! 💝');
        timeCapsuleMessage.focus();
    }
}

// FIXED: Personal Message Navigation
function openPersonalMessage() {
    localStorage.setItem('returnPage', 'chamber4.html');
    window.location.href = 'personal-message.html';
}

function savePersonalMessage() {
    const messageText = document.getElementById('personalMessageText');
    if (!messageText) return;
    
    const message = messageText.value.trim();
    if (message) {
        localStorage.setItem('personalBirthdayMessage', message);
        localStorage.setItem('personalMessageDate', new Date().toISOString());
        alert('Your personal birthday message has been saved! 💜');
    } else {
        alert('Please write your personal message first! 💝');
        messageText.focus();
    }
}

// UPDATED: Journey Restart with Music Reset
function restartJourney() {
    if (confirm('Are you sure you want to restart the magical journey? 💜')) {
        // Clear all music state for fresh start
        localStorage.removeItem('birthdayMusicCurrentTime');
        localStorage.removeItem('birthdayMusicStarted');
        localStorage.setItem('birthdayMusicPlaying', 'false');
        
        window.location.href = 'index.html';
    }
}

// Floating effects
function createFireflies() {
    const firefliesContainer = document.querySelector('.fireflies');
    if (!firefliesContainer) return;
    
    firefliesContainer.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.animationDelay = Math.random() * 4 + 's';
        firefly.style.animationDuration = (Math.random() * 3 + 2) + 's';
        firefly.style.position = 'absolute';
        firefly.style.width = '4px';
        firefly.style.height = '4px';
        firefly.style.background = '#ffff00';
        firefly.style.borderRadius = '50%';
        firefly.style.boxShadow = '0 0 10px #ffff00';
        firefly.style.animation = 'firefly ' + (Math.random() * 6 + 4) + 's linear infinite';
        firefly.style.pointerEvents = 'none';
        firefly.style.zIndex = '1';
        firefliesContainer.appendChild(firefly);
    }
}

function createFloatingBubbles() {
    const container = document.querySelector('.floating-bubbles');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.position = 'absolute';
        bubble.style.width = (Math.random() * 30 + 10) + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.background = 'rgba(255, 255, 255, 0.3)';
        bubble.style.borderRadius = '50%';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.bottom = '-50px';
        bubble.style.animation = 'bubbleFloat ' + (Math.random() * 4 + 3) + 's ease-in-out infinite';
        bubble.style.animationDelay = Math.random() * 2 + 's';
        bubble.style.pointerEvents = 'none';
        bubble.style.border = '1px solid rgba(255, 255, 255, 0.2)';
        
        container.appendChild(bubble);
    }
}

// Page initialization
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            createContinuousHeartRain();
            createContinuousSparkleRain();
            break;
            
        case 'chamber1.html':
            createContinuousHeartRain();
            createContinuousSparkleRain();
            createFloatingBubbles();
            
            const enterButton = document.getElementById('enterButton');
            if (enterButton) {
                enterButton.addEventListener('click', function() {
                    const riddleContainer = document.getElementById('riddleContainer');
                    if (riddleContainer) {
                        riddleContainer.style.display = 'block';
                        setTimeout(() => {
                            riddleContainer.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }
                });
            }
            break;
            
        case 'chamber2.html':
            createContinuousHeartRain();
            createContinuousSparkleRain();
            createFloatingBubbles();
            initializeBirthdayMusic();
            setTimeout(() => {
                displayChatMessages();
            }, 500);
            break;
            
        case 'chamber3.html':
            createContinuousHeartRain();
            createContinuousSparkleRain();
            initializeBirthdayMusic();
            break;
            
        case 'chamber4.html':
            createContinuousHeartRain();
            createContinuousSparkleRain();
            initializeBirthdayMusic();
            setTimeout(() => {
                loadMemoryWall();
                createFireflies();
            }, 300);
            break;
            
        case 'personal-message.html':
            createIntensiveHeartRain();
            createIntensiveSparkleRain();
            initializeBirthdayMusic();
            break;
    }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    
    // Button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.style.transform.includes('translateY')) {
                this.style.transform = (this.style.transform || '') + ' translateY(-2px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace('translateY(-2px)', '');
        });
    });
    
    // Interactive click effects
    const interactiveElements = document.querySelectorAll('.choice-option, .pulsing-heart, .magical-button');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    preloadAudio();
});

// Audio preloading
function preloadAudio() {
    const audioFiles = ['fafa-song.mp3', 'dada-message.mp3', 'birthday-dance-song.mp3'];
    audioFiles.forEach(file => {
        const audio = new Audio(`assets/audio/${file}`);
        audio.preload = 'auto';
    });
}

// Cleanup
window.addEventListener('beforeunload', function() {
    cursorTrailElements.forEach(element => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    });
    cursorTrailElements = [];
    saveMusicState();
});

console.log('Birthday Website JavaScript loaded successfully! 💜');
console.log('All functions ready for Chinnamma\'s magical celebration! ✨');

