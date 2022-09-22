import React from 'react'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';


function Faq(props) {
    const { h6_1, p_1, h6_2, p_2, h6_3, p_3 } = props
    return (
        <>
           <div className="item">
            <div className="row">
                <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2  m-auto d-flex flex-column align-items-center">
                    <PlaylistAddCheckIcon className='list_icon' />
                    <div className="line"></div>
                </div>
                <div className="faq_points col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10  m-auto ">
                    <h6>{h6_1}</h6>
                    <p>{p_1}</p>
                </div>
            </div>
            <div className="row ">
                <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2  m-auto d-flex flex-column align-items-center ">
                    <PlaylistAddCheckIcon className='list_icon' />
                    <div className="line"></div>
                </div>
                <div className="faq_points col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10  m-auto ">
                    <h6>{h6_2}</h6>
                    <p>{p_2}</p>
                </div>
            </div>
            <div className="row ">
                <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2  m-auto d-flex flex-column align-items-center ">
                    <PlaylistAddCheckIcon className='list_icon' />
                </div>
                <div className="faq_points col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10  m-auto ">
                    <h6>{h6_3}</h6>
                    <p>{p_3}</p>
                </div>
            </div>
</div>
        </>
    )
}

export default Faq