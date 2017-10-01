import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupDemoComponent1 } from './popup-demo/popup.component';
import { PopupDirective } from './popup-demo/popup.directive';

@NgModule({
  declarations: [
    AppComponent,
    PopupDemoComponent1,
    PopupDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
