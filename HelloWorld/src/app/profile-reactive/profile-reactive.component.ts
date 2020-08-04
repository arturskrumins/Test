import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-profile-reactive',
  templateUrl: './profile-reactive.component.html',
  styleUrls: ['./profile-reactive.component.css']
})
export class ProfileReactiveComponent implements OnInit {


  person = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  constructor() { }

  ngOnInit(): void {
    this.person.patchValue(this.loadData());
    this.person.statusChanges
      .pipe(
        tap(v => console.log(v)),
        filter(v => v === 'VALID')
      )
      .subscribe(() => this.submitForm());
    // this.person.valueChanges.subscribe(() => this.submitForm());
  }

  submitForm() {
    localStorage.setItem('person', JSON.stringify(this.person.value));
  }

  private loadData() {
    const data = localStorage.getItem('person');
    return data
      ? JSON.parse(data)
      : { name: 'Anonymous', email: '' }
  }

}
