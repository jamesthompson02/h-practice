import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pagination-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './pagination-button.component.html',
  styleUrl: './pagination-button.component.scss',
})
export class PaginationButtonComponent {
  @Input() num!: number;

  onClick = output<number>();

  handleClick() {
    this.onClick.emit(this.num);
  }
}
