import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadRevendedoresComponent } from './cad-revendedores.component';

describe('CadRevendedoresComponent', () => {
  let component: CadRevendedoresComponent;
  let fixture: ComponentFixture<CadRevendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadRevendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadRevendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
