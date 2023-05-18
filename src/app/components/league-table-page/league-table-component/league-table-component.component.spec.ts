import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTableComponentComponent } from './league-table-component.component';

describe('LeagueTableComponentComponent', () => {
  let component: LeagueTableComponentComponent;
  let fixture: ComponentFixture<LeagueTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueTableComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
