import { useState } from 'react'
import axios from 'axios'

const countries = [
  {code: "+1", flag: "🇺🇸"}, {code: "+44", flag: "🇬🇧"}, {code: "+91", flag: "🇮🇳"}, 
  {code: "+61", flag: "🇦🇺"}, {code: "+81", flag: "🇯🇵"}, {code: "+86", flag: "🇨🇳"}, 
  {code: "+49", flag: "🇩🇪"}, {code: "+33", flag: "🇫🇷"}, {code: "+39", flag: "🇮🇹"}, 
  {code: "+34", flag: "🇪🇸"}, {code: "+7", flag: "🇷🇺"}, {code: "+55", flag: "🇧🇷"}, 
  {code: "+52", flag: "🇲🇽"}, {code: "+27", flag: "🇿🇦"}, {code: "+82", flag: "🇰🇷"}, 
  {code: "+65", flag: "🇸🇬"}, {code: "+971", flag: "🇦🇪"}, {code: "+966", flag: "🇸🇦"}, 
  {code: "+31", flag: "🇳🇱"}, {code: "+46", flag: "🇸🇪"}
]

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '', workEmail: '', phone: '', countryCode: '+1', organisation: '', employees: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' })
      return
    }

    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/send-demo-request`, {
        ...formData,
        phone: `${formData.countryCode} ${formData.phone}`
      })
      setStatus({ type: 'success', message: 'Thank you! Your demo request has been sent successfully.' })
      setFormData({ fullName: '', workEmail: '', phone: '', countryCode: '+1', organisation: '', employees: '' })
      setTimeout(() => onClose(), 3000)
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or email guru@skribe.app' })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Request a Demo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" required placeholder="John Doe" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
          </div>
          <div className="form-group">
            <label className="form-label">Work Email</label>
            <input type="email" className="form-input" required placeholder="john@company.com" value={formData.workEmail} onChange={(e) => setFormData({...formData, workEmail: e.target.value})} />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <div className="phone-group">
              <select className="country-select" value={formData.countryCode} onChange={(e) => setFormData({...formData, countryCode: e.target.value})}>
                {countries.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
              </select>
              <input type="tel" className="form-input" required placeholder="123 456 7890" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Organisation Name</label>
            <input type="text" className="form-input" required placeholder="Acme Corp" value={formData.organisation} onChange={(e) => setFormData({...formData, organisation: e.target.value})} />
          </div>
          <div className="form-group">
            <label className="form-label">No. of Employees</label>
            <select className="form-input" required value={formData.employees} onChange={(e) => setFormData({...formData, employees: e.target.value})}>
              <option value="">Select range...</option>
              <option value="1-50">1 - 50</option>
              <option value="51-200">51 - 200</option>
              <option value="201-500">201 - 500</option>
              <option value="501-1000">501 - 1000</option>
              <option value="1000+">1000+</option>
            </select>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" className="checkbox-input" required />
            <label className="checkbox-text">I hereby authorise to receive communication on SMS, RCS, Email or WhatsApp- Promotional or Informational messages from Skribe</label>
          </div>
          <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit Request'}
          </button>
          {status.message && <div className={`status-message ${status.type}`}>{status.message}</div>}
        </form>
      </div>
    </div>
  )
}
