export function setupMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("screen-menu");

    if (!menuIcon || !navLinks) {
        console.error("Menu elements not found.");
        return;
    }

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
        navLinks.classList.toggle("active");

        const body = document.querySelector("body");
        body.style.overflowY = menuIcon.classList.contains("active") ? "hidden" : "auto";
    });
}
