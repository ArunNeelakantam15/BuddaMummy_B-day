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

// Global Birthday Music Functions
function toggleGlobalBirthdayMusic() {
    const audio = document.getElementById('globalBirthdayMusic');
    const button = document.getElementById('globalMusicToggle');
    
    if (audio && button) {
        if (audio.paused) {
            audio.play().then(() => {
                button.textContent = '🔇 Pause Birthday Music';
                globalBirthdayMusicPlaying = true;
                localStorage.setItem('birthdayMusicPlaying', 'true');
            }).catch(e => {
                console.log('Music play failed:', e);
                alert('Please make sure birthday-dance-song.mp3 exists in assets/audio/');
            });
        } else {
            audio.pause();
            button.textContent = '🎵 Play Birthday Music';
            globalBirthdayMusicPlaying = false;
            localStorage.setItem('birthdayMusicPlaying', 'false');
        }
    }
}

function continueBirthdayMusic() {
    const shouldPlay = localStorage.getItem('birthdayMusicPlaying') === 'true';
    
    if (shouldPlay) {
        const audioElements = ['globalBirthdayMusic', 'birthdayDanceMusic'];
        
        for (let audioId of audioElements) {
            const audio = document.getElementById(audioId);
            if (audio) {
                audio.play().catch(e => {
                    console.log('Continue music failed:', e);
                });
                break;
            }
        }
    }
}

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

// OPTIMIZED CELEBRATION EFFECTS (FIXED PERFORMANCE)
function createMegaSpectacularCelebration() {
    console.log('Starting optimized celebration!');
    
    // Reduced effects for better performance
    createOptimizedConfetti();
    setTimeout(() => createOptimizedBalloons(), 500);
    setTimeout(() => createOptimizedFireworks(), 1000);
    setTimeout(() => createOptimizedLoveSymbols(), 1500);
}

function createOptimizedConfetti() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#fd79a8'];
    container.innerHTML = '';
    
    // Reduced from 300 to 80 pieces
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'mega-confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.width = (Math.random() * 8 + 4) + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.position = 'absolute';
        confetti.style.top = '-50px';
        confetti.style.zIndex = '1001';
        
        container.appendChild(confetti);
    }
    
    setTimeout(() => {
        container.innerHTML = '';
    }, 6000);
}

function createOptimizedBalloons() {
    const container = document.getElementById('balloonsContainer');
    if (!container) return;
    
    const balloons = ['🎈', '🎀', '🎊', '🎉'];
    
    // Reduced from 20 to 8 balloons
    for (let i = 0; i < 8; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'mega-balloon';
        balloon.innerHTML = balloons[Math.floor(Math.random() * balloons.length)];
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.fontSize = (Math.random() * 15 + 20) + 'px';
        balloon.style.animationDelay = Math.random() * 3 + 's';
        balloon.style.position = 'absolute';
        balloon.style.bottom = '-100px';
        balloon.style.zIndex = '1001';
        
        container.appendChild(balloon);
    }
    
    setTimeout(() => {
        container.innerHTML = '';
    }, 8000);
}

function createOptimizedFireworks() {
    const container = document.getElementById('fireworksContainer');
    if (!container) return;
    
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff'];
    
    // Reduced from 8 bursts to 4
    for (let burst = 0; burst < 4; burst++) {
        setTimeout(() => {
            // Reduced from 50 to 20 particles per burst
            for (let i = 0; i < 20; i++) {
                const firework = document.createElement('div');
                firework.className = 'mega-firework';
                firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                firework.style.left = (20 + Math.random() * 60) + '%';
                firework.style.top = (20 + Math.random() * 40) + '%';
                firework.style.width = (Math.random() * 6 + 3) + 'px';
                firework.style.height = firework.style.width;
                firework.style.position = 'absolute';
                firework.style.zIndex = '1002';
                
                container.appendChild(firework);
                
                setTimeout(() => {
                    if (firework.parentNode) {
                        firework.remove();
                    }
                }, 2000);
            }
        }, burst * 1000);
    }
}

function createOptimizedLoveSymbols() {
    const container = document.getElementById('loveSymbolsRain');
    if (!container) return;
    
    const loveSymbols = ['💜', '💖', '💕', '✨', '⭐'];
    
    // Reduced from 80 to 30 symbols
    for (let i = 0; i < 30; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'mega-love-symbol';
        symbol.innerHTML = loveSymbols[Math.floor(Math.random() * loveSymbols.length)];
        symbol.style.left = Math.random() * 100 + '%';
        symbol.style.fontSize = (Math.random() * 10 + 12) + 'px';
        symbol.style.animationDelay = Math.random() * 3 + 's';
        symbol.style.position = 'absolute';
        symbol.style.top = '-100px';
        symbol.style.zIndex = '1001';
        
        container.appendChild(symbol);
    }
    
    setTimeout(() => {
        container.innerHTML = '';
    }, 8000);
}

// Chamber 3 cake cutting functions (FIXED)
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
    
    // CREATE OPTIMIZED CELEBRATION
    setTimeout(() => {
        console.log('Triggering optimized celebration...');
        createMegaSpectacularCelebration();
    }, 1000);
    
    // Show cake cutting section
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
    }, 3000);
}

function cutCake() {
    const cakeSlices = document.getElementById('cakeSlices');
    const cutButton = document.getElementById('cutCakeButton');
    const memoriesButton = document.getElementById('memoriesButton');
    
    if (cakeSlices) {
        cakeSlices.style.display = 'flex';
    }
    if (cutButton) {
        cutButton.style.display = 'none';
    }
    if (memoriesButton) {
        memoriesButton.style.display = 'block';
    }
    
    setTimeout(() => {
        const fafaSlice = document.getElementById('fafaSlice');
        const dadaSlice = document.getElementById('dadaSlice');
        
        if (fafaSlice) {
            fafaSlice.style.animation = 'slideInLeft 1s ease-out';
        }
        if (dadaSlice) {
            dadaSlice.style.animation = 'slideInRight 1s ease-out';
        }
    }, 500);
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

function saveAnswers() {
    const loveAnswer = document.getElementById('loveAnswer');
    const hateAnswer = document.getElementById('hateAnswer');
    
    if (!loveAnswer || !hateAnswer) return;
    
    const love = loveAnswer.value.trim();
    const hate = hateAnswer.value.trim();
    
    if (love && hate) {
        localStorage.setItem('dadaLove', love);
        localStorage.setItem('dadaHate', hate);
        localStorage.setItem('answersDate', new Date().toISOString());
        alert('Thank you for sharing your heart with me, my love! 💜');
        
        loveAnswer.value = '';
        hateAnswer.value = '';
    } else {
        alert('Please answer both questions, my darling! 💕');
    }
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

// FIXED Personal Message Page Functions
function openPersonalMessage() {
    // Save current page state
    localStorage.setItem('returnPage', 'chamber4.html');
    // Navigate in same window to avoid popup blockers
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

function goBackToMemories() {
    const returnPage = localStorage.getItem('returnPage') || 'chamber4.html';
    window.location.href = returnPage;
}

function restartJourney() {
    if (confirm('Are you sure you want to restart the magical journey? 💜')) {
        localStorage.setItem('birthdayMusicPlaying', 'false');
        window.location.href = 'index.html';
    }
}

// Create floating fireflies for Chamber 4
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

// Floating bubbles animation
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

// Page-specific initialization (FIXED)
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    console.log('Initializing page:', currentPage);
    
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
            continueBirthdayMusic();
            setTimeout(() => {
                displayChatMessages();
            }, 500);
            break;
            
        case 'chamber3.html':
            console.log('Initializing chamber 3...');
            createContinuousHeartRain();
            createContinuousSparkleRain();
            continueBirthdayMusic();
            
            // Verify all containers exist
            const containers = ['confettiContainer', 'balloonsContainer', 'ribbonsContainer', 'fireworksContainer', 'loveSymbolsRain'];
            containers.forEach(id => {
                const container = document.getElementById(id);
                console.log(`Container ${id}:`, container ? 'Found' : 'Missing');
            });
            break;
            
        case 'chamber4.html':
            createContinuousHeartRain();
            createContinuousSparkleRain();
            continueBirthdayMusic();
            setTimeout(() => {
                loadMemoryWall();
                createFireflies();
            }, 300);
            break;
            
        case 'personal-message.html':
            createIntensiveHeartRain();
            createIntensiveSparkleRain();
            continueBirthdayMusic();
            break;
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    initializePage();
    
    // Add hover effects to buttons
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
    
    // Add click effects to interactive elements
    const interactiveElements = document.querySelectorAll('.choice-option, .pulsing-heart, .magical-button');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Preload audio files
    preloadAudio();
});

// Preload audio files
function preloadAudio() {
    const audioFiles = ['fafa-song.mp3', 'dada-message.mp3', 'birthday-dance-song.mp3'];
    audioFiles.forEach(file => {
        const audio = new Audio(`assets/audio/${file}`);
        audio.preload = 'auto';
        audio.addEventListener('loadeddata', function() {
            console.log(`Audio ${file} loaded successfully`);
        });
        audio.addEventListener('error', function() {
            console.log(`Audio ${file} failed to load`);
        });
    });
}

// Smooth scrolling function
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Local storage functions
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log('Storage save failed:', e);
    }
}

function getFromStorage(key) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (e) {
        console.log('Storage get failed:', e);
        return null;
    }
}

// Error handling for missing elements
function handleMissingElements() {
    const requiredElements = {
        'chamber1.html': ['riddleContainer', 'enterButton'],
        'chamber2.html': ['chatMessages', 'nextChamberSection'],
        'chamber3.html': ['wishInput', 'cake', 'confettiContainer'],
        'chamber4.html': ['photoGrid', 'loveAnswer', 'hateAnswer']
    };
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageElements = requiredElements[currentPage];
    
    if (pageElements) {
        pageElements.forEach(elementId => {
            const element = document.getElementById(elementId);
            if (!element) {
                console.warn(`Missing element: ${elementId} on page ${currentPage}`);
            }
        });
    }
}

// Call error handling after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(handleMissingElements, 100);
});

// Export functions for global access
window.BirthdayWebsite = {
    playAudio,
    pauseAudio,
    toggleGlobalBirthdayMusic,
    selectChoice,
    checkMultipleChoice,
    displayChatMessages,
    proceedToChamber3,
    blowCandles,
    cutCake,
    sendHug,
    goToMemories,
    saveAnswers,
    saveTimeCapsule,
    openPersonalMessage,
    savePersonalMessage,
    goBackToMemories,
    restartJourney,
    createMegaSpectacularCelebration,
    createContinuousHeartRain,
    createContinuousSparkleRain,
    createFloatingBubbles,
    createFireflies,
    loadMemoryWall,
    smoothScrollTo,
    saveToStorage,
    getFromStorage
};

// Cleanup function to prevent memory leaks
window.addEventListener('beforeunload', function() {
    // Clear cursor trail elements
    cursorTrailElements.forEach(element => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    });
    cursorTrailElements = [];
    
    // Clear any remaining intervals
    clearInterval();
});

// Add dynamic cursor trail animation styles
const cursorTrailStyle = document.createElement('style');
cursorTrailStyle.textContent = `
    @keyframes cursorTrailFade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.5); }
    }
`;
document.head.appendChild(cursorTrailStyle);


function goToMemories() {
    // Skip chamber4 and go directly to personal message
    window.location.href = 'personal-message.html';
}
function goBackToMemories() {
    window.location.href = 'chamber3.html';
}

// Console log for debugging
console.log('Birthday Website JavaScript loaded successfully! 💜');
console.log('All functions initialized and ready for magical celebration! ✨');

