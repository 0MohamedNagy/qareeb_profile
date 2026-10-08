import React from 'react';
import { CalendarDays, MapPin } from 'lucide-react';
import { events } from '../data/contentData';

export function EventsSection() {
  return (
    <section id="events" className="section section-muted">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">الفعاليات</span>
          <h2>حركة المجتمع حواليك</h2>
          <p>أسواق، أيام توعية، وملتقيات شركاء — اكتشفها واحجز من قريب.</p>
        </div>

        <div className="cards-grid-3">
          {events.map((e) => (
            <article className="event-card" key={e.id}>
              <div className="event-card-media">
                <img src={e.image} alt={e.title} loading="lazy" />
              </div>
              <div className="event-card-body">
                <div className="event-meta">
                  <span><CalendarDays size={14} /> {e.date}</span>
                  <span><MapPin size={14} /> {e.place}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
