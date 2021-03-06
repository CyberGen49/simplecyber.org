<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/random-item") {
        $webConf = [
            'disqusId' => 'tool-randomItem',
            'pageTitle' => $tool['text'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<h1>Pick a random item</h1>
<p>This tool will pick a random item from a list of choices you provide.</p>

<div class="form textInput section">
    <textarea id="items" class="textbox" rows=12 placeholder="Enter each item on its own line."></textarea>
</div>
<div class="form button section">
    <button id="go" class="btn" disabled>Pick item</button>
</div>

<h2>Result</h2>
<p id="resultPlaceholder">Enter some items and hit the Choose button to get your random choice!</p>
<div id="resultContainer" class="hidden">
    <h1 id="result"></h1>
    <div class="form button section">
        <button id="copy" class="btn" disabled>Copy choice</button>
    </div>
</div>

<style>
    #result {
        color: #fff;
        line-height: 100%;
        margin: 0px;
        margin-bottom: 10px;
        font-size: 36px;
    }
</style>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>