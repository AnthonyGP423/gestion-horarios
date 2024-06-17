import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasModalComponent } from './reservas-modal.component';

describe('ReservasModalComponent', () => {
  let component: ReservasModalComponent;
  let fixture: ComponentFixture<ReservasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservasModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
