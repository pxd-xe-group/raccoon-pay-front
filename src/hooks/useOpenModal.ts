// 테스트 훅 입니다. 이렇게 만드세용 빠따 맞습니다.

import { useState } from 'react';

export const useToggle = (init: boolean = false) => {
  const [toggle, setToggle] = useState(init);
  const handleToggle = () => setToggle(!toggle);

  return { toggle, handleToggle };
};
