import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdRevendedoresComponent } from './ed-revendedores.component';

describe('EdRevendedoresComponent', () => {
  let component: EdRevendedoresComponent;
  let fixture: ComponentFixture<EdRevendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdRevendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdRevendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
