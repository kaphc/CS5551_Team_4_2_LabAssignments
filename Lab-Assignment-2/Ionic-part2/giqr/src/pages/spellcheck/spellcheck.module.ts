import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpellcheckPage } from './spellcheck';

@NgModule({
  declarations: [
    SpellcheckPage,
  ],
  imports: [
    IonicPageModule.forChild(SpellcheckPage),
  ],
})
export class SpellcheckPageModule {}
