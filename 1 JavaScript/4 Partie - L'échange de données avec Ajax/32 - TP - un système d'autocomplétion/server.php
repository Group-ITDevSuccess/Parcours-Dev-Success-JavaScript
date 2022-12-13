<?php
    $data = unserialize(file_get_contents('towns.txt'));
    // Récupération de la liste complet des villes
    $dataLen = count($data);

    sort($data); // On trie les villes dans l'ordre alphabétique

    $results = array(); // Letableau où seront stocké les résultats de la recherche

/*
 * Le boucle ci-dessous parcourt tout le tableau $data, jusqu'à un maximum de 10 resultats
 */

for ($i = 0; $i < $dataLen && count($results) < 10; $i++){
    if (stripos($data[$i], $_GET['s']) === 0){
        // Si la valeur commence par le mêmes carctère s que la recherche

        array_push($results, $data[$i]);
        // On ajoute le resultat à la liste à rétourner
    }
}

echo implode('|', $results);
// Et on affiche les resultats séparés par une barre vertivale
?>
