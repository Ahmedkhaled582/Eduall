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
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> Event Details</h1>
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
                            <span className="text-main-two-600"> Event Details </span> 
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
        <div className="container container--lg">
            <img src="/assets/images/thumbs/event-details-img.png" alt="" className="rounded-12" />
            <div className="container">
                <div className="mt-60">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <h1 className="display-4 mb-24 fw-semibold">Career Guidance Workshops for Students</h1>
                            <p className="text-neutral-700">Navigating the path to a successful career can be challenging, but our Career Guidance Workshops are here to help. Designed for high school and college students, these workshops provide invaluable insights into various career paths, equip students with essential skills, and connect them with industry professionals.</p>
                            <span className="d-block border-bottom border-top-0 border-dashed border-main-100 my-32"></span>
                            <h2 className="mb-16">Introduction to Career Planning</h2>
                            <ul className="list-dotted d-flex flex-column gap-8">
                                <li>Understanding the importance of career planning</li>
                                <li>Assessing personal strengths, interests, and values</li>
                                <li>Setting short-term and long-term career goals</li>
                            </ul>
                            <span className="d-block border-bottom border-top-0 border-dashed border-main-100 my-32"></span>
                            <h3 className="mb-16">Exploring Career Options</h3>
                            <ul className="list-dotted d-flex flex-column gap-8">
                                <li>Overview of different career fields (e.g., STEM, arts, business, healthcare)</li>
                                <li>Detailed sessions on specific professions</li>
                                <li>Guest speakers from various industries</li>
                            </ul>
                            <p className="mt-16 text-neutral-700">These courses are commonly offered in both in-person and online formats. Online courses often include video lectures, interactive coding exercises, and discussion forums.</p>
                            <div className="my-32">
                                <div className="row gy-4">
                                    <div className="col-6">
                                        <img src="/assets/images/thumbs/event-detail-img1.png" alt="" className="rounded-16" />
                                    </div>
                                    <div className="col-6">
                                        <img src="/assets/images/thumbs/event-detail-img2.png" alt="" className="rounded-16" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="mb-16">Skills Development</h4>
                            <ul className="list-dotted d-flex flex-column gap-8">
                                <li>Resume writing and cover letter preparation</li>
                                <li>Interview techniques and practice sessions</li>
                                <li>Networking skills and using LinkedIn effectively</li>
                            </ul>
                            <p className="mt-16 text-neutral-700">Most Web Development Fundamentals courses do not have strict prerequisites. They are often open to beginners, but having some basic computer literacy and familiarity with web browsing is beneficial</p>
                            <span className="d-block border-bottom border-top-0 border-dashed border-main-100 my-32"></span>
                            <h5 className="mb-16">Educational Pathways</h5>
                            <ul className="list-dotted d-flex flex-column gap-8">
                                <li>Choosing the right college or university</li>
                                <li>Understanding different degree programs and certifications</li>
                                <li>Exploring scholarships, internships, and apprenticeship opportunities</li>
                            </ul>
                            <p className="mt-16 text-neutral-700">Web Development Fundamentals courses can vary in length, ranging from a few weeks to a few months. It depends on the depth of content covered and the pace of the course.</p>

                            <div className="position-relative my-32"> 
                                <img src="/assets/images/thumbs/event-detail-img3.png" className="rounded-12 cover-img" alt="" />
                                <a href="https://www.youtube.com/watch?v=MFLVmAE4cqg" className="play-button position-absolute start-50 top-50 translate-middle z-1 w-72 h-72 flex-center bg-main-two-600 text-white rounded-circle text-2xl">
                                    <i className="ph-fill ph-play"></i>
                                </a>
                            </div>
                            
                            <h6 className="mb-16">Benefits</h6>
                            <ul className="list-dotted d-flex flex-column gap-8">
                                <li>Personalized Guidance: Tailored advice based on individual interests and strengths</li>
                                <li>Industry Connections: Direct interaction with professionals and potential mentors</li>
                                <li>Skill Enhancement: Development of critical career skills such as resume writing and interviewing</li>
                                <li>Informed Decisions: Better understanding of various career paths and educational requirements</li>
                                <li>Confidence Building: Increased confidence in career planning and decision-making</li>
                            </ul>
                            <p className="mt-16 text-neutral-700">Students can register for the workshops through the EduAll platform. Limited seats are available, so early registration is recommended.</p>
                        </div>

                        <div className="col-lg-4">
                            <div className="bg-white box-shadow-md rounded-12 p-12 d-flex flex-column gap-12 border border-neutral-30 mt--200px">
                                <div className="rounded-12 overflow-hidden">
                                    <div className="position-relative"> 
                                        <img src="/assets/images/thumbs/event-detail-img4.png" className="rounded-12 cover-img" alt="" />
                                        <a href="https://www.youtube.com/watch?v=MFLVmAE4cqg" className="play-button position-absolute start-50 top-50 translate-middle z-1 w-72 h-72 flex-center bg-main-600 text-white rounded-circle text-2xl">
                                            <i className="ph-fill ph-play"></i>
                                        </a>
                                        <h3 className="text-white bg-main-two-600 mb-0 px-32 py-16 rounded-top-start-8px position-absolute inset-inline-end-0 inset-block-end-0 fw-medium">$199</h3>
                                    </div>
                                </div>
                                <div className="rounded-12 bg-main-25 p-24 ">
                                    <div className=" flex-between flex-wrap gap-16 border-bottom border-dashed border-top-0 border-end-0 border-start-0 border-neutral-40 pb-16 mb-16">
                                        <div className="flex-align gap-12">
                                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-calendar-dot"></i></span>
                                            <span className="text-neutral-700 text-lg fw-normal">Start Date</span>
                                        </div>
                                        <span className="text-lg fw-medium text-neutral-700">12/05/24</span>
                                    </div>
                                    <div className=" flex-between flex-wrap gap-16 border-bottom border-dashed border-top-0 border-end-0 border-start-0 border-neutral-40 pb-16 mb-16">
                                        <div className="flex-align gap-12">
                                            <span className="text-neutral-700 text-2xl d-flex"> <i className="ph-bold ph-clock"></i></span>
                                            <span className="text-neutral-700 text-lg fw-normal">Start Time</span>
                                        </div>
                                        <span className="text-lg fw-medium text-neutral-700">05:00 PM</span>
                                    </div>
                                    <div className=" flex-between flex-wrap gap-16 border-bottom border-dashed border-top-0 border-end-0 border-start-0 border-neutral-40 pb-16 mb-16">
                                        <div className="flex-align gap-12">
                                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-calendar-dot"></i></span>
                                            <span className="text-neutral-700 text-lg fw-normal">End Time</span>
                                        </div>
                                        <span className="text-lg fw-medium text-neutral-700">08:00 PM</span>
                                    </div>
                                    <div className=" flex-between flex-wrap gap-16 border-bottom border-dashed border-top-0 border-end-0 border-start-0 border-neutral-40 pb-16 mb-16">
                                        <div className="flex-align gap-12">
                                            <span className="text-neutral-700 text-2xl d-flex"> <i className="ph-bold ph-clock"></i></span>
                                            <span className="text-neutral-700 text-lg fw-normal">End Date</span>
                                        </div>
                                        <span className="text-lg fw-medium text-neutral-700">20/05/24</span>
                                    </div>
                                    <div className=" flex-between flex-wrap gap-16 border-bottom border-dashed border-top-0 border-end-0 border-start-0 border-neutral-40 pb-16 mb-16">
                                        <div className="flex-align gap-12">
                                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-users-three"></i></span>
                                            <span className="text-neutral-700 text-lg fw-normal">Ongoing</span>
                                        </div>
                                        <span className="text-lg fw-medium text-neutral-700">5.5k</span>
                                    </div>
                                    <div className=" flex-between flex-wrap gap-16">
                                        <div className="flex-align gap-12">
                                            <span className="text-neutral-700 text-2xl d-flex"> <i className="ph-bold ph-map-pin-line"></i> </span>
                                            <span className="text-neutral-700 text-lg fw-normal">Location</span>
                                        </div>
                                        <span className="text-lg fw-medium text-neutral-700">Coppell, Virginia</span>
                                    </div>
                                </div>
                                <div className="rounded-12 bg-main-25 p-24 ">
                                    <div className=" flex-between flex-wrap gap-16 border-bottom border-dashed border-top-0 border-end-0 border-start-0 border-neutral-40 pb-16 mb-16">
                                        <h2 className="mb-0">$199</h2>
                                        <div className="border border-neutral-30 rounded-pill p-4 bg-white max-w-176 w-100 d-flex justify-content-between">
                                            <button type="button" className="quantity__minus item-active-effect transition-1 flex-shrink-0 text-main-600 text-xl hover-text-white w-44 h-44 rounded-circle bg-main-50 hover-bg-main-600 hover-border-main-600 hover-text-white flex-center">
                                                <i className="ph-bold ph-minus"></i>
                                            </button>
                                            <input type="text" className="quantity__input flex-grow-1 common-input border-0 text-center text-32 fw-semibold text-neutral-700 p-0" value="1" />
                                            <button type="button" className="quantity__plus item-active-effect transition-1 flex-shrink-0 text-main-600 text-xl hover-text-white w-44 h-44 rounded-circle bg-main-50 hover-bg-main-600 hover-border-main-600 hover-text-white flex-center"><i className="ph-bold ph-plus"></i></button>
                                        </div>
                                    </div>
                                    <div className=" flex-between flex-wrap gap-16 border-bottom border-dashed border-top-0 border-end-0 border-start-0 border-neutral-40 pb-16 mb-16">
                                        <div className="flex-align gap-12">
                                            <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-file-text"></i></span>
                                            <span className="text-neutral-700 text-lg fw-normal">Total Quantity</span>
                                        </div>
                                        <span className="text-lg fw-medium text-neutral-700">01</span>
                                    </div>
                                    <div className=" flex-between flex-wrap gap-16">
                                        <div className="flex-align gap-12">
                                            <span className="text-neutral-700 text-2xl d-flex"> <i className="ph-bold ph-tag"></i></span>
                                            <span className="text-neutral-700 text-lg fw-normal">Total Price</span>
                                        </div>
                                        <span className="text-lg fw-medium text-neutral-700">$199</span>
                                    </div>
                                </div>

                                <span className="d-block border-bottom border-top-0 border-dashed border-main-100 my-32"></span>
                                <a href="/contact" className="btn btn-main rounded-pill flex-center gap-8">
                                    Join Now
                                    <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                                </a>
                                <ul className="social-list flex-center gap-8 mt-24">
                                    <li className="social-list__item">
                                        <a href="https://www.facebook.com" className="text-main-600 text-xl hover-text-white w-44 h-44 rounded-circle bg-main-50 hover-bg-main-600 hover-border-main-600 hover-text-white flex-center"><i className="ph-bold ph-facebook-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.twitter.com" className="text-main-600 text-xl hover-text-white w-44 h-44 rounded-circle bg-main-50 hover-bg-main-600 hover-border-main-600 hover-text-white flex-center"> <i className="ph-bold ph-twitter-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.linkedin.com" className="text-main-600 text-xl hover-text-white w-44 h-44 rounded-circle bg-main-50 hover-bg-main-600 hover-border-main-600 hover-text-white flex-center"><i className="ph-bold ph-instagram-logo"></i></a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="https://www.pinterest.com" className="text-main-600 text-xl hover-text-white w-44 h-44 rounded-circle bg-main-50 hover-bg-main-600 hover-border-main-600 hover-text-white flex-center"><i className="ph-bold ph-pinterest-logo"></i></a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
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
