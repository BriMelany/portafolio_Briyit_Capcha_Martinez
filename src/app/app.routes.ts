import {Routes} from '@angular/router';
import {Home} from './pages/home';import {Detail} from './pages/detail/detail';
export const routes:Routes=[{path:'',component:Home},{path:'proyecto/:id',component:Detail},{path:'**',redirectTo:''}];
