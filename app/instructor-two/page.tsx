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
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> Instructors</h1>
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
                            <span className="text-main-two-600"> Instructors </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* ================================ Instructor Section Start ==================================== */}
    <section className="instructor py-120 position-relative z-1">
        <img src="/assets/images/shapes/shape2.png" alt="" className="shape one animation-scalation" />
        <img src="/assets/images/shapes/shape6.png" alt="" className="shape six animation-scalation" />
        
        <div className="container">
            <div className="section-heading text-center">
                <h2 className="mb-24">Course Instructors</h2>
                <p className="">Join us on this journey of discovery, growth, and transformation. Together, let's shape a brighter future</p>
            </div>
            <div className="row gy-4">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="instructor-item-two scale-hover-item social-hover">
                        <div className="instructor-item-two__thumb text-center rounded-circle aspect-ratio-1 p-12 border border-neutral-30 position-relative">
                            <div className="instructor-item-two__thumb-inner w-100 h-100 d-block bg-main-25 rounded-circle overflow-hidden position-relative">
                                <img src="/assets/images/thumbs/instructor-img1.png" alt="" className="cover-img" />
                                <ul className="social-list flex-center gap-12 d-flex position-absolute start-50 top-50 w-100 h-100 translate-middle">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-24">
                            <h4 className="mb-12">
                                <a href="/instructor-details" className="text-neutral-700 hover-text-main-600">Esther Howard</a>
                            </h4>
                            <span className="text-neutral-500">Web Developer</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="instructor-item-two scale-hover-item social-hover">
                        <div className="instructor-item-two__thumb text-center rounded-circle aspect-ratio-1 p-12 border border-neutral-30 position-relative">
                            <div className="instructor-item-two__thumb-inner w-100 h-100 d-block bg-main-25 rounded-circle overflow-hidden position-relative">
                                <img src="/assets/images/thumbs/instructor-img2.png" alt="" className="cover-img" />
                                <ul className="social-list flex-center gap-12 d-flex position-absolute start-50 top-50 w-100 h-100 translate-middle">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-24">
                            <h4 className="mb-12">
                                <a href="/instructor-details" className="text-neutral-700 hover-text-main-600">Jerome Bell</a>
                            </h4>
                            <span className="text-neutral-500">UI Designer</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="instructor-item-two scale-hover-item social-hover">
                        <div className="instructor-item-two__thumb text-center rounded-circle aspect-ratio-1 p-12 border border-neutral-30 position-relative">
                            <div className="instructor-item-two__thumb-inner w-100 h-100 d-block bg-main-25 rounded-circle overflow-hidden position-relative">
                                <img src="/assets/images/thumbs/instructor-img3.png" alt="" className="cover-img" />
                                <ul className="social-list flex-center gap-12 d-flex position-absolute start-50 top-50 w-100 h-100 translate-middle">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-24">
                            <h4 className="mb-12">
                                <a href="/instructor-details" className="text-neutral-700 hover-text-main-600">Savannah Nguyen</a>
                            </h4>
                            <span className="text-neutral-500">Digital Marketer</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="instructor-item-two scale-hover-item social-hover">
                        <div className="instructor-item-two__thumb text-center rounded-circle aspect-ratio-1 p-12 border border-neutral-30 position-relative">
                            <div className="instructor-item-two__thumb-inner w-100 h-100 d-block bg-main-25 rounded-circle overflow-hidden position-relative">
                                <img src="/assets/images/thumbs/instructor-img4.png" alt="" className="cover-img" />
                                <ul className="social-list flex-center gap-12 d-flex position-absolute start-50 top-50 w-100 h-100 translate-middle">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-24">
                            <h4 className="mb-12">
                                <a href="/instructor-details" className="text-neutral-700 hover-text-main-600">Jenny Wilson</a>
                            </h4>
                            <span className="text-neutral-500">WordPress Expert</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="instructor-item-two scale-hover-item social-hover">
                        <div className="instructor-item-two__thumb text-center rounded-circle aspect-ratio-1 p-12 border border-neutral-30 position-relative">
                            <div className="instructor-item-two__thumb-inner w-100 h-100 d-block bg-main-25 rounded-circle overflow-hidden position-relative">
                                <img src="/assets/images/thumbs/instructor-img5.png" alt="" className="cover-img" />
                                <ul className="social-list flex-center gap-12 d-flex position-absolute start-50 top-50 w-100 h-100 translate-middle">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-24">
                            <h4 className="mb-12">
                                <a href="/instructor-details" className="text-neutral-700 hover-text-main-600">Cameron Williamson</a>
                            </h4>
                            <span className="text-neutral-500">PHP Expert</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="instructor-item-two scale-hover-item social-hover">
                        <div className="instructor-item-two__thumb text-center rounded-circle aspect-ratio-1 p-12 border border-neutral-30 position-relative">
                            <div className="instructor-item-two__thumb-inner w-100 h-100 d-block bg-main-25 rounded-circle overflow-hidden position-relative">
                                <img src="/assets/images/thumbs/instructor-img6.png" alt="" className="cover-img" />
                                <ul className="social-list flex-center gap-12 d-flex position-absolute start-50 top-50 w-100 h-100 translate-middle">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-24">
                            <h4 className="mb-12">
                                <a href="/instructor-details" className="text-neutral-700 hover-text-main-600">Wade Warren</a>
                            </h4>
                            <span className="text-neutral-500">Python Developer</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="instructor-item-two scale-hover-item social-hover">
                        <div className="instructor-item-two__thumb text-center rounded-circle aspect-ratio-1 p-12 border border-neutral-30 position-relative">
                            <div className="instructor-item-two__thumb-inner w-100 h-100 d-block bg-main-25 rounded-circle overflow-hidden position-relative">
                                <img src="/assets/images/thumbs/instructor-img1.png" alt="" className="cover-img" />
                                <ul className="social-list flex-center gap-12 d-flex position-absolute start-50 top-50 w-100 h-100 translate-middle">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-24">
                            <h4 className="mb-12">
                                <a href="/instructor-details" className="text-neutral-700 hover-text-main-600">Kathryn Murphy</a>
                            </h4>
                            <span className="text-neutral-500">Java Expert</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="instructor-item-two scale-hover-item social-hover">
                        <div className="instructor-item-two__thumb text-center rounded-circle aspect-ratio-1 p-12 border border-neutral-30 position-relative">
                            <div className="instructor-item-two__thumb-inner w-100 h-100 d-block bg-main-25 rounded-circle overflow-hidden position-relative">
                                <img src="/assets/images/thumbs/instructor-img3.png" alt="" className="cover-img" />
                                <ul className="social-list flex-center gap-12 d-flex position-absolute start-50 top-50 w-100 h-100 translate-middle">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className="flex-center border border-white text-white w-44 h-44 rounded-circle text-xl text-main-600 bg-white hover-bg-main-600 hover-text-white hover-border-main-600"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-24">
                            <h4 className="mb-12">
                                <a href="/instructor-details" className="text-neutral-700 hover-text-main-600">Devon Lane</a>
                            </h4>
                            <span className="text-neutral-500">C++ Expert</span>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="pagination mt-40 flex-align gap-12 flex-wrap justify-content-center">
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#"><i className="ph-bold ph-caret-left"></i></a>
                </li>
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">1</a>
                </li>
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">2</a>
                </li>
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">3</a>
                </li>
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">...</a>
                </li>
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#"><i className="ph-bold ph-caret-right"></i></a>
                </li>
            </ul>

        </div>
    </section>
    {/* ================================ Instructor Section End ==================================== */}


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
