import React from 'react'
import Link from 'next/link'

export default function AppSlider1() {
    return (
        <>
        {/* App Slider Start */}
        <div className="app_slider  d-flex align-items-center fix">
          <div className="App_shape-circle">
            <img className="shapeAbsoulute scale-upOne d-sm-none d-md-block" src="/img/shape/circle.png" alt="" />
            <img className="shape10" src="/img/shape/shape10.png" alt="" />
            <img className="shape13" src="/img/shape/shape13.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="App_shape wow fadeInLeft  d-sm-none d-md-block d-none d-sm-block"
                  data-wow-delay="0.1s"
                  style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInLeft" }}>
                  <img src="/img/shape/mainshape.png" alt="" />
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 d-flex align-items-center">
                <div className="app_sliderContent">
                  <div className="shapeesright">
                    <img className="shape1" src="/img/shape/shape1.png" alt="" />
                    <img className="shape2" src="/img/shape/shape2.png" alt="" />
                    <img className="shape3" src="/img/shape/shape3.png" alt="" />
                    <img className="shape4" src="/img/shape/shape4.png" alt="" />
                    <img className="shape5" src="/img/shape/shape5.png" alt="" />
                    <img className="shape6" src="/img/shape/shape6.png" alt="" />
                    <img className="shape7" src="/img/shape/shape7.png" alt="" />
                    <img className="shape8" src="/img/shape/shape8.png" alt="" />
                    <img className="shape9" src="/img/shape/shape9.png" alt="" />
                    <img className="shape11" src="/img/shape/shape5.png" alt="" />
                  </div>
                  <h2 className="hero-two-title">Artify <br /> bla bla.</h2>
                  <p>Charles tosser quaint twit bamboozled burke brown bread I naff I <br /> don&#39;t want no agro
                    say blimey.!!</p>
                  <div className="slider-btn">
                    <Link legacyBehavior href="/draw"><a className="btn-outline">Try our App</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* App Slider End */}
            
        </>
    )
}
