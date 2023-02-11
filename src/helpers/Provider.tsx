import {StoreContext} from '../StoreContext';
import React, {ReactNode} from 'react';

type ProviderProps = {
    store: any
    children: ReactNode
}

export const Provider: React.FC<ProviderProps> = ({store, children}) => {
    return <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
}
