import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/app-component-base";
import { AccordionConfig } from "ngx-bootstrap/accordion";
import {
  Router,
  RouterEvent,
  NavigationEnd,
  PRIMARY_OUTLET,
} from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";
import { MenuItem } from "@shared/layout/menu-item";

// such override allows to keep some initial values
export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "sidebar-menu",
  templateUrl: "./sidebar-menu.component.html",
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }],
})
export class SidebarMenuComponent extends AppComponentBase implements OnInit {
  menuItems: MenuItem[];
  menuItemsMap: { [key: number]: MenuItem } = {};
  activatedMenuItems: MenuItem[] = [];
  routerEvents: BehaviorSubject<RouterEvent> = new BehaviorSubject(undefined);
  homeRoute = "/app/about";

  constructor(injector: Injector, private router: Router) {
    super(injector);
    this.router.events.subscribe(this.routerEvents);
  }

  ngOnInit(): void {
    this.menuItems = this.getMenuItems();
    this.patchMenuItems(this.menuItems);
    this.routerEvents
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const currentUrl = event.url !== "/" ? event.url : this.homeRoute;
        const primaryUrlSegmentGroup =
          this.router.parseUrl(currentUrl).root.children[PRIMARY_OUTLET];
        if (primaryUrlSegmentGroup) {
          this.activateMenuItems("/" + primaryUrlSegmentGroup.toString());
        }
      });
  }

  getMenuItems(): MenuItem[] {
    return [
      new MenuItem(this.l("Dashboard"), "/app/home", "fas fa-home"),
      new MenuItem("Companies", "", "", "", [
        new MenuItem("Companies List", "/app/companies", ""),
        new MenuItem("Add Company", "/app/add-company", ""),
      ]),
      new MenuItem("Offices", "", "", "", [
        new MenuItem("Offices List", "/app/offices", ""),
        new MenuItem("Add Office", "/app/add-office", ""),
      ]),
      new MenuItem("Employees", "", "", "", [
        new MenuItem("Employees List", "/app/employees", ""),
        new MenuItem("Add Employees", "/app/add-employee", ""),
        new MenuItem("Absent Employees", "/app/absent-employees", ""),
        new MenuItem("Employees wfh", "/app/employees-wfh", ""),
      ]),
      new MenuItem("Positions", "", "", "", [
        new MenuItem("Positions List", "/app/positions", ""),
        new MenuItem("Add Position", "/app/add-position", ""),
      ]),
      new MenuItem("Departments", "", "", "", [
        new MenuItem("Departments List", "/app/departments", ""),
        new MenuItem("Add Departments", "/app/add-department", ""),
      ]),
      new MenuItem("Application Absent", "", "", "", [
        new MenuItem("ApplicationAbsent List", "/app/applications-absent", ""),
        new MenuItem(
          "Add ApplicationAbsent",
          "/app/add-application-absent",
          ""
        ),
      ]),
    ];
  }

  patchMenuItems(items: MenuItem[], parentId?: number): void {
    items.forEach((item: MenuItem, index: number) => {
      item.id = parentId ? Number(parentId + "" + (index + 1)) : index + 1;
      if (parentId) {
        item.parentId = parentId;
      }
      if (parentId || item.children) {
        this.menuItemsMap[item.id] = item;
      }
      if (item.children) {
        this.patchMenuItems(item.children, item.id);
      }
    });
  }

  activateMenuItems(url: string): void {
    this.deactivateMenuItems(this.menuItems);
    this.activatedMenuItems = [];
    const foundedItems = this.findMenuItemsByUrl(url, this.menuItems);
    foundedItems.forEach((item) => {
      this.activateMenuItem(item);
    });
  }

  deactivateMenuItems(items: MenuItem[]): void {
    items.forEach((item: MenuItem) => {
      item.isActive = false;
      item.isCollapsed = true;
      if (item.children) {
        this.deactivateMenuItems(item.children);
      }
    });
  }

  findMenuItemsByUrl(
    url: string,
    items: MenuItem[],
    foundedItems: MenuItem[] = []
  ): MenuItem[] {
    items.forEach((item: MenuItem) => {
      if (item.route === url) {
        foundedItems.push(item);
      } else if (item.children) {
        this.findMenuItemsByUrl(url, item.children, foundedItems);
      }
    });
    return foundedItems;
  }

  activateMenuItem(item: MenuItem): void {
    item.isActive = true;
    if (item.children) {
      item.isCollapsed = false;
    }
    this.activatedMenuItems.push(item);
    if (item.parentId) {
      this.activateMenuItem(this.menuItemsMap[item.parentId]);
    }
  }

  isMenuItemVisible(item: MenuItem): boolean {
    if (!item.permissionName) {
      return true;
    }
    return this.permission.isGranted(item.permissionName);
  }
}
