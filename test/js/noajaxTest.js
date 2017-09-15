var assert = chai.assert;
describe('NoAjax', function(){
    beforeEach(function(){
        noajax.init();
    });
    it('Should return result for function without any argument', function(done){
        noajax.call("returnSuccess", function(err,res){
            try{
                assert.equal(res, 'success');
                done();
            }catch(e){
                done(e);
            }
        });
    });
    it('Should return true for server method does not return anything', function(done){
        noajax.call("returnNothing", function(err,res){
            try{
                assert.isTrue(res);
                done();
            }catch(e){
                done(e);
            }
        });
    });
    it('Should accept 2 string arguments and return concatenated string', function(done){
        noajax.call("concatenateString", "hello", "world", function(err, res){
            try{
                assert.equal(res, "helloworld");
                done();
            }catch(e){
                done(e);
            }
        });
    });
    it('Should accept 3 integers and return sum of them', function(done){
        noajax.call("add3Numbers",1, 2, 3, function(err, res){
            try{
                assert.strictEqual(res, 6);
                done();
            }catch(e){
                done(e);
            }
        });
    });
    it('Should return ArgumentMismatch exception if 2 arguments are required and only one is given',function(done){
        noajax.call("add3Numbers", 1, 2, function(err, res){
            try{
                assert.equal(err.name, 'ArgumentMismatch');
                done();
            }catch(e){
                done(e);
            }
        });
    });
    it('Should return NoMethodFound Exception if server method is not found',function(done){
        noajax.call("nonExistingFunction", function(err,res){
            try{
                assert.equal(err.name, 'NoMethodFound');
                done();
            }catch(e){
                done(e);
            }
        });
    });
});