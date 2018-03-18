import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevendedoresComponent } from './revendedores.component';

describe('RevendedoresComponent', () => {
  let component: RevendedoresComponent;
  let fixture: ComponentFixture<RevendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
