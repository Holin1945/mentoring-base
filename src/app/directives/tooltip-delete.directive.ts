import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[deleteTooltip]',
  standalone: true,
})
export class TooltipDeleteDirective implements OnInit {
  @Input() deleteTooltip = '';

  wrapper: HTMLDivElement = this.renderer.createElement('div');
  tooltip: HTMLDivElement = this.renderer.createElement('div');

  constructor(
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    console.log(this.host, this.deleteTooltip);
    this.renderer.setAttribute(
      this.host.nativeElement,
      'title',
      this.deleteTooltip
    );
  }
}