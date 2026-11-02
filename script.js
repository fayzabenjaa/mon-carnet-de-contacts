const search = document.getElementById("search");
const compteur = document.getElementById("compteur");
const liste = document.getElementById("liste");
const nom = document.getElementById("nom")
const tel = document.getElementById("tel")
const formulaire = document.getElementById("form")


let contacts = [];
let indexEdit = null;

search.addEventListener("input", ()=> {
    const recherche = search.value.toLowerCase();
    const resultats = contacts.filter((contact)=> {
        return contact.nom.toLowerCase().includes(recherche);
    })
    afficher(resultats);
})

function affichercompteur () {
    compteur.textContent = `${contacts.length} contact(s)`
}

function afficher (listeContacts = contacts) {
    liste.innerHTML = ``;
    listeContacts.forEach((contact) => {
        const index =contacts.indexOf(contact)
        const li = document.createElement("li");
        li.textContent = `${contact.nom} ${contact.tel}`;

        const deletbtn = document.createElement("button");
        deletbtn.textContent = "supprimer" ;
        deletbtn.dataset.action = "delet"
        deletbtn.dataset.index = index;

        const editbtn = document.createElement("button");
        editbtn.textContent = "modifier";
        editbtn.dataset.action = "edit"
        editbtn.dataset.index = index;

        li.append(deletbtn, editbtn);
        liste.append(li);
    })
    affichercompteur();
}

liste.addEventListener("click", (event)=> {
    if (event.target.tagName === "BUTTON") {
        const index = Number(event.target.dataset.index)
        if (event.target.dataset.action === "delet") {
            contacts.splice(index, 1);
            afficher();
        }
        if (event.target.dataset.action === "edit") {
            nom.value = contacts[index].nom;
            tel.value = contacts[index].tel;
            indexEdit = index ;
            formulaire.querySelector('button[type = "submit"]').textContent = "Modifier";
        }
    }
})

formulaire.addEventListener("submit", (event)=> {
    event.preventDefault();
    if (nom.value.trim() === "") {
        alert("Enrer un nom");
        return;
    }
    const contact = {
        nom : nom.value.trim(),
        tel : tel.value.trim()
    }
    if (indexEdit === null) {
        contacts.push(contact);
    }else {
        contacts[indexEdit] = contact;
    }
    indexEdit = null
    formulaire.querySelector('button[type = "submit"]').textContent = "+ Ajouter";
    formulaire.reset();
    afficher ();
})

afficher();