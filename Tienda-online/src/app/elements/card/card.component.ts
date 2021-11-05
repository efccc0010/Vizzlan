import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()  urlImage: any;
  @Input()  Precio:any;
  @Input()  Titulo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
