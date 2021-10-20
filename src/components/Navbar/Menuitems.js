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
        url: 'products',
        cName: <Link to= "products"></Link>
    },
    {
        title: 'unit',
        url: 'unit',
        cName: <Link to= "unit"></Link>
    },
    {
        title: 'Sign up',
        url: '#',
        cName: 'nav-links-mobile'
    },
    
]