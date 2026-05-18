import React from 'react';

export default function InstructorMainSection() {
  return (
    <div className="w-100 animate-fade-in">   
      <div className="mb-32">
        <div className="d-flex align-items-center gap-16 justify-content-between">
          <h5 className="mb-16 text-white">Dashboard</h5>
          <button type="button" className="toggle-student-dashbord-button text-white text-32 d-xl-none d-block">
            <i className="ph-bold ph-list"></i>
          </button>
        </div>
        <div className="row gy-4">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="bg-white px-20 py-20 rounded-10">
              <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap mb-16">
                <div>
                  <span className="text-14 fw-normal text-neutral-400 mb-4">All Courses</span>
                  <h6 className="text-18 fw-semibold mb-0">35</h6>
                </div>
                <div className="w-44 h-44 bg-main-600 rounded-circle text-white text-20 d-flex align-items-center justify-content-center">
                  <img src="/assets/images/icons/dashbord-item1.png" alt="" />
                </div>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="bg-white px-20 py-20 rounded-10">
              <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap mb-16">
                <div>
                  <span className="text-14 fw-normal text-neutral-400 mb-4">Enrolled Courses</span>
                  <h6 className="text-18 fw-semibold mb-0">15</h6>
                </div>
                <div className="w-44 h-44 bg-success-600 rounded-circle text-white text-20 d-flex align-items-center justify-content-center">
                  <img src="/assets/images/icons/dashbord-item2.png" alt="" />
                </div>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="bg-white px-20 py-20 rounded-10">
              <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap mb-16">
                <div>
                  <span className="text-14 fw-normal text-neutral-400 mb-4">Active Courses</span>
                  <h6 className="text-18 fw-semibold mb-0">11</h6>
                </div>
                <div className="w-44 h-44 bg-warning-700 rounded-circle text-white text-20 d-flex align-items-center justify-content-center">
                  <img src="/assets/images/icons/dashbord-item3.png" alt="" />
                </div>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="bg-white px-20 py-20 rounded-10">
              <div className="d-flex align-items-center gap-10 justify-content-between flex-wrap mb-16">
                <div>
                  <span className="text-14 fw-normal text-neutral-400 mb-4">Completed Courses</span>
                  <h6 className="text-18 fw-semibold mb-0">4</h6>
                </div>
                <div className="w-44 h-44 bg-warning-700 rounded-circle text-white text-20 d-flex align-items-center justify-content-center">
                  <img src="/assets/images/icons/dashbord-item4.png" alt="" />
                </div>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="bg-white px-20 py-20 rounded-10">
              <div className="d-flex align-items-center gap-10 justify-content-between flex-wrap mb-16">
                <div>
                  <span className="text-14 fw-normal text-neutral-400 mb-4">Total Students</span>
                  <h6 className="text-18 fw-semibold mb-0">4</h6>
                </div>
                <div className="w-44 h-44 bg-main-600 rounded-circle text-white text-20 d-flex align-items-center justify-content-center">
                  <img src="/assets/images/icons/dashbord-item5.png" alt="" />
                </div>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="bg-white px-20 py-20 rounded-10">
              <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap mb-16">
                <div>
                  <span className="text-14 fw-normal text-neutral-400 mb-4">Total Earnings</span>
                  <h6 className="text-18 fw-semibold mb-0">$56,542.00</h6>
                </div>
                <div className="w-44 h-44 bg-success-600 rounded-circle text-white text-20 d-flex align-items-center justify-content-center">
                  <img src="/assets/images/icons/dashbord-item6.png" alt="" />
                </div>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>
        </div>
      </div>

      {/* In progress Courses */}
      <h5 className="mb-16 text-neutral-500">In progress Courses</h5>
      <div className="row gy-4">
        {/* Course 1 */}
        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div>
                <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03">Finance</span>
                <div className="flex-between gap-8 flex-wrap mb-16">
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">25 Lessons</span>
                  </div>
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">2.6K Students</span>
                  </div>
                </div>
                <h4 className="mb-28">
                  <a href="/course-details" className="link text-line-2 fw-semibold">Financial Accounting</a>
                </h4>
              </div>

              <div className="mb-40">
                <div>
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>
                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"--LeftPercentage":"85%","animationName":"animateFloatingLabel","left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-6px w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%","height":"6px"}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-between gap-8 mt-28 flex-wrap">
                <div>
                  <ul className="d-flex align-items-center gap-6 mb-8">
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star-half"></i></li>
                  </ul>
                  <span className="fw-normal text-14 text-neutral-300">4.8/5 (1.5K Reviews)</span>
                </div>
                <div className="d-flex align-items-center gap-8">
                  <img src="/assets/images/thumbs/instructor-dashboard-img2.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Annette Black</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course 2 */}
        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div>
                <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03">Design</span>
                <div className="flex-between gap-8 flex-wrap mb-16">
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">25 Lessons</span>
                  </div>
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">2.6K Students</span>
                  </div>
                </div>
                <h4 className="mb-28">
                  <a href="/course-details" className="link text-line-2 fw-semibold">Introduction to Animation</a>
                </h4>
              </div>

              <div className="mb-40">
                <div>
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>
                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"--LeftPercentage":"85%","animationName":"animateFloatingLabel","left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-6px w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%","height":"6px"}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-between gap-8 mt-28 flex-wrap">
                <div>
                  <ul className="d-flex align-items-center gap-6 mb-8">
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star-half"></i></li>
                  </ul>
                  <span className="fw-normal text-14 text-neutral-300">4.8/5 (1.5K Reviews)</span>
                </div>
                <div className="d-flex align-items-center gap-8">
                  <img src="/assets/images/thumbs/instructor-dashboard-img2.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Jenny Wilson</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course 3 */}
        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="1000">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div>
                <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03">Data & Tech</span>
                <div className="flex-between gap-8 flex-wrap mb-16">
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">25 Lessons</span>
                  </div>
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">2.6K Students</span>
                  </div>
                </div>
                <h4 className="mb-28">
                  <a href="/course-details" className="link text-line-2 fw-semibold">Graphic Design</a>
                </h4>
              </div>

              <div className="mb-40">
                <div>
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>
                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"--LeftPercentage":"85%","animationName":"animateFloatingLabel","left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-6px w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%","height":"6px"}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-between gap-8 mt-28 flex-wrap">
                <div>
                  <ul className="d-flex align-items-center gap-6 mb-8">
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star-half"></i></li>
                  </ul>
                  <span className="fw-normal text-14 text-neutral-300">4.8/5 (1.5K Reviews)</span>
                </div>
                <div className="d-flex align-items-center gap-8">
                  <img src="/assets/images/thumbs/instructor-dashboard-img2.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Courtney Henry</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course 4 */}
        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="1200">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div>
                <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03">Creative Arts</span>
                <div className="flex-between gap-8 flex-wrap mb-16">
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">25 Lessons</span>
                  </div>
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">2.6K Students</span>
                  </div>
                </div>
                <h4 className="mb-28">
                  <a href="/course-details" className="link text-line-2 fw-semibold">UI/UX Design Principles</a>
                </h4>
              </div>

              <div className="mb-40">
                <div>
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>
                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"--LeftPercentage":"85%","animationName":"animateFloatingLabel","left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-6px w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%","height":"6px"}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-between gap-8 mt-28 flex-wrap">
                <div>
                  <ul className="d-flex align-items-center gap-6 mb-8">
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star-half"></i></li>
                  </ul>
                  <span className="fw-normal text-14 text-neutral-300">4.8/5 (1.5K Reviews)</span>
                </div>
                <div className="d-flex align-items-center gap-8">
                  <img src="/assets/images/thumbs/instructor-dashboard-img2.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Savannah Nguyen</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course 5 */}
        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="1400">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div>
                <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03">Business</span>
                <div className="flex-between gap-8 flex-wrap mb-16">
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">25 Lessons</span>
                  </div>
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">2.6K Students</span>
                  </div>
                </div>
                <h4 className="mb-28">
                  <a href="/course-details" className="link text-line-2 fw-semibold">Cybersecurity Essentials</a>
                </h4>
              </div>

              <div className="mb-40">
                <div>
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>
                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"--LeftPercentage":"85%","animationName":"animateFloatingLabel","left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-6px w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%","height":"6px"}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-between gap-8 mt-28 flex-wrap">
                <div>
                  <ul className="d-flex align-items-center gap-6 mb-8">
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star-half"></i></li>
                  </ul>
                  <span className="fw-normal text-14 text-neutral-300">4.8/5 (1.5K Reviews)</span>
                </div>
                <div className="d-flex align-items-center gap-8">
                  <img src="/assets/images/thumbs/instructor-dashboard-img2.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Eleanor Pena</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course 6 */}
        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="1600">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div>
                <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03">Health</span>
                <div className="flex-between gap-8 flex-wrap mb-16">
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph-bold ph-video-camera"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">25 Lessons</span>
                  </div>
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="text-neutral-700 text-2xl d-flex"><i className="ph ph-user-circle"></i></span>
                    <span className="text-neutral-700 text-16 fw-medium">2.6K Students</span>
                  </div>
                </div>
                <h4 className="mb-28">
                  <a href="/course-details" className="link text-line-2 fw-semibold">Nutrition and Healthy</a>
                </h4>
              </div>

              <div className="mb-40">
                <div>
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>
                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"--LeftPercentage":"85%","animationName":"animateFloatingLabel","left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-6px w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%","height":"6px"}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-between gap-8 mt-28 flex-wrap">
                <div>
                  <ul className="d-flex align-items-center gap-6 mb-8">
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star"></i></li>
                    <li className="text-16 text-warning-400"><i className="ph-fill ph-star-half"></i></li>
                  </ul>
                  <span className="fw-normal text-14 text-neutral-300">4.8/5 (1.5K Reviews)</span>
                </div>
                <div className="d-flex align-items-center gap-8">
                  <img src="/assets/images/thumbs/instructor-dashboard-img2.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Arlene McCoy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedbacks table */}
      <div className="w-100 mt-32 overflow-x-auto">
        <div className="px-24 py-24 bg-white rounded-10">
          <h6 className="mb-0 fw-medium">Total Feedbacks</h6>
          <div className="mb-24">
            <div>
              <table id="example-five" className="display min-w-max w-100">
                <thead>
                  <tr className="bg-main-25">
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Course Name</th>
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Rating</th>
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Enrolled</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">8</td>
                  </tr>

                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">13</td>
                  </tr>

                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">24</td>
                  </tr>

                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">30</td>
                  </tr>

                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">11</td>
                  </tr>

                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">33</td>
                  </tr>

                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">40</td>
                  </tr>

                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">14</td>
                  </tr>

                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">36</td>
                  </tr>

                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">17</td>
                  </tr>

                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">22</td>
                  </tr>

                  <tr className="hover-bg-neutral-20 transition-03">
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
                    <td className="py-28 px-20 shadow-none">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="d-flex align-items-center gap-24 justify-content-between flex-wrap">
            <div className="form-check form-switch d-flex align-items-center gap-8">
              <input className="form-check-input focus-box-shadow w-60 h-32" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
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
    </div>
  );
}
