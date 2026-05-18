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
      
      <section className="banner-four bg-main-25 py-80 position-relative overflow-hidden z-1">

    <img src="/assets/images/shapes/shape1.png" alt="" className="shape one animation-rotation" />
    <img src="/assets/images/shapes/shape2.png" alt="" className="shape two animation-scalation" />
    <img src="/assets/images/shapes/shape5.png" alt="" className="shape three animation-walking" />
    <img src="/assets/images/shapes/shape2.png" alt="" className="shape four animation-scalation" />
    <img src="/assets/images/shapes/shape3.png" alt="" className="shape ten animation-walking" />
    
    <div className="container">
        <div className="row gy-5 align-items-center">
            <div className="col-xl-6">
                <div className="banner-content">
                    <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                        <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                        <h5 className="text-main-600 mb-0">Find the Right Tutor in Your Area</h5>
                    </div>
                    <h1 className="display4 fw-semibold mb-24 wow bounceInLeft">Best Tutoring Platform
                        for Home & <span className="text-main-two-600 wow bounceInRight"  data-wow-duration="2s" data-wow-delay=".5s" >Online</span>Tuitions
                    </h1>
                    <p className="text-neutral-500 text-line-2 wow bounceInUp">Find the Perfect Tutor Near You: Enhance Learning with Expert Guidance and Personalized Support Today!</p>
                    <div className="buttons-wrapper flex-align flex-wrap gap-24 mt-40">
                        <button type="button" className="btn btn-main rounded-pill flex-align gap-8" data-aos="fade-right" data-bs-toggle="modal" data-bs-target="#findTutor">
                            Find Best Tutor
                            <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                        </button>
                        <a href="/apply-admission" className="btn btn-outline-main rounded-pill flex-align gap-8" data-aos="fade-left">
                            Applying Tutor
                            <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                        </a>
                    </div>
                    <div className="mt-40 d-flex align-items-center flex-wrap gap-16">
                        <h6 className="mb-0 flex-shrink-0">Location Tutors :</h6>
                        <div className="flex-grow-1 d-flex align-items-center flex-wrap gap-12">
                            <span className="py-8 px-24 bg-white box-shadow-md rounded-pill text-sm"  data-aos="fade-up-left"  data-aos-duration="1000">New York : <span className="text-main-two-600">598</span></span>
                            <span className="py-8 px-24 bg-white box-shadow-md rounded-pill text-sm"  data-aos="fade-up-left"  data-aos-duration="1500">Florida : <span className="text-main-two-600">245</span></span>
                            <span className="py-8 px-24 bg-white box-shadow-md rounded-pill text-sm"  data-aos="fade-up-left"  data-aos-duration="2000">Captown :  <span className="text-main-two-600">475</span></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-6">
                <div className="banner-four-thumb position-relative">

                    <div className="banner-four-thumb__images d-flex gap-24">
                        <div className="banner-four-thumb__image wow bounceIn">
                            <img src="/assets/images/thumbs/banner-four-img1.png" alt="Banner Image" className="rounded-bottom-start-72px rounded-top-end-72px" data-tilt data-tilt-max="14" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-transition="1s" data-tilt-full-page-listening />
                        </div>
                        <div className="banner-four-thumb__image wow bounceIn mt-160">
                            <img src="/assets/images/thumbs/banner-four-img2.png" alt="Banner Image" className="rounded-bottom-end-72px rounded-bottom-end-72px" data-tilt data-tilt-max="14" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-transition="1s" data-tilt-full-page-listening />
                        </div>
                    </div>

                    <div className="banner-box three position-top px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16">
                        <span className="banner-box__icon flex-shrink-0 w-48 h-48 d-flex bg-main-three-50 text-main-three-600 text-2xl flex-center rounded-circle"><i className="ph ph-suitcase-simple"></i></span>
                        <div>
                            <span>Available Tutors</span>
                            <h6 className="mt-8 fw-medium text-xl d-block text-main-three-600 mb-0 counter">1520+</h6>
                        </div>
                    </div>
                    <div className="banner-box three position-bottom px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16">
                        <span className="banner-box__icon flex-shrink-0 w-48 h-48 d-flex bg-main-two-50 text-main-two-600 text-2xl flex-center rounded-circle"><i className="ph ph-phone-call"></i></span>
                        <div>
                            <span>Online Supports</span>
                            <a href="tel:(704)555-0127" className="mt-8 fw-medium text-xl d-block text-main-two-600 hover-text-main-two-700">(704) 555-0127</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</section>

 {/* Modal */}
 <div className="modal fade" id="findTutor" tabIndex={-1} aria-labelledby="findTutorLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
    <form action="#" className="modal-content p-24">
        <div className="modal-header pt-0 pb-24 border-bottom border-dashed border-top-0 border-end-0 border-start-0">
            <h4 className="mb-0" id="findTutorLabel">Find Best Tutors</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div className="py-24">
            <div className="row gy-4">
                <div className="col-sm-6">
                    <label htmlFor="location" className="text-neutral-700 text-lg fw-medium mb-12">Location  </label>
                    <input type="text" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="location" placeholder="Enter location..." />
                </div>
                <div className="col-sm-6">
                    <label htmlFor="selectLanguage" className="text-neutral-700 text-lg fw-medium mb-12">Select language <span className="text-danger-600">*</span> </label>
                    <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="selectLanguage">
                        <option value="1">English</option>
                        <option value="1">Bangla</option>
                        <option value="1">Hindi</option>
                        <option value="1">Urdhu</option>
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
                    <label htmlFor="selectDept" className="text-neutral-700 text-lg fw-medium mb-12">Select Department <span className="text-danger-600">*</span> </label>
                    <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="selectDept">
                        <option value="1">Humanity</option>
                        <option value="1">Science</option>
                        <option value="1">Commerce</option>
                    </select>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="selectSub" className="text-neutral-700 text-lg fw-medium mb-12">Select Subject <span className="text-danger-600">*</span> </label>
                    <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="selectSub">
                        <option value="1">English</option>
                        <option value="1">Physics</option>
                        <option value="1">Chemistry</option>
                        <option value="1">Biology</option>
                    </select>
                </div>
                <div className="col-sm-12">
                    <label htmlFor="selectCountry" className="text-neutral-700 text-lg fw-medium mb-12">Select Country <span className="text-danger-600">*</span> </label>
                    <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="selectCountry">
                        <option value="">Bangladesh</option>
                        <option value="">Pakistan</option>
                        <option value="">Bhutan</option>
                        <option value="">Nepal</option>
                        <option value="">Australia</option>
                        <option value="">England</option>
                    </select>
                </div>
            </div>
        </div>
        
        <div className="pt-24 border-top border-dashed border-bottom-0 border-end-0 border-start-0">
            <button type="submit" className="btn btn-main rounded-pill flex-align gap-8" data-bs-toggle="modal" data-bs-target="#findTutor">
                Find Now
                <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
            </button>
        </div>
    </form>
    </div>
</div>
{/* ========================= Banner Four SEction End =============================== */}

    {/* ============================ Tuition Types Section Start ==================================== */}
<section className="tuition-types py-120 position-relative z-1 mash-bg-main mash-main-style-two mash-bg-main-two mash-two-style-two overflow-hidden">
    <div className="container">
        <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16">
                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                <h5 className="text-main-600 mb-0">Tuition Types</h5>
            </div>
            <h2 className="mb-24">Find the Best Tuition Type which suits you most</h2>
            <p className="">Where you can explore the range of services and benefits available to you. Whether you're a student looking...</p>
        </div>
        <div className="row gy-4">
            <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn">
                <div className="tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600">
                    <span className="w-96 h-96 flex-center d-inline-flex bg-main-25 text-main-600 text-40 rounded-circle item-hover__bg">
                        <span className="animate__wobble">
                            <i className="ph ph-house-line"></i>
                        </span>
                    </span>
                    <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">Home Tutoring</h4>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn">
                <div className="tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600">
                    <span className="w-96 h-96 flex-center d-inline-flex bg-main-two-25 text-main-two-600 text-40 rounded-circle item-hover__bg">
                        <span className="animate__wobble">
                            <i className="ph ph-wifi-high"></i>
                        </span>
                    </span>
                    <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">Online Tutoring</h4>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn">
                <div className="tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600">
                    <span className="w-96 h-96 flex-center d-inline-flex bg-main-three-25 text-main-three-600 text-40 rounded-circle item-hover__bg">
                        <span className="animate__wobble">
                            <i className="ph ph-users"></i>
                        </span>
                    </span>
                    <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">Group Tutoring</h4>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn">
                <div className="tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600">
                    <span className="w-96 h-96 flex-center d-inline-flex bg-main-two-25 text-main-two-600 text-40 rounded-circle item-hover__bg">
                        <span className="animate__wobble">
                            <i className="ph ph-users-three"></i>
                        </span>
                    </span>
                    <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">Package Tutoring</h4>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn">
                <div className="tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600">
                    <span className="w-96 h-96 flex-center d-inline-flex bg-main-two-25 text-main-two-600 text-40 rounded-circle item-hover__bg">
                        <span className="animate__wobble">
                            <i className="ph ph-buildings"></i>
                        </span>
                    </span>
                    <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">School Tutoring</h4>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn">
                <div className="tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600">
                    <span className="w-96 h-96 flex-center d-inline-flex bg-main-three-25 text-main-three-600 text-40 rounded-circle item-hover__bg">
                        <span className="animate__wobble">
                            <i className="ph ph-building-office"></i>
                        </span>
                    </span>
                    <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">College Tutoring</h4>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn">
                <div className="tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600">
                    <span className="w-96 h-96 flex-center d-inline-flex bg-main-two-25 text-main-two-600 text-40 rounded-circle item-hover__bg">
                        <span className="animate__wobble">
                            <i className="ph ph-graduation-cap"></i>
                        </span>
                    </span>
                    <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">University Tutoring</h4>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn">
                <div className="tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600">
                    <span className="w-96 h-96 flex-center d-inline-flex bg-main-25 text-main-600 text-40 rounded-circle item-hover__bg">
                        <span className="animate__wobble">
                            <i className="ph ph-music-notes"></i>
                        </span>
                    </span>
                    <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">Music Tutoring</h4>
                </div>
            </div>
        </div>
    </div>
 </section>
{/* ============================ Tuition Types Section End ==================================== */}

    {/* ================================ About Four Start =============================== */}
    <section className="about-four py-120 position-relative z-1 overflow-hidden bg-main-25">
        <img src="/assets/images/shapes/shape2.png" alt="" className="shape one animation-scalation" />

        <div className="position-relative">
            <div className="container">
                <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
                    <div className="col-xl-6 pe-xl-5">
                        <div className="about-two__thumb position-relative pe-0 me-xl-5">
                            <img src="/assets/images/thumbs/about-four-img.png" className="rounded-16 cover-img" alt="" data-tilt data-tilt-max="6" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-transition="1s" data-tilt-full-page-listening />
                            <div className="offer-message animation-item style-two px-24 py-12 inset-inline-end--64 rounded-6 border border-white bg-success-600 fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown">
                                <span className="flex-shrink-0 w-48 h-48 bg-white text-success-600 text-2xl flex-center rounded-circle">
                                    <i className="animate__heartBeat ph-bold ph-certificate"></i>
                                </span>
                                <div>
                                    <h6 className="text-white mb-1 text-2xl counter">12+</h6>
                                    <span className="text-white">Award Winning</span>
                                </div>
                            </div>
                            
                            <div className="d-sm-flex d-none position-absolute inset-block-end-0 inset-inline-start-0 me-lg-0 ms--150px px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg" data-tilt data-tilt-max="8" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-transition="1s" data-tilt-scale="1.04">
                                <div className="text-center">
                                    <img src="/assets/images/thumbs/about-four-short-img.png" className="mb-24" alt="" />
                                    <div className="mt-24">
                                        <img src="/assets/images/shapes/excellator-shape.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="about-two-content">
                            <div className="mb-40">
                                <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                                    <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book"></i></span>
                                    <h5 className="text-main-600 mb-0">Find Your Tution Jobs, in your area</h5>
                                </div>
                                <h2 className="mb-24 wow bounceInRight">Find Tutoring Jobs</h2>
                                <p className="text-neutral-500 text-line-2 wow bounceInUp">If teaching jobs interests you, then you are on the right place. EduAll, we often have 500+ open home tuition jobs that are genuine and 100% verified.</p>
                            </div>
        
                            <div className="grid-cols-2">
                                <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="600">
                                    <span className="flex-shrink-0 w-56 h-56 flex-center d-inline-flex bg-white text-main-600 text-32 rounded-circle box-shadow-md">
                                        <i className="animate__swing ph ph-user-plus"></i>
                                    </span>
                                    <div className="flex-grow-1">
                                        <h6 className="text-neutral-800 text-xl fw-semibold mb-8">Create Your Profile</h6>
                                        <div className="flex-align gap-8 text-neutral-500">
                                            <i className="ph ph-clock"></i>
                                            Sign up Or Register
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="800">
                                    <span className="flex-shrink-0 w-56 h-56 flex-center d-inline-flex bg-white text-success-600 text-32 rounded-circle box-shadow-md">
                                        <i className="animate__swing ph ph-calendar-blank"></i>
                                    </span>
                                    <div className="flex-grow-1">
                                        <h6 className="text-neutral-800 text-xl fw-semibold mb-8">Set Your Schedule</h6>
                                        <div className="flex-align gap-8 text-neutral-500">
                                            <i className="ph ph-clock"></i>
                                            Choose your availability
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="1000">
                                    <span className="flex-shrink-0 w-56 h-56 flex-center d-inline-flex bg-white text-warning-600 text-32 rounded-circle box-shadow-md">
                                        <i className="animate__swing ph ph-users"></i>
                                    </span>
                                    <div className="flex-grow-1">
                                        <h6 className="text-neutral-800 text-xl fw-semibold mb-8">Connect Students</h6>
                                        <div className="flex-align gap-8 text-neutral-500">
                                            <i className="ph ph-clock"></i>
                                            Be matched students
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="1200">
                                    <span className="flex-shrink-0 w-56 h-56 flex-center d-inline-flex bg-white text-info-600 text-32 rounded-circle box-shadow-md">
                                        <i className="animate__swing ph ph-video-camera"></i>
                                    </span>
                                    <div className="flex-grow-1">
                                        <h6 className="text-neutral-800 text-xl fw-semibold mb-8">Start Tutoring</h6>
                                        <div className="flex-align gap-8 text-neutral-500">
                                            <i className="ph ph-clock"></i>
                                            Begin conducting sessions
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="pt-40 border-top border-neutral-50 mt-40 border-dashed border-0">
                                <a href="/tuition-jobs" className="btn btn-main rounded-pill flex-align d-inline-flex gap-8">
                                    <i className="ph-bold ph-magnifying-glass d-flex text-lg"></i>
                                    Find Tution
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    {/* ================================ About Four End =============================== */}

    {/* ================================= Counter Section Three Start ============================== */}
    <section className="counter-three half-bg style-two">
        <div className="container">
            <div className="p-16 rounded-16 bg-white box-shadow-md">
                <div className="row gy-4">
                    <div className="col-xl-3 col-sm-6 col-xs-6"  data-aos="fade-up" data-aos-duration="200">
                        <div className="counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30">
                            <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24">
                                <i className="animate__wobble ph ph-users-three"></i>
                            </span>
                            <h2 className="display-four mb-16 text-neutral-700 counter">55K</h2>
                            <span className="text-neutral-500 text-lg">Total Applied</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-xs-6"  data-aos="fade-up" data-aos-duration="400">
                        <div className="counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30">
                            <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24">
                                <i className="animate__wobble ph ph-users"></i>
                            </span>
                            <h2 className="display-four mb-16 text-neutral-700 counter"> 2.5K</h2>
                            <span className="text-neutral-500 text-lg">Total Tutors</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-xs-6"  data-aos="fade-up" data-aos-duration="600">
                        <div className="counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30">
                            <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24">
                                <i className="animate__wobble ph ph-briefcase"></i>
                            </span>
                            <h2 className="display-four mb-16 text-neutral-700 counter">20.8K</h2>
                            <span className="text-neutral-500 text-lg">Live Tuition Jobs</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-xs-6"  data-aos="fade-up" data-aos-duration="800">
                        <div className="counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30">
                            <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24">
                                <i className="animate__wobble ph ph-star"></i>
                            </span>
                            <h2 className="display-four mb-16 text-neutral-700 counter">4.8</h2>
                            <span className="text-neutral-500 text-lg">Average Tutor Rating</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ================================= Counter Section Three End ============================== */}

    {/* ======================================= Popular Teacher section start =========================== */}
    <section className="tutor-two py-120 position-relative z-1 background-img" data-background-image="assets/images/bg/gradient-bg-2.png">
        <div className="container">

            <div className="section-heading text-center">
                <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                    <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                    <h5 className="text-main-600 mb-0">Our Popular Tutors</h5>
                </div>
                <h2 className="mb-24 wow bounceIn">Here are few of the Verified Teachers</h2>
                <p className=" wow bounceInUp">Our tutoring sessions are interactive and engaging, focusing on the student's specific needs.</p>
            </div>
            
            <div className="tutor-slider">
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-20"  data-aos="fade-up" data-aos-duration="200">
                    <div className="course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative">
                        <a href="/tutor-details" className="w-100 h-100">
                            <img src="/assets/images/thumbs/instructor-img1.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
                    </div>
                    <div className="pt-32 pb-24 px-16 position-relative">
                        <div className="">
                            <h4 className="mb-16">
                                <a href="/tutor-details" className="link text-line-2">Ronald Richards</a>
                            </h4>
                            <div className="flex-between gap-8 flex-wrap">
                                <div className="flex-align gap-12">
                                    <span className="text-2xl text-main-600 d-flex"><i className="ph-bold ph-graduation-cap"></i></span>
                                    <span className="">Global University</span>
                                </div>
                                <div className="flex-align gap-4">
                                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-lg text-neutral-700">
                                        4.7
                                        <span className="text-neutral-100">(6.4k)</span>
                                    </span>
                                </div>
                            </div>
                            <div className="mt-24 flex-between gap-16 flex-wrap">
                                <h4 className="mb-0 text-main-two-600">
                                    $155 <span className="text-inherit text-neutral-200 fw-normal">per/hr</span> 
                                </h4>
                                <div className="flex-align gap-8 py-10 px-14 border border-main-100 rounded-8 bg-main-25">
                                    <span className="text-xl d-flex text-main-600"><i className="ph-bold ph-map-pin"></i></span>
                                    <span className="text-sm fw-medium text-neutral-500">New York</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-24 border-dashed border-0">
                            <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                Apply Now
                                <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-20"  data-aos="fade-up" data-aos-duration="400">
                    <div className="course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative">
                        <a href="/tutor-details" className="w-100 h-100">
                            <img src="/assets/images/thumbs/instructor-img2.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
                    </div>
                    <div className="pt-32 pb-24 px-16 position-relative">
                        <div className="">
                            <h4 className="mb-16">
                                <a href="/tutor-details" className="link text-line-2">Jacob Jones</a>
                            </h4>
                            <div className="flex-between gap-8 flex-wrap">
                                <div className="flex-align gap-12">
                                    <span className="text-2xl text-main-600 d-flex"><i className="ph-bold ph-graduation-cap"></i></span>
                                    <span className="">LKS University</span>
                                </div>
                                <div className="flex-align gap-4">
                                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-lg text-neutral-700">
                                        4.7
                                        <span className="text-neutral-100">(6.4k)</span>
                                    </span>
                                </div>
                            </div>
                            <div className="mt-24 flex-between gap-16 flex-wrap">
                                <h4 className="mb-0 text-main-two-600">
                                    $155 <span className="text-inherit text-neutral-200 fw-normal">per/hr</span> 
                                </h4>
                                <div className="flex-align gap-8 py-10 px-14 border border-main-100 rounded-8 bg-main-25">
                                    <span className="text-xl d-flex text-main-600"><i className="ph-bold ph-map-pin"></i></span>
                                    <span className="text-sm fw-medium text-neutral-500">Phoenix</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-24 border-dashed border-0">
                            <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                Apply Now
                                <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-20"  data-aos="fade-up" data-aos-duration="600">
                    <div className="course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative">
                        <a href="/tutor-details" className="w-100 h-100">
                            <img src="/assets/images/thumbs/instructor-img3.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
                    </div>
                    <div className="pt-32 pb-24 px-16 position-relative">
                        <div className="">
                            <h4 className="mb-16">
                                <a href="/tutor-details" className="link text-line-2">Darlene Robertson</a>
                            </h4>
                            <div className="flex-between gap-8 flex-wrap">
                                <div className="flex-align gap-12">
                                    <span className="text-2xl text-main-600 d-flex"><i className="ph-bold ph-graduation-cap"></i></span>
                                    <span className="">Notware</span>
                                </div>
                                <div className="flex-align gap-4">
                                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-lg text-neutral-700">
                                        4.7
                                        <span className="text-neutral-100">(6.4k)</span>
                                    </span>
                                </div>
                            </div>
                            <div className="mt-24 flex-between gap-16 flex-wrap">
                                <h4 className="mb-0 text-main-two-600">
                                    $155 <span className="text-inherit text-neutral-200 fw-normal">per/hr</span> 
                                </h4>
                                <div className="flex-align gap-8 py-10 px-14 border border-main-100 rounded-8 bg-main-25">
                                    <span className="text-xl d-flex text-main-600"><i className="ph-bold ph-map-pin"></i></span>
                                    <span className="text-sm fw-medium text-neutral-500">Chicago</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-24 border-dashed border-0">
                            <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                Apply Now
                                <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-20"  data-aos="fade-up" data-aos-duration="200">
                    <div className="course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative">
                        <a href="/tutor-details" className="w-100 h-100">
                            <img src="/assets/images/thumbs/instructor-img4.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
                    </div>
                    <div className="pt-32 pb-24 px-16 position-relative">
                        <div className="">
                            <h4 className="mb-16">
                                <a href="/tutor-details" className="link text-line-2">Esther Howard</a>
                            </h4>
                            <div className="flex-between gap-8 flex-wrap">
                                <div className="flex-align gap-12">
                                    <span className="text-2xl text-main-600 d-flex"><i className="ph-bold ph-graduation-cap"></i></span>
                                    <span className="">Global University</span>
                                </div>
                                <div className="flex-align gap-4">
                                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-lg text-neutral-700">
                                        4.7
                                        <span className="text-neutral-100">(6.4k)</span>
                                    </span>
                                </div>
                            </div>
                            <div className="mt-24 flex-between gap-16 flex-wrap">
                                <h4 className="mb-0 text-main-two-600">
                                    $155 <span className="text-inherit text-neutral-200 fw-normal">per/hr</span> 
                                </h4>
                                <div className="flex-align gap-8 py-10 px-14 border border-main-100 rounded-8 bg-main-25">
                                    <span className="text-xl d-flex text-main-600"><i className="ph-bold ph-map-pin"></i></span>
                                    <span className="text-sm fw-medium text-neutral-500">Phoenix</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-24 border-dashed border-0">
                            <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                Apply Now
                                <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex-center gap-16 mt-40">
                <button type="button" id="tutor-prev" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                    <i className="ph ph-caret-left"></i>
                </button>
                <button type="button" id="tutor-next" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                    <i className="ph ph-caret-right"></i>
                </button>
            </div>
        </div>
    </section>
    {/* ======================================= Popular Teacher section End =========================== */}

    {/* ============================ Work Process section start ================================ */}
<section className="tutor-two py-120 position-relative z-1 half-bg half-bg__64 style-two">
    <div className="container">

        <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                <h5 className="text-main-600 mb-0">Working Process</h5>
            </div>
            <h2 className="mb-24 wow bounceIn">How It Works For Tutors</h2>
            <p className=" wow bounceInUp">Our tutoring sessions are interactive and engaging, focusing on the student's specific needs.</p>
        </div>     

        <div className="row gy-4">
            <div className="col-xxl-3 col-sm-6" data-aos="fade-up" data-aos-duration="200">
                <div className="bg-white border border-neutral-30 animation-item rounded-16 p-16 item-hover text-center">
                    <div className="bg-main-25 p-24 rounded-16 item-hover__bg-main transition-2">
                        <div className="w-136 h-136 bg-white p-16 box-shadow-md rounded-circle mx-auto d-inline-flex align-items-center justify-content-center position-relative">
                            <span className="border border-main-600 border-dashed rounded-circle w-100 h-100 flex-center">
                                <img src="/assets/images/icons/work-process-icon1.png" alt="" className="animate__flipInY" />
                            </span>
                            <span className="w-40 h-40 flex-center rounded-circle bg-main-600 text-white text-lg position-absolute top-n6 end-n4 box-shadow-md item-hover__bg item-hover__text-main transition-2">01</span>
                        </div>
                        
                        <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">College Tutoring</h4>
                        <p className="text-sm text-neutral-500 item-hover__text transition-2 mt-16">This helps us adjust the learning plan as needed keep </p>
                    </div>
                </div>
            </div>
            <div className="col-xxl-3 col-sm-6" data-aos="fade-up" data-aos-duration="400">
                <div className="bg-white border border-neutral-30 animation-item rounded-16 p-16 item-hover text-center">
                    <div className="bg-main-25 p-24 rounded-16 item-hover__bg-main transition-2">
                        <div className="w-136 h-136 bg-white p-16 box-shadow-md rounded-circle mx-auto d-inline-flex align-items-center justify-content-center position-relative">
                            <span className="border border-main-600 border-dashed rounded-circle w-100 h-100 flex-center">
                                <img src="/assets/images/icons/work-process-icon2.png" alt="" className="animate__flipInY" />
                            </span>
                            <span className="w-40 h-40 flex-center rounded-circle bg-main-600 text-white text-lg position-absolute top-n6 end-n4 box-shadow-md item-hover__bg item-hover__text-main transition-2">02</span>
                        </div>
                        
                        <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">Set Schedule</h4>
                        <p className="text-sm text-neutral-500 item-hover__text transition-2 mt-16">This helps us adjust the learning plan as needed keep </p>
                    </div>
                </div>
            </div>
            <div className="col-xxl-3 col-sm-6" data-aos="fade-up" data-aos-duration="600">
                <div className="bg-white border border-neutral-30 animation-item rounded-16 p-16 item-hover text-center">
                    <div className="bg-main-25 p-24 rounded-16 item-hover__bg-main transition-2">
                        <div className="w-136 h-136 bg-white p-16 box-shadow-md rounded-circle mx-auto d-inline-flex align-items-center justify-content-center position-relative">
                            <span className="border border-main-600 border-dashed rounded-circle w-100 h-100 flex-center">
                                <img src="/assets/images/icons/work-process-icon3.png" alt="" className="animate__flipInY" />
                            </span>
                            <span className="w-40 h-40 flex-center rounded-circle bg-main-600 text-white text-lg position-absolute top-n6 end-n4 box-shadow-md item-hover__bg item-hover__text-main transition-2">03</span>
                        </div>
                        
                        <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">Applying Tuition</h4>
                        <p className="text-sm text-neutral-500 item-hover__text transition-2 mt-16">This helps us adjust the learning plan as needed keep </p>
                    </div>
                </div>
            </div>
            <div className="col-xxl-3 col-sm-6" data-aos="fade-up" data-aos-duration="800">
                <div className="bg-white border border-neutral-30 animation-item rounded-16 p-16 item-hover text-center">
                    <div className="bg-main-25 p-24 rounded-16 item-hover__bg-main transition-2">
                        <div className="w-136 h-136 bg-white p-16 box-shadow-md rounded-circle mx-auto d-inline-flex align-items-center justify-content-center position-relative">
                            <span className="border border-main-600 border-dashed rounded-circle w-100 h-100 flex-center">
                                <img src="/assets/images/icons/work-process-icon4.png" alt="" className="animate__flipInY" />
                            </span>
                            <span className="w-40 h-40 flex-center rounded-circle bg-main-600 text-white text-lg position-absolute top-n6 end-n4 box-shadow-md item-hover__bg item-hover__text-main transition-2">04</span>
                        </div>
                        
                        <h4 className="display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2">Start Journey</h4>
                        <p className="text-sm text-neutral-500 item-hover__text transition-2 mt-16">This helps us adjust the learning plan as needed keep </p>
                    </div>
                </div>
            </div>
        </div>


    </div>
</section>
{/* ============================ Work Process section End ================================ */}

    {/* ================================== Free Trail Section Start ================================ */}
<section className="free-trails py-120 position-relative z-1 bg-main-25 overflow-hidden">
    <div className="position-relative">
        <div className="container">
            <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
                <div className="col-lg-6">
                    <div className="position-relative wow bounceIn">
                        <img src="/assets/images/thumbs/trail-img.png" alt="" data-tilt data-tilt-max="8" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-transition="1s" data-tilt-full-page-listening />
                        <div className="w-120 h-120 bg-main-two-600 rounded-circle border border-white d-flex flex-column align-items-center justify-content-center position-absolute start-50 top-0 translate-middle-x mt-28">
                            <h3 className="text-white mb-0 fw-medium counter counter">12.4k</h3>
                            <span className="text-white text-secondary">Community</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-40">
                        <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                            <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                            <h5 className="text-main-600 mb-0">Request a Class for FREE Trial</h5>
                        </div>
                        <h2 className="mb-24 wow bounceInRight">Experience Personalized Learning Today</h2>
                        <p className="text-neutral-500 text-line-2 wow bounceInUp">Ready to experience the benefits of personalized tutoring firsthand? Sign up for a FREE trial class today and see how our expert tutors can help you.</p>
                    </div>

                    <ul className="grid-cols-2">
                        <li className="flex-align gap-8" data-aos="fade-left" data-aos-duration="200">
                            <img src="/assets/images/icons/check2.png" alt="" />
                            <span className="text-neutral-500 text-md fw-medium">Fill Out the Form</span>
                        </li>
                        <li className="flex-align gap-8" data-aos="fade-left" data-aos-duration="400">
                            <img src="/assets/images/icons/check2.png" alt="" />
                            <span className="text-neutral-500 text-md fw-medium">Schedule Your Class</span>
                        </li>
                        <li className="flex-align gap-8" data-aos="fade-left" data-aos-duration="600">
                            <img src="/assets/images/icons/check2.png" alt="" />
                            <span className="text-neutral-500 text-md fw-medium">Meet Your Tutor </span>
                        </li>
                        <li className="flex-align gap-8" data-aos="fade-left" data-aos-duration="800">
                            <img src="/assets/images/icons/check2.png" alt="" />
                            <span className="text-neutral-500 text-md fw-medium">Start The Class</span>
                        </li>
                    </ul>

                    <div className="pt-40 border-top border-neutral-50 mt-40 border-dashed border-0">
                        <a href="/sign-up" className="btn btn-main rounded-pill flex-align d-inline-flex gap-8">
                            Register Now
                            <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
 </section>
{/* ================================== Free Trail Section End ================================ */}


    {/* =========================== Specialist section start ==================================== */}
 <section className="specialist py-120">
    <div className="container">
        <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                <h5 className="text-main-600 mb-0">Find Our Specialist</h5>
            </div>
            <h2 className="mb-24 wow bounceIn">Find Your Subject Specialist</h2>
        </div>

        <div className="row gy-4">
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-25 py-24 flex-align gap-24">
                    <span className="text-main-600">
                        <img src="/assets/images/icons/specialist-icon1.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">Bangla</h4>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-two-25 py-24 flex-align gap-24">
                    <span className="text-main-two-600">
                        <img src="/assets/images/icons/specialist-icon2.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">English</h4>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-three-25 py-24 flex-align gap-24">
                    <span className="text-main-three-600">
                        <img src="/assets/images/icons/specialist-icon3.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">Mathematics</h4>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-two-25 py-24 flex-align gap-24">
                    <span className="text-main-two-600">
                        <img src="/assets/images/icons/specialist-icon4.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">Biology</h4>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-two-25 py-24 flex-align gap-24">
                    <span className="text-main-two-600">
                        <img src="/assets/images/icons/specialist-icon5.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">Physics</h4>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-three-25 py-24 flex-align gap-24">
                    <span className="text-main-three-600">
                        <img src="/assets/images/icons/specialist-icon6.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">Chemistry</h4>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-two-25 py-24 flex-align gap-24">
                    <span className="text-main-two-600">
                        <img src="/assets/images/icons/specialist-icon7.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">ICT & IT</h4>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-25 py-24 flex-align gap-24">
                    <span className="text-main-600">
                        <img src="/assets/images/icons/specialist-icon8.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">Geography</h4>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-three-25 py-24 flex-align gap-24">
                    <span className="text-main-three-600">
                        <img src="/assets/images/icons/specialist-icon9.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">Architecture</h4>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-two-25 py-24 flex-align gap-24">
                    <span className="text-main-two-600">
                        <img src="/assets/images/icons/specialist-icon10.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">Business</h4>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-25 py-24 flex-align gap-24">
                    <span className="text-main-600">
                        <img src="/assets/images/icons/specialist-icon11.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">History</h4>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 wow bounceIn">
                <div className="ps-40 pe-8 rounded-12 animation-item bg-main-two-25 py-24 flex-align gap-24">
                    <span className="text-main-two-600">
                        <img src="/assets/images/icons/specialist-icon12.png" alt="" className="animate__heartBeat" />
                    </span>
                    <h4 className="mb-0">Philosophy</h4>
                </div>
            </div>

        </div>
    </div>
 </section>
{/* =========================== Specialist section End ==================================== */}

    {/* ============================== Review Section start =============================== */}
<section className="review py-120 bg-main-25 overflow-hidden">
 

    <div className="container">
        <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16 wow fadeInDown">
                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                <h5 className="text-main-600 mb-0">People Love Us!</h5>
            </div>
            <h2 className="mb-24 wow fadeIn">What Our Satisfied Say</h2>
            <p className="wow fadeInUp">Our students' success stories speak volumes. Here are just a few testimonials from our satisfied learners</p>
        </div>
        <div className="position-relative z-1">
            <img src="/assets/images/shapes/shape2.png" alt="" className="shape two style-left animation-scalation" />
            <img src="/assets/images/shapes/shape6.png" alt="" className="shape four style-top animation-scalation" />
            <img src="/assets/images/shapes/shape2.png" alt="" className="shape four style-right animation-scalation" />
            
            <div className="row gy-4">
                <div className="col-lg-6" data-aos="fade-up"  data-aos-duration="600">
                    <div className="bg-white p-32 rounded-12 box-shadow-md">
                        <h4 className="text-center mb-32">What our Parents say about us</h4>
                        <div className="review-slider">
                            <div className="rounded-12 p-32 text-center transition-2 item-hover bg-main-25 hover-bg-main-600">
                                <span className="w-120 h-120 rounded-circle overflow-hidden d-inline-flex">
                                    <img src="/assets/images/thumbs/testimonials-three-img1.png" alt="" className="cover-img" />
                                </span>
                                <h4 className="mt-24 mb-8 item-hover__text transition-2">Robiul Hasan</h4>
                                <span className="text-neutral-500 d-block item-hover__text transition-2">Front End Developer</span>
                                <ul className="flex-align d-inline-flex gap-8 my-24">
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                </ul>
                                <p className="text-xl-res item-hover__text transition-2">"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"</p>
                            </div>
                            <div className="rounded-12 p-32 text-center transition-2 item-hover bg-main-two-25 hover-bg-main-two-600">
                                <span className="w-120 h-120 rounded-circle overflow-hidden d-inline-flex">
                                    <img src="/assets/images/thumbs/testimonials-three-img4.png" alt="" className="cover-img" />
                                </span>
                                <h4 className="mt-24 mb-8 item-hover__text transition-2">Floyd Miles</h4>
                                <span className="text-neutral-500 d-block item-hover__text transition-2">Doctor</span>
                                <ul className="flex-align d-inline-flex gap-8 my-24">
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                </ul>
                                <p className="text-xl-res item-hover__text transition-2">"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"</p>
                            </div>
                            <div className="rounded-12 p-32 text-center transition-2 item-hover bg-main-25 hover-bg-main-600">
                                <span className="w-120 h-120 rounded-circle overflow-hidden d-inline-flex">
                                    <img src="/assets/images/thumbs/testimonials-three-img3.png" alt="" className="cover-img" />
                                </span>
                                <h4 className="mt-24 mb-8 item-hover__text transition-2">Nora Fatehi</h4>
                                <span className="text-neutral-500 d-block item-hover__text transition-2">Engineer</span>
                                <ul className="flex-align d-inline-flex gap-8 my-24">
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                </ul>
                                <p className="text-xl-res item-hover__text transition-2">"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up"  data-aos-duration="1000">
                    <div className="bg-white p-32 rounded-12 box-shadow-md">
                        <h4 className="text-center mb-32">What our Tutors say about us</h4>
                        <div className="review-slider-two">
                            <div className="rounded-12 p-32 text-center transition-2 item-hover bg-main-25 hover-bg-main-600">
                                <span className="w-120 h-120 rounded-circle overflow-hidden d-inline-flex">
                                    <img src="/assets/images/thumbs/testimonials-three-img2.png" alt="" className="cover-img" />
                                </span>
                                <h4 className="mt-24 mb-8 item-hover__text transition-2">Kathryn Murphy</h4>
                                <span className="text-neutral-500 d-block item-hover__text transition-2">Graphic Designer</span>
                                <ul className="flex-align d-inline-flex gap-8 my-24">
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                </ul>
                                <p className="text-xl-res item-hover__text transition-2">"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"</p>
                            </div>
                            <div className="rounded-12 p-32 text-center transition-2 item-hover bg-main-two-25 hover-bg-main-two-600">
                                <span className="w-120 h-120 rounded-circle overflow-hidden d-inline-flex">
                                    <img src="/assets/images/thumbs/testimonials-three-img3.png" alt="" className="cover-img" />
                                </span>
                                <h4 className="mt-24 mb-8 item-hover__text transition-2">Sarah L.</h4>
                                <span className="text-neutral-500 d-block item-hover__text transition-2">WP Developer</span>
                                <ul className="flex-align d-inline-flex gap-8 my-24">
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                </ul>
                                <p className="text-xl-res item-hover__text transition-2">"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"</p>
                            </div>
                            <div className="rounded-12 p-32 text-center transition-2 item-hover bg-main-25 hover-bg-main-600">
                                <span className="w-120 h-120 rounded-circle overflow-hidden d-inline-flex">
                                    <img src="/assets/images/thumbs/testimonials-three-img3.png" alt="" className="cover-img" />
                                </span>
                                <h4 className="mt-24 mb-8 item-hover__text transition-2">Nora Fatehi</h4>
                                <span className="text-neutral-500 d-block item-hover__text transition-2">Engineer</span>
                                <ul className="flex-align d-inline-flex gap-8 my-24">
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                                </ul>
                                <p className="text-xl-res item-hover__text transition-2">"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ============================== Review Section End =============================== */}
    
        {/* ============================= How it work section start ================================== */}
     <section className="how-it-work py-120 position-relative z-1 overflow-hidden">
        <img src="/assets/images/shapes/shape2.png" alt="" className="shape two animation-scalation" />
        <img src="/assets/images/shapes/shape6.png" alt="" className="shape four animation-scalation" />
        
        <div className="container">
            <div className="row gy-4 align-items-center flex-wrap-reverse">
                <div className="col-lg-6">
                    <div className="row gy-4 how-it-work-wrapper">
                        <div className="col-sm-6" data-aos="fade-up" data-aos-duration="400">
                            <div className="p-40 rounded-12 animation-item item-hover hover-bg-main-600 transition-2 bg-main-25 ">
                                <span className="w-80 h-80 mb-32 flex-center bg-white box-shadow-md rounded-12 item-hover__bg">
                                    <img src="/assets/images/icons/how-it-work-icon1.png" alt="" className="animate__wobble" />
                                </span>
                                <h4 className="mb-16 item-hover__text transition-2">Search for Tutors </h4>
                                <p className="item-hover__text text-neutral-500 transition-2">Post Tuition by creating Account or without Account.</p>
                            </div>
                        </div>
                        <div className="col-sm-6" data-aos="fade-up" data-aos-duration="600">
                            <div className="p-40 rounded-12 animation-item item-hover hover-bg-main-two-600 transition-2 bg-main-two-25 ">
                                <span className="w-80 h-80 mb-32 flex-center bg-white box-shadow-md rounded-12 item-hover__bg">
                                    <img src="/assets/images/icons/how-it-work-icon2.png" alt="" className="animate__wobble" />
                                </span>
                                <h4 className="mb-16 item-hover__text transition-2">Get Free Session</h4>
                                <p className="item-hover__text text-neutral-500 transition-2">Get free one day demo session with the tutor...</p>
                            </div>
                        </div>
                        <div className="col-sm-6" data-aos="fade-up" data-aos-duration="800">
                            <div className="p-40 rounded-12 animation-item item-hover hover-bg-main-two-600 transition-2 bg-main-two-25 ">
                                <span className="w-80 h-80 mb-32 flex-center bg-white box-shadow-md rounded-12 item-hover__bg">
                                    <img src="/assets/images/icons/how-it-work-icon3.png" alt="" className="animate__wobble" />
                                </span>
                                <h4 className="mb-16 item-hover__text transition-2">Hire your tutor</h4>
                                <p className="item-hover__text text-neutral-500 transition-2">If you like the demo session, confirm the teacher.</p>
                            </div>
                        </div>
                        <div className="col-sm-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="p-40 rounded-12 animation-item item-hover hover-bg-main-three-600 transition-2 bg-main-three-25 ">
                                <span className="w-80 h-80 mb-32 flex-center bg-white box-shadow-md rounded-12 item-hover__bg">
                                    <img src="/assets/images/icons/how-it-work-icon4.png" alt="" className="animate__wobble" />
                                </span>
                                <h4 className="mb-16 item-hover__text transition-2">Get results</h4>
                                <p className="item-hover__text text-neutral-500 transition-2">Gain knowledge, boost confidence and improve...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ps-lg-5">
                    <div className="mb-40">
                        <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                            <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                            <h5 className="text-main-600 mb-0">For Students/Guardians</h5>
                        </div>
                        <h2 className="mb-24 wow bounceInRight">Here's how it works</h2>
                        <p className="text-neutral-500 text-xl wow bounceInUp">We strive to make the tutoring process simple, effective, and stress-free for both students and parents. We carefully match the student with a tutor who specializes in the relevant subject area.</p>
                        <div className="pt-40 border-top border-neutral-50 mt-40 border-dashed border-0">
                            <a href="/sign-up" className="btn btn-main rounded-pill flex-align d-inline-flex gap-8">
                                Register Now
                                <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    {/* ============================= How it work section End ================================== */}
    
    {/* ================================= Newsletter Section Start ================================= */}
<div className="certificate overflow-hidden">
    <div className="container container--lg">
        <div className="certificate-box px-16 bg-main-600 rounded-16">
            <div className="container">
                <div className="position-relative py-80">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="certificate__content">
                                <h2 className="text-white mb-16 fw-medium wow bounceInRight">Subscribe for newsletters</h2>
                                <p className="text-white wow bounceInUp">Subscribe Our Newsletter For Latest Updates</p>
                                <form action="#" className="position-relative mt-40 wow bounceInRight">
                                    <input type="text" className="common-input rounded-pill pe-44" placeholder="Enter Email..." />
                                    <button type="submit" className="w-32 h-32 bg-main-600 hover-bg-main-700 rounded-circle flex-center text-lg text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8">
                                        <i className="ph ph-paper-plane-tilt"></i>
                                    </button>
                                </form>
                                <div className="flex-align gap-8 text-white mt-24 wow bounceInUp">
                                    <i className=" text-2xl ph-fill ph-check-circle"></i>
                                    <p className="">I agree with privacy policy and terms</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 d-xl-block d-none">
                            <div className="certificate__thumb" data-aos="fade-up">    
                                <img src="/assets/images/thumbs/newsletter-two-img.png" alt="" data-tilt data-tilt-max="8" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-full-page-listening />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
{/* ================================= Newsletter Section End ================================= */}
      
      <Footer />
    </>
  );
}
