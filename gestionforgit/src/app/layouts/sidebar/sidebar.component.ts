import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsComponent } from '../forms/forms.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarComponent,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private router: Router) {}
  navigateToForms() {
    this.router.navigate(['/forms']);
  }
  
}

