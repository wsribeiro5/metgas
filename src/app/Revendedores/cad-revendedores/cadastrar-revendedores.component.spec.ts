import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarRevendedoresComponent } from './cadastrar-revendedores.component';

describe('CadastrarRevendedoresComponent', () => {
  let component: CadastrarRevendedoresComponent;
  let fixture: ComponentFixture<CadastrarRevendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarRevendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarRevendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
