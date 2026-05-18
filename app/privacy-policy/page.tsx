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
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> Privacy Policy</h1>
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
                            <span className="text-main-two-600"> Privacy Policy </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* =============================== Privacy Policy Section Start ================================== */}
    <section className="privacy-policy py-120">
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-8">
                    <div className="d-flex flex-column gap-40">
                        <div className="">
                            <h1 className="mb-16">Information We Collect</h1>
                            <p className="text-neutral-700">Thank you for choosing EduAll! Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how EduAll collects, uses, discloses, and safeguards your information when you use our education and online course platform, including any community features.</p>
                        </div>
                        <div className="">
                            <h3 className="mb-16">Account Information:</h3>
                            <ul className="list-dotted d-flex flex-column gap-24">
                                <li className="text-neutral-700"> When you create an account, we collect your name, email address, and other necessary details to create and manage your account.</li>
                                <li className="text-neutral-700"> We implement security measures to protect your information from unauthorized access, disclosure, alteration, or destruction.</li>
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="mb-16">Course Enrollment:</h4>
                            <ul className="list-dotted d-flex flex-column gap-24">
                                <li className="text-neutral-700">If you enroll in a course, we collect information related to your course progress, performance, and completion.</li>
                                <li className="text-neutral-700">You can opt-out of promotional emails, but we will still send essential communications related to your account and courses.</li>
                            </ul>
                        </div>
                        <div className="">
                            <h5 className="mb-16">Community Participation:</h5>
                            <ul className="list-dotted d-flex flex-column gap-24">
                                <li className="text-neutral-700">When you engage in community discussions or forums, we collect information related to your posts, comments, and interactions with other users.</li>
                            </ul>
                        </div>
                        <div className="">
                            <h6 className="mb-16"> Payment Information:</h6>
                            <ul className="list-dotted d-flex flex-column gap-24">
                                <li className="text-neutral-700"> If you make a purchase, we collect payment information, such as credit card details, to process transactions securely.</li>
                                <li className="text-neutral-700"> We may update this Privacy Policy periodically, and any changes will be posted on this page. It's your responsibility to review the policy for updates.</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-neutral-700 mt-32">Please remember to replace "Date" and "Contact" with the actual date and contact information for your platform. Additionally, ensure that the policy aligns with the legal requirements applicable to your region.</p>
                </div>
                <div className="col-lg-4">
                    <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25">
                        <h4 className="mb-16">More Some Policy</h4> 
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                        
                        <div className="d-flex align-items-center justify-content-between gap-24">
                            <div className="d-flex align-items-center gap-16">
                                <span className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl">
                                    <i className="ph ph-file-text"></i>
                                </span>
                                <div>
                                    <h6 className="text-xl mb-8 fw-medium">Personalization</h6>
                                    <span className="text-neutral-500 text-sm">Download & view our Policy</span>
                                </div>
                            </div>
                            <button type="button" className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl hover-bg-main-600 hover-border-main-600 hover-text-white">
                                <i className="ph ph-download-simple"></i>
                            </button>
                        </div>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>

                        <div className="d-flex align-items-center justify-content-between gap-24">
                            <div className="d-flex align-items-center gap-16">
                                <span className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl">
                                    <i className="ph ph-file-text"></i>
                                </span>
                                <div>
                                    <h6 className="text-xl mb-8 fw-medium">Communication</h6>
                                    <span className="text-neutral-500 text-sm">Download & view our Policy</span>
                                </div>
                            </div>
                            <button type="button" className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl hover-bg-main-600 hover-border-main-600 hover-text-white">
                                <i className="ph ph-download-simple"></i>
                            </button>
                        </div>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>

                        <div className="d-flex align-items-center justify-content-between gap-24">
                            <div className="d-flex align-items-center gap-16">
                                <span className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl">
                                    <i className="ph ph-file-text"></i>
                                </span>
                                <div>
                                    <h6 className="text-xl mb-8 fw-medium">Analytics</h6>
                                    <span className="text-neutral-500 text-sm">Download & view our Policy</span>
                                </div>
                            </div>
                            <button type="button" className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl hover-bg-main-600 hover-border-main-600 hover-text-white">
                                <i className="ph ph-download-simple"></i>
                            </button>
                        </div>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>

                        <div className="d-flex align-items-center justify-content-between gap-24">
                            <div className="d-flex align-items-center gap-16">
                                <span className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl">
                                    <i className="ph ph-file-text"></i>
                                </span>
                                <div>
                                    <h6 className="text-xl mb-8 fw-medium">Sharing Your Info</h6>
                                    <span className="text-neutral-500 text-sm">Download & view our Policy</span>
                                </div>
                            </div>
                            <button type="button" className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl hover-bg-main-600 hover-border-main-600 hover-text-white">
                                <i className="ph ph-download-simple"></i>
                            </button>
                        </div>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>

                        <div className="d-flex align-items-center justify-content-between gap-24">
                            <div className="d-flex align-items-center gap-16">
                                <span className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl">
                                    <i className="ph ph-file-text"></i>
                                </span>
                                <div>
                                    <h6 className="text-xl mb-8 fw-medium">Service Provider</h6>
                                    <span className="text-neutral-500 text-sm">Download & view our Policy</span>
                                </div>
                            </div>
                            <button type="button" className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl hover-bg-main-600 hover-border-main-600 hover-text-white">
                                <i className="ph ph-download-simple"></i>
                            </button>
                        </div>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>

                        <div className="d-flex align-items-center justify-content-between gap-24">
                            <div className="d-flex align-items-center gap-16">
                                <span className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl">
                                    <i className="ph ph-file-text"></i>
                                </span>
                                <div>
                                    <h6 className="text-xl mb-8 fw-medium">Security</h6>
                                    <span className="text-neutral-500 text-sm">Download & view our Policy</span>
                                </div>
                            </div>
                            <button type="button" className="w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl hover-bg-main-600 hover-border-main-600 hover-text-white">
                                <i className="ph ph-download-simple"></i>
                            </button>
                        </div>
                        <span className="d-block border border-neutral-30 my-24 border-dashed"></span>
                        <a href="/sign-in" className="h6 mb-0 text-main-600 fw-semibold hover-text-decoration-underline">
                            See All
                            <i className="ph-bold ph-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* =============================== Privacy Policy Section End ================================== */}

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
