import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventCardComponent } from './event-card.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCardComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    component.data = {
      id: 1,
      title: 'Concert',
      description: 'Description',
      place: 'Place',
      unitPrice: 100,
      genre: 'Genre',
      genreId: 1,
      dateEvent: '2021-09-09',
      timeEvent: '12:00:00',
      imageUrl: 'https://via.placeholder.com/150',
      ticketsQuantity: 100,
      finalized: false,
      status: 'Status',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
