<?php
// Vérifie si la méthode d'envoi est bien POST (le formulaire a été soumis)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // ------------------------------------------
    // 1. DÉFINITION DE LA DESTINATION ET DU SUJET
    // ------------------------------------------
    
    // Remplacez cette adresse par VOTRE adresse email de destination
    $destinataire = "virgil.desorges@gmail.com"; 
    $sujet = "Nouveau message de contact via votre Portfolio";
    
    // ------------------------------------------
    // 2. RÉCUPÉRATION ET ASSAINISSEMENT DES DONNÉES
    // ------------------------------------------
    
    // Utilisation de htmlspecialchars pour prévenir l'injection de code (XSS)
    $nom = htmlspecialchars(trim($_POST['fname']));
    $prenom = htmlspecialchars(trim($_POST['lname']));
    $email_expediteur = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // ------------------------------------------
    // 3. CONSTRUCTION DE L'EMAIL
    // ------------------------------------------
    
    $contenu_email = "Vous avez reçu un nouveau message de contact:\n\n";
    $contenu_email .= "Nom: " . $nom . "\n";
    $contenu_email .= "Prénom: " . $prenom . "\n";
    $contenu_email .= "Email: " . $email_expediteur . "\n";
    $contenu_email .= "Message:\n" . $message . "\n";
    
    // Définition des entêtes pour garantir que l'email est bien envoyé et a un expéditeur
    $entetes = "From: " . $email_expediteur . "\r\n";
    $entetes .= "Reply-To: " . $email_expediteur . "\r\n";
    $entetes .= "X-Mailer: PHP/" . phpversion();
    
    // ------------------------------------------
    // 4. ENVOI DE L'EMAIL
    // ------------------------------------------
    
    // La fonction mail() renvoie TRUE si l'envoi est accepté, FALSE sinon
    if (mail($destinataire, $sujet, $contenu_email, $entetes)) {
        // Redirection en cas de succès (ajustez l'URL de redirection)
        header("Location: /index.html?status=success");
        exit;
    } else {
        // Redirection en cas d'échec
        header("Location: /index.html?status=error");
        exit;
    }

} else {
    // Si la page est accédée directement sans soumission du formulaire
    header("Location: /index.html");
    exit;
}
?>