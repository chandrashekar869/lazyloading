import {RouterModule,Routes} from '@angular/router';
import {StudentAddComponent} from './student-add.component';
const STUDENTADD_ROUTES:Routes=[
    {path:'',	
    component: StudentAddComponent
    }
];
export const studentAddRouter=RouterModule.forChild(STUDENTADD_ROUTES);