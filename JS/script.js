

const form = document.querySelector("form");
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let subject = document.getElementById("subject");
let message = document.getElementById("massage");

function sendMail(){

    let messageBody = `Full Name: ${fullName.value}<br> EmailL ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "cc7.project2022@gmail.com",
        Password : "7CEB9366732A96BBE6FAC52A90ACA01E2C57",
        To : 'cc7.project2022@gmail.com',
        From : "cc7.project2022@gmail.com",
        Subject : subject.value,
        Body : messageBody,
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success",
                text: "Our Technical Team Contact You As Soon As Possible",
                icon: "success"
              });
        }
      }
    );
}

function checkItem(){
    let items = document.querySelectorAll(".item");

    for(let item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () =>{
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkItem();

    // sendMail();
})

const accrodingBx = document.querySelectorAll(".accroding_bx")

accrodingBx.forEach((item, index) => {
    let titel = item.querySelector(".label");
    let contents = item.querySelector(".content");

    titel.addEventListener("click", () => {
        item.classList.toggle('active');

        if(item.classList.contains("active")){
            contents.style.height = `${contents.scrollHeight}px`
            titel.style.background= "salmon"
        }else{
            contents.style.height = "0px"
        }
        removeOpen(index);
        
    })
})

function removeOpen(index1){
    accrodingBx.forEach((item2, index2) =>{
        if(index1 != index2){
            item2.classList.remove("active")

        let des = item2.querySelector(".content")
        des.style.height = "0px"
        }
    })
}