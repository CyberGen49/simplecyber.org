<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
$webConf = [
    'pageTitle' => 'Tools',
    'pageDesc' => "A growing collection of useful tools to help you out a little."
];
?>

<div class="container">
    <h1>All tools</h1>
    <p>Every tool listed here is completed and ready for use. You can also access all of these tools from the main menu (top left), but greyed out entries aren't finished yet. The menu will give you an idea of what I've got planned, though.</p>
    <div style="height: 8px"></div>
    <?php foreach ($menu['tools']['items'] as $item): ?>
        <?php if ($item['disabled']) continue ?>
        <a class="projectCard" href="<?= $item['href'] ?>">
            <h1><?= $item['name'] ?></h1>
            <p><?= $item['desc'] ?></p>
        </a>
    <?php endforeach ?>
</div>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>