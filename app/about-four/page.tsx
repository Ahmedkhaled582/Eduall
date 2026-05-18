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
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> About Us 04</h1>
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
                            <span className="text-main-two-600"> About Us 04 </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* ================================ About Four Start =============================== */}
<section className="about-four py-120 position-relative z-1 overflow-hidden">
    <img src="/assets/images/shapes/shape2.png" alt="" className="shape one animation-scalation" />

    <div className="position-relative">
        <div className="container">
            <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
                <div className="col-xl-6 pe-xl-5">
                    <div className="about-two__thumb position-relative pe-0 me-xl-5">
                        <img src="/assets/images/thumbs/about-four-img.png" className="rounded-16 cover-img" alt="" data-tilt data-tilt-max="6" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-transition="1s" data-tilt-full-page-listening />
                        <div className="offer-message animation-item style-two px-24 py-12 inset-inline-end--64 rounded-6 border border-white bg-success-600 fw-medium flex-align d-inline-flex gap-16 box-shadow-lg">
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
                                <span className="flex-shrink-0 w-56 h-56 flex-center d-inline-flex bg-main-50 text-main-600 text-32 rounded-circle box-shadow-md">
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
                                <span className="flex-shrink-0 w-56 h-56 flex-center d-inline-flex bg-success-100 text-success-600 text-32 rounded-circle box-shadow-md">
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
                                <span className="flex-shrink-0 w-56 h-56 flex-center d-inline-flex bg-warning-100 text-warning-600 text-32 rounded-circle box-shadow-md">
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
                                <span className="flex-shrink-0 w-56 h-56 flex-center d-inline-flex bg-info-100 text-info-600 text-32 rounded-circle box-shadow-md">
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
                                Find Tuition
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
<section className="counter-three py-120 bg-main-25">
    <div className="container">
        <div className="p-16 rounded-16 bg-white">
            <div className="row gy-4">
                <div className="col-xl-3 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-duration="200">
                    <div className="counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30">
                        <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24">
                            <i className="animate__wobble ph ph-users"></i>
                        </span>
                        <h2 className="display-four mb-16 text-neutral-700 counter">1.6K</h2>
                        <span className="text-neutral-500 text-lg">Total Instructors </span>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-duration="400">
                    <div className="counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30">
                        <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24">
                            <i className="animate__wobble ph ph-users-three"></i>
                        </span>
                        <h2 className="display-four mb-16 text-neutral-700 counter"> 55.6K</h2>
                        <span className="text-neutral-500 text-lg">Students till date</span>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-duration="600">
                    <div className="counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30">
                        <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24">
                            <i className="animate__wobble ph ph-thumbs-up"></i>
                        </span>
                        <h2 className="display-four mb-16 text-neutral-700 counter">45.8K</h2>
                        <span className="text-neutral-500 text-lg">Satisfaction Rate</span>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-duration="800">
                    <div className="counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30">
                        <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24">
                            <i className="animate__wobble ph ph-envelope-simple-open"></i>
                        </span>
                        <h2 className="display-four mb-16 text-neutral-700 counter">500+</h2>
                        <span className="text-neutral-500 text-lg">Total Campuses</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>
{/* ================================= Counter Section Three End ============================== */}
    
    {/* ====================================== Tutor Section Start ======================================= */}
<section className="tutor-two py-120 position-relative z-1 background-img" data-background-image="assets/images/bg/gradient-bg-2.png">
    <div className="container">

        <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16">
                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book"></i></span>
                <h5 className="text-main-600 mb-0">Our Popular Tutors</h5>
            </div>
            <h2 className="mb-24">What Our Students Say</h2>
            <p className="">Our tutoring sessions are interactive and engaging, focusing on the student's specific needs.</p>
        </div>
        
        <div className="tutor-slider">
            <div>
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-20">
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
            </div>
            <div>
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-20">
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
            </div>
            <div>
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-20">
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
            </div>
            <div>
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-20">
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
{/* ====================================== Tutor Section End ======================================= */}

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

    {/* ========================== Brand Section Start =========================== */}
 <div className="brand wow fadeInUpBig" data-wow-duration="1s" data-wow-delay=".5s">
    <div className="container container--lg">
        <div className="brand-box py-80 px-16 ">
            <h5 className="mb-40 text-center text-neutral-500">TRUSTED BY OVER 17,300 GREAT TEAMS</h5>
            <div className="container">
                <div className="brand-slider">
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img1.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img2.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img3.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img4.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img5.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img6.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img7.png" alt="" />
                    </div>
                    <div className="brand-slider__item px-24">
                        <img src="/assets/images/thumbs/brand-img3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
{/* ========================== Brand Section End =========================== */}
      
      <Footer />
    </>
  );
}
