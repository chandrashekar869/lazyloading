/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

 import { Component, OnInit } from '@angular/core';
 import { RouterModule, Routes ,Router} from '@angular/router';
 import { ToastrService } from 'ngx-toastr';

 // Components
 import { StudentListComponent } from '../student/list/student-list.component';
 import { StudentDetailsComponent } from '../student/details/student-details.component';
 import { StudentAddComponent } from '../student/add/student-add.component';

 // Services
 import { routerTransition } from '../../services/config/config.service';

 @Component({
 	selector: 'app-home',
 	templateUrl: './home.component.html',
 	styleUrls: ['./home.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })


 export class HomeComponent implements OnInit {
 	active:string;
 	constructor(private router: Router,private toastr: ToastrService) {
 		// Detect route changes for active sidebar menu
 		this.router.events.subscribe((val) => {
 			this.routeChanged(val);
 		});
 	}

 	ngOnInit() {
 	}

 	// Detect route changes for active sidebar menu
 	routeChanged(val){
 		this.active = val.url;
 	}

 	// Logout User
 	logOut(){
 		this.toastr.success('Success', "Logged Out Successfully");
 		localStorage.removeItem('userData');
 		this.router.navigate(['/login']);
 	}
 }


 // Define and export child routes of HomeComponent
 export const homeChildRoutes : Routes = [
 {
 	path: '',
 	loadChildren:"app/components/student/list/student-list.module#StudentListModule"
 },
 {
 	path: 'add',
	loadChildren:"app/components/student/add/student-add.module#StudentAddModule"
},
 {
 	path: 'update/:id',
	 loadChildren:"app/components/student/add/student-add.module#StudentAddModule"
 },
 {
 	path: 'detail/:id',
	 loadChildren:"app/components/student/details/student-details.module#StudentDetailModule"
 }
 ];

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
