import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  tableData: any;
  deletePopup: boolean = false;
  tableDataEdited: any;
  selectedId: any;
  searchTerm : any;

  constructor(private dataService : ApiServiceService,
    private locations : Router) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.dataService.getEmpList((response: any) => {
      if (response && response.length) {
        this.tableData = response;
      }
    })
  }

  deleteEmployee(value:any){
    this.selectedId = value;
    this.deletePopup = true;
  }
  
  editEmployee(id:any){
    this.locations.navigate(['/employee-details/'+id]);
  }

  deleteConfirm(value : boolean){
    if(value){
      this.dataService.deleteEmployee(this.selectedId,(response: any) => {
        if (response) {
          alert('Employee Deleted');
          this.getAllEmployee();
        }
      })
    }
    this.deletePopup = false;
  }
}
