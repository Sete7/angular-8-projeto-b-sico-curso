import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from './curso';

@Component({
    templateUrl: './curso-info.component.html'
})
export class CursoInfoComponent implements OnInit{

    disabled = false;

    curso: Curso;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router, 
        private cursoService: CursoService
        ){}

    ngOnInit(){
        this.cursoService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.curso = course,
            error: err => console.log('Error', err)            
        })        
        // this.curso = this.cursoService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }

    salvar(){
// É NECESSÁRIO SEMPRE QUE FOR FAZR UMA REQUISIÇÃO DAR UMA SUBSCRIBE PARA PODER REALIZAR A CHAMADA
        // this.cursoService.save(this.curso);
        this.cursoService.save(this.curso).subscribe({
            next: curso => console.log("Curso salvo com sucesso!", curso),
            error: err => console.log('Error', err)
        })
        this.router.navigate(['/curso-lista']);
        // if(this.curso !== null){
        //     this.cursoService.save(this.curso);
        //     this.disabled = false;
        // }

        // this.disabled = true;

        
    }

    // retornarlistaCurso(){
        
    // }
    
}