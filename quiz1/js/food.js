// quiz1/js/food.js
document.addEventListener("DOMContentLoaded", () => {
  // --- DATA MAKANAN (Bisa Anda tambah atau ubah) ---
  const foodData = [
    {
      name: "Pecel Gudeg Lumajang",
      description: "Perpaduan sayur segar dengan gudeg khas Lumajang dan sambal kacang gurih.",
      imageUrl: "../image/pecel.jpg",
    },
    {
      name: "Lupis Ketan",
      description: "Jajanan tradisional dari ketan dengan parutan kelapa dan gula merah cair.",
      imageUrl: "../image/lupis.jpg",
    },
    {
      name: "Tape Pisang",
      description: "Olahan pisang khas Lumajang yang difermentasi dengan rasa manis-asam segar.",
      imageUrl: "../image/tape.jpgg.jpeg",
    },
    {
      name: "Sate Kopyok",
      description: "Sate ayam dengan kuah gurih khas Lumajang, berbeda dari sate biasa karena berkuah.",
      imageUrl: "../image/sate.jpg",
    },
    {
      name: "Lemet Ketan",
      description: "Kue tradisional dari ketan berisi kelapa dan gula merah, dibungkus daun pisang lalu dikukus.",
      imageUrl: "../image/lemet.jpg",
    },
    {
      name: "Gethuk Pisang",
      description: "Camilan manis dari pisang kukus yang ditumbuk dan dibentuk, lembut dengan rasa alami.",
      imageUrl: "../image/gethuk.jpg",
    },
  ];

  const grid = document.getElementById("foodGrid");
  const searchInput = document.getElementById("searchInput");

  // --- FUNGSI UNTUK MENAMPILKAN KARTU MAKANAN ---
  function renderFoodGrid(data) {
    grid.innerHTML = ""; // Kosongkan grid sebelum menampilkan hasil baru

    if (data.length === 0) {
      grid.innerHTML = '<p class="not-found">Makanan tidak ditemukan.</p>';
      return;
    }

    data.forEach((food) => {
      const card = document.createElement("div");
      card.className = "food-card";
      card.innerHTML = `
                <div class="food-photo" style="background-image: url('${food.imageUrl}')"></div>
                <div class="food-info">
                    <h3>${food.name}</h3>
                    <p>${food.description}</p>
                </div>
            `;
      grid.appendChild(card);
    });
  }

  // --- FUNGSI UNTUK FILTER PENCARIAN ---
  function filterFood() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredData = foodData.filter((food) => food.name.toLowerCase().includes(searchTerm) || food.description.toLowerCase().includes(searchTerm));

    renderFoodGrid(filteredData);
  }

  // --- EVENT LISTENER ---
  searchInput.addEventListener("input", filterFood);

  // --- TAMPILKAN SEMUA MAKANAN SAAT HALAMAN DIBUKA ---
  renderFoodGrid(foodData);
});
