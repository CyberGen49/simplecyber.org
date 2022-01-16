<?php

$out['open'] = false;

if (isset($_GET['host']) && isset($_GET['port'])) {
    $connection = @fsockopen($_GET['host'], $_GET['port'], $a, $b, 10);
    if (is_resource($connection)) $out['open'] = true;
}

print(json_encode($out));

?>