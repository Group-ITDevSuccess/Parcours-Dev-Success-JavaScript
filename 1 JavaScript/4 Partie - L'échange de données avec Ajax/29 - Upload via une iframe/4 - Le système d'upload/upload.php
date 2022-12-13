<?php
    $error = NULL;
    $filename = NULL;

    if (isset($_FILES['uploadFile']) && $_FILES['uploadFile']['error'] === 0){
        $filename = $_FILES['uploadFile']['name'];
        $targetpath = getcwd(). '/'.$filename;
        // On stocke e chemin où enregistrer le fichier

        // ON déplace le fichier depuis le répertoire temporaire ves $targetpath
        if (@move_uploaded_file($_FILES['uploadFile']['tmp_name'], $targetpath)){
            // Si ça fonctionne
            $error = 'OK';
        }else{
            // Si ça ne fonctionne pas
            $error = "Echec de l'enregistrement";
        }
    }else{
        $error = "Aucun fichier récépotionné !";
    }
    // Et pour finir, on écrit l'appel vers la fonction uploadEnd:
?>

<script>
    window.top.window.uploadEnd("<?php echo $error; ?>", "<?php echo $filename; ?>");
</script>
