<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
$webConf = [
    'disqusId' => 'createMinecraftServer',
    'pageTitle' => 'How to Create a Minecraft Java Edition Server',
    'pageDesc' => "Learn how to create your own Minecraft Java Edition server from home using nothing more than your computer."
];
?>

<div data-content-markdown="./article.md"></div>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>