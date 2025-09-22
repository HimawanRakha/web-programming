// quiz1/js/profile.js
const profileData = [
  {
    title: "EDUCATION",
    items: [
      {
        institution: "Institut Teknologi Sepuluh Nopember, Surabaya",
        duration: "Jul 2024 - Jun 2028 (Expected)",
        details: ["Bachelor of Informatics Engineering", "GPA 3.71 of 4.00"],
      },
      {
        institution: "SMA Negeri 2 Lumajang, Lumajang",
        duration: "2021 - 2024",
        details: ["2nd best graduate majoring in Mathematics and Natural Sciences", "GPA 90.22 of 100.00"],
      },
    ],
  },
  {
    title: "ORGANISATIONS",
    items: [
      {
        institution: "Nalarfest, Surabaya",
        duration: "Sep 2025 - Present",
        details: ["Head of the essay competition subdivision", "Leading and coordinating the implementation of essay competitions at the national and high school level."],
      },
      {
        institution: "SCHEMATICS ITS, Surabaya",
        duration: "Feb 2025 - Present",
        details: ["UI/UX Web Development Staff", "Create a related Web UI design to accommodate the needs of competition participants while paying attention to UX or user experience."],
      },
      {
        institution: "AVALON AI, Surabaya",
        duration: "Sep 2024 - Present",
        details: ["Software Engineer", "Become a savvy software developer by collaborating across disciplines.", "Successfully complete 4++ mobile and web software application projects."],
      },
      {
        institution: "UKM PENALARAN ITS, Surabaya",
        duration: "Jul 2024 - Present",
        details: ["BSO Pandawa - Athlete", "Join a team of athletes who are 'machines' for achieving success, trained and focused on participating in scientific work competitions."],
      },
      {
        institution: "DUACARE, Lumajang",
        duration: "Dec 2023 - Feb 2024",
        details: [
          "Campus Expo Project Officer",
          "Served as the Project Officer for Campus Expo, successfully attracting 2,000+ visitors during its implementation.",
          "Created the official Duacare Goes To School website and gained 30,000+ insights.",
        ],
      },
      {
        institution: "IMAJAYA-Ini Lho ITS, Lumajang",
        duration: "Dec 2023 - Jan 2024",
        details: ["Event Staff", "Coordinated and was responsible for introducing ITS to 10+ schools in Lumajang.", "Held the 10 November Try Out with 120+ participants."],
      },
      {
        institution: "PASKIBRA SMAN 2 LUMAJANG, Lumajang",
        duration: "Dec 2022 - Sep 2023",
        details: ["General Leader", "Leading 120+ members and administrators and liaising with alumni.", "Responsible for the implementation of 10+ work programs across all divisions."],
      },
      {
        institution: "HUT SMAN 2 Lumajang, Lumajang",
        duration: "Jul 2022 - Feb 2023",
        details: ["Sponsorship", "Successfully contacted and confirmed 50+ sponsors.", "Successfully secured 60+ million in sponsorships, plus other prizes and door prizes."],
      },
      {
        institution: "OSIS-MPK SMAN 2 LUMAJANG, Lumajang",
        duration: "Aug 2021 - Aug 2022",
        details: ["Member of Academic Development", "Acting as a bridge between students' aspirations and the school in academic and non-academic areas.", "Chairman of the SMAN 2 Lumajang Ambassador Election."],
      },
    ],
  },
  {
    title: "ACHIEVEMENTS",
    items: [
      {
        institution: "UI/UX Design Competition Universitas Malikussaleh, Aceh",
        duration: "2025",
        details: ["3rd Place"],
      },
      {
        institution: "Mobile Application Design IT Telkom Surabaya, Surabaya",
        duration: "2023",
        details: ["2nd Place"],
      },
      {
        institution: "SEAMEO Science Olympiad in Penang Malaysia, Malaysia",
        duration: "2023",
        details: ["Best Completer"],
      },
      {
        institution: "Debate Competition Universitas Hang Tuah, Surabaya",
        duration: "2022",
        details: ["1st Place"],
      },
      {
        institution: "Sinematografi SMA AWARD Jawa Timur, Surabaya",
        duration: "2022",
        details: ["1st Place"],
      },
      {
        institution: "Essay Competition Lensa UKMF Universitas Negeri Yogyakarta, Yogyakarta",
        duration: "2022",
        details: ["2nd Place"],
      },
      {
        institution: "Mathematical Olympiad STKIP, Lumajang",
        duration: "2022",
        details: ["5th Place"],
      },
      {
        institution: "Gematika Mathematics Olympiad UINSA Surabaya, Surabaya",
        duration: "2022",
        details: ["Semifinalist"],
      },
    ],
  },
  {
    title: "PROJECTS",
    items: [
      {
        institution: "Gema-AI APP",
        duration: "2025",
        details: [
          "An educational application that can map potential and provide steps and descriptions of the work that will be taken as the embodiment of smart people in a smart city.",
          "Tech Stack: Android studio, Jetpack Compose, Kotlin, SQLite, Gemini API, Google TTS",
        ],
      },
      {
        institution: "DGTS - Website",
        duration: "2025",
        details: ["An official website of a duacare goes to school event which provides information on history, events etc.", "Tech Stack: Figma, Visual Studio Code, React JS"],
      },
      {
        institution: "Aura Intelligence",
        duration: "2025",
        details: ["An automatic application for taking photos of someone and processing them to get fashion recommendations for them.", "Tech Stack: Visual Studio Code, Next JS, MediaPipe"],
      },
      {
        institution: "Wonoktiri - Website",
        duration: "2025",
        details: ["Official website design for Wonokitri village as a source of information and local services.", "Tech Stack: Figma"],
      },
      {
        institution: "Home Garden - Website",
        duration: "2025",
        details: ["Automatic dashboard application in monitoring hydroponic growth to users.", "Tech Stack: Figma"],
      },
      {
        institution: "SeSaJen - Website",
        duration: "2025",
        details: ["The original Semeru body scrub sales application provides detailed product information and purchase and payment pages.", "Tech Stack: Figma"],
      },
      {
        institution: "WaChatBot",
        duration: "2024",
        details: ["Smart chatbot with a WA-like appearance that can answer all user needs.", "Tech Stack: Android studio, Jetpack Compose, Kotlin, SQLite, Gemini API, Firebase Auth"],
      },
      {
        institution: "Pororo APP",
        duration: "2023",
        details: ["Smart application as a learning assistant for users that can accommodate various learning styles such as pomodoro, notes, etc.", "Tech Stack: Glide App"],
      },
      {
        institution: "Paskamada APP",
        duration: "2023",
        details: ["An administrative application that manages post-graduate organizations such as letter numbers, work program tracking and attendance as well as an alumni database.", "Tech Stack: Glide App"],
      },
    ],
  },
];
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  let allSectionsHtml = "";

  profileData.forEach((section, index) => {
    let itemsHtml = "";
    section.items.forEach((item) => {
      const detailsList = item.details.map((detail) => `<li>${detail}</li>`).join("");

      itemsHtml += `
                <div class="timeline-item">
                    <div class="timeline-icon">
                        </div>
                    <div class="timeline-content">
                        <h3>${item.institution}</h3>
                        <p class="duration">${item.duration}</p>
                        <ul>${detailsList}</ul>
                    </div>
                </div>
            `;
    });

    allSectionsHtml += `
            <section class="timeline-section">
                <h1>${section.title}</h1>
                <div class="timeline-wrapper">
                    ${itemsHtml}
                </div>
            </section>
        `;

    // Tambahkan divider hitam setelah setiap section, kecuali yang terakhir
    if (index < profileData.length - 1) {
      allSectionsHtml += '<hr class="section-divider" />';
    }
  });

  container.innerHTML = allSectionsHtml;
}

if (document.getElementById("timeline-container")) {
  renderTimeline();
}
