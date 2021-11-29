<?php
$output = ob_get_clean();
// Site configuration variables
$webConfDefault = [
    "pageTitle" => "SimpleCyber.org",
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
        <link href="/assets/gFonts/MaterialIcons.css" rel="stylesheet">
        <link href="/assets/gFonts/MaterialIconsOutline.css" rel="stylesheet">
        <!-- Fonts -->
        <link href="/assets/gFonts/Quicksand.css" rel="stylesheet">
        <link href="/assets/gFonts/Sora.css" rel="stylesheet">
        <!-- Style -->
        <link href="/assets/main.css" rel="stylesheet">
    </head>
    
    <body id="body" class="no-transitions">
        <div id="topbar" class="row no-gutters acrylic">
            <div class="topbarButtonCont col-auto">
                <button id="mainMenuButton" class="topbarButton material-icons">
                    menu
                </button>
            </div>
            <h1 id="topbarTitle" class="col-auto"><a href="/">SimpleCyber.org</a></h1>
        </div>
        <div id="mainMenuHitArea"></div>
        <div id="mainMenu" class="acrylic">
            <?php
            $keys = array_keys($menu);
            ?>
            <?php foreach ($keys as $k): $section = $menu[$k]; ?>
                <?php if (isset($section['name'])): ?>
                    <div class="sectionHead"><?= $section['name'] ?></div>
                <?php endif ?>
                <?php foreach ($section['items'] as $item): ?>
                    <a class="item row no-gutters <?php (isset($item['disabled']) ? print('disabled') : print('')) ?>" <?php (!isset($item['disabled']) ? print("href=\"{$item['href']}\"") : print('')) ?> <?php (isset($item['open']) ? print('target=_blank') : print('')) ?> <?php (isset($item['desc']) ? print("title=\"{$item['name']}\n{$item['desc']}\"") : print("title=\"{$item['name']}\"")) ?>>
                        <div class="icon col-auto material-icons"><?= $item['icon'] ?></div>
                        <div class="name col">
                            <?= $item['name'] ?>
                        </div>
                    </a>
                <?php endforeach ?>
            <?php endforeach ?>
        </div>
        <div id="headerCont">
            <div id="header">
                <h1 id="title"><?= $webConf['metaTitle'] ?></h1>
                <!-- <div id="headerTransGrad"></div> -->
            </div>
        </div>
        <?= $output ?>
        <div id="footer">
            &copy; CyberOfficial 2021
        </div>
        <!-- JS -->
        <script src="/assets/main.js"></script>
    </body>
</html>