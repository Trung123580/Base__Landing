import Banner from "../components/landing/Banner"
import ScaleLayout from "../components/ScaleLayout"
import Float from "../layout/Float"
import Header from "../layout/Header"

const Landing = () => {
  return (
    <>
      <Header />
      <Float/>
      <ScaleLayout>
        <Banner />
      </ScaleLayout>
    </>
  )
}

export default Landing
