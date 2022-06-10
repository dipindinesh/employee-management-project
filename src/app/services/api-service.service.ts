import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  userData   : any;
	constructor(
		private http: HttpClient) { }

     /*
      author : dipin
      desc   : get employee list
    */
    getEmpList(cb:any) {
        let url: string = "https://retoolapi.dev/DV6x5A/employees";
        let promise: any = new Promise((resolve, reject) => {
            this.http.get(url)
                .toPromise()
                .then(res => {
                    cb(res);
                })
        })
    }

     /*
      author : dipin
      desc   : get employee details
    */
      getEmpDetails(id:any,cb:any) {
        let url: string = "https://retoolapi.dev/DV6x5A/employees/"+id;
        let promise: any = new Promise((resolve, reject) => {
            this.http.get(url)
                .toPromise()
                .then(res => {
                    cb(res);
                })
        })
    }

    /*
 	 author : DIpin
 	 desc   : submit Add/ edit Form
    */
	submitForm(value:any,form:any, cb:any) {
		let parms = {
			company: form.controls['companyName'].value,
      dob: form.controls['dob'].value,
      email: form.controls['emailId'].value,
      fullName: form.controls['name'].value,
      gender: form.controls['gender'].value,
      phone: form.controls['contactNumber'].value,
      position: form.controls['position'].value
		}
		let url: string = 'https://retoolapi.dev/DV6x5A/employees';
		if (value.text == "add") {
			let promise: any = new Promise((resolve, reject) => {
				this.http.post(url, parms)
					.toPromise()
					.then(res => {
						cb(res);
					})
			})
		}
		else {
      console.log(value);
			let promise: any = new Promise((resolve, reject) => {
				this.http.put(url + "/" + value.id, parms)
					.toPromise()
					.then(res => {
						cb(res);
					})
			})
		}
	}

  /*
      author : dipin
      desc   : delete employee list
    */
      deleteEmployee(id:any,cb:any) {
        let url: string = "https://retoolapi.dev/DV6x5A/employees/"+id;
        let promise: any = new Promise((resolve, reject) => {
            this.http.delete(url)
                .toPromise()
                .then(res => {
                    cb(res);
                })
        })
    }

}
