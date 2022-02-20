<?php

$responseCode = 200;

if (isset($_GET['ip'])) {
    $ip = $_GET['ip'];
    $ch = curl_init("http://ip-api.com/json/$ip");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $out['response'] = json_decode(curl_exec($ch), true);
} else {
    $out['error'] = "Missing IP";
    $responseCode = 400;
}

header('Content-Type: application/json');
http_response_code($responseCode);
print(json_encode($out));

?>