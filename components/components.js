async function loadComponent(id, file) {
    const response = await fetch(file);

    if (!response.ok) {
        console.error("Erreur chargement :", file);
        return;
    }

    const html = await response.text();
    document.getElementById(id).innerHTML = html;

    if (id === "header") {
    }
}

function setActiveLink() {

    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }


    document.querySelectorAll(".nav-link").forEach(link => {

        let linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

}

function setupMobileMenu(){

    const openBtn = document.querySelector(".menu-toggle");
    const closeBtn = document.querySelector(".close-menu");
    const overlay = document.querySelector(".mobile-overlay");


    openBtn.addEventListener("click", () => {
        document.body.classList.add("menu-open");
    });


    closeBtn.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
    });


    overlay.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
    });

}

window.addEventListener("DOMContentLoaded", async()=>{

    await Promise.all([
        loadComponent("header","/components/header.html"),
        loadComponent("footer","/components/footer.html")
    ]);

    setActiveLink();
    setupMobileMenu();

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click",()=>{

        document.body.classList.remove("menu-open");

    });

});