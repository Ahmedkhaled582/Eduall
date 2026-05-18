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
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> About Us 03</h1>
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
                            <span className="text-main-two-600"> About Us 03 </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* ================================ About Three Section Start ==================================== */}
    <section className="about-three pt-120 position-relative z-1">
        <div className="position-relative">
            <div className="container">
                <div className="row gy-xl-0 gy-5 flex-wrap-reverse align-items-center">
                    <div className="col-xl-6 pe-xl-5">
                        <div className="about-three-thumbs position-relative me-xxl-5">
                            <div className="row gy-4">
                                <div className="col-sm-8">
                                    <img src="/assets/images/thumbs/about-three-img1.png" alt="" className="about-three-thumbs__one rounded-16 w-100" />
                                </div>
                                <div className="col-sm-4">
                                    <div className="bg-main-three-600 rounded-16 text-center py-24 px-2 mb-24">    
                                        <h2 className="mb-16 text-white">26K+</h2>
                                        <span className="text-white">Students Active Our University</span>
                                        <div className="enrolled-students style-two mt-12">
                                            <img src="/assets/images/thumbs/enroll-student-img1.png" alt="" className="w-32 h-32 rounded-circle object-fit-cover" />
                                            <img src="/assets/images/thumbs/enroll-student-img2.png" alt="" className="w-32 h-32 rounded-circle object-fit-cover" />
                                            <img src="/assets/images/thumbs/enroll-student-img3.png" alt="" className="w-32 h-32 rounded-circle object-fit-cover" />
                                            <img src="/assets/images/thumbs/enroll-student-img4.png" alt="" className="w-32 h-32 rounded-circle object-fit-cover" />
                                            <img src="/assets/images/thumbs/enroll-student-img5.png" alt="" className="w-32 h-32 rounded-circle object-fit-cover" />
                                            <img src="/assets/images/thumbs/enroll-student-img6.png" alt="" className="w-32 h-32 rounded-circle object-fit-cover" />
                                        </div>
                                    </div>
                                    <img src="/assets/images/thumbs/about-three-img2.png" alt="" className="about-three-thumbs__two rounded-16 w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-three-content">
                            <div className="mb-40">
                                <div className="flex-align d-inline-flex gap-8 mb-16">
                                    <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                                    <h5 className="text-main-600 mb-0">About University Us</h5>
                                </div>
                                <h2 className="mb-24">Our Commitment to Diversity Leadership and Governance</h2>
                                <p className="text-neutral-500 text-line-2">We embrace innovation and creativity as catalysts for positive change, driving forward-thinking research, teaching methodologies</p>
                            </div>
        
                            <div className="grid-cols-2">
                                <div className="flex-align align-items-start gap-20 animation-item">
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
                                <div className="flex-align align-items-start gap-20 animation-item">
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
                                <div className="flex-align align-items-start gap-20 animation-item">
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
                                <div className="flex-align align-items-start gap-20 animation-item">
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

    {/* ========================== Counter Section start ============================== */}
 <section className="counter py-120">
    <div className="container">
        <div className="row gy-4">
            <div className="col-xl-3 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-duration="200" >
                <div className="counter-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30">
                    <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24">
                        <i className="animate__wobble ph ph-users"></i>
                    </span>
                    <h2 className="display-four mb-16 text-neutral-700 counter">1.6K</h2>
                    <span className="text-neutral-500 text-lg">Successfully Trained</span>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-duration="400" >
                <div className="counter-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30">
                    <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24">
                        <i className="animate__wobble ph ph-video-camera"></i>
                    </span>
                    <h2 className="display-four mb-16 text-neutral-700 counter"> 16.5K</h2>
                    <span className="text-neutral-500 text-lg">Courses Completed</span>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-duration="600" >
                <div className="counter-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30">
                    <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24">
                        <i className="animate__wobble ph ph-thumbs-up"></i>
                    </span>
                    <h2 className="display-four mb-16 text-neutral-700 counter">45.8K</h2>
                    <span className="text-neutral-500 text-lg">Satisfaction Rate</span>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-duration="800" >
                <div className="counter-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30">
                    <span className="w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24">
                        <i className="animate__wobble ph ph-users-three"></i>
                    </span>
                    <h2 className="display-four mb-16 text-neutral-700 counter">55.6K</h2>
                    <span className="text-neutral-500 text-lg">Students Community</span>
                </div>
            </div>
        </div>
    </div>
 </section>
{/* ========================== Counter Section End ============================== */}

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

    {/* =================================== Video Section Start ============================= */}
    <section className="video">
        <div className="container">
            <div className="section-heading text-center">
                <div className="flex-align d-inline-flex gap-8 mb-16">
                    <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book-open"></i></span>
                    <h5 className="text-main-600 mb-0">Campus Life</h5>
                </div>
                <h2 className="mb-24">Campus Highlights</h2>
                <p className="">Welcome to our vibrant campus, where learning comes to life in a dynamic and inspiring environment.</p>
            </div>
        </div>

            <div className="video-img position-relative half-bg"> 
                <div className="container">
                    <img src="/assets/images/thumbs/video-img.png" className="rounded-12 cover-img" alt="" />
                    <a href="https://www.youtube.com/watch?v=MFLVmAE4cqg" className="play-button position-absolute start-50 top-50 translate-middle z-1 w-72 h-72 flex-center bg-main-two-600 text-white rounded-circle text-2xl">
                        <i className="ph-fill ph-play"></i>
                    </a>
                </div>
            </div>
    </section>
    {/* =================================== Video Section End ============================= */}

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
      
      <Footer />
    </>
  );
}
