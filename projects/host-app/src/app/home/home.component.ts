import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, inject, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { StoreService } from '../../../../core/src/lib/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  @ViewChild('appToolbar', { read: ViewContainerRef})
  appTolbarContainerRef!: ViewContainerRef;

  storeService = inject(StoreService);

  state = this.storeService.state;

  ngOnInit(): void {
     this.storeService.start(0);
  }

  async loadComponent() {
    try {
      const { ToolbarComponent } = await loadRemoteModule({
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        remoteName: 'mfeApp',
        exposedModule: './ToolbarComponent'
      });

      this.appTolbarContainerRef.clear();
      this.appTolbarContainerRef.createComponent(ToolbarComponent);
    } catch (error) {
      console.log(error);
    }
  }

  increment() {
    this.storeService.update((v: number) => v + 1);
  }

  decrement() {
    this.storeService.update((v: number) => v - 1);
  }



}
