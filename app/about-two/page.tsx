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
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> About Us 02</h1>
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
                            <span className="text-main-two-600"> About Us 02 </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

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
      
      <Footer />
    </>
  );
}
