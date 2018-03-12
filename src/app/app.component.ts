import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultName = 'Awesome Pizza';
  ketchupTypes = ['No Katchup', 'Mild', 'Hot'];
  cheese = false;
  ham = false;
  egg = false;
  mushroom = false;
  paprika = false;
  olives = false;

  onSubmit(pizzaForm: NgForm) {
    console.log(pizzaForm.value);
  }

  onGenerate(pizzaForm: NgForm) {
    pizzaForm.setValue({
      name: this.defaultName,
      ketchup: 'Hot',
      pizzaSize: 'large',
      cheese: true,
      egg: true,
      ham: true,
      olives: true,
      paprika: false,
      mushroom: false
    });
  }
}
