let async=require("async");
async.waterfall([
    function(callback) {
       
        let x=y=4;
        let z=x*y;
        setTimeout(()=>
        {
            console.log(`Area of the Square is ${z}`);
            callback(null, x);
        },3000)
    },
    function(x,callback) {
        let z=4*x;
        console.log(`Perimeter of the Square is ${z}`);
        callback(null, x);
    },
    function(x, callback) {
       
        callback(null, `Square root of ${x} is ${Math.sqrt(x)}`);
    }
], function (err, result) {
    console.log(result);
});