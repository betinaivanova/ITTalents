function Computer(year,price,isNotebook,hardDiskMemory,freeMemory,operationSystem) {
    this,year = year;
    this.price = price;
    this.isNotebook = isNotebook;
    this.hardDiskMemory = hardDiskMemory;
    this.freeMemory = freeMemory;
    this.operationSystem = operationSystem;
}

Computer.prototype.changeOperationSystem = function(newOperationSystem) {
    this.operationSystem = newOperationSystem;
}
Computer.prototype.useMemory = function(memory) {
    if(this.freeMemory >= memory) {
        this.freeMemory -= memory;
    } else {
        console.log("Not enough free memory!");
    }
}
Computer.prototype.comparePrice = function(computer) {
    if(this.price > computer.price) {
        return -1;
    }
    else if(this.price < computer.price) {
        return 1;
    } else {
        return 0;
    }
}
var firstComputer = new Computer(2016,1600,false,1000,500,'Windows');
var secondComputer = new Computer(2016,1700,false,1000,500,'Windows');
firstComputer.changeOperationSystem('Linux');
firstComputer.useMemory(300);
console.log(firstComputer.comparePrice(secondComputer));
