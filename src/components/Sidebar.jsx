import './Sidebar.css'
import { useState } from 'react'

function Sidebar() {
  const [isReportsOpen, setIsReportsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Dashboard')

  const menuItems = [
    { name: 'Dashboard', icon: '🏠', active: true },
    { name: 'Banking', icon: '🏦' },
    { name: 'Annual Leave', icon: '📅' },
    { name: 'Call Reception', icon: '📞' },
    { name: 'Google Maps', icon: '🗺️' },
    { name: 'Book Transport', icon: '🚗' },
    { name: 'Meeting Room Booking', icon: '🏢' },
    { name: 'Employee Directory', icon: '👥' },
    { 
      name: 'Reports', 
      icon: '📊', 
      hasDropdown: true,
      subItems: ['Admin Reports', 'Client Reports', 'Matter Reports']
    },
    { name: 'Client Management', icon: '👔' },
    { name: 'News & Market Insights', icon: '📰' },
    { name: 'Firm Announcements', icon: '📢' }
  ]

  const handleItemClick = (itemName) => {
    setActiveItem(itemName)
    if (itemName === 'Reports') {
      setIsReportsOpen(!isReportsOpen)
    }
  }

  const handleSubItemClick = (subItem) => {
    setActiveItem(subItem)
  }

  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-item">
              <button 
                className={`sidebar-link ${activeItem === item.name ? 'active' : ''}`}
                onClick={() => handleItemClick(item.name)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-text">{item.name}</span>
                {item.hasDropdown && (
                  <span className={`dropdown-arrow ${isReportsOpen ? 'open' : ''}`}>
                    ▼
                  </span>
                )}
              </button>
              
              {item.hasDropdown && isReportsOpen && (
                <ul className="sidebar-submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="sidebar-subitem">
                      <button 
                        className={`sidebar-sublink ${activeItem === subItem ? 'active' : ''}`}
                        onClick={() => handleSubItemClick(subItem)}
                      >
                        <span className="sidebar-subtext">{subItem}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar 