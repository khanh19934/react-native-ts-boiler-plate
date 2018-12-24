import React from 'react';

import { Provider as ContextProvider } from '../context/appStore';

export default Comp => props => (
  <ContextProvider>
    <Comp {...props} />
  </ContextProvider>
);
