'use client';

import dynamic from 'next/dynamic';
const ClientLayout = dynamic(() => import('./client-layout'), { ssr: false });
const OrdConnectComponent = dynamic(() => import('./ordConnect'), {
  ssr: false,
});

export default function Home() {
  return (
    <ClientLayout>
      <OrdConnectComponent />
    </ClientLayout>
  );
}
