
 import { Component } from '@angular/core'; 
 import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ MatIconModule],
  template: `
     <footer>
      <div class="max-w-6xl mx-auto">
        <div class="grid">
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
            <div>
          <h3>Social Media</h3>
          <div class="social-icons">
            <a href="#"><mat-icon>facebook</mat-icon></a>
            <a href="#"><mat-icon>x</mat-icon></a>
            <a href="#"><mat-icon>instagram</mat-icon></a>
            <a href="#"><mat-icon>linkedin</mat-icon></a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  `,
})
export default class FooterPage {
} 
