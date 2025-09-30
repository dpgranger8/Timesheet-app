import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatCard } from '@angular/material/card'
import { MatFormField } from '@angular/material/form-field'
import { MatList } from '@angular/material/list'
import { MatListItem } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCard,
    MatFormField,
    MatList,
    MatListItem,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCard,
    MatFormField,
    MatList,
    MatListItem,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule { }
