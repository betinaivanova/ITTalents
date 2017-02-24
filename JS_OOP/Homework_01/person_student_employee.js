function Person(name,age,isMale) {
    this.name = name;
    this.age = age;
    this.isMale = isMale;
}

Person.prototype.showPersonInfo = function() {
    console.log(`Az sam ${this.name} i sym na ${this.age} godini i sym ${this.isMale}`);
}
function Student(name, age, isMale,score) {
    Person.call(this,name,age,isMale); // constructor stealing
    this.score = score;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; //mnogo vajno!
Student.prototype.showStudentInfo = function() {
    console.log(`Az sym ${this.name} i sym na ${this.age}, myj li sym ${this.isMale} i imam tochki ${this.score}`);
}

function Employee(name,age,isMale,daySalary) {
    Person.call(this,name,age,isMale);
    this.daySalary = daySalary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.calculateOvertime = function(overtimeHours) {
    var hours = 8;
    var salaryForHours = this.daySalary / hours;
    var overtimeSum = 0;
    if(this.age < 18) {
        overtimeSum = 0;
    } else {
        overtimeSum += (overtimeHours * salaryForHours) * 1.5;
    }
    return overtimeSum;
}
var chovek1 = new Person("betina",24,false);
var student1 = new Student("dragan", 25, true, 100);
var slujitel1 = new Employee("petko",17,true,80);
console.log(slujitel1.calculateOvertime(5));
