import React, { lazy, Suspense } from 'react';

const LazyInvoiceInfo = lazy(() => import('./InvoiceInfo'));

const InvoiceInfo = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyInvoiceInfo {...props} />
  </Suspense>
);

export default InvoiceInfo;
