import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'new', component: NewComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'edit/:id', component: EditComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
