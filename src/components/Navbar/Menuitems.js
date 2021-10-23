import { Link } from "react-router-dom";
export const MenuItems = [
    {
        title: 'Home',
        url: '/',
        cName: <Link to= "/"></Link>,
    },
    // {
    //     title: 'Services',
    //     url: '#',
    //     cName: 'nav-links'
    // },
    {
        title: 'Products',
        url: '/products',
        cName: 'nav'
    },
    {
        title: 'Nosotros',
        url: '#',
        cName: 'nav'
    },
    {
        title: 'Sign up',
        url: '#',
        cName: 'nav-links-mobile'
    },
    
]