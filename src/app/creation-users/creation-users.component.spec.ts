import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationUsersComponent } from './creation-users.component';

describe('CreationUsersComponent', () => {
  let component: CreationUsersComponent;
  let fixture: ComponentFixture<CreationUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
