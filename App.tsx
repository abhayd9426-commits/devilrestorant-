import React, { useState } from 'react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Language } from './types';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import UserDashboard from './pages/UserDashboard';
import OrderSuccess from './pages/OrderSuccess';
import Contact from './pages/Contact';

// Admin Pages
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminMenu from './pages/admin/AdminMenu';
import AdminOrders from './pages/admin/AdminOrders';

const AppContent: React.FC = () => {
    const [lang, setLang] = useState<Language>('EN');
    const location = useLocation();
    
    // Hide default layout for admin routes
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900">
            {!isAdminRoute && <Navbar lang={lang} setLang={setLang} />}
            
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home lang={lang} />} />
                    <Route path="/menu" element={<Menu lang={lang} />} />
                    <Route path="/cart" element={<Cart lang={lang} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Auth type="login" lang={lang} />} />
                    <Route path="/signup" element={<Auth type="signup" lang={lang} />} />
                    <Route path="/dashboard" element={<UserDashboard />} />
                    <Route path="/order-success/:id" element={<OrderSuccess />} />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="menu" element={<AdminMenu />} />
                        <Route path="orders" element={<AdminOrders />} />
                    </Route>
                </Routes>
            </main>

            {!isAdminRoute && <Footer lang={lang} />}
        </div>
    );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <MemoryRouter>
            <AppContent />
        </MemoryRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;