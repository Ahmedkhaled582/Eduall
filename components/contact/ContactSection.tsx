import React from 'react';

export default function ContactSection() {
  return (
    <>
      {/* =============================== Contact Section Start ================================== */}
      <section className="contact py-120">
        <div className="container">
          <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16">
              <span className="text-main-600 text-2xl d-flex">
                <i className="ph-bold ph-book"></i>
              </span>
              <h5 className="text-main-600 mb-0">Get In Touch</h5>
            </div>
            <h2 className="mb-24">Let us help you</h2>
            <p className="">Our platform is built on the principles of innovation, quality, and inclusivity, aiming to provide a seamless learning</p>
          </div>
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <div className="contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                  <i className="ph ph-map-pin-line"></i>
                </span>
                <div className="flex-grow-1">
                  <h4 className="mb-12">Main Office</h4>
                  <p className="text-neutral-500">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                  <a href="#" className="text-main-600 fw-semibold text-decoration-underline mt-16">Find Location</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                  <i className="ph ph-envelope-open"></i>
                </span>
                <div className="flex-grow-1">
                  <h4 className="mb-12">Email Address</h4>
                  <p className="text-neutral-500">infoexample@gmail.com</p>
                  <p className="text-neutral-500">example@gmail.com</p>
                  <a href="mailto:infoexample@gmail.com" className="text-main-600 fw-semibold text-decoration-underline mt-16">Get In Touch</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                  <i className="ph ph-phone-call"></i>
                </span>
                <div className="flex-grow-1">
                  <h4 className="mb-12">Phone Number</h4>
                  <p className="text-neutral-500">(505) 555-0125</p>
                  <p className="text-neutral-500">(406) 555-0120</p>
                  <a href="tel:(406)555-0120" className="text-main-600 fw-semibold text-decoration-underline mt-16">Contact Us Today!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============================== Contact Section End ================================== */}
    </>
  );
}
