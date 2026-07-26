const prints = [
  {
    title: 'Brun App',
    description:
      'An offline-first AI companion for Android — three small on-device models (text, vision, voice) instead of one large one, so it stays fast and cool with no cloud required.',
    tags: ['Flutter', 'llama.cpp', 'On-device LLM'],
    status: 'wip',
    links: [{ label: 'Repository', href: 'https://github.com/Brunfjell-Halfbor/brunapp' }],
  },
  {
    title: 'RetriVault',
    description:
      'Build and share custom AI chatbots grounded in your own documents — a Supabase-backed RAG platform with per-bot chat and sharing.',
    tags: ['React', 'Supabase', 'RAG'],
    status: 'wip',
    links: [{ label: 'In Development', disabled: true }],
  },
  {
    title: 'WanderGo Car Rental',
    description:
      'A modern, mobile-friendly car rental portal built with React, Firebase (Firestore, Auth, Hosting) and Tailwind CSS.',
    tags: ['React', 'Firebase', 'Tailwind'],
    status: 'live',
    links: [{ label: 'Live Demo', href: 'https://wandergo-carrental.web.app', solid: true }],
  },
  {
    title: 'QCULand',
    description: 'An interactive 3D campus map exploration built with React, Vite and Three.js.',
    tags: ['React', 'Vite', 'Three.js', 'Blender'],
    status: 'live',
    links: [{ label: 'Live Demo', href: 'https://qculand.web.app/', solid: true }],
  },
  {
    title: 'Larong Bata',
    description: 'A small Godot game recreating the street games of a Filipino childhood.',
    tags: ['Godot', 'GDScript', 'Blender'],
    status: 'live',
    links: [{ label: 'Play on itch.io', href: 'https://brunfjell.itch.io/larong-bata', solid: true }],
  },
];

const Prints = () => {
  return (
    <section id="prints">
      <div className="wrap">
        <div className="folio">Page 03 — Selected Prints</div>
        <h2>Projects</h2>
        <p className="lede">
          From an offline AI companion to a Firebase-backed rental portal — five builds framed like plates in a print
          run.
        </p>
        <div className="prints">
          {prints.map((item) => (
            <article className="print-card" key={item.title}>
              <div className={`print-corner ${item.status === 'wip' ? 'wip' : ''}`}>
                <span>{item.status === 'wip' ? 'WIP' : 'Live'}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="desc">{item.description}</p>
              <div className="tags">
                {item.tags.map((tag) => (
                  <span className="stamp" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="print-links">
                {item.links.map((link) =>
                  link.disabled ? (
                    <button className="btn disabled" disabled key={link.label}>
                      {link.label}
                    </button>
                  ) : (
                    <a
                      className={`btn ${link.solid ? 'solid' : ''}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={link.label}
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prints;
