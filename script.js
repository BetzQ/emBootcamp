// Navbar
// Ambil elemen-elemen yang diperlukan
const helpBtn = document.getElementById("helpBtn");
const Btn = document.getElementById("Btn");
const questionMark = document.getElementById("questionMark");
const BtnMob = document.getElementById("BtnMob");
const questionMarkMob = document.getElementById("questionMarkMob");
const infoCard = document.getElementById("infoCard");
const infoCardMob = document.getElementById("infoCardMob");
const corporateBtn = document.getElementById("corporateBtn");
const corporateMenu = document.getElementById("corporateMenu");
let isExpanded = false;

// Tambahkan event listener untuk tanda tanya
Btn.addEventListener("mouseover", () => {
  infoCard.classList.remove("hidden");
});

Btn.addEventListener("mouseout", () => {
  infoCard.classList.add("hidden");
});

BtnMob.addEventListener("click", () => {
  if (infoCardMob.classList.contains("hidden")) {
    infoCardMob.classList.remove("hidden");
  } else {
    infoCardMob.classList.add("hidden");
  }
});

// Ambil elemen tombol dan menu korporat

// Tambahkan event listener untuk menampilkan menu saat dihover
corporateBtn.addEventListener("mouseover", () => {
  corporateMenu.classList.remove("hidden");
});

// Sembunyikan menu saat kursor keluar dari tombol dan menu
corporateMenu.addEventListener("mouseleave", () => {
  corporateMenu.classList.add("hidden");
});

// Fungsi untuk mengatur ukuran tombol dan span
function heartbeat() {
  if (isExpanded) {
    Btn.style.padding = "6px";
    questionMark.classList.remove("text-xl");
    questionMark.classList.add("text-lg");
    BtnMob.style.padding = "6px";
    questionMarkMob.classList.remove("text-xl");
    questionMarkMob.classList.add("text-lg");
  } else {
    questionMark.classList.remove("text-lg");
    questionMark.classList.add("text-xl");
    Btn.style.padding = "5px";
    questionMarkMob.classList.remove("text-lg");
    questionMarkMob.classList.add("text-xl");
    BtnMob.style.padding = "5px";
  }
  isExpanded = !isExpanded;
}

// Menerapkan efek detak jantung setiap 500ms (0.5 detik)
setInterval(heartbeat, 500);
// End Navbar

// Second Navbar
// Ambil elemen-elemen yang diperlukan
const bootcampBtn = document.getElementById("bootcampBtn");
const bootcampMenu = document.getElementById("bootcampMenu");
const internshipBtn = document.getElementById("internshipBtn");
const internshipMenu = document.getElementById("internshipMenu");

/// Tambahkan event listener untuk menampilkan menu saat tombol dihover untuk Job Guarantee Bootcamp
bootcampBtn.addEventListener("mouseover", () => {
  bootcampMenu.classList.remove("hidden");
});

// Sembunyikan menu saat kursor meninggalkan tombol untuk Job Guarantee Bootcamp
bootcampBtn.addEventListener("mouseout", () => {
  setTimeout(() => {
    if (!bootcampMenu.matches(":hover")) {
      bootcampMenu.classList.add("hidden");
    }
  }, 200);
});

// Tambahkan event listener untuk menyembunyikan menu saat kursor meninggalkan submenu untuk Job Guarantee Bootcamp
bootcampMenu.addEventListener("mouseleave", () => {
  bootcampMenu.classList.add("hidden");
});

// Tambahkan event listener untuk menampilkan menu saat tombol dihover untuk Project-based Internship
internshipBtn.addEventListener("mouseover", () => {
  internshipMenu.classList.remove("hidden");
});

// Sembunyikan menu saat kursor meninggalkan tombol untuk Project-based Internship
internshipBtn.addEventListener("mouseout", () => {
  setTimeout(() => {
    if (!internshipMenu.matches(":hover")) {
      internshipMenu.classList.add("hidden");
    }
  }, 200);
});

// Tambahkan event listener untuk menyembunyikan menu saat kursor meninggalkan submenu untuk Project-based Internship
internshipMenu.addEventListener("mouseleave", () => {
  internshipMenu.classList.add("hidden");
});
// End Second Navbar

// Mobile Navbar
function toggleNav() {
  var mobileNav = document.getElementById("mobile-nav");
  var closeIcon = document.getElementById("closeIcon");
  var menuIcon = document.getElementById("menuIcon");

  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
    closeIcon.classList.add("hidden");
    menuIcon.classList.remove("hidden");
  } else {
    mobileNav.style.display = "block";
    closeIcon.classList.remove("hidden");
    menuIcon.classList.add("hidden");
  }
}
// End Mobile Navbar

// Section 2
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    const cardArrowId = "cardArrow" + (index + 1);
    const cardArrow = document.getElementById(cardArrowId);
    const img = cardArrow.querySelector("img");
    let isOpen = false;

    const toggleHiddenText = () => {
      const hiddenText = card.querySelector(".hidden-text");
      const cardDarker = card.querySelector(".card-darker");
      const small = card.querySelector("small");

      if (!isOpen) {
        hiddenText.style.transform = "translateY(-4em)";
        hiddenText.style.transition = "transform 0.5s ease";
        small.style.opacity = 1;
        cardDarker.style.opacity = 1;
        cardArrow.classList.remove("h-4");
        cardArrow.classList.add("h-10");
        img.src = "./images/arrowUp.svg";
        isOpen = true;
      } else {
        hiddenText.style.transform = "translateY(0)";
        hiddenText.style.transition = "transform 0.5s ease";
        small.style.opacity = 0;
        cardDarker.style.opacity = 0;
        cardArrow.classList.remove("h-10");
        cardArrow.classList.add("h-4");
        img.src = "./images/arrowDown.png";
        isOpen = false;
      }
    };

    card.addEventListener("mouseenter", function () {
      const hiddenText = card.querySelector(".hidden-text");
      const cardDarker = card.querySelector(".card-darker");
      const small = card.querySelector("small");
      hiddenText.style.transform = "translateY(-4em)";
      hiddenText.style.transition = "transform 0.5s ease";
      small.style.opacity = 1;
      cardDarker.style.opacity = 1;
      cardArrow.classList.remove("h-4");
      cardArrow.classList.add("h-10");
      img.src = "./images/arrowUp.svg";
      isOpen = true;
    });

    card.addEventListener("mouseleave", function () {
      const hiddenText = card.querySelector(".hidden-text");
      const cardDarker = card.querySelector(".card-darker");
      const small = card.querySelector("small");
      hiddenText.style.transform = "translateY(0)";
      hiddenText.style.transition = "transform 0.5s ease";
      small.style.opacity = 0;
      cardDarker.style.opacity = 0;
      cardArrow.classList.remove("h-10");
      cardArrow.classList.add("h-4");
      img.src = "./images/arrowDown.png";
      isOpen = false;
    });
    card.addEventListener("click", toggleHiddenText);
  });
});
// End Section 2

// Company Sliding
$(document).ready(function () {
  $(".slideshow").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
// End Company Sliding

// Flagship Program
const cardContainer = document.getElementById("cardContainer");
const cardDescription = document.getElementById("cardDescription");
const cardButton = document.getElementById("cardButton");

const programs = [
  {
    title: "Data Science",
    image:
      "https://rakamin-lms.s3.ap-southeast-1.amazonaws.com/images/logo_ds-b85018ce-69b5-4c08-9cce-4a524d7a5f64.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo enim. Phasellus in lobortis justo, et convallis lorem.",
    information_program: {
      start_time: "02 Maret 2024, Batch 44",
      weekdays: "Self Learning (Reading, Video Learning, Assignment)",
      minggu: "10.00-12.00 (Live Session)",
      duration: ["4 bulan", "3 bulan"],
      price: "3.999.000",
      discount: 0,
    },
  },
  {
    title: "Digital Marketing",
    image:
      "https://rakamin-lms.s3.ap-southeast-1.amazonaws.com/images/logo_dm-a317f0b8-4ae7-46cc-9023-08e3719252e4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo enim. Phasellus in lobortis justo, et convallis lorem.",
    information_program: {
      start_time: "02 Maret 2024, Batch 43",
      weekdays: "Self Learning (Reading, Video Learning, Assignment)",
      minggu: "10.00-12.00 (Live Session)",
      duration: ["4 bulan", "3 bulan"],
      price: "3.999.000",
      discount: 0,
    },
  },
  {
    title: "Fullstack Web Development",
    image:
      "https://rakamin-lms.s3.ap-southeast-1.amazonaws.com/images/logo_ui-6b13fd05-1ddb-4ca0-b516-d7394b7e1545.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo enim. Phasellus in lobortis justo, et convallis lorem.",
    information_program: {
      start_time: "02 Maret 2024, Batch 7",
      weekdays: "Self Learning (Reading, Video Learning, Assignment)",
      minggu: "10.00-12.00 (Live Session)",
      duration: ["4 bulan", "3 bulan"],
      price: "3.999.000",
      discount: 0,
    },
  },
  {
    title: "Product Management",
    image:
      "https://rakamin-lms.s3.ap-southeast-1.amazonaws.com/images/bgfeatureprog-37764663-329e-4570-9de5-ea4b47cca85a.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo enim. Phasellus in lobortis justo, et convallis lorem.",
    information_program: {
      start_time: "02 Maret 2024, Batch 7",
      weekdays: "Self Learning (Reading, Video Learning, Assignment)",
      minggu: "10.00-12.00 (Live Session)",
      duration: ["4 bulan", "3 bulan"],
      price: "5.999.000",
      discount: 25,
    },
  },
];

let cardElements = [];

function valueCardDescription(program) {
  // Mengonversi harga dari string menjadi angka
  const price = parseInt(
    program.information_program.price.replace(/\./g, ""),
    10
  );

  let discountedPriceText = ""; // variabel untuk menampung teks harga setelah diskon

  // Memeriksa apakah diskon lebih besar dari 0
  if (program.information_program.discount > 0) {
    // Menghitung harga setelah diskon
    const discountedPrice =
      price * (1 - program.information_program.discount / 100);
    // Mengonversi harga diskon menjadi format angka dengan pemisah ribuan
    discountedPriceText = discountedPrice.toLocaleString();
  }

  return `<div class="leading-10">
  <h3 class="text-xl font-semibold mb-4">${program.title}</h3>
  <p><b class="mr-5">Waktu Mulai</b>${
    program.information_program.start_time
  }</p>
  <div class="flex"><p class="mr-9">Weekdays</p><p>${
    program.information_program.weekdays
  }</p></div>
  <p><span class="mr-14">Minggu</span>${program.information_program.minggu}</p>
  <b>Durasi</b>
  
  <div class="flex mb-4"><div class="bg-gray-100 w-52 p-3 mr-4 text-sm"><p class="text-sky-700">Bootcamp Hybrid</p><p class="text-gray-600 text-right">${
    program.information_program.duration[0]
  }</p></div><div></div><div class="bg-violet-100 w-52 p-3 mr-4 text-sm"><p class="text-violet-700">+ Career Bootcamp</p><p class="text-gray-600 text-right">${
    program.information_program.duration[1]
  }</p></div><div></div></div>
  <b>Harga</b>
  ${
    discountedPriceText !== ""
      ? `<p class="text-gray-400 line-through -mt-4 mb-2">Rp ${program.information_program.price}</p>`
      : ""
  }
  <p class="font-bold text-lg text-violet-600 -mt-3"><span class="${
    program.information_program.discount > 0 && "p-1 px-2"
  } text-sm text-white rounded bg-red-500">${
    program.information_program.discount > 0
      ? `${program.information_program.discount} %`
      : ""
  }</span> ${
    discountedPriceText === ""
      ? `Rp ${program.information_program.price}`
      : `Rp ${discountedPriceText}`
  }</p>
  <button class="w-full text-center text-black bg-violet-500 rounded-lg hover:bg-violet-600 mt-5">Course Details</button>
  </div>`;
}

function showDescription(index) {
  const program = programs[index];
  cardDescription.innerHTML = valueCardDescription(program);
  cardButton.innerHTML = `
        <button id="btn-default" class="my-4 bg-white border border-gray-200 px-4 py-2 rounded-md mr-2" onclick="showProgramInfo(${index})">Informasi Program</button>
        <button id="btn-default2" class="my-4 bg-white border border-gray-200 px-4 py-2 rounded-md" onclick="showModuleDetails(${index})">Lihat Modul</button>
    `;
  highlightTab(index);
  highlightTabMobile(index + 4);
  const btnDefault = document.getElementById("btn-default");
  const btnDefault2 = document.getElementById("btn-default2");
  btnDefault.classList.add("bg-sky-100", "border-sky-600", "text-sky-600");
  btnDefault2.classList.remove("bg-sky-100", "border-sky-600", "text-sky-600");
}

function highlightTab(index) {
  const tabs = document.querySelectorAll(".cursor-pointer");
  tabs.forEach((tab, tabIndex) => {
    if (tabIndex >= 0 && tabIndex <= 3) {
      if (tabIndex === index) {
        tab.classList.add("border-b-4", "border-sky-600", "bg-sky-100");
      } else {
        tab.classList.remove("border-b-4", "border-sky-600", "bg-sky-100");
      }
    }
  });

  // Tampilkan gambar program yang sesuai dengan tab yang dipilih
  cardElements.forEach((cardElement, cardIndex) => {
    if (cardIndex >= 0 && cardIndex <= 3) {
      if (cardIndex === index) {
        cardElement.style.display = "block";
      } else {
        cardElement.style.display = "none";
      }
    }
  });
}
function highlightTabMobile(index) {
  const tabs = document.querySelectorAll(".cursor-pointer");
  tabs.forEach((tab, tabIndex) => {
    if (tabIndex >= 4 && tabIndex <= 7) {
      if (tabIndex === index) {
        tab.classList.add("border-b-4", "border-sky-600", "bg-sky-100");
      } else {
        tab.classList.remove("border-b-4", "border-sky-600", "bg-sky-100");
      }
    }
  });

  // Tampilkan gambar program yang sesuai dengan tab yang dipilih
  cardElements.forEach((cardElement, cardIndex) => {
    if (cardIndex >= 4 && cardIndex <= 7) {
      if (cardIndex === index) {
        cardElement.style.display = "block";
      } else {
        cardElement.style.display = "none";
      }
    }
  });
}

programs.forEach((program, index) => {
  const programCard = document.createElement("div");
  programCard.innerHTML = `
    <div class="relative">
      <img src="${program.image}" alt="${program.title}" class="w-full">
      <div class="absolute flex items-center justify-center text-left top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 w-full h-full">
      <div>
      <div class="backdrop-blur-sm bg-white/10 rounded-lg p-5">
      <img src="https://rakamin-lms.s3.ap-southeast-1.amazonaws.com/images/stars-da29932d-82a1-42a5-80ed-b6b03924378d.png" class="w-4">
        <p class="text-white text-lg font-semibold">What’s Exciting</p>
        <div class="flex">
        <div>
        <p class="w-5 mb-1 mr-1"> <img src="./images/check.png" alt="${program.title}"></p>
        <p class="w-5 mb-1 mr-1"> <img src="./images/check.png" alt="${program.title}"></p>
        <p class="w-5 mb-1 mr-1"> <img src="./images/check.png" alt="${program.title}"></p>
        <p class="w-5 mb-1 mr-1"> <img src="./images/check.png" alt="${program.title}"></p>
        </div>
        <div>
        <p class="text-white flex">Up-to 3 Project-Based Internship</p>
        <p class="text-white">Up-to 5 Mini Project</p>
        <p class="text-white">Job Guarantee Program</p>
        <p class="text-white">Lifetime Job-Connector</p>
        </div>
        </div>      
        </div>      
      </div>
      </div>
    </div>
  `;
  programCard.classList.add("rounded-lg", "overflow-hidden");
  cardElements.push(programCard); // Tambahkan elemen gambar ke dalam array cardElements
});

function showProgramInfo(index) {
  const program = programs[index];
  cardDescription.innerHTML = valueCardDescription(program);
  // Tambahkan kelas pada tombol sesuai dengan permintaan
  const btnDefault = document.getElementById("btn-default");
  const btnDefault2 = document.getElementById("btn-default2");
  btnDefault.classList.add("bg-sky-100", "border-sky-600", "text-sky-600");
  btnDefault2.classList.remove("bg-sky-100", "border-sky-600", "text-sky-600");
}

function showModuleDetails(index) {
  const program = programs[index];
  cardDescription.innerHTML = `
  <div class="flex">
        <div>
        <p class="w-5 rounded-full bg-sky-100 p-1 mb-3 mr-1"> <img src="./images/checkBlue.png" alt="${program.title}"></p>
        <p class="w-5 rounded-full bg-sky-100 p-1 mb-3 mr-1"> <img src="./images/checkBlue.png" alt="${program.title}"></p>
        <p class="w-5 rounded-full bg-sky-100 p-1 mb-3 mr-1"> <img src="./images/checkBlue.png" alt="${program.title}"></p>
        <p class="w-5 rounded-full bg-sky-100 p-1 mb-3 mr-1"> <img src="./images/checkBlue.png" alt="${program.title}"></p>
        <p class="w-5 rounded-full bg-sky-100 p-1 mb-3 mr-1"> <img src="./images/checkBlue.png" alt="${program.title}"></p>
        <p class="w-5 rounded-full bg-sky-100 p-1 mb-3 mr-1"> <img src="./images/checkBlue.png" alt="${program.title}"></p>
        <p class="w-5 rounded-full bg-sky-100 p-1 mb-3 mr-1"> <img src="./images/checkBlue.png" alt="${program.title}"></p>
        <p class="w-5 rounded-full bg-sky-100 p-1 mb-3 mr-1"> <img src="./images/checkBlue.png" alt="${program.title}"></p>
        <p class="w-5 rounded-full bg-sky-100 p-1 mb-3 mr-1"> <img src="./images/checkBlue.png" alt="${program.title}"></p>
        <p class="w-5 rounded-full bg-sky-100 p-1 mb-3 mr-1"> <img src="./images/checkBlue.png" alt="${program.title}"></p>
        <p class="w-5 rounded-full bg-sky-100 p-1 mb-3 mr-1"> <img src="./images/checkBlue.png" alt="${program.title}"></p>
        </div>
    <ul class="text-left text-sky-600 -mt-1 leading-8">
      <li>Introduction to Data Science</li>
      <li>SQL</li>
      <li>Python Intro & Data Types</li>
      <li>Data Processing</li>
      <li>Python Programming</li>
      <li>Data Visualization</li>
      <li>Statistic</li>
      <li>Machine Learning Preparation</li>
      <li>Collaborative Working using Git</li>
      <li>ML Supervised & Evaluation</li>
      <li>ML Unsupervised & Application</li>
    </ul>
    </div>
  `;
  // Tambahkan kelas pada tombol sesuai dengan permintaan
  const btnDefault = document.getElementById("btn-default");
  const btnDefault2 = document.getElementById("btn-default2");
  btnDefault.classList.remove("bg-sky-100", "border-sky-600", "text-sky-600");
  btnDefault2.classList.add("bg-sky-100", "border-sky-600", "text-sky-600");
}

// Menampilkan deskripsi program pertama secara default
showDescription(0);

// Menambahkan elemen gambar ke dalam cardContainer
cardElements.forEach((cardElement) => {
  cardContainer.appendChild(cardElement);
});

// End Flagship Program

// Feedback
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// End Feedback
