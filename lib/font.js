import { Roboto, Pathway_Gothic_One } from 'next/font/google';

export const roboto = Roboto({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
});

export const pathway_gothic_one = Pathway_Gothic_One({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-pathway_gothic_one',
    display: 'swap',
});
