<?php
$output = ob_get_clean();
// Site configuration variables
$webConfDefault = [
    "pageTitle" => "",
    "header" => "",
    "pageDesc" => "Welcome to SimpleCyber.org!",
    "siteName" => "SimpleCyber.org",
    "favicon" => "/assets/icon.png",
    "themeColour" => "#202124",
];
if (isset($webConf)) $webConf = array_merge($webConfDefault, $webConf);
else $webConf = $webConfDefault;
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <?php
            // Append site name to page title and set meta title
            $webConf['metaTitle'] = $webConf['pageTitle'];
            if ($webConf['siteName'] != "") {
                $webConf['metaTitle'] = $webConf['siteName'];
                if ($webConf['pageTitle'] != "") {
                    $webConf['metaTitle'] = $webConf['pageTitle'];
                    $webConf['pageTitle'] = $webConf['pageTitle']." - ".$webConf['siteName'];
                } else {
                    $webConf['pageTitle'] = $webConf['siteName'];
                }
            }
        ?>
        <title><?= $webConf['pageTitle'] ?></title>
        <meta name="og:type" content="website">
        <meta name="og:site_name" content="<?= $webConf['siteName'] ?>">
        <meta name="og:title" content="<?= $webConf['metaTitle'] ?>">
        <meta name="og:description" content="<?= $webConf['pageDesc'] ?>">
        <meta name="description" content="<?= $webConf['pageDesc'] ?>">
        <meta name="og:image" content="<?= $webConf['favicon'] ?>">
        <meta name="theme-color" content="<?= $webConf['themeColour'] ?>">
        <link rel="icon" href="<?= $webConf['favicon'] ?>">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap Grid -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-v4-grid-only@1.0.0/dist/bootstrap-grid.css" rel="stylesheet">
        <!-- Normalize.css -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet">
        <!-- Material Icon Fonts -->
        <link href="/assets/fonts/MaterialIcons.css" rel="stylesheet">
        <link href="/assets/fonts/MaterialIconsOutline.css" rel="stylesheet">
        <!-- Fonts -->
        <link href="/assets/fonts/Quicksand.css" rel="stylesheet">
        <link href="/assets/fonts/Sora.css" rel="stylesheet">
        <link href="/assets/fonts/CascadiaCode.css" rel="stylesheet">
        <!-- Style -->
        <link href="/assets/main.css" rel="stylesheet">
    </head>
    
    <body id="body" class="no-transitions">
        <!-- Markdown parser -->
        <script src="/assets/marked.min.js"></script>
        <!-- Main Javascript -->
        <script src="/assets/main.js"></script>
        <!-- Topbar -->
        <div id="topbar" class="row no-gutters acrylic">
            <div class="topbarButtonCont col-auto">
                <button id="mainMenuButton" class="topbarButton material-icons">
                    menu
                </button>
            </div>
            <h1 id="topbarTitle" class="col-auto"><a href="/">SimpleCyber.org</a></h1>
        </div>
        <!-- Header "jumbotron" -->
        <div id="headerCont">
            <div id="header">
                <h1 id="title"><?= (($webConf['header'] !== '') ? $webConf['header'] : $webConf['metaTitle']) ?></h1>
            </div>
        </div>
        <!-- Main page content -->
        <div id="main" class="container">
            <?= $output ?>
            <?php if (isset($webConf['disqusId'])): ?>
                <h1>Let's talk about it</h1>
                <p>
                    Share your likes, dislikes, comments, suggestions, requests, and more down below! If you have something to say but don't want to put it in this public thread, feel free to fill out <a href="/contact">the Contact form</a>.
                    <br><small>
                        Disqus is responsible for ads that appear near this comment section.
                    </small>
                </p>
                <div id="disqus_thread"></div>
                <script> var disqus_id = '<?= $webConf['disqusId'] ?>'; </script>
                <noscript>
                    <p>Javascript needs to be enabled to access the Disqus comment section.</p>
                </noscript>
            <?php endif ?>
        </div>
        <!-- Footer -->
        <div id="footer">
            <p>&copy; CyberOfficial <?= date('Y') ?></p>
            <p>
                Wanna talk? DM me on Discord @Cyber#1000<br>
                <a href="https://github.com/CyberGen49" target="_blank">GitHub</a> • 
                <a  href="https://www.youtube.com/channel/UCbOf1f_IaGsNw3pafkeodbQ" target="_blank">YouTube</a> • 
                <a href="https://reddit.com/u/CyberGen49" target="_blank">Reddit</a> • 
                <a href="https://www.deviantart.com/cybergen49" target="_blank">DeviantArt</a>
                <br><a href="https://github.com/CyberGen49/simplecyber.org" target="_blank">View simplecyber.org on GitHub</a>
            </p>
        </div>
        <!-- Toast notification container -->
        <div id="toastContainer">
            <noscript>
                <div class="toast acrylic danger" style="opacity: 1;">
                    <div class="icon">error_outline</div>
                    <div class="text">
                        Javascript is disabled!
                        <div class="desc">Most features of this site require Javascript. To get the most out of simplecyber.org, enable Javascript in your browser's settings, then reload the page.</div>
                    </div>
                </div>
            </noscript>
        </div>
        <!-- Store the private menu data for use on the client -->
        <div data-menu-index="<?= base64_encode(json_encode($menu)) ?>"></div>
    </body>
</html>