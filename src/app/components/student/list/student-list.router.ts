import {RouterModule,Routes} from '@angular/router';
import {StudentListComponent} from './student-list.component';
const STUDENTLIST_ROUTES:Routes=[
    {path:'',	
    component: StudentListComponent
    }
];
export const studentListRouter=RouterModule.forChild(STUDENTLIST_ROUTES);