import React, { useEffect, useState } from 'react';
import Redoc from '@theme-original/Redoc';

export default function RedocWrapper(props) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="redoc-loading-gate" data-ready={ready}>
      <Redoc {...props} />
    </div>
  );
}
