
const btnArriba = document.getElementById("btnArriba");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }
};

btnArriba.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    alert("¡Gracias por tu mensaje! Te responderé pronto.");
    form.reset(); 
});

const skills = document.querySelectorAll(".skills div");

skills.forEach((skill) => {
    skill.addEventListener("mouseenter", () => {
        skill.style.color = "#ff9800";
        skill.style.transform = "scale(1.2)";
    });

    skill.addEventListener("mouseleave", () => {
        skill.style.color = "#333";
        skill.style.transform = "scale(1)";
    });
});
