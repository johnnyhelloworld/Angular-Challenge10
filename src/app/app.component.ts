import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onomatopia';

  public onomatopeias: string[] = [];

  public newOnomatopia: string = '';

  onReceiveNewOnomatopia($event: string[]) {
    console.log($event);
    this.onomatopeias = $event;
  }
}
