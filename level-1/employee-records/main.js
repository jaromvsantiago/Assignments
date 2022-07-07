
var employees = [];
function Employee(name, title, salary, status){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status
    
}
var emOne = new Employee("Jim", "Salesman", "$20/Hr", "Full-Time")
var emTwo = new Employee("Michael", "Manager", "$100,000/year", "Contract")
var emThree = new Employee("Ryan", "Temp", "15/Hr", "Part-Time")


Employee.prototype.printEmployeeForm =  function(){
    console.log("Name: " + this.name + ", "+"Job Title: "+ this.title 
    + ", "+"Salary: "+ this.salary + ", "+"Status: "+this.status)
}


emOne.printEmployeeForm()
emTwo.printEmployeeForm()
emThree.printEmployeeForm()

employees.push(emOne, emTwo, emThree)
//employees.push(emTwo)
//employees.push(emThree)

console.log(employees)