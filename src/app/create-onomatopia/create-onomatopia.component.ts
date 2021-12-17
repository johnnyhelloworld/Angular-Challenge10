import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {

  newOnomatopia: string = '';

  @Output()
  public sendOnomatopiaToParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  createOnomatopia(value: string): void {
    this.sendOnomatopiaToParent.emit(value);
  }

}
