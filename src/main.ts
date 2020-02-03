import $ from 'jquery';

// Modèle

// // L'astuce consiste à donner à chaque élément de l'énumération une valeur correspondant
// // à un nom de classe CSS
// enum Mode {
//     DAY_MODE = 'dayMode',
//     NIGHT_MODE = 'nightMode',
//     PINK_MODE = 'pinkMode',
//     BLUE_MODE = 'blueMode',
// }

// // State, représente l'état courant de l'application.
// let currentMode: Mode = Mode.DAY_MODE;

// // Déclaration des évènements
// $('#switch-mode-button').on('click', function () {

//     let newMode = currentMode === Mode.DAY_MODE
//         ? Mode.NIGHT_MODE
//         : Mode.DAY_MODE
        
//         $('body')
//             .removeClass()
//             .addClass(newMode);

//         // On garde en mémoire le mode qu'on vient d'appliquer
//         currentMode = newMode;   
// });

// // Au démarrage du script, on vient appliquer la classe par défaut au body.
// // Cette classe correspond à la valeur initiale de currentMode, définie plus haut.
// $('body').addClass(currentMode);


// let currentMode : Mode = Mode.DAY_MODE;
// let valeur = 1

// function getRandomArbitrary() {
//     valeur = Math.floor(Math.random()*4);
// }   

// $('#roulette').on('click', function () {
//     getRandomArbitrary();
        
//     if (valeur === 1) {
//         $('body')
//     .removeClass()
//     .addClass(Mode.DAY_MODE)
//     currentMode = Mode.DAY_MODE;
//     }

//     else if (valeur === 2 ) {
//         $('body')
//     .removeClass()
//     .addClass(Mode.NIGHT_MODE)
//     currentMode = Mode.NIGHT_MODE;
//     }

//     else if (valeur === 3) {
//         $('body')
//     .removeClass()
//     .addClass(Mode.PINK_MODE)
//     currentMode = Mode.PINK_MODE;
//     }

//     else {
//         $('body')
//     .removeClass()
//     .addClass(Mode.BLUE_MODE)
//     currentMode = Mode.BLUE_MODE;
//     }
     
//  });

// $('#moins').on('click', function () {
//    $('#compteur').text(--valeur)
//  lumiere(valeur)        
// })

// $('#plus').on('click', function () {
//     $('#compteur').text(++valeur)
//      lumiere(valeur)
// })

// $('#reset').on('click', function () {
//     $('#compteur').text(0)
//     valeur = 0
//     lumiere(valeur)
   
// })

// function lumiere(valeur) {
// if (valeur%2 === 0 ){
//     $('body')
//     .removeClass()
//     .addClass(Mode.DAY_MODE)
//     currentMode = Mode.DAY_MODE;
// }

// else {
//     $('body')
//     .removeClass()
//     .addClass(Mode.NIGHT_MODE)
//     currentMode = Mode.NIGHT_MODE;
// }
// }

// $('#compteur').text(valeur)

// $('body').addClass(currentMode);

// --------------------correction exo random change CCS----------------

// const classes = ['dayMode','nightMode','pinkMode','blueMode'];

// function getRandomArbitrary(): string {
//     const index = Math.floor(Math.random()*(classes.length));
//     return classes[index];
// }

// $('#roulette').on('click', function(){
//     const newClass = getRandomArbitrary();
//         $('body')
//             .removeClass()
//             .addClass(newClass);     
// })


// ---------------------Chifoumi----------------------------
const classes = ['pierre', 'feuille', 'ciseaux'];
let index = ''
let scoreIa = 0
let scoreJ = 0
let gagnant = ''
let historique: string[] = []
// let coup = 1

function ia(): string {
    let index = Math.floor(Math.random()*(classes.length));
    return classes[index];

}
$("#restart" ).click(function() {
    $("#resultat").text('')
    $("#scoreJ").text(0)
    scoreJ = 0
    $("#scoreIa").text(0)
    scoreIa = 0
    $("#historique").empty()
    $("#gagnant").empty()
})

    $('#pierre').on('click', function(){
        if (scoreJ <5 && scoreIa <5) {
        ia()
        
        const newClass = ia()
                
        if (newClass === 'pierre') {
            $('#resultat').text("Egalité")  
             $( "<div>Vous avez joué pierre, et l'IA aussi. Egalité</div>" ).appendTo('#historique')
             
           
        }
        else if (newClass === 'feuille') {
            $('#resultat').text("Perdu !")
            $('#scoreIa').text(++scoreIa)
            $( "<div>Vous avez joué pierre, et l'IA feuille. Perdu</div>" ).appendTo('#historique')
            
            
        }
        else if (newClass === 'ciseaux') {
            $('#resultat').text("Gagné !")
            $('#scoreJ').text(++scoreJ)
            $("<div>Vous avez joué pierre, et l'IA ciseaux. Gagné !</div>").appendTo("#historique")
            
            
        }
        Gagnant()
        ++coup
    }})

$('#feuille').on('click', function(){
    if (scoreJ <5 && scoreIa <5) {
    ia()
    
    const newClass = ia()
            
    if (newClass === 'pierre') {
        $('#resultat').text("Gagné !")
        $('#scoreJ').text(++scoreJ)  
        $( "<div>Vous avez joué feuille, et l'IA pierre. Gagné !</div>" ).appendTo('#historique')
    }
    else if (newClass === 'feuille') {
        $('#resultat').text("Egalité")  
        $( "<div>Vous avez joué feuille, et l'IA aussi. Egalité</div>" ).appendTo('#historique')
    
    }
    else if (newClass === 'ciseaux') {
        $('#resultat').text("Perdu !")
        $('#scoreIa').text(++scoreIa) 
        $( "<div>Vous avez joué feuille, et l'IA ciseaux. Perdu</div>" ).appendTo('#historique')
    }
    Gagnant();
}})

$('#ciseaux').on('click', function(){
    if (scoreJ <5 && scoreIa < 5) {
    ia()
    
    const newClass = ia()
            
    if (newClass === 'pierre') {
        $('#resultat').text("Perdu !")
        $('#scoreIa').text(++scoreIa) 
        $( "<div>Vous avez joué ciseaux, et l'IA pierre. Perdu</div>" ).appendTo('#historique')
    }
    else if (newClass === 'feuille') {
        $('#resultat').text("Gagné !")
        $('#scoreJ').text(++scoreJ) 
        $( "<div>Vous avez joué ciseaux, et l'IA feuille. Gagné !</div>" ).appendTo('#historique')
    
    }
    else if (newClass === 'ciseaux') {
        $('#resultat').text("Egalité !")
        $( "<div>Vous avez joué ciseaux, et l'IA aussi. Egalité</div>" ).appendTo('#historique')
      
    }
    Gagnant();
}})

function Gagnant(){
if (scoreJ === 5) {
    $('#gagnant').text('Vous avez gagné la partie !!!! Bravo !')
    
}
else if (scoreIa === 5) {
    $('#gagnant').text('Vous avez perdu la partie !!!! Looser !')
} 
}

// function affichage() {
//     if(coup>=3) {
//         $("#coup").empty()
//     }
// }


// -----------------tentative Chifoumi fonction math----------------

// let tableau = [
//     ['pierre', 'feuille', 'ciseaux'],
//     ['pierre', 'feuille', 'ciseaux'],
// ]

// let index = ''
// let N = ''
// let resultat = ''
// let scoreJ = ''
// let scoreIa = ''

// function ia(): string {
//          let index = Math.floor(Math.random()*(classes.length));
//          return classes[index];
// }

// function combat() {
//     tableau[j][i]-tableau[I][i] = N
// }

// function calcul() {
//     if (N=0) {
//         resultat = 'E'
//     }
//     else if (N=-1) {
//         resultat = 'L'
//     }
//     else if (N=-2) {
//         resultat = 'V'
//     }
//     else if (N=1) {
//         resultat = 'V'
//     }
//     else if (N=2) {
//         resultat = 'L'
//     }
// }

// function toto() {
//     if (resultat = 'E') {
//         $('#resultat').text("Egalité !")
//     }

//     else if (resultat = "V") {
//         $('#resultat').text("Gagné !")
//         $('#scoreJ').text(++scoreJ)
//     }
//     else if (resultat ='L') {
//         $('#resultat').text("Perdu !")
//         $('#scoreIa').text(++scoreIa)
//     }