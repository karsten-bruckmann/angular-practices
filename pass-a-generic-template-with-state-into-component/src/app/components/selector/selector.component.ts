import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.less']
})
export class SelectorComponent {
  public selected: string;

  @Input() public options: [];
  @Output() public select: EventEmitter<string> = new EventEmitter<string>();

  @ContentChild('optionTemplate', { static: false })
  public optionTemplateRef: TemplateRef<any>;

  public onSelect(option: string): void {
    this.select.emit(option);
    this.selected = option;
  }
}
