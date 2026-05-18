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
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> Favourite Courses</h1>
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
                            <span className="text-main-two-600"> Favourite Courses </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* =============================== Favorite Course Section Start ================================== */}
    <section className="favorite-course py-120">
        <div className="container">

            <div className="d-flex flex-wrap align-items-center justify-content-between mb-24">
                <span className="text-neutral-700"> Courses  Home Favourite Courses</span>
                <button type="button" className="btn btn-outline-main py-12 px-24 rounded-pill flex-align gap-8 aos-init aos-animate fw-semibold" data-aos="fade-left">
                    <i className="ph-bold ph-trash d-flex text-lg"></i>
                    Remove All
                </button>
            </div>
            
            <div className="row gy-4">
                <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
                    <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/course-details" className="w-100 h-100">
                                <img src="/assets/images/thumbs/course-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">9h 36m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2 text-white bg-main-two-600">
                                <i className="ph ph-heart"></i>
                            </button>
                        </div>
                        <div className="course-item__content">
                            <div className="">
                                <h4 className="mb-28">
                                    <a href="/course-details" className="link text-line-2">Introduction to Digital Marketing</a>
                                </h4>
                                <div className="flex-between gap-8 flex-wrap mb-16">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 flex-wrap">
                                    <div className="flex-align gap-4">
                                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                        <span className="text-lg text-neutral-700">
                                            4.7
                                            <span className="text-neutral-100">(6.4k)</span>
                                        </span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex">
                                            <img src="/assets/images/thumbs/user-img1.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                                        </span>
                                        <span className="text-neutral-700 text-lg fw-medium">AnikaZ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="mb-0 text-main-two-600">$148</h4>
                                <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Enroll Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
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
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">25h 06m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2 text-white bg-main-two-600">
                                <i className="ph ph-heart"></i>
                            </button>
                        </div>
                        <div className="course-item__content">
                            <div className="">
                                <h4 className="mb-28">
                                    <a href="/course-details" className="link text-line-2">Introduction to Python Programming</a>
                                </h4>
                                <div className="flex-between gap-8 flex-wrap mb-16">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 flex-wrap">
                                    <div className="flex-align gap-4">
                                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                        <span className="text-lg text-neutral-700">
                                            4.7
                                            <span className="text-neutral-100">(6.4k)</span>
                                        </span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex">
                                            <img src="/assets/images/thumbs/user-img2.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                                        </span>
                                        <span className="text-neutral-700 text-lg fw-medium">Wade</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="mb-0 text-main-two-600">$499</h4>
                                <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Enroll Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
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
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">9h 36m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2 text-white bg-main-two-600">
                                <i className="ph ph-heart"></i>
                            </button>
                        </div>
                        <div className="course-item__content">
                            <div className="">
                                <h4 className="mb-28">
                                    <a href="/course-details" className="link text-line-2">Introduction to Photography Masterclass</a>
                                </h4>
                                <div className="flex-between gap-8 flex-wrap mb-16">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 flex-wrap">
                                    <div className="flex-align gap-4">
                                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                        <span className="text-lg text-neutral-700">
                                            4.7
                                            <span className="text-neutral-100">(6.4k)</span>
                                        </span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex">
                                            <img src="/assets/images/thumbs/user-img3.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                                        </span>
                                        <span className="text-neutral-700 text-lg fw-medium">Cody</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="mb-0 text-main-two-600">$457</h4>
                                <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Enroll Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="200">
                    <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/course-details" className="w-100 h-100">
                                <img src="/assets/images/thumbs/course-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">9h 36m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2 text-white bg-main-two-600">
                                <i className="ph ph-heart"></i>
                            </button>
                        </div>
                        <div className="course-item__content">
                            <div className="">
                                <h4 className="mb-28">
                                    <a href="/course-details" className="link text-line-2">Spanish Language Mastery: Beginner to Fluent</a>
                                </h4>
                                <div className="flex-between gap-8 flex-wrap mb-16">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 flex-wrap">
                                    <div className="flex-align gap-4">
                                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                        <span className="text-lg text-neutral-700">
                                            4.7
                                            <span className="text-neutral-100">(6.4k)</span>
                                        </span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex">
                                            <img src="/assets/images/thumbs/user-img4.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                                        </span>
                                        <span className="text-neutral-700 text-lg fw-medium">Dustin</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="mb-0 text-main-two-600">$148</h4>
                                <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Enroll Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
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
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">9h 36m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2 text-white bg-main-two-600">
                                <i className="ph ph-heart"></i>
                            </button>
                        </div>
                        <div className="course-item__content">
                            <div className="">
                                <h4 className="mb-28">
                                    <a href="/course-details" className="link text-line-2">Financial Planning for Millennials</a>
                                </h4>
                                <div className="flex-between gap-8 flex-wrap mb-16">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 flex-wrap">
                                    <div className="flex-align gap-4">
                                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                        <span className="text-lg text-neutral-700">
                                            4.7
                                            <span className="text-neutral-100">(6.4k)</span>
                                        </span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex">
                                            <img src="/assets/images/thumbs/user-img5.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                                        </span>
                                        <span className="text-neutral-700 text-lg fw-medium">Bruce</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="mb-0 text-main-two-600">$546</h4>
                                <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Enroll Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
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
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">9h 36m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2 text-white bg-main-two-600">
                                <i className="ph ph-heart"></i>
                            </button>
                        </div>
                        <div className="course-item__content">
                            <div className="">
                                <h4 className="mb-28">
                                    <a href="/course-details" className="link text-line-2">Nutrition Essentials for Healthy Living</a>
                                </h4>
                                <div className="flex-between gap-8 flex-wrap mb-16">
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">20 Lessons</span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-chart-bar"></i></span>
                                        <span className="text-neutral-700 text-lg fw-medium">Beginner</span>
                                    </div>
                                </div>
                                <div className="flex-between gap-8 flex-wrap">
                                    <div className="flex-align gap-4">
                                        <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                        <span className="text-lg text-neutral-700">
                                            4.7
                                            <span className="text-neutral-100">(6.4k)</span>
                                        </span>
                                    </div>
                                    <div className="flex-align gap-8">
                                        <span className="text-neutral-700 text-2xl d-flex">
                                            <img src="/assets/images/thumbs/user-img6.png" alt="User Image" className="w-32 h-32 object-fit-cover rounded-circle" />
                                        </span>
                                        <span className="text-neutral-700 text-lg fw-medium">Robert</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="mb-0 text-main-two-600">$345</h4>
                                <a href="/apply-admission" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Enroll Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* =============================== Favorite Course Section End ================================== */}

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
