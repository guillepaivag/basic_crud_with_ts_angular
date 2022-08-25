import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  employeeArray: Employee[] = [
    { uid: 1, name: 'Guille', country: 'PY' },
    { uid: 2, name: 'Jessi', country: 'PY' },
    { uid: 3, name: 'Tobi', country: 'PY' },
  ]
  
  selectedEmployee: Employee = new Employee()

  addOrEdit () {
    
    if (this.selectedEmployee.uid) {
      // Update
      const index = this.employeeArray.findIndex(v => v.uid === this.selectedEmployee.uid)

      this.employeeArray[index].name = this.selectedEmployee.name
      this.employeeArray[index].country = this.selectedEmployee.country

    } else {
      // Add
      this.selectedEmployee.uid = this.employeeArray.length + 1
      this.employeeArray.push(this.selectedEmployee)

      this.selectedEmployee = new Employee()
    }
  }

  selectEmployee (employee:Employee) {
    if (this.selectedEmployee && this.selectedEmployee.uid === employee.uid) {
      this.selectedEmployee = new Employee()
      return
    }
    
    this.selectedEmployee = employee
  }

  deleteEmployee () {
    const index = this.employeeArray.findIndex(v => v.uid === this.selectedEmployee.uid)
    
    if (confirm('Are you sure you want to delete it?')) {
      this.employeeArray.splice(index, 1)
      this.selectedEmployee = new Employee()
    }
  }
}
