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
                    <h1 className="breadcrumb__title display-4 fw-semibold text-center"> Sign In</h1>
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
                            <span className="text-main-two-600"> Sign In </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
{/* ==================== Breadcrumb End Here ==================== */}

    {/* ============================== Tutor Details Section Start ============================== */}
    <div className="account py-120 position-relative">
        <div className="container">
            <div className="row gy-4 align-items-center">
                <div className="col-lg-6">
                    <div className="bg-main-25 border border-neutral-30 rounded-8 p-32">
                        <div className="mb-40">
                            <h3 className="mb-16 text-neutral-500">Welcome Back!</h3>
                            <p className="text-neutral-500">Sign in to your account and join us</p>
                        </div>
                        <form action="#">
                            <div className="mb-24">
                                <label htmlFor="email" className="fw-medium text-lg text-neutral-500 mb-16">Enter Your Email ID</label>
                                <input type="email" className="common-input rounded-pill" id="email" placeholder="Enter Your Email..." />
                            </div>
                            <div className="mb-16">
                                <label htmlFor="password" className="fw-medium text-lg text-neutral-500 mb-16">Enter Your Password</label>
                                <div className="position-relative">
                                    <input type="password" className="common-input rounded-pill pe-44" id="password" placeholder="Enter Your Password..." />
                                    <span className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y ph-bold ph-eye-closed" id="#password"></span>
                                </div>
                            </div>
                            <div className="mb-16 text-end">
                                <a href="#" className="text-warning-600 hover-text-decoration-underline">Forget password</a>
                            </div>
                            <div className="mb-16">
                                <p className="text-neutral-500">Don't have an account? 
                                    <a href="/sign-up" className="fw-semibold text-main-600 hover-text-decoration-underline">Sign Up</a> 
                                </p>
                            </div>
                            <div className="mt-40">
                                <button type="submit" className="btn btn-main rounded-pill flex-center gap-8 mt-40">
                                    Sign In
                                    <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 d-lg-block d-none">
                    <div className="account-img">
                        <img src="/assets/images/thumbs/account-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* ============================== Tutor Details Section End ============================== */}
      
      <Footer />
    </>
  );
}
