<?php
function ipToHex($ip) {
    $parts = explode('.', $ip);
    $hex = '';
    foreach ($parts as $part) {
        $hex .= str_pad(dechex((int)$part), 2, '0', STR_PAD_LEFT);
    }
    return '0x' . strtoupper($hex);
}

header("Content-Type: text/plain");
echo ipToHex($_SERVER['REMOTE_ADDR']);
