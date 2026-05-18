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
      
      {/* ========================= Banner Two Section Start =============================== */}
<section className="banner-two pt-80 position-relative overflow-hidden">

    <img src="/assets/images/shapes/banner-two-shape-1.png" className="position-absolute inset-block-end-0 inset-inline-end-0 w-100 h-100 d-lg-block d-none z-n1" alt="" data-tilt data-tilt-speed="500" data-tilt-max="6" data-tilt-perspective="5000" data-tilt-full-page-listening data-tilt-scale="1.03" />

    <img src="/assets/images/shapes/shape8.png" alt="" className="shape three animation-rotation z-n1" />
    <img src="/assets/images/shapes/shape8.png" alt="" className="shape five animation-scalation" />
    
    <div className="container">
        <div className="row gy-5 align-items-center">
            <div className="col-xl-6">

                <div className="banner-content pe-md-4">
                    <div className="flex-align gap-8 mb-16" data-aos="fade-down">
                        <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book"></i></span>
                        <h5 className="text-main-600 mb-0">Elevate Your Learning</h5>
                    </div>
                    
                    <h1 className="display2 mb-24 wow bounceInLeft">Learn, 
                        <span className="text-main-two-600 wow bounceInRight" data-wow-duration="2s" data-wow-delay=".5s">Grow, </span>
                        <span className="text-main-three-600 wow bounceInLeft" data-wow-duration="1s" data-wow-delay=".5s">Achieve</span>  And Succeed
                    </h1>
                    <p className="text-neutral-500 text-line-2 wow bounceInUp">Welcome to EduAll, where learning knows no bounds. Whether you're a student, professional, or lifelong learner...</p>
                    <div className="buttons-wrapper flex-align flex-wrap gap-24 mt-40">
                        <a href="/course" className="btn btn-main rounded-pill flex-align gap-8" data-aos="fade-right">
                            Browse Courses
                            <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                        </a>
                        <a href="/about" className="btn btn-outline-main rounded-pill flex-align gap-8" data-aos="fade-left">
                            About Us
                            <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="banner-thumb position-relative">
                    <img src="/assets/images/thumbs/banner-img-2.png" alt="" className="banner-thumb__img rounded-12" data-aos="fade-up" />
                    
                    <img src="/assets/images/shapes/shape9.png" className="position-absolute inset-block-end-0 start-0 z-n1" alt="" data-tilt data-tilt-max="16" data-tilt-speed="500" />
                    <img src="/assets/images/shapes/shape10.png" className="position-absolute inset-block-start-0 start-0 z-n1 showHideTwo" alt="" data-tilt data-tilt-max="16" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-startX="100" data-tilt-full-page-listening />
                </div>
            </div>
        </div>
    </div>
</section>
{/* ========================= Banner Two Section End =============================== */}

    {/* ========================== Info Section Start =================================== */}
<section className="info py-40 bg-main-600">
    <div className="container">
        <div className="row gy-4">
            <div className="col-xl-3 col-sm-6"  data-aos="fade-up" data-aos-duration="200">
                <div className="info-item animation-item flex-align gap-20">
                    <span className="w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0">
                        <i className="animate__heartBeat ph-bold ph-video-camera"></i>
                    </span>
                    <div className="flex-grow-1">
                        <h5 className="mb-8 text-white fw-medium">50,000 online courses</h5>
                        <span className="text-sm text-white">Enjoy a variety of fresh topics</span>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6"  data-aos="fade-up" data-aos-duration="400">
                <div className="info-item animation-item flex-align gap-20">
                    <span className="w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0">
                         <i className="animate__heartBeat ph-bold ph-users"></i>
                        </span>
                    <div className="flex-grow-1">
                        <h5 className="mb-8 text-white fw-medium">Expert instruction</h5>
                        <span className="text-sm text-white">Find the right instructor for you</span>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6"  data-aos="fade-up" data-aos-duration="600">
                <div className="info-item animation-item flex-align gap-20">
                    <span className="w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0">
                         <i className="animate__heartBeat ph-bold ph-clock"></i>
                        </span>
                    <div className="flex-grow-1">
                        <h5 className="mb-8 text-white fw-medium">Life time access</h5>
                        <span className="text-sm text-white">Learn on your schedule </span>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6"  data-aos="fade-up" data-aos-duration="800">
                <div className="info-item animation-item flex-align gap-20">
                    <span className="w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0">
                         <i className="animate__heartBeat ph-bold ph-certificate"></i>
                        </span>
                    <div className="flex-grow-1">
                        <h5 className="mb-8 text-white fw-medium">Get Certificate</h5>
                        <span className="text-sm text-white">When Courses Complete</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ========================== Info Section End =================================== */}

    {/* ============================ Category Section Start ==================================== */}
 <section className="category py-120 position-relative z-1 mash-bg-main mash-bg-main-two mash-reverse">
    <div className="container">
        <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book"></i></span>
                <h5 className="text-main-600 mb-0">Categories</h5>
            </div>
            <h2 className="mb-24 wow bounceIn">Elevate Your Learning Experience</h2>
            <p className=" wow bounceInUp">Our platform is built on the principles of innovation, quality, and inclusivity, aiming to provide a seamless learning</p>
        </div>
        <div className="category-item-slider">
            <div className="category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30 hover-border-main-600 transition-2" data-aos="fade-up" data-aos-duration="200">
                <span className="w-96 h-96 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24">
                    <img src="/assets/images/icons/category-icon1.png" className="animate__flipInY" alt="" />
                </span>
                <h4 className="display-four mb-16 text-neutral-700">Arts & Design</h4>
                <p className="text-neutral-500 text-lg text-line-2">Courses on nutrition, fitness training, yoga...</p>
                <a href="/courses" className="py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-600 hover-bg-main-600 hover-text-white hover-border-main-600">
                    14 Course
                </a>
            </div>
            <div className="category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30 hover-border-main-two-600 transition-2" data-aos="fade-up" data-aos-duration="400">
                <span className="w-96 h-96 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24">
                    <img src="/assets/images/icons/category-icon2.png" className="animate__flipInY" alt="" />
                </span>
                <h4 className="display-four mb-16 text-neutral-700">ArtsDesign</h4>
                <p className="text-neutral-500 text-lg text-line-2">Courses on nutrition, fitness training, yoga...</p>
                <a href="/courses" className="py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-two-600 hover-bg-main-two-600 hover-text-white hover-border-main-two-600">
                    15 Course
                </a>
            </div>
            <div className="category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-three-25 border border-neutral-30 hover-border-main-three-600 transition-2" data-aos="fade-up" data-aos-duration="600">
                <span className="w-96 h-96 flex-center d-inline-flex bg-white text-main-three-600 text-40 rounded-circle box-shadow-md mb-24">
                    <img src="/assets/images/icons/category-icon3.png" className="animate__flipInY" alt="" />
                </span>
                <h4 className="display-four mb-16 text-neutral-700">Data Science</h4>
                <p className="text-neutral-500 text-lg text-line-2">Courses on nutrition, fitness training, yoga...</p>
                <a href="/courses" className="py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-three-600 hover-bg-main-three-600 hover-text-white hover-border-main-three-600">
                    14 Course
                </a>
            </div>
            <div className="category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30 hover-border-main-two-600 transition-2" data-aos="fade-up" data-aos-duration="800">
                <span className="w-96 h-96 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24">
                    <img src="/assets/images/icons/category-icon4.png" className="animate__flipInY" alt="" />
                </span>
                <h4 className="display-four mb-16 text-neutral-700">Business & Finance</h4>
                <p className="text-neutral-500 text-lg text-line-2">Courses on nutrition, fitness training, yoga...</p>
                <a href="/courses" className="py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-two-600 hover-bg-main-two-600 hover-text-white hover-border-main-two-600">
                    21 Course
                </a>
            </div>
            <div className="category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-three-25 border border-neutral-30 hover-border-main-three-600 transition-2" data-aos="fade-up" data-aos-duration="400">
                <span className="w-96 h-96 flex-center d-inline-flex bg-white text-main-three-600 text-40 rounded-circle box-shadow-md mb-24">
                    <img src="/assets/images/icons/category-icon3.png" className="animate__flipInY" alt="" />
                </span>
                <h4 className="display-four mb-16 text-neutral-700">Data Science</h4>
                <p className="text-neutral-500 text-lg text-line-2">Courses on nutrition, fitness training, yoga...</p>
                <a href="/courses" className="py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-three-600 hover-bg-main-three-600 hover-text-white hover-border-main-three-600">
                    14 Course
                </a>
            </div>
            <div className="category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30 hover-border-main-two-600 transition-2" data-aos="fade-up" data-aos-duration="600">
                <span className="w-96 h-96 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24">
                    <img src="/assets/images/icons/category-icon2.png" className="animate__flipInY" alt="" />
                </span>
                <h4 className="display-four mb-16 text-neutral-700">ArtsDesign</h4>
                <p className="text-neutral-500 text-lg text-line-2">Courses on nutrition, fitness training, yoga...</p>
                <a href="/courses" className="py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-two-600 hover-bg-main-two-600 hover-text-white hover-border-main-two-600">
                    15 Course
                </a>
            </div>
        </div>
        <div className="flex-align gap-16 mt-40 justify-content-center">
            <button type="button" id="category-prev" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                <i className="ph ph-caret-left"></i>
            </button>
            <button type="button" id="category-next" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                <i className="ph ph-caret-right"></i>
            </button>
        </div>
    </div>
 </section>
{/* ============================ Category Section End ==================================== */}

    {/* ================================ About Two Section Start ==================================== */}
<section className="about-two py-120 position-relative z-1 bg-main-25">
    <div className="position-relative">
        <div className="container">
            <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
                <div className="col-xl-6 pe-xl-5">
                    <div className="about-two__thumb position-relative">
                        <img src="/assets/images/thumbs/about-two-img.png" className="rounded-16 cover-img  wow bounceIn" alt="" data-tilt data-tilt-max="10" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-full-page-listening />
                        
                        <span className="shadow-main-three w-80 h-80 flex-center bg-main-three-600 rounded-circle position-absolute inset-block-start-0 inset-inline-start-0 mt-40 ms--40 animation-upDown">
                            <img src="/assets/images/icons/bulb-icon.png" className="" alt="" />
                        </span>

                        <div className="offer-message  two px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16 animation-upDown">
                            <span className="flex-shrink-0 w-48 h-48 bg-purple-400 text-white text-2xl flex-center rounded-circle"><i className="ph ph-watch"></i></span>
                            <div>
                                <h6 className="mb-4">20% OFF</h6>
                                <span className="">For All Courses</span>
                            </div>
                        </div>

                        <div className="offer-message style-two  me-lg-0 me-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown">
                            <span className="flex-shrink-0 w-48 h-48 bg-main-two-600 text-white text-2xl flex-center rounded-circle">
                                <img src="/assets/images/icons/stars-white.png" alt="" />
                            </span>
                            <div>
                                <span className="text-lg text-neutral-700 d-block">
                                    4.6
                                    <span className="text-neutral-100">(2.4k)</span>
                                </span>
                                <span className="text-neutral-500">AVG Reviews</span>
                            </div>
                        </div>
                        
                        <div className="position-absolute inset-block-end-0 inset-inline-end-0 me-lg-0 me-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown">
                            <div className="text-center">
                                <img src="/assets/images/icons/circle-progress.png" className="d-sm-flex d-none mb-24" alt="" />
                                <h6 className="mb-4 text-neutral-700 text-2xl">Excelent</h6>
                                <span className="text-sm text-neutral-500">90% Satisfied Clients</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="about-two-content">
                        <div className="mb-40">
                            <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book"></i></span>
                                <h5 className="text-main-600 mb-0">Why Choose Us</h5>
                            </div>
                            <h2 className="mb-24 wow bounceIn">Over 16 Years in Distant learning for Skill Development</h2>
                            <p className="text-neutral-500 text-line-2 wow bounceInUp">We are passionate about transforming lives through education. Founded with a vision to make learning accessible to all, we believe in the power of knowledge to unlock opportunities and shape the future.</p>
                        </div>
    
                        <div className="grid-cols-2">
                            <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="600">
                                <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                                    <img src="/assets/images/icons/choose-us-icon1.png" className="animate__swing" alt="" />
                                </span>
                                <div className="flex-grow-1">
                                    <h6 className="text-neutral-800 text-xl fw-medium mb-8">Academic Excellence</h6>
                                    <p className="text-neutral-500 text-line-2">Through our curated courses, interactive content</p>
                                </div>
                            </div>
                            <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="800">
                                <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                                    <img src="/assets/images/icons/choose-us-icon2.png" className="animate__swing" alt="" />
                                </span>
                                <div className="flex-grow-1">
                                    <h6 className="text-neutral-800 text-xl fw-medium mb-8">Course Offerings</h6>
                                    <p className="text-neutral-500 text-line-2">Personalized learning paths, we empower learners to acquire </p>
                                </div>
                            </div>
                            <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="1000">
                                <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                                    <img src="/assets/images/icons/choose-us-icon3.png" className="animate__swing" alt="" />
                                </span>
                                <div className="flex-grow-1">
                                    <h6 className="text-neutral-800 text-xl fw-medium mb-8">Innovative Learning </h6>
                                    <p className="text-neutral-500 text-line-2">Immerse yourself in an innovative learning</p>
                                </div>
                            </div>
                            <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="1200">
                                <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md">
                                    <img src="/assets/images/icons/choose-us-icon4.png" className="animate__swing" alt="" />
                                </span>
                                <div className="flex-grow-1">
                                    <h6 className="text-neutral-800 text-xl fw-medium mb-8">Sustainability Initiative</h6>
                                    <p className="text-neutral-500 text-line-2">Be part of a university that cares about the planet. </p>
                                </div>
                            </div>
                        </div>
    
                        <div className="pt-40 border-top border-neutral-50 mt-40 border-dashed border-0">
                            <a href="/course" className="btn btn-main rounded-pill flex-align d-inline-flex gap-8">
                                Read More
                                <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
 </section>
{/* ================================ About Two Section End ==================================== */}

    {/* ============================= Features Two Section Start ============================== */}
<section className="features-two half-bg py-120 position-relative overflow-hidden">
    <img src="/assets/images/shapes/shape2.png" alt="" className="shape two animation-scalation" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="shape six animation-walking" />

    <div className="container">
        <div className="section-heading style-flex">
            <div className="section-heading__inner">
                <h2 className="mb-24 wow bounceInLeft">Build better growth skills, faster. Ignite Your Learning Journey</h2>
            </div>
            <div className="section-heading__content wow bounceInRight">
                <p className="text-line-2">Explore new skills, deepen existing passions, and get lost in creativity. What you find just might...</p>
                <a href="/course-list-view" className="item-hover__text flex-align d-inline-flex gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1 fw-semibold">
                    Read More
                    <i className="ph ph-arrow-right"></i>
                </a>
            </div>
        </div>
        <div className="row gy-4">
            <div className="col-lg-4 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-duration="200">
                <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
                    <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                        <img src="/assets/images/icons/features-two-icon1.png" className="animate__bounce" alt="" />
                    </span>
                    <h4 className="mb-16 transition-1 item-hover__text">Learn the latest skills</h4>
                    <p className="transition-1 item-hover__text text-line-2">Quality education shouldn't break the bank. We offer competitive pricing and payment options</p>
                    <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32"></span>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-duration="400">
                <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
                    <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                        <img src="/assets/images/icons/features-two-icon2.png" className="animate__bounce" alt="" />
                    </span>
                    <h4 className="mb-16 transition-1 item-hover__text">Get ready for a career</h4>
                    <p className="transition-1 item-hover__text text-line-2">Engage in dynamic and interactive learning experiences. Our courses are designed</p>
                    <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32"></span>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-duration="600">
                <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
                    <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                        <img src="/assets/images/icons/features-two-icon3.png" className="animate__bounce" alt="" />
                    </span>
                    <h4 className="mb-16 transition-1 item-hover__text">Earn a Certificate</h4>
                    <p className="transition-1 item-hover__text text-line-2">Join a vibrant and supportive learning community. Connect with fellow learners</p>
                    <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32"></span>
                </div>
            </div>
        </div>
    </div>
 </section>
{/* ============================= Features Two Section End ============================== */}

    {/* ============================== Certificate Two Section Start ===================================== */}
<section className="certificate-two py-120 position-relative z-1 mash-bg-main mash-bg-main-two mash-reverse">
    <div className="section-heading text-center">
        <h2 className="mb-24 wow bounceIn">Skills Certificate from the EduAll</h2>
        <p className=" wow bounceInUp">Online courses certification section design for showcase your certificate program features.</p>
    </div>
    <div className="position-relative">
        <div className="container">
            <div className="row align-items-center gy-4">
                <div className="col-lg-6 pe-lg-5">
                    <div className="certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28" data-aos="fade-up" data-aos-duration="200">
                        <div className="flex-align gap-20 mb-12">
                            <span className="w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl">
                                <i className="animate__wobble ph-bold ph-medal"></i>
                            </span>
                            <h5 className="mb-0">Learn from Industry Experts</h5>
                        </div>
                        <p className="text-neutral-700 text-line-2">Lorem ipsum dolor sit amet, conse ctetur adipisc amus ac iaculis arcu.</p>
                    </div>
                    <div className="certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28" data-aos="fade-up" data-aos-duration="400">
                        <div className="flex-align gap-20 mb-12">
                            <span className="w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl">
                                <i className="animate__wobble ph-bold ph-clock"></i>
                            </span>
                            <h5 className="mb-0">Learn Anytime, Anywhere</h5>
                        </div>
                        <p className="text-neutral-700 text-line-2">Lorem ipsum dolor sit amet, conse ctetur adipisc amus ac iaculis arcu.</p>
                    </div>
                    <div className="certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28" data-aos="fade-up" data-aos-duration="600">
                        <div className="flex-align gap-20 mb-12">
                            <span className="w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl">
                                <i className="animate__wobble ph-bold ph-star"></i>
                            </span>
                            <h5 className="mb-0">Free Resources</h5>
                        </div>
                        <p className="text-neutral-700 text-line-2">Lorem ipsum dolor sit amet, conse ctetur adipisc amus ac iaculis arcu.</p>
                    </div>
                    <div className="certificate-two-item animation-item" data-aos="fade-up" data-aos-duration="800">
                        <div className="flex-align gap-20 mb-12">
                            <span className="w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl">
                                <i className="animate__wobble ph-bold ph-chart-line-up"></i>
                            </span>
                            <h5 className="mb-0">Skill-based Learning</h5>
                        </div>
                        <p className="text-neutral-700 text-line-2">Lorem ipsum dolor sit amet, conse ctetur adipisc amus ac iaculis arcu.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="certificate-two__thumb">
                        <img src="/assets/images/thumbs/certificate-two-img.png" alt="" data-tilt data-tilt-max="10" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-full-page-listening />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ============================== Certificate Two Section End ===================================== */}

    {/* ================================== Explore Course Two Section Start =========================== */}
<section className="explore-course py-120 bg-main-25 position-relative z-1">
    <img src="/assets/images/shapes/shape2.png" alt="" className="shape six animation-scalation" />

    <div className="container">
        <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book"></i></span>
                <h5 className="text-main-600 mb-0">Popular Courses</h5>
            </div>
            <h2 className="mb-24 wow bounceIn">Pick A Course To Get Started</h2>
            <p className=" wow bounceInUp">Our platform is built on the principles of innovation, quality, and inclusivity, aiming to provide a seamless learning</p>
        </div>

        <div className="text-center">
            <div className="nav-tab-wrapper bg-white p-16 mb-40 d-inline-block" data-aos="zoom-out">
                <ul className="nav nav-pills common-tab gap-16" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8 active" id="pills-categories-tab" data-bs-toggle="pill" data-bs-target="#pills-categories" type="button" role="tab" aria-controls="pills-categories" aria-selected="true">
                            <i className="text-xl d-flex ph-bold ph-squares-four"></i>
                            All Categories
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8" id="pills-design-tab" data-bs-toggle="pill" data-bs-target="#pills-design" type="button" role="tab" aria-controls="pills-design" aria-selected="false">
                            <i className="text-xl d-flex ph-bold ph-magic-wand"></i>
                            Design
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8" id="pills-programming-tab" data-bs-toggle="pill" data-bs-target="#pills-programming" type="button" role="tab" aria-controls="pills-programming" aria-selected="false">
                            <i className="text-xl d-flex ph-bold ph-code"></i>
                            Programming
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8" id="pills-webDesign-tab" data-bs-toggle="pill" data-bs-target="#pills-webDesign" type="button" role="tab" aria-controls="pills-webDesign" aria-selected="false">
                            <i className="text-xl d-flex ph-bold ph-code"></i>
                            web Design
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8" id="pills-Academic-tab" data-bs-toggle="pill" data-bs-target="#pills-Academic" type="button" role="tab" aria-controls="pills-Academic" aria-selected="false">
                            <i className="text-xl d-flex ph-bold ph-graduation-cap"></i>
                            Academic
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8" id="pills-marketing-tab" data-bs-toggle="pill" data-bs-target="#pills-marketing" type="button" role="tab" aria-controls="pills-marketing" aria-selected="false">
                            <i className="text-xl d-flex ph-bold ph-chart-pie-slice"></i>
                            Marketing
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-categories" role="tabpanel" aria-labelledby="pills-categories-tab" tabIndex={0}>
                <div className="row gy-4">
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img1.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Marketing
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Digital Marketing</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img2.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Python
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Mastering Python : From Zero to Hero</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Graphic Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Beginner's Guide to Adobe Photoshop</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            ART Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">The Art of Public Speaking online Course</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img5.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            AI Machine
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Machine Learning AI</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img6.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Yoga
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Yoga for Wellness: A Comprehensive Guide</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="text-center">
    <a href="/course" className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8 mt-40">
        See All Courses
        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
    </a>
</div>
            </div>
            <div className="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab" tabIndex={0}>
                <div className="row gy-4">
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img1.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Marketing
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Digital Marketing</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img2.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Python
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Mastering Python : From Zero to Hero</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Graphic Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Beginner's Guide to Adobe Photoshop</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            ART Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">The Art of Public Speaking online Course</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img5.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            AI Machine
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Machine Learning AI</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img6.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Yoga
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Yoga for Wellness: A Comprehensive Guide</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="text-center">
    <a href="/course" className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8 mt-40">
        See All Courses
        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
    </a>
</div>
            </div>
            <div className="tab-pane fade" id="pills-programming" role="tabpanel" aria-labelledby="pills-programming-tab" tabIndex={0}>
                <div className="row gy-4">
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img1.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Marketing
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Digital Marketing</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img2.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Python
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Mastering Python : From Zero to Hero</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Graphic Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Beginner's Guide to Adobe Photoshop</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            ART Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">The Art of Public Speaking online Course</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img5.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            AI Machine
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Machine Learning AI</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img6.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Yoga
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Yoga for Wellness: A Comprehensive Guide</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="text-center">
    <a href="/course" className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8 mt-40">
        See All Courses
        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
    </a>
</div>
            </div>
            <div className="tab-pane fade" id="pills-webDesign" role="tabpanel" aria-labelledby="pills-webDesign-tab" tabIndex={0}>
                <div className="row gy-4">
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img1.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Marketing
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Digital Marketing</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img2.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Python
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Mastering Python : From Zero to Hero</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Graphic Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Beginner's Guide to Adobe Photoshop</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            ART Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">The Art of Public Speaking online Course</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img5.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            AI Machine
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Machine Learning AI</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img6.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Yoga
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Yoga for Wellness: A Comprehensive Guide</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="text-center">
    <a href="/course" className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8 mt-40">
        See All Courses
        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
    </a>
</div>
            </div>
            <div className="tab-pane fade" id="pills-Academic" role="tabpanel" aria-labelledby="pills-Academic-tab" tabIndex={0}>
                <div className="row gy-4">
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img1.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Marketing
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Digital Marketing</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img2.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Python
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Mastering Python : From Zero to Hero</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Graphic Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Beginner's Guide to Adobe Photoshop</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            ART Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">The Art of Public Speaking online Course</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img5.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            AI Machine
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Machine Learning AI</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img6.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Yoga
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Yoga for Wellness: A Comprehensive Guide</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="text-center">
    <a href="/course" className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8 mt-40">
        See All Courses
        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
    </a>
</div>
            </div>
            <div className="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab" tabIndex={0}>
                <div className="row gy-4">
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img1.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Marketing
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Digital Marketing</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img2.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Python
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Mastering Python : From Zero to Hero</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Graphic Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Beginner's Guide to Adobe Photoshop</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img3.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            ART Design
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">The Art of Public Speaking online Course</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="400">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img5.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            AI Machine
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Introduction to Machine Learning AI</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/course-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <span className="course-item__user border border-white flex-center w-60 h-60 bg-white text-main-600 rounded-circle text-2xl transition-2">
                    <img src="/assets/images/thumbs/user-two-img6.png" alt="" />
                </span>
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Yoga
                        </a>
                        <a href="/course" className="py-8 px-20 rounded-pill flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white">
                            <span className="text-xl d-flex">
                                <i className="ph-bold ph-squares-four"></i>
                            </span>
                            Beginner
                        </a>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Yoga for Wellness: A Comprehensive Guide</a>
                    </h4>
                    <div className="flex-align gap-28 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">20</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-clock"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">9h 36m</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                            <span className="text-neutral-700 text-lg fw-medium">1.5K</span>
                        </div>
                    </div>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h4 className="mb-0 text-main-two-600">$148</h4>
                    <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-lg text-neutral-700 fw-medium">
                            4.7
                            <span className="text-neutral-100 fw-normal">(6.4k)</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="text-center">
    <a href="/course" className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8 mt-40">
        See All Courses
        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
    </a>
</div>
            </div>
        </div>
    </div>
 </section>
{/* ================================== Explore Course Two Section End =========================== */}

    {/* ================================= testimonials Two Section Start ========================================= */}
<section className="testimonials-two py-120 position-relative z-1">
    <div className="container">

        <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book"></i></span>
                <h5 className="text-main-600 mb-0">Testimonials from Happy Learners</h5>
            </div>
            <h2 className="mb-24 wow bounceIn">What Our Students Say</h2>
            <p className=" wow bounceInUp">Our students' success stories speak volumes. Here are just a few testimonials from our satisfied learners</p>
        </div>
        
        <div className="testimonials-two-slider">
            <div className="testimonials-two-item bg-main-25 rounded-12 p-32" data-aos="fade-up" data-aos-duration="400">
                <ul className="flex-align gap-8 mb-16">
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star-half"></i></li>
                </ul>
                <p className="text-neutral-700 text-xl">"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"</p>
                <div className="flex-between gap-24 flex-wrap pt-28 mt-28 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <div className="flex-align gap-24 ">
                        <img src="/assets/images/thumbs/testi-img1.png" alt="" className="w-60 h-60 object-fit-cover rounded-circle" />
                        <div className="">
                            <h5 className="mb-8 fw-medium">John D.</h5>
                            <span className="text-neutral-700">Graphic Designer</span>
                        </div>
                    </div>
                    <span className="quate text-48 d-flex opacity-25">
                        <img src="/assets/images/icons/quote-icon.png" alt="" />
                    </span>
                </div>
            </div>
            <div className="testimonials-two-item bg-main-25 rounded-12 p-32" data-aos="fade-up" data-aos-duration="600">
                <ul className="flex-align gap-8 mb-16">
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star-half"></i></li>
                </ul>
                <p className="text-neutral-700 text-xl">"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."</p>
                <div className="flex-between gap-24 flex-wrap pt-28 mt-28 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <div className="flex-align gap-24 ">
                        <img src="/assets/images/thumbs/testi-img2.png" alt="" className="w-60 h-60 object-fit-cover rounded-circle" />
                        <div className="">
                            <h5 className="mb-8 fw-medium">Sarah L.</h5>
                            <span className="text-neutral-700">UI/UX Designer</span>
                        </div>
                    </div>
                    <span className="quate text-48 d-flex opacity-25">
                        <img src="/assets/images/icons/quote-icon.png" alt="" />
                    </span>
                </div>
            </div>
            <div className="testimonials-two-item bg-main-25 rounded-12 p-32" data-aos="fade-up" data-aos-duration="600">
                <ul className="flex-align gap-8 mb-16">
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                    <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star-half"></i></li>
                </ul>
                <p className="text-neutral-700 text-xl">"I was at first doubtful about web based learning, yet adjusted my viewpoint totally. The courses are very much planned to learn at my own speed is important."</p>
                <div className="flex-between gap-24 flex-wrap pt-28 mt-28 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <div className="flex-align gap-24 ">
                        <img src="/assets/images/thumbs/user-two-img3.png" alt="" className="w-60 h-60 object-fit-cover rounded-circle" />
                        <div className="">
                            <h5 className="mb-8 fw-medium">John Doe</h5>
                            <span className="text-neutral-700">Front End Developer</span>
                        </div>
                    </div>
                    <span className="quate text-48 d-flex opacity-25">
                        <img src="/assets/images/icons/quote-icon.png" alt="" />
                    </span>
                </div>
            </div>
        </div>
        <div className="flex-center gap-16 mt-40">
            <button type="button" id="testimonials-two-prev" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                <i className="ph ph-caret-left"></i>
            </button>
            <button type="button" id="testimonials-two-next" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                <i className="ph ph-caret-right"></i>
            </button>
        </div>
    </div>
 </section>
{/* ================================= testimonials Two Section End ========================================= */}

    {/* ================================ Join Community Section Start ============================= */}
<section className="join-community">
    <div className="container container--lg">
        <div className="bg-main-25 rounded-20 py-120 px-8">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="join-community__content">
                            <div className="mb-40">
                                <h2 className="mb-24 wow bounceIn">Join the EduAll Community: Start Now</h2>
                                <p className="text-neutral-500 text-line-2 wow bounceInUp">Ready to explore our courses firsthand? Sign up for a free trial lesson today and get a taste of the engaging.</p>
                            </div>

                            <form action="#">
                                <div className="mb-24 position-relative" data-aos="fade-up-left" data-aos-duration="400">
                                    <input type="text" className="bg-white text-black border border-transparent focus-border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100" placeholder="Enter Name..." />
                                    <span className="bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y">
                                        <i className="ph-bold ph-user-circle"></i>
                                    </span>
                                </div>
                                <div className="mb-24 position-relative" data-aos="fade-up-left" data-aos-duration="600">
                                    <input type="email" className="bg-white text-black border border-transparent focus-border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100" placeholder="Enter Email" />
                                    <span className="bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y">
                                        <i className="ph-bold ph-envelope-open"></i>
                                    </span>
                                </div>
                                <div className="mb-24 position-relative" data-aos="fade-up-left" data-aos-duration="800">
                                    <select className="bg-white text-black border border-transparent focus-border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100 text-neutral-300">
                                        <option value="1">Front End Developer</option>
                                        <option value="1">Back End Developer</option>
                                        <option value="1">UX/UI Designer</option>
                                    </select>
                                    <span className="bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y">
                                        <i className="ph-bold ph-book"></i>
                                    </span>
                                </div>
                                <div className="mt-40 position-relative" data-aos="fade-up-left" data-aos-duration="1000">
                                    <button type="submit" className="btn btn-main rounded-pill flex-align d-inline-flex gap-8">
                                        Join Now
                                        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                                    </button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="join-community__thumb text-end position-relative">
                            <img src="/assets/images/thumbs/join-community-img.png" alt="" className="wow bounceIn" data-tilt data-tilt-max="12" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-full-page-listening />

                            <div className="offer-message style-two px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown">
                                <span className="banner-box__icon flex-shrink-0 w-48 h-48 bg-purple-400 text-white text-2xl flex-center rounded-circle">
                                    <i className="ph-bold ph-users"></i>
                                </span>
                                <div className="text-start">
                                    <h6 className="mb-4">56K</h6>
                                    <span className="">All Students</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ================================ Join Community Section End ============================= */}

    {/* ======================================== Faq Section Start ========================== */}
 <section className="faq py-120 position-relative">
    <div className="container">
        <div className="row gy-4 align-items-center">
            <div className="col-lg-6 d-lg-block d-none">
                <div className="faq-thumb">
                    <img src="/assets/images/thumbs/faq-img.png" alt=""data-tilt data-tilt-max="6" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-full-page-listening />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="faq-content">
                    <div className="mb-40">
                        <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                            <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book"></i></span>
                            <h5 className="text-main-600 mb-0">Frequently Asked Questions (FAQs)</h5>
                        </div>
                        <h2 className="mb-24 wow bounceIn">Find Answers to Your Questions</h2>
                        <p className="text-neutral-500 text-line-2  wow bounceInUp">Welcome to our FAQs section! Here, we've compiled answers to some of the most common questions our users ask.</p>
                    </div>

                    <div className="accordion common-accordion" id="accordionExample">
                        <div className="accordion-item" data-aos="fade-up-left" data-aos-duration="400">
                          <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How do I enroll in a course?
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="accordion-body__desc">Once you enroll in a course, you'll have unlimited access to the course materials for as long as the course is available on our platform.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-up-left" data-aos-duration="600">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Can I access my courses on mobile devices?
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="accordion-body__desc">Once you enroll in a course, you'll have unlimited access to the course materials for as long as the course is available on our platform.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-up-left" data-aos-duration="800">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How long do I have access to a course?
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="accordion-body__desc">Once you enroll in a course, you'll have unlimited access to the course materials for as long as the course is available on our platform.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-up-left" data-aos-duration="1000">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What if I need help or have questions during the course?
                            </button>
                          </h2>
                          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="accordion-body__desc">Once you enroll in a course, you'll have unlimited access to the course materials for as long as the course is available on our platform.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-up-left" data-aos-duration="1200">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Do you offer refunds if I'm not satisfied with a course?
                            </button>
                          </h2>
                          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className="accordion-body__desc">Once you enroll in a course, you'll have unlimited access to the course materials for as long as the course is available on our platform.</p>
                            </div>
                          </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
 </section>
{/* ======================================== Faq Section End ========================== */}
      
      <Footer />
    </>
  );
}
