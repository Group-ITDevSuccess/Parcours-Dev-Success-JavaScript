<?php
    header('Content-Type: text/plain; charset=iso-8859-1');
    // On précise bien qu'il s'agit d'une page en ISO 8859-11

    // GENERE DE PROBLEME :
        //echo $_GET['parameter']; // Resultat : DrÃ´le de tÃªte

    //SOLUTION :
    echo utf8_decode($_GET['parameter']); //Resultat : Drôle de tête

 ?>