<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
$webConf = [
    'pageTitle' => 'Contact',
    'pageDesc' => "Reach out with your questions, concerns, and more."
];
?>

<h1>Reach out</h1>
<p>Fill out this simple form to send me a message directly and I'll try to respond in a timely manner. Alternatively, you can just DM me on Discord <b>@Cyber#1000</b>.</p>

<div class="form textInput section" data-name="testDropdown">
    <label>How can I get back to you?</label>
    <div class="inputWrapper dropdown">
        <select class="textbox">
            <option value="email">Through Email</option>
            <option value="discord">On Discord</option>
            <option value="none">I don't want a response</option>
        </select>
    </div>
    <input id="email" type="email" class="textbox" placeholder="someone@example.com">
    <input id="discordTag" type="text" class="textbox hidden" placeholder="Someone#0000">
</div>

<div class="form textInput section">
    <label>Your message</label>
    <textarea id="message" class="textbox" rows=12 placeholder="Write your message here..."></textarea>
</div>

<div class="form button section">
    <button class="btn">Send</button>
</div>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>