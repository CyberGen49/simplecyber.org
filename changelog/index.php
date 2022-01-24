<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
$webConf = [
    'pageTitle' => 'Changelog',
    'pageDesc' => "Keep track of everything that's changing with simplecyber.org!"
];
?>

<div data-content-markdown="../Changelog.md"></div>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>