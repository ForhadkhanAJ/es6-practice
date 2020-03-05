//14.7 CLASS, CONSTRUCTOR, CREATE OBJECT FROM CLASS
// //1(A)
// class Student{

// }

// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);

// //1(B)
// class Student{
//     constructor(){
//         this.id = 1;
//         this.name = "mahi";
//     }
// }

// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);

// //1(C)
// class Student{
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//     }
// }

// const student1 = new Student(12, "sakib");
// const student2 = new Student(22, "mahiya");
// console.log(student1, student2);

// //1(D)
// class Student{
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//         this.school = "kolimunnesa school";
//     }
// }

// const student1 = new Student(12, "sakib");
// const student2 = new Student(22, "mahiya");
// console.log(student1, student2);

// //1(E)
// class Student{
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//         this.school = "kolimunnesa school";
//     }
// }

// const student1 = new Student(12, "yousuf");
// const student2 = new Student(22, "mahiya");

// console.log(student1.name, student2.name);

//1(F)
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school";
    }
}

const student1 = new Student(12, "yousuf");
const student2 = new Student(22, "mahiya");
const student3 = new Student(29, "Bappi");

console.log(student3);