import {StudentAddComponent} from './student-add.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {studentAddRouter} from './student-add.router';
@NgModule({
    declarations:[StudentAddComponent],
    imports:[studentAddRouter,RouterModule,CommonModule,FormsModule,ReactiveFormsModule]
})

export class StudentAddModule{}