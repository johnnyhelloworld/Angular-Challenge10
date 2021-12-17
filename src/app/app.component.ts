import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onomatopia';

  public onomatopeias: Array<string> = [];

  onReceiveNewOnomatopia(newItem: string) {
    this.onomatopeias.push(newItem);
  }
}
