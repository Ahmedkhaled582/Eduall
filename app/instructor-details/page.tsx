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
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> Instructors Details</h1>
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
                            <span className="text-main-two-600"> Instructors Details </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* ================================ Instructor Details Section Start ==================================== */}
    <section className="instructor-details py-120 position-relative z-1">
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-4">
                    <div className="instructor-details__thumb">
                        <img src="/assets/images/thumbs/instructor-details-thumb.png" alt="" className="max-h-416 max-w-416 cover-img rounded-circle" />
                        <ul className="social-list flex-center gap-16 mt-40">
                            <li className="social-list__item">
                                <a href="https://www.facebook.com" className="text-main-600 text-xl hover-text-white w-40 h-40 rounded-circle border border-main-600 hover-bg-main-600 flex-center"><i className="ph-bold ph-facebook-logo"></i></a>
                            </li>
                            <li className="social-list__item">
                                <a href="https://www.twitter.com" className="text-main-600 text-xl hover-text-white w-40 h-40 rounded-circle border border-main-600 hover-bg-main-600 flex-center"> <i className="ph-bold ph-twitter-logo"></i></a>
                            </li>
                            <li className="social-list__item">
                                <a href="https://www.linkedin.com" className="text-main-600 text-xl hover-text-white w-40 h-40 rounded-circle border border-main-600 hover-bg-main-600 flex-center"><i className="ph-bold ph-instagram-logo"></i></a>
                            </li>
                            <li className="social-list__item">
                                <a href="https://www.pinterest.com" className="text-main-600 text-xl hover-text-white w-40 h-40 rounded-circle border border-main-600 hover-bg-main-600 flex-center"><i className="ph-bold ph-pinterest-logo"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8 ps-xl-5">
                    <div className="ps-lg-5">
                        <h5 className="text-main-600 mb-0">Instructor</h5>
                        <h2 className="my-16">Robert Fox</h2>
                        <span className="text-neutral-700">Developer And Instructor</span>
                        <div className="d-flex flex-column gap-16 flex-wrap max-w-340 mt-40">
                            <div className="flex-between gap-8">
                                <div className="flex-align gap-8">
                                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-lightbulb"></i></span>
                                    <span className="text-neutral-700 text-lg fw-medium">UI/UX Designer</span>
                                </div>
                                <div className="flex-align gap-8">
                                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-watch"></i></span>
                                    <span className="text-neutral-700 text-lg fw-medium">12 Course</span>
                                </div>
                            </div>
                            <div className="flex-between gap-8 flex-wrap">
                                <div className="flex-align gap-8">
                                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users"></i></span>
                                    <span className="text-neutral-700 text-lg fw-medium">36k Students</span>
                                </div>
                                <div className="flex-align gap-4">
                                    <span className="text-2xl fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                    <span className="text-lg text-neutral-700 fw-semibold">
                                        4.7
                                        <span className="text-neutral-100 fw-normal">(6.4k)</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span className="d-block border border-neutral-30 my-40 border-dashed"></span>
                        <h4 className="mb-24">Bio Data</h4>
                        <p className="text-neutral-500">Offer brief biographies or profiles of each instructor. These may include details about their careers, achievements, and interests.</p>
                        <span className="d-block border border-neutral-30 my-40 border-dashed"></span>
                        <h4 className="mb-24">Contact</h4>
                        <div className="d-flex flex-column gap-24">
                            <div className="flex-align gap-12">
                                <span className="text-2xl w-44 h-44 border border border-neutral-30 rounded-4 flex-center text-main-600 bg-main-25">
                                    <i className="ph-bold ph-phone-call"></i>
                                </span>
                                <a href="tel:603555-0123" className="text-neutral-500 hover-text-main-600">(603) 555-0123, (684) 555-0102</a>
                            </div>
                            <div className="flex-align gap-12">
                                <span className="text-2xl w-44 h-44 border border border-neutral-30 rounded-4 flex-center text-success-600 bg-main-25">
                                    <i className="ph-bold ph-envelope-simple"></i>
                                </span>
                                <a href="mailto:example@gmail.com" className="text-neutral-500 hover-text-main-600">example@gmail.com</a>
                            </div>
                            <div className="flex-align gap-12">
                                <span className="text-2xl w-44 h-44 border border border-neutral-30 rounded-4 flex-center text-warning-600 bg-main-25">
                                    <i className="ph-bold ph-map-pin-line"></i>
                                </span>
                                <span className="text-neutral-500">8502 Preston Rd. Inglewood, Maine 98380</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ================================ Instructor Details Section End ==================================== */}

    {/* ================================ Course Section Start ==================================== */}
     <section className="py-120 bg-main-25">
        <div className="container">
            <div className="section-heading text-center">
                <div className="flex-align d-inline-flex gap-8 mb-16">
                    <span className="text-main-600 text-2xl d-flex"><i className="ph-bold ph-book"></i></span>
                    <h5 className="text-main-600 mb-0">My Courses</h5>
                </div>
                <h2 className="mb-24">My Popular Courses</h2>
                <p className="">Our platform is built on the principles of innovation, quality, and inclusivity, aiming to provide a seamless learning</p>
            </div>
            <div className="row gy-4">
                <div className="col-lg-4 col-sm-6">
                    <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/course-details" className="w-100 h-100">
                                <img src="/assets/images/thumbs/course-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">9h 36m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
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
                <div className="col-lg-4 col-sm-6">
                    <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/course-details" className="w-100 h-100">
                                <img src="/assets/images/thumbs/course-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">25h 06m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
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
                <div className="col-lg-4 col-sm-6">
                    <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/course-details" className="w-100 h-100">
                                <img src="/assets/images/thumbs/course-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">9h 36m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
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
                <div className="col-lg-4 col-sm-6">
                    <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/course-details" className="w-100 h-100">
                                <img src="/assets/images/thumbs/course-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">9h 36m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
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
                <div className="col-lg-4 col-sm-6">
                    <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/course-details" className="w-100 h-100">
                                <img src="/assets/images/thumbs/course-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">9h 36m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
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
                <div className="col-lg-4 col-sm-6">
                    <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/course-details" className="w-100 h-100">
                                <img src="/assets/images/thumbs/course-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                <span className="text-2xl d-flex"><i className="ph ph-clock"></i></span>
                                <span className="text-lg fw-medium">9h 36m</span>
                            </div>
                            <button type="button" className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2">
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
            <ul className="pagination mt-40 flex-align gap-12 flex-wrap justify-content-center">
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#"><i className="ph-bold ph-caret-left"></i></a>
                </li>
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">1</a>
                </li>
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">2</a>
                </li>
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">3</a>
                </li>
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#">...</a>
                </li>
                <li className="page-item">
                    <a className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0" href="#"><i className="ph-bold ph-caret-right"></i></a>
                </li>
            </ul>
        </div>
     </section>
    {/* ================================ Course Section End ==================================== */}


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
