import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  
  constructor(private cartService: CartService,
    private router: Router,
    private productService: ProductService) {}
    
  ngOnInit() {
    this.isLoggedIn = !!this.productService.user;
  }
  
  logout() {
    // Clear user data and set isLoggedIn to false
    this.productService.logout();
    this.isLoggedIn = false;
    alert('Logged Out')
    // You can also navigate to the login page or any other page as needed
    this.router.navigate(['/home']);
  }

}
