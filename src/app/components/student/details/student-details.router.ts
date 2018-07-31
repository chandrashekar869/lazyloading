import {RouterModule,Routes} from '@angular/router';
import {StudentDetailsComponent} from './student-details.component';
const STUDENTDETAIL_ROUTES:Routes=[
    {path:'',	
    component: StudentDetailsComponent
    }
];
export const studentDetailRouter=RouterModule.forChild(STUDENTDETAIL_ROUTES);