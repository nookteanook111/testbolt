import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import SignUp from './components/SignUp'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <Features />
        <Pricing />
        <SignUp />
      </main>
      <Footer />
    </div>
  )
}

export default App