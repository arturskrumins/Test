import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  person = this.loadData();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    alert(this.person.name);
    localStorage.setItem('person', JSON.stringify(this.person));
  }

  private loadData(){
    const data = localStorage.getItem('person');
    return data    
    ? JSON.parse(data)
    : { name: 'Anonymous', email: '' }
  }

}
