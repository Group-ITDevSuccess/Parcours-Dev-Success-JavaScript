/*
   * "num2Letters" se lit "number to letters", le "2" est un abréviation souvent utilisée en programmation
   * Notre fonction qui s'occupera de la conversion du nombre.
        Elle possede un argument lui permettant de recevoir les nombre en question.
*/

function numb2Letters(number){

    if(isNaN(number) || number < 0 || number > 999){
        /*
            * Si l'argument n'est pas un nombre (isNaN) , ou si le nombre est inférieur à 0 , ou s'il est supérieur à 999.
            * Alors on retourne un message d'avertissement.
         */
        return "Veuillez entrer un nombre entier entre 0 et 999";
    }

    /*
        * Ci-dessous on déclare deux tableaux contenant les nombres en toutes lettres, un tableau pour les unités et
            un autre pour les dizaines.
        * Le tableau des unités va du chiffre 1 à 19 afin de simplifier quelques opérations lors de la conversion
            du nombre en lettres.
        * Vous comprendrer ce système par la suite.

     */

    var units2Letters = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept',
        'huit', 'neuf', 'six', 'onze', 'douze', 'treize', 'quatorze', 'quinze',
        'seize', 'dix-sept', 'dix-huit', 'dix-neuf'
    ], tens2Letters = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante',
        'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

    /*
        * Ci-dessous on calcule d'unités, de dizaines et de centaines à l'aide du modulo.
        * Le principe est simple :  si on prend 365 % 10 on obtient le reste de la divisin par 10 qui est : 5.
            (VOILA les Unités).
        * Ensuite, sur 365 % 100, on obtien 65, on soustrait les unités à ce nombre 65 - 5 = 60, et on divise par 10
            pour obtenir 6. (VOILA les Dizaines).
        * Le principe est le même pour les centaines sauf qu'on ne soustrait pas seulement les unités mais aussi les dizaines.
     */

    var units = number % 10,
        tens = (number % 100 - units)/10,
        hundreds = ((number % 1000) - (number % 100))/100;

    /*
        * Et enfin on crée les trois variables qui contiendront les unités, les dizaines et les centaines en toutes lettres.
     */

    var unitsOut, tensOut, hundredsOut;

    if(number === 0){
        /*
            * Tout simplement ! Si le nombre vaut " 0 " alors on retourne " zero ", normal !
         */

        return 'zéro';
    }else{
        // Traitement des unités
        /*
            * Si " number " est différent de " 0 " alors on lance la conversion complète du nombre.
            *  Ci-dessous on calcule les unités. La dernière partie du code (après le +) ne doit normalement
            pas vous poser de problème. Mais pour la condition ternaire je pense que vous voyer assez peu son utilité.
            En fait, elle va permettre d'ajouter "et -" à l'unité quand cette dernière vaudra 1 et que le dizaines seront
            supérieur à 0 et différentes de 8. Pourquoi ? Tout simplement parce qu'on ne dit pas "vingt-un" mais "vingt-et-un"
            , cette règle s'applique à tout les dizaines sauf à "quatre-vingt-un" (d'où le "tens !==8").
         */
        unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '')+units2Letters[units];

        /*
            La condition qui suit se charge de convertir les nombre allant de 11 à 19.
            Pourquoi cette tranche de nombre ?
            Parce qu'ils ne peuvent pas de décomposer (essayer de décomposer en toutes lettre le nombre "treize",
            vous nous en direz des nouvelles), ils nécessitent donc d'être mis un peu à part. Bref, leur conversion
            en lettres s'effectue donc dans la partie concernant les dizaines. Ainsi, on va se retrouver avec ,
            par exemple,
                " tensOut = 'treize'; " donc au final, on va effacer la variable "unitsOut" vu qu'elle ne servira a rien.
         */
        // Traitement des dizaines
        if(tens === 1 && units > 0){
            tensOut = units2Letters[10+units];
            /*
                Avec " 10 + units", on obtient le nombre souhaité entre 11 et  19
             */
            unitsOut = ''; // Cette variable ne sert plus a rien, on la vide .
        }
        /*
            La codition suivante va s'occuper des dizaines égales à 7 ou 9. Pourquoi ?
            Et bien un peu pour la même raison que la precedente condition : on retrouve
            les nombres allant de 11  à 19. En effet, on dit bien " soixante-treize" et "quatre-vingth-treize" et nom pas
            "  soixante-dix-trois" ou autre bêtise du genre. Bref, cette condition est donc chargée, elle aussi,
            de convertir les dizaines et les unitées. Elle est aussi charger d'ajouter la conjonction "et-"
            si l'unité vaut 1, car on dit " soixante-et-onze", et non pas "soixante-onze".
         */
        else if(tens === 7 || tens === 9){
            tensOut = tens2Letters[tens]+'-'+(tens === 7 && units === 1 ? 'et-' : '')+units2Letters[10+units];
            unitsOut = ''; // Cette variable ne sert plus à rien ici non plus, on la vide.
        }
        /*
            Et enfin le condition " else " s'occpe des dizaines qu'on peut qualifier de "normales".
         */
        else {
            tensOut = tens2Letters[tens];
        }
        /*
            Dernière étape, "quatre-vingt" sans unité prend un " s " à la fin : "quatre-vingts"
         */
        tensOut += (units === 0 && tens === 8 ? 's' : '');

        /*
            La conversion des centaines se fait en une ligne et trois ternaires. Ces trois ternaires se chargent
            d'afficher un chiffre si necessaire avant d'ecrire "cent" (exemple: "trois-cents"), d'afficher ou non la chaine
            " cent " (s'il n'y a pas de centaines, on ne l'affiche pas, normal), et enfin d'ajouter un " s " à la chaine
            " cent " s'il n'y a ni dizaines,ni unités et que les centaines son supérieur à 1.
         */
        // Traitement des centaines
        hundredsOut = (hundreds > 1 ? units2Letters[hundreds]+'-' : '')+(hundreds > 0 ? 'cent': '')+
            (hundreds > 1 && tens ==0 && units == 0 ? 's': '');

        // Retour du total
        /*
            Cette ligne de code retourne les valeurs converties en les concaténant les unes aux autres avec un tiret.
            Pourquoi y a-t-il besoin de ternaires ? Parse que si l'on n'en met pas, alors on risque de retourner des
            valeurs du genre "-quatre-vingt-" juste parce qu'il n'y avait pas de centaines et d'unités.
         */

        return hundredsOut + (hundredsOut && tensOut ? '-': '')+tensOut
            + (hundredsOut && unitsOut || tensOut && unitsOut ? '-':'')+unitsOut;
    }
}

var userEntry; // Contient le texte entré par l'utilisateur

/*
    * Dans la condition de la boucle, on stocke le texte de l'utilisateur dans la variables "userEntry"
    * Ce qui fait que si l'utilisateur n'a rien entré (valeur nulle, donc équivalente à false) la condition ne sera pas validée
    * Donc la boucle while ne s'excuter pas et dans le cas contraire la boucle s'exécutera.
 */
while (userEntry =  prompt('Entrer un nombre : ')){

    /*
        *On "parse" (en base 10) la chaîne de caractères de l'utilisateur pour l'envoyer ensuite à notre fonction de conversion
            qui renverra le resultat à la focntion alert().
     */
    alert(numb2Letters(parseInt(userEntry, 10)));
}