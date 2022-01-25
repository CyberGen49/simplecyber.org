<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools']['items'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/rng") {
        $webConf = [
            'disqusId' => 'tool-rng',
            'pageTitle' => $tool['name'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<h1>Generate a random number</h1>
<p>This tool will generate a random number between two numbers of your choosing.</p>

<div class="row no-gutters">
    <div class="col-sm-3">
        <div class="form textInput section">
            <label>Min</label>
            <input id="min" type="number" class="textbox" value="1">
        </div>
        <div class="form textInput section">
            <label>Max</label>
            <input id="max" type="number" class="textbox" value="10">
        </div>
        <div class="form multiSel">
            <button id="addCommas" class="item">
                <div class="icon"></div>
                <div class="label">Add commas</div>
            </button>
        </div>
        <div class="form button section">
            <button id="go" class="btn">Generate</button>
        </div>
    </div>
    <div class="col-auto spacer"></div>
    <div id="resultCont" class="col-sm">
        <div>
            <p>Result</p>
            <h1 id="result">1</h1>
            <div class="form button section">
                <button id="copy" class="btn">Copy number</button>
            </div>
        </div>
    </div>
</div>

<style>
    #resultCont {
        display: flex;
        align-items: center;
    }
    #resultCont p {
        padding: 0px;
        margin: 0px;
    }

    #result {
        color: #fff;
        line-height: 100%;
        margin: 0px;
        margin-bottom: 10px;
        font-size: 65px;
    }
</style>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>