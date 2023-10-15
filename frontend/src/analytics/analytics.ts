/*
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { useUser } from 'src/contexts';

import { useEnvironment } from 'src/contexts/environment-config/EnvironmentConfig';

export const useGoogleAnalytics = (): void => {
  const { pathname, search } = useLocation();
  const { user } = useUser();
  const { gaCode } = useEnvironment();

  useEffect(() => {
    if (gaCode && user) {
      ReactGA.initialize(gaCode, {
        gaOptions: {
          userId: user.uuid,
          siteSpeedSampleRate: 100,
        },
      });
    }
  }, [user, gaCode]);

  useEffect(() => {
    ReactGA.send('pageview');
  }, [pathname, search]);
};
*/

// Dummy export to avoid 'isolated modules' error:
export const useGoogleAnalytics = 1;