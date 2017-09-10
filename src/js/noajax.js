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
        //   console.log(this.responseText);
          callback(null, this.responseText);
        //   return this.responseText;
        }
      };

    xhttp.open("POST", s.phpEndPoint, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("params="+JSON.stringify(args));
  }
};

function noAjaxException(message) {
  this.message = message;
  this.name = 'noAjaxException';
}
