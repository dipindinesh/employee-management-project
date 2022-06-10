import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {
  @Output() emitAction = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  emitResult(result : any){
    this.emitAction.emit(result);
  }

}
