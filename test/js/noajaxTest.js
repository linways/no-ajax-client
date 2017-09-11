var assert = chai.assert;
describe('NoAjax', function(){
    beforeEach(function(){
        noajax.init();
    });
    it('Should return result for function without any argument', function(done){
        noajax.call("testMethod1", function(err,res){
            try{
                assert.equal(res, 'success');
                done();
            }catch(e){
                done(e);
            }
        });
    });
    it('Should return true for server method does not return anything', function(done){
        noajax.call("testMethod2", function(err,res){
            try{
                assert.isTrue(res);
                done();
            }catch(e){
                done(e);
            }
        });
    });
    it('Should accept 2 string arguments and return concatenated string ');
    it('Should accept 2 integers and return sum of them');
    it('Should return argumentMismatch exception if 2 arguments are required and only one is given');
    it('Should return noMethodFound Exception if server method is not found');
});