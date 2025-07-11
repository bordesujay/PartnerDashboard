import './QuickAccessTiles.css'

function QuickAccessTiles() {
  const tiles = [
    {
      id: 'banking',
      title: 'Banking',
      icon: '🔐',
      description: 'Secure access',
      color: '#d4af37'
    },
    {
      id: 'annual-leave',
      title: 'Submit Annual Leave',
      icon: '📅',
      description: 'Request time off',
      color: '#8b1538'
    },
    {
      id: 'call-reception',
      title: 'Call Reception',
      icon: '📞',
      description: 'Contact front desk',
      color: '#2b5c57'
    },
    {
      id: 'maps-transport',
      title: 'Maps & Transport',
      icon: '🗺️',
      description: 'Navigation & booking',
      color: '#d4af37'
    },
    {
      id: 'meeting-rooms',
      title: 'Meeting Room Booking',
      icon: '🏢',
      description: 'Reserve conference rooms',
      color: '#8b1538'
    },
    {
      id: 'employee-directory',
      title: 'Employee Directory',
      icon: '👥',
      description: 'Contact colleagues',
      color: '#2b5c57'
    }
  ]

  const handleTileClick = (tileId) => {
    console.log(`Clicked tile: ${tileId}`)
    // Future: Navigate to specific functionality
  }

  return (
    <section className="quick-access-section">
      <div className="section-header">
        <h3 className="section-title">Quick Access</h3>
        <p className="section-subtitle">Frequently used tools and services</p>
      </div>
      
      <div className="tiles-grid">
        {tiles.map((tile) => (
          <div 
            key={tile.id}
            className="access-tile"
            onClick={() => handleTileClick(tile.id)}
            style={{ '--accent-color': tile.color }}
          >
            <div className="tile-icon">
              {tile.icon}
            </div>
            <div className="tile-content">
              <h4 className="tile-title">{tile.title}</h4>
              <p className="tile-description">{tile.description}</p>
            </div>
            <div className="tile-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QuickAccessTiles 