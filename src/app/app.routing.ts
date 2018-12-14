import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { CoursesComponent } from './courses/courses.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
	//Un-Authenticated routes
	{ path: '', component: HomeComponent },
	{ path: 'about-us', component: AboutComponent },
	{ path: 'course-levels', component: CoursesComponent },
	{ path: 'pricing', component: PricingComponent },
	//Authenticated routes
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);