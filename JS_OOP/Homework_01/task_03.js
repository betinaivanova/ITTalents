function Student(name, subject, age) {
    this.name = name;
    this.subject = subject;
    this.age = age;
    this.grade = 5.0;
    this.yearInCollege = 1;
    this.hasDegree = false;
    this.money = 200.0;
}
Student.prototype.upYear = function () {
    if (this.hasDegree == false) {
        this.yearInCollege++;
    } else {
        console.log(`${this.name} veche e zavyrshil`);
    }
    if (this.yearInCollege == 4) {
        this.hasDegree = true;
    }
}
Student.prototype.receiveScholarship = function (min, amount) {
    if (this.grade >= min && this.age < 30) {
        this.money += amount;
    }
    return this.money;
}

function StudentGroup(groupSubject) {
    this.groupSubject = groupSubject;
    this.students = new Array(5);
    this.freePlaces = 5;
}
StudentGroup.prototype.addStudent = function (student) {
    var studentsLength = this.students.length;
    var position = studentsLength - this.freePlaces;
    if ((this.groupSubject == student.subject) && this.freePlaces !== 0) {
        this.students[position] = student;
        this.freePlaces--;
    }
}
StudentGroup.prototype.emptyGroup = function () {
    this.students = new Array(5);
    this.freePlaces = 5;
}
StudentGroup.prototype.theBestStudentName = function () {
    var maxGrade = this.students[0].grade;
    for (var index = 0; index < this.students.length; index++) {
        if (this.students[index].grade > maxGrade) {
            maxGrade = this.students[index].grade;
            var studentName = this.students[index].name;
        }
    }
    return studentName;
}
var firstStudent = new Student("Ivan", "Informatika", 22);
var secondStudent = new Student("Dragan", "Informatika", 22);
firstStudent.grade = 4.00;
secondStudent.grade = 6.00;
var firstStudentGroup = new StudentGroup("Informatika");
firstStudent.upYear();
console.log(firstStudent.receiveScholarship(5.00, 200));
firstStudentGroup.addStudent(firstStudent);
firstStudentGroup.addStudent(secondStudent);
console.log(firstStudentGroup.theBestStudentName());




