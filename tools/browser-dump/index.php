<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools']['items'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/browser-dump") {
        $webConf = [
            'disqusId' => 'tool-browserDump',
            'pageTitle' => $tool['name'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<h1>Explore the data</h1>
<p>This tool will show you information about your system, browser, and network connection that any website can access.</p>
<p>Click any value to copy it.</p>

<h2>Network</h2>
<div class="statContainer">
    <div class="statBox"><div class="dataName">IP address</div>
        <div class="dataValue"><?= $_SERVER['HTTP_CF_CONNECTING_IP'] ?></div>
    </div>
</div>

<h2>System</h2>
<div class="statContainer">
    <div class="statBox"><div class="dataName">User agent string</div>
        <div class="dataValue" data-js="window.navigator.userAgent"></div>
    </div>
    <div class="flexBreak"></div>
    <div class="statBox"><div class="dataName">Browser</div>
        <div class="dataValue" data-js="platform.name"></div>
    </div>
    <div class="statBox"><div class="dataName">Browser type</div>
        <div class="dataValue" data-js="platform.layout"></div>
    </div>
    <div class="statBox"><div class="dataName">Operating system</div>
        <div class="dataValue" data-js="platform.os.family+' '+platform.os.version"></div>
    </div>
    <div class="statBox"><div class="dataName">Architecture</div>
        <div class="dataValue" data-js="platform.os.architecture+'-bit'"></div>
    </div>
    <div class="statBox"><div class="dataName">System manufacturer</div>
        <div class="dataValue" data-js="platform.manufacturer"></div>
    </div>
    <div class="statBox"><div class="dataName">System model</div>
        <div class="dataValue" data-js="platform.product"></div>
    </div>
</div>

<h2>Display</h2>
<div class="statContainer">
    <div class="statBox"><div class="dataName">Page Width</div>
        <div class="dataValue" data-js="window.innerWidth+' px'"></div>
    </div>
    <div class="statBox"><div class="dataName">Page Height</div>
        <div class="dataValue" data-js="window.innerHeight+' px'"></div>
    </div>
    <div class="flexBreak"></div>
    <div class="statBox"><div class="dataName">Browser Width</div>
        <div class="dataValue" data-js="window.outerWidth+' px'"></div>
    </div>
    <div class="statBox"><div class="dataName">Browser Height</div>
        <div class="dataValue" data-js="window.outerHeight+' px'"></div>
    </div>
    <div class="flexBreak"></div>
    <div class="statBox"><div class="dataName">Screen Width</div>
        <div class="dataValue" data-js="screen.width+' px'"></div>
    </div>
    <div class="statBox"><div class="dataName">Screen Height</div>
        <div class="dataValue" data-js="screen.height+' px'"></div>
    </div>
    <div class="flexBreak"></div>
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