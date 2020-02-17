import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <menu>
        <li>
          <a routerLink="/">
            Home
          </a>
        </li>

        <li>
          <a routerLink="lazy-foo">
            Lazy foo
          </a>
        </li>

        <li>
          <a routerLink="lazy-bar">
            Lazy bar
          </a>
        </li>
      </menu>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ngx-lazy-loaded-routes-without-ngmodules';
}
