import styled, { css } from 'styled-components';

const CustomInput = () => {
  return (
    <InputWrap>
      <Input>
        <input type="text" />
      </Input>
    </InputWrap>
  );
};

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.div`
  width: 50%;
  border: 1px solid ${({ theme }) => theme.gray.gray50};
`;

export default CustomInput;
