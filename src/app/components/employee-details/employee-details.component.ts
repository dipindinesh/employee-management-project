import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  tableDataEdited: any;
  employeeId: any;
  employeeDetails: any;
  name: any;
  dob: any;
  emailId: any;
  contactNumber: any;
  companyName: any;
  position: any;
  personalDetailError: boolean = false;
  gender: any;
  dobModel : any;
  
  constructor(private dataService : ApiServiceService,
    private route : Router,
    ) { }

  ngOnInit(): void {
    this.employeeId = this.route.url.split('/')[this.route.url.split('/').length - 1];
    this.createFormControls();
		this.createForm();
    if(this.employeeId)
    this.dataService.getEmpDetails(this.employeeId,(response: any) => {
      if (response) {
        this.tableDataEdited = response;
          this.employeeDetails.patchValue({
            name    : this.tableDataEdited.fullName,
            dob     : new Date(this.tableDataEdited.dob),
            emailId : this.tableDataEdited.email,
            contactNumber : this.tableDataEdited.phone,
            companyName : this.tableDataEdited.company,
            position : this.tableDataEdited.position,
            gender : this.tableDataEdited.gender
          })
      }
    });
  }

  /*
 	 author : dipin
 	 desc   : create Form Controls
	*/
	createFormControls() {
		let beta            = "^[a-zA-Z ]+[.]*[a-zA-Z]*$";
		let contactNumber   = "^[0-9+() -]*$";
    let useName         = "^[a-zA-Z0-9._@]+$";
		let emailPattern    = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$";
		this.name 			 = new FormControl('', [Validators.required,this.noWhitespaceValidator,Validators.pattern(beta)]);
		this.dob         = new FormControl(new Date());
    this.emailId     = new FormControl('', [Validators.required,Validators.pattern(emailPattern)]);
    this.contactNumber   = new FormControl('', [Validators.required,Validators.pattern(contactNumber)]);
    this.gender     = new FormControl('', [Validators.pattern(useName)]);
    this.companyName     = new FormControl('', [Validators.required]);
    this.position     = new FormControl('', [Validators.required]);
	}

    /*
 	 author : Dipin
 	 desc   : validation for white space in form
 	 params :
	*/
	noWhitespaceValidator(control: FormControl) {
		let isWhitespace = (control.value || '').trim().length === 0;
		let isValid = !isWhitespace;
		return isValid ? null : { 'whitespace': true }
	}

    /*
 	 author : dipin
 	 desc   : create Form Groups
	*/
    createForm() {
    	this.employeeDetails = new FormGroup({
        name    : this.name,
        dob     : this.dob,
        emailId : this.emailId,
        contactNumber : this.contactNumber,
        companyName : this.companyName,
        position : this.position,
        gender : this.gender
      });
    }

    submitDetail(){
      if(this.employeeDetails.status != 'VALID'){
        this.personalDetailError = true;
        return;
      }
      else {
        this.personalDetailError = false;
        let type = {text:'',id:''};
        if(!this.employeeId){
          type.text = 'add';
        }
        else{
          type.id = this.employeeId;
        }
        this.dataService.submitForm(type,this.employeeDetails,(response: any) => {
          if (response) {
            (type.text == 'add')?alert('Employee Added'):alert('Employee Updated');
          }
        });
      }
    }

    backToList(){
      this.route.navigate(['/employee-list'])
    }

}
