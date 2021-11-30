<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools']['items'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/text-analysis") {
        $webConf = [
            'pageTitle' => $tool['name'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<div class="container">
    <h1>Analyze some text</h1>
    <p>This tool allows you to view a bunch of stats about any text you input, including character, word, and line counts, along with the frequency of each word and character.</p>

    <div class="form textInput section">
        <textarea id="input" class="textbox" rows=12 placeholder="Type or paste text here..."></textarea>
    </div>

    <h2>Counts</h2>
    <div class="row no-gutters">
        <p class="col-sm-auto">
            Characters: <span id="charCount" class="statValue">0</span>
            <br>Characters (no spaces): <span id="charCountAlt" class="statValue">0</span>
        </p>
        <div class="col-auto spacer"></div>
        <p class="col-sm-auto">Words: <span class="statValue" id="wordCount">0</span></p>
        <div class="col-auto spacer"></div>
        <p class="col-sm-auto">Lines: <span class="statValue" id="lineCount">0</span></p>
    </div>

    <h2>Distribution</h2>
    <p>These sections contain the frequency of every word and character in the text. Hover over the count for any entry to view the percentage of the total text that it occupies.</p>
    <div class="row no-gutters">
        <div class="col-sm">
            <h3>Characters</h3>
            <div id="charFreq">...</div>
        </div>
        <div class="col-auto spacer"></div>
        <div class="col-sm">
            <h3>Words</h3>
            <div id="wordFreq">...</div>
        </div>
    </div>
</div>

<style>
    .statValue {
        padding: 0px 5px;
        font-family: 'Quicksand';
        font-weight: bold;
        font-size: 20px;
        color: #E4BAF8;
        line-height: 100%;
    }
</style>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>