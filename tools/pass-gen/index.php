<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools']['items'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/pass-gen") {
        $webConf = [
            'pageTitle' => $tool['name'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<div class="container">
    <h1>Generate a secure password</h1>
    <p>This tool lets you generate secure passwords containing a customizable set of characters. These passwords are generated on your device, and are never sent over the internet, so you're the only one who knows them.</p>
    
    <div class="form textInput section">
        <label>Password length</label>
        <div class="inputWrapper dropdown">
            <select id="length" class="textbox">
                <?php for ($i = 8; $i <= 32; $i++): ?>
                    <option <?= (($i == 12) ? "selected" : '') ?>><?= $i ?></option>
                <?php endfor ?>
            </select>
        </div>
    </div>
    <div class="form multiSel" data-name="charSets">
        <label>Allowed characters</label>
        <button class="item selected" data-value="upper">
            <div class="icon"></div>
            <div class="label">Uppercase letters (A-Z)</div>
        </button>
        <button class="item selected" data-value="lower">
            <div class="icon"></div>
            <div class="label">Lowercase letters (a-z)</div>
        </button>
        <button class="item selected" data-value="num">
            <div class="icon"></div>
            <div class="label">Numbers (0-9)</div>
        </button>
        <button class="item selected" data-value="seps">
            <div class="icon"></div>
            <div class="label">Hyphens and Underscores (-_)</div>
        </button>
        <button class="item selected" data-value="punc">
            <div class="icon"></div>
            <div class="label">Punctuation (.?!:;,)</div>
        </button>
        <button class="item selected" data-value="sym">
            <div class="icon"></div>
            <div class="label">Symbols (~@#$%^&*+)</div>
        </button>
        <button class="item" data-value="slash">
            <div class="icon"></div>
            <div class="label">Slashes (/\)</div>
        </button>
        <button class="item" data-value="quote">
            <div class="icon"></div>
            <div class="label">Quotes, Apostrophes, Ticks ("'`)</div>
        </button>
        <button class="item" data-value="bracket">
            <div class="icon"></div>
            <div class="label">Brackets (()[]{}&lt;&gt;)</div>
        </button>
        <button class="item" data-value="spaces">
            <div class="icon"></div>
            <div class="label">Spaces</div>
        </button>
    </div>
    <div class="form textInput section">
        <input id="extraChars" type="text" class="textbox" placeholder="abcdef">
        <small>Optionally, list your own extra characters here, with no separation.</small>
    </div>

    <div class="form button">
        <button id="go" class="btn">Generate</button>
    </div>

    <div id="resultCont" class="hidden">
        <h2>Result</h2>
        <h1 id="result"></h1>
        <div class="form button">
            <button id="copy" class="btn" disabled>Copy password</button>
        </div>
    </div>
</div>

<style>
    #result {
        color: #fff;
        line-height: 100%;
        padding: 0px;
        padding-bottom: 10px;
        font-size: 36px;
        word-break: break-all;
    }
</style>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>