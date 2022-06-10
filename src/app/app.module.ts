import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ApiServiceService } from './services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { GenderPipe } from './pipes/gender.pipe';
import { DateDobPipe } from './pipes/date-dob.pipe';
import { DialogComponentComponent } from './components/dialog-component/dialog-component.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    GenderPipe,
    DateDobPipe,
    DialogComponentComponent,
    EmployeeDetailsComponent,
    PaginationComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiServiceService,GenderPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
