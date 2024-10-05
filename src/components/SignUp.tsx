import React, { useState } from 'react'
import { Mail, Lock, User } from 'lucide-react'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="signup" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto glassmorphism rounded-lg shadow-md overflow-hidden">
          <div className="py-4 px-6 bg-blue-600 text-white text-center">
            <h2 className="text-3xl font-bold">Sign Up for CloudSaaS</h2>
          </div>
          <form onSubmit={handleSubmit} className="py-4 px-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 font-bold mb-2">Full Name</label>
              <div className="flex items-center border border-gray-700 rounded-md bg-gray-800 bg-opacity-50">
                <span className="text-gray-400 px-3"><User size={20} /></span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2 px-3 text-gray-100 bg-transparent focus:outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 font-bold mb-2">Email Address</label>
              <div className="flex items-center border border-gray-700 rounded-md bg-gray-800 bg-opacity-50">
                <span className="text-gray-400 px-3"><Mail size={20} /></span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 px-3 text-gray-100 bg-transparent focus:outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-300 font-bold mb-2">Password</label>
              <div className="flex items-center border border-gray-700 rounded-md bg-gray-800 bg-opacity-50">
                <span className="text-gray-400 px-3"><Lock size={20} /></span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full py-2 px-3 text-gray-100 bg-transparent focus:outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-300 font-bold mb-2">Confirm Password</label>
              <div className="flex items-center border border-gray-700 rounded-md bg-gray-800 bg-opacity-50">
                <span className="text-gray-400 px-3"><Lock size={20} /></span>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full py-2 px-3 text-gray-100 bg-transparent focus:outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="py-4 px-6 bg-gray-800 bg-opacity-50 text-center">
            <p className="text-gray-300 text-sm">
              Already have an account? <a href="#" className="text-blue-400 hover:text-blue-300">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp