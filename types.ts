export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export enum OrderStatus {
  PENDING = 'Pending',
  CONFIRMED = 'Confirmed',
  DELIVERED = 'Delivered',
  REJECTED = 'Rejected'
}

export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: UserRole;
  password?: string; // Only used internally for auth check
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
  unit?: string; // e.g., 'per piece', 'per kg'
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  customerName: string;
  mobile: string;
  address: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string; // ISO string
}

export type Language = 'EN' | 'HI';

export const TRANSLATIONS = {
  EN: {
    home: 'Home',
    menu: 'Menu',
    cart: 'Cart',
    login: 'Login',
    signup: 'Signup',
    dashboard: 'Dashboard',
    admin: 'Admin Panel',
    logout: 'Logout',
    welcome: 'Welcome to DEVIL Restaurant',
    subtitle: 'Taste the fire of flavor.',
    orderNow: 'Order Now',
    yourOrders: 'Your Orders',
    total: 'Total',
    status: 'Status',
    items: 'Items',
    addToCart: 'Add to Cart',
    placeOrder: 'Place Order',
    contact: 'Contact Us',
    helpline: 'Helpline',
    address: 'Address',
    email: 'Email',
    trackOrder: 'Track Order',
    myProfile: 'My Profile',
    adminDashboard: 'Admin Dashboard',
    manageMenu: 'Manage Menu',
    manageOrders: 'Manage Orders'
  },
  HI: {
    home: 'होम',
    menu: 'मेन्यू',
    cart: 'कार्ट',
    login: 'लॉग इन',
    signup: 'साइन अप',
    dashboard: 'डैशबोर्ड',
    admin: 'एडमिन पैनल',
    logout: 'लॉग आउट',
    welcome: 'डेविल रेस्टोरेंट में आपका स्वागत है',
    subtitle: 'स्वाद की आग का अनुभव करें।',
    orderNow: 'अभी ऑर्डर करें',
    yourOrders: 'आपके ऑर्डर्स',
    total: 'कुल',
    status: 'स्थिति',
    items: 'वस्तुएं',
    addToCart: 'कार्ट में डालें',
    placeOrder: 'ऑर्डर करें',
    contact: 'संपर्क करें',
    helpline: 'हेल्पलाइन',
    address: 'पता',
    email: 'ईमेल',
    trackOrder: 'ऑर्डर ट्रैक करें',
    myProfile: 'मेरा प्रोफाइल',
    adminDashboard: 'एडमिन डैशबोर्ड',
    manageMenu: 'मेन्यू प्रबंधित करें',
    manageOrders: 'ऑर्डर प्रबंधित करें'
  }
};