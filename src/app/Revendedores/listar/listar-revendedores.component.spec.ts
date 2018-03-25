import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRevendedoresComponent } from './listar-revendedores.component';

describe('ListarRevendedoresComponent', () => {
  let component: ListarRevendedoresComponent;
  let fixture: ComponentFixture<ListarRevendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRevendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRevendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
