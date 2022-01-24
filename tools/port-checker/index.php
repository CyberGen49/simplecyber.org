<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools']['items'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/port-checker") {
        $webConf = [
            'disqusId' => 'tool-portChecker',
            'pageTitle' => $tool['name'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<h1>Check the status of a port</h1>
<p>This tool will tell you if a port is open on a certain IP or hostname.</p>

<div class="row no-gutters">
    <div class="col-sm-9">
        <label>IP or hostname</label>
        <div class="form textInput section">
            <input id="host" type="text" class="textbox" placeholder="simplecyber.org" autocomplete=off>
        </div>
    </div>
    <div class="col-sm-3">
        <label>Port</label>
        <div class="form textInput section">
            <input id="port" type="number" class="textbox" placeholder="443" autocomplete=off value=443>
        </div>
    </div>
</div>
<div class="row no-gutters">
    <div class="col-sm-auto">
        <div class="form button section">
            <button id="useIp" class="btn">Use my IP</button>
            <button id="go" class="btn" disabled>Check port</button>
        </div>
    </div>
</div>
<div id="userIp" class="hidden"><?= $_SERVER['HTTP_CF_CONNECTING_IP'] ?></div>

<h2>Result</h2>
<h1 id="result">Ready to check</h1>

<style>
    #result {
        color: #fff;
        line-height: 100%;
        padding: 0px;
        padding-bottom: 10px;
        font-size: 36px;
    }
</style>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>