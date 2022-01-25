<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools']['items'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/between-dates") {
        $webConf = [
            'disqusId' => 'tool-betweenDates',
            'pageTitle' => $tool['name'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<h1>Compare two dates</h1>
<p>This tool will show you the amount of time between two selected dates. Everything here respects your local timezone, even if you opened a shared link.</p>

<div class="row no-gutters">
    <div class="col-sm-6 form textInput section">
        <label><h2>Date A</h2></label>
        <div class="form multiSel">
            <button id="dateNowA" class="item" data-value="1">
                <div class="icon"></div>
                <div class="label">Use current date and time</div>
            </button>
        </div>
        <div class="inputWrapper date">
            <input id="dateA" type="datetime-local" class="textbox">
        </div>
    </div>
    <div class="col-sm-6 form textInput section">
        <label><h2>Date B</h2></label>
        <div class="form multiSel">
            <button id="dateNowB" class="item" data-value="1">
                <div class="icon"></div>
                <div class="label">Use current date and time</div>
            </button>
        </div>
        <div class="inputWrapper date">
            <input id="dateB" type="datetime-local" class="textbox">
        </div>
    </div>
</div>

<h2>Result</h2>
<h1 id="result">Unknown</h1>
<div class="form button">
    <button id="copy" class="btn" disabled>Copy result</button>
</div>
<h2>Total values</h2>
<div class="row no-gutters">
    <div class="col-auto statName">Seconds</div>
    <div class="col">
        <span id="secs" class="statValue">0</span>
    </div>
</div>
<div class="row no-gutters">
    <div class="col-auto statName">Minutes</div>
    <div class="col">
        <span id="mins" class="statValue">0</span>
    </div>
</div>
<div class="row no-gutters">
    <div class="col-auto statName">Hours</div>
    <div class="col">
        <span id="hours" class="statValue">0</span>
    </div>
</div>
<div class="row no-gutters">
    <div class="col-auto statName">Days</div>
    <div class="col">
        <span id="days" class="statValue">0</span>
    </div>
</div>
<div class="row no-gutters">
    <div class="col-auto statName">Weeks</div>
    <div class="col">
        <span id="weeks" class="statValue">0</span>
    </div>
</div>
<div class="row no-gutters">
    <div class="col-auto statName">Months</div>
    <div class="col">
        <span id="months" class="statValue">0</span>
    </div>
</div>
<div class="row no-gutters">
    <div class="col-auto statName">Years</div>
    <div class="col">
        <span id="years" class="statValue">0</span>
    </div>
</div>
<div style="height: 5px"></div>
<small>Click any of these numbers to copy them.</small>

<h2>Share</h2>
<p>Copy this setup's shareable link to save your inputs for later, or to share them with someone!</p>
<div class="form button section">
    <button id="share" class="btn" disabled>Copy shareable link</button>
</div>

<style>
    #result {
        color: #fff;
        line-height: 100%;
        margin: 0px;
        margin-bottom: 10px;
        font-size: 36px;
    }
    .statName {
        width: 100px;
    }
    .statValue {
        padding: 0px 5px;
        font-family: 'Quicksand';
        font-weight: bold;
        font-size: 20px;
        color: var(--acc);
        line-height: 100%;
        user-select: none;
        transition: 0.1s ease-in-out;
        cursor: copy;
    }
    .statValue:hover {
        color: #fff;
    }
</style>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>