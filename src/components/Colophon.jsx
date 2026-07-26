const Colophon = () => {
  return (
    <section id="colophon">
      <div className="wrap">
        <div className="folio">Page 04 — Colophon</div>
        <h2>About</h2>
        <div className="colophon-grid" style={{ marginTop: '1.6rem' }}>
          <div>
            <p>
              My name is Luis Troy Paraiso, and I'm a developer based in the Philippines. I build web applications,
              on-device AI systems, and the automations that connect them — from React front-ends to local LLM
              agents and n8n workflows.
            </p>
            <p>
              I'm a passionate developer with a love for creating beautiful and functional software, always eager to
              learn new technologies and improve my skills.
            </p>
            <p>
              When I'm not coding, you can find me exploring the outdoors, reading a good book, or trying out new
              recipes in the kitchen.
            </p>
          </div>
          <div className="stat-stack">
            <div className="stat-tile">
              <span className="k">Experience</span>
              <span className="v">1 yr</span>
            </div>
            <div className="stat-tile">
              <span className="k">Projects</span>
              <span className="v">5+</span>
            </div>
            <div className="stat-tile">
              <span className="k">Focus</span>
              <span className="v">Web · AI · Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colophon;
