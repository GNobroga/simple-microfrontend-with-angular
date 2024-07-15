import { Component, inject, OnInit } from '@angular/core';
import { StoreService } from '../../../../core/src/lib/store.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {

  storeService = inject(StoreService);

  state = this.storeService.state;

  ngOnInit(): void {
      console.log(this.storeService.state())
  }
}
