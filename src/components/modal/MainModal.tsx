import styled from 'styled-components';
import CustomInput from '../input/CustomInput';
import { MouseEvent, use, useEffect, useState } from 'react';

const MainModal = ({ closeModal }: { closeModal: () => void }) => {
  const handleCloseModal = (e: any) => {
    e.stopPropagation();
    console.log('close');
    closeModal();
  };
  const MenuList = [
    {
      count: 1,
      menu: '데미그라스',
      price: 10000
    },
    {
      count: 1,
      menu: '아이스케키',
      price: 10000
    }
  ];

  const [totalamount, setTotalamount] = useState(0);

  useEffect(() => {
    const total = MenuList.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    setTotalamount(total);
  });

  return (
    <ModalWrap>
      <CloseBtn
        onClick={(e) => {
          handleCloseModal(e);
        }}
      >
        X
      </CloseBtn>
      <Date>월 일</Date>
      <InputWrap>
        <CustomInput />
      </InputWrap>
      <DashLine />
      <MenuWrap>
        <SubTitle>MENU</SubTitle>
        {MenuList.map((menu) => {
          return (
            <MenuRow key={menu.menu}>
              <DescText>
                {menu.count}x{menu.menu}
              </DescText>
              <DescText>₩{menu.price}</DescText>
            </MenuRow>
          );
        })}
      </MenuWrap>
      <DashLine />

      <TotalWrap>
        <SubTitle>TOTAL AMOUNT</SubTitle>
        <DescText>₩ {totalamount}</DescText>
      </TotalWrap>
      <DashLine />

      <TotalWrap>
        <SubTitle>MEMO</SubTitle>
        <DescText>내일은 딜라이트나 가쇼</DescText>
      </TotalWrap>
      <DashLine />
    </ModalWrap>
  );
};

export default MainModal;

const ModalWrap = styled.div`
  position: fixed;
  padding: 30px 40px;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 640px;
  background-color: ${({ theme }) => theme.gray.gray00};
  z-index: 100;
  box-shadow: 3px 3px 10px 4px rgba(0, 0, 0, 0.25);
`;

const CloseBtn = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.gray.gray100};
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
`;

const InputWrap = styled.div`
  margin: 16px 0 20px;
`;

const Date = styled.h1`
  margin-top: 20px;
  text-align: center;
  ${({ theme }) => theme.textSize.S20W700};
`;

const DashLine = styled.div`
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to right, #000 50%, transparent 50%);
  background-size: 15px 100%; // 이 값으로 점선의 길이와 간격을 조절
`;

const MenuWrap = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MenuRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TotalWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
`;

const DescText = styled.p`
  ${({ theme }) => theme.textSize.S16W400};
  color: ${({ theme }) => theme.gray.gray70};
`;

const SubTitle = styled.h3`
  ${({ theme }) => theme.textSize.S16W700};
  color: ${({ theme }) => theme.gray.gray70};
`;
