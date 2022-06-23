<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
$webConf = [
    'pageTitle' => $_GET['error']
];
?>

<h1>Uh oh!</h1>
<p><?php
    switch ($_GET['error']) {
        case 403:
            print("You aren't allowed to access that resource.");
            break;
        case 404:
            print("The resource you tried to access doesn't exist.");
            break;
        default:
            print("Something went wrong, but we aren't sure what.");
            break;
    }
?></p>
<div class="form button">
    <a class="btn" href="/">Go home</a>
</div>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>