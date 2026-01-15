import { useState } from 'react'
import { Link } from 'react-router-dom'
import DemoModal from '../components/DemoModal'

export default function Home() {
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
            <a href="#">How It Works</a>
            <a href="#">Platform</a>
            <Link to="/google-addon">Google Add-on</Link>
            <a href="#">Security</a>
            <a href="#" className="btn btn-secondary">Sign Up</a>
            <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Request Demo</button>
          </nav>
        </div>
      </header>

      <main>
        <section style={{ paddingTop: '60px' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h1>Internal communication that actually reaches people</h1>
              
              <div style={{ margin: '2rem auto' }}>
                <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.1" d="M200 150C227.614 150 250 127.614 250 100C250 72.3858 227.614 50 200 50C172.386 50 150 72.3858 150 100C150 127.614 172.386 150 200 150Z" fill="#4560FF"/>
                  <path d="M200 130C216.569 130 230 116.569 230 100C230 83.4315 216.569 70 200 70C183.431 70 170 83.4315 170 100C170 116.569 183.431 130 200 130Z" fill="#4560FF"/>
                  <path d="M185 85L75 55" stroke="#4560FF" strokeWidth="2" strokeDasharray="4 4"/>
                  <path d="M215 85L325 55" stroke="#4560FF" strokeWidth="2" strokeDasharray="4 4"/>
                  <path d="M220 110L305 145" stroke="#4560FF" strokeWidth="2" strokeDasharray="4 4"/>
                  <path d="M180 110L95 145" stroke="#4560FF" strokeWidth="2" strokeDasharray="4 4"/>
                </svg>
              </div>

              <p style={{ fontSize: '1.4rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                Directory-native communication for organisations on Google Workspace and Microsoft 365.
              </p>
              
              <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Request Demo</button>
              <a href="#" className="btn btn-ghost">View How It Works →</a>
              <p style={{ marginTop: '2.5rem', fontSize: '1rem', fontWeight: 500, opacity: 0.6 }}>
                No new app for employees. No parallel databases.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <span className="accent">The Problem</span>
            <h2>Why internal communication breaks</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '4rem', maxWidth: '800px' }}>
              Internal communication doesn't fail because messages aren't sent. It fails because reach is uncertain and impact is unclear.
            </p>
            <div className="grid">
              <div className="feature-card">
                <span className="material-symbols-outlined"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="4" width="20" height="16" rx="2"/>
  <polyline points="22,6 12,13 2,6"/>
</svg>
</span>
                <h3>Email gets ignored.</h3>
                <p>Critical updates lost in high-volume inboxes.</p>
              </div>
              <div className="feature-card">
                <span className="material-symbols-outlined"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16v12H7l-3 3V4z"/>
</svg>

</span>
                <h3>Chat moves too fast.</h3>
                <p>Information buried in the scroll.</p>
              </div>
              <div className="feature-card">
                <span className="material-symbols-outlined"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
  <path d="M8 21h8"/>
  <path d="M12 17v4"/>
</svg>
</span>
                <h3>Intranets go unopened.</h3>
                <p>Messages go out, but leaders still don't know who saw them.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="blue-box">
              <h2 style={{ textAlign: 'center', marginBottom: 0 }}>Not another channel. A system.</h2>
              <div className="system-content">
                <div>
                  <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Skribe isn't a destination for employees. It's the system behind communication.</p>
                  <h3 style={{ marginBottom: '1.5rem' }}>It brings structure to:</h3>
                  <ul style={{ listStyle: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
                    <li>• What is communicated</li>
                    <li>• Who receives it</li>
                    <li>• Where it appears</li>
                    <li>• When it's delivered</li>
                    <li>• How impact is understood</li>
                  </ul>
                </div>
                <div className="system-vector-box" style={{ textAlign: 'center' }}>
                  <svg width="100%" height="320" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M200 160 100 80m100 80 100-80m-100 80-100 80m100-80 100 80" stroke="#4560ff" strokeWidth="3" strokeDasharray="8 4"/>
                    <path d="M200 210c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50Z" fill="#fff" stroke="#4560ff" strokeWidth="6"/>
                    <path d="M200 190c16.569 0 30-13.431 30-30s-13.431-30-30-30-30 13.431-30 30 13.431 30 30 30" fill="#4560ff"/>
                    <path d="M100 110c16.569 0 30-13.431 30-30 0-16.568-13.431-30-30-30-16.568 0-30 13.432-30 30 0 16.569 13.432 30 30 30Z" fill="#e1e6ff" stroke="#4560ff" strokeWidth="2"/>
                    <path d="M300 110c16.569 0 30-13.431 30-30 0-16.568-13.431-30-30-30s-30 13.432-30 30c0 16.569 13.431 30 30 30Z" fill="#e1e6ff" stroke="#4560ff" strokeWidth="2"/>
                    <path d="M100 270c16.569 0 30-13.431 30-30s-13.431-30-30-30c-16.568 0-30 13.431-30 30s13.432 30 30 30Z" fill="#e1e6ff" stroke="#4560ff" strokeWidth="2"/>
                    <path d="M300 270c16.569 0 30-13.431 30-30s-13.431-30-30-30-30 13.431-30 30 13.431 30 30 30Z" fill="#e1e6ff" stroke="#4560ff" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--heading)', margin: 0 }}>Clarity replaces guesswork.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ textAlign: 'center' }}>
          <div className="container">
            <span className="accent">Omnichannel Delivery</span>
            <h2>Meet employees where work already happens</h2>
            <p>Skribe delivers communication directly into the tools employees already use:</p>
            <div className="channel-grid">
              <div>
                <img src="https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v2/192px.svg" className="channel-icon" alt="Google Chat" />
                <div className="channel-label">Google Chat</div>
              </div>
              <div>
                <img src="https://www.svgrepo.com/show/448240/microsoft-teams.svg" className="channel-icon" alt="MS Teams" />
                <div className="channel-label">MS Teams</div>
              </div>
              <div>
                <img src="https://www.svgrepo.com/show/452102/slack.svg" className="channel-icon" alt="Slack" />
                <div className="channel-label">Slack</div>
              </div>
              <div>
                <img src="https://www.svgrepo.com/show/452133/whatsapp.svg" className="channel-icon" alt="WhatsApp" />
                <div className="channel-label">WhatsApp</div>
              </div>
              <div>
                <img src="https://www.svgrepo.com/show/209114/email-mail.svg" className="channel-icon" alt="Email" />
                <div className="channel-label">Email</div>
              </div>
            </div>
            <p style={{ marginTop: '5rem', opacity: 0.7, fontWeight: 600 }}>Nothing new to install, Nothing new to learn.</p>
          </div>
        </section>

        <section>
          <div className="container">
            <div style={{ background: '#f8faff', border: '1px solid var(--bg-subtle)', borderRadius: '40px', padding: '80px 40px', textAlign: 'center' }}>
              <div style={{ marginBottom: '2rem' }}>
                <img src="https://workspace.google.com/static/img/google-workspace-logo.svg" alt="Google Workspace Logo" style={{ width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '1.5rem' }} />
              </div>
              <h2 style={{ marginBottom: '1.5rem' }}>Native Google Workspace Add-on</h2>
              <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
                Deliver targeted internal communication notifications directly into Google Chat. 
                Skribe acts as the secure delivery bridge powered by your directory.
              </p>
              <Link to="/google-addon" className="btn btn-primary">View Add-on</Link>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '5rem' }}>One workflow. Two ecosystems.</h2>
            <div className="workflow-grid">
              <div className="workflow-item">
                <svg className="step-icon" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
                <div className="step-num">01</div>
                <h3>Connect</h3>
                <p>Identity and groups flow in automatically.</p>
              </div>
              <div className="workflow-item">
                <svg className="step-icon" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                <div className="step-num">02</div>
                <h3>Create</h3>
                <p>Messages are designed to land.</p>
              </div>
              <div className="workflow-item">
                <svg className="step-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <div className="step-num">03</div>
                <h3>Approve</h3>
                <p>Status transparency for all. No chasing.</p>
              </div>
              <div className="workflow-item">
                <svg className="step-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                <div className="step-num">04</div>
                <h3>Target</h3>
                <p>Use roles, teams, and custom attributes.</p>
              </div>
              <div className="workflow-item">
                <svg className="step-icon" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                <div className="step-num">05</div>
                <h3>Deliver</h3>
                <p>Appear where attention exists.</p>
              </div>
              <div className="workflow-item">
                <svg className="step-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2v-3h2v3zm4 0h-2v-5h2v5z"/></svg>
                <div className="step-num">06</div>
                <h3>Measure</h3>
                <p>Understand engagement reach.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="dark-box">
              <div className="trust-grid">
                <div>
                  <h2 style={{ marginBottom: '2rem' }}>Built for trust</h2>
                  <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="trust-details" style={{ textAlign: 'left' }}>
                  <div>
                    <h4>Admin-controlled</h4>
                    <p style={{ opacity: 0.8, margin: 0 }}>No access to Gmail, Drive, or personal files.</p>
                  </div>
                  <div>
                    <h4>No Data Sharing</h4>
                    <p style={{ opacity: 0.8, margin: 0 }}>No commercial use of employee data.</p>
                  </div>
                  <div>
                    <h4>Encryption</h4>
                    <p style={{ opacity: 0.8, margin: 0 }}>Encrypted in transit and at rest. Your data stays yours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <span className="accent">Target Audience</span>
            <h2>Who Skribe is for</h2>
            <div className="grid" style={{ marginTop: '3rem' }}>
              <div className="feature-card">
                <svg className="card-icon" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                <h3>Teams</h3>
                <p>Internal Communication and HR teams.</p>
              </div>
              <div className="feature-card">
                <svg className="card-icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><polygon points="12,1 14,5 18,6 15,9 16,13 12,11 8,13 9,9 6,6 10,5" fill="#4560FF" stroke="white" strokeWidth="1"/></svg>
                <h3>Leaders</h3>
                <p>Leaders who care about clarity.</p>
              </div>
              <div className="feature-card">
                <svg className="card-icon" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"/></svg>
                <h3>Tech Stack</h3>
                <p>Organisations on Google Workspace or Microsoft 365.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <span className="accent">The Vision</span>
            <h2>Why Skribe exists</h2>
            <div className="founder-split">
              <div className="founder-visual">
                {/* <img src="/path-to-your-image.jpg" alt="Founder Photography" className="founder-img" /> */}
                <p className="founder-name">K Guru Prasad - CEO, Skribe</p>
              </div>
              <div>
                <p>Skribe is shaped by Guru, a strategic communications professional with close to two decades of experience in Internal Communications. He is the founder of Really Media Communications, an internal communication and employee experience agency established in 2014, and holds a Specialist Diploma in Internal Communications from CIPR (UK).</p>
                <p>Working across industries and closely with leadership teams, Guru kept running into the same gap: messages were being sent, but there was little clarity on who they reached, what landed, and what actually worked. Over the years, he built communication solutions that helped leaders move beyond broadcast and create meaningful, measurable connections with employees.</p>
                <p>Skribe is the product of that journey. An enterprise-grade internal communication platform built for real-world challenges: creating with intent, knowing exactly what goes out, maintaining transparency across teams, enforcing control through approvals, scaling communication without chaos, and capturing feedback that closes the loop.</p>
                <p>At its core, Skribe reflects how internal communication truly works — reach the right people, measure impact, and scale what delivers value.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ textAlign: 'center', marginBottom: '100px' }}>
          <div className="container">
            <div style={{ background: '#f0f4ff', padding: '100px 40px', borderRadius: '40px' }}>
              <h2 className="cta-title">Internal communication shouldn't be a guessing game.</h2>
              <p style={{ marginBottom: '2rem', opacity: 0.8, fontSize: '1.1rem' }}>
                Start connecting your workforce today. No credit card required.
              </p>
              <div className="btn-group" style={{ justifyContent: 'center' }}>
                <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Request Demo</button>
                <a href="#" className="btn btn-secondary">Sign Up</a>
              </div>
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
