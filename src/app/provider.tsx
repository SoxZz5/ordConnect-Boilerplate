import { OrdConnectProvider, Network } from '@ordzaar/ord-connect';
import { FC, PropsWithChildren } from 'react';

const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <OrdConnectProvider initialNetwork={Network.TESTNET}>
      {children}
    </OrdConnectProvider>
  );
};

export default Provider;
