import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcardComponent } from './ticketcard.component';

describe('TicketcardComponent', () => {
  let component: TicketcardComponent;
  let fixture: ComponentFixture<TicketcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
