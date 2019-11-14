import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ID } from '@datorama/akita';

import { ComparisonItemInterface } from '../../models/comparison-item.interface';

@Component({
  selector: 'page-comparison-comparison-item',
  templateUrl: './comparison-item.component.html',
  styleUrls: ['./comparison-item.component.less']
})
export class ComparisonItemComponent {
  @Input() public data: ComparisonItemInterface;
  @Output() public remove: EventEmitter<ID> = new EventEmitter<ID>();

  removeItem() {
    this.remove.emit(this.data.id);
  }
}
