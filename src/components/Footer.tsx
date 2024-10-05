import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">CloudSaaS</h3>
            <p className="text-sm text-gray-400">Simplifying your workflow with powerful cloud-based solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-gray-100">Home</a></li>
              <li><a href="#features" className="text-sm text-gray-400 hover:text-gray-100">Features</a></li>
              <li><a href="#pricing" className="text-sm text-gray-400 hover:text-gray-100">Pricing</a></li>
              <li><a href="#signup" className="text-sm text-gray-400 hover:text-gray-100">Sign Up</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-100">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-gray-100">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-gray-100">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          &copy; 2023 CloudSaaS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer