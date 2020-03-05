//14.8 INHERITANCE, EXTENDS CLASS, SUPER, CLASS METHOD
// //1(A)
// class Child{
//     constructor(name) {
//         this.name = name;
//     }
// }

// const baby = new Child("Arnold");
// console.log(baby);

// //1(B)
// class Child{
//     constructor(name) {
//         this.name = name;
//     }
// }

// const baby = new Child("Arnold");
// const baby2 = new Child("Tom");
// console.log(baby);
// console.log(baby2);

// //1(C)
// class Parent {
//     constructor(){
//         this.fatherName = "Schwarzenegger";
//     }
// }
// class Child extends Parent{
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }

// const baby = new Child("Arnold");
// const baby2 = new Child("Tom");
// console.log(baby);
// console.log(baby2);

// //1(D)
// class Parent {
//     constructor(){
//         this.fatherName = "Schwarzenegger";
//     }
// }
// class Child extends Parent{
//     constructor(name) {
//         super();
//         this.name = name;
//     }
//     getFullName(){
//         return this.name + " " + this.fatherName;
//     }
// }

// const baby = new Child("Arnold");
// const baby2 = new Child("Tom");
// console.log(baby.getFullName());
// console.log(baby2);

//1(E)
class Parent {
    constructor(){
        this.fatherName = "Schwarzenegger";
    }
}
class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());