import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosListarComponent } from './usuarios-listar.component';

describe('UsuariosListarComponent', () => {
  let component: UsuariosListarComponent;
  let fixture: ComponentFixture<UsuariosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuariosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
