import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[editTooltip]',
  standalone: true,
})
export class TooltipEditDirective implements OnInit {
  @Input() editTooltip = '';

  wrapper: HTMLDivElement = this.renderer.createElement('div');
  tooltip: HTMLDivElement = this.renderer.createElement('div');

  constructor(
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    console.log(this.host, this.editTooltip);
    this.renderer.setAttribute(
      this.host.nativeElement,
      'title',
      this.editTooltip
    );
  }
}