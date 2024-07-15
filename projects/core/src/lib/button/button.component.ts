import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  inputs: ['label'],
  outputs: ['onClick']
})
export class ButtonComponent {

  label = 'Button';

  onClick = new EventEmitter();
}
