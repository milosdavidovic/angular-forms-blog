import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  katchupTypes = ['No Katchup', 'Mild', 'Hot'];
  extras = ['Extra cheese', 'Olives'];
  extrasInitialValue = false;
  initialNote = 'You can write additional notes here...';

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
