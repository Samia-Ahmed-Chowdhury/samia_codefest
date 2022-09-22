import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Features(props) {
    const{clsNm,img,h3,li_1,li_2,li_3,li_4,h4}=props
  return (
    <>
            <div className="card-div col-xl-3 col-lg-6 col-md-6 col-sm-10 col-10  m-auto ">
                    <div className={`${clsNm}`}>
                        <div className="card_img d-flex justify-content-center">
                            <img src={img} className=" img-fluid " alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{h3}</h3>
                            <ul>
                            <li><span><CheckCircleOutlineIcon /></span>
                            {li_1}
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            {li_2}
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            {li_3}
                             </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                            {li_4}
                            </li>
                        </ul>
                        </div>
                        <div className='price'>
                            <h6>from</h6>
                            <h4>{h4}</h4>
                        </div>
                    </div>
                </div>

    </>
  )
}

export default Features