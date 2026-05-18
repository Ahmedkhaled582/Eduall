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
      
      {/* ================================== Banner Three Start =============================== */}
<section className="banner-three position-relative responsive-arrow overflow-hidden">
    <button type="button" id="banner-three-prev" className="slick-arrow-prev slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 text-2xl hover-bg-main-600 hover-text-white transition-1 w-56 h-56 position-absolute ms-16 inset-inline-start-0 top-50 translate-middle-y z-3">
        <i className="ph-bold ph-arrow-left"></i>
    </button>
    <button type="button" id="banner-three-next" className="slick-arrow-next slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 text-2xl hover-bg-main-600 hover-text-white transition-1 w-56 h-56 position-absolute me-16 inset-inline-end-0 top-50 translate-middle-y z-3">
        <i className="ph-bold ph-arrow-right"></i>
    </button>

    <div className="banner-three__slider ">
        <div className="banner-three__item background-img bg-img linear-overlay position-relative" data-background-image="assets/images/thumbs/banner-three-img1.png">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-8 col-lg-10 z-1">
                        <div className="banner-content pe-md-4">
                            <div className="flex-align gap-8 mb-16 wow bounceInDown">
                                <span className="text-yellow-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                                <h5 className="text-yellow-600 mb-0 fw-medium">Elevate Your Learning</h5>
                            </div>
                            <h1 className="display2 mb-24 text-white fw-medium wow bounceInLeft">
                                Empowering Minds, <span className="text-yellow-600  wow bounceInRight" data-wow-duration="2s" data-wow-delay=".5s"> Shaping </span> Futures 
                            </h1>
                            <p className="text-white text-line-2 wow bounceInDown">Welcome to EduAll, where learning knows no bounds. Whether you're a student, professional, or lifelong learner...</p>
                        </div>
                        <div className="buttons-wrapper flex-align flex-wrap gap-24 mt-40">
                            <a href="/sign-in" className="btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                                Apply Now
                                <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                            </a>

                            <div className="flex-align gap-16  wow bounceInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                <a href="https://www.youtube.com/watch?v=MFLVmAE4cqg" className="play-button flex-shrink-0 position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl">
                                    <i className="ph-fill ph-play"></i>
                                </a>
                                <a href="/course" className="text-white hover-text-decoration-underline hover-text-main-two-600">See All University</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner-three__item background-img bg-img linear-overlay position-relative" data-background-image="assets/images/thumbs/banner-three-img2.png">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-8 col-lg-10 z-1">
                        <div className="banner-content pe-md-4">
                            <div className="flex-align gap-8 mb-16 wow bounceInDown">
                                <span className="text-yellow-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                                <h5 className="text-yellow-600 mb-0 fw-medium">Elevate Your Learning</h5>
                            </div>
                            <h1 className="display2 mb-24 text-white fw-medium wow bounceInLeft">
                                Engaging Personalities, 
                                <span className="text-yellow-600  wow bounceInRight" data-wow-duration="2s" data-wow-delay=".5s"> Molding </span> Fates 
                            </h1>
                            <p className="text-white text-line-2 wow bounceInDown">Welcome to EduAll, where learning knows no bounds. Whether you're a student, professional, or lifelong learner...</p>
                        </div>
                        <div className="buttons-wrapper flex-align flex-wrap gap-24 mt-40">
                            <a href="/sign-in" className="btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                                Apply Now
                                <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                            </a>

                            <div className="flex-align gap-16  wow bounceInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                <a href="https://www.youtube.com/watch?v=MFLVmAE4cqg" className="play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl">
                                    <i className="ph-fill ph-play"></i>
                                </a>
                                <a href="/course" className="text-white hover-text-decoration-underline hover-text-main-two-600">See All University</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner-three__item background-img bg-img linear-overlay position-relative" data-background-image="assets/images/thumbs/banner-three-img3.png">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-8 col-lg-10 z-1">
                        <div className="banner-content pe-md-4">
                            <div className="flex-align gap-8 mb-16 wow bounceInDown">
                                <span className="text-yellow-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                                <h5 className="text-yellow-600 mb-0 fw-medium">Elevate Your Learning</h5>
                            </div>
                            <h1 className="display2 mb-24 text-white fw-medium wow bounceInLeft">
                                Attracting Characters,  
                                <span className="text-yellow-600  wow bounceInRight" data-wow-duration="2s" data-wow-delay=".5s"> Adornment </span>  Fates
                            </h1>
                            <p className="text-white text-line-2 wow bounceInDown">Welcome to EduAll, where learning knows no bounds. Whether you're a student, professional, or lifelong learner...</p>
                        </div>
                        <div className="buttons-wrapper flex-align flex-wrap gap-24 mt-40">
                            <a href="/sign-in" className="btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                                Apply Now
                                <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                            </a>

                            <div className="flex-align gap-16  wow bounceInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                <a href="https://www.youtube.com/watch?v=MFLVmAE4cqg" className="play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl">
                                    <i className="ph-fill ph-play"></i>
                                </a>
                                <a href="/course" className="text-white hover-text-decoration-underline hover-text-main-two-600">See All University</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ================================== Banner Three End =============================== */}

    {/* ========================== Info Two Section Start =================================== */}
<section className="info-two half-bg">
    <div className="container">
        <div className="bg-white box-shadow-md rounded-16 p-16">
            <div className="row gy-4 justify-content-center">
                <div className="col-xl-4 col-sm-6" data-aos="fade-up" data-aos-duration="400">
                    <div className="info-two-item flex-align animation-item h-100 gap-28 border border-neutral-30 rounded-12 bg-main-25">
                        <span className="flex-shrink-0">
                            <img src="/assets/images/icons/info-two-icon1.png" className="animate__heartBeat" alt="" />
                        </span>
                        <div>
                            <h4 className="mb-16">Scholarship Facility</h4>
                            <p className="text-neutral-700">These facilities provide students with an inspiring </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6" data-aos="fade-up" data-aos-duration="600">
                    <div className="info-two-item flex-align animation-item h-100 gap-28 border border-neutral-30 rounded-12 bg-main-two-25">
                        <span className="flex-shrink-0">
                            <img src="/assets/images/icons/info-two-icon2.png" className="animate__heartBeat" alt="" />
                        </span>
                        <div>
                            <h4 className="mb-16">Esteemed Faculty</h4>
                            <p className="text-neutral-700">Our university boasts a team of renowned faculty members</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6" data-aos="fade-up" data-aos-duration="800">
                    <div className="info-two-item flex-align animation-item h-100 gap-28 border border-neutral-30 rounded-12 bg-main-three-25">
                        <span className="flex-shrink-0">
                            <img src="/assets/images/icons/info-two-icon3.png" className="animate__heartBeat" alt="" />
                        </span>
                        <div>
                            <h4 className="mb-16">Diverse Programs</h4>
                            <p className="text-neutral-700">From undergraduate degrees to postgraduate research </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ========================== Info Two Section End =================================== */}

    {/* ================================ About Three Section Start ==================================== */}
<section className="about-three py-120 position-relative z-1 bg-main-25 overflow-hidden">
    <div className="position-relative">
        <div className="container">
            <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
                <div className="col-xl-6 pe-xl-5">
                    <div className="about-three-thumbs position-relative me-xxl-5">
                        <div className="row gy-4">
                            <div className="col-sm-8">
                                <img src="/assets/images/thumbs/about-three-img1.png" alt="" className="about-three-thumbs__one rounded-16 w-100"data-tilt data-tilt-max="16" data-tilt-speed="500" data-tilt-perspective="5000" />
                            </div>
                            <div className="col-sm-4">
                                <div className="bg-main-three-600 rounded-16 text-center py-24 px-2 mb-24" data-tilt data-tilt-max="10" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-transition="1s" data-tilt-full-page-listening>    
                                    <h2 className="mb-16 text-white counter">26K+</h2>
                                    <span className="text-white">Students Active Our University</span>
                                    <div className="enrolled-students style-two mt-12">
                                        <img src="/assets/images/thumbs/enroll-student-img1.png" alt="" className="w-32 h-32 rounded-circle object-fit-cove transition-2" />
                                        <img src="/assets/images/thumbs/enroll-student-img2.png" alt="" className="w-32 h-32 rounded-circle object-fit-cove transition-2" />
                                        <img src="/assets/images/thumbs/enroll-student-img3.png" alt="" className="w-32 h-32 rounded-circle object-fit-cove transition-2" />
                                        <img src="/assets/images/thumbs/enroll-student-img4.png" alt="" className="w-32 h-32 rounded-circle object-fit-cove transition-2" />
                                        <img src="/assets/images/thumbs/enroll-student-img5.png" alt="" className="w-32 h-32 rounded-circle object-fit-cove transition-2" />
                                        <img src="/assets/images/thumbs/enroll-student-img6.png" alt="" className="w-32 h-32 rounded-circle object-fit-cove transition-2" />
                                    </div>
                                </div>
                                <img src="/assets/images/thumbs/about-three-img2.png" alt="" className="about-three-thumbs__two rounded-16 w-100" data-tilt data-tilt-max="10" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-full-page-listening />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="about-three-content">
                        <div className="mb-40">
                            <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                                <h5 className="text-main-600 mb-0">About University Us</h5>
                            </div>
                            <h2 className="mb-24 wow bounceInRight">Our Commitment to Diversity Leadership and Governance</h2>
                            <p className="text-neutral-500 text-line-2 wow bounceInUp">We embrace innovation and creativity as catalysts for positive change, driving forward-thinking research, teaching methodologies</p>
                        </div>
    
                        <div className="grid-cols-2">
                            <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="600">
                                <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-16 box-shadow-md">
                                    <img src="/assets/images/icons/choose-us-icon1.png" className="animate__swing" alt="" />
                                </span>
                                <div className="flex-grow-1">
                                    <h6 className="text-neutral-800 text-xl fw-medium mb-8">Undergraduate</h6>
                                    <div className="flex-align gap-8 text-neutral-500">
                                        <i className="d-flex text-lg ph-bold ph-clock"></i>
                                        Onsite
                                    </div>
                                </div>
                            </div>
                            <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="800">
                                <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-16 box-shadow-md">
                                    <img src="/assets/images/icons/choose-us-icon2.png" className="animate__swing" alt="" />
                                </span>
                                <div className="flex-grow-1">
                                    <h6 className="text-neutral-800 text-xl fw-medium mb-8">Graduate</h6>
                                    <div className="flex-align gap-8 text-neutral-500">
                                        <i className="d-flex text-lg ph-bold ph-clock"></i>
                                        Onsite
                                    </div>
                                </div>
                            </div>
                            <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="1000">
                                <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-16 box-shadow-md">
                                    <img src="/assets/images/icons/choose-us-icon3.png" className="animate__swing" alt="" />
                                </span>
                                <div className="flex-grow-1">
                                    <h6 className="text-neutral-800 text-xl fw-medium mb-8">Post Graduate</h6>
                                    <div className="flex-align gap-8 text-neutral-500">
                                        <i className="d-flex text-lg ph-bold ph-clock"></i>
                                        Onsite
                                    </div>
                                </div>
                            </div>
                            <div className="flex-align align-items-start gap-20 animation-item" data-aos="fade-up" data-aos-duration="1200">
                                <span className="flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-16 box-shadow-md">
                                    <img src="/assets/images/icons/choose-us-icon4.png" className="animate__swing" alt="" />
                                </span>
                                <div className="flex-grow-1">
                                    <h6 className="text-neutral-800 text-xl fw-medium mb-8">Online education</h6>
                                    <div className="flex-align gap-8 text-neutral-500">
                                        <i className="d-flex text-lg ph-bold ph-clock"></i>
                                        Onsite
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="pt-40 border-top border-neutral-50 mt-40 border-dashed border-0">
                            <a href="/about" className="btn btn-main rounded-pill flex-align d-inline-flex gap-8">
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
{/* ================================ About Three Section End ==================================== */}

    {/* =================================== Video Section Start ============================= */}
 <section className="video pt-120">
    <div className="container">
        <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16">
                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                <h5 className="text-main-600 mb-0">Campus Life</h5>
            </div>
            <h2 className="mb-24 wow bounceIn">Campus Highlights</h2>
            <p className="wow bounceInDown">Welcome to our vibrant campus, where learning comes to life in a dynamic and inspiring environment.</p>
        </div>
    </div>

        <div className="video-img position-relative half-bg"> 
            <div className="container wow bounceIn">
                <img src="/assets/images/thumbs/video-img.png" className="rounded-12 cover-img" alt="" data-tilt data-tilt-max="4" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-transition="1s" />
                <a href="https://www.youtube.com/watch?v=MFLVmAE4cqg" className="play-button position-absolute start-50 top-50 translate-middle z-1 w-72 h-72 flex-center bg-main-two-600 text-white rounded-circle text-2xl">
                    <i className="ph-fill ph-play"></i>
                </a>
            </div>
        </div>
 </section>
{/* =================================== Video Section End ============================= */}

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

    {/* ============================= Faculty Section Start ================================= */}
<section className="faculty pb-120 bg-main-25">
    <div className="container">
        <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                <h5 className="text-main-600 mb-0">Explore Faculty Of University</h5>
            </div>
            <h2 className="mb-24 wow bounceIn">Top Listed Faculty</h2>
            <p className=" wow bounceInUp">Certainly cordially, sweetness perceived day's end; why knowledge, a perception to cherish deeply.</p>
        </div>
        <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="200">
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                    <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                        <a href="/course-details" className="w-100 h-100">
                            <img src="/assets/images/thumbs/faculty-img1.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
                    </div>
                    <div className="pt-32 pb-24 px-16 position-relative">
                        <div className="">
                            <span className="text-up py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium">Admission Open</span>
                            <div className="flex-between gap-8 flex-wrap mb-16">
                                <a href="/course" className="py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                                    <span className="text-xl d-flex">Explore 4,000+ Free Online
                                        <i className="ph-bold ph-squares-four"></i>
                                    </span>
                                    CSE
                                </a>
                                <div className="flex-align gap-4">
                                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-lg text-neutral-700">
                                        4.7
                                        <span className="text-neutral-100">(6.4k)</span>
                                    </span>
                                </div>
                            </div>
                            <h4 className="mb-28">
                                <a href="/course-details" className="link text-line-2">Faculty of Engineering Admissions</a>
                            </h4>
                            <ul className="check-list">
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Playground</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Library</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Canteen</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Stationary</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Hostel</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                            <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                Apply Now
                                <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="400">
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                    <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                        <a href="/course-details" className="w-100 h-100">
                            <img src="/assets/images/thumbs/faculty-img2.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
                    </div>
                    <div className="pt-32 pb-24 px-16 position-relative">
                        <div className="">
                            <span className="text-up py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">Admission Closed</span>
                            <div className="flex-between gap-8 flex-wrap mb-16">
                                <a href="/course" className="py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                                    <span className="text-xl d-flex">
                                        <i className="ph-bold ph-squares-four"></i>
                                    </span>
                                    ARTS
                                </a>
                                <div className="flex-align gap-4">
                                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-lg text-neutral-700">
                                        4.7
                                        <span className="text-neutral-100">(6.4k)</span>
                                    </span>
                                </div>
                            </div>
                            <h4 className="mb-28">
                                <a href="/course-details" className="link text-line-2">Arts and Humanities Admissions</a>
                            </h4>
                            <ul className="check-list">
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Playground</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Library</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Canteen</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Stationary</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Hostel</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                            <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                Apply Now
                                <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="600">
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                    <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                        <a href="/course-details" className="w-100 h-100">
                            <img src="/assets/images/thumbs/faculty-img3.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
                    </div>
                    <div className="pt-32 pb-24 px-16 position-relative">
                        <div className="">
                            <span className="text-up py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium">Admission Open</span>
                            <div className="flex-between gap-8 flex-wrap mb-16">
                                <a href="/course" className="py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                                    <span className="text-xl d-flex">
                                        <i className="ph-bold ph-squares-four"></i>
                                    </span>
                                    BBA
                                </a>
                                <div className="flex-align gap-4">
                                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-lg text-neutral-700">
                                        4.7
                                        <span className="text-neutral-100">(6.4k)</span>
                                    </span>
                                </div>
                            </div>
                            <h4 className="mb-28">
                                <a href="/course-details" className="link text-line-2">Social And Sciences Admissions</a>
                            </h4>
                            <ul className="check-list">
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Playground</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Library</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Canteen</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Stationary</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Hostel</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                            <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                Apply Now
                                <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="200">
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                    <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                        <a href="/course-details" className="w-100 h-100">
                            <img src="/assets/images/thumbs/faculty-img4.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
                    </div>
                    <div className="pt-32 pb-24 px-16 position-relative">
                        <div className="">
                            <span className="text-up py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">Admission Closed</span>
                            <div className="flex-between gap-8 flex-wrap mb-16">
                                <a href="/course" className="py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                                    <span className="text-xl d-flex">
                                        <i className="ph-bold ph-squares-four"></i>
                                    </span>
                                    CSE
                                </a>
                                <div className="flex-align gap-4">
                                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-lg text-neutral-700">
                                        4.7
                                        <span className="text-neutral-100">(6.4k)</span>
                                    </span>
                                </div>
                            </div>
                            <h4 className="mb-28">
                                <a href="/course-details" className="link text-line-2">Computer Science Admissions</a>
                            </h4>
                            <ul className="check-list">
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Playground</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Library</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Canteen</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Stationary</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Hostel</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                            <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                Apply Now
                                <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="400">
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                    <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                        <a href="/course-details" className="w-100 h-100">
                            <img src="/assets/images/thumbs/faculty-img5.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
                    </div>
                    <div className="pt-32 pb-24 px-16 position-relative">
                        <div className="">
                            <span className="text-up py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium">Admission Open</span>
                            <div className="flex-between gap-8 flex-wrap mb-16">
                                <a href="/course" className="py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                                    <span className="text-xl d-flex">
                                        <i className="ph-bold ph-squares-four"></i>
                                    </span>
                                    BBA
                                </a>
                                <div className="flex-align gap-4">
                                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-lg text-neutral-700">
                                        4.7
                                        <span className="text-neutral-100">(6.4k)</span>
                                    </span>
                                </div>
                            </div>
                            <h4 className="mb-28">
                                <a href="/course-details" className="link text-line-2">Business and Economics Admissions</a>
                            </h4>
                            <ul className="check-list">
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Playground</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Library</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Canteen</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Stationary</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Hostel</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                            <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                Apply Now
                                <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="600">
                <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                    <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                        <a href="/course-details" className="w-100 h-100">
                            <img src="/assets/images/thumbs/faculty-img6.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
                    </div>
                    <div className="pt-32 pb-24 px-16 position-relative">
                        <div className="">
                            <span className="text-up py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">Admission Closed</span>
                            <div className="flex-between gap-8 flex-wrap mb-16">
                                <a href="/course" className="py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white">
                                    <span className="text-xl d-flex">
                                        <i className="ph-bold ph-squares-four"></i>
                                    </span>
                                    Medical
                                </a>
                                <div className="flex-align gap-4">
                                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-lg text-neutral-700">
                                        4.7
                                        <span className="text-neutral-100">(6.4k)</span>
                                    </span>
                                </div>
                            </div>
                            <h4 className="mb-28">
                                <a href="/course-details" className="link text-line-2">Medicine and Health Sciences Admissions</a>
                            </h4>
                            <ul className="check-list">
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Playground</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Library</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Canteen</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Stationary</span>
                                </li>
                                <li className="flex-align gap-8">
                                    <img src="/assets/images/icons/check.png" alt="" />
                                    <span className="text-neutral-500 text-md">Hostel</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                            <a href="/contact" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                Apply Now
                                <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center mt-40">
            <a href="/about" className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8">
                See All University
                <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
            </a>
        </div>
    </div>
</section>
{/* ============================= Faculty Section End ================================= */}

    {/* ============================== Choose Us Two Section Start ================================== */}
<section className="choose-us-two pt-120">
    <div className="container">
        <div className="row align-items-end">
            <div className="col-lg-7 pe-xl-5">
                <div className="pb-80 mb-lg-5 me-lg-5">
                    <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                        <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                        <h5 className="text-main-600 mb-0">Why Choose Us</h5>
                    </div>
                    <h2 className="mb-24 wow bounceIn">We Provide a Useful, Innovative and cross-disciplinary education</h2>
                    <p className="text-neutral-500 text-line-2 wow bounceInUp">We embrace innovation and creativity as catalysts for positive change, driving forward-thinking research, teaching methodologies.</p>
                    <p className="text-neutral-500 text-line-2 mt-24 wow bounceInUp">Certainly cordially, sweetness perceived day's end; why knowledge, a perception to cherish deeply.</p>
    
                    <a href="/about" className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 mt-40">
                        Read More
                        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="pt-40 pb-90 px-60 bg-neutral-900 rounded-top-4" data-aos="fade-up-left">
                    <h4 className="mb-28 pb-28 border-bottom border-top-0 border-start-0 border-end-0 border-opacity-25 border-white border-dashed text-white">Important Link</h4>
                    <ul>
                        <li className="mb-24">
                            <a href="/contact" className="flex-align gap-12 text-white hover-text-decoration-underline">
                                Admission Notice
                                <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl"></i>
                            </a>
                        </li>
                        <li className="mb-24">
                            <a href="/contact" className="flex-align gap-12 text-white hover-text-decoration-underline">
                                Summer Admission 2024
                                <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl"></i>
                            </a>
                        </li>
                        <li className="mb-24">
                            <a href="/contact" className="flex-align gap-12 text-white hover-text-decoration-underline">
                                Upcoming Seminar
                                <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl"></i>
                            </a>
                        </li>
                        <li className="mb-24">
                            <a href="/contact" className="flex-align gap-12 text-white hover-text-decoration-underline">
                                Download Curriculum
                                <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl"></i>
                            </a>
                        </li>
                        <li className="mb-24">
                            <a href="/contact" className="flex-align gap-12 text-white hover-text-decoration-underline">
                                Alumni Seminar
                                <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl"></i>
                            </a>
                        </li>
                        <li className="mb-0">
                            <a href="/contact" className="flex-align gap-12 text-white hover-text-decoration-underline">
                                Exam Notice
                                <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ============================== Choose Us Two Section End ================================== */}

    {/* ===================================== Testimonials Section Three Start ================================= */}
<section className="testimonials-three py-120 bg-main-25 position-relative z-1 overflow-hidden">
    <img src="/assets/images/shapes/shape2.png" alt="" className="shape two animation-scalation" />
    <img src="/assets/images/shapes/shape6.png" alt="" className="shape four animation-scalation" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="shape one animation-scalation" />

    <div className="container">
        <div className="row gy-4 align-items-center flex-wrap-reverse">
            <div className="col-xl-7">
                <div className="testimonials-three-slider">
                    <div className="testimonials-three-item bg-white p-24 rounded-12 box-shadow-md">
                        <div className="w-90 h-90 rounded-circle position-relative mb-4">
                            <img src="/assets/images/thumbs/testimonials-three-img2.png" alt="" className="cover-img rounded-circle" />
                            <span className="w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5">
                                <img src="/assets/images/icons/quote-two-icon.png" alt="" />
                            </span>
                        </div>
                        <p className="text-neutral-500 my-24">Attending [University Name] was one of the best decisions I've made. The </p>
                        <ul className="flex-align gap-8 mb-16">
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star-half"></i></li>
                        </ul>
                        <h4 className="mb-16 text-lg">Ronald Richards</h4>
                        <span className="text-neutral-500">Student</span>
                    </div>
                    <div className="testimonials-three-item bg-white p-24 rounded-12 box-shadow-md">
                        <div className="w-90 h-90 rounded-circle position-relative mb-4">
                            <img src="/assets/images/thumbs/testimonials-three-img1.png" alt="" className="cover-img rounded-circle" />
                            <span className="w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5">
                                <img src="/assets/images/icons/quote-two-icon.png" alt="" />
                            </span>
                        </div>
                        <p className="text-neutral-500 my-24">"The faculty at are not only experts in their fields but teaching students."</p>
                        <ul className="flex-align gap-8 mb-16">
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star-half"></i></li>
                        </ul>
                        <h4 className="mb-16 text-lg">Brooklyn Simmons</h4>
                        <span className="text-neutral-500">Student</span>
                    </div>
                    <div className="testimonials-three-item bg-white p-24 rounded-12 box-shadow-md">
                        <div className="w-90 h-90 rounded-circle position-relative mb-4">
                            <img src="/assets/images/thumbs/testimonials-three-img3.png" alt="" className="cover-img rounded-circle" />
                            <span className="w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5">
                                <img src="/assets/images/icons/quote-two-icon.png" alt="" />
                            </span>
                        </div>
                        <p className="text-neutral-500 my-24">As a faculty member at [University Name], I've had the privilege of working</p>
                        <ul className="flex-align gap-8 mb-16">
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star-half"></i></li>
                        </ul>
                        <h4 className="mb-16 text-lg">Courtney Henry</h4>
                        <span className="text-neutral-500">Student</span>
                    </div>
                    <div className="testimonials-three-item bg-white p-24 rounded-12 box-shadow-md">
                        <div className="w-90 h-90 rounded-circle position-relative mb-4">
                            <img src="/assets/images/thumbs/testimonials-three-img3.png" alt="" className="cover-img rounded-circle" />
                            <span className="w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5">
                                <img src="/assets/images/icons/quote-two-icon.png" alt="" />
                            </span>
                        </div>
                        <p className="text-neutral-500 my-24">"The faculty at are not only experts in their fields but teaching students."</p>
                        <ul className="flex-align gap-8 mb-16">
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star"></i></li>
                            <li className="text-warning-600 text-xl d-flex"><i className="ph-fill ph-star-half"></i></li>
                        </ul>
                        <h4 className="mb-16 text-lg">Brooklyn Simmons</h4>
                        <span className="text-neutral-500">Student</span>
                    </div>
                </div>
            </div>

            <div className="col-xl-5 ps-xl-5">
                <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                    <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                    <h5 className="text-main-600 mb-0">Testimonials</h5>
                </div>
                <h2 className="mb-24 wow bounceInRight">What Our Community Says</h2>
                <p className="text-neutral-500 text-line-4 wow bounceInUp">Welcome to our testimonial section, where members of our university community share their experiences and insights about life at EduAll. We invite you to join us and be part of our inspiring journey of learning, growth, and achievement.</p>
                <div className="flex-align gap-16 mt-40">
                    <button type="button" id="testimonials-three-prev" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                        <i className="ph ph-caret-left"></i>
                    </button>
                    <button type="button" id="testimonials-three-next" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                        <i className="ph ph-caret-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ===================================== Testimonials Section Three End ================================= */}

    {/* ===================================== Event Section Start ================================= */}
<section className="event py-120 overflow-hidden">
    <div className="container">
        <div className="row gy-4">
            <div className="col-lg-8 pe-lg-5">
                <div className="section-heading style-left">
                    <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                        <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                        <h5 className="text-main-600 mb-0">Upcoming Events</h5>
                    </div>
                    <h2 className="mb-24 wow bounceInRight">Join Our Upcoming Events </h2>
                    <p className="text-neutral-500 text-line-4 wow bounceInUp">Join us for a variety of exciting events that cater to your interests and learning needs. Our events are designed to inspire and educate</p>
                </div>

                <div className="event-item-wrapper overflow-x-auto scroll-sm scroll-sm-horizontal pb-4">
                    <div className="event-item bg-main-25 rounded-12 p-24 d-flex align-items-center border border-neutral-20 min-width-max-content hover-bg-main-600 hover-border-main-600 hover-text-white transition-1 mb-24" data-aos="fade-up-left"  data-aos-duration="200">
                        <div className="">
                            <h3 className="mb-8 text-main-600">25</h3>
                            <span className="text-neutral-500">May, 2024</span>
                        </div>
                        <span className="border border-neutral-40 border-dashed h-72"></span>
                        <div className="">
                            <div className="flex-between gap-16 flex-wrap mb-16">
                                <div className="flex-align gap-8">
                                    <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-clock"></i></span>
                                    <span className="text-neutral-700 text-lg fw-normal">02:30:am to 04:25:pm</span>
                                </div>
                                <div className="flex-align gap-8">
                                    <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-map-trifold"></i></span>
                                    <span className="text-neutral-700 text-lg fw-normal">New York</span>
                                </div>
                            </div>
                            <h4 className="mt-12 mb-0">Community Service Events</h4>
                        </div>
                        <span className="border border-neutral-40 border-dashed h-72"></span>
                        <div className="flex-shrink-0">
                            <a href="/about" className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8">
                                Join Now
                                <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                            </a>
                        </div>
                    </div>
                    <div className="event-item bg-main-25 rounded-12 p-24 d-flex align-items-center border border-neutral-20 min-width-max-content hover-bg-main-600 hover-border-main-600 hover-text-white transition-1 mb-24" data-aos="fade-up-left"  data-aos-duration="400">
                        <div className="">
                            <h3 className="mb-8 text-main-600">12</h3>
                            <span className="text-neutral-500">Jun, 2024</span>
                        </div>
                        <span className="border border-neutral-40 border-dashed h-72"></span>
                        <div className="">
                            <div className="flex-between gap-16 flex-wrap mb-16">
                                <div className="flex-align gap-8">
                                    <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-clock"></i></span>
                                    <span className="text-neutral-700 text-lg fw-normal">02:30:am to 04:25:pm</span>
                                </div>
                                <div className="flex-align gap-8">
                                    <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-map-trifold"></i></span>
                                    <span className="text-neutral-700 text-lg fw-normal">New York</span>
                                </div>
                            </div>
                            <h4 className="mt-12 mb-0">Sports & Health Promotion</h4>
                        </div>
                        <span className="border border-neutral-40 border-dashed h-72"></span>
                        <div className="flex-shrink-0">
                            <a href="/about" className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8">
                                Join Now
                                <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                            </a>
                        </div>
                    </div>
                    <div className="event-item bg-main-25 rounded-12 p-24 d-flex align-items-center border border-neutral-20 min-width-max-content hover-bg-main-600 hover-border-main-600 hover-text-white transition-1 mb-0" data-aos="fade-up-left"  data-aos-duration="500">
                        <div className="">
                            <h3 className="mb-8 text-main-600">29</h3>
                            <span className="text-neutral-500">Jul, 2024</span>
                        </div>
                        <span className="border border-neutral-40 border-dashed h-72"></span>
                        <div className="">
                            <div className="flex-between gap-16 flex-wrap mb-16">
                                <div className="flex-align gap-8">
                                    <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-clock"></i></span>
                                    <span className="text-neutral-700 text-lg fw-normal">02:30:am to 04:25:pm</span>
                                </div>
                                <div className="flex-align gap-8">
                                    <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-map-trifold"></i></span>
                                    <span className="text-neutral-700 text-lg fw-normal">New York</span>
                                </div>
                            </div>
                            <h4 className="mt-12 mb-0">Career Fair Festivals</h4>
                        </div>
                        <span className="border border-neutral-40 border-dashed h-72"></span>
                        <div className="flex-shrink-0">
                            <a href="/about" className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8">
                                Join Now
                                <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <a href="/course" className="btn btn-outline-main rounded-pill flex-align d-inline-flex gap-8 mt-40">
                    See All Events
                    <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                </a>

            </div>
            <div className="col-lg-4">
                <div className="event-video rounded-16 overflow-hidden position-relative h-100 wow bounceIn">
                    <img src="/assets/images/thumbs/event-video-img.png" className="rounded-16 cover-img" alt="" data-tilt data-tilt-max="8" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-transition="1s" data-tilt-full-page-listening />
                    <a href="https://www.youtube.com/watch?v=MFLVmAE4cqg" className="play-button position-absolute start-50 top-50 translate-middle z-1 w-72 h-72 flex-center bg-main-two-600 text-white rounded-circle text-2xl">
                        <i className="ph-fill ph-play"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ===================================== Event Section End ================================= */}


    {/* =========================== Blog Two SEction Start ============================= */}
<section className="blog-two py-120 bg-main-25">
    <div className="container">
        <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                <h5 className="text-main-600 mb-0">Latest News</h5>
            </div>
            <h2 className="mb-24 wow bounceIn">Stay Informed, Stay Inspired</h2>
            <p className=" wow bounceInUp">Welcome to our blog, where we share insights, stories, and updates on topics ranging from education</p>
        </div>
        <div className="blog-two-slider">
            <div className="scale-hover-item bg-white rounded-16 p-12 h-100" data-aos="fade-up" data-aos-duration="200">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                    <a href="/blog-details" className="w-100 h-100">
                        <img src="/assets/images/thumbs/blog-two-img1.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                    </a>
                    <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium">
                        <h3 className="mb-0 text-white fw-medium">21</h3>
                        DEC
                    </div>
                </div>
                <div className="pt-32 pb-24 px-16 position-relative">
                    <h4 className="mb-28">
                        <a href="/blog-details" className="link text-line-2">Navigating the Job Market: Advice for Graduates</a>
                    </h4>
                    <div className="flex-align gap-14 flex-wrap my-20">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                            <span className="text-neutral-500 text-lg">By Admin</span>
                        </div>
                        <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                            <span className="text-neutral-500 text-lg">1.6k</span>
                        </div>
                        <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                            <span className="text-neutral-500 text-lg">24</span>
                        </div>
                    </div>
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                        <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                            Read More
                            <i className="ph ph-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="scale-hover-item bg-white rounded-16 p-12 h-100" data-aos="fade-up" data-aos-duration="400">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                    <a href="/blog-details" className="w-100 h-100">
                        <img src="/assets/images/thumbs/blog-two-img2.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                    </a>
                    <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium">
                        <h3 className="mb-0 text-white fw-medium">21</h3>
                        DEC
                    </div>
                </div>
                <div className="pt-32 pb-24 px-16 position-relative">
                    <h4 className="mb-28">
                        <a href="/blog-details" className="link text-line-2">The Importance of Diversity in Higher Education</a>
                    </h4>
                    <div className="flex-align gap-14 flex-wrap my-20">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                            <span className="text-neutral-500 text-lg">By Admin</span>
                        </div>
                        <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                            <span className="text-neutral-500 text-lg">1.6k</span>
                        </div>
                        <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                            <span className="text-neutral-500 text-lg">24</span>
                        </div>
                    </div>
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                        <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                            Read More
                            <i className="ph ph-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="scale-hover-item bg-white rounded-16 p-12 h-100" data-aos="fade-up" data-aos-duration="600">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                    <a href="/blog-details" className="w-100 h-100">
                        <img src="/assets/images/thumbs/blog-two-img3.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                    </a>
                    <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium">
                        <h3 className="mb-0 text-white fw-medium">21</h3>
                        DEC
                    </div>
                </div>
                <div className="pt-32 pb-24 px-16 position-relative">
                    <h4 className="mb-28">
                        <a href="/blog-details" className="link text-line-2">10 Tips for Successful Online Learning</a>
                    </h4>
                    <div className="flex-align gap-14 flex-wrap my-20">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                            <span className="text-neutral-500 text-lg">By Admin</span>
                        </div>
                        <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                            <span className="text-neutral-500 text-lg">1.6k</span>
                        </div>
                        <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                            <span className="text-neutral-500 text-lg">24</span>
                        </div>
                    </div>
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                        <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                            Read More
                            <i className="ph ph-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="scale-hover-item bg-white rounded-16 p-12 h-100" data-aos="fade-up" data-aos-duration="800">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                    <a href="/blog-details" className="w-100 h-100">
                        <img src="/assets/images/thumbs/blog-two-img2.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                    </a>
                    <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium">
                        <h3 className="mb-0 text-white fw-medium">21</h3>
                        DEC
                    </div>
                </div>
                <div className="pt-32 pb-24 px-16 position-relative">
                    <h4 className="mb-28">
                        <a href="/blog-details" className="link text-line-2">The Importance of Diversity in Higher Education</a>
                    </h4>
                    <div className="flex-align gap-14 flex-wrap my-20">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                            <span className="text-neutral-500 text-lg">By Admin</span>
                        </div>
                        <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-eye"></i></span>
                            <span className="text-neutral-500 text-lg">1.6k</span>
                        </div>
                        <span className="w-8 h-8 bg-neutral-100 rounded-circle"></span>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-500 text-2xl d-flex"><i className="ph ph-chat-dots"></i></span>
                            <span className="text-neutral-500 text-lg">24</span>
                        </div>
                    </div>
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                        <a href="/blog-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                            Read More
                            <i className="ph ph-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-align gap-16 mt-40 justify-content-center">
            <button type="button" id="blog-two-prev" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                <i className="ph ph-caret-left"></i>
            </button>
            <button type="button" id="blog-two-next" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48">
                <i className="ph ph-caret-right"></i>
            </button>
        </div>
    </div>
</section>
{/* =========================== Blog Two SEction End ============================= */}


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
