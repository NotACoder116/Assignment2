console.log("Person 1 crosses the traffic ");
console.log("Person 2 crosses the traffic ")
const Traffic=async()=>{
 const TrafficQueue = new Promise((resolve, reject) => {
     console.log("They stopped one boy.");
    setTimeout(() => resolve('License'), 3000);
  });

 const pollution =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('Pollution'), 3000);
  });
   const ins =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('insurance'), 3000);
  });

   let license=await TrafficQueue;
   console.log(` getting the ${license}`);
    console.log("Boy : Now can i go sir.");
    console.log("Police : No i need Pollution form");
    console.log("Boy : Ok, i will show you.");
   
   let pol=await pollution;
   console.log(`showing the ${pol}`);
   console.log("Boy : Now can i go sir.");
   console.log("Police : No i need Insurance form");
    console.log("Boy : Ok, i will show you.");
   let insurance=await ins;
   console.log("showing the "+insurance);
   console.log("Finally the boy go.");
  
  return license;
};

Traffic().then((t) => console.log(`person4 shows ${t}`));

console.log("Person 3 crosses the traffic ")
console.log("Person 4 crosses the traffic ")