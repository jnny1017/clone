import { PropsWithChildren } from 'react';

import * as S from '../../styles/toastStyles';

export default function Toast({ children }: PropsWithChildren<any>) {
  return (
    <S.Toast>
      {children}
    </S.Toast>
  );
}
