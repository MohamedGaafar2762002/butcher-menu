// Smooth scroll
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// // WhatsApp button
// document.querySelector(".whatsapp").addEventListener("click", function() {
//     window.open("https://wa.me/201000000000", "_blank");
// });

const links = document.querySelectorAll(".nav a");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

document.querySelector(".whatsapp").addEventListener("click", function(e) {
    e.preventDefault();
    alert("الميزة متاحة بعد تفعيل النسخة الكاملة");
});