<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
foreach ($menu['tools']['items'] as $tool) {
    trigger_error($tool['href']);
    if ($tool['href'] == "/tools/twitch-gif") {
        $webConf = [
            'disqusId' => 'tool-twitchGif',
            'pageTitle' => $tool['name'],
            'pageDesc' => $tool['desc']
        ];
        break;
    }
}
?>

<h1>Make your GIF</h1>
<p>This tool lets you generate an animated scrolling Twitch chat GIF using messages and usernames input by you.</p>

<h2>Usernames</h2>
<!-- <p>You can get the usernames of followers from a single Twitch channel, or enter names manually.</p>
<div class="row no-gutters">
    <div class="col-sm">
        <div class="form textInput">
            <input id="channel" type="text" class="textbox" placeholder="SuperCoolStreamer727">
        </div>
    </div>
    <div class="col-sm-auto flexCenterVertical">
        <div class="form button">
            <button id="getUsers" class="btn" disabled>Fetch users</button>
        </div>
    </div>
</div>
<div class="form section">
    <small>This will fetch the usernames of (up to) 100 of the streamer's most recent followers and put them into the box below.</small>
</div> -->
<div class="form textInput section">
    <textarea id="users" class="textbox" rows=12 placeholder="Enter each username on its own line."></textarea><small>
        The users you input here don't actually have to exist.
    </small>
</div>

<h2>Chat messages</h2>
<p>Each chat message you enter here will be "sent" by a random username from the list above.</p>
<div class="form textInput section">
    <textarea id="messages" class="textbox" rows=12 placeholder="Enter each chat message on its own line."></textarea>
</div>

<h2>Result</h2>
<div class="form button section">
    <button id="go" class="btn" disabled>Create GIF</button>
</div>

<div id="working"></div>

<link href="/assets/fonts/Inter.css" rel="stylesheet">
<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>