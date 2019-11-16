import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';
import { ID } from '@datorama/akita';

import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ComparisonItemInterface } from '../../models/comparison-item.interface';

@Component({
    selector: 'page-comparison-comparison-item',
    templateUrl: './comparison-item.component.html',
    styleUrls: ['./comparison-item.component.less'],
})
export class ComparisonItemComponent {
    constructor(private sanitizer: DomSanitizer) {}

    @Input() public data: ComparisonItemInterface;
    @Output() public remove: EventEmitter<ID> = new EventEmitter<ID>();

    public removeItem(): void {
        this.remove.emit(this.data.id);
    }

    @HostBinding('style') public get recommendation(): SafeStyle | string {
        return this.data.recommendation
            ? this.sanitizer.bypassSecurityTrustStyle(
                  `background-color: ${this.data.recommendation}`
              )
            : '';
    }
}
