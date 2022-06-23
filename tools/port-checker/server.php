<?php

$responseCode = 200;

if (isset($_GET['host']) && isset($_GET['port'])) {
    $out['open'] = false;
    $connection = @fsockopen($_GET['host'], $_GET['port'], $a, $b, 10);
    if (is_resource($connection)) $out['open'] = true;
} else {
    $out['error'] = "Missing required parameters: host and port";
    $responseCode = 400;
}

http_response_code($responseCode);
print(json_encode($out));

?>