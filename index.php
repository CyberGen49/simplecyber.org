<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
$webConf = [
    'disqusId' => 'home',
    'header' => 'Welcome!',
    'pageDesc' => "Learn about me and my projects, and check out some cool tools I've built here."
];
?>

<h1>Welcome to SimpleCyber.org!</h1>
<p>Hi! I'm <b>Kaleb</b>, also known online as <b>CyberGen49</b>, <b>CyberOfficial</b>, or just simply, <b>Cyber</b>, and I'm a student majoring in Computer Information Systems at the University of Houston. I've finally gotten around to putting something together for my domain, <b>simplecyber.org</b> (which you're looking at right now), and I want to use this place to tell you about myself and share some projects I'm working on.</p>
<p>It's not super fancy, but it's better than nothing, right?</p>

<h2>Projects</h2>
<div style="height: 8px"></div>
<a class="projectCard" href="/tools">
    <h1>SimpleCyber.org Tools</h1>
    <p>A growing collection of useful tools hosted right here on this site.</p>
</a>
<a class="projectCard" href="https://github.com/CyberGen49/CyberVideoPlayer" target="_blank">
    <h1>CyberVideoPlayer</h1>
    <p>A clean and functional embeddable HTML video player, hosted with Github Pages.</p>
    <p>I always found making a custom video player to be a daunting task, but my urge to make something better than the default browser player led me to try it anyway. The result was totally worth it.</p>
</a>
<a class="projectCard" href="https://github.com/CyberGen49/CyberFilesRewrite" target="_blank">
    <h1>CyberFilesRewrite</h1>
    <p>My most ambitious project to date - A capable and customizable file index for the web, built to make viewing and sharing server files easy.</p>
    <p>This served as a big deep dive into Javascript for me, since it consists of mostly that, whereas everything before this mostly involved PHP. Introducing JS allowed me to make things a ton more seamless, and vastly decrease load times.</p>
</a>
<a class="projectCard" href="https://www.deviantart.com/cybergen49/art/SpotiPlayer-for-Rainmeter-813654412" target="_blank">
    <h1>SpotiPlayer for Rainmeter</h1>
    <p>A skin that strives to mimic the appearance and functionality of the Spotify mobile app, right on your desktop.</p>
    <p>This project is no longer maintained, and neither are the rest of my Rainmeter skins.</p>
</a>

<h2>About me</h2>
<!-- <p><em>This is a condensed version of the story. An interactive timeline of events will come soon.</em></p> -->
<p>I've been interested in technology all my life. In elementary school, I developed a hobby of photography, where I even had one of my pictures displayed at our local library. In middle school, I was introduced to Minecraft, which was my first "computer game" to play, and what led me to my interest in computers today. Downloading and installing resource packs, mods, and worlds forced me to learn how to safely navigate the internet and the Windows filesystem. This small start would get me into deeper modification of the operating system itself, with visual styles and other tweaks. Inevitably, I bricked my system many times, and had to learn how to troubleshoot those issues. A bit later, I got into Minecraft server hosting. I was also collecting new hardware at around this time, so I was able to use it to home-host my servers on Windows, and eventually Linux. Server hosting gave me the opportunity to learn more complex configuration structures, and got me familiar with both the Batch and Bash shell-scripting languages. In 2019, I was itching to develop something graphical, so I wrote several skins for <a href="https://www.rainmeter.net/" target="_blank">Rainmeter</a>, a desktop widget platform, and they saw quite a bit of success. A year later, I would take a deep dive into web development, and soak up as much information as possible. I gained a strong grasp on HTML, CSS, PHP, JavaScript, and SQL, and I'm learning more and more to this day. By now, I've graduated high school, and I'm working my way through college. Despite everything, I don't know exactly what I want to do yet, so I've taken a rather generic IT major to hopefully figure that out.</p>

<h2>The old site</h2>
<p>An old site exists that's much more Minecraft-focused, since it was created for my Minecraft server brand, "SimpleCyber Network". A more SCN-focused story is told there, which you may or may not be interested in. I also wrote a couple articles there that detail how to set up a Minecraft server, and how to set up Google Forms with a custom domain.</p>
<p>It's created with Google Sites, has a painfully slow load time, and I haven't touched it in well over a year. Visit at your own risk.</p>
<p><a href="https://sites.google.com/view/simplecyber-network" target="_blank">The old SimpleCyber Network site</a></p>

<h2>Reach out</h2>
<p>I'm always available on Discord <b>@Cyber#1000</b>. Feel free to send me a DM about anything, big or small, and I should respond within 24 hours.</p>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>