import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagueComponent } from './pague.component';

describe('PagueComponent', () => {
  let component: PagueComponent;
  let fixture: ComponentFixture<PagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
