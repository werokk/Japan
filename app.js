// User selections storage (in-memory)
let userSelections = {}; // Format: { dayIndex: optionId }

// Days data with multiple options per day
const daysData = [
  {
    date: "Nov 5",
    day: 1,
    title: "Arrival in Tokyo",
    location: "Suginami-ku, Tokyo",
    emoji: "✈️",
    options: [
      {
        optionId: 1,
        title: "Early Exploration",
        vibe: "Light & Settling In",
        primaryActivity: { name: "Arrive at Narita Airport", url: "https://www.narita-airport.jp/en/" },
        highlights: [
          { name: "Get Suica IC Card", url: "https://www.suica.or.jp/" },
          { name: "Transfer to Suginami-ku", url: "https://www.city.tokyo.lg.jp/suginami/" }
        ],
        dining: [{ name: "7-Eleven", url: "https://www.seven-eleven.co.jp/", cuisine: "Convenience food" }],
        hiddenGems: [{ name: "Rest at hotel", url: "https://www.booking.com/searchresults.html?ss=Suginami-ku" }],
        transport: "JR Narita Express + Chūō Line (1h 23min, ¥3,045)",
        redditNote: "Don't overschedule - jet lag is real!",
        activities: "Rest, explore immediate neighborhood, get money"
      },
      {
        optionId: 2,
        title: "Neighborhood Discovery",
        vibe: "Active & Exploring",
        primaryActivity: { name: "Omiya Hachiman Shrine", url: "https://www.omiya-hachiman.or.jp/" },
        highlights: [
          { name: "Wadabori Park", url: "https://www.city.suginami.tokyo.jp/" },
          { name: "Asagaya area walk", url: "https://tabelog.com/tokyo/A1320/" }
        ],
        dining: [{ name: "Local izakaya near Koenji", url: "https://tabelog.com/tokyo/A1320/A132004/", cuisine: "Japanese casual" }],
        hiddenGems: [{ name: "Suginami Animation Museum", url: "https://www.sam.or.jp/" }],
        transport: "Walk or short train ride",
        redditNote: "Get to know your neighborhood on day 1 - great foundation",
        activities: "Shrine visit, park walk, local food discovery"
      },
      {
        optionId: 3,
        title: "Rest & Prepare Day",
        vibe: "Minimal & Restful",
        primaryActivity: { name: "Hotel Rest", url: "https://www.booking.com/" },
        highlights: [
          { name: "Local convenience store exploration", url: "https://www.seven-eleven.co.jp/" },
          { name: "Unpack and settle in", url: "https://www.booking.com/" }
        ],
        dining: [{ name: "Hotel restaurant or room service", url: "https://www.booking.com/", cuisine: "Whatever's easiest" }],
        hiddenGems: [{ name: "Local vending machines", url: "https://www.google.com/maps/" }],
        transport: "Minimal - stay local",
        redditNote: "Valid choice - recovery is important!",
        activities: "Rest, plan next days, sleep early"
      }
    ]
  },
  {
    date: "Nov 6",
    day: 2,
    title: "Koenji or Shimokitazawa",
    location: "Tokyo (Suginami-ku area)",
    emoji: "🎸",
    options: [
      {
        optionId: 1,
        title: "Vintage Shopping Deep-Dive",
        vibe: "Bohemian & Retro",
        primaryActivity: { name: "Koenji Junjo Shopping Street", url: "https://www.koenji-shotengai.jp/" },
        highlights: [
          { name: "Treasure Factory Style", url: "https://www.tf-style.com/" },
          { name: "NOTIME Vintage", url: "https://www.instagram.com/notime_shimokita/" },
          { name: "Gleeful Shimokitazawa", url: "https://www.instagram.com/gleeful_shimokita_2nd/" }
        ],
        dining: [{ name: "Street food vendors", url: "https://tabelog.com/tokyo/A1320/A132004/", cuisine: "Try 3-4 different options" }],
        hiddenGems: [
          { name: "Record stores", url: "https://www.google.com/maps/search/record+store+koenji" },
          { name: "Hidden ramen alley", url: "https://tabelog.com/tokyo/A1320/A132004/" }
        ],
        transport: "Walk or bike - everything close",
        redditNote: "Try NEW places, don't repeat restaurants",
        activities: "Vintage shopping, food sampling, neighborhood exploration"
      },
      {
        optionId: 2,
        title: "Local Food Tour",
        vibe: "Culinary & Social",
        primaryActivity: { name: "Koenji Street Food Exploration", url: "https://tabelog.com/tokyo/A1320/A132004/" },
        highlights: [
          { name: "Multiple ramen spots", url: "https://tabelog.com/tokyo/A1320/A132004/" },
          { name: "Local izakayas", url: "https://tabelog.com/tokyo/A1320/A132004/" },
          { name: "Coffee shops", url: "https://www.google.com/maps/search/cafe+koenji" }
        ],
        dining: [
          { name: "Poppins' Tea and Coffee", url: "https://www.google.com/maps/search/poppins+koenji", cuisine: "Cafe & desserts" },
          { name: "5 different food stalls", url: "https://tabelog.com/tokyo/A1320/A132004/", cuisine: "Varied" }
        ],
        hiddenGems: [{ name: "Unmarked local restaurants", url: "https://tabelog.com/tokyo/A1320/A132004/" }],
        transport: "Mostly walking",
        redditNote: "Food is Japan's love language - try everything!",
        activities: "Food tasting, cafe hopping, local discovery"
      },
      {
        optionId: 3,
        title: "Live Music & Nightlife",
        vibe: "Energetic & Cultural",
        primaryActivity: { name: "LIVE MUSIC JIROKICHI", url: "https://www.google.com/maps/search/LIVE+MUSIC+JIROKICHI+koenji" },
        highlights: [
          { name: "Live performances (check schedule)", url: "https://www.google.com/maps/" },
          { name: "Jazz/experimental scene", url: "https://tabelog.com/tokyo/A1320/A132004/" }
        ],
        dining: [{ name: "Izakaya before show", url: "https://tabelog.com/tokyo/A1320/A132004/", cuisine: "Japanese pub food" }],
        hiddenGems: [{ name: "Underground music scene", url: "https://www.google.com/maps/" }],
        transport: "Walk to venues",
        redditNote: "Koenji has incredible live music culture!",
        activities: "Live music, local nightlife, cultural immersion"
      }
    ]
  },
  {
    date: "Nov 7",
    day: 3,
    title: "Early Market & Shrines",
    location: "Tokyo",
    emoji: "⛩️",
    options: [
      {
        optionId: 1,
        title: "Tsukiji Market Feast",
        vibe: "Culinary Adventure",
        primaryActivity: { name: "Tsukiji Outer Market", url: "https://www.tsukiji.or.jp/", note: "MUST arrive 6-7am!" },
        highlights: [
          { name: "Fresh sushi counters", url: "https://tabelog.com/tokyo/A1304/A130411/" },
          { name: "Market vendor recommendations", url: "https://www.tsukiji.or.jp/" },
          { name: "Tamagoyaki (egg omelet) stalls", url: "https://tabelog.com/tokyo/A1304/A130411/" }
        ],
        dining: [
          { name: "Tsukiji sushi breakfast", url: "https://tabelog.com/tokyo/A1304/A130411/", cuisine: "Fresh seafood" },
          { name: "Tea and snacks after", url: "https://tabelog.com/tokyo/A1304/A130411/" }
        ],
        hiddenGems: [{ name: "Hidden ramen spots in market", url: "https://tabelog.com/tokyo/A1304/A130411/" }],
        transport: "Ginza Line or walk",
        redditNote: "Early bird gets the freshest fish!",
        activities: "Market exploration, food sampling, early morning vibe"
      },
      {
        optionId: 2,
        title: "Meiji Jingu Focus",
        vibe: "Spiritual & Peaceful",
        primaryActivity: { name: "Meiji Jingu Shrine", url: "https://www.meijijingu.or.jp/" },
        highlights: [
          { name: "Forested sanctuary walk", url: "https://www.meijijingu.or.jp/" },
          { name: "Iris garden (seasonal)", url: "https://www.meijijingu.or.jp/" },
          { name: "Quiet reflection areas", url: "https://www.meijijingu.or.jp/" }
        ],
        dining: [{ name: "Tea room in sanctuary", url: "https://www.meijijingu.or.jp/", cuisine: "Traditional tea" }],
        hiddenGems: [{ name: "Meiji Jingu Gyoen garden", url: "https://www.meijijingu.or.jp/" }],
        transport: "Easy access from most Tokyo areas",
        redditNote: "Better spiritual experience than crowded Sensoji!",
        activities: "Shrine walks, meditation, garden appreciation"
      },
      {
        optionId: 3,
        title: "Hidden Temples Day",
        vibe: "Off-the-Beaten-Path",
        primaryActivity: { name: "Yanaka Ginza", url: "https://www.yanakaginza.com/" },
        highlights: [
          { name: "Yanaka Ginza Yūyake Dandan (sunset steps)", url: "https://www.city.arakawa.tokyo.jp/" },
          { name: "Artisanal shops", url: "https://www.yanakaginza.com/" },
          { name: "Hidden shrines and temples", url: "https://tabelog.com/tokyo/A1310/A131007/" }
        ],
        dining: [
          { name: "Local ramen in Yanaka", url: "https://tabelog.com/tokyo/A1310/A131007/", cuisine: "Traditional noodles" },
          { name: "Artisanal cafes", url: "https://tabelog.com/tokyo/A1310/A131007/" }
        ],
        hiddenGems: [{ name: "Rikugien Garden", url: "https://www.tokyo-park.or.jp/park/rikugien/", note: "Alternative beautiful garden" }],
        transport: "Local train to Yanaka area",
        redditNote: "Locals' favorite - authentic Tokyo charm!",
        activities: "Temple exploration, sunset viewing, local discovery"
      }
    ]
  },
  {
    date: "Nov 11",
    day: 7,
    title: "✨ KYOTO teamLab Day Trip ✨",
    location: "Kyoto (Day-trip from Osaka)",
    emoji: "🎨",
    special: true,
    booked: true,
    note: "🎫 teamLab Biovortex Kyoto BOOKED for Nov 11!",
    options: [
      {
        optionId: 1,
        title: "teamLab + Arashiyama (Recommended)",
        vibe: "Digital Art & Nature",
        primaryActivity: { name: "teamLab Biovortex Kyoto", url: "https://www.teamlab.art/e/kyoto/", note: "BOOKED! 2-3 hours in morning" },
        highlights: [
          { name: "50+ interactive digital installations", url: "https://www.teamlab.art/e/kyoto/" },
          { name: "Arashiyama Bamboo Grove", url: "https://www.kyoto.travel/en/things-to-do/arashiyama-bamboo-grove", note: "Serene afternoon walk" },
          { name: "Tenryu-ji Temple area", url: "https://www.tenryu-in.net/" }
        ],
        dining: [
          { name: "Kyoto kaiseki lunch", url: "https://tabelog.com/kyoto/", cuisine: "Traditional multi-course" },
          { name: "Tea house", url: "https://www.kyoto.travel/", cuisine: "Matcha and sweets" }
        ],
        hiddenGems: [{ name: "Bamboo grove early morning", url: "https://www.kyoto.travel/en/things-to-do/arashiyama-bamboo-grove" }],
        transport: "7:00am Shinkansen Shin-Osaka to Kyoto (15 min), teamLab 7 min walk from Kyoto Station, Latest return: 7pm",
        redditNote: "THIS DAY IS PACKED - focus on quality not quantity",
        activities: "Digital art immersion, bamboo forest walk, return by 7pm"
      },
      {
        optionId: 2,
        title: "teamLab + Fushimi Inari",
        vibe: "Digital Art & Iconic Shrines",
        primaryActivity: { name: "teamLab Biovortex Kyoto", url: "https://www.teamlab.art/e/kyoto/", note: "BOOKED! Morning session" },
        highlights: [
          { name: "Fushimi Inari Taisha", url: "https://inari.fushimi.kyoto.jp/", note: "Iconic red torii gates (more crowded)" },
          { name: "Explore less-visited shrine paths", url: "https://inari.fushimi.kyoto.jp/" },
          { name: "Shrine grounds exploration", url: "https://inari.fushimi.kyoto.jp/" }
        ],
        dining: [
          { name: "Kyoto lunch spot", url: "https://tabelog.com/kyoto/", cuisine: "Local Kyoto" },
          { name: "Shrine area vendors", url: "https://tabelog.com/kyoto/" }
        ],
        hiddenGems: [{ name: "Secret shrine paths", url: "https://inari.fushimi.kyoto.jp/" }],
        transport: "7:00am Shinkansen to Kyoto (15 min), Train to Fushimi Inari after teamLab",
        redditNote: "Iconic but expect crowds - go early to Fushimi",
        activities: "Art + iconic shrine experience"
      },
      {
        optionId: 3,
        title: "teamLab + Gion District",
        vibe: "Digital Art & Historic Geisha District",
        primaryActivity: { name: "teamLab Biovortex Kyoto", url: "https://www.teamlab.art/e/kyoto/", note: "BOOKED! Morning/midday" },
        highlights: [
          { name: "Gion District walks", url: "https://www.kyoto.travel/en/geisha-culture/gion", note: "Traditional wooden machiya houses" },
          { name: "Gion backstreets", url: "https://www.kyoto.travel/en/geisha-culture/gion" },
          { name: "Geisha spotting (evening)", url: "https://www.kyoto.travel/en/geisha-culture/gion" }
        ],
        dining: [
          { name: "Gion kaiseki dinner", url: "https://tabelog.com/kyoto/A2601/A260101/", cuisine: "Upscale Kyoto" },
          { name: "Tea house in Gion", url: "https://www.kyoto.travel/", cuisine: "Traditional tea" }
        ],
        hiddenGems: [{ name: "Hidden shrine in Gion", url: "https://www.kyoto.travel/en/geisha-culture/gion" }],
        transport: "7:00am Shinkansen to Kyoto, Subway/taxi to Gion after teamLab",
        redditNote: "Gion is magical at dusk - perfect for evening stroll",
        activities: "Modern art + historic geisha culture contrast"
      }
    ]
  },
  {
    date: "Nov 8",
    day: 4,
    title: "Sky Views or Parks",
    location: "Tokyo (Shinjuku & Shibuya)",
    emoji: "🌸",
    options: [
      {
        optionId: 1,
        title: "Shinjuku Gyoen + Shibuya Sky",
        vibe: "Garden & City Views",
        primaryActivity: { name: "Shinjuku Gyoen National Garden", url: "https://www.env.go.jp/garden/shinjukugyoen/english/", opening: "9:00 AM - 4:30 PM (closed Mondays)" },
        highlights: [
          { name: "144-acre park with gardens", url: "https://www.env.go.jp/garden/shinjukugyoen/english/" },
          { name: "Shibuya Sky", url: "https://www.shibuya-sky.com/en/", note: "Book tickets in advance!" }
        ],
        dining: [{ name: "Cafe in Shinjuku Gyoen", url: "https://www.env.go.jp/garden/shinjukugyoen/english/", cuisine: "Light cafe food" }],
        hiddenGems: [{ name: "Quiet Tea Room in Garden", url: "https://www.env.go.jp/garden/shinjukugyoen/english/" }],
        transport: "Easy access via Chūō/JR lines from Suginami",
        redditNote: "Skip multiple observation decks. Pick ONE. Golden hour best!",
        activities: "Garden walks, sky viewing, reflection time"
      },
      {
        optionId: 2,
        title: "Observation Decks Tour (Tokyo Tower focus)",
        vibe: "City Views & Heights",
        primaryActivity: { name: "Tokyo Tower", url: "https://www.tokyotower.co.jp/en/" },
        highlights: [
          { name: "Tokyo Tower observation deck", url: "https://www.tokyotower.co.jp/en/" },
          { name: "Zojo-ji Temple nearby", url: "https://www.zojoji.or.jp/en/" }
        ],
        dining: [{ name: "Tower area restaurants", url: "https://tabelog.com/tokyo/A1314/A131401/", cuisine: "Various" }],
        hiddenGems: [{ name: "Temple grounds", url: "https://www.zojoji.or.jp/en/" }],
        transport: "Subway to Tokyo Tower",
        redditNote: "Focus on one great view instead of rushing multiple spots",
        activities: "Tower views, temple walk"
      },
      {
        optionId: 3,
        title: "Garden Relaxation Day",
        vibe: "Peaceful & Contemplative",
        primaryActivity: { name: "Shinjuku Gyoen National Garden", url: "https://www.env.go.jp/garden/shinjukugyoen/english/" },
        highlights: [
          { name: "Japanese garden section", url: "https://www.env.go.jp/garden/shinjukugyoen/english/" },
          { name: "English garden section", url: "https://www.env.go.jp/garden/shinjukugyoen/english/" },
          { name: "French garden section", url: "https://www.env.go.jp/garden/shinjukugyoen/english/" }
        ],
        dining: [{ name: "Garden tea house", url: "https://www.env.go.jp/garden/shinjukugyoen/english/", cuisine: "Tea and snacks" }],
        hiddenGems: [{ name: "Quiet corners for reading", url: "https://www.env.go.jp/garden/shinjukugyoen/english/" }],
        transport: "Easy subway access",
        redditNote: "Rest days are valid - don't overschedule!",
        activities: "Garden walks, meditation, peaceful reflection"
      }
    ]
  },
  {
    date: "Nov 9",
    day: 5,
    title: "Day-Trip Choice",
    location: "Day-trip from Tokyo",
    emoji: "🏯",
    options: [
      {
        optionId: 1,
        title: "Kamakura Coastal Escape",
        vibe: "Spiritual & Beachside",
        primaryActivity: { name: "Tsurugaoka Hachimangu Shrine", url: "https://www.hachimangu.or.jp/" },
        highlights: [
          { name: "Great Buddha (Daibutsu)", url: "https://www.kotoku-in.jp/en/", note: "13th century bronze statue" },
          { name: "Komachi-dori Shopping Street", url: "https://www.kamakura-info.jp/" }
        ],
        dining: [{ name: "Kamakura local restaurants", url: "https://tabelog.com/kanagawa/A1404/A140401/", cuisine: "Local dishes" }],
        hiddenGems: [{ name: "Gunkakudo Cave Temples", url: "https://www.kamakura-info.jp/" }],
        transport: "JR Shōnan-Shinjuku Line (60 min from Tokyo)",
        redditNote: "Day-trips to coastal towns give fresh energy!",
        activities: "Shrine exploration, Buddha viewing, shopping"
      },
      {
        optionId: 2,
        title: "Hakone Mountain Adventure",
        vibe: "Nature & Hot Springs",
        primaryActivity: { name: "Lake Ashi Pirate Ship Cruise", url: "https://www.hakone-kankosen.co.jp/foreign/en/" },
        highlights: [
          { name: "Hakone Ropeway", url: "https://www.hakoneropeway.co.jp/foreign/en/", note: "Aerial views of volcanic valley" },
          { name: "Mt. Fuji Views", url: "https://www.hakonenavi.jp/english/", note: "Best on clear days" }
        ],
        dining: [{ name: "Hakone kaiseki dinner", url: "https://tabelog.com/kanagawa/A1410/", cuisine: "Multi-course meal" }],
        hiddenGems: [
          { name: "Hakone Open-Air Museum", url: "https://www.hakone-oam.or.jp/en/" },
          { name: "Onsen Experience", url: "https://www.hakonenavi.jp/english/" }
        ],
        transport: "Romancecar from Shinjuku (90 min scenic ride)",
        redditNote: "Perfect nature escape - balance of adventure and relaxation!",
        activities: "Lake cruise, Mt. Fuji viewing, onsen bathing"
      },
      {
        optionId: 3,
        title: "Nikko Nature Day (alternative)",
        vibe: "Temples & Waterfalls",
        primaryActivity: { name: "Toshogu Shrine", url: "https://www.toshogu.jp/english/" },
        highlights: [
          { name: "Ornate shrine architecture", url: "https://www.toshogu.jp/english/" },
          { name: "Kegon Falls", url: "https://www.city.nikko.lg.jp/" }
        ],
        dining: [{ name: "Nikko yuba (tofu skin)", url: "https://tabelog.com/tochigi/A0903/", cuisine: "Regional specialty" }],
        hiddenGems: [{ name: "Lake Chuzenji", url: "https://www.city.nikko.lg.jp/" }],
        transport: "JR or Tobu Railway to Nikko (2 hours)",
        redditNote: "Less crowded alternative with amazing nature!",
        activities: "Temple exploration, waterfall viewing, nature walks"
      },
      {
        optionId: 4,
        title: "Stay in Tokyo for Hidden Neighborhoods",
        vibe: "Local & Relaxed",
        primaryActivity: { name: "Explore un-visited Tokyo areas", url: "https://www.gotokyo.org/en/" },
        highlights: [
          { name: "Random neighborhood walks", url: "https://www.gotokyo.org/en/" },
          { name: "Local shopping streets", url: "https://www.gotokyo.org/en/" }
        ],
        dining: [{ name: "Try new local spots", url: "https://tabelog.com/tokyo/", cuisine: "Whatever looks good" }],
        hiddenGems: [{ name: "Ask locals for recommendations", url: "https://www.gotokyo.org/en/" }],
        transport: "Tokyo subway",
        redditNote: "Sometimes staying close to home is best!",
        activities: "Relaxed exploration, no pressure"
      }
    ]
  },
  {
    date: "Nov 10",
    day: 6,
    title: "Second Tokyo Day or Travel",
    location: "Tokyo or Travel Day",
    emoji: "⛰️",
    options: [
      {
        optionId: 1,
        title: "Shinkansen to Osaka (travel day)",
        vibe: "Transit & Transition",
        primaryActivity: { name: "Tokyo to Osaka Shinkansen", url: "https://global.jr-central.co.jp/en/" },
        highlights: [
          { name: "Scenic bullet train journey", url: "https://global.jr-central.co.jp/en/" },
          { name: "Arrive in Osaka, settle in", url: "https://osaka-info.jp/en/" }
        ],
        dining: [{ name: "Ekiben (train bento)", url: "https://www.jreast.co.jp/", cuisine: "Station bento boxes" }],
        hiddenGems: [{ name: "Watch countryside pass by", url: "https://global.jr-central.co.jp/en/" }],
        transport: "Tōkaidō Shinkansen Hikari (2h 30min)",
        redditNote: "Travel days are rest days. Enjoy the scenic ride!",
        activities: "Relax on train, enjoy views, settle into Osaka"
      },
      {
        optionId: 2,
        title: "Extended Hakone Stay",
        vibe: "Nature & Relaxation",
        primaryActivity: { name: "Stay overnight in Hakone", url: "https://www.hakonenavi.jp/english/" },
        highlights: [
          { name: "Ryokan experience", url: "https://www.hakonenavi.jp/english/" },
          { name: "Multiple onsen visits", url: "https://www.hakonenavi.jp/english/" }
        ],
        dining: [{ name: "Kaiseki at ryokan", url: "https://tabelog.com/kanagawa/A1410/", cuisine: "Traditional" }],
        hiddenGems: [{ name: "Early morning lake views", url: "https://www.hakonenavi.jp/english/" }],
        transport: "Romancecar from Shinjuku",
        redditNote: "Overnight stay gives true Hakone experience!",
        activities: "Onsen relaxation, nature immersion"
      },
      {
        optionId: 3,
        title: "More Tokyo exploration",
        vibe: "Urban Discovery",
        primaryActivity: { name: "Revisit favorite spots or explore new ones", url: "https://www.gotokyo.org/en/" },
        highlights: [
          { name: "Areas you missed", url: "https://www.gotokyo.org/en/" },
          { name: "Shopping time", url: "https://www.gotokyo.org/en/" }
        ],
        dining: [{ name: "Return to a favorite restaurant", url: "https://tabelog.com/tokyo/", cuisine: "Your choice" }],
        hiddenGems: [{ name: "Ask locals for hidden spots", url: "https://www.gotokyo.org/en/" }],
        transport: "Tokyo subway",
        redditNote: "Flexibility is key - follow your energy!",
        activities: "Relaxed exploration, shopping, favorite spots"
      },
      {
        optionId: 4,
        title: "Shrine Hopping Day",
        vibe: "Spiritual & Cultural",
        primaryActivity: { name: "Visit multiple Tokyo shrines", url: "https://www.gotokyo.org/en/" },
        highlights: [
          { name: "Senso-ji Temple", url: "https://www.senso-ji.jp/" },
          { name: "Nezu Shrine", url: "https://www.nedujinja.or.jp/" }
        ],
        dining: [{ name: "Temple area food stalls", url: "https://tabelog.com/tokyo/", cuisine: "Traditional snacks" }],
        hiddenGems: [{ name: "Small neighborhood shrines", url: "https://www.gotokyo.org/en/" }],
        transport: "Tokyo subway",
        redditNote: "Shrine hopping reveals Tokyo's spiritual side!",
        activities: "Temple visits, cultural immersion"
      }
    ]
  },
  {
    date: "Nov 12",
    day: 8,
    title: "Osaka First Full Day",
    location: "Osaka (Chuo-ku)",
    emoji: "🏯",
    options: [
      {
        optionId: 1,
        title: "Osaka Castle & Dotonbori Classic",
        vibe: "Historic & Vibrant",
        primaryActivity: { name: "Osaka Castle", url: "https://www.osakacastle.net/", note: "Arrive 8-9am EARLY" },
        highlights: [
          { name: "Castle museum (8 floors)", url: "https://www.osakacastle.net/" },
          { name: "Observation deck", url: "https://www.osakacastle.net/" },
          { name: "Castle Park moat walk", url: "https://osakacastlepark.jp/" }
        ],
        dining: [
          { name: "BOTEJYU Dotonbori", url: "https://botejyu.co.jp/", cuisine: "Okonomiyaki" },
          { name: "Dotonbori street food", url: "https://www.dotonbori.or.jp/", cuisine: "Takoyaki, kushikatsu" }
        ],
        hiddenGems: [{ name: "Quieter castle park areas", url: "https://osakacastlepark.jp/" }],
        transport: "Subway to Osaka Castle, Walk to Dotonbori",
        redditNote: "Book castle tickets online to skip queues",
        activities: "Castle exploration, history, evening street food"
      },
      {
        optionId: 2,
        title: "Nara Day-Trip",
        vibe: "Cultural & Spiritual",
        primaryActivity: { name: "Tōdai-ji Temple", url: "https://www.todai-ji.org/" },
        highlights: [
          { name: "Great Buddha (15.7m tall!)", url: "https://www.todai-ji.org/" },
          { name: "Nara Park with sacred deer", url: "https://nara-park.com/" },
          { name: "Kasuga Taisha Shrine", url: "https://www.kasuga.or.jp/" }
        ],
        dining: [{ name: "Nara local cuisine", url: "https://tabelog.com/nara/", cuisine: "Regional specialties" }],
        hiddenGems: [{ name: "Stone lantern paths", url: "https://www.kasuga.or.jp/" }],
        transport: "Kintetsu Railway to Nara (40 min), Walk to attractions",
        redditNote: "Nara is absolute MUST - Great Buddha is life-changing",
        activities: "Temple exploration, deer interaction, spiritual immersion"
      },
      {
        optionId: 3,
        title: "Osaka's Hidden Neighborhoods",
        vibe: "Local & Authentic",
        primaryActivity: { name: "Ura Namba Alleyways", url: "https://www.osaka-info.jp/en/" },
        highlights: [
          { name: "Hole-in-wall izakayas", url: "https://tabelog.com/osaka/A2701/A270106/" },
          { name: "Hozen-ji Temple", url: "http://houzenji.jp/" },
          { name: "Backstreet exploration", url: "https://www.osaka-info.jp/en/" }
        ],
        dining: [{ name: "Hidden local restaurants", url: "https://tabelog.com/osaka/A2701/A270106/", cuisine: "Authentic local" }],
        hiddenGems: [{ name: "Unmarked local spots", url: "https://www.osaka-info.jp/en/" }],
        transport: "Subway to Namba",
        redditNote: "Less touristy, more authentic Osaka vibe",
        activities: "Local discovery, neighborhood wandering, real Osaka"
      },
      {
        optionId: 4,
        title: "Osaka Aquarium + Street Food",
        vibe: "Marine Wonder & Culinary",
        primaryActivity: { name: "Osaka Aquarium Kaiyukan", url: "https://www.kaiyukan.com/" },
        highlights: [
          { name: "Whale sharks and tropical reef", url: "https://www.kaiyukan.com/" },
          { name: "9 themed zones", url: "https://www.kaiyukan.com/" },
          { name: "Shinsekai street food after", url: "https://www.shinsekai-ichiba.com/" }
        ],
        dining: [
          { name: "Kushikatsu in Shinsekai", url: "https://tabelog.com/osaka/A2701/A270104/", cuisine: "Deep-fried skewers" },
          { name: "Takoyaki stands", url: "https://www.shinsekai-ichiba.com/", cuisine: "Octopus balls" }
        ],
        hiddenGems: [{ name: "Tsutenkaku Tower views", url: "https://www.tsutenkaku.co.jp/" }],
        transport: "Subway to Osakako for aquarium, Walk to Shinsekai",
        redditNote: "Kaiyukan is world-class - worth the time!",
        activities: "Marine life wonder, food exploration, tower views"
      }
    ]
  },
  {
    date: "Nov 13",
    day: 9,
    title: "More Osaka or Day-Trip",
    location: "Osaka & nearby",
    emoji: "🏯",
    options: [
      {
        optionId: 1,
        title: "Nara Day-Trip (deer + Buddha)",
        vibe: "Cultural & Spiritual",
        primaryActivity: { name: "Tōdai-ji Temple", url: "https://www.todai-ji.org/" },
        highlights: [
          { name: "Great Buddha (15.7m tall!)", url: "https://www.todai-ji.org/" },
          { name: "Nara Park with sacred deer", url: "https://nara-park.com/" },
          { name: "Kasuga Taisha Shrine", url: "https://www.kasuga.or.jp/" }
        ],
        dining: [{ name: "Nara local cuisine", url: "https://tabelog.com/nara/", cuisine: "Regional specialties" }],
        hiddenGems: [{ name: "Stone lantern paths", url: "https://www.kasuga.or.jp/" }],
        transport: "Kintetsu Railway to Nara (40 minutes from Osaka)",
        redditNote: "Nara is a must-see for deer and Great Buddha - one of Japan's best!",
        activities: "Temple exploration, deer interaction, spiritual immersion"
      },
      {
        optionId: 2,
        title: "Himeji Castle Adventure",
        vibe: "Historic & Architectural",
        primaryActivity: { name: "Himeji Castle", url: "https://www.himejicastle.jp/en/", opening: "9:00 AM - 4:00 PM" },
        highlights: [
          { name: "White egret castle", url: "https://www.himejicastle.jp/en/" },
          { name: "Kōko-en Garden", url: "https://himeji-machishin.jp/ryokka/kokoen/" }
        ],
        dining: [{ name: "Himeji local restaurants", url: "https://tabelog.com/hyogo/A2801/", cuisine: "Regional Himeji cuisine" }],
        hiddenGems: [{ name: "Adjacent garden with autumn foliage", url: "https://himeji-machishin.jp/ryokka/kokoen/" }],
        transport: "JR Train to Himeji (60 minutes from Osaka)",
        redditNote: "Himeji is Japan's most iconic castle - worth the day-trip!",
        activities: "Castle exploration, garden walks"
      },
      {
        optionId: 3,
        title: "Kuromon Market + Kaiyukan Aquarium",
        vibe: "Culinary & Marine",
        primaryActivity: { name: "Kuromon Market", url: "https://kuromon.com/", opening: "8:00 AM - 6:00 PM" },
        highlights: [
          { name: "Fresh seafood market", url: "https://kuromon.com/" },
          { name: "Osaka Aquarium Kaiyukan", url: "https://www.kaiyukan.com/" }
        ],
        dining: [{ name: "Kuromon seafood stalls", url: "https://kuromon.com/", cuisine: "Fresh uni, scallops, tamagoyaki" }],
        hiddenGems: [{ name: "Market vendor recommendations", url: "https://kuromon.com/" }],
        transport: "Subway to market and aquarium",
        redditNote: "Market early morning + aquarium afternoon = perfect combo",
        activities: "Market food sampling, aquarium exploration"
      },
      {
        optionId: 4,
        title: "Local Osaka Exploration",
        vibe: "Authentic & Relaxed",
        primaryActivity: { name: "Explore Osaka neighborhoods", url: "https://osaka-info.jp/en/" },
        highlights: [
          { name: "Random walks", url: "https://osaka-info.jp/en/" },
          { name: "Local shopping streets", url: "https://osaka-info.jp/en/" }
        ],
        dining: [{ name: "Try new local spots", url: "https://tabelog.com/osaka/", cuisine: "Whatever looks good" }],
        hiddenGems: [{ name: "Ask locals for hidden gems", url: "https://osaka-info.jp/en/" }],
        transport: "Osaka subway",
        redditNote: "Sometimes wandering without a plan is best!",
        activities: "Relaxed exploration, no pressure"
      }
    ]
  },
  {
    date: "Nov 13",
    day: 9,
    title: "Osaka Castle & Nara Day-Trip",
    location: "Osaka & Nara",
    emoji: "🏯",
    mustDoCount: 1,
    highlights: [
      { name: "Osaka Castle", url: "https://www.osakacastle.net/english", description: "Iconic 16th century fortress - arrive 8-9am EARLY!", opening: "9:00 AM - 5:00 PM" },
      { name: "Tōdai-ji Temple", url: "https://www.todaiji.or.jp/en/", description: "World's largest wooden structure with Great Buddha", opening: "7:30 AM - 5:00 PM" }
    ],
    mustSee: [
      { name: "Osaka Castle", url: "https://www.osakacastle.net/english", description: "Book advance tickets online" },
      { name: "Tōdai-ji Great Buddha (Nara)", url: "https://www.todaiji.or.jp/en/", description: "15.7m tall bronze Buddha - stunning!" }
    ],
    hiddenGems: [
      { name: "Nara Park", url: "https://www3.pref.nara.jp/park/", description: "Free-roaming sacred deer" },
      { name: "Kasuga Taisha Shrine", url: "https://www.kasugataisha.or.jp/en/", description: "Stone lantern-lined paths" }
    ],
    foodSpots: [
      { name: "Osaka Okonomiyaki", url: "https://tabelog.com/osaka/A2701/A270106/", cuisine: "Savory pancakes - Osaka specialty" },
      { name: "Nara Local Cuisine", url: "https://tabelog.com/nara/", cuisine: "Regional Nara dishes" }
    ],
    transport: "Kintetsu Railway to Nara (40 minutes from Osaka)",
    notes: "Nara is a must-see for deer and Great Buddha - one of Japan's best!",
    activities: "Castle exploration, train to Nara, Buddha encounter, park strolling"
  },
  {
    date: "Nov 15",
    day: 11,
    title: "Osaka Relaxation",
    location: "Osaka (Chuo-ku)",
    emoji: "🌃",
    options: [
      {
        optionId: 1,
        title: "Ura Namba Hidden Gems",
        vibe: "Local & Authentic",
        primaryActivity: { name: "Ura Namba Alleyways", url: "https://www.osaka-info.jp/en/" },
        highlights: [
          { name: "Wander slowly through hidden alleys", url: "https://www.osaka-info.jp/en/" },
          { name: "Hozen-ji Temple", url: "http://houzenji.jp/" },
          { name: "Dotonbori Canal Walk", url: "https://www.dotonbori.or.jp/en/" }
        ],
        dining: [
          { name: "Ura Namba Hidden Izakaya", url: "https://tabelog.com/osaka/A2701/A270106/", cuisine: "Local yakitori and sake" },
          { name: "Kani Doraku Main Branch", url: "https://douraku.co.jp/kansai/", cuisine: "Premium crab kaiseki" }
        ],
        hiddenGems: [{ name: "Hole-in-wall izakayas", url: "https://tabelog.com/osaka/A2701/A270106/", note: "Ask locals: 'Where do YOU eat?'" }],
        transport: "Subway to Namba Station",
        redditNote: "Last Osaka day = RELAX mode. Less rushing, more living!",
        activities: "Slow wandering, sunset viewing, local food discovery"
      },
      {
        optionId: 2,
        title: "Umeda Sky Building + Shopping",
        vibe: "Modern & Commercial",
        primaryActivity: { name: "Umeda Sky Building", url: "https://www.skybldg.co.jp/" },
        highlights: [
          { name: "Floating Garden Observatory", url: "https://www.skybldg.co.jp/" },
          { name: "Shopping in Umeda", url: "https://osaka-info.jp/en/" }
        ],
        dining: [{ name: "Umeda restaurants", url: "https://tabelog.com/osaka/A2701/A270101/", cuisine: "Various options" }],
        hiddenGems: [{ name: "Underground shopping streets", url: "https://osaka-info.jp/en/" }],
        transport: "Subway to Umeda",
        redditNote: "Great for shopping and modern Osaka!",
        activities: "Observatory views, shopping, relaxation"
      },
      {
        optionId: 3,
        title: "River Cruise + Dotonbori",
        vibe: "Scenic & Evening Lights",
        primaryActivity: { name: "Osaka River Cruise", url: "https://osaka-info.jp/en/" },
        highlights: [
          { name: "River cruise views", url: "https://osaka-info.jp/en/" },
          { name: "Dotonbori evening neon", url: "https://www.dotonbori.or.jp/en/" }
        ],
        dining: [{ name: "Dotonbori restaurants", url: "https://tabelog.com/osaka/A2701/A270106/", cuisine: "Street food and more" }],
        hiddenGems: [{ name: "Canal-side walks", url: "https://www.dotonbori.or.jp/en/" }],
        transport: "Subway to river cruise",
        redditNote: "Beautiful way to see Osaka from the water!",
        activities: "River cruise, canal walks, evening lights"
      },
      {
        optionId: 4,
        title: "Local Izakaya Crawl",
        vibe: "Social & Culinary",
        primaryActivity: { name: "Izakaya hopping", url: "https://tabelog.com/osaka/A2701/A270106/" },
        highlights: [
          { name: "Visit 3-4 different izakayas", url: "https://tabelog.com/osaka/A2701/A270106/" },
          { name: "Try different dishes at each", url: "https://tabelog.com/osaka/" }
        ],
        dining: [{ name: "Multiple izakayas", url: "https://tabelog.com/osaka/A2701/A270106/", cuisine: "Varied Japanese pub food" }],
        hiddenGems: [{ name: "Ask for local recommendations", url: "https://tabelog.com/osaka/" }],
        transport: "Walk between spots",
        redditNote: "Izakaya crawl is the best way to end your Osaka stay!",
        activities: "Food hopping, drinks, conversations"
      }
    ]
  },
  {
    date: "Nov 16",
    day: 12,
    title: "Return to Tokyo Finale",
    location: "Tokyo (Final Night)",
    emoji: "🗼",
    options: [
      {
        optionId: 1,
        title: "Zojo-ji + Toyokawa Inari + Tower Views",
        vibe: "Reflective & Symbolic",
        primaryActivity: { name: "Zojo-ji Temple", url: "https://www.zojoji.or.jp/en/", note: "Historic temple at foot of Tokyo Tower" },
        highlights: [
          { name: "Toyokawa Inari Tokyo Annex", url: "https://www.toyokawa-tokyo.jp/", note: "Hidden shrine with fox statues" },
          { name: "Tokyo Tower", url: "https://www.tokyotower.co.jp/en/", note: "Evening views of the city you now know" }
        ],
        dining: [
          { name: "Favorite restaurant from trip", url: "https://tabelog.com/", cuisine: "Return to a favorite!" },
          { name: "New izakaya discovery", url: "https://tabelog.com/tokyo/A1304/A130401/", cuisine: "Last adventure!" }
        ],
        hiddenGems: [{ name: "Toyokawa Inari lantern-lit magic", url: "https://www.toyokawa-tokyo.jp/" }],
        transport: "Shinkansen Shin-Osaka to Tokyo (2h 30min)",
        redditNote: "Full circle moment - back where you started! Savor it.",
        activities: "Temple walk, evening tower views, meaningful farewell dinner"
      },
      {
        optionId: 2,
        title: "Extended Osaka Morning + Afternoon Tokyo",
        vibe: "Leisurely Transition",
        primaryActivity: { name: "Morning in Osaka", url: "https://osaka-info.jp/en/" },
        highlights: [
          { name: "Slow breakfast in Osaka", url: "https://tabelog.com/osaka/" },
          { name: "Afternoon arrival Tokyo", url: "https://www.gotokyo.org/en/" }
        ],
        dining: [{ name: "Osaka breakfast", url: "https://tabelog.com/osaka/", cuisine: "Farewell meal" }],
        hiddenGems: [{ name: "Pack slowly, enjoy last moments", url: "https://osaka-info.jp/en/" }],
        transport: "Late morning Shinkansen",
        redditNote: "Don't rush the ending - savor every moment!",
        activities: "Relaxed morning, scenic train ride, Tokyo evening"
      },
      {
        optionId: 3,
        title: "Shinjuku Exploration + Favorite Meal",
        vibe: "Urban & Nostalgic",
        primaryActivity: { name: "Shinjuku exploration", url: "https://www.gotokyo.org/en/" },
        highlights: [
          { name: "Revisit favorite Tokyo spots", url: "https://www.gotokyo.org/en/" },
          { name: "Last-minute shopping", url: "https://www.gotokyo.org/en/" }
        ],
        dining: [{ name: "Return to best restaurant", url: "https://tabelog.com/tokyo/", cuisine: "Your favorite!" }],
        hiddenGems: [{ name: "Golden Gai evening", url: "https://www.gotokyo.org/en/" }],
        transport: "Shinkansen + Tokyo subway",
        redditNote: "End where you feel most connected!",
        activities: "Favorite spots revisited, shopping, meaningful dinner"
      },
      {
        optionId: 4,
        title: "Reflective Tokyo Day",
        vibe: "Contemplative & Personal",
        primaryActivity: { name: "Personal reflection spots", url: "https://www.gotokyo.org/en/" },
        highlights: [
          { name: "Visit places that moved you", url: "https://www.gotokyo.org/en/" },
          { name: "Quiet contemplation", url: "https://www.gotokyo.org/en/" }
        ],
        dining: [{ name: "Meaningful final meal", url: "https://tabelog.com/tokyo/", cuisine: "Something special" }],
        hiddenGems: [{ name: "Journal about your journey", url: "https://www.gotokyo.org/en/" }],
        transport: "Shinkansen + local transit",
        redditNote: "Reflect on the journey - you've changed!",
        activities: "Reflection, journaling, gratitude"
      }
    ]
  },
  {
    date: "Nov 16",
    day: 12,
    title: "Return to Tokyo Finale",
    location: "Tokyo (Final Night)",
    emoji: "🗼",
    mustDoCount: 0,
    highlights: [
      { name: "Zojo-ji Temple", url: "https://www.zojoji.or.jp/en/", description: "Historic temple at foot of Tokyo Tower" },
      { name: "Toyokawa Inari Tokyo Annex", url: "https://www.toyokawa-tokyo.jp/", description: "Hidden shrine with fox statues - lantern-lit magic" },
      { name: "Tokyo Tower", url: "https://www.tokyotower.co.jp/en/", description: "Evening views of the city you now know" }
    ],
    mustSee: [
      { name: "Zojo-ji Temple", url: "https://www.zojoji.or.jp/en/", description: "Peaceful reflection spot" },
      { name: "Tokyo Tower", url: "https://www.tokyotower.co.jp/en/", description: "Full circle - you came full circle!" }
    ],
    hiddenGems: [
      { name: "Toyokawa Inari Tokyo Annex", url: "https://www.toyokawa-tokyo.jp/", description: "Intimate shrine off main path" }
    ],
    foodSpots: [
      { name: "Favorite Restaurant from Trip", url: "https://tabelog.com/", cuisine: "Return to a favorite!" },
      { name: "New Izakaya Discovery", url: "https://tabelog.com/tokyo/A1304/A130401/", cuisine: "Last adventure - new experience!" }
    ],
    transport: "Shinkansen Shin-Osaka to Tokyo (2h 30min back to Tokyo)",
    notes: "Full circle moment - back where you started! Savor it.",
    activities: "Temple walk, evening tower views, meaningful farewell dinner"
  }
];

// Quick Links data
const quickLinksData = {
  bookNow: [
    { name: "Shibuya Sky Tickets", url: "https://www.shibuya-sky.com/en/", description: "Book in advance - not day-of!", status: "" },
    { name: "Kaiyukan Aquarium Tickets", url: "https://www.kaiyukan.com/language/eng/", description: "Book ahead for best times", status: "" },
    { name: "teamLab Biovortex Kyoto", url: "https://www.teamlab.art/e/biovortex-kyoto/", description: "Japan's largest digital art museum", status: "BOOKED for Nov 12!" }
  ],
  downloadApps: [
    { name: "Navitime", url: "https://www.navitime.co.jp/", description: "Better than Google Maps for trains" },
    { name: "Google Translate", url: "https://translate.google.com/", description: "Text translation for menus/signs" },
    { name: "Google Lens", url: "https://lens.google.com/", description: "Real-time camera translation" },
    { name: "Tabelog", url: "https://tabelog.com/en/", description: "Japan's best restaurant review site" },
    { name: "Suica Card App", url: "https://www.jreast.co.jp/e/pass/suica.html", description: "Add IC card to your phone" },
    { name: "ICOCA Card App", url: "https://www.jr-odekake.net/icoca/", description: "Osaka transit card" }
  ],
  officialTourism: [
    { name: "r/JapanTravel Subreddit", url: "https://www.reddit.com/r/JapanTravel/", description: "Real travelers sharing real advice" },
    { name: "r/JapanTravelTips", url: "https://www.reddit.com/r/JapanTravelTips/", description: "Quick tips and Q&A" },
    { name: "Japan National Tourism Organization", url: "https://www.jnto.go.jp/eng/", description: "Official Japan tourism" },
    { name: "Tokyo Official Guide", url: "https://www.gotokyo.org/en/", description: "Tokyo events and information" },
    { name: "Osaka Official Guide", url: "https://osaka-info.jp/en/", description: "Osaka attractions and services" },
    { name: "Kyoto Official Guide", url: "https://www.kyoto.travel/en/", description: "Kyoto temples and culture" }
  ],
  transportBooking: [
    { name: "JR Pass", url: "https://www.japan-rail-pass.com/", description: "Multi-day rail pass option" },
    { name: "JR East", url: "https://www.jreast.co.jp/e/", description: "Tokyo area trains" },
    { name: "Kintetsu Railway", url: "https://www.kintetsu.co.jp/foreign/english/", description: "Osaka to Nara, Kyoto" },
    { name: "Odakyu Express (Romancecar)", url: "https://www.odakyu.jp/english/", description: "Scenic train to Hakone" }
  ],
  restaurants: [
    { name: "Tabelog Tokyo", url: "https://tabelog.com/en/tokyo/", description: "Browse Tokyo restaurants" },
    { name: "Tabelog Osaka", url: "https://tabelog.com/en/osaka/", description: "Browse Osaka restaurants" },
    { name: "Tabelog Kyoto", url: "https://tabelog.com/en/kyoto/", description: "Browse Kyoto restaurants" }
  ]
};

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
  renderQuickLinks();
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

// Day cards - NEW SYSTEM with multiple options
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
  
  // Initial render of personalized schedule
  updatePersonalizedSchedule();
}

function createDayCard(day, dayIndex) {
  const card = document.createElement('div');
  card.className = 'day-card' + (day.special ? ' special' : '');
  card.dataset.index = dayIndex;
  
  let html = `
    <div class="day-card-header">
      <div class="day-emoji">${day.emoji}</div>
      <div class="day-title-row">
        <h3 class="day-title">${day.title}</h3>
        ${day.booked ? '<span class="booked-badge">✨ BOOKED! ✨</span>' : ''}
      </div>
      <div class="day-meta">
        <span>📅 ${day.date}</span>
        <span>Day ${day.day} of 12</span>
      </div>
      <div class="day-location">📍 ${day.location}</div>
      ${day.note ? `<p style="color: var(--color-japan-gold); font-weight: bold; margin-top: 8px;">${day.note}</p>` : ''}
    </div>
  `;
  
  // NEW: Render option cards
  if (day.options && day.options.length > 0) {
    const selectedOption = userSelections[dayIndex];
    
    html += '<div class="options-container">';
    html += `<h4 style="margin: 24px 0 16px; font-size: var(--font-size-lg); color: var(--color-text-secondary);">Choose your adventure for this day:</h4>`;
    
    day.options.forEach(option => {
      const isSelected = selectedOption === option.optionId;
      html += createOptionCard(option, dayIndex, isSelected);
    });
    
    html += '</div>';
  }
  
  card.innerHTML = html;
  
  // Add event listeners for checkboxes after card is created
  setTimeout(() => {
    const checkboxes = card.querySelectorAll('.option-checkbox');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        const dayIdx = parseInt(checkbox.dataset.dayIndex);
        const optId = parseInt(checkbox.dataset.optionId);
        toggleOptionSelection(dayIdx, optId);
      });
    });
  }, 0);
  
  return card;
}

// NEW: Create option card
function createOptionCard(option, dayIndex, isSelected) {
  let html = `
    <div class="option-card ${isSelected ? 'selected' : ''}" data-option-id="${option.optionId}">
      <div class="option-header">
        <div class="option-title-row">
          <h4 class="option-title">${option.title}</h4>
          <span class="option-vibe">${option.vibe}</span>
        </div>
        <div class="option-checkbox ${isSelected ? 'checked' : ''}" 
             data-day-index="${dayIndex}" 
             data-option-id="${option.optionId}"
             role="button"
             tabindex="0"
             aria-label="Select this option">
          ${isSelected ? '✓' : ''}
        </div>
      </div>
  `;
  
  // Primary Activity
  if (option.primaryActivity) {
    html += '<div class="option-section">';
    html += '<div class="option-section-title">⭐ Primary Activity</div>';
    html += `<div class="option-item">`;
    html += `<a href="${option.primaryActivity.url}" target="_blank" rel="noopener noreferrer" class="external-link">${option.primaryActivity.name}</a>`;
    if (option.primaryActivity.note) {
      html += `<div class="option-note">📌 ${option.primaryActivity.note}</div>`;
    }
    if (option.primaryActivity.opening) {
      html += `<div class="option-meta">🕐 ${option.primaryActivity.opening}</div>`;
    }
    html += '</div></div>';
  }
  
  // Other Highlights
  if (option.highlights && option.highlights.length > 0) {
    html += '<div class="option-section">';
    html += '<div class="option-section-title">✨ Other Highlights</div>';
    html += '<ul class="option-list">';
    option.highlights.forEach(item => {
      html += '<li>';
      html += `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="external-link">${item.name}</a>`;
      if (item.note) html += `<span class="option-note"> - ${item.note}</span>`;
      html += '</li>';
    });
    html += '</ul></div>';
  }
  
  // Dining
  if (option.dining && option.dining.length > 0) {
    html += '<div class="option-section">';
    html += '<div class="option-section-title">🍴 Dining Suggestions</div>';
    html += '<ul class="option-list">';
    option.dining.forEach(item => {
      html += '<li>';
      html += `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="external-link">${item.name}</a>`;
      if (item.cuisine) html += ` <span class="option-cuisine">(${item.cuisine})</span>`;
      html += '</li>';
    });
    html += '</ul></div>';
  }
  
  // Hidden Gems
  if (option.hiddenGems && option.hiddenGems.length > 0) {
    html += '<div class="option-section">';
    html += '<div class="option-section-title">💎 Hidden Gems</div>';
    html += '<ul class="option-list">';
    option.hiddenGems.forEach(item => {
      html += '<li>';
      html += `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="external-link">${item.name}</a>`;
      if (item.note) html += `<span class="option-note"> - ${item.note}</span>`;
      html += '</li>';
    });
    html += '</ul></div>';
  }
  
  // Transport
  if (option.transport) {
    html += '<div class="option-section">';
    html += '<div class="option-section-title">🚆 Transport Tips</div>';
    html += `<p class="option-transport">${option.transport}</p>`;
    html += '</div>';
  }
  
  // Reddit Note
  if (option.redditNote) {
    html += '<div class="option-reddit">';
    html += `<strong>Reddit Wisdom:</strong> "${option.redditNote}"`;
    html += '</div>';
  }
  
  // Activities Summary
  if (option.activities) {
    html += '<div class="option-activities">';
    html += `<strong>Activities:</strong> ${option.activities}`;
    html += '</div>';
  }
  
  html += '</div>'; // Close option-card
  return html;
}

// NEW: Toggle option selection
function toggleOptionSelection(dayIndex, optionId) {
  const currentSelection = userSelections[dayIndex];
  
  if (currentSelection === optionId) {
    // Deselect
    delete userSelections[dayIndex];
  } else {
    // Select new option
    userSelections[dayIndex] = optionId;
  }
  
  // Re-render the current day
  const carousel = document.getElementById('daysCarousel');
  const oldCard = carousel.querySelector(`[data-index="${dayIndex}"]`);
  const newCard = createDayCard(daysData[dayIndex], dayIndex);
  carousel.replaceChild(newCard, oldCard);
  
  // Show the updated card
  newCard.classList.add('active');
  
  // Update personalized schedule
  updatePersonalizedSchedule();
}

// NEW: Update personalized schedule display
function updatePersonalizedSchedule() {
  // This would update a sidebar or top section showing selected activities
  // For now, we'll update the day counter to show progress
  const selectedCount = Object.keys(userSelections).length;
  const dayCounter = document.getElementById('dayCounter');
  if (dayCounter) {
    dayCounter.textContent = `Day ${currentDayIndex + 1} of 12 | ${selectedCount}/12 days planned`;
  }
}

// This function is no longer needed with the new option card system
// but keeping it for backwards compatibility if needed

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

// This function is no longer needed with the new option card system
// but keeping it for backwards compatibility
function toggleDaySection(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector('.toggle-icon');
  
  if (content && icon) {
    if (content.classList.contains('open')) {
      content.classList.remove('open');
      icon.classList.remove('open');
    } else {
      content.classList.add('open');
      icon.classList.add('open');
    }
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

// Quick Links rendering
function renderQuickLinks() {
  const container = document.getElementById('quickLinksContainer');
  if (!container) return;
  
  const categories = [
    { title: '📌 MUST BOOK NOW', key: 'bookNow', icon: '🎫' },
    { title: '📱 DOWNLOAD THESE APPS', key: 'downloadApps', icon: '📲' },
    { title: '🗺️ OFFICIAL TOURISM', key: 'officialTourism', icon: '🏛️' },
    { title: '🚄 TRANSPORT & BOOKING', key: 'transportBooking', icon: '🎟️' },
    { title: '🍱 RESTAURANT DISCOVERY', key: 'restaurants', icon: '🍜' }
  ];
  
  categories.forEach(cat => {
    const items = quickLinksData[cat.key];
    if (!items || items.length === 0) return;
    
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'quick-links-category';
    
    let html = `<h3 class="quick-links-category-title">${cat.icon} ${cat.title}</h3>`;
    html += '<ul class="quick-links-list">';
    
    items.forEach(item => {
      html += '<li class="quick-link-item">';
      html += `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}</a>`;
      if (item.status) {
        html += `<span class="quick-link-status">${item.status}</span>`;
      }
      if (item.description) {
        html += `<div class="quick-link-description">${item.description}</div>`;
      }
      html += '</li>';
    });
    
    html += '</ul>';
    categoryDiv.innerHTML = html;
    container.appendChild(categoryDiv);
  });
}

// Make functions available globally
window.smoothScroll = smoothScroll;
window.toggleDaySection = toggleDaySection;
window.shareTrip = shareTrip;