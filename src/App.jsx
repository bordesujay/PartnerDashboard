import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import QuickAccessTiles from './components/QuickAccessTiles'
import FinancialInsights from './components/FinancialInsights'
import ReportsSection from './components/ReportsSection'
import NotificationsCalendar from './components/NotificationsCalendar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <div className="dashboard-welcome">
          </div>
          
          <QuickAccessTiles />
          
          <FinancialInsights />
          
          <ReportsSection />
          
          <NotificationsCalendar />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App 