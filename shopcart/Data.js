import bycrypt from 'bcryptjs';

export const users = [
    {
    fullName: 'Demo User qq',
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