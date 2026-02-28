import React, { useState } from 'react';
import { Menu as MenuIcon, X, MapPin, Phone, Mail, Clock, ChevronRight, Star, Pizza, Utensils, Sandwich, Coffee } from 'lucide-react';
import { motion } from 'motion/react';
import { menuData } from './data';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('deals');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-red-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-yellow-400 text-red-800 font-black text-3xl italic px-3 py-1 rounded-full border-4 border-red-800 shadow-sm transform -skew-x-12">
                HFC
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block text-yellow-300">Halal Fried Chiks</span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="hover:text-yellow-300 transition-colors font-medium">Home</a>
              <a href="#menu" className="hover:text-yellow-300 transition-colors font-medium">Menu</a>
              <a href="#about" className="hover:text-yellow-300 transition-colors font-medium">About Us</a>
              <a href="#contact" className="hover:text-yellow-300 transition-colors font-medium">Contact</a>
              <button className="bg-yellow-400 text-red-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors shadow-md transform hover:scale-105">
                Order Now
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white hover:text-yellow-300">
                {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-red-800 absolute w-full shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 hover:text-yellow-300">Home</a>
              <a href="#menu" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 hover:text-yellow-300">Menu</a>
              <a href="#about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 hover:text-yellow-300">About Us</a>
              <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 hover:text-yellow-300">Contact</a>
              <div className="px-3 py-2">
                <button className="w-full bg-yellow-400 text-red-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-yellow-400 drop-shadow-lg">
              Crispy. Juicy. <br/><span className="text-white">100% Halal.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-2xl mx-auto lg:mx-0">
              Experience the best fried chicken, burgers, wraps, and pizzas in town. Freshly prepared with premium halal ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#menu" className="bg-yellow-400 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2">
                View Menu <ChevronRight size={20} />
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-900 transition-all flex items-center justify-center">
                Find Us
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Delicious Burger" 
                className="relative z-10 w-full h-full object-cover rounded-full border-8 border-red-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white text-red-700 font-bold py-2 px-4 rounded-full shadow-xl z-20 flex items-center gap-1 transform -rotate-12"
              >
                <Star className="fill-yellow-400 text-yellow-400" size={16} /> Top Rated
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute top-10 -left-6 bg-yellow-400 text-red-900 font-black py-3 px-6 rounded-full shadow-xl z-20 transform -rotate-6 text-xl border-2 border-white"
              >
                100% Halal
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,122.45,130,184.33,130,232.4,130,280.4,115.1,321.39,56.44Z" className="fill-stone-50"></path>
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-red-700 font-bold tracking-wider uppercase text-sm mb-2">Our Menu</h2>
            <h3 className="text-4xl md:text-5xl font-black text-stone-900 mb-4">Delicious Offerings</h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Menu Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {[
              { id: 'deals', label: 'Special Deals', icon: <Star size={18} /> },
              { id: 'pizzas', label: 'Pizzas', icon: <Pizza size={18} /> },
              { id: 'burgers', label: 'Burgers & Sandwiches', icon: <Sandwich size={18} /> },
              { id: 'wraps', label: 'Wraps & Rolls', icon: <Utensils size={18} /> },
              { id: 'sides', label: 'Sides & Extras', icon: <Coffee size={18} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-red-700 text-white shadow-lg transform scale-105'
                    : 'bg-white text-stone-600 hover:bg-red-50 hover:text-red-700 shadow-sm'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border-t-8 border-yellow-400"
          >
            {/* Deals Tab */}
            {activeTab === 'deals' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuData.deals.map((deal, index) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    key={deal.id} 
                    className="bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:border-red-200 hover:shadow-md transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 bg-yellow-400 text-red-900 font-black px-4 py-1 rounded-bl-xl text-sm">
                      Deal {deal.id}
                    </div>
                    <h4 className="text-xl font-bold text-red-700 mb-3 mt-2">{deal.name}</h4>
                    <p className="text-stone-600 mb-4 min-h-[48px]">{deal.items}</p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-stone-200">
                      <span className="text-sm text-stone-500 font-medium">PKR</span>
                      <span className="text-2xl font-black text-stone-900">Rs. {deal.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pizzas Tab */}
            {activeTab === 'pizzas' && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-red-100">
                      <th className="py-4 px-4 font-bold text-red-700 text-lg">Pizza Flavor</th>
                      <th className="py-4 px-4 font-bold text-stone-600 text-center">Small (7")</th>
                      <th className="py-4 px-4 font-bold text-stone-600 text-center">Medium (9")</th>
                      <th className="py-4 px-4 font-bold text-stone-600 text-center">Large (13")</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuData.pizzas.map((pizza, index) => (
                      <tr key={index} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                        <td className="py-4 px-4 font-bold text-stone-800">{pizza.name}</td>
                        <td className="py-4 px-4 text-center font-medium text-stone-600">{pizza.small ? `Rs. ${pizza.small}` : '-'}</td>
                        <td className="py-4 px-4 text-center font-medium text-stone-600">Rs. {pizza.medium}</td>
                        <td className="py-4 px-4 text-center font-medium text-red-600 font-bold">Rs. {pizza.large}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Burgers Tab */}
            {activeTab === 'burgers' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuData.burgers.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border-b border-stone-100 hover:bg-stone-50 rounded-lg transition-colors">
                    <h4 className="text-lg font-bold text-stone-800">{item.name}</h4>
                    <span className="text-xl font-black text-red-600">Rs. {item.price}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Wraps Tab */}
            {activeTab === 'wraps' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuData.wraps.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border-b border-stone-100 hover:bg-stone-50 rounded-lg transition-colors">
                    <h4 className="text-lg font-bold text-stone-800">{item.name}</h4>
                    <span className="text-xl font-black text-red-600">Rs. {item.price}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Sides Tab */}
            {activeTab === 'sides' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuData.sides.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border-b border-stone-100 hover:bg-stone-50 rounded-lg transition-colors">
                    <h4 className="text-lg font-bold text-stone-800">{item.name}</h4>
                    <span className="text-xl font-black text-red-600">Rs. {item.price}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-yellow-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant Interior" 
                className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-700 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-black text-yellow-400">10+</p>
                <p className="font-bold">Years of Excellence</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-red-700 font-bold tracking-wider uppercase text-sm mb-2">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-stone-900 mb-6">The HFC Story</h3>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Welcome to <strong className="text-red-700">HFC - Halal Fried Chiks</strong>. We started with a simple mission: to provide the most delicious, crispy, and juicy fried chicken while strictly adhering to 100% halal standards.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our secret lies in our unique blend of spices, fresh locally sourced ingredients, and a passion for great food. Whether you're craving a classic zinger burger, a hearty shawarma wrap, or a freshly baked pizza, we've got something to satisfy every appetite.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                    <Star size={24} className="fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Premium Quality</h4>
                    <p className="text-sm text-stone-500">Only the freshest ingredients</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">100% Halal</h4>
                    <p className="text-sm text-stone-500">Certified halal meats</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-red-700 font-bold tracking-wider uppercase text-sm mb-2">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-black text-stone-900 mb-4">Get In Touch</h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, staggerChildren: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="bg-red-100 p-4 rounded-full text-red-700 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1">Our Location</h4>
                  <p className="text-stone-600">Vanike Road<br/>Hafizabad</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="bg-red-100 p-4 rounded-full text-red-700 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1">Phone Number</h4>
                  <p className="text-stone-600">+92 345 6537333</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="bg-red-100 p-4 rounded-full text-red-700 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1">Opening Hours</h4>
                  <p className="text-stone-600">Mon-Thu: 11:00 AM - 11:00 PM<br/>Fri-Sun: 11:00 AM - 1:00 AM</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg"
            >
              <h4 className="text-2xl font-bold text-stone-900 mb-6">Send us a message</h4>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Your Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors resize-none" placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" className="w-full bg-red-700 text-white font-bold py-4 rounded-lg hover:bg-red-800 transition-colors shadow-md text-lg">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12 border-t-4 border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-yellow-400 text-red-900 font-black text-2xl italic px-2 py-1 rounded-lg inline-block">
                  HFC
                </div>
              </div>
              <p className="text-sm text-stone-400 mb-4">
                Serving the best halal fried chicken, burgers, and pizzas in town. Quality you can taste in every bite.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.tiktok.com/@hfc.vanike.tarar?_r=1&_t=ZS-94IrIeGbbAz" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-yellow-400 transition-colors">Our Menu</a></li>
                <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Menu Categories</h4>
              <ul className="space-y-2">
                <li><a href="#menu" className="hover:text-yellow-400 transition-colors">Zinger Burgers</a></li>
                <li><a href="#menu" className="hover:text-yellow-400 transition-colors">Wraps & Shawarma</a></li>
                <li><a href="#menu" className="hover:text-yellow-400 transition-colors">Halal Pizzas</a></li>
                <li><a href="#menu" className="hover:text-yellow-400 transition-colors">Sides & Drinks</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Newsletter</h4>
              <p className="text-sm text-stone-400 mb-4">Subscribe to get special offers and updates.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="bg-stone-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-red-500" />
                <button type="submit" className="bg-red-700 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition-colors">
                  <Mail size={20} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} HFC - Halal Fried Chiks. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
