import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRouteGuard } from "@shared/auth/auth-route-guard";

import { HomeComponent } from "./home/home.component";

import { CompaniesComponent } from "./companies/companies.component";
import { AddCompanyComponent } from "./companies/add-company/add-company.component";

import { OfficesComponent } from "./offices/offices.component";
import { AddOfficeComponent } from "./offices/add-office/add-office.component";

import { EmployeesComponent } from "./employees/employees.component";
import { AddEmployeeComponent } from "./employees/add-employee/add-employee.component";
import { EditEmployeeComponent } from "./employees/edit-employee/edit-employee.component";
import { AbsentEmployeesComponent } from "./employees/absent-employees/absent-employees.component";
import { EmployeesWfhComponent } from "./employees/employees-wfh/employees-wfh.component";

import { PositionsComponent } from "./positions/positions.component";
import { AddPositionComponent } from "./positions/add-position/add-position.component";

import { DepartmentsComponent } from "./departments/departments.component";
import { AddDepartmentComponent } from "./departments/add-department/add-department.component";

import { ApplicationAbsentComponent } from "./application-absent/application-absent.component";
import { AddApplicationAbsentComponent } from "./application-absent/add-application-absent/add-application-absent.component";

import { UsersComponent } from "./users/users.component";
import { TenantsComponent } from "./tenants/tenants.component";
import { RolesComponent } from "app/roles/roles.component";
import { ChangePasswordComponent } from "./users/change-password/change-password.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: AppComponent,
        children: [
          {
            path: "home",
            component: HomeComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "companies",
            component: CompaniesComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "add-company",
            component: AddCompanyComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "offices",
            component: OfficesComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "add-office",
            component: AddOfficeComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "employees",
            component: EmployeesComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "add-employee",
            component: AddEmployeeComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "edit-employee/:id",
            component: EditEmployeeComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "absent-employees",
            component: AbsentEmployeesComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "employees-wfh",
            component: EmployeesWfhComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "positions",
            component: PositionsComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "add-position",
            component: AddPositionComponent,
            // canActivate: [AppRouteGuard],
          },
          {
            path: "departments",
            component: DepartmentsComponent,
          },
          {
            path: "add-department",
            component: AddDepartmentComponent,
          },
          {
            path: "applications-absent",
            component: ApplicationAbsentComponent,
          },
          {
            path: "add-application-absent",
            component: AddApplicationAbsentComponent,
          },
          {
            path: "users",
            component: UsersComponent,
            data: { permission: "Pages.Users" },
            canActivate: [AppRouteGuard],
          },
          {
            path: "roles",
            component: RolesComponent,
            data: { permission: "Pages.Roles" },
            canActivate: [AppRouteGuard],
          },
          {
            path: "tenants",
            component: TenantsComponent,
            data: { permission: "Pages.Tenants" },
            canActivate: [AppRouteGuard],
          },
          {
            path: "update-password",
            component: ChangePasswordComponent,
            canActivate: [AppRouteGuard],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
