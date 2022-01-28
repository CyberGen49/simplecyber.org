<?php

$data = json_decode(file_get_contents('php://input'), true);

$out = [];
$out['status'] = 'good';
$out['received'] = $data;
$response = 200;

function sendResponse($response, $out) {
    http_response_code($response);
    print(json_encode($out));
    exit;
}

// Open the database and create the messages table if it doesn't exist
$db = new SQLite3("./messages.db");
$db->exec("CREATE TABLE IF NOT EXISTS messages (
    created int not null,
    ip text not null,
    contactType text not null,
    discord text,
    email text,
    message text not null
)");

// Check if the user has sent a message in the last 15 minutes
$ip = $_SERVER['HTTP_CF_CONNECTING_IP'];
$stmt = $db->prepare("SELECT * FROM messages WHERE ip = :ip AND created > :time");
$stmt->bindParam(":ip", $ip);
$startTime = (time()-(60*15));
$stmt->bindParam(":time", $startTime);
$result = $stmt->execute();
$arr = [];
while ($tmp = $result->fetchArray(SQLITE3_ASSOC)) $arr[] = $tmp;
// If so, stop here
if (count($arr) > 0) {
    $response = 403;
    $out['status'] = 'rateLimit';
    sendResponse($response, $out);
}

// Add the new message to the database
$stmt = $db->prepare("INSERT INTO messages (created, ip, contactType, discord, email, message) VALUES (:time, :ip, :type, :discord, :email, :message)");
$time = time();
$stmt->bindParam(":time", $time);
$stmt->bindParam(":ip", $ip);
$stmt->bindParam(":type", $data['contact']['type']);
$discord = ($data['contact']['type'] == 'discord' ? $data['contact']['discordTag'] : null);
$stmt->bindParam(":discord", $discord);
$email = ($data['contact']['type'] == 'email' ? $data['contact']['email'] : null);
$stmt->bindParam(":email", $email);
$stmt->bindParam(":message", $data['message']);
$result = $stmt->execute();

if (!$result) {
    $response = 500;
    $out['status'] = 'dbError';
    sendResponse($response, $out);
}

sendResponse($response, $out);

?>