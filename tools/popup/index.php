<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools']['items'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/popup") {
        $webConf = [
            'disqusId' => 'tool-popupGenerator',
            'pageTitle' => $tool['name'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<h1>Create a site popup</h1>
<p>This tool will let you create a popup window of any site, with several creation options.</p>
<p>This tool is intended for desktop use, but you're more than welcome to try it on mobile.</p>

<h2>Popup URL</h2>
<div class="form textInput">
    <input id="url" type="url" class="textbox" placeholder="https://simplecyber.org" autocomplete=off>
</div>

<h2>Window position and size (pixels)</h2>
<div class="row no-gutters">
    <div class="col-sm-3">
        <div class="form textInput section">
            <label>Left (X)</label>
            <input id="screenX" type="number" class="textbox" placeholder="Default" autocomplete=off value=50>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="form textInput section">
            <label>Top (Y)</label>
            <input id="screenY" type="number" class="textbox" placeholder="Default" autocomplete=off value=50>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="form textInput section">
            <label>Width</label>
            <input id="width" type="number" class="textbox" placeholder="Default" autocomplete=off value=1000>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="form textInput section">
            <label>Height</label>
            <input id="height" type="number" class="textbox" placeholder="Default" autocomplete=off value=700>
        </div>
    </div>
</div>

<div class="form button section">
    <button id="go" class="btn" disabled>Create popup</button>
</div>

<h2>Share</h2>
<p>Copy this setup's shareable link to save your inputs for later, or to share them with someone!</p>
<div class="form button section">
    <button id="share" class="btn" disabled>Copy shareable link</button>
</div>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>