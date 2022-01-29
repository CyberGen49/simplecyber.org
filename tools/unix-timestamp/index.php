<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/unix-timestamp") {
        $webConf = [
            'disqusId' => 'tool-unixTimestamp',
            'pageTitle' => $tool['text'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<h1>Convert to and from a Unix timestamp</h1>
<p>This tool lets you easily convert a human-readable date into a unix timestamp, or vice-versa. The date is shown in your local timezone.</p>

<div class="form textInput section row no-gutters">
    <label>Unix timestamp</label>
    <div class="col-sm-3">
        <input id="timestamp" type="number" class="textbox" value="<?= time() ?>">
    </div>
    <div class="col-auto spacer"></div>
    <div class="col-sm flexCenterVertical">
        <div class="form singleSel" data-name="timestampType">
            <button class="item selected" data-value="s">
                <div class="icon"></div>
                <div class="label">Seconds (Default)</div>
            </button>
            <button class="item" data-value="ms">
                <div class="icon"></div>
                <div class="label">Milliseconds (JS)</div>
            </button>
        </div>
    </div>
</div>
<div class="form textInput section">
    <label>Date and time</label>
    <div class="inputWrapper date">
        <input id="date" type="datetime-local" class="textbox">
    </div>
</div>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>