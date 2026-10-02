import { Component, Input } from '@angular/core';
import { Divider } from '../../../divider/divider/divider';

@Component({
  imports: [Divider],
  selector: 'app-card-header',
  styleUrl: './card-header.css',
  templateUrl: './card-header.html',
})
export class CardHeader {
  @Input() headingText: string = '';
  @Input() descriptionText: string = '';
}
