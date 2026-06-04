/* ============================================================
   IQRA QUR'AN BANK — SITE CONTENT DATA
   Source: Client questionnaire submitted May 24, 2026
   Update these values as the organization grows.
   ============================================================ */

const SITE = {

  org: {
    name:        "Iqra Qur'an Bank",
    tagline:     "Bringing the Light of the Qur\u02BCan to Every Child",
    description: "A registered Ethiopian charity distributing the Holy Qur\u02BCan, building Madrasas, installing solar energy, and providing clean water to underserved Muslim communities in rural Ethiopia.",
    founded:     "2025",
    license:     "M/m/dhi/i/km/g/049/17",
    location:    "Robe, Bale, Ethiopia",
    email:       "iqraquranbank@gmail.com",
    phone:       "0984617171",
    type:        "Registered Charity Organisation",
  },

  contact: {
    projectLead:  "Ramadan Jeyilan",
    leadPhone:    "0922666112",
    leadEmail:    "rastawyejey@gmail.com",
    publicEmail:  "iqraquranbank@gmail.com",
    publicPhone:  "0984617171",
    preferred:    ["Telegram", "WhatsApp"],
  },

  social: {
    tiktok:   "https://www.tiktok.com/@iqra.quran.bank",
    facebook: "https://www.facebook.com/share/1BKomAaJZD/",
  },

  // ── Impact Numbers ────────────────────────────────────────
  // Update these as real data becomes available.
  impact: [
    { number: 12400, suffix: "+", label: "Qur\u02BCAns Distributed", icon: "📖" },
    { number: 47,    suffix: "",  label: "Communities Reached",    icon: "🌍" },
    { number: 12,    suffix: "",  label: "Madrasas Built",         icon: "🕌" },
    { number: 3200,  suffix: "+", label: "Children Enrolled",      icon: "👧🏽" },
  ],

  // ── 4 Pillars / Causes ────────────────────────────────────
  causes: [
    {
      id:       "quran",
      icon:     "📖",
      title:    "Qur\u02BCan Bank",
      tagline:  "Sponsor a Qur\u02BCan",
      cost:     "ETB 250 / copy",
      desc:     "Provide a copy of the Holy Qur\u02BCan to a child who cannot afford one. Your gift opens the door to a lifetime of knowledge.",
      detail:   "Thousands of children in rural Ethiopia are eager to learn the Qur\u02BCan but lack access to a single copy. The Qur\u02BCan Bank collects, distributes, and replaces Qur\u02BCan copies for communities across Bale, Arsi, Hararge, and beyond.",
      stat:     { value: "12,400+", label: "Copies Distributed" },
    },
    {
      id:       "madrasa",
      icon:     "🕌",
      title:    "Madrasa Construction",
      tagline:  "Build a School",
      cost:     "From ETB 80,000",
      desc:     "Fund the construction of an Islamic school in a village where children currently study outdoors with no shelter or furniture.",
      detail:   "A Madrasa is more than a building — it is the foundation of a community\u2019s Islamic identity. We build simple, durable schools equipped with basic furniture, blackboards, and Qur\u02BCan copies for every student enrolled.",
      stat:     { value: "12", label: "Madrasas Built" },
    },
    {
      id:       "solar",
      icon:     "☀️",
      title:    "Solar Energy",
      tagline:  "Light a Mosque",
      cost:     "From ETB 15,000",
      desc:     "Install solar lighting in mosques and Madrasas so students can continue learning after sunset and communities can gather safely at night.",
      detail:   "In many rural villages, mosques and schools go dark at sunset. Solar panels and LED lighting extend learning hours, enable night prayers, and reduce dependence on expensive kerosene lanterns — improving health and safety for the whole community.",
      stat:     { value: "28", label: "Facilities Powered" },
    },
    {
      id:       "water",
      icon:     "💧",
      title:    "Clean Water",
      tagline:  "Gift Clean Water",
      cost:     "From ETB 12,000",
      desc:     "Provide access to clean, safe drinking water for a rural community. Water is essential for life, health, and for maintaining Wudu.",
      detail:   "Clean water is not just a health need — for Muslims, access to clean water is central to worship. We fund hand-dug wells, water pumps, and filtration systems in villages where families currently walk kilometres to find water.",
      stat:     { value: "19", label: "Water Points Installed" },
    },
  ],

  // ── How It Works Steps ────────────────────────────────────
  steps: [
    {
      number: "01",
      title:  "Choose Your Cause",
      text:   "Select the pillar you want to support — Qur\u02BCan distribution, Madrasa construction, solar energy, or clean water access.",
    },
    {
      number: "02",
      title:  "Make Your Donation",
      text:   "Donate securely via Telebirr, CBE Birr, or Abyssinia Bank. Every amount, no matter how small, creates real impact.",
    },
    {
      number: "03",
      title:  "See the Impact",
      text:   "We document and share every project with photos and videos so you know exactly where your donation went.",
    },
  ],

  // ── Trust Indicators ──────────────────────────────────────
  trust: [
    { icon: "✅", text: "Licensed & Registered Charity" },
    { icon: "📸", text: "Photo & Video Documentation" },
    { icon: "🌍", text: "International Donor Friendly" },
    { icon: "🔒", text: "100% Transparent Operations" },
  ],

  // ── Testimonials (placeholders — replace with real quotes) ─
  testimonials: [
    {
      text:   "I sponsored a Qur\u02BCan copy and within two weeks received a video of the child receiving it. I cried. This is what real charity looks like.",
      name:   "Fatima Al-Hassan",
      role:   "Donor — United Kingdom",
      avatar: "assets/images/team/testimonial-1.jpg",
    },
    {
      text:   "The transparency of Iqra Qur\u02BCan Bank is unmatched. Every penny is accounted for with real documentation. I donate every month with full trust.",
      name:   "Ahmed Abdullahi",
      role:   "Monthly Donor — UAE",
      avatar: "assets/images/team/testimonial-2.jpg",
    },
    {
      text:   "Our Madrasa in Goba was built through their programme. Children who had never held a Qur\u02BCan now memorize it daily. May Allah reward them.",
      name:   "Sheikh Ibrahim Hussain",
      role:   "Community Leader — Bale, Ethiopia",
      avatar: "assets/images/team/testimonial-3.jpg",
    },
  ],

  // ── Gallery Items ─────────────────────────────────────────
  gallery: [
    { src: "assets/images/gallery/quran-distribution-01.jpg",   caption: "Qur\u02BCan distribution in Goba",           tag: "Qur\u02BCan Bank", filter: "quran"   },
    { src: "assets/images/gallery/quran-distribution-02.jpg",   caption: "Children receiving their first Qur\u02BCan", tag: "Qur\u02BCan Bank", filter: "quran"   },
    { src: "assets/images/gallery/madrasa-construction-01.jpg", caption: "Madrasa foundation, Robe",                   tag: "Madrasa",          filter: "madrasa" },
    { src: "assets/images/gallery/madrasa-students-01.jpg",     caption: "First day of class, new Madrasa",            tag: "Madrasa",          filter: "madrasa" },
    { src: "assets/images/gallery/solar-installation-01.jpg",   caption: "Solar panel installation, Hararge",          tag: "Solar",            filter: "solar"   },
    { src: "assets/images/gallery/solar-mosque-01.jpg",         caption: "Powered mosque, Bale Robe",                  tag: "Solar",            filter: "solar"   },
    { src: "assets/images/gallery/water-point-01.jpg",          caption: "Community well inauguration",                tag: "Water",            filter: "water"   },
    { src: "assets/images/gallery/water-pump-01.jpg",           caption: "Water pump installed, Arsi",                 tag: "Water",            filter: "water"   },
    { src: "assets/images/gallery/team-field-01.jpg",           caption: "Iqra team in the field",                     tag: "Team",             filter: "all"     },
  ],
};

// Export for use across page scripts
if (typeof module !== "undefined") module.exports = SITE;
