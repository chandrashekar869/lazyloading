import {StudentDetailsComponent} from './student-details.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {studentDetailRouter} from './student-details.router';
@NgModule({
    declarations:[StudentDetailsComponent],
    imports:[studentDetailRouter,RouterModule,CommonModule,FormsModule,ReactiveFormsModule]
})

export class StudentDetailModule{}