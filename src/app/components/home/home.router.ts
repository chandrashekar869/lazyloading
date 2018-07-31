import {RouterModule,Routes} from '@angular/router';
import {HomeComponent,homeChildRoutes} from './home.component';
import { AuthService } from '../../services/auth/auth.service';
const HOME_ROUTES:Routes=[
    {path:'',	
    component: HomeComponent,
    children:homeChildRoutes
    }
];
export const homeRouter=RouterModule.forChild(HOME_ROUTES);