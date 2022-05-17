import { NgModule } from "@angular/core";
import { NgChartsModule } from "ng2-charts";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientJsonpModule } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { AccordionModule } from "ngx-bootstrap/accordion";

import { NgxPaginationModule } from "ngx-pagination";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceProxyModule } from "@shared/service-proxies/service-proxy.module";
import { SharedModule } from "@shared/shared.module";
import { HomeComponent } from "@app/home/home.component";
// tenants
import { TenantsComponent } from "@app/tenants/tenants.component";
import { CreateTenantDialogComponent } from "./tenants/create-tenant/create-tenant-dialog.component";
import { EditTenantDialogComponent } from "./tenants/edit-tenant/edit-tenant-dialog.component";
// roles
import { RolesComponent } from "@app/roles/roles.component";
import { CreateRoleDialogComponent } from "./roles/create-role/create-role-dialog.component";
import { EditRoleDialogComponent } from "./roles/edit-role/edit-role-dialog.component";
// users
import { UsersComponent } from "@app/users/users.component";
import { CreateUserDialogComponent } from "@app/users/create-user/create-user-dialog.component";
import { EditUserDialogComponent } from "@app/users/edit-user/edit-user-dialog.component";
import { ChangePasswordComponent } from "./users/change-password/change-password.component";
import { ResetPasswordDialogComponent } from "./users/reset-password/reset-password.component";
// layout
import { HeaderComponent } from "./layout/header.component";
import { HeaderLeftNavbarComponent } from "./layout/header-left-navbar.component";
import { HeaderLanguageMenuComponent } from "./layout/header-language-menu.component";
import { HeaderUserMenuComponent } from "./layout/header-user-menu.component";
//Sidebar
import { SidebarComponent } from "./layout/sidebar.component";
import { SidebarLogoComponent } from "./layout/sidebar-logo.component";
import { SidebarUserPanelComponent } from "./layout/sidebar-user-panel.component";
import { SidebarMenuComponent } from "./layout/sidebar-menu.component";
//Companies
import { CompaniesComponent } from "./companies/companies.component";
import { AddCompanyComponent } from "./companies/add-company/add-company.component";
import { EditCompanyComponent } from "./companies/edit-company/edit-company.component";
//Offices
import { OfficesComponent } from "./offices/offices.component";
import { AddOfficeComponent } from "./offices/add-office/add-office.component";
import { EditOfficeComponent } from "./offices/edit-office/edit-office.component";
//Employees
import { EmployeesComponent } from "./employees/employees.component";
import { AddEmployeeComponent } from "./employees/add-employee/add-employee.component";
import { EditEmployeeComponent } from "./employees/edit-employee/edit-employee.component";
//Positions
import { PositionsComponent } from "./positions/positions.component";
import { AddPositionComponent } from "./positions/add-position/add-position.component";
import { EditPositionComponent } from "./positions/edit-position/edit-position.component";
//Department
import { DepartmentsComponent } from "./departments/departments.component";
import { AddDepartmentComponent } from "./departments/add-department/add-department.component";
import { EditDepartmentComponent } from "./departments/edit-department/edit-department.component";
//Application for absent
import { ApplicationAbsentComponent } from "./application-absent/application-absent.component";
import { AddApplicationAbsentComponent } from "./application-absent/add-application-absent/add-application-absent.component";
import { EditApplicationAbsentComponent } from "./application-absent/edit-application-absent/edit-application-absent.component";
//Absent employees & remote employees
import { AbsentEmployeesComponent } from "./employees/absent-employees/absent-employees.component";
import { EmployeesWfhComponent } from "./employees/employees-wfh/employees-wfh.component";
//footer
import { FooterComponent } from "./layout/footer.component";
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    // layout
    HeaderComponent,
    HeaderLeftNavbarComponent,
    HeaderLanguageMenuComponent,
    HeaderUserMenuComponent,
    FooterComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarUserPanelComponent,
    SidebarMenuComponent,
    CompaniesComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    OfficesComponent,
    AddOfficeComponent,
    EditOfficeComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    PositionsComponent,
    AddPositionComponent,
    EditPositionComponent,
    DepartmentsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    ApplicationAbsentComponent,
    AddApplicationAbsentComponent,
    EditApplicationAbsentComponent,
    AbsentEmployeesComponent,
    EmployeesWfhComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forChild(),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    NgChartsModule,
    NgbModule,
    AccordionModule.forRoot(),
  ],
  providers: [],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
  ],
})
export class AppModule {}
