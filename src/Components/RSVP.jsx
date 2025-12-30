import { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz6QlOvicA6bSW4qeonc_Gk4O-JCmgwcGE8I46_A6RCfl5BKcRxZOrmVdz-pG8JKtWVXQ/exec";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "1",
    attending: "Yes"
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(form)
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rsvp-thankyou">
        ❤️ Thank you for your response!
      </div>
    );
  }

  return (
    <div className="rsvp-section">
      <h2 className="events-title">RSVP</h2>

      <form className="rsvp-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
        />

        <select name="guests" onChange={handleChange}>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4+">4+ Guests</option>
        </select>

        <select name="attending" onChange={handleChange}>
          <option value="Both">Yesss!!! Will attend both!</option>
          <option value="Yes">Yes! But will only be there at the wedding :)</option>
          <option value="No">Cannot Attend :((</option>
        </select>

        <button type="submit">Submit RSVP</button>
      </form>
    </div>
  );
}
