import styled from 'styled-components';
import Images from '@/src/utils/images';
import { PriceChip } from '@/src/components/chip';

const SideNav = () => (
  <Nav>
    <Contents>
      <PriceChip
        title="이번 달 남은 금액이다구리"
        price={158500}
        color="dark"
        withLogo={
          <Images
            alt="menu icon"
            src="/icon/edit_light.svg"
            width={18}
            height={18}
            style={{ cursor: 'pointer' }}
            onClick={() => console.log('수정 기능')}
          />
        }
      />
      <PriceChip
        title="하루에 이만큼 써야해구리"
        price={9359.356}
        desc="이번달 남은 금액 / 이번 달 남은 일수"
        color="light"
      />
    </Contents>
    <CopyLight>{`Copyright ${new Date().getFullYear()}. pxd inc. all rights reserved.`}</CopyLight>
  </Nav>
);

export default SideNav;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: '320px';
  height: calc(100vh - 64px);
  /* transition: width 0.3s ease-out; */
  padding: 30px 20px;
  flex-shrink: 0;

  @media ${({ theme }) => theme.media.mobile} {
    position: absolute;
    top: 64px;
    left: 0;
    background-color: ${({ theme }) => theme.gray.gray00};
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  }

  @media ${({ theme }) => theme.media.tablet} {
    position: absolute;
    top: 64px;
    left: 0;
    background-color: ${({ theme }) => theme.gray.gray00};
    box-shadow: 6px 1px 5px 0px rgba(0, 0, 0, 0.25);
  }
`;

/* width: ${({ isOpened }) => (isOpened ? '320px' : 0)}; */

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const CopyLight = styled.p`
  color: ${({ theme }) => theme.gray.gray50};

  ${({ theme }) => theme.textSize.S12W400}
`;
