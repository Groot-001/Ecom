import { PATH } from '@/constant/path';
import { MenuItem } from '../interface/sidebar_interface';
import {
    Home,
    Info,
    Newspaper,
    Sparkles,
} from 'lucide-react';
import { MdOutlineNewspaper } from 'react-icons/md';

export const mainMenuItems: MenuItem[] = [
    {
        id: 'dashboard',
        label: 'DashBoard',
        icon: Home,
        link: PATH.dashboard.dashboard,
    },
    {
        id: 'categories',
        icon: Info,
        label: 'Categories',
        active: false,
        children: [
            {
                id: 'wishes-categories',
                label: 'Wishes',
                active: false,
                icon: Sparkles,
                link: PATH.category.wishesCategory,
            },
            {
                id: 'news-categories',
                label: 'News',
                active: false,
                icon: Newspaper,
                link: PATH.category.newsCategory,
            },
            {
                id: 'event-categories',
                label: 'Event',
                active: false,
                icon: MdOutlineNewspaper,
                link: PATH.category.eventCategory,
            },
            {
                id: 'news-letter-categories',
                label: 'News Letter',
                active: false,
                icon: MdOutlineNewspaper,
                link: PATH.category.newsLetterCategory,
            },
        ],
    },

];
