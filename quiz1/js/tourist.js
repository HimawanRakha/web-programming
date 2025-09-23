document.addEventListener("DOMContentLoaded", () => {
  const touristData = [
    {
      name: "Gunung Bromo",
      description: "Nikmati pemandangan matahari terbit yang ikonik dari puncak gunung berapi aktif ini.",
      imageUrl: "../image/bromo.jpg",
    },
    {
      name: "Air Terjun Tumpak Sewu",
      description: "Dikenal sebagai 'Niagara'-nya Indonesia, air terjun ini menawarkan panorama yang megah.",
      imageUrl: "../image/sewu.webp",
    },
    {
      name: "Puncak B29",
      description: "Dataran tinggi yang menawarkan pemandangan 'negeri di atas awan' yang spektakuler.",
      imageUrl: "../image/b29.jpg",
    },
    {
      name: "Ranu Kumbolo",
      description: "Danau indah di lereng Gunung Semeru, tempat peristirahatan populer bagi para pendaki.",
      imageUrl: "../image/jumbolo.jpg",
    },
    {
      name: "Goa Tetes",
      description: "Kombinasi unik antara gua dan air terjun dengan stalaktit yang menakjubkan.",
      imageUrl: "../image/goa.jpeg",
    },
    {
      name: "Pantai Watu Pecak",
      description: "Pantai dengan pasir hitam vulkanik khas Lumajang, cocok untuk bersantai sambil menikmati deburan ombak.",
      imageUrl: "../image/pantai.jpg",
    },
  ];

  const grid = document.getElementById("touristGrid");
  const searchInput = document.getElementById("searchInput");

  function renderTouristGrid(data) {
    grid.innerHTML = "";

    if (data.length === 0) {
      grid.innerHTML = '<p class="not-found">Destinasi tidak ditemukan.</p>';
      return;
    }

    data.forEach((place) => {
      const card = document.createElement("div");
      card.className = "tourist-card";
      card.style.backgroundImage = `url('${place.imageUrl}')`;

      card.innerHTML = `
                <a href="#" class="card-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="20" height="20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>
                <div class="card-content">
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                </div>
            `;
      grid.appendChild(card);
    });
  }

  function filterPlaces() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filteredData = touristData.filter((place) => place.name.toLowerCase().includes(searchTerm) || place.description.toLowerCase().includes(searchTerm));
    renderTouristGrid(filteredData);
  }

  searchInput.addEventListener("input", filterPlaces);
  renderTouristGrid(touristData);
});
