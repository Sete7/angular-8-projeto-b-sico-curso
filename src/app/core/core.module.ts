import { Error404Component } from './component/error-404/error-404.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
// import { NgModule } from "@angular/core";
// import { RouterLink, RouterModule } from "@angular/router";
// import { NavBarComponent }

import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    exports: [
        NavBarComponent
    ],
    imports: [
        RouterModule.forChild ([
            {
                path: '**', component: Error404Component
            }
        ])
    ]

})
export class CoreModule { }