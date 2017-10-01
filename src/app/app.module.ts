import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupDemoComponent1 } from './popup-demo/popup.component';
import { PopupDirective } from './popup-demo/popup.directive';
import { MessageComponent } from './content-projection-demo/content-projection.component';

import { ContentTabsetComponent } from './tab-demo/content-tabset.component';
import { ContentTabComponent } from './tab-demo/content-tab.component';
import { ContentTabsDemoComponent } from './tab-demo/content-tabs-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    PopupDemoComponent1,
    PopupDirective,
    MessageComponent,
    ContentTabComponent,
    ContentTabsetComponent,
    ContentTabsDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
