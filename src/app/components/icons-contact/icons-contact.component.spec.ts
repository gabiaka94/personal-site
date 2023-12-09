import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsContactComponent } from './icons-contact.component';

describe('IconsComponent', () => {
  let component: IconsContactComponent;
  let fixture: ComponentFixture<IconsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
