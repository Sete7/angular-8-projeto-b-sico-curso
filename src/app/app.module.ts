import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import { CursoModule } from './cursos/curso.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpClientModule,
    CursoModule,
    CoreModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([      
      { path: '', redirectTo: 'curso-lista', pathMatch: 'full' }
    ])
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
