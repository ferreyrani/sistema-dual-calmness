/* pipes.modules.ts */
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SafeHtmlPipe } from './safeHtml.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [SafeHtmlPipe, SafePipe],
  imports: [IonicModule],
  exports: [SafeHtmlPipe, SafePipe],
})
export class PipesModule {}
