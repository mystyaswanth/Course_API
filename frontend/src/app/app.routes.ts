import { Routes } from '@angular/router';
import { Courselist } from './courselist/courselist';
import { Courseadd } from './courseadd/courseadd';
import { Courseedit } from './courseedit/courseedit';

export const routes: Routes = [

{ path:'', redirectTo:'courselist', pathMatch:'full' },

{ path:'courselist', component:Courselist },

{ path:'courseadd', component:Courseadd },

{ path:'courseedit/:id', component:Courseedit }

];