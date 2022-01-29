<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/line-sorter") {
        $webConf = [
            'disqusId' => 'tool-lineSorter',
            'pageTitle' => $tool['text'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<h1>Sort some lines</h1>
<p>This tool will sort any number of lines alphabetically or by length.</p>

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
    <button class="item" data-value="shuffle">
        <div class="icon"></div>
        <div class="label">Shuffle</div>
    </button>
</div>

<h2>Result</h2>
<div class="form button section">
    <button id="copy" class="btn" disabled>Copy result</button>
</div>
<div class="form textInput section">
    <textarea id="output" class="textbox" rows=12 placeholder="No result" disabled></textarea>
</div>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>