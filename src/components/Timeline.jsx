const experience = [
  {
    date: '2023 — 2024',
    role: 'Customer Service Representative',
    company: 'TaskUs',
    description:
      'Provided customer support and resolved issues across multiple industries — from troubleshooting technical problems to managing inquiries and feedback.',
  },
  {
    date: '2025 — Present',
    role: 'IT Intern',
    company: 'Codex Business Solutions Inc.',
    description: "Assisting in the development of new features and bug fixes for the company's flagship product.",
  },
];

const Timeline = () => {
  return (
    <section id="timeline">
      <div className="wrap">
        <div className="folio">Page 05 — Timeline</div>
        <h2>Experience</h2>
        <div className="ticket" style={{ marginTop: '1.6rem' }}>
          {experience.map((item) => (
            <div className="ticket-row" key={item.role}>
              <div className="ticket-date">{item.date}</div>
              <div>
                <div className="ticket-role">{item.role}</div>
                <div className="ticket-co">{item.company}</div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
