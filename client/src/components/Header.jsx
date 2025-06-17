"use client"

import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { Button } from "./ui/button"
import { UserContext } from "../Context/useContext"

const Header = () => {
  const { user, logout } = useContext(UserContext)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-gradient-to-r from-[#1A1A21] via-[#2A1A3A] to-[#1A1A21] text-white shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
            onClick={closeMobileMenu}
          >
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                FutureLens
              </span>
              <span className="text-2xl ml-1 animate-pulse"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {!user ? (
              <div className="flex items-center space-x-3">
                <Link to="/register">
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-200 px-6 py-2 rounded-full"
                  >
                    Register
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                    Login
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3 bg-gray-800/50 rounded-full px-4 py-2 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-semibold">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <span className="text-sm text-gray-300 hidden sm:block">
                    Hi, <span className="text-white font-medium">{user.name}</span>
                  </span>
                </div>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200 px-4 py-2 rounded-full"
                >
                  Logout
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6 transition-transform duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6 transition-transform duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
          {!user ? (
            <div className="space-y-3 p-4">
              <Link to="/register" onClick={closeMobileMenu}>
                <Button
                  variant="outline"
                  className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-200 py-3 rounded-lg"
                >
                  Register
                </Button>
              </Link>
              <Link to="/login" onClick={closeMobileMenu}>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg shadow-lg">
                  Login
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4 p-4">
              {/* User info */}
              <div className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-lg font-semibold">
                  {user.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <div>
                  <p className="text-sm text-gray-400">Welcome back,</p>
                  <p className="text-white font-medium">{user.name}</p>
                </div>
              </div>

              {/* Navigation links for logged in users */}
              <div className="space-y-2">
                <Link
                  to="/dashboard"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  Profile
                </Link>
              </div>

              {/* Logout button */}
              <Button
                onClick={() => {
                  logout()
                  closeMobileMenu()
                }}
                variant="outline"
                className="w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200 py-3 rounded-lg"
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
