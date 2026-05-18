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
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> Events</h1>
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
                            <span className="text-main-two-600"> Events </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* ============================== Tutor Section Start ============================== */}
    <section className="course-list-view py-120 bg-white">
        <div className="container">
            <div className="flex-between gap-16 flex-wrap mb-40">
                <span className="text-neutral-500">Showing 5 of 600 Results</span>
                <div className="flex-align gap-16">
                    <div className="flex-align gap-8">
                        <span className="text-neutral-500 flex-shrink-0">Sort By :</span>
                        <select className="form-select ps-20 pe-28 py-8 fw-medium rounded-pill bg-main-25 border border-neutral-30 text-neutral-700">
                            <option value="1">Newest</option>
                            <option value="1">Trending</option>
                            <option value="1">Popular</option>
                        </select>
                    </div>
                    
                </div>
            </div>
            <div className="row gy-4">
                <div className="col-xl-4 col-sm-6">
                    <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/event-details" className="w-100 h-100" tabIndex={0}>
                                <img src="/assets/images/thumbs/event-img1.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                <h3 className="mb-0 text-white fw-medium">21</h3>
                                DEC
                            </div>
                            <div className="bg-success-600 rounded-8 px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                10:15 AM
                            </div>
                        </div>
                        <div className="pt-32 pb-24 px-16 position-relative">
                            <h4 className="mb-28">
                                <a href="/event-details" className="link text-line-2" tabIndex={0}>Career Guidance Workshops for Students</a>
                            </h4>
                            <div className="flex-align gap-8">
                                <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-map-pin-line"></i></span>
                                <p className="text-neutral-500 text-lg">1901 Thornridge Cir. Shiloh</p>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="text-main-two-600 mb-0">$99</h4>
                                <a href="/event-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Join Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                    <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/event-details" className="w-100 h-100" tabIndex={0}>
                                <img src="/assets/images/thumbs/event-img2.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                <h3 className="mb-0 text-white fw-medium">16</h3>
                                DEC
                            </div>
                            <div className="bg-success-600 rounded-8 px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                11:00 AM
                            </div>
                        </div>
                        <div className="pt-32 pb-24 px-16 position-relative">
                            <h4 className="mb-28">
                                <a href="/event-details" className="link text-line-2" tabIndex={0}>Intensive Coding Bootcamps for Beginners</a>
                            </h4>
                            <div className="flex-align gap-8">
                                <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-map-pin-line"></i></span>
                                <p className="text-neutral-500 text-lg">1901 Thornridge Cir. Shiloh</p>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="text-main-two-600 mb-0">$199</h4>
                                <a href="/event-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Join Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                    <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/event-details" className="w-100 h-100" tabIndex={0}>
                                <img src="/assets/images/thumbs/event-img3.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                <h3 className="mb-0 text-white fw-medium">26</h3>
                                DEC
                            </div>
                            <div className="bg-success-600 rounded-8 px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                12:15 PM
                            </div>
                        </div>
                        <div className="pt-32 pb-24 px-16 position-relative">
                            <h4 className="mb-28">
                                <a href="/event-details" className="link text-line-2" tabIndex={0}>Interactive Science Fair and Competition</a>
                            </h4>
                            <div className="flex-align gap-8">
                                <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-map-pin-line"></i></span>
                                <p className="text-neutral-500 text-lg">1901 Thornridge Cir. Shiloh</p>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="text-main-two-600 mb-0">$68</h4>
                                <a href="/event-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Join Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                    <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/event-details" className="w-100 h-100" tabIndex={0}>
                                <img src="/assets/images/thumbs/event-img4.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                <h3 className="mb-0 text-white fw-medium">08</h3>
                                DEC
                            </div>
                            <div className="bg-success-600 rounded-8 px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                02:30 PM
                            </div>
                        </div>
                        <div className="pt-32 pb-24 px-16 position-relative">
                            <h4 className="mb-28">
                                <a href="/event-details" className="link text-line-2" tabIndex={0}>Mathematics Olympiad for Young Mathematicians</a>
                            </h4>
                            <div className="flex-align gap-8">
                                <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-map-pin-line"></i></span>
                                <p className="text-neutral-500 text-lg">1901 Thornridge Cir. Shiloh</p>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="text-main-two-600 mb-0">$60</h4>
                                <a href="/event-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Join Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                    <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/event-details" className="w-100 h-100" tabIndex={0}>
                                <img src="/assets/images/thumbs/event-img5.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                <h3 className="mb-0 text-white fw-medium">01</h3>
                                DEC
                            </div>
                            <div className="bg-success-600 rounded-8 px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                09:00 AM
                            </div>
                        </div>
                        <div className="pt-32 pb-24 px-16 position-relative">
                            <h4 className="mb-28">
                                <a href="/event-details" className="link text-line-2" tabIndex={0}>The Importance of Diversity in Higher Education</a>
                            </h4>
                            <div className="flex-align gap-8">
                                <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-map-pin-line"></i></span>
                                <p className="text-neutral-500 text-lg">1901 Thornridge Cir. Shiloh</p>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="text-main-two-600 mb-0">$45</h4>
                                <a href="/event-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Join Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                    <div className="scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
                        <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                            <a href="/event-details" className="w-100 h-100" tabIndex={0}>
                                <img src="/assets/images/thumbs/event-img6.png" alt="Course Image" className="scale-hover-item__img rounded-12 cover-img transition-2" />
                            </a>
                            <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                                <h3 className="mb-0 text-white fw-medium">13</h3>
                                DEC
                            </div>
                            <div className="bg-success-600 rounded-8 px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                                05:45 PM
                            </div>
                        </div>
                        <div className="pt-32 pb-24 px-16 position-relative">
                            <h4 className="mb-28">
                                <a href="/event-details" className="link text-line-2" tabIndex={0}>Virtual Open House for New Students</a>
                            </h4>
                            <div className="flex-align gap-8">
                                <span className="text-neutral-500 text-2xl d-flex"><i className="ph-bold ph-map-pin-line"></i></span>
                                <p className="text-neutral-500 text-lg">1901 Thornridge Cir. Shiloh</p>
                            </div>
                            <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                                <h4 className="text-main-two-600 mb-0">$77</h4>
                                <a href="/event-details" className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold" tabIndex={0}>
                                    Join Now
                                    <i className="ph ph-arrow-right"></i>
                                </a>
                            </div>
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
    {/* ============================== Tutor Section End ============================== */}
    
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
