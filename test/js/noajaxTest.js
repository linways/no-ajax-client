var assert = chai.assert;
describe('NoAjax', function(){
    it('Should return result for function without any argument', function(done){
        noajax.init();
        noajax.call("testMethod1", function(err,res){
            try{
                assert.equal(res, 'success');
                done();
            }catch(e){
                done(e);
            }
        });
    });
    it('Should return noMethodFound Exception if server method is not found');
    it('Should return null for server server method does not return anything');
    it('Should accept 2 string arguments and return concatenated string ');
    it('Should accept 2 integers and return sum of them');
    it('Should return argumentMismatch exception if 2 arguments are required and only one is given');
});