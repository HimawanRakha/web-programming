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
  loadComponent(`${pathPrefix}/components/sidebar.html`, "sidebar-placeholder").then(() => {
    updateActiveNav();
    const mainContent = document.querySelector(".main-content");

    const hamburgerBtn = document.createElement("button");
    hamburgerBtn.className = "hamburger-menu";
    hamburgerBtn.innerHTML = "&#9776;";

    mainContent.prepend(hamburgerBtn);

    const sidebar = document.querySelector(".sidebar");
    hamburgerBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      hamburgerBtn.classList.toggle("active");

      if (hamburgerBtn.classList.contains("active")) {
        hamburgerBtn.innerHTML = "&times;";
      } else {
        hamburgerBtn.innerHTML = "&#9776;";
      }
    });

    mainContent.addEventListener("click", (event) => {
      if (!hamburgerBtn.contains(event.target) && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        hamburgerBtn.classList.remove("active");
        hamburgerBtn.innerHTML = "&#9776;";
      }
    });
  });
});
