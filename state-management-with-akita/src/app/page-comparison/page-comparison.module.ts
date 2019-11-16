import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ComparisonItemComponent } from './components/comparison-item/comparison-item.component';
import { PageComparisonComponent } from './page-comparison.component';
import { ComparisonItemService } from './services/comparison-item.service';

@NgModule({
    declarations: [PageComparisonComponent, ComparisonItemComponent],
    imports: [CommonModule, HttpClientModule],
    providers: [ComparisonItemService],
})
export class PageComparisonModule {}
