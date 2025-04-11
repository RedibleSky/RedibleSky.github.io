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
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>IP in Hex</title>
  <style>
    body {
      font-family: sans-serif;
      background: #0e0e0e;
      color: #00ffcc;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      flex-direction: column;
    }
    .text {
      margin: 10px;
      font-size: 1.5em;
    }
  </style>
</head>
<body>
  <div class="text">Your IP: <?php echo $ip; ?></div>
  <div class="text">Hex: 0x<?php echo $hexIp; ?></div>
</body>
</html>
