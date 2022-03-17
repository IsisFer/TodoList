import { Component, EventEmitter, Input, Output,  } from '@angular/core';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {

    @Input()
    titulo: string = ''

    Elementos = ['']

    Afazeres = ''

    Adicionar() {
      this.Elementos.push(this.Afazeres);
      this.Afazeres = ''
    }

    Retirar(Elemento: string){
      this.Elementos.splice( this.Elementos.indexOf(Elemento),1);
    }

    LimparTudo(){
      this.Elementos.splice(this.Afazeres.indexOf(this.Afazeres));
    }

    ngOnInit(): void{
      this.RecuperarDados()
    }

    SalvarDados(valor:string): void{
      this.Elementos.push(valor)
      let ArSt = JSON.stringify(this.Elementos)
      localStorage.setItem('Elemento',ArSt)
      this.RecuperarDados()

    }

    RecuperarDados(): void{
      let storage = localStorage.getItem('Elemento')
      let Array = JSON.parse(storage || '[]')
      this.Elementos = Array

    }

    RetirarDados(index: number): void {
      this.Elementos.splice(index, 1)

      let ArSt = JSON.stringify(this.Elementos)
      localStorage.setItem('Elemento',ArSt)
      this.RecuperarDados()

    }

    
}
