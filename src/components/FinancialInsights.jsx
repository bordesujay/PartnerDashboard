import './FinancialInsights.css'
import { useState } from 'react'

function FinancialInsights() {
  const [activeView, setActiveView] = useState('monthly')

  // Sample data for different time periods
  const financialData = {
    monthly: {
      title: 'Monthly Billing Progress',
      target: 2500000,
      current: 1875000,
      percentage: 75,
      period: 'Current Month',
      chartData: [
        { label: 'Week 1', value: 425000, target: 625000 },
        { label: 'Week 2', value: 520000, target: 625000 },
        { label: 'Week 3', value: 580000, target: 625000 },
        { label: 'Week 4', value: 350000, target: 625000 },
      ]
    },
    quarterly: {
      title: 'Quarterly Billing Progress',
      target: 7500000,
      current: 6200000,
      percentage: 83,
      period: 'Q2 2024',
      chartData: [
        { label: 'Month 1', value: 2200000, target: 2500000 },
        { label: 'Month 2', value: 2100000, target: 2500000 },
        { label: 'Month 3', value: 1900000, target: 2500000 },
      ]
    },
    annual: {
      title: 'Annual Billing Progress',
      target: 30000000,
      current: 22500000,
      percentage: 75,
      period: '2024',
      chartData: [
        { label: 'Q1', value: 7200000, target: 7500000 },
        { label: 'Q2', value: 6800000, target: 7500000 },
        { label: 'Q3', value: 5200000, target: 7500000 },
        { label: 'Q4', value: 3300000, target: 7500000 },
      ]
    }
  }

  const currentData = financialData[activeView]

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusColor = (percentage) => {
    if (percentage >= 90) return '#22c55e' // Green
    if (percentage >= 70) return '#d4af37' // Gold
    if (percentage >= 50) return '#f59e0b' // Orange
    return '#ef4444' // Red
  }

  return (
    <section className="financial-insights">
      <div className="insights-header">
        <h3 className="insights-title">Financial Performance</h3>
        <div className="view-toggles">
          {Object.keys(financialData).map((view) => (
            <button
              key={view}
              className={`toggle-btn ${activeView === view ? 'active' : ''}`}
              onClick={() => setActiveView(view)}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="insights-content">
        <div className="performance-overview">
          <div className="overview-card">
            <h4 className="card-title">{currentData.title}</h4>
            <div className="progress-info">
              <div className="progress-stats">
                <div className="stat-item">
                  <span className="stat-label">Current</span>
                  <span className="stat-value current">{formatCurrency(currentData.current)}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Target</span>
                  <span className="stat-value target">{formatCurrency(currentData.target)}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Achievement</span>
                  <span 
                    className="stat-value percentage"
                    style={{ color: getStatusColor(currentData.percentage) }}
                  >
                    {currentData.percentage}%
                  </span>
                </div>
              </div>
              
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${Math.min(currentData.percentage, 100)}%`,
                      backgroundColor: getStatusColor(currentData.percentage)
                    }}
                  ></div>
                </div>
                <div className="progress-labels">
                  <span>0%</span>
                  <span>{currentData.period}</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <h5 className="chart-title">Billing Breakdown</h5>
          <div className="chart">
            {currentData.chartData.map((item, index) => {
              const achievement = (item.value / item.target) * 100
              return (
                <div key={index} className="chart-bar">
                  <div className="bar-container">
                    <div className="bar-background">
                      <div 
                        className="bar-fill"
                        style={{ 
                          height: `${Math.min(achievement, 100)}%`,
                          backgroundColor: getStatusColor(achievement)
                        }}
                      ></div>
                    </div>
                    <div className="bar-info">
                      <span className="bar-percentage">{Math.round(achievement)}%</span>
                      <span className="bar-value">{formatCurrency(item.value)}</span>
                    </div>
                  </div>
                  <div className="bar-label">{item.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancialInsights 