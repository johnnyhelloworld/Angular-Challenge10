import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {

  @Input()
  newOnomatopia: string = '';

  @Output()
  public sendOnomatopia: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  createOnomatopia(): void {
    this.sendOnomatopia.emit(this.newOnomatopia);
  }

}
