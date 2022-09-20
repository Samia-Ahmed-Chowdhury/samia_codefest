import React, { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SeeMore from './SeeMore';

function Price(props) {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-10 col-10  m-auto">
                <div className={`${props.clsNm} card`} >
                    <div className="row card_plans">
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-8 m-auto">
                            <h3>{props.h3} </h3>
                            <span className="price">{props.price_span}</span>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 m-auto">
                            <img src={props.img} alt='img' />
                        </div>
                    </div>

                    <div className="row plans_list">
                        <h6>Top feature comparison :</h6>
                        <ul>
                            <li><span><CheckCircleOutlineIcon /></span>
                                {props.li_1}
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                                {props.li_2}
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                                {props.li_3}
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                                {props.li_4}
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                                {props.li_5}
                            </li>
                            <li><span><CheckCircleOutlineIcon /></span>
                                {props.li_6}
                            </li>

                        </ul>
                        {/* ---------see more------- */}
                        {
                            show ? <SeeMore /> : null
                        }
                        {/* ---------end-see more------- */}

                        <p className='see_more' onClick={() => setShow(!show)} >
                            {show ? <li> See less features <KeyboardArrowUpIcon /> </li> : <li> See all features <KeyboardArrowDownIcon /></li>}
                        </p>

                        <button className="plans_btn" href="#">Select Plans</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Price