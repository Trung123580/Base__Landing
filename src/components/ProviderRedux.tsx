import {store} from '../store/store'
import {Provider} from 'react-redux'
import React from 'react'

const ProviderRedux = ({children}: Readonly<{ children: React.ReactNode }>) => {
  return <Provider store={store}>{children}</Provider>
}

export default ProviderRedux
