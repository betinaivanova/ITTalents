function Task(name,workingHours) {
    this.name = name;
    this.workingHours = workingHours;
}
function Employee(name) {
    this.name = name;
    this.currentTask = null;
    this.hoursLeft = 0.0;
}
Employee.prototype.work = function() {
    if(this.currentTask !== null) {
        if(this.hoursLeft >= this.currentTask.workingHours) {
            this.hoursLeft -= this.currentTask.workingHours;
            this.currentTask.workingHours = 0;
            this.currentTask = null;
        } else if(this.hoursLeft < this.currentTask.workingHours) {
            this.currentTask.workingHours -= this.hoursLeft;
            this.hoursLeft = 0;
        }
        this.showReport();
    } else {
        console.log("Lipsva zadacha za slujitel: " + this.name);
    }
}
Employee.prototype.showReport = function() {
    if(this.currentTask !== null) {
        console.log(`Imeto na rabotnika e: ${this.name}`);
        console.log(`Imeto na zadachata e: ${this.currentTask.name}`);
        console.log(`Rabotnite chasove, koito ostavat na rabotnika sa: ${this.hoursLeft}`);
        console.log(`Chasovete, koito ostavat na tekushtata zadacha, za da byde izpylnena: ${this.currentTask.workingHours}`);
    } else {
        console.log(`Zadachata e zavyrshena ot: ${this.name}`);
    }
}

var firstTask = new Task('Website',8);
var firstEmployee = new Employee('Ivan');
firstEmployee.currentTask = firstTask;
firstEmployee.hoursLeft = 4;
firstEmployee.work();
