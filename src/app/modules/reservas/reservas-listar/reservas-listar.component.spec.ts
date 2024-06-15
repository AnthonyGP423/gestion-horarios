import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasListarComponent } from './reservas-listar.component';

describe('ReservasListarComponent', () => {
  let component: ReservasListarComponent;
  let fixture: ComponentFixture<ReservasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservasListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
