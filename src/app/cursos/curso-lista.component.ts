import { CursoService } from './curso.service';
import { Curso } from './curso';
import { Component } from "@angular/core";

@Component({
    selector: 'curso-lista',
    templateUrl: 'curso-lista.component.html'
})
export class CursoListaComponent {

    filterCursos: Curso[] = [];
    _filterby: string;
    _courses: Curso[] = [];

    constructor(private cursoService: CursoService){}

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void{
        this.cursoService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filterCursos = this._courses;
                console.log(this._courses);
                console.log(this.filterCursos);

            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(cursoId: number){
        this.cursoService.deleteById(cursoId).subscribe({
            next: () => {
                console.log("Curso deletado com sucesso!");
                this.retrieveAll();
            },
            error: err => console.log("Error", err)  
        })
    }

    set filter(value: string){
        this._filterby = value;

        this.filterCursos = this._courses.filter((course: Curso) => course.name.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);
    }

    get filter (){
        return this._filterby;
    }

}