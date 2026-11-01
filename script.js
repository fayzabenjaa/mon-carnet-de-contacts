const { createElement } = require("react");

const search = document.getElementById("search");
const compteur = document.getElementById("compteur");
const liste = document.getElementById("liste");
const nom = document.getElementById("nom")
const tel = document.getElementById("tel")
const formulaire = document.getElementById("form")

let contacts = [];

function afficher () {
    liste.innerHTML = ``;
    contacts.forEach((contact) => {
        const li = document.createElement("li");
        li.textContent = `${contact.nom} ${contact.tel}`;
        const deletbtn = document.createElement("button");
        deletbtn.textContent = "supprimer" ;
        deletbtn.dataset.index = index;

        li.append(deletbtn);
        liste.append(li);
    })
}

formulaire.addEventListener("submit", (event)=> {
    event.preventDefault();
    if (nom.value.trim() === "") {
        alert("Enrer un nom");
        return;
    }
    const contact = {
        nom : nom.value.trim(),
        number : tel.value.trim()
    }
    contacts.push(contact);
    formulaire.reset();
    afficher ();
})

afficher();