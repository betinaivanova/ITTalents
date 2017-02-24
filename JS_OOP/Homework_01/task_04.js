function Person(name,age,isMale) {
    this.name = name;
    this.age = age;
    this.isMale = isMale;
    this.personList = [];
}
Person.prototype.showPersonInfo = function() {
    console.log(`Az sym ${this.name} i sym na ${this.age}`);
}
Person.prototype.add = function() {
    this.personList.push(this);
}
function Student(name,age,isMale,score) {
    Person.call(this,name,age,isMale);
    this.score = score;
    this.add();
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.showStudentInfo = function() {
    console.log(`Az sym ${this.name} i sym na ${this.age}, moqta ocenka e: ${this.score}`);
}
function Employee(name,age,isMale,daySalary) {
    Person.call(this,name,age,isMale);
    this.daySalary = daySalary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.calculateOvertime = function(hours) {
    var overtimeSum = 0;
    if(this.age < 18) {
        overtimeSum = 0;
    } else {
        overtimeSum = (this.daySalary / 8) * hours * 1.5;
    }
    return overtimeSum;
}

var rabotnik1 = new Employee('ivan',22,true,80);
var rabotnik2 = new Employee('dragan',22,true,80);
var student1 = new Student('petkan',25,true);
var student2 = new Student('hakera',25,true);
var chovek1 = new Person('ludiq',30,true);
var chovek2 = new Person('shanoto',30,true);
console.log(chovek1.personList);
