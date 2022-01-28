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

<div id="preSendCont">
    <div class="form">
        <label>How can I get back to you?</label>
    </div>
    <div class="row no-gutters">
        <div id="contactTypeWrapper" class="col-sm-4 form textInput">
            <div class="inputWrapper dropdown">
                <select id="contactType" class="textbox">
                    <option value="email">Through Email</option>
                    <option value="discord">On Discord</option>
                    <option value="none">I don't want a response</option>
                </select>
            </div>
        </div>
        <div id="contactInputCont" class="col-sm-8 form textInput">
            <input id="email" type="email" class="textbox" placeholder="someone@example.com">
            <input id="discordTag" type="text" class="textbox hidden" placeholder="Someone#0000">
        </div>
    </div>
    <div class="form section"></div>

    <div class="form textInput section">
        <label>Your message</label>
        <textarea id="message" class="textbox" rows=12 placeholder="Write your message here..."></textarea>
    </div>

    <div class="form button section">
        <button id="send" class="btn" disabled>Send</button>
        <small id="sendLore" class="dangerText hidden"></small>
        <small id="sendError" class="dangerText hidden"></small>
    </div>
</div>
<div id="sendSuccessCont" class="hidden">
    <h2>Message sent!</h2>
    <p id="sendSuccessContext"></p>
    <p>Thanks so much for reaching out!</p>
</div>

<script src="./tool.js"></script>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>