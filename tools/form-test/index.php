<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
$webConf = [
    'pageTitle' => 'Test Form Elements'
];
?>

<div class="container">
    <h1>Test form elements</h2>
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

    <div class="form textInput section" data-name="testDropdown">
        <label>Test dropdown</label>
        <div class="inputWrapper dropdown">
            <select class="textbox">
                <option selected disabled value="">Default dropdown</option>
                <option>Option A</option>
                <option>Option B</option>
                <option>Option C</option>
            </select>
        </div>
    </div>

    <div class="row no-gutters" style="width: 100%">
        <div class="col-6 form textInput section">
            <label>Date A</label>
            <div class="inputWrapper date">
                <input type="date" class="textbox">
            </div>
            <div class="flexBreak"></div>
            <div class="inputWrapper time">
                <input type="time" class="textbox">
            </div>
        </div>
        <div class="col-6 form textInput section">
            <label>Date B</label>
            <div class="inputWrapper date">
                <input type="date" class="textbox">
            </div>
            <div class="flexBreak"></div>
            <div class="inputWrapper time">
                <input type="time" class="textbox">
            </div>
        </div>
    </div>

    <div class="form button section">
        <label>Test buttons</label>
        <button class="btn">Default button</button>
        <button class="btn" disabled>Disabled button</button>
    </div>
</div>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>