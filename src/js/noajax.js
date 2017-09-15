var s,
noajax = {

  settings: {
    phpEndPoint: 'http://localhost:8000/noajax.php'
  },

  init: function(){
      s = this.settings;
  },

  call: function( ){
    if(!arguments.length){
        throw new noAjaxException("Atleast one argument is required");
    }
    if(typeof(arguments[0])!== "string")
        throw new noAjaxException("First parameter should be the name of the method");
    var methodName = arguments[0];
    callback = arguments[arguments.length-1];
    var otherArgs = Array.prototype.slice.call(arguments);
    otherArgs.shift(); // To remove method name from the array
    otherArgs.pop(); // to remove the callback function (Empty space created by callback)
    var args = {
        methodName: methodName,
        args: otherArgs
    }

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var error = null , result =null;
            if(response.status === 'success')
              result = response.result;
            else if(response.status === 'failed')
              error = new noAjaxPHPException(response.exception);
            callback(error, result);
        }
      };

    xhttp.open("POST", s.phpEndPoint, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("params="+JSON.stringify(args));
  }
};

function noAjaxException(message) {
  this.name = 'noAjaxException';
  this.message = message;
}

function noAjaxPHPException(args) {
  this.name = args.name;
  this.code = args.code;
  this.message = args.message;
  this.file = args.file;
  this.line = args.line;
  this.trace = args.trace;
}
noAjaxPHPException.prototype = Error.prototype;
noAjaxException.prototype = Error.prototype;