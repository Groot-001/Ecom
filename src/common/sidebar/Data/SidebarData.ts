import { PATH } from '@/constant/path';
import { MenuItem } from '../interface/sidebar_interface';
import {
    Home,
    Info,
} from 'lucide-react';

export const mainMenuItems: MenuItem[] = [
    {
        id: 'dashboard',
        label: 'DashBoard',
        icon: Home,
        link: "/admin",
    },
    {
        id: 'categories',
        icon: Info,
        label: 'Categories',
        active: false,
        link:'/admin/category'
    },

];
