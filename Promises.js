const students=[{name:"Vipan",RollNo:2,gotmarks:188}];
var marks=[];
function enroll(student)
{
    return new Promise((resolve,reject)=>
    {
            students.push(student);
            resolve();
   });
}
function calPer(students)
{
    new Promise(function(resolve,reject)
    {
    var total=300;
    var grade;
    var per;
    students.forEach(student=>
        {
           per=((student.gotmarks)/total)*100;
           if(per>95) { grade='A+';}
           else if(per>90 && per<=95) { grade="A";  }
           else if(per>80 && per<=80) { grade="B+"; }
           else if(per>70 && per<=80) { grade="B";  }
           else if(per>60 && per<=70) { grade="C+"; }
           else {  grade="C"; }
           marks.push(grade);
        })

        resolve();
    })
}
function getStudent()
{
    let i=0;
    students.forEach(student=>{
    console.log(`${student.name} having Roll Number ${student.RollNo} got ${marks[i]} Grade.`);
    i++;
    })
}
const newStudent=[{name:"Yadwinder Singh",RollNo: 1, gotmarks:298}];
enroll(newStudent).then(calPer(students)).then(getStudent).catch((error)=>
{
    console.log("Error received at catch after rejection "+error);
});

