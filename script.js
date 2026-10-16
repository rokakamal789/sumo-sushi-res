// Simple scroll animation

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});

// cards.forEach(card => {
//   card.style.opacity = "0";
//   card.style.transform = "translateY(40px)";
//   card.style.transition = "0.6s ease";
// });

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     alert("Reservation feature coming soon!");
// });



// const buttons = document.querySelectorAll(".categories button");
// const cards = document.querySelectorAll(".food-card");

// buttons.forEach(button => {

//     button.addEventListener("click", () => {

//         buttons.forEach(btn =>
//             btn.classList.remove("active")
//         );

//         button.classList.add("active");

//         const filter = button.dataset.filter;

//         cards.forEach(card => {

//             if (
//                 filter === "all" ||
//                 card.classList.contains(filter)
//             ) {
//                 card.style.display = "block";
//             } else {
//                 card.style.display = "none";
//             }

//         });

//     });

// });




let count = 0;

function addToCart() {
    count++;
    document.getElementById("cart-count").textContent = count;
}










//  id="tailwind-config"
//       tailwind.config = {
//         darkMode: "class",
//         theme: {
//           extend: {
//             "colors": {
//                     "tertiary-container": "#000000",
//                     "on-primary-container": "#757575",
//                     "inverse-on-surface": "#2e3132",
//                     "error": "#ffb4ab",
//                     "surface-container": "#1d2021",
//                     "primary": "#c6c6c6",
//                     "on-surface-variant": "#cfc4c5",
//                     "on-secondary-fixed": "#1c1b1b",
//                     "secondary-container": "#4a4949",
//                     "error-container": "#93000a",
//                     "on-secondary-container": "#bab8b7",
//                     "surface-dim": "#111415",
//                     "outline-variant": "#4c4546",
//                     "primary-fixed": "#e2e2e2",
//                     "inverse-primary": "#5e5e5e",
//                     "surface-variant": "#323536",
//                     "on-primary-fixed-variant": "#474747",
//                     "primary-container": "#000000",
//                     "on-tertiary-fixed": "#410002",
//                     "on-tertiary": "#690005",
//                     "background": "#111415",
//                     "on-surface": "#e1e3e4",
//                     "on-tertiary-container": "#e12a29",
//                     "surface-tint": "#c6c6c6",
//                     "surface": "#111415",
//                     "primary-fixed-dim": "#c6c6c6",
//                     "surface-container-highest": "#323536",
//                     "on-tertiary-fixed-variant": "#93000b",
//                     "surface-container-lowest": "#0c0f10",
//                     "surface-bright": "#373a3b",
//                     "secondary-fixed": "#e5e2e1",
//                     "on-error": "#690005",
//                     "on-primary-fixed": "#1b1b1b",
//                     "surface-container-high": "#282a2b",
//                     "inverse-surface": "#e1e3e4",
//                     "on-background": "#e1e3e4",
//                     "on-error-container": "#ffdad6",
//                     "on-secondary-fixed-variant": "#474646",
//                     "tertiary": "#ffb4ab",
//                     "secondary-fixed-dim": "#c8c6c5",
//                     "on-primary": "#303030",
//                     "tertiary-fixed-dim": "#ffb4ab",
//                     "surface-container-low": "#191c1d",
//                     "on-secondary": "#313030",
//                     "tertiary-fixed": "#ffdad6",
//                     "secondary": "#c8c6c5",
//                     "outline": "#988e90"
//             },
//             "borderRadius": {
//                     "DEFAULT": "1rem",
//                     "lg": "2rem",
//                     "xl": "3rem",
//                     "full": "9999px"
//             },
//             "spacing": {
//                     "container-max-width": "1280px",
//                     "section-padding": "120px",
//                     "margin-desktop": "80px",
//                     "margin-mobile": "20px",
//                     "gutter": "24px",
//                     "unit": "8px"
//             },
//             "fontFamily": {
//                     "headline-md": ["Playfair Display"],
//                     "label-caps": ["Montserrat"],
//                     "headline-lg-mobile": ["Playfair Display"],
//                     "body-md": ["Montserrat"],
//                     "body-lg": ["Montserrat"],
//                     "display-lg-mobile": ["Playfair Display"],
//                     "headline-lg": ["Playfair Display"],
//                     "display-lg": ["Playfair Display"]
//             },
//             "fontSize": {
//                     "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "500"}],
//                     "label-caps": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.15em", "fontWeight": "700"}],
//                     "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
//                     "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
//                     "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
//                     "display-lg-mobile": ["48px", {"lineHeight": "1.1", "fontWeight": "700"}],
//                     "headline-lg": ["48px", {"lineHeight": "1.2", "fontWeight": "600"}],
//                     "display-lg": ["72px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}]
//             }
//           },
//         },
//       }
    
        // Simple scroll effect for navbar
        // window.addEventListener('scroll', () => {
        //     const nav = document.querySelector('nav');
        //     if (window.scrollY > 50) {
        //         nav.classList.add('h-16', 'bg-surface/90');
        //         nav.classList.remove('h-20', 'bg-surface/60');
        //     } else {
        //         nav.classList.add('h-20', 'bg-surface/60');
        //         nav.classList.remove('h-16', 'bg-surface/90');
        //     }
        // });

        // Form submission animation (mock)
        // const form = document.querySelector('form');
        // form.addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     const btn = form.querySelector('button');
        //     const originalText = btn.innerHTML;
        //     btn.innerHTML = '<span>Processing...</span>';
        //     btn.classList.add('opacity-70', 'pointer-events-none');
            
        //     setTimeout(() => {
        //         btn.innerHTML = '<span class="flex items-center gap-2">Sent Successfully <span class="material-symbols-outlined">check_circle</span></span>';
        //         btn.classList.remove('bg-on-tertiary-container');
        //         btn.classList.add('bg-green-700');
        //         form.reset();
                
        //         setTimeout(() => {
        //             btn.innerHTML = originalText;
        //             btn.classList.remove('bg-green-700', 'opacity-70', 'pointer-events-none');
        //             btn.classList.add('bg-on-tertiary-container');
        //         }, 3000);
        //     }, 1500);
        // });
    



























        // ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.style.border = "1px solid red";
            valid = false;
        } else {
            input.style.border = "1px solid #333";
        }
    });

    if (valid) {
        alert("✅ Your message has been sent successfully!");

        form.reset();
    } else {
        alert("⚠ Please fill in all fields.");
    }
});


// ===============================
// Navbar Shadow on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
    } else {
        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";
    }

});


// ===============================
// Fade In Animation
// ===============================

const elements = document.querySelectorAll(
    ".contact-form, .contact-info, .map-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

elements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = ".8s";

    observer.observe(el);

});


// ===============================
// Button Hover Effect
// ===============================

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// Input Focus Animation
// ===============================

const fields = document.querySelectorAll("input, textarea");

fields.forEach(field => {

    field.addEventListener("focus", () => {

        field.style.boxShadow = "0 0 12px rgba(255,59,59,.5)";

    });

    field.addEventListener("blur", () => {

        field.style.boxShadow = "none";

    });

});