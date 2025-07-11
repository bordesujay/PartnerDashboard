import './ReportsSection.css'
import { useState } from 'react'

function ReportsSection() {
  const [expandedPanels, setExpandedPanels] = useState(new Set(['admin'])) // Admin panel open by default

  const reportsData = {
    admin: {
      title: 'Admin Reports',
      icon: '⚙️',
      description: 'Staff utilization, compliance status, overall billing summary',
      items: [
        { name: 'Staff Utilization Report', status: 'Current', value: '87% average utilization', trend: 'up' },
        { name: 'Compliance Status', status: 'All Clear', value: '12/12 requirements met', trend: 'stable' },
        { name: 'Overall Billing Summary', status: 'On Track', value: '$22.5M YTD revenue', trend: 'up' },
        { name: 'Resource Allocation', status: 'Optimized', value: '156 active matters', trend: 'up' }
      ]
    },
    client: {
      title: 'Client Reports',
      icon: '👔',
      description: 'Revenue summary, outstanding invoices, recent feedback',
      items: [
        { name: 'Revenue Summary', status: 'Strong', value: '$6.2M this quarter', trend: 'up' },
        { name: 'Outstanding Invoices', status: 'Attention', value: '$420K overdue', trend: 'down' },
        { name: 'Client Satisfaction', status: 'Excellent', value: '4.8/5.0 rating', trend: 'up' },
        { name: 'New Client Acquisition', status: 'Growing', value: '23 new clients', trend: 'up' }
      ]
    },
    matter: {
      title: 'Matter Reports',
      icon: '📂',
      description: 'Overview of ongoing matters, upcoming deadlines, profitability metrics',
      items: [
        { name: 'Active Matters', status: 'Healthy', value: '156 ongoing cases', trend: 'stable' },
        { name: 'Upcoming Deadlines', status: 'Urgent', value: '8 due this week', trend: 'attention' },
        { name: 'Matter Profitability', status: 'Strong', value: '34% average margin', trend: 'up' },
        { name: 'Case Resolution Rate', status: 'Efficient', value: '92% success rate', trend: 'up' }
      ]
    }
  }

  const togglePanel = (panelId) => {
    const newExpanded = new Set(expandedPanels)
    if (newExpanded.has(panelId)) {
      newExpanded.delete(panelId)
    } else {
      newExpanded.add(panelId)
    }
    setExpandedPanels(newExpanded)
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'excellent':
      case 'strong':
      case 'healthy':
      case 'efficient':
      case 'optimized':
      case 'growing':
      case 'all clear':
      case 'on track':
        return '#22c55e'
      case 'current':
      case 'stable':
        return '#d4af37'
      case 'attention':
      case 'urgent':
        return '#f59e0b'
      default:
        return '#6b7280'
    }
  }

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return '📈'
      case 'down': return '📉'
      case 'attention': return '⚠️'
      default: return '➡️'
    }
  }

  return (
    <section className="reports-section">
      <div className="reports-header">
        <h3 className="reports-title">Executive Reports</h3>
        <p className="reports-subtitle">Comprehensive insights across all firm operations</p>
      </div>

      <div className="reports-panels">
        {Object.entries(reportsData).map(([panelId, panel]) => {
          const isExpanded = expandedPanels.has(panelId)
          
          return (
            <div key={panelId} className={`report-panel ${isExpanded ? 'expanded' : ''}`}>
              <button 
                className="panel-header"
                onClick={() => togglePanel(panelId)}
                aria-expanded={isExpanded}
              >
                <div className="header-content">
                  <div className="header-icon">{panel.icon}</div>
                  <div className="header-text">
                    <h4 className="panel-title">{panel.title}</h4>
                    <p className="panel-description">{panel.description}</p>
                  </div>
                </div>
                <div className={`expand-arrow ${isExpanded ? 'expanded' : ''}`}>
                  ▼
                </div>
              </button>

              {isExpanded && (
                <div className="panel-content">
                  <div className="report-items">
                    {panel.items.map((item, index) => (
                      <div key={index} className="report-item">
                        <div className="item-header">
                          <span className="item-name">{item.name}</span>
                          <span className="item-trend">{getTrendIcon(item.trend)}</span>
                        </div>
                        <div className="item-details">
                          <span 
                            className="item-status"
                            style={{ color: getStatusColor(item.status) }}
                          >
                            {item.status}
                          </span>
                          <span className="item-value">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="panel-actions">
                    <button className="action-btn primary">View Full Report</button>
                    <button className="action-btn secondary">Export Data</button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ReportsSection 