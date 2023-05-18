import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTablePageComponent } from './league-table-page.component';

describe('LeagueTablePageComponent', () => {
  let component: LeagueTablePageComponent;
  let fixture: ComponentFixture<LeagueTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
