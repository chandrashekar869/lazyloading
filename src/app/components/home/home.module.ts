import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {homeRouter} from './home.router';
@NgModule({
    declarations:[HomeComponent],
    imports:[homeRouter,RouterModule,CommonModule,FormsModule,ReactiveFormsModule]
})

export class HomeModule{}