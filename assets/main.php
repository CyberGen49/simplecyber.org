<?php
$output = ob_get_clean();
// Site configuration variables
$webConfDefault = [
    "pageTitle" => "SimpleCyber.org",
    "pageDesc" => "Welcome to SimpleCyber.org!",
    "siteName" => "SimpleCyber.org",
    "favicon" => "/assets/icon.png",
    "themeColour" => "#a035d2",
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
                    $webConf['pageTitle'] = $webConf['pageTitle']." | ".$webConf['siteName'];
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
        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-v4-grid-only@1.0.0/dist/bootstrap-grid.css" rel="stylesheet">
        <!-- Normalize.css -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet">
        <!-- Material Icon Fonts -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
        <!-- Fonts -->
        <link href="/assets/gFonts/Montserrat.css" rel="stylesheet">
        <link href="/assets/gFonts/Quicksand.css" rel="stylesheet">
        <link href="/assets/gFonts/Sora.css" rel="stylesheet">
        <!-- Style -->
        <link href="/assets/main.css" rel="stylesheet">
    </head>
    
    <body id="body" class="no-transitions">
        <?= $output ?>
        <!-- JS -->
        <script src="/assets/main.js"></script>
    </body>
</html>