import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMsgErrorForm]',
})
export class MsgErrorFormDirective {
  htmlElement: ElementRef<HTMLElement>;
  public _colorText: string = 'red';
  private _messageError: string = 'Este campo es requerido';

  //@Input() colorText:string='red';
  @Input() set colorText(value: string) {
    this._colorText = value;
    this.htmlElement.nativeElement.style.color = value;
  }

  //@Input() messageError:string;
  @Input() set messageError(value: string) {
    this._messageError = value;
    this.htmlElement.nativeElement.innerText = value;
  }

  @Input() set valido(value: boolean) {    
    if (value === true) {
      this.htmlElement.nativeElement.style.display = '';
    } else {
      this.htmlElement.nativeElement.style.display = 'none';
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit() {
    this.setColor();
    this.setMensaje();
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this._messageError;
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._colorText;
  }
}
