import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmailComponent } from './home-email.component';

describe('HomeEmailComponent', () => {
  let component: HomeEmailComponent;
  let fixture: ComponentFixture<HomeEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
