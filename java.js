const chapters = {
  contrat: {
    titre: "Proposition de contrat",
    description:
      "Alors que tu es en plein cours à l'école, un représentant du Real Madrid entre dans la salle. Tous les regards se tournent vers lui. Il s'approche de toi et te tends une lettre qui contient un contrat professionnel avec le club.",
    image: "./assets/img/contract.jpg",
    boutons: [
      {
        titre: "Accepter le contrat",
        destination: "match",
      },
      {
        titre: "Décliner et poursuivre tes études.",
        destination: "mcdo",
      },
    ],
  },
  mcdo: {
    titre: "Echec",
    image: "./assets/img/stadium.png",
    description:
      "Malheureusement rien tu echoue lamentablement a lecole. Tu garde un regret eternel pour avoir refuser ce contrat",
      boutons: [],
    },
 
  match: {
    titre: "Premier match",
    description:
      "Après avoir choisi de rejoindre le Real Madrid, tu te retrouves sur le banc des remplaçants lors de ton premier match. Le match est intense, mais l'entraîneur ne t'a pas encore fait entrer.",
    image: "./assets/img/bench_starter.jpg",
    boutons: [
      {
        titre: "Demander au coach de te faire rentrer sur le terrain.",
        destination: "confiance",
      },
      {
        titre:
          "Attendre patiemment que le coach décide de te faire entrer de lui-même.",
        destination: "patience",
      },
    ],
  },

  confiance: {
    titre: "Gagner la confiance de tous",
    description:
      "En demandant au coach de te faire entrer, tu as montré ton désir de jouer. Maintenant, tu dois faire tes preuves sur le terrain pour gagner la confiance de l'entraîneur et de l'équipe.",
    image: "./assets/img/coach.jpg",
    boutons: [
      {
        titre: "Travailler dur et viser la victoire.",
        destination: "victoire",
      },
    ],
  },
  patience: {
    titre: "Faire preuve de patience",
    description:
      "Tu as choisi d'attendre patiemment que le coach décide de te faire entrer. Cela peut être difficile, mais tu dois rester concentré et prêt à saisir l'opportunité quand elle se présentera.",
    image: "./assets/img/bench.jpg",
    boutons: [
      {
        titre: "Continuer à attendre",
        destination: "victoire",
      },
    ],
  },
  victoire: {
    titre: "La Victoire",
    description:
      "Félicitations, ton équipe a remporté le match ! Tu as contribué à la victoire de l'équipe avec 1 but, et maintenant tu as plusieurs choix à faire. Que vas-tu faire ensuite ?",
    image: "./assets/img/victoire.jpg",
    boutons: [
      {
        titre: "S'entraîner pour s'améliorer davantage.",
        destination: "entrainement",
      },
      {
        titre: "Prendre un peu de repos pour récupérer.",
        destination: "repos",
      },
      {
        titre: "Célébrer la victoire avec l'équipe.",
        destination: "fete",
      },
    ],
  },
  entrainement: {
    titre: "Entraînement Intensif",
    description:
      "Pour devenir un meilleur joueur, tu décides de t'engager dans un programme d'entraînement intensif. Cela nécessite un dévouement total et des heures d'efforts sur le terrain. Le stade entier est impressionné par ton niveau de jeu.",
  },
  repos: {
    titre: "Un Repos Bien Mérité",
    description:
      "Après l'effort, le réconfort. Tu prends du temps pour te reposer et récupérer de l'intensité du match. Le match suivant, tu as fait preuve d'un niveau correct, tu es presque le nouveau titulaire de ton poste.",
  },
  fete: {
    titre: "Fêter la Victoire",
    description:
      "C'est l'heure de la fête ! Tu a célèbré la victoire toute la nuit. Le match suivant, tu était trop épuisé pour pouvoir montret un bon niveau de jeu. Le coach te remplace après 10 minutes de jeu. Ton parcours dans cette nouvelle équipe semble compromis.",
  },
};

let titreChap = document.querySelectorAll(".titre");
let textChap = document.querySelector(".text");
let imageChap = document.getElementById("logo");
let chapitreActuel = "contrat";

goToChapter(chapitreActuel);

function goToChapter(chapitre) {
  let obj = chapters[chapitre];
  if (obj == undefined) {
    console.log("Clé de chapitre invalide : " + chapitre);
  } else {
    console.log(obj.titre + "\n" + obj.description);
    titreChap.textContent = obj.titre;
    textChap.textContent = obj.description;
    imageChap.src = obj.image;
    //efffacer les btns
    if (obj.boutons && obj.boutons.length > 0) {
      const boutons = document.querySelector('.boutons');
      while (boutons.firstChild) {
        boutons.removeChild(boutons.firstChild);
      }
        //creer btn et ajouter le text
      for (let i = 0; i < obj.boutons.length; i++) {
        let nouveauBtn = document.createElement('button');
        nouveauBtn.setAttribute("id", "btn");
        nouveauBtn.textContent = obj.boutons[i].titre;
        nouveauBtn.addEventListener('click', () => {
          chapitreActuel = obj.boutons[i].destination;
          goToChapter(chapitreActuel);
        });
        boutons.appendChild(nouveauBtn);
      }
    }
  }
}
