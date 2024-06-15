import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosListarComponent } from './horarios-listar.component';

describe('HorariosListarComponent', () => {
  let component: HorariosListarComponent;
  let fixture: ComponentFixture<HorariosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorariosListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorariosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
