import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { FriendFormComponent } from './friend-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FriendFormComponent', () => {
  let component: FriendFormComponent;
  let fixture: ComponentFixture<FriendFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendFormComponent ],
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, NoopAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendFormComponent);
    component = fixture.componentInstance;
    component.friends = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
