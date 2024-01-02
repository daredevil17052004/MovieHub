import React from 'react'
import st from './load.module.css'

const LoadingScreen = () => {
  return (
    <div className={st.loadingScreen}>
        <div className={st.loadingSpinner}>

        </div>
    </div>
  )
}

export default LoadingScreen