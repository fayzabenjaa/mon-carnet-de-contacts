const search = document.getElementById("search");
const compteur = document.getElementById("compteur");
const liste = document.getElementById("liste");
const nom = document.getElementById("nom")
const tel = document.getElementById("tel")

let contacts = [];

function afficher () {
    liste.innerHTML = ``;
    contacts.forEach((contact) => {
        const li = createElement("li");
        li.textContent = `${contact.nom} ${contact.tel}`;
        liste.append(li);
    })
}
afficher ();