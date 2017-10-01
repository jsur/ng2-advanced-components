import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-demo',
  template: `
  <div 
    class="ui message" 
    popup
    #popup1="popup"
    message="Clicked the message."
  >
    <div class="header">
      Learning Directives
    </div>
    <p>
      This should use our Popup directive
    </p> 
  </div>

  <i 
    class="alarm icon" 
    popup
    #popup2="popup"
    message="Clicked the alarm icon!"
  >
  </i>

  <div style="margin-top: 20px;">
    <button 
      (click)="popup1.displayMessage()" 
      class="ui button"
    >
      Display popup for message element 
    </button>
  <button 
    (click)="popup2.displayMessage()" 
    class="ui button"
  > 
    Display popup for alarm icon
  </button>
    </div>
  `
})
export class PopupDemoComponent1 {

}