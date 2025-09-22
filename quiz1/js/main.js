// quiz1/js/main.js

// Fungsi baru untuk menandai link yang aktif
function updateActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".sidebar-nav .nav-link");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    link.classList.remove("active");

    if (currentPath === linkPath || (currentPath.startsWith(linkPath) && currentPath.charAt(linkPath.length) === "i")) {
      link.classList.add("active");
    }
    if (currentPath === "/quiz1/" || currentPath === "/quiz1/index.html") {
      if (linkPath === "/quiz1/") {
        link.classList.add("active");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = async (url, elementId) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.text();
      document.getElementById(elementId).innerHTML = data;
    } catch (error) {
      console.error("Failed to load component:", error);
    }
  };
  const currentPath = window.location.pathname;
  const isSubPage = currentPath.includes("/profile/") || currentPath.includes("/hometown/") || currentPath.includes("/food/") || currentPath.includes("/tourist/");
  const pathPrefix = isSubPage ? "../" : "./";
  // const pathPrefix = window.location.pathname.split("/")[1] !== "quiz1" ? "" : "../";

  // Setelah komponen sidebar selesai dimuat, panggil fungsi updateActiveNav
  loadComponent(`${pathPrefix}/components/sidebar.html`, "sidebar-placeholder").then(() => {
    updateActiveNav();
  });
});
