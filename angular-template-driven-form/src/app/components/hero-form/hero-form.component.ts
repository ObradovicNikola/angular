import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  modelCopy?: Hero;

  submitted = false;

  @ViewChild('heroForm') heroForm?: NgForm;

  onSubmit() {
    this.submitted = true;
    this.modelCopy = new Hero(
      this.model.id,
      this.model.name,
      this.model.name,
      this.model.alterEgo
    );
    if (this.heroForm) {
      this.heroForm?.reset();
    }
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
