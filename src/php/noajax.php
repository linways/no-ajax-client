<?php
error_reporting(0);
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');


class NoMethodFound extends Exception{
    public function __construct($message, $code = 0, Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }
}

// For require all the php files inside a folder
foreach (glob("methods/*.php") as $filename)
{
    require_once $filename;
}

$params = json_decode($_POST['params'],true);

$response = new stdClass();

try{
    if(!function_exists($params['methodName']))
        throw new NoMethodFound('3 arguments are required'); 
    $result = call_user_func_array($params['methodName'], $params['args']);

    $response->status = "success";    
    if(isset($result)){
        $response->code = 200; // HTTP status code for OK
        $response->result = $result;    
    }
    else{
        $response->code = 204; // The server successfully processed the request and is not returning any content.
        $response->result = true;
    }
}catch(Exception $e){
    $response->status = "failed";
    $exception = new stdClass();
    $exception->name = get_class($e);
    $exception->code = $e->getCode();
    $exception->message = $e->getMessage();
    $exception->file = $e->getFile();
    $exception->line = $e->getLine();
    $exception->trace = $e->getTraceAsString();
    $response->exception = $exception;
}
echo json_encode($response);    