// src/pages/[...path].tsx

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ErrorComponent from '../components/ErrorComponent';

const DynamicPage: React.FC = () => {
  const router = useRouter();
  const { path } = router.query;
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (path) {
      const importPath = Array.isArray(path) ? path.join('/') : path;
      import(`@/src/aiConvertSrc/${importPath}`)
        .then((module) => {
          setComponent(() => module.default);
          setError(null);
        })
        .catch((err) => {
          console.error('Failed to load component:', err);
          setError(err);
        });
    }
  }, [path]);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (!Component) {
    return <div>Loading...</div>;
  }

  return <Component />;
};

export default DynamicPage;