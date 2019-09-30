let async=require("async");
async.series([
    function(callback) {
       
        let x=y=4;
        let z=x*y;
        callback(null, `Area of the Square is ${z}`);
    },
    function(callback) {
        let x=4;
        let z=4*x;
        callback(null,`Perimeter of the Square is ${z}` );
    },
    function(callback) {
         let x=4;
        callback(null,`Square root of ${x} is ${Math.sqrt(x)}`);
    }
],
function(err, results) {
   console.log(results);
});