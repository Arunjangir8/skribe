import { useState } from 'react'
import { Link } from 'react-router-dom'
import DemoModal from '../components/DemoModal'

export default function GoogleAddon() {
  const [modalOpen, setModalOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <header>
        <div className="container nav-wrap">
          <Link to="/" className="logo-box">
            <img src="/Skribe-logo-horizontal.png" alt="Skribe" className="logo-img" />
          </Link>
          
          <input type="checkbox" id="nav-check" checked={navOpen} onChange={() => setNavOpen(!navOpen)} />
          <label htmlFor="nav-check" className="hamburger">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </label>

          <nav className="nav-menu">
            <Link to="/">Home</Link>
            <a href="#" className="btn btn-secondary">Sign Up</a>
            <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Request Demo</button>
          </nav>
        </div>
      </header>

      <main>
        <section style={{ paddingTop: '80px', textAlign: 'center' }}>
          <div className="container">
            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
              <h1 style={{ marginBottom: '1rem' }}>Internal Communication, Native to</h1>
              <img src="https://workspace.google.com/static/img/google-workspace-logo.svg" alt="Google Workspace Logo" style={{ width: '100%', maxWidth: '350px', height: 'auto', marginBottom: '2rem' }} />
              <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.9 }}>
                Deliver targeted internal communication notifications directly into Google Chat, powered by your directory.
              </p>
              <a href="#" className="btn btn-primary">Install Add-on</a>
            </div>
          </div>
        </section>
        
        <section>
          <div className="container">
            <h2>How it works</h2>
            <p style={{ maxWidth: '800px', marginBottom: '3rem' }}>
              The Skribe Google Workspace Add-on acts as the delivery bridge between your internal comms team and your employees. Once installed by a Workspace admin, it enables secure message delivery without leaving the Google ecosystem.
            </p>
            <div className="grid">
              <div className="feature-card">
                <h3>For Admins</h3>
                <ul>
                  <li>Install and authorise at the domain level</li>
                  <li>Control directory attributes used for targeting</li>
                  <li>Decide exactly who receives notifications</li>
                  <li>Utilise custom schema attributes for precision</li>
                </ul>
              </div>
              <div className="feature-card">
                <h3>For Employees</h3>
                <ul>
                  <li>Receive communication directly in Google Chat</li>
                  <li>Get updates relevant to their specific role or team</li>
                  <li>Zero setup required for end-users</li>
                  <li>Stay informed without switching apps</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="dark-box">
              <h2 style={{ marginBottom: '3rem' }}>Permissions & Security</h2>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                <div>
                  <h4>No Content Access</h4>
                  <p>We do not access Gmail, Drive, or personal files.</p>
                </div>
                <div>
                  <h4>No Copies</h4>
                  <p>We do not create an external copy of your directory.</p>
                </div>
                <div>
                  <h4>Data Ownership</h4>
                  <p>All data remains owned and controlled by your organisation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ textAlign: 'center' }}>
          <div className="container">
            <div style={{ background: '#f0f4ff', padding: '60px', borderRadius: '40px' }}>
              <h2>Need help?</h2>
              <p>For installation guides or troubleshooting.</p>
              <p>Email: <strong>guru@skribe.app</strong></p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <Link to="/">
              <img src="/Skribe-logo-horizontal.png" alt="Skribe" className="footer-logo-img" />
            </Link>
            <p style={{ marginTop: '10px' }}>Reach everyone. Know what worked.</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.5, marginTop: '40px' }}>© 2026 Skribe. All rights reserved.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px' }}>Contact</h4>
            <p>guru@skribe.app</p>
            <p>https://skribe.app</p>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="#" style={{ margin: 0 }}>Terms & Conditions</a>
            <a href="#" style={{ margin: 0 }}>Privacy Policy</a>
            <Link to="/google-addon">Google Add-on</Link>
          </nav>
        </div>
      </footer>

      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
