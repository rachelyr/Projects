import bycrypt from 'bcryptjs';

export const users = [
    {
    fullName: 'Demo User',
    email: 'demo@example.com',
    password: bycrypt.hashSync('123456', 10),
    phone: '1234567890',
   },
    {
    fullName: 'Zpunet Company',
    email: 'onlineshop@example.com',
    password: bycrypt.hashSync('123456', 10),
    phone: '1234567890',
   },
];


//export products
export const products = [
    {
        title: 'Wireless Headphones',
        description: 'Noise-cancelling over-ear headphones with Bluetooth connectivity.',
        price: 120.00,
        tags: ['electronics', 'audio', 'wireless'],
        salesOffer: {
            discount: 10, // Percentage discount
            status: 'active' // Can be 'active', 'expired', or 'upcoming'
        },
        images: [
            '/images/headphones-1.jpg',
            '/images/headphones-2.jpg'
        ],
        stock: 50
    },
    {
        title: 'Smartphone',
        description: 'Latest model with advanced features and sleek design.',
        price: 799.99,
        tags: ['electronics', 'mobile', 'smartphone'],
        salesOffer: {
            discount: 5,
            status: 'active'
        },
        images: [
            '/images/smartphone-1.jpg',
            '/images/smartphone-2.jpg'
        ],
        stock: 30
    },
    {
        title: 'Running Shoes',
        description: 'Comfortable and durable running shoes for all terrains.',
        price: 85.00,
        tags: ['footwear', 'shoes', 'running'],
        salesOffer: {
            discount: 15,
            status: 'upcoming'
        },
        images: [
            '/images/running-shoes-1.jpg',
            '/images/running-shoes-2.jpg'
        ],
        stock: 100
    },
    {
        title: 'Gaming Laptop',
        description: 'High-performance laptop with powerful graphics card.',
        price: 1500.00,
        tags: ['electronics', 'computers', 'gaming'],
        salesOffer: {
            discount: 20,
            status: 'expired'
        },
        images: [
            '/images/gaming-laptop-1.jpg',
            '/images/gaming-laptop-2.jpg'
        ],
        stock: 20
    },
    {
        title: 'Wrist Watch',
        description: 'Stylish wrist watch with leather strap and water resistance.',
        price: 250.00,
        tags: ['accessories', 'watch', 'fashion'],
        salesOffer: {
            discount: 0,
            status: 'active'
        },
        images: [
            '/images/wrist-watch-1.jpg',
            '/images/wrist-watch-2.jpg'
        ],
        stock: 75
    }
];