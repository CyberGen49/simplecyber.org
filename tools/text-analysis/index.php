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
    <p>This tool will allow you to view a bunch of stats about any text you input, including character, word, and line counts, along with the frequency of each word and character.</p>
    <p>The simple counters will automatically update, but you'll need to hit the <b>Update</b> button under the character and word frequency sections.</p>

    <h2>Input</h2>
    <div class="form textInput section">
        <textarea id="input" class="textbox" rows=8 placeholder="Type or paste text here..."></textarea>
    </div>

    <h2>Counts</h2>
    <div class="row no-gutters">
        <div class="col-sm-auto">
            Characters: <span id="charCount" class="statValue">0</span>
            <br>Characters without spaces: <span id="charCountAlt" class="statValue">0</span>
        </div>
        <div class="col-auto spacer"></div>
        <div class="col-sm-auto">Words: <span class="statValue" id="wordCount">0</span></div>
        <div class="col-auto spacer"></div>
        <div class="col-sm-auto">Lines: <span class="statValue" id="lineCount">0</span></div>
    </div>
</div>
<style>
    .statValue {
        padding-left: 5px;
        font-family: 'Quicksand';
        font-weight: bold;
        font-size: 20px;
        color: #E4BAF8;
    }
</style>
<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>