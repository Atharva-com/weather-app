import React from 'react'
// import { iconUrlFromCode } from "../services/WeatherServices";
function Forecast(props) {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>{props.title}</p>
            </div>
            <hr className='my-2' />
            <div className='flex flex-row items-center justify-between text-white'>
                {/* {props.items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center"
                    >
                        <p className="font-light text-sm">{item.title}</p>
                        <img
                            src={iconUrlFromCode(item.icon)}
                            className="w-12 my-1"
                            alt=""
                        />
                        <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
                    </div>
                ))} */}
                {/* <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30 PM
                    </p>
                    <img src="" alt="" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30 PM
                    </p>
                    <img src="" alt="" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30 PM
                    </p>
                    <img src="" alt="" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30 PM
                    </p>
                    <img src="" alt="" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                        04:30 PM
                    </p>
                    <img src="" alt="" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div> */}
            </div>
        </div>
    )
}

export default Forecast