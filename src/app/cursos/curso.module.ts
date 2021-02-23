import { AppPipeModule } from './../shared/pipe/app-pipe.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// MODULE CURSO
import { CursoInfoComponent } from './curso-info.component';
import { CursoListaComponent } from './curso-lista.component';
// MODULE STAR
import { StarModule } from './../shared/component/star/star.module';
// MODULE PIPE

@NgModule({
    declarations: [
        CursoListaComponent,
        CursoInfoComponent        
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        StarModule,
        AppPipeModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule.forChild([
            { path: 'curso-lista', component: CursoListaComponent },
            { path: 'curso-info/:id', component: CursoInfoComponent }
        ])
    ]
})
export class CursoModule {

}