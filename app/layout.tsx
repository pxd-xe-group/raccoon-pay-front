import Providers from '@/styles/providers';
import StyledComponentsRegistry from '@/styles/registry';
import Header from '@/src/components/layout/Header';
import { DateContextProvider } from '@/src/context/DateContext';
import { NavContextProvider } from '@/src/context/NavContext';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '페이코는 너굴맨이 처리했다',
  description: '페이코는 너굴맨이 처리했으니 안심하라구'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <Providers>
        <html lang="en">
          <body>
            <NavContextProvider>
              <DateContextProvider>
                <Header />
                {children}
              </DateContextProvider>
            </NavContextProvider>
          </body>
          <link
            rel="stylesheet preload prefetch"
            as="style"
            href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          />
        </html>
      </Providers>
    </StyledComponentsRegistry>
  );
}
