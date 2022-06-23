<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/base64") {
        $webConf = [
            'disqusId' => 'tool-base64',
            'pageTitle' => $tool['text'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<h1>Convert to and from base64</h1>
<p>This tool will automatically convert plain text input to base64, or base64 input to plain text.</p>

<h2>Plain text</h2>
<div class="form button">
    <button id="copyText" class="btn" disabled>Copy</button>
</div>
<div class="form textInput section">
    <textarea id="text" class="textbox" rows=12 placeholder="Type or paste your plain text here..."></textarea>
</div>

<h2>Base64</h2>
<div class="form button">
    <button id="copyBase64" class="btn" disabled>Copy</button>
</div>
<div class="form textInput section">
    <textarea id="base64" class="textbox" rows=12 placeholder="Type or paste your base64 here..."></textarea>
</div>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>