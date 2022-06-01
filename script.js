const mapsArray = [
    {
        id: "shop1",
        img: "maxi_sports",
        data: "Maxi Esportes",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2088080795297!2d-50.163825581949894!3d-25.09479208202715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a4106495a5b%3A0x8a54079bc98037b1!2sMaxi%20Esportes!5e0!3m2!1spt-BR!2sbr!4v1653609635289!5m2!1spt-BR!2sbr",
    },
    {
        id: "shop2",
        img: "maxi_baby",
        data: "Maxi Bebê",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.194506489199!2d-50.16172438534391!3d-25.09527632590033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81b1baad29ceb%3A0x12482ca57d29d186!2sMaxi%20Beb%C3%AA!5e0!3m2!1spt-BR!2sbr!4v1653609503824!5m2!1spt-BR!2sbr",
    },
    {
        id: "shop3",
        img: "maxi_shoes",
        data: "Maxi Calçados",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1963950128616!2d-50.16427048194963!3d-25.09521238204305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a41060037e3%3A0x8708f2f0cbc6c586!2sMaxi%20Cal%C3%A7ados%20Avenida!5e0!3m2!1spt-BR!2sbr!4v1653609581004!5m2!1spt-BR!2sbr",
    },
    {
        id: "shop4",
        img: "maxitango",
        data: "Maxitango",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.2995002833744!2d-50.160238671224754!3d-25.095157999999977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a411a9e4c31%3A0xdd31d17cdc378b9a!2sMaxitango!5e0!3m2!1spt-BR!2sbr!4v1653569999702!5m2!1spt-BR!2sbr",
    },
];

const rellax = new Rellax(".rellax");
const revealGallery = document.querySelectorAll(".gallery__container");
const revealShops = document.querySelectorAll(".shops__card");
const revealDates = document.querySelectorAll(".history__date");
const check = document.querySelector("#check");
const bottomImage = document.querySelector(".bottom");
const bottomMobileImage = document.querySelector(".bottom-mobile");

const shopContainer = document.querySelectorAll(".shops__card");
const closeButton = document.querySelector(".close");
const hamburgerButton = document.querySelector(".header__hamburger");
const closeHamburger = document.querySelector(".hamburger__close");
const linkHamburger = document.querySelectorAll(".hamburger__link");

const modalMenu = document.querySelector(".hamburger");
const modalContainer = document.querySelector(".modal");
const modalMap = document.querySelector(".modal__map");
const modalIframe = document.querySelector(".modal__iframe");
const modalImage = document.querySelector(".modal__image");
const modalLoading = document.querySelector(".modal__loading");

shopContainer.forEach((item) =>
    item.addEventListener("click", (e) => {
        const event = e.target.id;
        mapsArray.forEach((map) => {
            if (event === map.id) {
                modalIframe.setAttribute("src", map.url);
                modalImage.setAttribute("src", `./assets/shops/${map.img}.svg`);
                modalMap.setAttribute("data-title", map.data);
            }
        });
        modalContainer.classList.toggle("modal-active");
    })
);

closeButton.addEventListener("click", () => {
    modalContainer.classList.toggle("modal-active");
});

hamburgerButton.addEventListener("click", () => {
    modalMenu.classList.toggle("hamburger-active");
    console.log("entrou");
});

closeHamburger.addEventListener("click", () => {
    modalMenu.classList.toggle("hamburger-active");
});

linkHamburger.forEach((link) => {
    link.addEventListener("click", () => {
        modalMenu.classList.toggle("hamburger-active");
    });
});

const setBottom = (theme = "light") => {
    console.log(theme);
    const width = window.innerWidth;
    width >= 481
        ? bottomImage.setAttribute("src", `./assets/bottom-${theme}.svg`)
        : bottomMobileImage.setAttribute(
              "src",
              `./assets/bottom-mobile-${theme}.svg`
          );
};

check.addEventListener("click", () => {
    let theme;
    check.checked ? theme = "dark" : theme = "light";
    setBottom(theme);
});

ScrollReveal({ reset: true, delay: 100, duration: 700 });
ScrollReveal().reveal(revealShops);
ScrollReveal().reveal(revealDates);
ScrollReveal().reveal(revealGallery);
