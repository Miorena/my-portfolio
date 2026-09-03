import { Mail, Phone, MapPin, ArrowUpRight, Terminal } from "lucide-react";
import { PROFILE } from "../data";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="p-footer" id="contact">
      <div className="p-contact-card">
        <p className="p-contact-prompt">
          $ contacts --email & --tel
        </p>
        <div className="p-contact-links">
          <a className="p-contact-link" href={`mailto:${PROFILE.email}`}>
            <Mail size={15} /> {PROFILE.email}
            <ArrowUpRight size={13} />
          </a>
          <a
            className="p-contact-link"
            href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
          >
            <Phone size={15} /> {PROFILE.phone}
          </a>
          <span className="p-contact-link">
            <MapPin size={15} /> {PROFILE.location}
          </span>
        </div>
      </div>
      <p className="p-footnote">
        <Terminal size={11} style={{ verticalAlign: "-1px", marginRight: 4 }} />
        {PROFILE.fullName} — construit avec React
      </p>
    </section>
  );
}
