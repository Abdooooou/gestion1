import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './layouts/forms/forms.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

export const routes: Routes = [
  { path: 'forms', component: FormsComponent },
  { path: 'sidebar',component:SidebarComponent},
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [FormsComponent]