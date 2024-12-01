<?php
$username = $_GET['username'];
$password = $_GET['password'];


$url = "https://script.google.com/macros/s/AKfycby2ejRpgRkI56czpYdFZKg9lSxsc-C2-i4uvyvH5Qbo1MrJLvIFGcPTz5_k3dV_zSE/exec?username=" . urlencode($username) . "&password=" . urlencode($password);


$ch = curl_init();


curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);


$response = curl_exec($ch);


curl_close($ch);


echo "Response from Google Apps Script: " . htmlspecialchars($response);
?>
