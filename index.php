<?php
ob_start();
require($_SERVER['DOCUMENT_ROOT']."/private/utils.php");
$webConf = [
    'header' => 'Welcome!',
    'pageDesc' => "Learn about me and my projects, and check out some cool tools I've built here."
];
?>

<div class="container">
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
    <a class="projectCard" href="https://vexx.cf" target="_blank">
        <h1>Vexx.cf Link Shortener</h1>
        <p>An easy-to-use link shortener allowing for custom or random link endings. Vexx.cf also features an account system, so anyone can save and view all their short links, with no limits.</p>
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

    <!-- Hello source code viewer, enjoy the full story below -->
    <!-- <h2>My story</h2>
    <p>Throughout my early life, I was always mesmerized by the light and colour produced by screens. I would sit in front of the TV for hours, my eyes glued to the small CRT display - not because of what was playing, but because I just liked looking at it.</p>
    <p>I started this whole adventure with an interest in photography in my elementary school years. So much so as to have a picture I took of our dog featured in the display case at our local library. I would spend a big portion of the late aughts and early 2010s taking hundreds of pictures of anything I thought looked interesting, even if most of them would go unnoticed.</p>
    <p>My earliest exposure to the computer was when I'd sit down and mess with Microsoft Word and Paint on our eMachines ET-1161 running Windows Vista. My dad had also showed me how to move pictures from my camera to the computer, and left those instructions on a sticky note for me to follow. Later on, I would start using the computer to play random flash games on Coolmath Games.</p>
    <p>Eventually, my parents got new computers, so the old eMachines fell to me. Once that was in my hands, I would do the same things I did before, but I'd have unlimited access to it. Things as simple as changing the desktop background and messing with an extra scanner we had laying around kept me entertained.</p>
    <p>In 2014, I heard a lot of my friends talking about a game called Minecraft. I had still only been playing flash games at this point. We didn't (and still don't) have game consoles at home, since my mom was under the impression that all modern video games were full of violence and gore. I took it upon myself to explain to my parents that Minecraft wasn't like that, and, later that year, they got it for me.</p>
    <p>I feel pretty safe saying that Minecraft would come to make me who I am today, in a very, very roundabout way.</p>
    <p>That game would lead me to learning how to safely use the internet by avoiding scammy ads and such, and it would fuel my newfound interest in computers. By downloading and installing Minecraft worlds, resource packs, and mods, I would inevitably learn how the Windows filesystem works.</p>
    <p>Throughout 2015 and 2016, I would spend a lot of my time tinkering around with my laptop, an old Toshiba Satellite L775. I would install visual styles to make the Windows 7 installation look completely different, and I would attempt to modify other parts of the OS, which would normally end up breaking the system. As I played with the only computer I had, I was forced to learn a lot of handy troubleshooting techniques and fixes that prove useful to this day. I still had the old eMachines, but it had become so slow, it couldn't stand up to what I wanted to do with it.</p>
    <p>This interest in computers would become even more apparent as I got into home-hosting Minecraft servers towards the end of 2016 and into 2017. By this time, I had collected a fair few old computers that I could play with. As I collected more hardware, I could set up dedicated systems for hosting my servers. I would get into minimal Windows installations, and eventually into Linux, so I could squeeze every ounce of performance out of the weak computers I was using.</p>
    <p>I would end up hosting several public servers over the next few years. All of them flopped after a few months, and none of them attracted very many people. Despite that, I made quite a few friends along the way. Even though I don't host public servers anymore, me and those friends from back then have formed a private group, where we still play Minecraft.</p>
    <p>Throughout my time server hosting, I would pick up both the Windows and Linux shell-scripting languages: Batch, and Bash, respectively. I would use these languages to write all sorts of scripts to automate everyday tasks on all my systems.</p>
    <p>In 2019, I got tired of always existing inside a command line, so I branched out to developing skins (interactive widgets) for a desktop customization tool called <a href="https://www.rainmeter.net/" target="_blank">Rainmeter</a>. This was a breath of fresh air! Before this point, if I wanted to make something graphically, I was limited to creating nonfunctional concept art in a graphic design program. My skins (like <a href="https://www.deviantart.com/cybergen49/art/SpotiPlayer-for-Rainmeter-813654412" target="_blank">SpotiPlayer</a>, <a href="https://www.reddit.com/r/Rainmeter/comments/fhb9p8/im_working_on_making_a_slideout_sidebar_that/" target="_blank">GlanceBar</a>, and more) would prove to be very popular among the community, generating tens of thousands of views online. In early 2020, I set up a Discord server so people could get help with my creations, but I would slowly get burnt out and stop developing for Rainmeter.</p>
    <p>Despite my Rainmeter burnout, I still had an urge to develop graphical interfaces, so, in August of 2020, I decided to pick up web development. This was big. The more I played, the more I learned. HTML, CSS, PHP, JavaScript, SQL. I'd spend my time making random sites, none of which would come to fruition. Like all of my previous endeavours, I didn't use a proper course or video series to learn - rather, I learned by trial and error, with the help of Stack Overflow and other forums. Slowly, I built up my web dev knowledge to the point where I felt like I could remake a lot of existing websites better than they were made originally.</p>
    <p>This brings us to today. I've graduated high school and I'm working my way through college. I feel like I've kind of gotten a taste of everything so far, and I enjoy doing all of it, so I chose a fairly generic IT major to maybe help me find my way. I have, however, made it clear in my mind that I don't want to be a programmer. Programming is something that I enjoy doing in my free time, and I feel like having someone tell me exactly what I need to do would ruin that fun for me.</p>
    <p>The future has yet to happen. Who knows what's next? I'll try not to forget to update this story when anything new or revolutionary happens.</p> -->
</div>

<?php require($_SERVER['DOCUMENT_ROOT']."/private/main.php") ?>