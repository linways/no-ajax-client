<?php

header("Access-Control-Allow-Origin: *");

// For require all the php files inside a folder
foreach (glob("methods/*.php") as $filename)
{
    require_once $filename;
}


$params = json_decode($_POST['params'],true);

$response = call_user_func($params['methodName'], array(&$params['args']));

if(isset($response)){
    echo $response;    
}
else{
    http_response_code(204);
    echo true;
}
