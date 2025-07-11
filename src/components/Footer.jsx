import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'IT Support', href: '#support' },
    { name: 'Help Center', href: '#help' }
  ]

  const contactInfo = {
    address: {
      street: 'Level 27, 140 William Street',
      city: 'Melbourne VIC 3000',
      country: 'Australia'
    },
    phone: '+61 3 9288 0555',
    email: 'info@maddocks.com.au',
    website: 'www.maddocks.com.au'
  }

  const offices = [
    { city: 'Melbourne', phone: '+61 3 9288 0555' },
    { city: 'Sydney', phone: '+61 2 9291 7100' },
    { city: 'Canberra', phone: '+61 2 6217 4000' }
  ]

  return (
    <footer className="dashboard-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="section-title">Maddocks</h4>
          <p className="section-subtitle">The modern Australian law firm</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <span>{contactInfo.address.street}</span>
                <span>{contactInfo.address.city}</span>
                <span>{contactInfo.address.country}</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span className="contact-details">{contactInfo.phone}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span className="contact-details">{contactInfo.email}</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="section-title">Quick Links</h4>
          <ul className="quick-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="quick-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="section-title">Our Offices</h4>
          <div className="offices-list">
            {offices.map((office, index) => (
              <div key={index} className="office-item">
                <span className="office-city">{office.city}</span>
                <span className="office-phone">{office.phone}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4 className="section-title">Partner Dashboard</h4>
          <p className="dashboard-info">
            Secure executive dashboard for senior partners. Access your critical 
            firm metrics, schedules, and reports in one centralized location.
          </p>
          <div className="dashboard-stats">
            <div className="stat-item">
              <span className="stat-value">156</span>
              <span className="stat-label">Active Matters</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">$22.5M</span>
              <span className="stat-label">YTD Revenue</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <span className="copyright">
            © {currentYear} Maddocks. All rights reserved.
          </span>
          <div className="footer-meta">
            <span className="last-updated">
              Dashboard last updated: {new Date().toLocaleDateString('en-AU')}
            </span>
            <span className="version">v2.1.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 