import React from 'react';
import Link from 'next/link';
import Preloader from '@/components/layout/Preloader';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';
import Header from '@/components/layout/Header';
import Footer from '@/components/home/Footer';

export const metadata = {
  title: "EdullAll - LMS, Tutors, Education & Online Course Html Template",
};

export default function Page() {
  return (
    <>
      <Preloader />
      <div className="side-overlay"></div>
      <ProgressWrap />
      <Overlay />
      <MobileMenu />
      <Header />
      
      {/* ==================== Breadcrumb Start Here ==================== */}
<section className="breadcrumb py-120 bg-main-25 position-relative z-1 overflow-hidden mb-0">
    <img src="/assets/images/shapes/shape1.png" alt="" className="shape one animation-rotation d-md-block d-none" />
    <img src="/assets/images/shapes/shape2.png" alt="" className="shape two animation-scalation d-md-block d-none" />
    <img src="/assets/images/shapes/shape3.png" alt="" className="shape eight animation-walking d-md-block d-none" />
    <img src="/assets/images/shapes/shape5.png" alt="" className="shape six animation-walking d-md-block d-none" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="shape four animation-scalation" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="shape nine animation-scalation" />
    
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="breadcrumb__wrapper">
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> Find Best Tutors</h1>
                    <ul className="breadcrumb__list d-flex align-items-center justify-content-center gap-4">
                        <li className="breadcrumb__item">
                            <a href="/" className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"> 
                                <i className="text-lg d-inline-flex ph-bold ph-house"></i> Home</a>
                         </li>
                        <li className="breadcrumb__item">
                            <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                        </li>
                        <li className="breadcrumb__item">
                            <a href="/course" className="breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium"> </a> 
                        </li>
                        <li className="breadcrumb__item d-none">
                            <i className="text-neutral-500 d-flex ph-bold ph-caret-right"></i>
                        </li>
                        <li className="breadcrumb__item"> 
                            <span className="text-main-two-600"> Find Best Tutors </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* ================================ Find best Tutors Section Start =================================== */}
    <section className="py-120">
        <div className="container">
            <div className="border border-neutral-30 rounded-12 bg-main-25 p-24 bg-main-25">
                <form action="#">
                    <h3 className="mb-24">Find Best Tutors</h3> 
                    {/* Find Tutors Start */}
                    <div className="border border-neutral-30 rounded-12 bg-white p-24">
                        <h5 className="mb-0">Fill Up Info</h5>
                        <span className="d-block border border-main-50 my-24 border-dashed"></span>
                        <div className="row gy-4">
                            <div className="col-sm-6">
                                <label htmlFor="location" className="text-neutral-700 text-lg fw-medium mb-12">Location </label>
                                <input type="text" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="location" placeholder="Enter location..." />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="selectLanguage" className="text-neutral-700 text-lg fw-medium mb-12">Select Language <span className="text-danger-600">*</span> </label>
                                <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="selectLanguage">
                                    <option value="" selected hidden>Select language</option>
                                    <option value="">Bangla</option>
                                    <option value="">Urdhu</option>
                                    <option value="">English</option>
                                    <option value="">Spenish</option>
                                </select>
                            </div>
                            <div className="col-sm-12">
                                <label className="text-neutral-700 text-lg fw-medium mb-12">Gender <span className="text-danger-600">*</span> </label>
                                <div className="flex-align gap-24">
                                    <div className="form-check common-check common-radio mb-0">
                                        <input className="form-check-input" type="radio" name="gender" id="Male" />
                                        <label className="form-check-label fw-normal flex-grow-1" htmlFor="Male">Male</label>
                                    </div>
                                    <div className="form-check common-check common-radio mb-0">
                                        <input className="form-check-input" type="radio" name="gender" id="Female" />
                                        <label className="form-check-label fw-normal flex-grow-1" htmlFor="Female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="selectDep" className="text-neutral-700 text-lg fw-medium mb-12">Select Department <span className="text-danger-600">*</span> </label>
                                <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="selectDep">
                                    <option value="" selected hidden>Select Department</option>
                                    <option value="">Arts</option>
                                    <option value="">Science</option>
                                    <option value="">Commerce</option>
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="selectSub" className="text-neutral-700 text-lg fw-medium mb-12">Select Department <span className="text-danger-600">*</span> </label>
                                <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="selectSub">
                                    <option value="" selected hidden>Select Subject</option>
                                    <option value="">English</option>
                                    <option value="">Bangla</option>
                                    <option value="">Social Science</option>
                                    <option value="">Ecomomics</option>
                                    <option value="">Math</option>
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="selectCountry" className="text-neutral-700 text-lg fw-medium mb-12">Select Country <span className="text-danger-600">*</span> </label>
                                <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="selectCountry">
                                    <option value="" selected hidden>Select Country</option>
                                    <option value="">Bangladesh</option>
                                    <option value="">Pakistan</option>
                                    <option value="">Bhutan</option>
                                    <option value="">Nepal</option>
                                    <option value="">Australia</option>
                                    <option value="">England</option>
                                </select>
                            </div>
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-main rounded-pill flex-center gap-8 mt-16">
                                    Find Now
                                    <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Find Tutors End */}
                </form>
            </div>
        </div>
    </section>
    {/* ================================ Find best Tutors Section End =================================== */}
    
    {/* ================================= Certificate Section Start ================================= */}
<div className="certificate">
    <div className="container container--lg">
        <div className="certificate-box px-16 bg-main-600 rounded-16">
            <div className="container">
                <div className="position-relative py-80">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="certificate__content">
                                <div className="flex-align gap-8 mb-16 wow bounceInDown">
                                    <span className="w-8 h-8 bg-white rounded-circle"></span>
                                    <h5 className="text-white mb-0">Get Certificate</h5>
                                </div>
                                <h2 className="text-white mb-40 fw-medium wow bounceIn">Get Quality Skills Certificate From the EduAll</h2>
                                <a href="" className="btn btn-white rounded-pill flex-align d-inline-flex gap-8 hover-bg-main-800 wow bounceInUp">
                                    Get Started Now
                                    <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 d-xl-block d-none">
                            <div className="certificate__thumb" data-aos="fade-up-left">    
                                <img src="/assets/images/thumbs/certificate-img.png" alt="" data-tilt data-tilt-max="8" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-full-page-listening />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
{/* ================================= Certificate Section End ================================= */}
      
      <Footer />
    </>
  );
}
