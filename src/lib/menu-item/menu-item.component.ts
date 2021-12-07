import {Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatAccordion} from "@angular/material/expansion";
import {Observable} from "rxjs";
import {MenuNode} from "./model";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(90deg)'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class MenuItemComponent implements OnInit, OnChanges {

  @Input() item: MenuNode;
  @Input() isExpandedMenu: boolean = false;
  rotateIndicator = false;
  @ViewChild('accordion',{static:true}) accordion: MatAccordion;
  @Input() depth = 0;

  constructor() {
  }

  ngOnInit(): void {

  }


  whenExpanded() {
    this.rotateIndicator = !this.rotateIndicator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.isExpandedMenu) {
      this.accordion.closeAll();
    }
  }

}
