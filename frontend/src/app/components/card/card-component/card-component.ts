import { Component, contentChild } from '@angular/core';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
  imports: [HlmCardImports, HlmLabelImports, HlmInputImports],
  selector: 'app-card-component',
  styleUrl: './card-component.css',
  templateUrl: './card-component.html',
})
export class CardComponent {
  protected readonly header = contentChild('[header]');
}
