<?php header("Content-type: text/javascript");?>

var string = 'Bonjour <?php echo $_GET['nom'] ?> !';

receiveMessage(string);
