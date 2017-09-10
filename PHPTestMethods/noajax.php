<?php
header("Access-Control-Allow-Origin: *");


// For require all the php files inside a folder
foreach (glob("methods/*.php") as $filename)
{
    require_once $filename;
}


$params = json_decode($_POST['params'],true);

call_user_func($params['methodName'], array(&$params['args']));