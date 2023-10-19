const chapters = {
  contrat: {
    titre: "Proposition de contrat",
    description:
      "Alors que tu es en plein cours à l'école, un représentant du Real Madrid entre dans la salle. Tous les regards se tournent vers lui. Il s'approche de toi et te tend une lettre contenant un contrat professionnel avec le club.",
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
    image: "./assets/img/macdonalds.jpg",
    description:
      "Malheureusement, tu échoues lamentablement à l'école. Tu gardes un regret éternel pour avoir refusé ce contrat.",
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
      "Tu rentre à  la 2ème mi-temps. Tu fais un bon match et tu commence a prendre tes aises. Tu es complètement épuisé à la fin du match.",
    image: "./assets/img/",
    boutons: [
      {
        titre: "Prochain",
        destination: "victoire",
      },
    ],
  },
  patience: {
    titre: "Faire preuve de patience",
    description:
      "Tu as choisi d'attendre patiemment que le coach décide de te faire entrer. Il te fait rentrer a la 82ème minute. C'est le temps de leur montrer ton talent",
    image: "./assets/img/patience.jpg",
    boutons: [
      {
        titre: "Prochain match",
        destination: "victoire",
      },
    ],
  },
  victoire: {
    titre: "La Victoire",
    description:
      "Félicitations, ton équipe a remporté le match ! Tu as contribué à la victoire de l'équipe avec 1 but, et maintenant plusieurs choix s'offrent à toi. Que vas-tu faire ensuite ?",
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
    image: "./assets/img/entrainement.jpg",
    description:
      "Pour devenir un meilleur joueur, tu décides de t'engager dans un programme d'entraînement intensif. Cela nécessite un dévouement total et des heures d'efforts sur le terrain. ",
    boutons: [
      {
        titre: "Prochain match",
        destination: "matchSuiv",
      },
    ],
    twist: 1,
  },
  repos: {
    titre: "Un Repos Bien Mérité",
    image: "./assets/img/repos.jpg",
    description:
      "Après l'effort, le réconfort. Tu prends le temps de te reposer et de récupérer de l'intensité du match. Allez dormir, il y a un autre match demain.",
    boutons: [
      {
        titre: "Prochain match",
        destination: "matchSuiv",
      },
    ],
    twist: 2,
  },
  fete: {
    titre: "Fêter la Victoire",
    image: "./assets/img/fete.jpg",
    description:
      "C'est l'heure de la fête ! Tu as célébré la victoire toute la nuit. Allez dormir, il y a un autre match demain.",
    boutons: [
      {
        titre: "Prochain match",
        destination: "matchSuiv",
      },
    ],
    twist: 3,
  },
  matchSuiv: {
    titre: "Grand moment",
    description:
      "Un joueur vient de se blesser, le coach décide de te faire rentrer. Tu commences à t'échauffer.",
    image: "./assets/img/bench.jpg",
    boutons: [
      {
        titre: "remplacement",
        destination: "bravo",
      },
    ],
  },
  bravo: {
    titre: "IN-CRO-YA-BLE",
    image: "",
    description: "",
  },
  moyen: {
    titre: "Pas mal",
    image: "./assets/img/stadium.png",
    description: "",
  },
  blessure: {
    titre: "Quel dommage!",
    image: "./assets/img/stadium.png",
    description: "",
  },
};

let titreChap = document.getElementById("titre");
let textChap = document.querySelector(".text");
let imageChap = document.getElementById("logo");

let twist = 0;

function goToChapter(chapitre) {
  let obj = chapters[chapitre];

  if (obj == undefined) {
    console.log("Clé de chapitre invalide : " + chapitre);
  } else {
    titreChap.textContent = obj.titre;
    textChap.textContent = obj.description;
    imageChap.src = obj.image;

    const boutons = document.querySelector(".boutons");
    while (boutons.firstChild) {
      boutons.removeChild(boutons.firstChild);
    }

    if (obj.boutons && obj.boutons.length > 0) {
      for (let i = 0; i < obj.boutons.length; i++) {
        let nouveauBtn = document.createElement("button");
        nouveauBtn.setAttribute("id", "btn");
        nouveauBtn.textContent = obj.boutons[i].titre;
        nouveauBtn.addEventListener("click", () => {
          let chapitreActuel = obj.boutons[i].destination;
          goToChapter(chapitreActuel);
        });

        boutons.appendChild(nouveauBtn);
      }
    }

    if (chapters[chapitre].twist === 1) {
      obj.boutons[0].destination = "bravo";
    } else if (chapters[chapitre].twist === 2) {
      obj.boutons[0].destination = "moyen";
    }else if (chapters[chapitre].twist === 3) {
      obj.boutons[0].destination = "blessure";
    }
    
    
    
  }
}

goToChapter("contrat");
