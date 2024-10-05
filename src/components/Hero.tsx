import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simplify Your Workflow with CloudSaaS</h1>
        <p className="text-xl mb-8 text-gray-300">Boost productivity and streamline your business processes with our powerful cloud-based solution.</p>
        <a href="#signup" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors">Start Free Trial</a>
      </div>
    </section>
  )
}

export default Hero