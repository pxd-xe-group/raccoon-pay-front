'use client';
import Images from '@/src/utils/images';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrap>
      <MenuLogoWrap>
        <Images
          alt="menu icon"
          src="/icon/menu.svg"
          width={24}
          height={24}
          priority
          style={{ cursor: 'pointer' }}
        />
        <LogoImages alt="logo icon" src="/img/header_payco.svg" width={50} height={50} priority />
      </MenuLogoWrap>
      <DateWrap>
        <TodayBtn>오늘</TodayBtn>
        <ArrowBtnWrap>
          <Images
            alt="left arrow icon"
            src="/icon/left_arrow.svg"
            width={24}
            height={24}
            style={{ cursor: 'pointer' }}
          />
          <Images
            alt="right arrow icon"
            src="/icon/right_arrow.svg"
            width={24}
            height={24}
            style={{ cursor: 'pointer' }}
          />
        </ArrowBtnWrap>
        <Date>2023 11월</Date>
      </DateWrap>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.gray.gray30};

  @media ${({ theme }) => theme.media.mobile} {
    padding: 0 12px;
  }
`;

const MenuLogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media ${({ theme }) => theme.media.mobile} {
    gap: 10px;
  }
`;

const LogoImages = styled(Images)`
  @media ${({ theme }) => theme.media.mobile} {
    width: 32px;
    height: 32px;
  }
`;

const DateWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 197px;
  gap: 28px;
  @media ${({ theme }) => theme.media.tablet} {
    margin-left: auto;
  }
`;

const TodayBtn = styled.button`
  padding: 12px 20px;
  border: 1px solid ${({ theme }) => theme.gray.gray30};
  border-radius: 5px;
  ${({ theme }) => theme.textSize.S12W700};

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const ArrowBtnWrap = styled.div`
  display: flex;
  gap: 8px;
`;

const Date = styled.div`
  ${({ theme }) => theme.textSize.S18W400};

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;
