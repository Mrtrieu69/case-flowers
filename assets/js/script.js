// Slider
new Swiper(".swiper-modes", {
    slidesPerView: 1.35,
    spaceBetween: 10,
    pagination: {
        el: ".modes .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".modes .button.next",
        prevEl: ".modes .button.prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2.87,
            spaceBetween: 20,
        },
    },
});

// Animation
// const observer = new IntersectionObserver(
//     (entires, observer) => {
//         entires.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 const target = entry.target;
//                 const delay = target.getAttribute("data-delay");
//                 if (delay) {
//                     setTimeout(() => {
//                         target.classList.add("active");
//                     }, Number(delay));
//                 } else {
//                     target.classList.add("active");
//                 }
//                 observer.unobserve(entry);
//             }
//         });
//     },
//     { threshold: 0.25 }
// );

// const animatedEls = document.querySelectorAll("[data-animate]");

// animatedEls.forEach((el) => {
//     observer.observe(el);
// });

function showAnimate() {
    const animateItems = document.querySelectorAll("[data-animate]:not(.active)");

    // Stop listening when all animate items are showing
    // if (!animateItems.length) {
    //     document.removeEventListener("scroll", showAnimate);
    //     return;
    // }

    if (animateItems.length) {
        animateItems.forEach((item) => {
            const { innerHeight } = window;
            const { top } = item.getBoundingClientRect();

            if (top < innerHeight - 150) {
                const delay = item.getAttribute("data-delay");
                if (delay) {
                    setTimeout(() => {
                        item.classList.add("active");
                    }, Number(delay));
                } else {
                    item.classList.add("active");
                }
            }
        });
    }
}

showAnimate();

function loadImage() {
    const images = document.querySelectorAll("img[data-src]:not([src])");

    if (images.length) {
        images.forEach((image) => {
            const { innerHeight } = window;
            const { top } = image.getBoundingClientRect();

            if (top < innerHeight + 200) {
                image.src = image.dataset.src;
            }
        });
    }
}

loadImage();

document.addEventListener("scroll", () => {
    showAnimate();
    loadImage();
});

// Show images
// const images = document.querySelectorAll("img[data-src]");
//
// if ('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 // Load the image
//                 entry.target.src = entry.target.dataset.src;
//
//                 // Stop observing the image
//                 observer.unobserve(entry.target);
//             }
//         });
//     });
//
//     images.forEach((image) => {
//         observer.observe(image);
//     });
// }else{
//     images.forEach(function (image) { image.src = image.dataset.src });
// }
