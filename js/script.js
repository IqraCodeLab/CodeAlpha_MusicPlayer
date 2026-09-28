

'use strict';


const SONGS = [
  { id: 4, title: 'Chhod Diya', artist: 'Arijit Singh', category: 'hindi', flag: '🇮🇳', duration: '4:22', image: 'images/singer/arijitsingh.jpg', file: 'songs/Chhod Diya (Lyrics) - Arijit Singh_ Kanika Kapoor _ Baazaar(M4A_128K).m4a', tags: ['sad', 'romantic'], year: 2018, plays: 92400 },
  { id: 2, title: 'Pehli Dafa', artist: 'Atif Aslam', category: 'urdu', flag: '🇵🇰', duration: '4:18', image: 'images/singer/atif aslam.jfif', file: 'songs/Atif Aslam_ Pehli Dafa Song (Video) _ Ileana D_Cruz _ Latest Hindi Song 2017 _ T-Series(M4A_128K).m4a', tags: ['romantic', 'pop'], year: 2017, plays: 62100 },
  { id: 3, title: 'Balaghal Ula Bi Kamaalihi', artist: 'Ali Zafar', category: 'urdu', flag: '🇵🇰', duration: '4:02', image: 'images/singer/Ali Zafar.jfif', file: 'songs/Balaghal Ula Bi Kamaalihi _ Ali Zafar _ Naat(M4A_128K).m4a', tags: ['naat', 'sufi'], year: 2021, plays: 38900 },
  { id: 1, title: 'Jo Tu Na Mila', artist: 'Asim Azhar', category: 'urdu', flag: '🇵🇰', duration: '3:20', image: 'images/singer/asim azhar.jfif', file: 'songs/Asim Azhar - Jo Tu Na Mila _ Kunaal Vermaa(M4A_128K).m4a', tags: ['trending', 'pop'], year: 2018, plays: 45200 },
  { id: 5, title: 'Man Aamadeh Am', artist: 'Atif Aslam & Gul Panra', category: 'urdu', flag: '🇵🇰', duration: '5:23', image: 'images/singer/atif aslam.jfif', file: 'songs/Coke Studio Season 8_ Man Aamadeh Am_ Gul Panrra _ Atif Aslam(M4A_128K).m4a', tags: ['coke studio', 'folk'], year: 2015, plays: 71300 },
  { id: 6, title: 'Tajdar-e-Haram', artist: 'Atif Aslam', category: 'urdu', flag: '🇵🇰', duration: '8:14', image: 'images/singer/atif aslam.jfif', file: 'songs/Coke Studio Season 8_ Tajdar-e-Haram_ Atif Aslam(M4A_128K).m4a', tags: ['coke studio', 'sufi'], year: 2015, plays: 28700 },
  { id: 7, title: 'Tu Jhoom', artist: 'Abida Parveen', category: 'urdu', flag: '🇵🇰', duration: '5:30', image: 'images/singer/Abida Parveen.jfif', file: 'songs/Coke Studio _ Season 14 _ Tu Jhoom _ Naseebo Lal x Abida Parveen(M4A_128K).m4a', tags: ['coke studio', 'sufi'], year: 2022, plays: 51600 },
  { id: 8, title: 'Deera Moda Oshwa', artist: 'Gul Panra', category: 'pashto', flag: '🇵🇰', duration: '4:10', image: 'images/singer/Gul panra.jfif', file: 'songs/Deera Moda Oshwa Sta Deedan Ta Zama Zara She _ Gul Panra _ Hashmat Sahar(M4A_128K).m4a', tags: ['pashto', 'folk'], year: 2018, plays: 33200 },
  { id: 9, title: 'Dil', artist: 'Shreya Ghoshal', category: 'hindi', flag: '🇮🇳', duration: '4:30', image: 'images/singer/Shreya Ghoshal.jfif', file: 'songs/Dil_ Shreya_s Version (Lyrical) _ Ek Villain Returns _ John Disha Arjun Tara _ Kaushik-Guddu_ Mohit(M4A_128K).m4a', tags: ['romantic', 'new'], year: 2022, plays: 48900 },
  { id: 10, title: 'Da Wale Wale', artist: 'Gul Panra', category: 'pashto', flag: '🇵🇰', duration: '3:45', image: 'images/singer/Gul panra.jfif', file: 'songs/Gul Panra And Hashmat Sahar - Da Wale Wale Pashto New Attan Video Song 2016(M4A_128K).m4a', tags: ['pashto', 'attan'], year: 2016, plays: 26500 },
  { id: 11, title: 'Rasha Khumara', artist: 'Gul Panra', category: 'pashto', flag: '🇵🇰', duration: '3:55', image: 'images/singer/Gul panra.jfif', file: 'songs/Gul Panra Song 2018 _ Rasha Khumara _ Pashto hd songs Mashup gul panra video song rock music(M4A_128K).m4a', tags: ['pashto', 'mashup'], year: 2018, plays: 41200 },
  { id: 12, title: 'As It Was', artist: 'Harry Styles', category: 'english', flag: '🌐', duration: '2:47', image: 'images/singer/Harry styles.jfif', file: 'songs/Harry Styles - As It Was (Official Video)(M4A_128K).m4a', tags: ['trending', 'pop'], year: 2022, plays: 150000 },
  { id: 13, title: 'Watermelon Sugar', artist: 'Harry Styles', category: 'english', flag: '🌐', duration: '2:54', image: 'images/singer/Harry styles.jfif', file: 'songs/Harry Styles - Watermelon Sugar (Official Video)(M4A_128K).m4a', tags: ['pop', 'summer'], year: 2019, plays: 130000 },
  { id: 14, title: 'Humdard', artist: 'Arijit Singh', category: 'hindi', flag: '🇮🇳', duration: '4:20', image: 'images/singer/arijitsingh.jpg', file: 'songs/Humdard Full Video Song _ Ek Villain _ Arijit Singh _ Mithoon(M4A_128K).m4a', tags: ['sad', 'romantic'], year: 2014, plays: 95700 },
  { id: 15, title: 'Humraah', artist: 'Asim Azhar', category: 'urdu', flag: '🇵🇰', duration: '3:36', image: 'images/singer/asim azhar.jfif', file: 'songs/Humraah (Official Music Video) - Asim Azhar _ Malang _ Disha Patani_ Aditya Roy Kapur(M4A_128K).m4a', tags: ['trending', 'pop'], year: 2020, plays: 88300 },
  { id: 16, title: 'Love Yourself', artist: 'Justin Bieber', category: 'english', flag: '🌐', duration: '3:53', image: 'images/singer/justin bieber.jfif', file: 'songs/Justin Bieber - Love Yourself (PURPOSE _ The Movement)(M4A_128K).m4a', tags: ['pop', 'acoustic'], year: 2015, plays: 115000 },
  { id: 17, title: 'Sorry', artist: 'Justin Bieber', category: 'english', flag: '🌐', duration: '3:25', image: 'images/singer/justin bieber.jfif', file: 'songs/Justin Bieber - Sorry (Lyrics)(M4A_128K).m4a', tags: ['trending', 'dance'], year: 2015, plays: 108000 },
  { id: 18, title: 'Khamoshiyan', artist: 'Arijit Singh', category: 'hindi', flag: '🇮🇳', duration: '5:35', image: 'images/singer/arijitsingh.jpg', file: 'songs/Khamoshiyan (Title Song) Lyrics _ Arijit Singh _ Rashmi S _ Jeet G _ Ali Fazal _ Sapna P _ Gurmeet C(M4A_128K).m4a', tags: ['romantic', 'classic'], year: 2015, plays: 82100 },
  { id: 19, title: 'Larsha Pekhawar', artist: 'Ali Zafar ft. Gul Panra', category: 'pashto', flag: '🇵🇰', duration: '3:50', image: 'images/singer/Ali Zafar.jfif', file: 'songs/Larsha Pekhawar _ Ali Zafar ft. Gul Panra _ Fortitude Pukhtoon Core _ Pashto Song(M4A_128K).m4a', tags: ['pashto', 'trending'], year: 2021, plays: 73600 },
  { id: 20, title: 'Mile Ho Tum', artist: 'Neha Kakkar', category: 'hindi', flag: '🇮🇳', duration: '3:30', image: 'images/singer/Neha Kakkar.jfif', file: 'songs/Mile Ho Tum - Reprise Version _ Neha Kakkar _ Tony Kakkar _ Fever _ Gaurav Jang(M4A_128K).m4a', tags: ['sad', 'acoustic'], year: 2016, plays: 54300 },
  { id: 21, title: 'Pa Ma Mayana', artist: 'Shah Farooq', category: 'pashto', flag: '🇵🇰', duration: '3:22', image: 'images/singer/shah farooq.jpg', file: 'songs/Pashto New Songs 2020 _ Shah Farooq New Tappy Tapay Tappaezy 2020 _ Pa Ma Mayana Khude De Mar Ka(MP3_160K).mp3', tags: ['pashto', 'tappy'], year: 2020, plays: 69800 },
  { id: 22, title: 'Poh Naswam Pa Zan', artist: 'Shah Farooq', category: 'pashto', flag: '🇵🇰', duration: '4:15', image: 'images/singer/shah farooq.jpg', file: 'songs/Pashto New Songs 2025 _ Poh Naswam Pa Zan Bande _ Shah Farooq New Songs 2025 _ Pashto Songs 2025(MP3_160K).mp3', tags: ['pashto', 'new'], year: 2025, plays: 92000 },
  { id: 23, title: 'Regardless', artist: 'Asim Azhar', category: 'urdu', flag: '🇵🇰', duration: '3:45', image: 'images/singer/asim azhar.jfif', file: 'songs/REGARDLESS - Asim Azhar (Official Video)(M4A_128K).m4a', tags: ['trending', 'pop'], year: 2023, plays: 86400 },
  { id: 24, title: 'Diamonds', artist: 'Rihanna', category: 'english', flag: '🌐', duration: '3:45', image: 'images/singer/Rihanna.jfif', file: 'songs/Rihanna - Diamonds(M4A_128K).m4a', tags: ['pop', 'iconic'], year: 2012, plays: 61700 },
  { id: 25, title: 'We Found Love', artist: 'Rihanna', category: 'english', flag: '🌐', duration: '3:35', image: 'images/singer/Rihanna.jfif', file: 'songs/Rihanna - We Found Love ft. Calvin Harris(M4A_128K).m4a', tags: ['dance', 'pop'], year: 2011, plays: 98700 },
  { id: 26, title: 'Ek Nazar Nazar', artist: 'Shah Farooq', category: 'pashto', flag: '🇵🇰', duration: '3:10', image: 'images/singer/shah farooq.jpg', file: 'songs/Shah Farooq New Urdo Pashto Mix Song 2023 _Ek Nazar Nazar _Full 👍 2023 Tik Tok Songs(MP3_160K).mp3', tags: ['mix', 'pashto'], year: 2023, plays: 200000 },
  { id: 27, title: 'Taaron Ke Shehar', artist: 'Neha Kakkar', category: 'hindi', flag: '🇮🇳', duration: '4:02', image: 'images/singer/Neha Kakkar.jfif', file: 'songs/Taaron Ke Shehar Song_ Neha Kakkar_ Sunny Kaushal _ Jubin Nautiyal_Jaani _ Bhushan Kumar _ Arvindr K(M4A_128K).m4a', tags: ['romantic', 'sad'], year: 2020, plays: 120000 },
  { id: 28, title: 'Blank Space', artist: 'Taylor Swift', category: 'english', flag: '🌐', duration: '3:51', image: 'images/singer/taylor swift.jfif', file: 'songs/Taylor Swift - Blank Space(M4A_128K).m4a', tags: ['pop', 'trending'], year: 2014, plays: 89000 },
  { id: 29, title: 'Shake It Off', artist: 'Taylor Swift', category: 'english', flag: '🌐', duration: '3:39', image: 'images/singer/taylor swift.jfif', file: 'songs/Taylor Swift - Shake It Off(M4A_128K).m4a', tags: ['pop', 'dance'], year: 2014, plays: 112000 },
  { id: 30, title: 'Tere Ishk Mein', artist: 'Arijit Singh', category: 'hindi', flag: '🇮🇳', duration: '4:15', image: 'images/singer/arijitsingh.jpg', file: 'songs/Tere Ishk Mein (Song) _ Dhanush_ Kriti S _ AR Rahman_ Arijit Singh_ Irshad K _ Aanand LR _ Bhushan K(M4A_128K).m4a', tags: ['romantic', 'new'], year: 2024, plays: 93500 },
  { id: 31, title: 'Tu Hi Hai Aashiqui', artist: 'Arijit Singh', category: 'hindi', flag: '🇮🇳', duration: '5:02', image: 'images/singer/arijitsingh.jpg', file: 'songs/Tu Hi Hai Aashiqui Lyrics - Arijit Singh _ Palak Muchhal(M4A_128K).m4a', tags: ['romantic', 'classic'], year: 2014, plays: 87200 },
  { id: 32, title: 'Voh Dekhnay Mein', artist: 'Ali Zafar', category: 'urdu', flag: '🇵🇰', duration: '3:18', image: 'images/singer/Ali Zafar.jfif', file: 'songs/Voh Dekhnay Mein Full Video - London Paris New York_Ali Zafar_ Aditi Rao Hydari(M4A_128K).m4a', tags: ['pop', 'acoustic'], year: 2012, plays: 74600 },
  { id: 33, title: 'Gul Dana', artist: 'Gul Panra', category: 'pashto', flag: '🇵🇰', duration: '3:30', image: 'images/singer/Gul panra.jfif', file: 'songs/Zeek afridi _ GUl Panra  Gul dana(M4A_128K).m4a', tags: ['pashto', 'folk'], year: 2019, plays: 54000 },
  { id: 34, title: 'Perfect', artist: 'Ed Sheeran', category: 'english', flag: '🌐', duration: '4:23', image: 'images/singer/Ed Sheeran.jfif', file: 'songs/Ed Sheeran - Perfect (Official Music Video)(M4A_128K).m4a', tags: ['pop', 'romantic'], year: 2017, plays: 142000 },
  { id: 35, title: 'Shape of You', artist: 'Ed Sheeran', category: 'english', flag: '🌐', duration: '3:53', image: 'images/singer/Ed Sheeran.jfif', file: 'songs/Ed Sheeran - Shape of You (Official Music Video)(M4A_128K).m4a', tags: ['pop', 'dance'], year: 2017, plays: 165000 },
  { id: 36, title: 'Burn', artist: 'Ellie Goulding', category: 'english', flag: '🌐', duration: '3:51', image: 'images/singer/ellie goulding.webp', file: 'songs/Ellie Goulding - Burn (Official Video)(M4A_128K).m4a', tags: ['pop', 'dance'], year: 2013, plays: 78000 },
  { id: 37, title: 'Love Me Like You Do', artist: 'Ellie Goulding', category: 'english', flag: '🌐', duration: '4:12', image: 'images/singer/ellie goulding.webp', file: 'songs/Ellie Goulding - Love Me Like You Do (Lyrics)(M4A_128K).m4a', tags: ['pop', 'romantic'], year: 2015, plays: 134000 },
  { id: 38, title: 'Ek Mulaqat', artist: 'Jubin Nautiyal', category: 'hindi', flag: '🇮🇳', duration: '4:15', image: 'images/singer/jubin nautiyal.jfif', file: 'songs/EK MULAQAT LYRICS _ SONALI CABLE _ Jubin Nautiyal _ Amjad Nadeem _Ali Fazal_ Rhea Chakraborty(M4A_128K).m4a', tags: ['romantic', 'sad'], year: 2014, plays: 65000 },
  { id: 39, title: 'Guli Mata', artist: 'Shreya Ghoshal', category: 'hindi', flag: '🇮🇳', duration: '3:45', image: 'images/singer/Shreya Ghoshal.jfif', file: 'songs/Guli Mata - Saad Lamjarred _ Shreya Ghoshal _ Jennifer Winget _ Anshul Garg(M4A_128K).m4a', tags: ['pop', 'trending'], year: 2023, plays: 92000 },
  { id: 40, title: 'Haan Hasi Ban Gaye', artist: 'Shreya Ghoshal', category: 'hindi', flag: '🇮🇳', duration: '4:27', image: 'images/singer/Shreya Ghoshal.jfif', file: 'songs/HAAN HASI BAN GAYE (LYRICS) _ SHREYA GHOSHAL _ HAMARI ADHURI KAHANI(M4A_128K).m4a', tags: ['romantic', 'sad'], year: 2015, plays: 88000 },
  { id: 41, title: 'Tum Hi Aana', artist: 'Jubin Nautiyal', category: 'hindi', flag: '🇮🇳', duration: '4:09', image: 'images/singer/jubin nautiyal.jfif', file: 'songs/Lyrical_ Tum Hi Aana _ Marjaavaan _ Riteish D_ Sidharth M_ Tara S _Jubin Nautiyal_Payal Dev_Kunaal V(M4A_128K).m4a', tags: ['sad', 'romantic'], year: 2019, plays: 110000 },
  { id: 42, title: 'Humnava Mere', artist: 'Jubin Nautiyal', category: 'hindi', flag: '🇮🇳', duration: '5:04', image: 'images/singer/jubin nautiyal.jfif', file: 'songs/Official Video_ Humnava Mere Song _ Jubin Nautiyal _ Manoj Muntashir _ Rocky - Shiv _ Bhushan Kumar(M4A_128K).m4a', tags: ['sad', 'romantic'], year: 2018, plays: 97000 },
  { id: 43, title: 'Samandar', artist: 'Jubin Nautiyal', category: 'hindi', flag: '🇮🇳', duration: '4:30', image: 'images/singer/jubin nautiyal.jfif', file: 'songs/Samandar (lyrics) _ jubin nautiyal _ shriya ghosal _ Lifetime music(M4A_128K).m4a', tags: ['sad', 'romantic'], year: 2016, plays: 45000 },
  { id: 44, title: 'Tum Chalay Aao Paharon Ki Kasam', artist: 'Shan Khan', category: 'urdu', flag: '🇵🇰', duration: '3:50', image: 'images/singer/Shan khan.jfif', file: 'songs/Tum Chalay Aao Paharon Ki Kasam 2.0 _ Shan Khan Songs _ Latest Song 2024(M4A_128K).m4a', tags: ['trending', 'folk'], year: 2024, plays: 32000 },
  { id: 45, title: 'Zama Ba Zra La Zana Tor', artist: 'Ashban Roy', category: 'pashto', flag: '🇵🇰', duration: '4:10', image: 'images/singer/ashban roy.webp', file: 'songs/Zama Ba Zra La Zana Tor _ New Pashto Tappy Mashup 2023_ _ Ashban Roy Ft. Ali Khan _ Wadood Afridi(MP3_160K).mp3', tags: ['pashto', 'mashup'], year: 2023, plays: 28000 },
  { id: 46, title: 'Starboy', artist: 'The Weeknd', category: 'english', flag: '🌐', duration: '3:50', image: 'images/singer/the weeknd.jfif', file: '', tags: ['pop', 'trending'], year: 2016, plays: 180000 },
  { id: 47, title: 'Afreen Afreen', artist: 'Rahat Fateh Ali', category: 'urdu', flag:'🇵🇰', duration: '5:23', image:'images/singer/rahat fateh ali khan.jpg', file: '', year: 2016, plays: 180000 }


];


const state = {
  currentSong: null,
  currentIndex: 0,
  isPlaying: false,
  isShuffle: false,
  isRepeat: false,
  isMuted: false,
  volume: 0.7,
  progress: 0,
  liked: new Set(),
  audio: new Audio(),
  progressInterval: null,
  filteredSongs: [...SONGS],
  currentFilter: 'all',
  loadedCount: 0,
  loadBatch: 12,
};


function formatTime(seconds) {
  if (isNaN(seconds) || seconds === Infinity) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function showToast(msg, icon = '🎵') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast) return;
  toastMsg.textContent = msg;
  toast.querySelector('.toast-icon').textContent = icon;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function getSongsByCategory(cat) {
  return SONGS.filter(s => s.category === cat);
}

function getSongsByTag(tag) {
  return SONGS.filter(s => s.tags.includes(tag));
}

function getTrendingSongs(limit = 8) {
  return [...SONGS].sort((a, b) => b.plays - a.plays).slice(0, limit);
}

// ============================================================
// 4. CARD RENDERER
// ============================================================
function createSongCard(song, index) {
  const isLiked = state.liked.has(song.id);
  const isPlaying = state.currentSong && state.currentSong.id === song.id && state.isPlaying;

  return `
    <div class="song-card animate-on-scroll" data-song-id="${song.id}" data-index="${index}">
      <div class="song-card-img">
        <img src="${song.image}" alt="${song.title}" loading="lazy" 
             onerror="this.src='images/music.jpeg'" />
        <div class="song-card-overlay">
          <button class="play-btn ${isPlaying ? 'playing' : ''}" 
                  onclick="playSong(${song.id})" 
                  title="Play ${song.title}">
            ${isPlaying ? '⏸' : '▶'}
          </button>
        </div>
      </div>
      <div class="song-card-info">
        <div class="song-title">${song.flag} ${song.title}</div>
        <div class="song-artist">${song.artist}</div>
        <div class="song-meta">
          <span class="song-duration">${song.duration}</span>
          <button class="song-like ${isLiked ? 'liked' : ''}" 
                  onclick="toggleLike(${song.id}, this)" 
                  title="${isLiked ? 'Unlike' : 'Like'}">
            ${isLiked ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </div>
  `;
}


// 5. AUDIO PLAYER ENGINE


// Set up the audio element properly
state.audio.preload = 'auto';

// Real-time progress via timeupdate
state.audio.addEventListener('timeupdate', function() {
  if (!state.currentSong) return;
  const e = state.audio.currentTime || 0;
  const t = state.audio.duration || 1;
  const pct = (e / t) * 100;
  state.progress = pct;
  if (typeof isDraggingProgress === 'undefined' || !isDraggingProgress) {
    updateProgressBars(pct, e, t);
  } else {
    // Only update text times if dragging
    const barCurrent = document.getElementById('barCurrentTime');
    if (barCurrent) barCurrent.textContent = formatTime(e);
    const fullCurrent = document.getElementById('fullCurrentTime');
    if (fullCurrent) fullCurrent.textContent = formatTime(e);
  }
});

// Auto-play next when song ends
state.audio.addEventListener('ended', function() {
  if (state.isRepeat) {
    state.audio.currentTime = 0;
    state.audio.play();
  } else {
    playNext();
  }
});

function playSong(songId) {
  const song = SONGS.find(s => s.id === songId);
  if (!song) return;

  // Stop any fake progress timer
  clearInterval(state.progressInterval);

  state.currentSong = song;
  state.currentIndex = SONGS.findIndex(s => s.id === songId);

  // Load and play actual audio file
  const audioSrc = song.file;
  if (!state.audio.src.endsWith(audioSrc)) {
    state.audio.pause();
    state.audio.src = audioSrc;
    state.audio.load();
  }
  state.audio.volume = state.volume;

  state.audio.play().then(() => {
    state.isPlaying = true;
    updatePlayButtons();
  }).catch(() => {
    // No actual audio file — simulate playback
    state.isPlaying = true;
    simulateProgress();
  });

  updateAllPlayerUIs(song);
  showPlayerBar();
  showToast(`Now Playing: ${song.title}`, '🎵');
  updateAllPlayButtons(songId);

  // Update player page specific UI
  if (document.getElementById('albumArtImg')) {
    updatePlayerPage(song);
  }

  // Update player bar
  updatePlayerBar(song);
}

function simulateProgress() {
  clearInterval(state.progressInterval);
  if (!state.currentSong) return;

  const durationParts = state.currentSong.duration.split(':');
  const totalSecs = parseInt(durationParts[0]) * 60 + parseInt(durationParts[1]);
  let elapsed = 0;

  state.progressInterval = setInterval(() => {
    if (!state.isPlaying) return;
    elapsed += 0.5;
    if (elapsed >= totalSecs) {
      elapsed = 0;
      if (state.isRepeat) {
        elapsed = 0;
      } else {
        playNext();
        return;
      }
    }
    const pct = (elapsed / totalSecs) * 100;
    state.progress = pct;
    updateProgressBars(pct, elapsed, totalSecs);
  }, 500);
}

function updateProgressBars(pct, elapsed, total) {
  // Mini bar
  const barProgress = document.getElementById('barProgress');
  if (barProgress) barProgress.style.width = pct + '%';

  const barCurrent = document.getElementById('barCurrentTime');
  if (barCurrent) barCurrent.textContent = formatTime(elapsed);

  const barDur = document.getElementById('barDuration');
  if (barDur) barDur.textContent = formatTime(total);

  // Full page player
  const fullProgress = document.getElementById('fullProgressFill');
  if (fullProgress) fullProgress.style.width = pct + '%';
  const fullCurrent = document.getElementById('fullCurrentTime');
  if (fullCurrent) fullCurrent.textContent = formatTime(elapsed);
  const fullDur = document.getElementById('fullDuration');
  if (fullDur) fullDur.textContent = formatTime(total);

  // Fullscreen overlay
  const fsProgress = document.getElementById('fsProgressFill');
  if (fsProgress) fsProgress.style.width = pct + '%';
  const fsCurrent = document.getElementById('fsCurrentTime');
  if (fsCurrent) fsCurrent.textContent = formatTime(elapsed);
  const fsDur = document.getElementById('fsDuration');
  if (fsDur) fsDur.textContent = formatTime(total);
}

function togglePlay() {
  if (!state.currentSong) {
    playSong(SONGS[0].id);
    return;
  }
  state.isPlaying = !state.isPlaying;
  updatePlayButtons();
  if (state.isPlaying) {
    state.audio.play().catch(() => simulateProgress());
  } else {
    state.audio.pause();
    clearInterval(state.progressInterval);
  }
}

function playNext() {
  let nextIndex;
  if (state.isShuffle) {
    nextIndex = Math.floor(Math.random() * SONGS.length);
  } else {
    nextIndex = (state.currentIndex + 1) % SONGS.length;
  }
  playSong(SONGS[nextIndex].id);
}

function playPrev() {
  const prevIndex = (state.currentIndex - 1 + SONGS.length) % SONGS.length;
  playSong(SONGS[prevIndex].id);
}

function toggleShuffle(btn) {
  state.isShuffle = !state.isShuffle;
  if (btn) btn.classList.toggle('active', state.isShuffle);
  document.querySelectorAll('#barShuffle, #fullShuffle').forEach(b => {
    b.classList.toggle('active', state.isShuffle);
  });
  showToast(state.isShuffle ? 'Shuffle ON' : 'Shuffle OFF', '🔀');
}

function toggleRepeat(btn) {
  state.isRepeat = !state.isRepeat;
  if (btn) btn.classList.toggle('active', state.isRepeat);
  document.querySelectorAll('#barRepeat, #fullRepeat').forEach(b => {
    b.classList.toggle('active', state.isRepeat);
  });
  showToast(state.isRepeat ? 'Repeat ON' : 'Repeat OFF', '🔁');
}

function toggleMute() {
  state.isMuted = !state.isMuted;
  state.audio.muted = state.isMuted;
  const volBtn = document.getElementById('barVolume');
  const fullVolIcon = document.getElementById('fullVolIcon');
  if (volBtn) volBtn.textContent = state.isMuted ? '🔇' : '🔊';
  if (fullVolIcon) fullVolIcon.textContent = state.isMuted ? '🔇' : '🔊';
}

function setVolume(val) {
  state.volume = val / 100;
  state.audio.volume = state.volume;
  const label = document.getElementById('fullVolLabel');
  if (label) label.textContent = Math.round(val) + '%';
}

function toggleLike(songId, btn) {
  if (state.liked.has(songId)) {
    state.liked.delete(songId);
    if (btn) { btn.textContent = '♡'; btn.classList.remove('liked'); }
    showToast('Removed from favorites', '💔');
  } else {
    state.liked.add(songId);
    if (btn) { btn.textContent = '♥'; btn.classList.add('liked'); }
    showToast('Added to favorites!', '💜');
  }
  // Update bar heart too
  if (state.currentSong && state.currentSong.id === songId) {
    const barHeart = document.getElementById('barHeart');
    if (barHeart) {
      barHeart.textContent = state.liked.has(songId) ? '♥' : '♡';
      barHeart.classList.toggle('liked', state.liked.has(songId));
    }
  }
}


// 6. UI UPDATES

function showPlayerBar() {
  const bar = document.getElementById('playerBar');
  if (!bar) return;
  bar.classList.remove('hidden');
  bar.classList.add('visible');
  document.body.classList.add('has-player-bar');
}

function updatePlayerBar(song) {
  const thumb = document.getElementById('barThumb');
  const title = document.getElementById('barTitle');
  const artist = document.getElementById('barArtist');
  if (thumb) { thumb.src = song.image; thumb.onerror = () => { thumb.src = 'images/music.jpeg'; }; }
  if (title) title.textContent = song.title;
  if (artist) artist.textContent = song.artist;
}

function updateAllPlayerUIs(song) {
  updatePlayerBar(song);
  if (document.getElementById('albumArtImg')) updatePlayerPage(song);
  
  // Fullscreen sync
  const fsImg = document.getElementById('fsAlbumImg');
  if (fsImg) { fsImg.src = song.image; fsImg.onerror = () => { fsImg.src = 'images/music.jpeg'; }; }
  const fsTitle = document.getElementById('fsTitle');
  if (fsTitle) fsTitle.textContent = song.title;
  const fsArtist = document.getElementById('fsArtist');
  if (fsArtist) fsArtist.textContent = song.artist;
  const fsBg = document.getElementById('fsBg');
  if (fsBg) fsBg.style.backgroundImage = `url('${song.image}')`;
}

function updatePlayButtons() {
  const icons = state.isPlaying ? ['⏸', '⏸', '⏸'] : ['▶', '▶', '▶'];
  const barPlay = document.getElementById('barPlay');
  const fullPlay = document.getElementById('fullPlayBtn');
  const fsPlay = document.getElementById('fsPlayBtn');
  if (barPlay) barPlay.textContent = icons[0];
  if (fullPlay) fullPlay.textContent = icons[1];
  if (fsPlay) fsPlay.textContent = icons[2];
}

function updateAllPlayButtons(activeSongId) {
  // Reset all
  document.querySelectorAll('.play-btn').forEach(btn => {
    const card = btn.closest('.song-card');
    if (card) {
      const id = parseInt(card.dataset.songId);
      if (id === activeSongId) {
        btn.textContent = '⏸';
        btn.classList.add('playing');
      } else {
        btn.textContent = '▶';
        btn.classList.remove('playing');
      }
    }
  });
  updatePlayButtons();
}

function updatePlayerPage(song) {
  const img = document.getElementById('albumArtImg');
  const name = document.getElementById('trackNameFull');
  const artist = document.getElementById('trackArtistFull');
  const badge = document.getElementById('trackCatBadge');
  const bg = document.getElementById('playerBgBlur');

  if (img) { img.src = song.image; img.onerror = () => { img.src = 'images/music.jpeg'; }; }
  if (name) name.textContent = song.title;
  if (artist) artist.textContent = song.artist;
  if (badge) badge.textContent = `${song.flag} ${song.category.charAt(0).toUpperCase() + song.category.slice(1)}`;
  if (bg) bg.style.backgroundImage = `url('${song.image}')`;

  // Animate
  const frame = document.getElementById('albumArtFrame');
  if (frame && state.isPlaying) frame.classList.add('spinning');
  else if (frame) frame.classList.remove('spinning');

  // Update queue
  updateQueueList();
  // Activate visualizer
  const visualizer = document.getElementById('visualizer');
  if (visualizer) visualizer.classList.toggle('active', state.isPlaying);
}

// 7. PLAYER PAGE INIT

function initPlayerPage() {
  // Build visualizer bars
  const vis = document.getElementById('visualizer');
  if (vis) {
    vis.innerHTML = '';
    for (let i = 0; i < 28; i++) {
      const bar = document.createElement('div');
      bar.className = 'vis-bar';
      const maxH = Math.random() * 36 + 10;
      const spd = (Math.random() * 0.5 + 0.5).toFixed(2);
      bar.style.cssText = `--vh: ${maxH}px; --spd: ${spd}s; animation-delay: ${(i * 0.06).toFixed(2)}s;`;
      vis.appendChild(bar);
    }
  }

  // Build queue
  updateQueueList();

  // Start with first song if none playing
  if (!state.currentSong) {
    playSong(SONGS[0].id);
  } else {
    updatePlayerPage(state.currentSong);
  }

  // Full player controls
  const fullPlay = document.getElementById('fullPlayBtn');
  if (fullPlay) fullPlay.addEventListener('click', () => {
    togglePlay();
    const frame = document.getElementById('albumArtFrame');
    if (frame) frame.classList.toggle('spinning', state.isPlaying);
    const vis2 = document.getElementById('visualizer');
    if (vis2) vis2.classList.toggle('active', state.isPlaying);
    fullPlay.textContent = state.isPlaying ? '⏸' : '▶';
  });

  const fullPrev = document.getElementById('fullPrev');
  if (fullPrev) fullPrev.addEventListener('click', playPrev);

  const fullNext = document.getElementById('fullNext');
  if (fullNext) fullNext.addEventListener('click', playNext);

  const fullShuffle = document.getElementById('fullShuffle');
  if (fullShuffle) fullShuffle.addEventListener('click', () => toggleShuffle(fullShuffle));

  const fullRepeat = document.getElementById('fullRepeat');
  if (fullRepeat) fullRepeat.addEventListener('click', () => toggleRepeat(fullRepeat));

  const fullVolSlider = document.getElementById('fullVolSlider');
  if (fullVolSlider) {
    fullVolSlider.value = state.volume * 100;
    fullVolSlider.addEventListener('input', (e) => setVolume(e.target.value));
  }

  const fullVolIcon = document.getElementById('fullVolIcon');
  if (fullVolIcon) fullVolIcon.addEventListener('click', toggleMute);

  // Progress seek
  const progressTrack = document.getElementById('fullProgressTrack');
  if (progressTrack) {
    progressTrack.addEventListener('click', (e) => {
      const rect = progressTrack.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      state.progress = pct;
      const fill = document.getElementById('fullProgressFill');
      if (fill) fill.style.width = pct + '%';
      if (state.audio.duration) state.audio.currentTime = (pct / 100) * state.audio.duration;
    });
  }
}

function updateQueueList() {
  const list = document.getElementById('queueList');
  if (!list) return;
  const display = SONGS;
  list.innerHTML = display.map((song, i) => `
    <div class="queue-item ${state.currentSong && state.currentSong.id === song.id ? 'active' : ''}" 
         onclick="playSong(${song.id})">
      <div class="queue-item-thumb">
        <img src="${song.image}" alt="${song.title}" 
             onerror="this.src='images/music.jpeg'" />
      </div>
      <div class="queue-item-info">
        <h4>${song.flag} ${song.title}</h4>
        <p>${song.artist}</p>
      </div>
      <span class="queue-item-dur">${song.duration}</span>
    </div>
  `).join('');
}


// 8. HOME PAGE - TRENDING SONGS & TOP ARTISTS

function buildTopArtists() {
  const grid = document.getElementById('topArtistsGrid');
  if (!grid) return;

  // Extract unique artists with their images from the SONGS array
  const artistsMap = new Map();
  SONGS.forEach(song => {
    // Only add if not already present or if we want to prioritize certain singers
    if (!artistsMap.has(song.artist)) {
      artistsMap.set(song.artist, song.image);
    }
  });

  // Convert to array and limit to top 10 (or shuffle)
  const uniqueArtists = Array.from(artistsMap.entries()).slice(0, 15);

  grid.innerHTML = uniqueArtists.map(([artistName, artistImg]) => `
    <a href="explore.html?artist=${encodeURIComponent(artistName)}" class="artist-card">
      <div class="artist-img-wrapper">
        <img src="${artistImg}" alt="${artistName}" loading="lazy" 
             onerror="this.src='images/music.jpeg'" />
      </div>
      <div class="artist-name">${artistName}</div>
    </a>
  `).join('');
}

function initHomePage() {
  buildTopArtists();

  const grid = document.getElementById('trendingSongs');
  if (!grid) return;
  const trending = getTrendingSongs(8);
  grid.innerHTML = trending.map((song, i) => createSongCard(song, i)).join('');
  observeElements(grid.querySelectorAll('.animate-on-scroll'));
}


// 8.5 PLAYER SEEKING LOGIC

let isDraggingProgress = false;

function setupProgressBarDrag(trackId, fillId) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const updateProgress = (e) => {
    if (!state.audio.duration || isNaN(state.audio.duration)) return 0;
    const rect = track.getBoundingClientRect();
    let clickX = e.clientX - rect.left;
    clickX = Math.max(0, Math.min(clickX, rect.width));
    const pct = clickX / rect.width;

    const fill = document.getElementById(fillId);
    if (fill) fill.style.width = (pct * 100) + '%';
    return pct;
  };

  track.addEventListener('mousedown', (e) => {
    isDraggingProgress = true;
    updateProgress(e);
  });

  document.addEventListener('mousemove', (e) => {
    if (isDraggingProgress) {
      updateProgress(e);
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (isDraggingProgress) {
      const pct = updateProgress(e);
      state.audio.currentTime = pct * state.audio.duration;
      isDraggingProgress = false;
    }
  });
}
function initHomePage() {
  buildTopArtists();
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Restore the previous session's song BEFORE any page init runs,
  // so pages don't auto-start a different song.
  initPlaybackPersistence();
  initPlaybackSaving();
  if (document.getElementById('topArtistsGrid')) {
    initHomePage();
  }
  if (document.getElementById('albumArtImg')) {
    initPlayerPage();
  }
});
function openFullscreenPlayer() {
  const ov = document.getElementById('fullscreenOverlay');
  if (!ov) return;
  ov.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Attempt to sync state if elements exist
  const icon = state.audio.paused ? '▶' : '⏸';
  const fsPlay = document.getElementById('fsPlayBtn');
  if (fsPlay) fsPlay.textContent = icon;
}

function closeFullscreenPlayer() {
  const ov = document.getElementById('fullscreenOverlay');
  if (!ov) return;
  ov.classList.remove('active');
  document.body.style.overflow = '';
}

function initDraggableProgress() {
  setupProgressBarDrag('miniProgressTrack', 'miniProgressFill');
  setupProgressBarDrag('fsProgressBar', 'fsProgressFill');
  setupProgressBarDrag('fullProgressTrack', 'fullProgressFill');
  setupProgressBarDrag('barProgressContainer', 'barProgress');
}

document.addEventListener('DOMContentLoaded', initDraggableProgress);


// 9. EXPLORE PAGE

function initExplorePage() {
  const grid = document.getElementById('exploreSongs');
  if (!grid) return;

  state.filteredSongs = [...SONGS];
  state.loadedCount = 0;
  loadMoreSongs();

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (query === '') {
        state.filteredSongs = applyFilter(state.currentFilter);
      } else {
        state.filteredSongs = SONGS.filter(s =>
          s.title.toLowerCase().includes(query) ||
          s.artist.toLowerCase().includes(query)
        );
      }
      state.loadedCount = 0;
      grid.innerHTML = '';
      loadMoreSongs();
      updateResultsCount();
    });
  }

  // Filter Tabs
  const tabs = document.querySelectorAll('.filter-tab[data-filter]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.currentFilter = tab.dataset.filter;
      state.filteredSongs = applyFilter(state.currentFilter);
      state.loadedCount = 0;
      grid.innerHTML = '';
      loadMoreSongs();
      updateResultsCount();
    });
  });

  // Load More
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMoreSongs);
  }
}

function applyFilter(filter) {
  if (filter === 'all') return [...SONGS];
  if (filter === 'pakistani') return SONGS.filter(s => s.category === 'urdu' || s.category === 'pashto');
  if (filter === 'indian') return SONGS.filter(s => s.category === 'hindi');
  if (filter === 'english') return SONGS.filter(s => s.category === 'english');
  return SONGS.filter(s => s.tags.includes(filter));
}

function loadMoreSongs() {
  const grid = document.getElementById('exploreSongs');
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  if (!grid) return;

  const batch = state.filteredSongs.slice(state.loadedCount, state.loadedCount + state.loadBatch);
  batch.forEach((song, i) => {
    const div = document.createElement('div');
    div.innerHTML = createSongCard(song, state.loadedCount + i);
    const card = div.firstElementChild;
    grid.appendChild(card);
  });

  state.loadedCount += batch.length;

  // Observe new cards
  grid.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
    scrollObserver.observe(el);
  });

  if (loadMoreContainer) {
    loadMoreContainer.style.display = state.loadedCount >= state.filteredSongs.length ? 'none' : 'block';
  }
  updateResultsCount();
}

function updateResultsCount() {
  const el = document.getElementById('resultsCount');
  if (el) el.textContent = `Showing ${Math.min(state.loadedCount, state.filteredSongs.length)} of ${state.filteredSongs.length} songs`;
}

// ============================================================
// 10. CATEGORIES PAGE
// ============================================================
function initCategoriesPage() {
  const pak = document.getElementById('pakistaniGrid');
  const ind = document.getElementById('indianGrid');
  const eng = document.getElementById('englishGrid');

  if (pak) {
    const pakistaniSongs = SONGS.filter(s => s.category === 'urdu' || s.category === 'pashto');
    pak.innerHTML = pakistaniSongs.length ? pakistaniSongs.map((s, i) => createSongCard(s, i)).join('') : '<p style="color:#a855f7;">No songs found.</p>';
  }
  if (ind) {
    const indianSongs = SONGS.filter(s => s.category === 'hindi');
    ind.innerHTML = indianSongs.length ? indianSongs.map((s, i) => createSongCard(s, i)).join('') : '<p style="color:#a855f7;">No songs found.</p>';
  }
  if (eng) {
    const englishSongs = SONGS.filter(s => s.category === 'english');
    eng.innerHTML = englishSongs.length ? englishSongs.map((s, i) => createSongCard(s, i)).join('') : '<p style="color:#a855f7;">No songs found.</p>';
  }

  // Smooth scroll from nav pills
  document.querySelectorAll('.filter-tabs a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.filter-tabs a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Hash nav on load
  if (window.location.hash) {
    setTimeout(() => {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  }

  // Observe all cards
  document.querySelectorAll('.animate-on-scroll').forEach(el => scrollObserver.observe(el));
}

// ============================================================
// 11. CONTACT FORM
// ============================================================
function initContactPage() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    if (btn) { btn.textContent = '⏳ Sending...'; btn.disabled = true; }

    setTimeout(() => {
      form.style.display = 'none';
      if (success) success.style.display = 'block';
      showToast('Message sent successfully!', '✅');
    }, 1800);
  });
}

// ============================================================
// 12. PLAYER BAR CONTROLS (Global — all pages)
// ============================================================
function initPlayerBar() {
  const barPlay = document.getElementById('barPlay');
  if (barPlay) barPlay.addEventListener('click', () => {
    togglePlay();
    barPlay.textContent = state.isPlaying ? '⏸' : '▶';
  });

  const barPrev = document.getElementById('barPrev');
  if (barPrev) barPrev.addEventListener('click', playPrev);

  const barNext = document.getElementById('barNext');
  if (barNext) barNext.addEventListener('click', playNext);

  const barShuffle = document.getElementById('barShuffle');
  if (barShuffle) barShuffle.addEventListener('click', () => toggleShuffle(barShuffle));

  const barRepeat = document.getElementById('barRepeat');
  if (barRepeat) barRepeat.addEventListener('click', () => toggleRepeat(barRepeat));

  const barVolume = document.getElementById('barVolume');
  if (barVolume) barVolume.addEventListener('click', toggleMute);

  const volumeSlider = document.getElementById('volumeSlider');
  if (volumeSlider) {
    volumeSlider.value = state.volume * 100;
    volumeSlider.addEventListener('input', (e) => setVolume(e.target.value));
  }

  const barHeart = document.getElementById('barHeart');
  if (barHeart) {
    barHeart.addEventListener('click', () => {
      if (state.currentSong) toggleLike(state.currentSong.id, barHeart);
    });
  }

  const barProgressContainer = document.getElementById('barProgressContainer');
  if (barProgressContainer) {
    barProgressContainer.addEventListener('click', (e) => {
      const rect = barProgressContainer.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      if (state.audio.duration) {
        state.audio.currentTime = (pct / 100) * state.audio.duration;
      }
      const fill = document.getElementById('barProgress');
      if (fill) fill.style.width = pct + '%';
    });
  }

  // Real audio events
  state.audio.addEventListener('timeupdate', () => {
    if (!state.audio.duration) return;
    const pct = (state.audio.currentTime / state.audio.duration) * 100;
    updateProgressBars(pct, state.audio.currentTime, state.audio.duration);
  });

  state.audio.addEventListener('ended', () => {
    if (state.isRepeat) {
      state.audio.currentTime = 0;
      state.audio.play();
    } else {
      playNext();
    }
  });
}

// ============================================================
// 13. NAVBAR
// ============================================================
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('mainNavLinks');

  // Scroll effect
  const onScroll = () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Hamburger
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close nav when tapping outside
    document.addEventListener('click', (e) => {
      if (navbar && !navbar.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });

    // Close nav on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    // Reset state when returning to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }
}

// ============================================================
// 15. PERSISTENT PLAYBACK
// Static pages tear down the <audio> element on navigation, so the
// song/time is stored in localStorage and restored on the next page.
// Autoplay is retried automatically; if the browser blocks it a
// "Resume" pill is shown so the user can start it with one tap.
// ============================================================
const PLAYBACK_KEY = 'sonicwave:playback';
let resumePill = null;

function savePlayback() {
  if (!state.currentSong) return;
  try {
    localStorage.setItem(PLAYBACK_KEY, JSON.stringify({
      songId: state.currentSong.id,
      time: state.audio.currentTime || 0,
      volume: state.volume,
      isPlaying: state.isPlaying && !state.audio.paused,
      shuffle: state.isShuffle,
      repeat: state.isRepeat,
      liked: Array.from(state.liked),
      savedAt: Date.now()
    }));
  } catch (e) { /* storage unavailable (private mode/quota) */ }
}

function loadSavedPlayback() {
  try {
    const raw = localStorage.getItem(PLAYBACK_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

function seekTo(sec) {
  if (typeof sec !== 'number' || sec <= 0) return;
  const apply = () => {
    if (isFinite(state.audio.duration) && state.audio.duration > 0) {
      state.audio.currentTime = Math.min(sec, state.audio.duration - 0.25);
    }
  };
  if (state.audio.readyState >= 1) apply();
  else state.audio.addEventListener('loadedmetadata', apply, { once: true });
}

function buildResumePill() {
  if (resumePill) return resumePill;
  resumePill = document.createElement('div');
  resumePill.id = 'resumePill';
  resumePill.className = 'resume-pill';
  resumePill.innerHTML =
    '<button class="resume-pill-play" aria-label="Resume playback">&#9654;</button>' +
    '<span class="resume-pill-text"><strong class="resume-pill-title"></strong><span>Tap to continue listening</span></span>' +
    '<button class="resume-pill-close" aria-label="Dismiss">&#10005;</button>';
  document.body.appendChild(resumePill);
  resumePill.querySelector('.resume-pill-play').addEventListener('click', () => {
    state.audio.play()
      .then(() => { resumePill.classList.remove('show'); })
      .catch(() => {});
  });
  resumePill.querySelector('.resume-pill-close').addEventListener('click', () => {
    resumePill.classList.remove('show');
  });
  return resumePill;
}

function showResumePill(song) {
  const pill = buildResumePill();
  pill.querySelector('.resume-pill-title').textContent = song.title;
  pill.classList.add('show');
  savePlayback();
}

function initPlaybackPersistence() {
  const saved = loadSavedPlayback();
  if (!saved) return;

  const song = SONGS.find(s => s.id === saved.songId);
  if (!song) return;

  // Restore user settings first so the UI reflects them
  if (typeof saved.volume === 'number') {
    state.volume = Math.min(1, Math.max(0, saved.volume));
    state.audio.volume = state.volume;
  }
  if (typeof saved.shuffle === 'boolean') state.isShuffle = saved.shuffle;
  if (typeof saved.repeat === 'boolean') state.isRepeat = saved.repeat;
  if (Array.isArray(saved.liked)) saved.liked.forEach(id => state.liked.add(id));

  // Re-attach the audio source and UI without a play() yet
  state.currentSong = song;
  state.currentIndex = SONGS.indexOf(song);
  state.isPlaying = false;

  if (song.file) {
    state.audio.src = song.file;
    state.audio.load();
  }
  seekTo(saved.time);

  updateAllPlayerUIs(song);
  showPlayerBar();
  updatePlayButtons();
  if (document.getElementById('albumArtImg')) updatePlayerPage(song);

  // Let the browser try to continue; fall back to a manual tap
  const attempt = () => {
    if (!song.file) return;
    state.audio.play().then(() => {
      if (resumePill) resumePill.classList.remove('show');
    }).catch(() => showResumePill(song));
  };
  if (saved.isPlaying) {
    if (state.audio.readyState >= 2) attempt();
    else state.audio.addEventListener('canplay', attempt, { once: true });
  }
}

// Persist on every meaningful change (throttled via timeupdate guard)
function initPlaybackSaving() {
  let last = 0;
  state.audio.addEventListener('timeupdate', () => {
    const now = Date.now();
    if (now - last > 1000) { last = now; savePlayback(); }
  });
  ['play', 'pause', 'ended', 'volumechange'].forEach(ev =>
    state.audio.addEventListener(ev, savePlayback));
  window.addEventListener('pagehide', savePlayback);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') savePlayback();
  });
}

// ============================================================
// 16. PARTICLES (Hero)
// ============================================================
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 8 + 6}s;
      animation-delay: ${Math.random() * 5}s;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: ${Math.random() > 0.5 ? '#a855f7' : '#ff00cc'};
    `;
    container.appendChild(p);
  }
}

// ============================================================
// 15. SCROLL ANIMATIONS
// ============================================================
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function observeElements(elements) {
  elements.forEach(el => scrollObserver.observe(el));
}

function initScrollAnimations() {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });
}

// ============================================================
// 16. LOADING SCREEN
// ============================================================
function hideLoader() {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 600);
    }, 900);
  }
}

// ============================================================
// 17. MAIN INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Detect current page
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  // Universal inits
  initNavbar();
  initScrollAnimations();
  initPlayerBar();
  hideLoader();

  // Page-specific
  if (page === 'index.html' || page === '' || page === '/') {
    initHomePage();
    initParticles();
  } else if (page === 'explore.html') {
    initExplorePage();
  } else if (page === 'categories.html') {
    initCategoriesPage();
  } else if (page === 'player.html') {
    // player.html has its own initPlayerPage() call inline
    // but also init global things
  } else if (page === 'contact.html') {
    initContactPage();
  }

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});

// Expose functions globally (called from HTML onclick)
window.playSong = playSong;
window.toggleLike = toggleLike;
window.initPlayerPage = initPlayerPage;
