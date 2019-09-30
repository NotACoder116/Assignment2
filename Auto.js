var async=require("async");
var students=[{name:"Yadwinder",rollno: 1,gotmarks:234},
              {name:"Daman",rollno:2,gotmarks:298}];
var marks=[];
async.auto({
    add_student: function(callback) {
        console.log('New Student adding now');
         students.push({name:"Rajwinder",rollno: 3,gotmarks:150});
        callback(null,students);
    },
    cal_grade: function(callback) {
        console.log('Calculating the grades');
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
        callback(null,"Grade calculation completed");
    },
    get_students_grade: ['add_student', 'cal_grade', function(results, callback) {
   
    let i=0;
    students.forEach(student=>{
    console.log(`${student.name} having Roll Number ${student.rollno} got ${marks[i]} Grade.`);
    i++;
    })
        
        callback(null,`Process Completed` );
    }]
}, function(err, results) {
    console.log('results = ', results);
});