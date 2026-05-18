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
      
      {/* ============== student dashbord banner section start =============== */}
<section className="breadcrumb pt-80 pb-187 bg-neutral-900 position-relative z-1 overflow-hidden mb-0 z-n1">
    <img src="/assets/images/shapes/shape1.png" alt="" className="position-absolute inset-block-start-5-persent inset-inline-start-45-persent animation-rotation d-md-block d-none" />
    <img src="/assets/images/shapes/shape2.png" alt="" className="position-absolute inset-inline-start-0-persent inset-block-end-0-persent animation-scalation d-md-block d-none" />
    <img src="/assets/images/shapes/shape3.png" alt="" className="position-absolute inset-inline-end-35-persent inset-block-end-30-persent animation-walking d-md-block d-none" />
    <img src="/assets/images/shapes/shape5.png" alt="" className="shape six animation-walking d-md-block d-none" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="position-absolute inset-inline-end-40-persent inset-block-start-5-persent animation-scalation" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="position-absolute inset-inline-end-2-persent inset-block-end-45-persent animation-scalation" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="position-absolute inset-block-end-30-persent inset-inline-end-45-persent animation-scalation" />
    <img src="/assets/images/shapes/shape4.png" alt="" className="shape nine animation-scalation" />
    
    <div className="container container--lg">
        <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap">
            <div className="breadcrumb__wrapper">
                <h1 className="breadcrumb__title display-4 fw-semibold text-white mb-20">Student Dashboard</h1>
                <ul className="breadcrumb__list d-flex align-items-center gap-4 flex-wrap">
                    <li className="breadcrumb__item">
                        <a href="/" className="breadcrumb__link text-white hover-text-warning-800 fw-medium">Home</a>
                    </li>
                    <li className="breadcrumb__item">
                        <i className="text-white d-flex ph-bold ph-caret-right"></i>
                    </li>
                    <li className="breadcrumb__item">
                        <a href="/admin-dashbord" className="breadcrumb__link text-white hover-text-warning-800 fw-medium">Dashboard</a> 
                    </li>
                    <li className="breadcrumb__item @@arrowTwoShowHide">
                        <i className="text-white d-flex ph-bold ph-caret-right"></i>
                    </li>
                    <li className="breadcrumb__item"> 
                        <span className="text-main-two-600">Student Dashboard</span> 
                    </li>
                </ul>
            </div>
            <div>
                <a href="/instructor" className="border-warning-800 border px-32 py-16 rounded-pill text-warning-800 hover-bg-warning-900 hover-text-white">Become an Instructor</a>
            </div>
        </div>
    </div>
</section>
{/* ============== student dashbord banner section end =============== */}

{/* =========== student dashbord section start ============== */}
<section className="bg-main-25 pb-80 w-100 h-100">
    <div className="container container--lg">
        <div className="d-flex gap-24 mt--120 z-2 position-relative">
            <div className="student-overlay-sidebar"></div>
            
{/* ========Dashdord Sidebar start======== */}
<div className="student-dashboard-sidebar px-20 py-24 max-w-288-px bg-white rounded-10 w-100 position-relative">
    <div className="text-center">
        <img src="/assets/images/thumbs/student-dashbord-img-1.png" alt="" className="mb-20" />
        <h5 className="mb-4 text-neutral-500">Wade Warren</h5>
        <span className="text-neutral-500 text-14 fw-normal">info@example.com </span>
    </div>
    <span className="w-100 bg-neutral-40 mb-24 mt-24 h-1"></span>
     <div className="overflow-x-auto">
        <div className="student-dashbord-scrollbar min-w-max"> 
            <span className="text-neutral-500 fw-normal text-14 mb-8">Welcome Warren,</span>
               <ul>
                   <li className="mb-8">
                       <a href="/student-dashbord" className="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph-bold ph-house"></i></span>
                       Dashboard</a>
                   </li>
                   <li className="mb-8">
                       <a href="/student-dashbord-my-profile" className="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-user-circle"></i></span>
                       My Profile</a>
                   </li>
                   <li className="mb-8">
                       <a href="/student-dashbord-message" className="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-chat-dots"></i></span>
                        Message</a>
                   </li>
                   <li className="mb-8">
                       <a href="/student-dashbord-enrolled-courses" className="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-watch"></i></span>
                       Enrolled Courses</a>
                   </li>
                   <li className="mb-8">
                       <a href="/student-dashbord-wishlist" className="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-bookmark-simple"></i></span>
                       Wishlist</a>
                   </li>
                   <li className="mb-8">
                       <a href="/student-dashbord-reviews" className="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-sparkle"></i></span>
                       Reviews</a>
                   </li>
                   <li className="mb-8">
                       <a href="/student-dashbord-my-quiz-attempts" className="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-seal-question"></i></span>
                       Quiz Attempts</a>
                   </li>
                   <li className="mb-8">
                       <a href="/student-dashbord-assignment" className="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-file-text"></i></span>
                       Assignment</a>
                   </li>
                   <li className="mb-8">
                       <a href="/student-dashbord-settings" className="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap">
                       <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-gear"></i></span>
                       Settings</a>
                   </li>
               </ul>
           </div>
     </div>

     <div className="position-absolute inset-block-end-0 inset-inline-start-0 pb-16 px-16 w-100">
         <a href="/sign-in" className=" text-14 fw-medium text-neutral-500 d-flex align-items-center gap-8  hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap bg-white">
             <span className="text-16 text-main-600 item-hover__text transition-03">
                 <i className="ph ph-sign-out"></i>
             </span>
             Logout
         </a>
     </div>
</div>
{/* ========Dashdord Sidebar end======== */}

                {/* ============Feedbacks start============ */}
            <div className="w-100">
        
                <div className="px-24 py-24 bg-white rounded-10">
                    <div className="d-flex align-items-center justify-content-between">
                        <h6 className="mb-0 fw-medium">Reviews</h6>
                        <button type="button" className="toggle-student-dashbord-button text-neutral-900 text-32 d-xl-none d-block">
                            <i className="ph-bold ph-list"></i>
                        </button>
                    </div>
                    <div className="mb-24">
                        
                        <div className="overflow-x-auto">
                            <table id="example-five" className="display min-w-max w-100">
                                <thead>
                                    <tr className="bg-main-25 border-bottom border-neutral-30">
                                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Course</th>
                                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Reviews</th>
                                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Feedback</th>
                                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">Automation System</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                                 <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">Laboratory Expansion</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                                 <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">Cleanroom Upgrade</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                                 <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">Quality Control</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                                 <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">Analytical Equipment</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                                 <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">Vaccine Development</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                                 <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">Packaging Line</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                             <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                            <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                        </div>
                                        </td>
                                    </tr>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">IT Infrastructure</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                                 <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">Clinical Trials</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                                 <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">Clinical Trials</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                                 <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">Cold Chain</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                                 <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                    <tr className="hover-bg-neutral-20 border-bottom transition-03">
                                        <td className="py-28 px-20 shadow-none">
                                            <span className="fw-normal text-12 text-neutral-500">IT Infrastructure</span>
                                        </td>
                                        <td className="text-14 fw-normal py-28 px-20 shadow-none">
                                            <div>
                                                <ul className="d-flex align-items-center gap-6">
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star"></i></li>
                                                    <li className="text-20 text-warning-600"><i className="ph-fill ph-star-half"></i></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="py-28 px-20 shadow-none">(3 Reviews)</td>
                                        <td className="py-28 px-20 shadow-none">
                                            <div className="d-flex align-items-center gap-12  justify-content-end">
                                                 <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                                                <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
            
                                </tbody>
                            </table>
                        </div>
    
                    </div>
        
                    <div className="d-flex align-items-center gap-24 justify-content-between flex-wrap">
                        <div className="form-check form-switch">
                            <input className="form-check-input focus-box-shadow" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label text-14 fw-normal text-neutral-500" htmlFor="flexSwitchCheckDefault">Dense</label>
                        </div>
                        <div className="d-flex align-items-center gap-40 flex-wrap">
        
                            <div className="d-flex align-items-center gap-16">
                                <span className="fw-normal text-14 text-neutral-500">Rows per page:</span>
                                <select className="form-select w-auto pe-32 text-14 fw-normal text-neutral-500 bg-transparent border-0">
                                    <option value="1">12</option>
                                    <option value="1">13</option>
                                    <option value="1">11</option>
                                    <option value="1">15</option>
                                </select>
                            </div>
        
                            <div className="d-flex align-items-center gap-16">
                                <span className="fw-normal text-14 text-neutral-500">1-12 of 100</span>
                                <div className="d-flex align-items-center gpa-8">
                                    <span className="text-20 text-neutral-500">
                                        <i className="ph-bold ph-caret-left"></i>
                                    </span>
                                    <span className="text-20 text-neutral-500">
                                        <i className="ph-bold ph-caret-right"></i>
                                    </span>
                                </div>
                            </div>
        
                        </div>
        
                    </div>
        
                </div>
            </div>
            {/* ============Feedbacks end============ */}
        </div>            
    </div>
</section>
{/* =========== student dashbord section end ============== */}

<Footer />
    </>
  );
}
