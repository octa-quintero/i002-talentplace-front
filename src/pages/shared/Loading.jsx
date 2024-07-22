import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import '../../index.css'


const Loading = () => {

    return (
        <>
        <div className='d-flex align-items-center justify-content-center w-100 bg-white rounded-3 mt-3'>
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
            </div>
        </>
    )
}

export default Loading