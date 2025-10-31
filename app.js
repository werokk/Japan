// Days data
const daysData = [
  {
    date: "Nov 5",
    day: 1,
    title: "Arrival & Suginami Exploration",
    location: "Tokyo (Suginami-ku)",
    emoji: "✈️",
    highlights: [
      "Arrive at Narita Airport",
      "Transfer to Suginami-ku",
      "Omiya Hachiman Shrine",
      "Wadabori Park",
      "Suginami Animation Museum"
    ],
    mustSee: [
      "Suginami Animation Museum",
      "Omiya Hachiman Shrine"
    ],
    hiddenGems: [
      "Wadabori Park"
    ],
    foodSpots: [
      "Local izakayas in Asagaya"
    ],
    transport: "JR Narita Express + Chūō Line (1h 23min, ¥3,045-¥5,971) or Airport Limousine Bus (¥1,500)",
    notes: "Take it easy after the long flight. Suginami is residential and perfect for settling in."
  },
  {
    date: "Nov 6",
    day: 2,
    title: "Koenji's Bohemian Vibes",
    location: "Tokyo (Suginami-ku)",
    emoji: "🎸",
    highlights: [
      "Koenji Junjo Shopping Street",
      "Vintage boutiques & record shops",
      "LIVE MUSIC JIROKICHI venue",
      "Poppins' Tea and Coffee",
      "Hidden izakayas"
    ],
    mustSee: [
      "Koenji Junjo Shopping Street"
    ],
    hiddenGems: [
      "LIVE MUSIC JIROKICHI",
      "Poppins' Tea and Coffee"
    ],
    foodSpots: [
      "Local yakitori izakayas",
      "Poppins' Tea and Coffee"
    ],
    transport: "Walk or bike around Koenji - everything is close",
    notes: "Koenji is Tokyo's bohemian quarter - perfect for vintage shopping and live music!"
  },
  {
    date: "Nov 7",
    day: 3,
    title: "Historic Asakusa & Tsukiji Feast",
    location: "Tokyo",
    emoji: "⛩️",
    highlights: [
      "Sensō-ji Temple",
      "Kaminari-mon Gate",
      "Nakamise Shopping Street",
      "Yanaka Ginza sunset steps",
      "Tsukiji Outer Market"
    ],
    mustSee: [
      "Sensō-ji Temple",
      "Tsukiji Outer Market"
    ],
    hiddenGems: [
      "Yanaka Ginza Yūyake Dandan"
    ],
    foodSpots: [
      "Tsukiji fresh sushi",
      "Nakamise street snacks"
    ],
    transport: "Chūō Line to Tokyo, transfer to Ginza Line for Asakusa",
    notes: "Early morning at Tsukiji for the freshest seafood!"
  },
  {
    date: "Nov 8",
    day: 4,
    title: "Gardens & Sky-High Views",
    location: "Tokyo",
    emoji: "🌸",
    highlights: [
      "Shinjuku Gyoen National Garden",
      "Meiji Jingu Shrine",
      "Kyu Asakura House",
      "Shibuya Sky observation deck"
    ],
    mustSee: [
      "Shinjuku Gyoen",
      "Shibuya Sky"
    ],
    hiddenGems: [
      "Kyu Asakura House"
    ],
    foodSpots: [
      "Cafes near Shinjuku Gyoen"
    ],
    transport: "Easy access from Suginami via Chūō/JR lines",
    notes: "Book Shibuya Sky tickets in advance! Autumn colors should be beautiful."
  },
  {
    date: "Nov 9",
    day: 5,
    title: "Tokyo → Osaka Journey",
    location: "Tokyo → Osaka",
    emoji: "🚄",
    highlights: [
      "Morning in Shimokitazawa or Koenji",
      "Shinkansen to Osaka",
      "Check-in at Chuo-ku",
      "Osaka Castle evening",
      "Dotonbori first look"
    ],
    mustSee: [
      "Osaka Castle",
      "Dotonbori"
    ],
    hiddenGems: [
      "Shimokitazawa vintage shops"
    ],
    foodSpots: [
      "BOTEJYU Dotonbori okonomiyaki"
    ],
    transport: "Tōkaidō Shinkansen Hikari (2h 30min)",
    notes: "Travel day - pack light and enjoy the scenic ride!"
  },
  {
    date: "Nov 10",
    day: 6,
    title: "Osaka Castle & Canal Magic",
    location: "Osaka (Chuo-ku)",
    emoji: "🏯",
    highlights: [
      "Osaka Castle Park morning",
      "Castle Museum & tower",
      "Tombori River Cruise",
      "Ura Namba hidden alleys",
      "Local izakayas dinner"
    ],
    mustSee: [
      "Osaka Castle",
      "Tombori River Cruise"
    ],
    hiddenGems: [
      "Ura Namba alleys"
    ],
    foodSpots: [
      "Ura Namba izakayas",
      "Dotonbori street food"
    ],
    transport: "Walkable from Chuo-ku or short subway",
    notes: "Book river cruise ahead. Castle gets crowded after 11am."
  },
  {
    date: "Nov 11",
    day: 7,
    title: "✨ Kyoto teamLab Day Trip ✨",
    location: "Kyoto Day Trip",
    emoji: "🎨",
    special: true,
    booked: true,
    highlights: [
      "teamLab Biovortex Kyoto (BOOKED!)",
      "Fushimi Inari torii gates",
      "Kiyomizu-dera Temple",
      "Gion District stroll",
      "Return to Osaka evening"
    ],
    mustSee: [
      "teamLab Biovortex Kyoto",
      "Fushimi Inari Taisha"
    ],
    hiddenGems: [
      "Gion backstreets"
    ],
    foodSpots: [
      "Kyoto kaiseki lunch",
      "Gion tea houses"
    ],
    transport: "Shinkansen Shin-Osaka to Kyoto (15 min), teamLab 7 min walk from station",
    notes: "🎫 teamLab ticket booked! Plan 2-3 hours for exhibition. This is THE highlight!"
  },
  {
    date: "Nov 12",
    day: 8,
    title: "Market Flavors & Ocean Wonders",
    location: "Osaka (Chuo-ku)",
    emoji: "🦈",
    highlights: [
      "Kuromon Market morning",
      "Osaka Aquarium Kaiyukan",
      "Tsutenkaku Tower",
      "Shinsekai kushikatsu"
    ],
    mustSee: [
      "Kuromon Market",
      "Kaiyukan Aquarium"
    ],
    hiddenGems: [
      "Shinsekai Market"
    ],
    foodSpots: [
      "Kuromon fresh seafood",
      "Shinsekai kushikatsu stands"
    ],
    transport: "Subway to Osakako for aquarium",
    notes: "Early to Kuromon for best selection. Aquarium takes 2-3 hours."
  },
  {
    date: "Nov 13",
    day: 9,
    title: "Sky Gardens & Hidden Temples",
    location: "Osaka (Chuo-ku)",
    emoji: "🌃",
    highlights: [
      "Umeda Sky Building",
      "Osaka Station City",
      "Hozen-ji Temple (moss statue)",
      "Ebisu Bashi-Suji Shopping",
      "Farewell Osaka dinner"
    ],
    mustSee: [
      "Umeda Sky Building"
    ],
    hiddenGems: [
      "Hozen-ji Temple"
    ],
    foodSpots: [
      "Kani Doraku crab dinner",
      "Dotonbori restaurants"
    ],
    transport: "Easy subway to Umeda",
    notes: "Last full day in Osaka - make it count! Special dinner tonight."
  },
  {
    date: "Nov 14",
    day: 10,
    title: "Return to Tokyo Finale",
    location: "Tokyo (Final Night)",
    emoji: "🗼",
    highlights: [
      "Shinkansen to Tokyo",
      "Zojo-ji Temple",
      "Tokyo Tower views",
      "Toyokawa Inari Annex",
      "Farewell izakaya dinner"
    ],
    mustSee: [
      "Tokyo Tower & Zojo-ji"
    ],
    hiddenGems: [
      "Toyokawa Inari Tokyo Annex"
    ],
    foodSpots: [
      "Final izakaya in Shinjuku/Shibuya"
    ],
    transport: "Shinkansen Shin-Osaka to Tokyo (2h 30min)",
    notes: "Full circle! Savor the final evening in Tokyo."
  }
];

// Checklist data (stored in memory)
let checklistItems = [
  { text: "Book JR Pass", done: false },
  { text: "teamLab Biovortex tickets", done: true },
  { text: "Travel insurance", done: false },
  { text: "Download offline maps", done: false },
  { text: "Pack essentials", done: false },
  { text: "Currency exchange", done: false },
  { text: "Accommodation confirmations", done: false }
];

// Current day index
let currentDayIndex = 0;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initSakura();
  initCountdown();
  initNavigation();
  initCurrencyConverter();
  renderDayCards();
  initAccordions();
  renderChecklist();
  initThemeToggle();
});

// Sakura animation
function initSakura() {
  const container = document.getElementById('sakuraContainer');
  const sakuraCount = 15;
  
  for (let i = 0; i < sakuraCount; i++) {
    const sakura = document.createElement('div');
    sakura.className = 'sakura';
    sakura.textContent = '🌸';
    sakura.style.left = Math.random() * 100 + '%';
    sakura.style.animationDuration = (Math.random() * 10 + 10) + 's';
    sakura.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(sakura);
  }
}

// Countdown timer
function initCountdown() {
  const departureDate = new Date('2025-11-05T00:00:00');
  
  function updateCountdown() {
    const now = new Date();
    const diff = departureDate - now;
    
    if (diff <= 0) {
      document.getElementById('countdown').textContent = "It's time! 🎉";
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('countdown').textContent = `${days} days, ${hours} hours, ${minutes} minutes`;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 60000); // Update every minute
}

// Navigation
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section, .hero');
  
  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      smoothScroll(targetId);
    });
  });
  
  // Update active nav on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
    
    // Progress bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('navProgress').style.width = scrolled + '%';
  });
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Currency converter
function initCurrencyConverter() {
  const gbpInput = document.getElementById('gbpInput');
  const jpyOutput = document.getElementById('jpyOutput');
  const exchangeRate = 193;
  
  function convert() {
    const gbp = parseFloat(gbpInput.value) || 0;
    const jpy = Math.round(gbp * exchangeRate);
    jpyOutput.value = '¥' + jpy.toLocaleString();
  }
  
  convert();
  gbpInput.addEventListener('input', convert);
}

// Day cards
function renderDayCards() {
  const carousel = document.getElementById('daysCarousel');
  
  daysData.forEach((day, index) => {
    const card = createDayCard(day, index);
    carousel.appendChild(card);
  });
  
  // Show first day
  showDay(0);
  
  // Navigation buttons
  document.getElementById('prevDay').addEventListener('click', () => {
    if (currentDayIndex > 0) {
      showDay(currentDayIndex - 1);
    }
  });
  
  document.getElementById('nextDay').addEventListener('click', () => {
    if (currentDayIndex < daysData.length - 1) {
      showDay(currentDayIndex + 1);
    }
  });
}

function createDayCard(day, index) {
  const card = document.createElement('div');
  card.className = 'day-card' + (day.special ? ' special' : '');
  card.dataset.index = index;
  
  let html = `
    <div class="day-card-header">
      <div class="day-emoji">${day.emoji}</div>
      <div class="day-title-row">
        <h3 class="day-title">${day.title}</h3>
        ${day.booked ? '<span class="booked-badge">✨ BOOKED! ✨</span>' : ''}
      </div>
      <div class="day-meta">
        <span>📅 ${day.date}</span>
        <span>Day ${day.day}</span>
      </div>
      <div class="day-location">📍 ${day.location}</div>
    </div>
  `;
  
  // Highlights section
  if (day.highlights && day.highlights.length > 0) {
    html += `
      <div class="day-section">
        <div class="day-section-header" onclick="toggleDaySection(this)">
          <div class="day-section-title">✨ Highlights</div>
          <div class="toggle-icon">▼</div>
        </div>
        <div class="day-section-content">
          <ul class="day-list">
            ${day.highlights.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }
  
  // Must-see section
  if (day.mustSee && day.mustSee.length > 0) {
    html += `
      <div class="day-section">
        <div class="day-section-header" onclick="toggleDaySection(this)">
          <div class="day-section-title">⭐ Must-See</div>
          <div class="toggle-icon">▼</div>
        </div>
        <div class="day-section-content">
          <ul class="day-list must-see-list">
            ${day.mustSee.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }
  
  // Hidden gems section
  if (day.hiddenGems && day.hiddenGems.length > 0) {
    html += `
      <div class="day-section">
        <div class="day-section-header" onclick="toggleDaySection(this)">
          <div class="day-section-title">💎 Hidden Gems</div>
          <div class="toggle-icon">▼</div>
        </div>
        <div class="day-section-content">
          <ul class="day-list hidden-gems-list">
            ${day.hiddenGems.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }
  
  // Food spots section
  if (day.foodSpots && day.foodSpots.length > 0) {
    html += `
      <div class="day-section">
        <div class="day-section-header" onclick="toggleDaySection(this)">
          <div class="day-section-title">🍜 Food Spots</div>
          <div class="toggle-icon">▼</div>
        </div>
        <div class="day-section-content">
          <ul class="day-list food-list">
            ${day.foodSpots.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }
  
  // Transport section
  if (day.transport) {
    html += `
      <div class="day-section">
        <div class="day-section-header" onclick="toggleDaySection(this)">
          <div class="day-section-title">🚆 Transport</div>
          <div class="toggle-icon">▼</div>
        </div>
        <div class="day-section-content">
          <p style="padding: 8px 0;">${day.transport}</p>
        </div>
      </div>
    `;
  }
  
  // Notes section
  if (day.notes) {
    html += `
      <div class="day-notes">
        <strong>💭 Note:</strong> ${day.notes}
      </div>
    `;
  }
  
  card.innerHTML = html;
  return card;
}

function showDay(index) {
  currentDayIndex = index;
  
  // Update cards
  const cards = document.querySelectorAll('.day-card');
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
  
  // Update counter
  document.getElementById('dayCounter').textContent = `Day ${index + 1} of ${daysData.length}`;
  
  // Update navigation buttons
  document.getElementById('prevDay').disabled = index === 0;
  document.getElementById('nextDay').disabled = index === daysData.length - 1;
}

function toggleDaySection(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector('.toggle-icon');
  
  if (content.classList.contains('open')) {
    content.classList.remove('open');
    icon.classList.remove('open');
  } else {
    content.classList.add('open');
    icon.classList.add('open');
  }
}

// Accordions
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasOpen = item.classList.contains('open');
      
      // Close all accordions
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
      });
      
      // Open clicked one if it wasn't open
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}

// Checklist
function renderChecklist() {
  const container = document.getElementById('checklistContainer');
  container.innerHTML = '';
  
  checklistItems.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'checklist-item' + (item.done ? ' checked' : '');
    itemEl.innerHTML = `
      <div class="checklist-checkbox"></div>
      <div class="checklist-text">${item.text}</div>
    `;
    
    itemEl.addEventListener('click', () => {
      toggleChecklistItem(index);
    });
    
    container.appendChild(itemEl);
  });
  
  updateChecklistProgress();
}

function toggleChecklistItem(index) {
  checklistItems[index].done = !checklistItems[index].done;
  renderChecklist();
}

function updateChecklistProgress() {
  const completed = checklistItems.filter(item => item.done).length;
  const total = checklistItems.length;
  const percentage = (completed / total) * 100;
  
  document.getElementById('checklistProgress').style.width = percentage + '%';
  document.getElementById('progressText').textContent = `${completed} of ${total} completed`;
}

// Theme toggle
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const icon = toggle.querySelector('.theme-icon');
  
  toggle.addEventListener('click', () => {
    const currentScheme = document.documentElement.getAttribute('data-color-scheme');
    
    if (currentScheme === 'dark') {
      document.documentElement.setAttribute('data-color-scheme', 'light');
      icon.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-color-scheme', 'dark');
      icon.textContent = '☀️';
    }
  });
}

// Share function
function shareTrip() {
  alert('✨ Get ready to share your amazing Japan adventure with the world! 🇯🇵\n\nThis itinerary is packed with unforgettable experiences!');
}

// Make functions available globally
window.smoothScroll = smoothScroll;
window.toggleDaySection = toggleDaySection;
window.shareTrip = shareTrip;