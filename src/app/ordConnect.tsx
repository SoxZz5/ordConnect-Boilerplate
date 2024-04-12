import { FC, useState } from 'react';
import {
  useOrdConnect,
  useSignMessage,
  OrdConnectKit,
} from '@ordzaar/ord-connect';
import { useCallback } from 'react';
import { Verifier } from 'bip322-js';

const OrdConnectComponent: FC<{}> = ({}) => {
  const { address, wallet } = useOrdConnect();
  const { signMsg, error: signMessageError } = useSignMessage();
  const [verifiedMessage, setVerifiedMessage] = useState(false);

  const handleSignMessage = useCallback(async () => {
    if (!address.ordinals) {
      throw new Error('No payment address');
    }
    const message =
      'Authenticate this message to access to verify wallet for fantasy.top airdrop';
    const signed = await signMsg(address.ordinals, message);
    setVerifiedMessage(
      Verifier.verifySignature(address.ordinals, message, signed)
    );
  }, [address.ordinals, signMsg]);

  return (
    <>
      <OrdConnectKit />
      <div className="controls">
        {address?.ordinals && (
          <button type="button" onClick={handleSignMessage}>
            Sign message
          </button>
        )}
        <div>
          {wallet ? <p>Wallet: {wallet}</p> : null}
          {address?.ordinals ? (
            <p>Connected Address: {address.ordinals ?? ''}</p>
          ) : null}
          {signMessageError ? (
            <p>Sign Message Error: {signMessageError}</p>
          ) : null}
          {address?.ordinals && verifiedMessage
            ? `MESSAGE VERIFIED USER IS OWNER OF ${address.ordinals}`
            : `MESSAGE NOT VERIFIED USER IS NOT OWNER OF ${address.ordinals} FOR NOW`}
        </div>
      </div>
    </>
  );
};

export default OrdConnectComponent;
