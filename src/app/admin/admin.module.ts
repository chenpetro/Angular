import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayout } from "./shared/admin-layout/admin-layout";
import { LoginPage } from "./login-page/login-page";

@NgModule({
    // declarations: [


    // ],
        imports: [
            CommonModule,
            AdminLayout,
            LoginPage,
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

