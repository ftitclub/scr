import React from 'react'
import Link from 'next/link'

export default function FeaturesContent() {
    return (
        <>
        {/* <!-- FETURES CONTENT START --> */}
        <div className="homefeture_2" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="features pt-105 wow fadeInLeft" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.2s","animationName":"fadeInLeft"}}>
                            <div className="features__icon">
                                <img src="/img/fetures/leftIcon.png" alt="" />
                            </div>
                            <div className="features__content mb-30">
                                <h2 className="section-title">Something about us <br/> to write here.
                                </h2>
                                <p>You mug dropped a clanger barmy David brown <br/>bread bleeding crikey say chimney pot
                                    me old <br/>mucker bugger super.</p>
                                <Link legacyBehavior href="/service"><a>New Page? Medium?<i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="app-image wow fadeInRight" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.3s","animationName":"fadeInRight"}}>
                            <img src="/img/about/about1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- FETURES CONTENT END --> */}
        {/* <!-- FETURES CONTENT 2nd Part START --> */}
        <div className="app_image pt-150 pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="app-image wow fadeInUp" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.2s","animationName":"fadeInUp"}}>
                            <img src="/img/about/about2.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 pt-40 col-lg-6 col-md-12">
                        <div className="features feturesCommon wow fadeInUp" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.2s","animationName":"fadeInUp"}}>
                            <div className="features__icon bgclr">
                                <img src="/img/fetures/leftIcon2.png" alt="" />
                            </div>
                            <div className="features__content">
                                <h2 className="section-title">Again something to write about</h2>
                                <p>You mug dropped a clanger barmy David brown <br/>bread bleeding crikey say chimney pot
                                    me old <br/>mucker bugger super.</p>
                                <Link legacyBehavior href="/service"><a>Link? Medium?<i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- FETURES CONTENT START 2nd Part --> */}
            
        </>
    )
}
