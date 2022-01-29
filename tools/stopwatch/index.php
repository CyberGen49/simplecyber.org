<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/stopwatch") {
        $webConf = [
            'disqusId' => 'tool-stopwatch',
            'pageTitle' => $tool['text'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

    <h1>Keep track of elapsed time</h1>
    <p>This tool lets you keep track of elapsed time, with the added ability to log laps.</p>
    
<h1 id="result">00:00:00.000</h1>
<h1 id="lapTime" class="hidden"></h1>
<div class="form button section">
    <button id="go" class="btn">Start</button>
    <button id="reset" class="btn" disabled>Reset</button>
    <button id="lap" class="btn" disabled>Lap</button>
</div>
<div id="lapsCont" class="hidden">
    <h2>Laps</h2>
    <div id="laps"></div>
</div>

<style>
    #result, #lapTime {
        color: #fff;
        line-height: 100%;
        margin: 0px;
        margin-bottom: 10px;
        font-size: 48px;
    }
    #lapTime {
        margin-top: -5px;
        padding-left: 5px;
        font-size: 24px;
    }
    #result span {
        line-height: inherit;
    }
    .lap {
        padding-bottom: 5px;
    }
    .lapNum {
        display: flex;
        align-items: center;
    }
    .lapTimestamp {
        display: flex;
        align-items: center;
        font-family: 'Quicksand';
        font-weight: bold;
        font-size: 20px;
        color: var(--acc);
        line-height: 100%;
    }
</style>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>