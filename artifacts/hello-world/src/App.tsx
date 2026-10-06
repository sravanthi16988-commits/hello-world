import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

function Home() {
  const [name, setName] = useState('');
  const [hasGreeted, setHasGreeted] = useState(false);
  const displayName = name.trim() || 'world';

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) return;
    setHasGreeted(true);
  }

  function handleNameChange(value: string) {
    setName(value);
    setHasGreeted(false);
  }

  function resetGreeting() {
    setName('');
    setHasGreeted(false);
  }

  return (
    <div className="app-shell">
      <div className="page-wrap">
        <header className="topbar">
          <div className="brand" aria-label="Hello World">
            <span className="brand-mark" aria-hidden="true">h.</span>
            <span>hello, world</span>
          </div>
          <div className="top-note">
            <span className="top-dot" aria-hidden="true" />
            <span>Your first little webpage</span>
          </div>
        </header>

        <main className="main-content">
          <p className="intro">A small beginning <span>·</span> a whole new world</p>

          <section className="greeting-card" aria-labelledby="hello-title">
            <div className="card-kicker">
              <span className="little-sun" aria-hidden="true" />
              <span>Look what you made</span>
            </div>

            <h1 className="hello-title" id="hello-title" aria-live="polite" data-testid="text-greeting">
              <em>Hello,</em> {displayName}<span className="period">!</span>
            </h1>
            <p className="welcome-copy">
              Every great thing on the internet starts somewhere.
              <br className="desktop-break" /> This one starts with you.
            </p>
            <div className="divider" aria-hidden="true" />

            <form className="name-form" onSubmit={handleSubmit}>
              <label className="field-label" htmlFor="visitor-name">Make it yours</label>
              <div className="input-row">
                <input
                  className="name-input"
                  id="visitor-name"
                  data-testid="input-name"
                  type="text"
                  value={name}
                  onChange={(event) => handleNameChange(event.target.value)}
                  placeholder="Type your name"
                  autoComplete="given-name"
                  maxLength={40}
                  aria-describedby="name-help"
                />
                <button className="hello-button" data-testid="button-say-hello" type="submit">
                  <span>{hasGreeted ? 'Say it again' : 'Say hello'}</span>
                  <ArrowRight className="button-arrow" size={16} strokeWidth={1.8} aria-hidden="true" />
                </button>
              </div>
              <p
                className={`help-copy${hasGreeted ? ' success-copy' : ''}`}
                id="name-help"
                aria-live="polite"
                data-testid="text-greeting-status"
              >
                {hasGreeted
                  ? `A lovely first hello, ${name.trim()}.`
                  : 'Enter a name above and watch the page say hello.'}
              </p>
              {(name || hasGreeted) && (
                <button
                  className="clear-button"
                  data-testid="button-reset-name"
                  type="button"
                  onClick={resetGreeting}
                >
                  Start over
                </button>
              )}
            </form>
          </section>
        </main>

        <footer className="page-footer">
          <span>One page.</span>
          <span className="footer-separator" aria-hidden="true">✳</span>
          <span>A million possibilities.</span>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
