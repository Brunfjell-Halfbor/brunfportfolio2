const Toolkit = () => {
  return (
    <section id="toolkit">
      <div className="wrap">
        <div className="folio">Page 02 — Toolkit</div>
        <h2>What I Build With</h2>
        <p className="lede">The stack behind everything on this page.</p>
        <div className="toolkit">
          <div className="toolkit-panel rust">
            <h3>Frontend</h3>
            <div className="tag-row">
              <span className="stamp">React</span>
              <span className="stamp">Tailwind</span>
              <span className="stamp">JavaScript</span>
            </div>
          </div>
          <div className="toolkit-panel petrol">
            <h3>Backend</h3>
            <div className="tag-row">
              <span className="stamp">Node.js</span>
              <span className="stamp">Express</span>
              <span className="stamp">MongoDB</span>
            </div>
          </div>
          <div className="toolkit-panel mustard">
            <h3>AI &amp; Agents</h3>
            <div className="tag-row">
              <span className="stamp">Python</span>
              <span className="stamp">llama.cpp</span>
              <span className="stamp">RAG</span>
            </div>
          </div>
          <div className="toolkit-panel rust">
            <h3>Mobile</h3>
            <div className="tag-row">
              <span className="stamp">Flutter</span>
              <span className="stamp">Dart</span>
            </div>
          </div>
          <div className="toolkit-panel petrol">
            <h3>Automation &amp; Tools</h3>
            <div className="tag-row">
              <span className="stamp">n8n</span>
              <span className="stamp">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
