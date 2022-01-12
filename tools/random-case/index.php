<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools']['items'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/random-case") {
        $webConf = [
            'pageTitle' => $tool['name'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<div class="container">
    <h1>Convert text to random case</h1>
    <p>This tool will randomize the case of any text you input.</p>
    
    <div class="form textInput section">
        <textarea id="input" class="textbox" rows=12 placeholder="Type or paste your lines here..."></textarea>
    </div>
    
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