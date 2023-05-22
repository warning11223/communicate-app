import React, {ComponentType, Suspense} from 'react'
import {Preloader} from '../components/common';



export function withSuspense<T> (Component: ComponentType<T>) {
    return (props: any) => {
        return <Suspense fallback={<Preloader />}>
            <Component {...props}/>
        </Suspense>
    }
}
