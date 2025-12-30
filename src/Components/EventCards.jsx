export default function EventCards() {
  return (
    <div className="events-section">
      <h2 className="events-title">Wedding Events</h2>

      <div className="event-card">
        <h3>Wedding Ceremony 💍</h3>
        <p><strong>Date:</strong> 24th January, 2026</p>
        <p><strong>Time:</strong> 7:00 PM</p>
        <p><strong>Venue:</strong> Hall 2, Eastern Metropolitan Club, Kolkata</p>
        <a
          href="https://maps.google.com/?q=Eastern+Metropolitan+Club+Kolkata"
          target="_blank"
          rel="noopener noreferrer"
          className="location-link"
        >
          📍 View Location
        </a>
      </div>

      <div className="event-card">
        <h3>Reception 🎉</h3>
        <p><strong>Date:</strong> 27th January, 2026</p>
        <p><strong>Time:</strong> 7:00 PM</p>
        <p><strong>Venue:</strong> River Inn Resorts, Sambalpur</p>
        <a
          href="https://maps.app.goo.gl/2xG3h7aUk5Kb5Ap69"
          target="_blank"
          rel="noopener noreferrer"
          className="location-link"
        >
          📍 View Location
        </a>
      </div>
    </div>
  );
}
