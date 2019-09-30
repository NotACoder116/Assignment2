let students=[{name:"Yadwinder",RollNo: 1,gotmarks:250},
              {name:"Sunny",RollNo: 2,gotmarks:280}];
let marks=[];
function addNewStudents(student,callback)
{
     students.push(student);
     callback(students,getStudents);
}
function calMarks(students,callback)
{
    let total=300;
    let per;
    let grade;
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
        callback();
}
function getStudents()
{
         let i=0;
         students.forEach(student=>{
         console.log(`${student.name} having Roll Number ${student.RollNo} got ${marks[i]} Grade.`);
         i++;
         }
)}
var newStudent={name:"Jagesh",RollNo:3,gotmarks:298};
addNewStudents(newStudent,calMarks);






















// var fs=require("fs");

// fs.readFile("data1.txt",function(err,data)
// {
//    if(err) return console.log(err);
//    else{
//        console.log(data.toString());
//        fs.readFile("data2.txt",function(err,data)
//        {
//            if(err) return console.error(err);
//            else{ console.log(data.toString());
//         fs.readFile("data3.txt",function(err,data)
//         {
//             if(err){console.error(err);}
//             else{
//                 console.log(data.toString());
//             }
//         })
//         }
//        })
//    }
// }
// );