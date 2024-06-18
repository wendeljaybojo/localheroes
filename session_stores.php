<?php
session_start();
header('Content-Type:application/json');
$response = array('check'=>false);
if(isset($_SESSION['username'])){
	$response['check']=true;
}
echo json_encode($response);
?>