import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatCard } from '@angular/material/card'
import { MatFormField } from '@angular/material/form-field'
import { MatList } from '@angular/material/list'
import { MatListItem } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCard,
    MatFormField,
    MatList,
    MatListItem,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCard,
    MatFormField,
    MatList,
    MatListItem,
  ]
})
export class MaterialModule { }
