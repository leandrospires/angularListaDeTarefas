import { Directive, ElementRef, HostListener } from '@angular/core';
import { DataPipe } from './data.pipe';

@Directive({
  selector: '[appData]'
})
export class DataDirective {

  constructor(private element: ElementRef) { }

  @HostListener("input", ["$event"])
  onChange(event:any){
    console.log(event.target.value);
    this.element.nativeElement.value=new DataPipe().transform(event.target.value);
  }


}
