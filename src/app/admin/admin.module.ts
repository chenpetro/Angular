import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayout } from "./shared/admin-layout/admin-layout.component";
import { LoginPage } from "./login-page/login-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    // declarations: [


    // ],
        imports: [
            CommonModule,
            AdminLayout,
            LoginPage,
            FormsModule,
            ReactiveFormsModule,
            RouterModule.forChild([

                {
                    path: '', component: AdminLayout, children: [
                    {path: '', redirectTo: "/admin/login", pathMatch: 'full'},

                    {path: 'login', component: LoginPage}

                    ]
                }

            ])
        ],
    })

export class AdminModule {}

