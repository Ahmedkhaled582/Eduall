import React from 'react';

export default function StudentDashboardBanner() {
  return (
    <>
      {/* ============== student dashbord banner section start =============== */}
      <section className="breadcrumb pt-80 pb-187 bg-neutral-900 position-relative z-1 overflow-hidden mb-0 z-n1">
        <img src="/assets/images/shapes/shape1.png" alt="" className="position-absolute inset-block-start-5-persent inset-inline-start-45-persent animation-rotation d-md-block d-none" />
        <img src="/assets/images/shapes/shape2.png" alt="" className="position-absolute inset-inline-start-0-persent inset-block-end-0-persent animation-scalation d-md-block d-none" />
        <img src="/assets/images/shapes/shape3.png" alt="" className="position-absolute inset-inline-end-35-persent inset-block-end-30-persent animation-walking d-md-block d-none" />
        <img src="/assets/images/shapes/shape5.png" alt="" className="shape six animation-walking d-md-block d-none" />
        <img src="/assets/images/shapes/shape4.png" alt="" className="position-absolute inset-inline-end-40-persent inset-block-start-5-persent animation-scalation" />
        <img src="/assets/images/shapes/shape4.png" alt="" className="position-absolute inset-inline-end-2-persent inset-block-end-45-persent animation-scalation" />
        <img src="/assets/images/shapes/shape4.png" alt="" className="position-absolute inset-block-end-30-persent inset-inline-end-45-persent animation-scalation" />
        <img src="/assets/images/shapes/shape4.png" alt="" className="shape nine animation-scalation" />
        
        <div className="container container--lg">
          <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap">
            <div className="breadcrumb__wrapper">
              <h1 className="breadcrumb__title display-4 fw-semibold text-white mb-20">Student Dashboard</h1>
              <ul className="breadcrumb__list d-flex align-items-center gap-4 flex-wrap">
                <li className="breadcrumb__item">
                  <a href="/" className="breadcrumb__link text-white hover-text-warning-800 fw-medium">Home</a>
                </li>
                <li className="breadcrumb__item">
                  <i className="text-white d-flex ph-bold ph-caret-right"></i>
                </li>
                <li className="breadcrumb__item">
                  <a href="/admin-dashbord" className="breadcrumb__link text-white hover-text-warning-800 fw-medium">Dashboard</a> 
                </li>
                <li className="breadcrumb__item @@arrowTwoShowHide">
                  <i className="text-white d-flex ph-bold ph-caret-right"></i>
                </li>
                <li className="breadcrumb__item"> 
                  <span className="text-main-two-600">Student Dashboard</span> 
                </li>
              </ul>
            </div>
            <div>
              <a href="/instructor" className="border-warning-800 border px-32 py-16 rounded-pill text-warning-800 hover-bg-warning-900 hover-text-white">Become an Instructor</a>
            </div>
          </div>
        </div>
      </section>
      {/* ============== student dashbord banner section end =============== */}
    </>
  );
}
