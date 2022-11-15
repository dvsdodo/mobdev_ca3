import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterDetailsPage } from './character_details.page';
import { CharacterDetailsPageRoutingModule } from './character_details-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CharacterDetailsPageRoutingModule,
  ],
  declarations: [CharacterDetailsPage],
})
export class CharacterDetailsPageModule {}
