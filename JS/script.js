//navbear start
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
//navber end

//Contact Us Form
const form = document.querySelector("form");
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let subject = document.getElementById("subject");
let message = document.getElementById("massage");

function sendMail() {
  let messageBody = `Full Name: ${fullName.value}<br> EmailL ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "cc7.project2022@gmail.com",
    Password: "7CEB9366732A96BBE6FAC52A90ACA01E2C57",
    To: "cc7.project2022@gmail.com",
    From: "cc7.project2022@gmail.com",
    Subject: subject.value,
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success",
        text: "Our Technical Team Contact You As Soon As Possible",
        icon: "success",
      });
    }
  });
}

function checkItem() {
  let items = document.querySelectorAll(".item");

  for (let item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkItem();
});
//Contact us From End

//Accordion Start

const accrodingBx = document.querySelectorAll(".accroding_bx");

accrodingBx.forEach((item, index) => {
  let titel = item.querySelector(".label");
  let contents = item.querySelector(".content");

  titel.addEventListener("click", () => {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      contents.style.height = `${contents.scrollHeight}px`;
      titel.style.background = "salmon";
    } else {
      contents.style.height = "0px";
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accrodingBx.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("active");

      let des = item2.querySelector(".content");
      des.style.height = "0px";
    }
  });
}
//Accordion End

//Image Filter Start
let filterButton = document.querySelectorAll(".filter_button button");
let filterableCard = document.querySelectorAll(".filter_card .gallery_card");

let filterCard = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterableCard.forEach((card) => {
    card.classList.add("hide");
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};
//Image Filter End

//Counter Start
filterButton.forEach((button) => button.addEventListener("click", filterCard));

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});
//Counter End
