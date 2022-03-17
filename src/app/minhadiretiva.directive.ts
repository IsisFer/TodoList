import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMinhadiretiva]'
})
export class MinhadiretivaDirective {

  constructor(private estilo: ElementRef, private estilo2:Renderer2) {
    this.estilo2.setStyle(this.estilo.nativeElement, 'background', '#8c49e8' )


   }

}
