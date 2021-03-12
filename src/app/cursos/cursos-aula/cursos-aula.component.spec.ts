import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAulaComponent } from './cursos-aula.component';

describe('CursosAulaComponent', () => {
  let component: CursosAulaComponent;
  let fixture: ComponentFixture<CursosAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
