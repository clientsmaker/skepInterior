import React from 'react'
import Lottie from 'lottie-react'
import home from '../../Lottie/home.json'
const HomeLottie = () => {
  return (
    <div>
        <Lottie
        animationData={home}
        loop={true}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        style={{ width: "500px", height: "500px" }}
        />
    </div>
  )
}

export default HomeLottie