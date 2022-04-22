import dynamic from 'next/dynamic';

export const HomeView = dynamic(() => import('./views/home'));
export const BlogView = dynamic(() => import('./views/blog'));
export const ExpoView = dynamic(() => import('./views/expo'));
