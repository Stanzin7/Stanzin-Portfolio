$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Googler", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Googler", "Developer", "Innovator", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

function bondPeriod() {
  window.location.href = "./bondPeriod.html";
}
function week1() {
  window.location.href = "./week12.html";
}
function week2() {
  window.location.href = "./week34.html";
}
function week3() {
  window.location.href = "./week56.html";
}
function week4() {
  window.location.href = "./week78.html";
}
function week5() {
  window.location.href = "./week910.html";
}
function week6() {
  window.location.href = "./week1112.html";
}

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "paidverts4478@gmail.com",
    Password: "BBE3FA7AB8CF11EF714978F569B15508E3CC",
    To: "adityabathani.4478@gmail.com",
    From: document.getElementById("emaill").value,
    Subject: "New Enquiry from Portfolio",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
