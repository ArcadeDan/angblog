import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDarkmodeButtonComponent } from './create-darkmode-button.component';

describe('CreateDarkmodeButtonComponent', () => {
  let component: CreateDarkmodeButtonComponent;
  let fixture: ComponentFixture<CreateDarkmodeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDarkmodeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDarkmodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
