
function* Add(x,callback) {
       yield x + 1;
       yield(callback(x))
       yield x+5;
   }
    function minus(x)
    {
        return x-1;
    }
    
    var gen = Add(5,minus);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value); 














// function *gen()
// {
//     var i=0;
//        if(true)
//        {
//            yield i;
//            i++;
//        }    
//     // for(let i=0;i<n;i++)
//     // {
//     //     yield i;
//     // }
// }

// let it=gen(5);
// for(let i=0;i<9;i++)
// {
//     console.log(gen().next());
// }










// var obj={
//     [Symbol.iterator]:gen
// };

// function *gen()
// {
//     yield 1;
//     yield 2;
// }

// for(let prop of obj)
// {
//     console.log(prop);
// }