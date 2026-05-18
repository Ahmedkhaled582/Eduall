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
      
      <section className="padding-top-100-px bg-img position-relative z-1" style={{"backgroundImage":"url(assets/images/bg/banner-5-bg-img1.png)"}}>
    <img src="/assets/images/shapes/shape1.png" alt="" className="animation-rotation d-sm-block d-none left-32-percent top-18-percent position-absolute" />
    <img src="/assets/images/shapes/shape2.png" alt="" className="animation-scalation d-sm-block d-none top-35-percent right-5-percent position-absolute z-n1" />
    <img src="/assets/images/shapes/shape6.png" alt="" className="animation-scalation d-sm-block d-none left-3-percent bottom-18-percent position-absolute z-n1" />
    <img src="/assets/images/shapes/shape5.png" alt="" className="animation-walking d-sm-block d-none bottom-10-percent left-17-percent position-absolute z-n1" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="animation-scalation d-sm-block d-none left-7-percent bottom-10-percent position-absolute z-n1" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="animation-scalation d-sm-block d-none bottom-14-percent left-65-percent position-absolute z-n1" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="animation-scalation d-sm-block d-none top-55-percent left-30-percent position-absolute z-n1" />
    <img src="/assets/images/shapes/shape3.png" alt="" className="animation-walking d-sm-block d-none top-55-percent left-57-percent position-absolute z-n1" />
    <img src="/assets/images/shapes/curve-arrow.png" alt="" className="animate__wobble__two d-sm-block d-none left-75-percent top-18-percent position-absolute z-n1" />

    
    <div className="circle static-circle border-main-600 border top-18-percent left-83-percent position-absolute">
        <div className="circle__badge">
            <div className="px-12 py-12 border-main-600 border rounded-circle d-inline-block">
                <span className="px-10 py-10 flex-shrink-0 text-white bg-main-600 rounded-circle justify-content-center align-items-center d-inline-flex"><i className="ph-bold ph-arrow-up-right"></i></span>
            </div>
        </div>
        <div className="circle__text text-main-600 fw-semibold">
            <p>EXPLORE MORE . EXPLORE  MORE .</p>
        </div>
    </div>



    <div>
        <img src="/assets/images/thumbs/banner-5-img1.png" alt="" className="position-absolute top-0 start-0 z-n1 ms-148-px d-xl-block d-none tw-max-width-22 padding-top-100-px wow bounceIn" data-wow-duration="3s" />
    </div>
    <div className="py-120">
        <div className="container">
            <div className="tw-max-width-742-px mx-auto text-center z-2">
                <div className="mb-40">
                    <div className="text-main-600 fw-semibold text-xl d-flex align-items-center gap-8 mb-16 justify-content-center flex-wrap" data-aos="fade-down">
                        <span>
                            <i className="ph-bold ph-book-open"></i>
                        </span>
                        <span>
                            Unlocking Your Child's Futures
                        </span>
                    </div>
                    <h2 className="fw-semibold text-neutral-700 display2 line-height-96 mb-24 wow bounceInLeft">
                        Building a 
                        <span className="text-success-600 wow bounceInRight" data-wow-duration="2s">Brighter</span>
                        <span className="text-warning-800 wow bounceInUp" data-wow-duration="2s">Future</span>
                        for Your Child
                    </h2>
                    <p className="fw-normal text-xl max-w-646 mx-auto text-center font-size-20-px wow bounceInUp">We are dedicated to nurturing young minds, empowering them with knowledge, skills, and confidence to excel.</p>
                </div>
                <div className="d-flex align-items-center mx-auto justify-content-center gap-24 flex-wrap">
                    <a href="#" className="px-32 py-16 bg-main-600 text-white fw-semibold rounded-pill hover-bg-main-800 " data-aos="fade-right">
                        Get Start Today
                        <span>
                            <i className="ph-bold ph-arrow-up-right"></i>
                        </span>
                    </a>
                    <a href="#" className="px-32 py-16 text-main-600 border-main-600 border fw-semibold rounded-pill hover-bg-main-50" data-aos="fade-left">
                        Find Courses
                        <span>
                            <i className="ph-bold ph-arrow-up-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="">
        <img src="/assets/images/thumbs/banner-5-img2.png" alt="" className="position-absolute bottom-0 end-0  z-n1 me-148-px d-xl-block d-none tw-max-width-22 wow bounceIn" data-wow-duration="3s" />
    </div>
 </section>
{/* ==========banner section 5 end */}


    
 {/* ==========child future section start========== */}
 <section className="py-120">
    <div className="container">
        <div>
            <div className="d-flex justify-content-between mb-60 align-items-center flex-wrap gap-20">
                <div>
                    <div className="fw-semibold text-main-800 text-xl d-flex align-content-center gap-8 mb-16 flex-wrap" data-aos="fade-down">
                        <span><i className="ph-bold ph-book-open"></i></span>
                        <span>Unlocking Your Child's Futures</span>
                    </div>
                    <h2 className="fw-semibold heading-three text-neutral-700 mb-2 wow bounceIn">Best Learning Platform For Kid\`s</h2>
                </div>
                <div className="max-w-416-px">
                    <p className="tw-text-base fw-medium text-neutral-700 mb-40 wow bounceInUp">Explore new skills, deepen existing passions, and get lost in creativity. What you find just might...</p>
                    <a href="#" className="fw-semibold py-16 px-32 border border-main-600 rounded-pill hover-bg-main-50 ">Browse Courses</a>
                </div>
            </div>

            <div className="row gy-4">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="600">
                    <div className="animation-item px-32 py-32 border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden" style={{"backgroundImage":"url(assets/images/shapes/child-future-bg-img1.png)"}}>
                        <img src="/assets/images/thumbs/child-img1.png" alt="" className="mb-40 animate__wobble" />
                        <div>
                            <span className="fw-semibold text-main-600 mb-12">2-3 Years</span>
                            <h4 className="mb-16">Junior KG</h4>
                            <p className="tw-text-sm">A safe and joyful space where 2-3-year-olds learn, play, and grow together!</p>
                        </div>
                        <img src="/assets/images/shapes/child-icon.png" alt="" className="child-future-icon position-absolute top-0 end-0" />
                    </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
                    <div className="animation-item px-32 py-32 border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden" style={{"backgroundImage":"url(assets/images/shapes/child-future-bg-img1.png)"}}>
                        <img src="/assets/images/thumbs/child-img2.png" alt="" className="mb-40 animate__wobble" />
                        <div>
                            <span className="fw-semibold text-main-600 mb-12">3-4 Years</span>
                            <h4 className="mb-16">Senior KG</h4>
                            <p className="tw-text-sm">Engaging and interactive learning for 3-4-year-olds, building a strong foundation for growth!</p>
                        </div>
                        <img src="/assets/images/shapes/child-icon.png" alt="" className="child-future-icon position-absolute top-0 end-0" />
                    </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="800">
                    <div className="animation-item px-32 py-32 border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden" style={{"backgroundImage":"url(assets/images/shapes/child-future-bg-img1.png)"}}>
                        <img src="/assets/images/thumbs/child-img3.png" alt="" className="mb-40 animate__wobble" />
                        <div>
                            <span className="fw-semibold text-main-600 mb-12">4-5 Years</span>
                            <h4 className="mb-16">Senior KG</h4>
                            <p className="tw-text-sm">A dynamic program for 4-5-year-olds, fostering critical thinking and readiness.</p>
                        </div>
                        <img src="/assets/images/shapes/child-icon.png" alt="" className="child-future-icon position-absolute top-0 end-0" />
                    </div>
                </div>

            </div>

        </div>
    </div>
</section>
{/* ==========child future section end========== */}
    {/* ================================== Kid\`s Courses Section Start =========================== */}
<section className="explore-course py-120 bg-main-25 position-relative z-1">
    <div className="container">
        <div className="max-w-611 text-center mx-auto mb-60">
            <div className="text-main-600 fw-semibold text-xl d-flex align-items-center gap-8 mb-16 justify-content-center flex-wrap" data-aos="fade-down">
                <span><i className="ph-bold ph-book"></i></span>
                <span>Popular Kid\`s Courses</span>
            </div>
            <h2 className="mb-24 wow bounceIn">Building a Brighter Future</h2>
            <p className="max-w-557-px text-md text-neutral-700 fw-normal wow bounceInUp">Our platform is built on the principles of innovation, quality, and inclusivity, aiming to provide a seamless learning</p>
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
                        <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8" id="pills-Years-tab" data-bs-toggle="pill" data-bs-target="#pills-Years" type="button" role="tab" aria-controls="pills-Years" aria-selected="false">
                            <i className="text-xl d-flex ph-bold ph-magic-wand"></i>
                            2-3 Years
                        </button>
                    </li>
                 
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8" id="pills-oldder-tab" data-bs-toggle="pill" data-bs-target="#pills-oldder" type="button" role="tab" aria-controls="pills-oldder" aria-selected="false">
                            <i className="text-xl d-flex ph-bold ph-code"></i>
                            3-4 Years
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8" id="pills-webDesign-tab" data-bs-toggle="pill" data-bs-target="#pills-webDesign" type="button" role="tab" aria-controls="pills-webDesign" aria-selected="false">
                            <i className="text-xl d-flex ph-bold ph-code"></i>
                            4-5 Years
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-categories" role="tabpanel" aria-labelledby="pills-categories-tab" tabIndex={0}>
               <div className="row gy-4">

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md transition-03 hover-border-main-600 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Creative Arts Workshop</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Math Fun Adventures</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 d-none mt-32 group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Melody and Rhythm</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Storytime and Imagination</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Coding for Kids</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Little Science Explorers</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>


</div>

<div className="text-center">
    <a href="/course" className="btn btn-outline-main transition-04 rounded-pill fw-semibold flex-align d-inline-flex gap-8 mt-40" data-aos="fade-left">
        See All Courses
        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
    </a>
</div>
            </div>
            <div className="tab-pane fade" id="pills-Years" role="tabpanel" aria-labelledby="pills-Years-tab" tabIndex={0}>
                <div className="row gy-4">

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md transition-03 hover-border-main-600 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Creative Arts Workshop</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Math Fun Adventures</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 d-none mt-32 group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Melody and Rhythm</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Storytime and Imagination</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Coding for Kids</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Little Science Explorers</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>


</div>

<div className="text-center">
    <a href="/course" className="btn btn-outline-main transition-04 rounded-pill fw-semibold flex-align d-inline-flex gap-8 mt-40" data-aos="fade-left">
        See All Courses
        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
    </a>
</div>
            </div>
         
            <div className="tab-pane fade" id="pills-oldder" role="tabpanel" aria-labelledby="pills-oldder-tab" tabIndex={0}>
               <div className="row gy-4">

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md transition-03 hover-border-main-600 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Creative Arts Workshop</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Math Fun Adventures</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 d-none mt-32 group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Melody and Rhythm</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Storytime and Imagination</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Coding for Kids</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Little Science Explorers</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>


</div>

<div className="text-center">
    <a href="/course" className="btn btn-outline-main transition-04 rounded-pill fw-semibold flex-align d-inline-flex gap-8 mt-40" data-aos="fade-left">
        See All Courses
        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
    </a>
</div>
            </div>
            <div className="tab-pane fade" id="pills-webDesign" role="tabpanel" aria-labelledby="pills-webDesign-tab" tabIndex={0}>
               <div className="row gy-4">

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md transition-03 hover-border-main-600 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Creative Arts Workshop</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Math Fun Adventures</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 d-none mt-32 group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Melody and Rhythm</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Storytime and Imagination</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Coding for Kids</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
        <div className="course-item bg-white rounded-16 p-12 box-shadow-md hover-border-main-600 transition-03 border item-hover">
            <div className="px-20 mb-20 d-flex justify-content-between">
                <div className="d-flex align-items-center gap-8">
                    <img src="/assets/images/icons/kids-courses-shape-img1.png" alt="" />
                    <span className="text-sm fw-normal">
                        By Wowtheme7 IT
                    </span>
                </div>
                <span className="px-8 py-4 border-warning-600 border text-warning-600 rounded-6">
                    -25%
                </span>
            </div>
            <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <a href="/course-details" className="w-100 h-100">
                    <img src="/assets/images/thumbs/kids-courses-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                </a>
            </div>
            <div className="course-item__content position-relative">
                <div className="">
                    <div className="mb-16 flex-align gap-16 flex-wrap">
                        <a href="/course" className="py-4 px-12 rounded-8 flex-align gap-8 text-main-three-600 fw-medium bg-main-three-25 hover-bg-main-three-600 hover-text-white border border-success-200">
                            <span className="md">
                                Data & Tech
                            </span>
                        </a>
                    </div>
                    <div className="d-flex gap-24 flex-wrap mb-16">
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-video-camera"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">25 Lessons</span>
                        </div>
                        <div className="flex-align gap-8">
                            <span className="text-neutral-700 text-lg d-flex"><i className="ph-bold ph-user-circle"></i></span>
                            <span className="text-neutral-700 text-md fw-normal">2.6K Students</span>
                        </div>
                    </div>
                    <h4 className="mb-28">
                        <a href="/course-details" className="link text-line-2">Little Science Explorers</a>
                    </h4>  
                </div>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border border-0">
                    <div>
                        <div className="flex-align gap-4 mb-8">
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-md fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star-half"></i></span>
                        </div>
                        <span>4.8/5 (1.5K Reviews)</span>
                    </div>
                    <h4 className="mb-0 text-main-two-600">$299</h4>
                </div>
                <div>
                    <a href="#" className="fw-semibold text-md border border-main-600 w-100 py-12 text-center rounded-pill hover-bg-main-50 mt-32 d-none group-hover-item">Preview Course</a>
                </div>
            </div>
        </div>
    </div>


</div>

<div className="text-center">
    <a href="/course" className="btn btn-outline-main transition-04 rounded-pill fw-semibold flex-align d-inline-flex gap-8 mt-40" data-aos="fade-left">
        See All Courses
        <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
    </a>
</div>
            </div>
        </div>
    </div>
 </section>
{/* ================================== Kid\`s Courses Section End =========================== */}
    {/* =========================== CHoose Us Section Start ================================ */}
<section className="choose-us py-120 position-relative z-1 mash-bg-main mash-bg-main-two">
<img src="/assets/images/shapes/shape1.png" alt="" className="shape one animation-rotation" />
<img src="/assets/images/shapes/shape3.png" alt="" className="animation-walking top-10-percent left-85-percent position-absolute z-n1" />
<img src="/assets/images/shapes/shape5.png" alt="" className="animation-walking bottom-5-percent left-70-percent position-absolute" />

<div className="container">
    <div className="row gy-4">
        <div className="col-xl-6">
            <div className="choose-us__content">
                <div className="mb-40">
                    <div className="flex-align gap-8 mb-16 wow bounceInDown">
                        <span className="text-16 text-main-600"><i className="ph-bold ph-book"></i></span>
                        <h5 className="mb-0 text-main-600">About Us</h5>
                    </div>
                    <h2 className="mb-24 wow bounceIn">The Creating lifelong learners, pioneering a better future</h2>
                    <p className="text-neutral-500 text-line-2  wow bounceInUp">We are dedicated to shaping the leaders of tomorrow by delivering innovative and impactful learning experiences.</p>
                </div>

                <div className="mb-40">
                    <div className="mb-16">
                        <span className="text-neutral-700 text-20 fw-medium">Course Loading</span>
                    </div>

                    <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                        <div className="h-50-px position-relative w-100 d-flex">
                            <span className="floating-label position-absolute text-xl text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"-LeftPercentage":"85%","animationName":"animateFloatingLabel","left":"85%","bottom":"30px"}}>
                                85%
                            </span>
                            <div className="progress mt-auto h-8-px w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%"}}>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="d-flex gap-24 flex-wrap">
                    <div className="max-w-306">
                        <div className="d-flex gap-12" data-aos="fade-right">
                            <span>
                                <img src="/assets/images/icons/about-us-five-checkbox.png" alt="" />
                            </span>
                            <h5>Our Mission</h5>
                        </div>
                        <p className="text-14 fw-normal wow bounceIn">There are many variations of passages of Lorem Ipsum available.</p>
                    </div>

                    <div className="max-w-306">
                        <div className="d-flex gap-12" data-aos="fade-left">
                            <span>
                                <img src="/assets/images/icons/about-us-five-checkbox.png" alt="" />
                            </span>
                            <h5>Our Mission</h5>
                        </div>
                        <p className="text-14 fw-normal wow bounceIn">There are many variations of passages of Lorem Ipsum available.</p>
                    </div>
                </div>

                <div className="d-flex gap-24 flex-wrap mt-40">
                    <div>
                        <a href="/about" className="btn btn-main rounded-pill flex-align d-inline-flex gap-8" data-aos="fade-right">
                            Read More
                            <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                        </a>
                    </div>
                    <div>
                        <div className="d-flex align-content-center gap-16" data-aos="fade-left">
                            <span className="bg-warning-800 w-54 h-54 rounded-circle justify-content-center text-center align-items-center d-flex text-white">
                                <img src="/assets/images/icons/about-us-five-headset.png" alt="" />
                            </span>
                            <div>
                                <span className="text-16 d-inline-flex mb-4">Support us</span>
                                <h6 className="text-neutral-700">(704) 555-0127</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="col-xl-6">
            <div className="choose-us__thumbs position-relative">

                <div className="offer-message style-two animation-upDown">
                    <span className="">
                        <img src="/assets/images/thumbs/about-us-five-img3.png" alt="" />
                    </span>
                </div>

                <div className="banner-box one style-two " data-aos="fade-left">
                    <div className="d-sm-block d-none"> 
                        <img src="/assets/images/thumbs/about-us-five-img2.png" alt="" className="" />
                    </div>
                </div>

                <div className="text-end" data-aos="zoom-out">
                    <div className="position-relative">
                        <img src="/assets/images/thumbs/about-us-five-img1.png" alt="" className="choose-us__img rounded-12 w-100" data-tilt data-tilt-max="16" data-tilt-speed="500" data-tilt-perspective="5000" data-tilt-full-page-listening />
                        <span className="shadow-main-two w-80 h-80 flex-center bg-success-600 rounded-circle position-absolute inset-block-start-0 inset-inline-start-0 mt-40 ms--40 animation-upDown">
                            <img src="/assets/images/icons/book.png" alt="" />
                        </span>
                    </div>
                </div>
                <div className="animation-video"  data-aos="zoom-in">
                    <img src="/assets/images/thumbs/about-us-five-img4.png" alt="" className="border border-white rounded-circle border-3" data-tilt />
                    <a href="https://www.youtube.com/watch?v=MFLVmAE4cqg" className="play-button w-48 h-48 flex-center bg-warning-800 text-white rounded-circle text-xl position-absolute top-50 start-50 translate-middle">
                        <i className="ph-fill ph-play"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
{/* =========================== CHoose Us Section End ================================ */}

    {/* ================================= Marquee Section Start =============================== */}
<div className="py-24 bg-main-05 overflow-hidden">
    <div className="marquee-area">
        <div className="container-fluid p-0">
            <div className="slider__marquee style2">
                <div className="marquee_mode">
                    <div className="item d-flex gap-32">
                        <img src="/assets/images/icons/marquee-star-img.png" alt="" />
                        <img src="/assets/images/logo/marquee-img-1.png" alt="" />
                    </div>
                    <div className="item d-flex gap-32">
                        <img src="/assets/images/icons/marquee-star-img.png" alt="" />
                        <img src="/assets/images/logo/marquee-img-2.png" alt="" />
                    </div>
                    <div className="item d-flex gap-32">
                        <img src="/assets/images/icons/marquee-star-img.png" alt="" />
                        <img src="/assets/images/logo/marquee-img-6.png" alt="" />
                    </div>
                    <div className="item d-flex gap-32">
                        <img src="/assets/images/icons/marquee-star-img.png" alt="" />
                        <img src="/assets/images/logo/marquee-img-3.png" alt="" />
                    </div>
                    <div className="item d-flex gap-32">
                        <img src="/assets/images/icons/marquee-star-img.png" alt="" />
                        <img src="/assets/images/logo/marquee-img-3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div> 
{/* ================================= Marquee Section End =============================== */}

    


{/* ===============gallery section start============== */}
 <section className="py-120">
    <div className="container">
        <div className="max-w-611 text-center mx-auto mb-60">
            <div className="text-20 fw-semibold text-main-600 d-flex gap-8 mb-16 justify-content-center" data-aos="fade-down">
                <span><i className="ph-bold ph-book"></i></span>
                <span>Highlights Activities</span>
            </div>
            <h2 className="text-neutral-700 mb-24 wow bounceIn">Showcasing Gallery</h2>
            <p className="text-16 fw-normal wow bounceInUp">We showcase the unforgettable moments, inspiring events, and dynamic experiences that make our community truly unique.</p>
        </div>

        <div className=" mb-40">
            <div className="row gy-4">
                <div className="col-xl-4">
                    <div className="item-hover position-relative wow bounceIn" data-wow-duration="3s">
                        <img src="/assets/images/thumbs/gallery-five-img1.png" alt="" className="w-100 h-100" />
                        <div className="bg-color-main-500 w-100 h-100 d-flex align-items-center justify-content-center position-absolute top-0 start-0 transfrom-scale-0 group-hover-transform transition-04">
                            <a href="https://www.instagram.com" className="text-68 text-white"><i className="ph ph-instagram-logo"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="item-hover mb-24 position-relative wow bounceIn" data-wow-duration="3s">
                        <img src="/assets/images/thumbs/gallery-five-im2.png" alt="" className="w-100 h-100" />
                        <div className="bg-color-main-500 w-100 h-100 d-flex align-items-center justify-content-center position-absolute top-0 start-0 transfrom-scale-0 group-hover-transform transition-04">
                            <a href="https://www.instagram.com" className="text-68 text-white"><i className="ph ph-instagram-logo"></i></a>
                        </div>
                    </div>
                    <div className="d-flex gap-16 flex-wrap">
                        <div className="item-hover position-relative" data-aos="fade-right">
                            <img src="/assets/images/thumbs/gallery-five-img3.png" alt="" className="w-100 h-100" />
                            <div className="bg-color-main-500 w-100 h-100 d-flex align-items-center justify-content-center position-absolute top-0 start-0 transfrom-scale-0 group-hover-transform transition-04">
                                <a href="https://www.instagram.com" className="text-68 text-white"><i className="ph ph-instagram-logo"></i></a>
                            </div>
                        </div>
                        <div className="item-hover position-relative" data-aos="fade-left">
                            <img src="/assets/images/thumbs/gallery-five-img4.png" alt="" className="w-100 h-100" />
                            <div className="bg-color-main-500 w-100 h-100 d-flex align-items-center justify-content-center position-absolute top-0 start-0 transfrom-scale-0 group-hover-transform transition-04">
                                <a href="https://www.instagram.com" className="text-68 text-white"><i className="ph ph-instagram-logo"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="justify-content-center text-center mx-auto">
            <a href="#" className="border-main-600 border py-16 fw-semibold text-16 px-32 d-inline-flex rounded-pill hover-bg-main-50 align-items-center gap-8 wow bounceIn" data-wow-duration="3s">
                See All Image
                <span><i className="ph-bold ph-arrow-up-right"></i></span>
            </a>
        </div>
    </div>
 </section>
{/* ===============gallery section end============== */}   




    {/* ================================ our popular Section Start ==================================== */}
<section className="instructor py-120 bg-main-25 position-relative z-1">
    
    <div className="container">
        <div className="max-w-535-px text-center mx-auto mb-60">
            <div className="text-20 fw-semibold text-main-600 d-flex gap-8 mb-16 justify-content-center" data-aos="fade-down">
                <span>
                    <i className="ph-bold ph-book-open"></i>
                </span>
                <span>Our Popular Tutors</span>
            </div>
            <h2 className="text-neutral-700 mb-24 wow bounceIn">Here are few of the Verified Teachers</h2>
            <p className="text-16 fw-normal wow bounceInUp">Our tutoring sessions are interactive and engaging, focusing on the student's specific needs.</p>
        </div>

        <div className="our-popular-slider">

            <div data-aos="fade-up"  data-aos-duration="600">
                <div className="instructor-item scale-hover-item bg-white rounded-16 transition-03 p-12 h-100 border border-neutral-30 hover-border-main-600 border">
                    <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                        <a href="/instructor-details" className="w-100 h-100 d-flex align-items-end">
                            <img src="/assets/images/thumbs/our-popular-img-1.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
    
                        <div className="">
                            <div className="our-popular-five">
                                <button className="our-popular-five__button flex-center w-44 h-44 bg-white text-main-600 rounded-circle text-2xl transition-2">
                                    <i className="ph-bold ph-plus"></i>
                                </button>
                                <ul className="social-list flex-align flex-column gap-12 mt-12">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                    </div>
                    <div className="p-24">
                        <div className="text-center">
                            <h4 className="mb-4">
                                <a href="/instructor-details" className="link text-line-2">Albert Flores</a>
                            </h4>
                            <span>English Expert</span>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up"  data-aos-duration="700">
                <div className="instructor-item scale-hover-item bg-white rounded-16 transition-03 p-12 h-100 border border-neutral-30 hover-border-main-600 border">
                    <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                        <a href="/instructor-details" className="w-100 h-100 d-flex align-items-end">
                            <img src="/assets/images/thumbs/our-popular-img-2.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
    
                        <div className="">
                            <div className="our-popular-five">
                                <button className="our-popular-five__button flex-center w-44 h-44 bg-white text-main-600 rounded-circle text-2xl transition-2">
                                    <i className="ph-bold ph-plus"></i>
                                </button>
                                <ul className="social-list flex-align flex-column gap-12 mt-12">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                    </div>
                    <div className="p-24">
                        <div className="text-center">
                            <h4 className="mb-4">
                                <a href="/instructor-details" className="link text-line-2">Theresa Webb</a>
                            </h4>
                            <span>Data And Science</span>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up"  data-aos-duration="800">
                <div className="instructor-item scale-hover-item bg-white rounded-16 transition-03 p-12 h-100 border border-neutral-30 hover-border-main-600 border">
                    <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                        <a href="/instructor-details" className="w-100 h-100 d-flex align-items-end">
                            <img src="/assets/images/thumbs/our-popular-img-3.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
    
                        <div className="">
                            <div className="our-popular-five">
                                <button className="our-popular-five__button flex-center w-44 h-44 bg-white text-main-600 rounded-circle text-2xl transition-2">
                                    <i className="ph-bold ph-plus"></i>
                                </button>
                                <ul className="social-list flex-align flex-column gap-12 mt-12">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                    </div>
                    <div className="p-24">
                        <div className="text-center">
                            <h4 className="mb-4">
                                <a href="/instructor-details" className="link text-line-2">Jacob Jones</a>
                            </h4>
                            <span>Social Science</span>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up"  data-aos-duration="900">
                <div className="instructor-item scale-hover-item bg-white rounded-16 transition-03 p-12 h-100 border border-neutral-30 hover-border-main-600 border">
                    <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                        <a href="/instructor-details" className="w-100 h-100 d-flex align-items-end">
                            <img src="/assets/images/thumbs/our-popular-img-4.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
    
                        <div className="">
                            <div className="our-popular-five">
                                <button className="our-popular-five__button flex-center w-44 h-44 bg-white text-main-600 rounded-circle text-2xl transition-2">
                                    <i className="ph-bold ph-plus"></i>
                                </button>
                                <ul className="social-list flex-align flex-column gap-12 mt-12">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                    </div>
                    <div className="p-24">
                        <div className="text-center">
                            <h4 className="mb-4">
                                <a href="/instructor-details" className="link text-line-2">Cody Fisher</a>
                            </h4>
                            <span>IT Specialist</span>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up"  data-aos-duration="700">
                <div className="instructor-item scale-hover-item bg-white rounded-16 transition-03 p-12 h-100 border border-neutral-30 hover-border-main-600 border">
                    <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow">
                        <a href="/instructor-details" className="w-100 h-100 d-flex align-items-end">
                            <img src="/assets/images/thumbs/our-popular-img-2.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                        </a>
    
                        <div className="">
                            <div className="our-popular-five">
                                <button className="our-popular-five__button flex-center w-44 h-44 bg-white text-main-600 rounded-circle text-2xl transition-2">
                                    <i className="ph-bold ph-plus"></i>
                                </button>
                                <ul className="social-list flex-align flex-column gap-12 mt-12">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className=" flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                    </div>
                    <div className="p-24">
                        <div className="text-center">
                            <h4 className="mb-4">
                                <a href="/instructor-details" className="link text-line-2">Theresa Webb</a>
                            </h4>
                            <span>Data And Science</span>
                        </div>
                    </div>
                </div>
            </div>

            
           

        </div>

        <div className="flex-align gap-16 mt-40 justify-content-center">
            <button type="button" id="our-popular-prev" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48" data-aos="fade-right">
                <i className="ph ph-caret-left"></i>
            </button>
            <button type="button" id="our-popular-next" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48" data-aos="fade-left">
                <i className="ph ph-caret-right"></i>
            </button>
        </div>
        
    </div>
 </section>
{/* ================================ our popular Section End ==================================== */}

    <section className="d-flex overflow-hidden">
    <div className="lg-w-50-percent wow bounceIn" data-wow-duration="3s">
        <img src="/assets/images/thumbs/faq-five-img1.png" alt="" className="h-100 w-100" />
    </div>

    <div className="lg-w-50-percent">
        <div className="py-120 max-w-526-px lg-ms-134px">
            <div className="faq-content">
                <div className="mb-40">
                    <div className="flex-align d-inline-flex flex-wrap gap-8 mb-16 wow bounceInDown">
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


</section>
 
    {/* ================================ testimonial Section Start ==================================== */}
<section className="instructor py-120 position-relative z-1">
    
        <div className="max-w-632-px text-center mx-auto mb-60">
            <div className="text-20 fw-semibold text-main-600 d-flex gap-8 mb-16 justify-content-center" data-aos="fade-down">
                <span>
                    <i className="ph-bold ph-book-open"></i>
                </span>
                <span>Testimonials</span>
            </div>
            <h2 className="text-neutral-700 mb-24 wow bounceIn">What Our Community Says</h2>
            <p className="text-16 fw-normal wow bounceInUp">Welcome to our testimonial section, where members of our university community share their experiences and insights about life at EduAll.</p>
        </div>

        <div className="testimonial-five-slider">

            <div data-aos="zoom-in" data-aos-duration="400">
                <div className="instructor-item max-w-636-px scale-hover-item bg-white rounded-16 p-12 border border-neutral-30 hover-border-main-600 border px-32 py-32 hover-bg-main-05 transition-04">
                    <ul className="d-flex ailgn gap-8">
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star-half"></i></li>
                    </ul>
                    <p className="mb-32">"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-20">
                            <img src="/assets/images/thumbs/testimonial-five-img1.png" alt="" />
                            <div>
                                <h6 className="mb-0 mb-8">Jane Cooper</h6>
                                <span>President of Sales</span>
                            </div>
                        </div>
                        <img src="/assets/images/icons/testimonial-five.png" alt="" />
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="800">
                <div className="instructor-item max-w-636-px scale-hover-item bg-white rounded-16 p-12 border border-neutral-30 hover-border-main-600 border px-32 py-32 hover-bg-main-05 transition-04">
                    <ul className="d-flex ailgn gap-8">
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star-half"></i></li>
                    </ul>
                    <p className="mb-32">"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-20">
                            <img src="/assets/images/thumbs/testimonial-five-img2.png" alt="" />
                            <div>
                                <h6 className="mb-0 mb-8">Jane Cooper</h6>
                                <span>President of Sales</span>
                            </div>
                        </div>
                        <img src="/assets/images/icons/testimonial-five.png" alt="" />
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1200">
                <div className="instructor-item max-w-636-px scale-hover-item bg-white rounded-16 p-12 border border-neutral-30 hover-border-main-600 border px-32 py-32 hover-bg-main-05 transition-04">
                    <ul className="d-flex ailgn gap-8">
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star-half"></i></li>
                    </ul>
                    <p className="mb-32">"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-20">
                            <img src="/assets/images/thumbs/testimonial-five-img3.png" alt="" />
                            <div>
                                <h6 className="mb-0 mb-8">Jane Cooper</h6>
                                <span>President of Sales</span>
                            </div>
                        </div>
                        <img src="/assets/images/icons/testimonial-five.png" alt="" />
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="400">
                <div className="instructor-item max-w-636-px scale-hover-item bg-white rounded-16 p-12 border border-neutral-30 hover-border-main-600 border px-32 py-32 hover-bg-main-05 transition-04">
                    <ul className="d-flex ailgn gap-8">
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star"></i></li>
                        <li className="text-20 text-warning-400"><i className="ph-fill ph-star-half"></i></li>
                    </ul>
                    <p className="mb-32">"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-20">
                            <img src="/assets/images/thumbs/testimonial-five-img2.png" alt="" />
                            <div>
                                <h6 className="mb-0 mb-8">Jane Cooper</h6>
                                <span>President of Sales</span>
                            </div>
                        </div>
                        <img src="/assets/images/icons/testimonial-five.png" alt="" />
                    </div>
                </div>
            </div>

           

        </div>

        <div className="flex-align gap-16 mt-40 justify-content-center">
            <button type="button" id="testimonial-five-prev" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48" data-aos="fade-right">
                <i className="ph ph-caret-left"></i>
            </button>
            <button type="button" id="testimonial-five-next" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48" data-aos="fade-left">
                <i className="ph ph-caret-right"></i>
            </button>
        </div>
        
 </section>
{/* ================================ testimonial Section End ==================================== */}
      
      <Footer />
    </>
  );
}
