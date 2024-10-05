import React from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$9',
    features: ['5 Users', '10GB Storage', 'Basic Support']
  },
  {
    name: 'Pro',
    price: '$29',
    features: ['25 Users', '50GB Storage', 'Priority Support', 'Advanced Analytics']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited Users', 'Unlimited Storage', '24/7 Support', 'Custom Integration']
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="glassmorphism-light rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6 text-blue-400">{plan.price}<span className="text-sm font-normal text-gray-400">/month</span></p>
              <ul className="mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2 text-gray-300">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing