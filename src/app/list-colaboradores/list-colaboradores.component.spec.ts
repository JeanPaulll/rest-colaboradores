import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColaboradoresComponent } from './list-colaboradores.component';

describe('ListColaboradoresComponent', () => {
  let component: ListColaboradoresComponent;
  let fixture: ComponentFixture<ListColaboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListColaboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
