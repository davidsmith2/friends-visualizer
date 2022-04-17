import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent {

  friends = [
    {
      id: 1,
      name: 'Rachel',
      friends: [],
      age: 25,
      weight: 100
    },
    {
      id: 2,
      name: 'Monica',
      friends: [],
      age: 25,
      weight: 100
    },
    {
      id: 3,
      name: 'Phoebe',
      friends: [],
      age: 25,
      weight: 100
    },
    {
      id: 4,
      name: 'Joey',
      friends: [],
      age: 25,
      weight: 100
    },
    {
      id: 5,
      name: 'Chandler',
      friends: [],
      age: 25,
      weight: 100
    },
    {
      id: 6,
      name: 'Ross',
      friends: [],
      age: 25,
      weight: 100
    }
  ];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: [null],
      friends: [null],
      age: [null],
      weight: [null]
    });
  }

  onSave(event: Event) {
    event.preventDefault();
  }

  onReset(event: Event) {
    event.preventDefault();
    this.formGroup.reset();
  }
}
