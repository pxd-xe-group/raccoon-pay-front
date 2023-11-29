import type { Metadata } from 'next';
import Providers from '@/styles/providers';
import StyledComponentsRegistry from '@/styles/registry';

export const metadata: Metadata = {
  title: '페이코는 너굴맨이 처리했다',
  description: '페이코는 너굴맨이 처리했으니 안심하라구'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <Providers>
        <html lang="en">
          <body>{children}</body>
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
