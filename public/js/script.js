'use strict';

const contacts = [];

const state = {
    contacts: [],
};

const telEl = document.querySelector(".telephones");
const addressesEl = document.querySelector(".addresses");
const emailsEl = document.querySelector(".emails");

let nextId = 0;

const countForm = {
    tel: 1,
    address: 1,
    emails: 1,
};
let {tel} = countForm;

function printInConsole(a) {
    console.log(a);
}

function addInputs(type, num, whenEl) {
    whenEl = document.querySelector(`.${whenEl}`);
    console.log(1);
    const divEl = document.createElement("div");
    divEl.classList.add("form-group");
    const inputTelDopEl = document.createElement("input");
    inputTelDopEl.classList.add("form-control");
    inputTelDopEl.classList.add("fade-enter-active");
    inputTelDopEl.placeholder = "телефон" + `${++num}`;
    inputTelDopEl.name = `${type}-${num}`
    
    const delEl = document.createElement("button");
    delEl.className = "btn btn-danger del";
    
    const iconTrachEl = document.createElement("i");
    iconTrachEl.className = "fa fa-trash";

    delEl.appendChild(iconTrachEl);
    delEl.setAttribute('@click', 'removedInputPhone');
    divEl.appendChild(inputTelDopEl);
    divEl.appendChild(delEl);


    // delEl.onclick = () => {
    //     whenEl.removeChild(divEl);
    //     num--;
    // }

    whenEl.appendChild(divEl);
}
// const btnAddPhone = document.querySelector("#btn-phone")
// btnAddPhone.addEventListener("click", () => {
//     console.log(1);
//     const divEl = document.createElement("div");
//     divEl.classList.add("form-group");
//     const inputTelDopEl = document.createElement("input");
//     inputTelDopEl.classList.add("form-control");
//     inputTelDopEl.classList.add("fade-enter-active");
//     inputTelDopEl.placeholder = "телефон" + `${++tel}`;
//     inputTelDopEl.name = `phone-${tel}`
    
//     const delEl = document.createElement("button");
//     delEl.className = "btn btn-danger del";
    
//     const iconTrachEl = document.createElement("i");
//     iconTrachEl.className = "fa fa-trash";

//     delEl.appendChild(iconTrachEl);
//     divEl.appendChild(inputTelDopEl);
//     divEl.appendChild(delEl);

//     delEl.onclick = () => {
//         telEl.removeChild(divEl);
//         tel--;
//     }

//     telEl.appendChild(divEl)
// });

// let {address} = countForm;
// const btnAddAddres = document.querySelector("#btn-address")
// btnAddAddres.addEventListener("click", () => {
//     const divEl = document.createElement("div");
//     divEl.classList.add("form-group");

//     const inputTelDopEl = document.createElement("input");
//     inputTelDopEl.classList.add("form-control");
//     inputTelDopEl.classList.add("fade-enter-active");
//     inputTelDopEl.placeholder = "адрес" + `${++address}`;
//     inputTelDopEl.name = `address-${address}`
//     const delEl = document.createElement("button");
//     delEl.className = "btn btn-danger del";
    
//     const iconTrachEl = document.createElement("i");
//     iconTrachEl.className = "fa fa-trash";

//     delEl.appendChild(iconTrachEl);
//     divEl.appendChild(inputTelDopEl);
//     divEl.appendChild(delEl);

//     delEl.onclick = () => {
//         addressesEl.removeChild(divEl);
//         address--;
//     }

//     addressesEl.appendChild(divEl)
// });

// let {emails} = countForm;
// const btnEmail = document.querySelector("#btn-email")
// btnEmail.addEventListener("click", () => {
//     const divEl = document.createElement("div");
//     divEl.classList.add("form-group");

//     const inputTelDopEl = document.createElement("input");
//     inputTelDopEl.classList.add("form-control");
//     inputTelDopEl.classList.add("fade-enter-active");
//     inputTelDopEl.placeholder = "email" + `${++emails}`;
//     inputTelDopEl.name = `email-${emails}`
//     const delEl = document.createElement("button");
//     delEl.className = "btn btn-danger del";
    
//     const iconTrachEl = document.createElement("i");
//     iconTrachEl.className = "fa fa-trash";

//     delEl.appendChild(iconTrachEl);
//     divEl.appendChild(inputTelDopEl);
//     divEl.appendChild(delEl);

//     delEl.onclick = () => {
//         inputTelDopEl.classList.add("fade-leave-active");
//         emailsEl.removeChild(divEl);
//         emails--;
//     }

//     emailsEl.appendChild(divEl)
// });

// document.querySelector(".form-contact.add").addEventListener('submit', e => {
    
    // const contact = {
    //     id: ++nextId,
    //     phones: [],
    //     addresses: [],
    //     emails: [],
    // };

//     e.preventDefault();
//     const form = e.target;
//     var formData = new FormData(form);

//     //formData.get("surname") - выведет данные поля surname
//     for(let input of formData.entries()) {
//         if (input[0][0] == 'p') {
//             contact.phones.push(input[1])
//         }
        
//         if (input[0][0] == 'a') {
//             contact.addresses.push(input[1])
//         }
        
//         if (input[0][0] == 'e') {
//             contact.emails.push(input[1])
//         }
        
//         console.log(input[0], input[1]); //Выведет в консоль всю форму в виде "КЛЮЧ ЗНАЧЕНИЕ"
//     }
    
//     state.contacts = contact
//     contacts.push(contact);
//     console.log(contacts);
//     form.reset();
// });
