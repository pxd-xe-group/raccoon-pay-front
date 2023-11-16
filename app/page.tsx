import { Metadata } from 'next';
import Home from '@/src/pages/Home';

// ts-prune-ignore-next
export const metadata: Metadata = {
  title: '라쿤쿤',
  description: '라쿤쿤',
  keywords: '라쿤쿤',
  openGraph: {
    title: '라쿤쿤',
    description: '라쿤쿤',
    url: '라쿤쿤',
    siteName: '라쿤쿤',
    images: '/라쿤쿤.png',
    type: 'website'
  },
  icons: '/라쿤쿤.png',
  robots: 'all'
};

export default function Page() {
  return <Home />;
}
