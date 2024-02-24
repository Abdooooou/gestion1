import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Use 'styleUrls' instead of 'styleUrl'
})
export class HeaderComponent {
  // You can include other necessary properties and methods here

  toggle() {
    const element = document.body as HTMLBodyElement;
    element.classList.toggle('toggle-sidebar');
  }
}
