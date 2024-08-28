document.querySelector("#colonne").value = "question";

function filtrage(colonne) {
    const recherche = document.querySelector("#recherche").value;
    const regex = new RegExp(recherche, "gi");

    var matchTrouve = false;

    Array.from(document.querySelectorAll("tbody tr")).forEach(
        (element) => {
            const valeur = element.cells[colonne].textContent;

            const newContent = valeur.replace(regex, match => `<span class="highlight">${match}</span>`);
            element.cells[colonne].innerHTML = newContent;

            const matchFound = regex.test(valeur);
            element.style.display = matchFound ? "" : "none";

            if (matchFound) {
                matchTrouve = true;
            }
        }
    );

    const message = document.querySelector("#message");
    if (!matchTrouve) {
        message.textContent = "Aucun article trouvé.";
    } else {
        message.textContent = "";
    }
}


document.querySelector("#recherche").addEventListener("input", function(){
    const colonne = document.querySelector("#colonne").value;

    if(colonne == "article"){
        filtrage(0);
    }
    else if(colonne == "auteur"){
        filtrage(1);
    }
    else if(colonne == "genre"){
        filtrage(2);
    }
    else if(colonne == "annee"){
        filtrage(3);
    }

});

function Article(article, auteur, genre, annee){
    this.article = article;
    this.auteur = auteur;
    this.genre = genre;
    this.annee = annee;
}

const tableau = [];

Array.from(document.querySelectorAll("tbody tr")).forEach(
    (element) => {
        var articl = element.cells[0].textContent;
        var aut = element.cells[1].textContent;
        var gend = element.cells[2].textContent;
        var year = element.cells[3].textContent;

        let donnee = new Article(articl, aut, gend, year);
        tableau.push(donnee);
    }
);
