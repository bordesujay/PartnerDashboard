import './NotificationsCalendar.css'
import { useState } from 'react'

function NotificationsCalendar() {
  const [activeTab, setActiveTab] = useState('appointments')

  // Sample data for appointments and deadlines
  const appointmentsData = [
    {
      id: 1,
      type: 'meeting',
      title: 'Client Consultation - Morrison Industries',
      time: '9:00 AM',
      date: 'Today',
      location: 'Conference Room A',
      priority: 'high',
      attendees: 3
    },
    {
      id: 2,
      type: 'court',
      title: 'Supreme Court Hearing - Davis vs. Tech Corp',
      time: '2:30 PM',
      date: 'Today',
      location: 'Supreme Court Melbourne',
      priority: 'urgent',
      attendees: 2
    },
    {
      id: 3,
      type: 'meeting',
      title: 'Board Meeting - Strategic Planning',
      time: '10:00 AM',
      date: 'Tomorrow',
      location: 'Boardroom',
      priority: 'medium',
      attendees: 8
    },
    {
      id: 4,
      type: 'client',
      title: 'New Client Onboarding - Zen Medical',
      time: '3:00 PM',
      date: 'Friday',
      location: 'Meeting Room B',
      priority: 'medium',
      attendees: 4
    }
  ]

  const deadlinesData = [
    {
      id: 1,
      type: 'filing',
      title: 'Supreme Court Filing - Morrison vs. State',
      dueDate: 'Today',
      dueTime: '5:00 PM',
      matter: 'Civil Litigation',
      priority: 'urgent',
      daysLeft: 0
    },
    {
      id: 2,
      type: 'response',
      title: 'Client Response Required - Contract Review',
      dueDate: 'Tomorrow',
      dueTime: '12:00 PM',
      matter: 'Commercial Law',
      priority: 'high',
      daysLeft: 1
    },
    {
      id: 3,
      type: 'submission',
      title: 'Evidence Submission - Patent Case',
      dueDate: 'Monday',
      dueTime: '9:00 AM',
      matter: 'Intellectual Property',
      priority: 'high',
      daysLeft: 4
    },
    {
      id: 4,
      type: 'review',
      title: 'Document Review Deadline - M&A Deal',
      dueDate: 'Wednesday',
      dueTime: '4:00 PM',
      matter: 'Corporate Law',
      priority: 'medium',
      daysLeft: 6
    }
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return '#ef4444'
      case 'high': return '#f59e0b'
      case 'medium': return '#d4af37'
      default: return '#6b7280'
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'meeting': return '🏢'
      case 'court': return '⚖️'
      case 'client': return '👔'
      case 'filing': return '📄'
      case 'response': return '✉️'
      case 'submission': return '📋'
      case 'review': return '🔍'
      default: return '📅'
    }
  }

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'urgent': return 'URGENT'
      case 'high': return 'HIGH'
      case 'medium': return 'MEDIUM'
      default: return 'LOW'
    }
  }

  return (
    <section className="notifications-calendar">
      <div className="nc-header">
        <h3 className="nc-title">Schedule & Deadlines</h3>
        <div className="nc-tabs">
          <button 
            className={`tab-btn ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => setActiveTab('appointments')}
          >
            📅 Appointments
          </button>
          <button 
            className={`tab-btn ${activeTab === 'deadlines' ? 'active' : ''}`}
            onClick={() => setActiveTab('deadlines')}
          >
            ⏰ Deadlines
          </button>
        </div>
      </div>

      <div className="nc-content">
        {activeTab === 'appointments' && (
          <div className="appointments-section">
            <div className="section-summary">
              <span className="summary-text">
                {appointmentsData.filter(apt => apt.date === 'Today').length} appointments today, 
                {appointmentsData.filter(apt => apt.priority === 'urgent' || apt.priority === 'high').length} high priority
              </span>
            </div>
            
            <div className="items-list">
              {appointmentsData.map((appointment) => (
                <div key={appointment.id} className="appointment-item">
                  <div className="item-icon">
                    {getTypeIcon(appointment.type)}
                  </div>
                  <div className="item-content">
                    <div className="item-header">
                      <h5 className="item-title">{appointment.title}</h5>
                      <span 
                        className="item-priority"
                        style={{ backgroundColor: getPriorityColor(appointment.priority) }}
                      >
                        {getPriorityLabel(appointment.priority)}
                      </span>
                    </div>
                    <div className="item-details">
                      <span className="detail-time">
                        📍 {appointment.time} • {appointment.date}
                      </span>
                      <span className="detail-location">
                        🏢 {appointment.location}
                      </span>
                      <span className="detail-attendees">
                        👥 {appointment.attendees} attendee{appointment.attendees !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                  <button className="item-action">
                    <span>Join</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'deadlines' && (
          <div className="deadlines-section">
            <div className="section-summary">
              <span className="summary-text">
                {deadlinesData.filter(dl => dl.daysLeft <= 1).length} urgent deadline{deadlinesData.filter(dl => dl.daysLeft <= 1).length !== 1 ? 's' : ''}, 
                {deadlinesData.filter(dl => dl.priority === 'urgent' || dl.priority === 'high').length} require immediate attention
              </span>
            </div>
            
            <div className="items-list">
              {deadlinesData.map((deadline) => (
                <div key={deadline.id} className="deadline-item">
                  <div className="item-icon">
                    {getTypeIcon(deadline.type)}
                  </div>
                  <div className="item-content">
                    <div className="item-header">
                      <h5 className="item-title">{deadline.title}</h5>
                      <span 
                        className="item-priority"
                        style={{ backgroundColor: getPriorityColor(deadline.priority) }}
                      >
                        {getPriorityLabel(deadline.priority)}
                      </span>
                    </div>
                    <div className="item-details">
                      <span className="detail-time">
                        ⏰ Due: {deadline.dueDate} at {deadline.dueTime}
                      </span>
                      <span className="detail-matter">
                        📂 {deadline.matter}
                      </span>
                      <span className={`detail-countdown ${deadline.daysLeft <= 1 ? 'urgent' : ''}`}>
                        🕐 {deadline.daysLeft === 0 ? 'Due today' : `${deadline.daysLeft} day${deadline.daysLeft !== 1 ? 's' : ''} left`}
                      </span>
                    </div>
                  </div>
                  <button className="item-action">
                    <span>View</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="nc-footer">
        <button className="footer-btn">View Full Calendar</button>
        <button className="footer-btn">Manage Deadlines</button>
      </div>
    </section>
  )
}

export default NotificationsCalendar 