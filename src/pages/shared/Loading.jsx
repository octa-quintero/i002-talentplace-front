import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import '../../index.css'


const Loading = () => {

    return (
        <>
        <RotatingLines
            visible={true}
            height="120"
            width="123"
            strokeColor="#8c52ff"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </>
    )
}

export default Loading