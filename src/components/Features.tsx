import React from 'react'
import { Zap, Lock, BarChart } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-400" />,
    title: 'Lightning Fast',
    description: 'Experience unparalleled speed and performance with our optimized cloud infrastructure.'
  },
  {
    icon: <Lock className="h-8 w-8 text-blue-400" />,
    title: 'Secure & Reliable',
    description: 'Rest easy knowing your data is protected with state-of-the-art security measures.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-blue-400" />,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with our powerful analytics and reporting tools.'
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Why Choose CloudSaaS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glassmorphism-light p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features