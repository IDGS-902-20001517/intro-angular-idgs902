import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperasbasComponent } from '../../operasbas/operasbas.component';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    OperasbasComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule

  ],
  exports:[
    OperasbasComponent
  ]
})
export class OperasModule { }
