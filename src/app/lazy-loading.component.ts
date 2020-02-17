import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  template: '<div>Lazy loading...</div>',
})
export class LazyLoadingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  async ngOnInit() {
    const path = this.route.routeConfig!.path!;
    const componentType = await this.lazyLoadComponentType(path);
    this.patchRoutes(path, componentType);
    await this.router.navigateByUrl(path);
  }

  private lazyLoadComponentType(componentName: string): Promise<Type<any>> {
    return import(`./${componentName}.component`)
        .then(esModule => esModule.default);
  }

  private patchRoutes(path: string, componentType: Type<any>): void {
    const routes =
      this.replaceRouteWithComponent(componentType, path, this.router.config);
    this.router.resetConfig(routes);
  }

  private replaceRouteWithComponent(
    componentType: Type<any>,
    path: string,
    routes: Routes,
  ): Routes {
    return routes.map(route =>
      (route.path === path)
        ? { ...route, component: componentType }
        : route);
  }
}
