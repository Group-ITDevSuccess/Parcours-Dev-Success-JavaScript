<?php

    header('Access-Control-Allow-Origin: http://exemple.com');
    //header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');

    echo $_COOKIE['cookiel']; // Aucun problème

 ?>