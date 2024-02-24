import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  
})
export class HeaderComponent {
toggle() {
  const element = docuimport { Component } from '@angular/core';

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
  ment.body as HTMLBodyElement
  element.classList.toggle('toggle-sidebar')
}
}
