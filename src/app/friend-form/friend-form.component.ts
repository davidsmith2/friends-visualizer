import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Friend } from '../state/friends.reducer';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent implements OnInit, OnChanges {
  @Input() friends: Array<Friend>;
  @Output() save: EventEmitter<Friend> = new EventEmitter();

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(): void {
    if (this.friends.length) {
      this.formGroup.controls['friends'].enable();
    }
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [null],
      friends: [{value: null, disabled: !this.friends.length}],
      age: [null],
      weight: [null]
    });
  }

  onSave(event: Event) {
    event.preventDefault();
    this.save.emit({...this.formGroup.value, id: new Date().getTime()});
    this.formGroup.reset();
  }

  onReset(event: Event) {
    event.preventDefault();
    this.formGroup.reset();
  }
}
