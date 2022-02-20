<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/ip-location") {
        $webConf = [
            'disqusId' => 'tool-ipLocation',
            'pageTitle' => $tool['text'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<h1>Locate an IP</h1>
<p>This tool lets you find the geographic location and local time of any IP address or hostname.</p>
<p>Note that the location of residential IP addresses may be inaccurate by several miles, due to the nature of internet service providers.</p>

<div class="form textInput section">
    <label>IP or hostname</label>
    <input id="ip" type="text" class="textbox" autocomplete=off>
</div>
<div class="row no-gutters">
    <div class="col-sm-auto">
        <div class="form button section">
            <button id="useIp" class="btn alt">Use my IP</button>
            <button id="go" class="btn" disabled>Locate</button>
        </div>
    </div>
</div>
<div id="userIp" class="hidden"><?= $_SERVER['HTTP_CF_CONNECTING_IP'] ?></div>

<div id="resultsContFailed" class="hidden">
    <h2>Results</h2>
    <p>The request was unsuccessful. Check your internet connection, or try again in a little bit.</p>
</div>

<div id="resultsCont" class="hidden">
    <h2>Results</h2>
    <p>Click any value to copy it.</p>
    <div class="statContainer">
        <div class="statBox"><div class="dataName">IP</div>
            <div id="dataIp" class="dataValue">Unknown</div>
        </div>
    </div>
    <div class="statContainer">
        <div class="statBox"><div class="dataName">Country</div>
            <div id="dataCountry" class="dataValue">Unknown</div>
        </div>
    </div>
    <div class="statContainer">
        <div class="statBox"><div class="dataName">City</div>
            <div id="dataCity" class="dataValue">Unknown</div>
        </div>
        <div class="statBox"><div class="dataName">Region</div>
            <div id="dataRegion" class="dataValue">Unknown</div>
        </div>
        <div class="statBox"><div class="dataName">Postal code</div>
            <div id="dataZip" class="dataValue">Unknown</div>
        </div>
    </div>
    <div class="statContainer">
        <div class="statBox"><div class="dataName">Latitude</div>
            <div id="dataLat" class="dataValue">Unknown</div>
        </div>
        <div class="statBox"><div class="dataName">Longitude</div>
            <div id="dataLon" class="dataValue">Unknown</div>
        </div>
    </div>
    <div class="statContainer">
        <div class="statBox"><div class="dataName">ISP</div>
            <div id="dataIsp" class="dataValue">Unknown</div>
        </div>
    </div>
    <div class="statContainer">
        <div class="statBox"><div class="dataName">Local time</div>
            <div id="dataTime" class="dataValue">Unknown</div>
        </div>
    </div>
    <small>Results provided by <a href="https://ip-api.com/">ip-api.com</a></small>
</div>

<style>
    .statContainer {
        display: flex;
        flex-wrap: wrap;
    }
    .statBox {
        padding-bottom: 10px;
        padding-right: 20px;
    }
    .dataName {
        max-width: 200px;
    }
    .dataValue {
        font-family: 'Quicksand';
        font-weight: bold;
        font-size: 20px;
        color: var(--acc);
        line-height: 100%;
        user-select: none;
        transition: 0.1s ease-in-out;
        cursor: copy;
    }
    .dataValue:hover {
        color: #fff;
    }
</style>

<script src="/assets/platform.js"></script>
<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>