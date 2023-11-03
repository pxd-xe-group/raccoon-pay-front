import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Providers from '@/styles/providers';
import StyledComponentsRegistry from '@/styles/registry';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: '페이코는 너굴맨이 처리했다',
  description: '페이코는 너굴맨이 처리했으니 안심하라구'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <Providers>
        <html lang="en">
          <body className={roboto.className}>{children}</body>
        </html>
      </Providers>
    </StyledComponentsRegistry>
  );
}
