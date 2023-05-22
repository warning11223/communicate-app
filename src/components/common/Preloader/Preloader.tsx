import React from 'react';
import {Vortex} from 'react-loader-spinner';

export const Preloader = () => {
    return <Vortex
        visible={true}
        height="120"
        width="120"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['#F51A51', '#F51A51', '#F51A51', '#F51A51', '#F51A51', '#F51A51'   ]}
    />
};
