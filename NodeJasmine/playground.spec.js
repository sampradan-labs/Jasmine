var obj = require('./src/sample').obj;
describe('Working with Spues', function() {
    
    
    
    it('Spy on function and check total times it was called', function() {
        //Create the spy object
        spyOn(obj,'makeHttpCall')
        //Make a call to function. This will also call the spy function
        obj.makeHttpCall();

        //Check the statistics
        var totalCalls = obj.makeHttpCall.calls.count()
        expect(totalCalls).toBe(1);

        expect(obj.makeHttpCall).toHaveBeenCalled()
    });

    it('should call fake', () => {
        //Create spy object
        spyOn(obj, 'makeHttpCall');
        
        //Ask spy to create a particular fake page data
        obj.makeHttpCall.and.callFake(function() {return '<b>This is a fake page</b>'}) 
        //Make the actual call
        var result= obj.makeHttpCall()

        expect(result).toEqual('<b>This is a fake page</b>')
    });
        
  
});
    