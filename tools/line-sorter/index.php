<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools']['items'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/line-sorter") {
        $webConf = [
            'pageTitle' => $tool['name'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<div class="container">
    <h1>Sort some lines</h1>
    <p>This tool allows you to sort any number of lines alphabetically or by length.</p>
    
    <div class="form textInput section">
        <textarea id="input" class="textbox" rows=12 placeholder="Type or paste your lines here..."></textarea>
    </div>

    <h2>Sort order</h2>
    <div class="form singleSel section" data-name="order">
        <button class="item selected" data-value="alphaUp">
            <div class="icon"></div>
            <div class="label">A-Z</div>
        </button>
        <button class="item" data-value="alphaDown">
            <div class="icon"></div>
            <div class="label">Z-A</div>
        </button>
        <button class="item" data-value="lengthUp">
            <div class="icon"></div>
            <div class="label">Shortest to Longest</div>
        </button>
        <button class="item" data-value="lengthDown">
            <div class="icon"></div>
            <div class="label">Longest to Shortest</div>
        </button>
    </div>

    <!-- <h3>Line offsets</h3>
    <p>These options define the start and end buffer lengths for each line.</p>
    <p>For example, if the start offset is set to 3, then we'll sort that line starting on its third character. The end offset works the same way, but starting from the end of the line.</p>
    <div class="form textInput section row no-gutters">
        <div class="col-sm-auto flexCenterVertical" style="width: 150px">
            <label>Line start offset</label>
        </div>
        <div class="col-sm-auto" style="width: 150px">
            <input id="startAt" type="number" class="textbox" value=0>
        </div>
    </div>
    <div class="form textInput section row no-gutters">
        <div class="col-sm-auto flexCenterVertical" style="width: 150px">
            <label>Line end offset</label>
        </div>
        <div class="col-sm-auto" style="width: 150px">
            <input id="endAt" type="number" class="textbox" value=0>
        </div>
    </div> -->
    
    <h2>Result</h2>
    <div class="form button section">
        <button id="copy" class="btn" disabled>Copy result</button>
    </div>
    <div class="form textInput section">
        <textarea id="output" class="textbox" rows=12 placeholder="No result" disabled></textarea>
    </div>
</div>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>