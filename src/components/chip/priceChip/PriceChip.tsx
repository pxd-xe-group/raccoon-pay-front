import styled from 'styled-components';
import { Share_Tech_Mono } from 'next/font/google';
import { formatNumber } from '@/src/utils/formaters';

type PriceChipProps = {
  title: string;
  price: number;
  desc?: string;
  withLogo?: React.ReactNode;
  color?: 'light' | 'dark';
};

const techMono = Share_Tech_Mono({ weight: '400', subsets: ['latin'] });

const PriceChip = ({ title, price, desc, withLogo, color = 'light' }: PriceChipProps) => {
  const formattedPrice = formatNumber(price);

  return (
    <Container colorType={color}>
      <Title colorType={color}>
        <span>{title}</span>
        {withLogo}
      </Title>
      <Price className={techMono.className} colorType={color}>
        {'₩' + ' ' + formattedPrice}
      </Price>
      {desc && <Desc colorType={color}>{desc}</Desc>}
    </Container>
  );
};

export default PriceChip;

const Container = styled.div<{ colorType: 'light' | 'dark' }>`
  display: flex;
  width: 280px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  background-color: ${({ colorType, theme }) =>
    colorType === 'dark' ? theme.gray.gray90 : theme.gray.gray20};
  border-radius: 14px;
  padding: 21px;
`;

const Title = styled.div<{ colorType: 'light' | 'dark' }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & > span {
    color: ${({ colorType, theme }) =>
      colorType === 'dark' ? theme.gray.gray10 : theme.gray.gray80};
    ${({ theme }) => theme.textSize.S16W400};
  }
`;

const Price = styled.div<{ colorType: 'light' | 'dark' }>`
  color: ${({ colorType, theme }) =>
    colorType === 'dark' ? theme.gray.gray10 : theme.gray.gray80};

  ${({ theme }) => theme.textSize.S32W400}
`;

const Desc = styled.p<{ colorType: 'light' | 'dark' }>`
  color: ${({ colorType, theme }) =>
    colorType === 'dark' ? theme.gray.gray10 : theme.gray.gray50};

  ${({ theme }) => theme.textSize.S12W400}
`;
