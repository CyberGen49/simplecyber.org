<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
$webConf = [
    'pageTitle' => 'Tools',
    'pageDesc' => "A growing collection of useful tools to make your life easier."
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

    <h2>Test form elements</h2>
    <div class="form singleSel section" data-name="testSingle">
        <label>Test single-select buttons</label>
        <button class="item" data-value="1">
            <div class="icon"></div>
            <div class="label">Default item 1</div>
        </button>
        <button class="item selected" data-value="2">
            <div class="icon"></div>
            <div class="label">Selected item 2</div>
        </button>
        <button class="item disabled">
            <div class="icon"></div>
            <div class="label">Disabled item 3</div>
        </button>
    </div>

    <div class="form multiSel section" data-name="testMulti">
        <label>Test multi-select buttons</label>
        <button class="item" data-value="1">
            <div class="icon"></div>
            <div class="label">Default item 1</div>
        </button>
        <button class="item selected" data-value="2">
            <div class="icon"></div>
            <div class="label">Selected item 2</div>
        </button>
        <button class="item disabled">
            <div class="icon"></div>
            <div class="label">Disabled item 3</div>
        </button>
    </div>

    <div class="form textInput section" data-name="testText">
        <label>Test text boxes</label>
        <input type="text" class="textbox" value="Default text input">
        <textarea class="textbox" rows=3>Default textarea</textarea>
        <input type="text" class="textbox" disabled value="Disabled text input">
    </div>

    <div class="form button section">
        <label>Test buttons</label>
        <button class="btn">Default button</button>
        <button class="btn" disabled>Disabled button</button>
    </div>

    <div class="row no-gutters" style="width: 100%">
        <div class="col-6 form textInput section">
            <label>Date A</label>
            <input type="date" class="textbox">
            <div class="flexBreak"></div>
            <input type="time" class="textbox">
        </div>
        <div class="col-6 form textInput section">
            <label>Date B</label>
            <input type="date" class="textbox">
            <div class="flexBreak"></div>
            <input type="time" class="textbox">
        </div>
    </div>
</div>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>