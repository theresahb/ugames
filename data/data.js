import tab1 from '../public/assets/layout.svg'
import tab2 from '../public/assets/award.svg'
import tab3 from '../public/assets/screen-share.svg'
import tab4 from '../public/assets/mail.svg'
import tab5 from '../public/assets/calendar.svg'
import tab6 from '../public/assets/report.svg'
import tab7 from '../public/assets/users.svg'
import tab8 from '../public/assets/settings.svg'

import cat1 from '../public/assets/target-arrow.svg'
import cat2 from '../public/assets/ball-basketball.svg'
import cat3 from '../public/assets/rocket.svg'
import cat4 from '../public/assets/layout.svg'
import cat5 from '../public/assets/motorbike.svg'

import adventure1 from '../public/assets/callofduty.webp'
import adventure2 from '../public/assets/sw-jedi.jpeg'
import adventure3 from '../public/assets/callofduty.webp'
import adventure4 from '../public/assets/sw-jedi.jpeg'

import new1 from '../public/assets/witcher.png'
import new2 from '../public/assets/witcher.png'
import new3 from '../public/assets/witcher.png'

export const tab = [
    {
        id: 1,
        image: tab1,
        link: '/dashboard',
        text: 'Dashboard',
    },
    {
        id: 2,
        image: tab2,
        link: '/trending',
        text: 'Trending',
    },
    {
        id: 3,
        image: tab3,
        link: '/match',
        text: 'Match',
    },
    {
        id: 4,
        image: tab4,
        link: '/message',
        text: 'Message',
    },
    {
        id: 5,
        image: tab5,
        link: '/schedule',
        text: 'Schedule',
    },
    {
        id: 6,
        image: tab6,
        link: '/history',
        text: 'History',
    },
    {
        id: 7,
        image: tab7,
        link: '/friends',
        text: 'Friends',
    },
    {
        id: 8,
        image: tab8,
        link: '/settings',
        text: 'Settings',
    },
]

export const categories = [
    {
        id: 1,
        image: cat1,
        genre: 'Adventures',
        content: [
            {
                id: 1,
                image: adventure1,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 2,
                image: adventure2,
                text: 'Disorder',
                subtext: '12.5 viewers',
            },
            {
                id: 3,
                image: adventure3,
                text: 'Free Fire',
                subtext: '12.5 viewers',
            },
            {
                id: 4,
                image: adventure4,
                text: "Soldier's Light 2",
                subtext: '12.5 viewers',
            },
        ]
    },
    {
        id: 2,
        image: cat2,
        genre: 'Sport',
        content: [
            {
                id: 1,
                image: adventure2,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 2,
                image: adventure4,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 3,
                image: adventure1,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 4,
                image: adventure3,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
        ]
    },
    {
        id: 3,
        image: cat3,
        genre: 'Wars',
        content: [
            {
                id: 1,
                image: adventure4,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 2,
                image: adventure1,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 3,
                image: adventure3,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 4,
                image: adventure2,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
        ]
    },
    {
        id: 4,
        image: cat4,
        genre: 'Puzzle',
        content: [
            {
                id: 1,
                image: adventure1,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 2,
                image: adventure4,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 3,
                image: adventure2,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 4,
                image: adventure3,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
        ]
    },
    {
        id: 5,
        image: cat5,
        genre: 'Racing',
        content: [
            {
                id: 1,
                image: adventure3,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 2,
                image: adventure2,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 3,
                image: adventure1,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
            {
                id: 4,
                image: adventure4,
                text: 'Badlanders',
                subtext: '12.5 viewers',
            },
        ]
    },
]

export const newgames = [
    {
        id: 1,
        image: new1,
        text: 'Cod Mobile',
        subtext: 'Activision'
    },
    {
        id: 2,
        image: new2,
        text: 'Pubg Mobile',
        subtext: 'Activision'
    },
    {
        id: 3,
        image: new3,
        text: 'Cyber Hunt',
        subtext: 'Activision'
    },
]

export const friends = [
    {
        id: 1,
        text: 'Friends',
        content: [
            {
                id: 1,
                image: adventure1,
                text: 'John Kilaza',
                subtext: 'Playing a wars of IX',
                status: 'Online'
            },
            {
                id: 2,
                image: adventure2,
                text: 'Edwardo',
                subtext: 'Playing a maria beras',
                status: 'Online'
            },
            {
                id: 3,
                image: adventure3,
                text: 'Jane John',
                subtext: 'Played 4 minute ago',
                status: 'Offline'
            },
            {
                id: 4,
                image: adventure4,
                text: 'Chrisso',
                subtext: 'Played 6 minute ago',
                status: 'Offline'
            },
        ]
    },
    {
        id: 2,
        text: 'Group',
        content: [
            {
                id: 1,
                image: adventure2,
                text: 'Badlanders',
                subtext: '12.5 viewers',
                status: 'Online'
            },
            {
                id: 2,
                image: adventure4,
                text: 'Badlanders',
                subtext: '12.5 viewers',
                status: 'Online'
            },
            {
                id: 3,
                image: adventure1,
                text: 'Badlanders',
                subtext: '12.5 viewers',
                status: 'Online'
            },
            {
                id: 4,
                image: adventure3,
                text: 'Badlanders',
                subtext: '12.5 viewers',
                status: 'Online'
            },
        ]
    },
    {
        id: 3,
        text: 'Request',
        content: [
            {
                id: 1,
                image: adventure4,
                text: 'Badlanders',
                subtext: '12.5 viewers',
                status: 'Online'
            },
            {
                id: 2,
                image: adventure1,
                text: 'Badlanders',
                subtext: '12.5 viewers',
                status: 'Online'
            },
            {
                id: 3,
                image: adventure3,
                text: 'Badlanders',
                subtext: '12.5 viewers',
                status: 'Online'
            },
            {
                id: 4,
                image: adventure2,
                text: 'Badlanders',
                subtext: '12.5 viewers',
                status: 'Online'
            },
        ]
    },
]