import React from 'react'
import Popup from '../components/Popup'
import Header from '../layout/Footer'
import ScaleLayout from './ScaleLayout'


const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Header />
    <ScaleLayout>
      {children}
      <Popup />
    </ScaleLayout>
  </>
}
export default GlobalLayout
  