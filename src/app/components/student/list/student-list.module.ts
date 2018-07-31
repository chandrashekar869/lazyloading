import {StudentListComponent} from './student-list.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {studentListRouter} from './student-list.router';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { PhonePipe } from '../../../pipes/phone.pipe';
@NgModule({
    declarations:[FilterPipe,PhonePipe,StudentListComponent],
    imports:[studentListRouter,CommonModule,FormsModule,ReactiveFormsModule]
})

export class StudentListModule{}