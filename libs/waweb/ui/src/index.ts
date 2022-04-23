import dynamic from 'next/dynamic';

export const HomeView = dynamic(() => import('./waweb.views/hybrid-homepage'));
export const BlogView = dynamic(() => import('./waweb.views/support'));
export const ExpoView = dynamic(() => import('./waweb.views/enterprise-offering'));
