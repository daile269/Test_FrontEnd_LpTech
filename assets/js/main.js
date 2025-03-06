// Nav header
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".main-content .body ul li a");

    links.forEach(link => {
        link.addEventListener("click", function () {        
            links.forEach(a => a.classList.remove("actived"));
            this.classList.add("active");
        });
    });
});

// Chấm sáng ngẫu nhiên
document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".hero");
    const numDots = 35; // Số lượng chấm sáng

    for (let i = 0; i < numDots; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");

        let x = Math.random() * 100; 
        let y = Math.random() * 100; 
        let size = Math.random() * 6 + 2; 

        
        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        hero.appendChild(dot); 
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".footer_contain");
    const numDots = 25; // Số lượng chấm sáng

    for (let i = 0; i < numDots; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");

        let x = Math.random() * 100; 
        let y = Math.random() * 100; 
        let size = Math.random() * 6 + 2; 

        
        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        footer.appendChild(dot); 
    }
});

// Our products Js
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".category-main-content ul li a");

    links.forEach(link => {
        link.addEventListener("click", function () {        
            links.forEach(a => a.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
