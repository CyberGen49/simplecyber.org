<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools']['items'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/metronome") {
        $webConf = [
            'pageTitle' => $tool['name'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<div class="container">
    <h1>Listen to a metronome</h1>
    <p>This tool will play a metronome at any tempo. You can also change the number of beats per bar if your music uses a different time signature.</p>
    <p>Press <b>Space</b> or <b>P</b> to quickly play/pause the metronome, and press <b>T</b> to the beat of a song to find its tempo. If you're on mobile, tap the button below the BPM textbox instead. The longer you tap, the more accurate the reading will become.</p>

    <div class="row no-gutters">
        <div class="col-auto flexCenterVertical">
            <button id="playPause">play_arrow</button>
        </div>
        <div class="col flexCenterVertical">
            <div>
                <h1 id="bigTempoCont">
                    <span id="bigTempo">120</span>BPM
                </h1>
                <div id="beatIndicators">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    </div>
    
    <h2>Settings</h2>
    <div class="row no-gutters">
        <div class="col-sm-4">
            <div class="form textInput">
                <label>Tempo (BPM)</label>
                <input id="tempo" type="number" class="textbox" value="120" placeholder=120>
            </div>
            <div class="form button section">
                <button id="tapper" class="btn">Tap here or press T to the beat of a song to find its tempo</button>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="form textInput section">
                <label>Beats per bar</label>
                <input id="beatCount" type="number" class="textbox" value="4" placeholder=4>
            </div>
        </div>
    </div>
</div>

<style>
    #playPause {
        width: 64px;
        height: 64px;
        margin-right: 20px;
        border-radius: 32px;
        background: #E4BAF8;
        box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.2);
        border: none;
        outline: none;
        font-family: "Material Icons";
        font-size: 48px;
        color: #292a2e;
        line-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        transition: 0.1s ease-in-out;
    }
    #playPause:hover, #playPause:focus {
        background: #fff;
    }
    #playPause:disabled {
        color: rgba(255, 255, 255, 0.5);
        background: #292a2e;
        box-shadow: none;
    }

    #bigTempoCont {
        color: #fff;
        line-height: 100%;
        margin: 0px;
        padding: 0px;
        font-size: 24px;
        user-select: none;
    }
    #bigTempo {
        line-height: 100%;
        font-family: inherit;
        font-size: 65px;
        padding: 0px;
        padding-right: 8px;
    }

    #beatIndicators {
        display: flex;
        flex-wrap: wrap;
        margin-top: 5px;
        margin-left: -5px;
    }
    #beatIndicators .circle {
        width: 22px;
        height: 22px;
        margin: 6px 8px;
        border-radius: 100px;
        background: #292a2e;
        transition: 0.1s ease-in-out;
    }
    #beatIndicators .circle.active {
        background: #E4BAF8;
        transition: none;
    }

    #tapper.active {
        background: #fff;
        transition: none;
    }
</style>

<script src="/assets/zounds.min.js"></script>
<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>