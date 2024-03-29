import { Component } from '@angular/core'

@Component({
  selector: 'pm-root',
  template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                  <a class='navbar-brand'>{{pageTitle}}</a>
                  <ul class='nav navbar-nav'>
                      <li><a [routerLink]="['/welcome']">Home</a></li>
                      <li [routerLink]="['/products']"><a>Product List</a></li>
                  </ul>
            </div>
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </nav>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = "Acme product Managment"
}