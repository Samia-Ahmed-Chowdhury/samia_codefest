import React from 'react'

function PartServices(props) {
    const{clsNm,h6_1,p_1,h6_2,p_2,h6_3,p_3}=props
    return (
        <>
            <div className= {`${clsNm} col-xl-4 col-lg-4 col-md-10 col-sm-11 col-11  m-auto`}>
                <div className="row mb-3">
                    <div className=" col-xl-10 col-lg-10 col-md-11 col-sm-11 col-11 m-auto ">
                        <h6>{h6_1}</h6>
                        <p>{p_1}</p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className=" col-xl-10 col-lg-10 col-md-11 col-sm-11 col-11  m-auto ">
                        <h6>{h6_2}</h6>
                        <p>{p_2}</p>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-xl-10 col-lg-10 col-md-11 col-sm-11 col-11  m-auto ">
                        <h6>{h6_3}</h6>
                        <p> {p_3}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PartServices

