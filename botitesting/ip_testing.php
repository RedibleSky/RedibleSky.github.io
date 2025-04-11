<?php
function ipToHex($ip) {
    $parts = explode('.', $ip);
    $hex = '';
    foreach ($parts as $part) {
        $hex .= str_pad(dechex((int)$part), 2, '0', STR_PAD_LEFT);
    }
    return strtoupper($hex);
}

$ip = $_SERVER['REMOTE_ADDR'];
$hexIp = ipToHex($ip);

header('Content-Type: application/json');
echo json_encode([
    'ip' => $ip,
    'hex' => '0x' . $hexIp
]);
?>
