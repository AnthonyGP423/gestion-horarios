import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosModalComponent } from './horarios-modal.component';

describe('HorariosModalComponent', () => {
  let component: HorariosModalComponent;
  let fixture: ComponentFixture<HorariosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorariosModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HorariosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
