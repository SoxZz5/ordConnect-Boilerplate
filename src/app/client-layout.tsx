'use client';

import { FC, PropsWithChildren } from 'react';
import Provider from './provider';

const ClientLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default ClientLayout;
