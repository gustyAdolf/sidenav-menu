import { NgModule } from '@angular/core';
import { SidenavMenuComponent } from './sidenav-menu.component';
import {MatIconModule} from "@angular/material/icon";
import {MenuItemComponent} from "./menu-item/menu-item.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTooltipModule} from "@angular/material/tooltip";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SidenavMenuComponent,
    MenuItemComponent
  ],
  imports: [
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    SidenavMenuComponent
  ]
})
export class SidenavMenuModule { }
