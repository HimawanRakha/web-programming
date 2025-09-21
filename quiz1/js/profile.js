// quiz1/js/profile.js
const profileData = [
  {
    title: "Education",
    items: [
      {
        institution: "Institut Teknologi Sepuluh Nopember",
        duration: "2024 - Now",
        details: [],
      },
      {
        institution: "SMA Negeri 2 Lumajang",
        duration: "2021 - 2024",
        details: ["2nd Best Graduates in Science Academic", "General Leader PASKAMADA", "Member Academic Development OSIS/MPK"],
      },
    ],
  },
  {
    title: "Achievements",
    items: [
      {
        institution: "Institut Teknologi Sepuluh Nopember",
        duration: "2024 - Now",
        details: [],
      },
      {
        institution: "SMA Negeri 2 Lumajang",
        duration: "2021 - 2024",
        details: ["2nd Best Graduates in Science Academic", "General Leader PASKAMADA", "Member Academic Development OSIS/MPK"],
      },
    ],
  },
  // Tambahkan data untuk "Projects" dan "Organisations" di sini
];

function renderTimeline() {
  const container = document.getElementById("timeline-container");
  let allSectionsHtml = "";

  profileData.forEach((section) => {
    let itemsHtml = "";
    section.items.forEach((item) => {
      // Ubah detail array menjadi list item HTML
      const detailsList = item.details.map((detail) => `<li>${detail}</li>`).join("");

      itemsHtml += `
                <div class="timeline-item">
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
                <h2>${section.title}</h2>
                <div class="timeline-wrapper">
                    ${itemsHtml}
                </div>
            </section>
        `;
  });

  container.innerHTML = allSectionsHtml;
}

// Panggil fungsi ini hanya jika elemen container ada (artinya kita di halaman profile)
if (document.getElementById("timeline-container")) {
  renderTimeline();
}
