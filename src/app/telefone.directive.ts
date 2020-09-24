import { Directive, ElementRef, HostListener } from '@angular/core';
import { ContatoPipe } from './contato.pipe';

@Directive({
  selector: '[appTelefone]'
})
export class TelefoneDirective {

  constructor(private element: ElementRef) { }

  @HostListener("input", ["$event"])
  onChange(event:any){
    this.element.nativeElement.value=new ContatoPipe().transform(event.target.value);
  }

  @HostListener("focus", ["$event"])
  onFocus(event:any){
    console.log('focos', event)
    //this.element.nativeElement.value=new ContatoPipe().transform(event.target.value);
  }

  @HostListener("click", ["$event"])
  onClick(event:any){
    console.log('focos', event)
    //this.element.nativeElement.value=new ContatoPipe().transform(event.target.value);
  }

}
