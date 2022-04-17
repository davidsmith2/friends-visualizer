import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Friend } from '../state/friends.reducer';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent {
  @Output() save: EventEmitter<Friend> = new EventEmitter();

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
    this.save.emit({...this.formGroup.value, id: new Date().getTime()});
  }

  onReset(event: Event) {
    event.preventDefault();
    this.formGroup.reset();
  }
}
