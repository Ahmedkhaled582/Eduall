import React from 'react';

export default function AdminCoursesSection() {
  return (
    <>
      {/* =========message profile start=========== */}
      <div className="px-24 py-24">
        <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap mb-24">
          <h4 className="text-neutral-500 fw-semibold">Courses</h4>
          <div className="d-flex align-items-center gap-8">
            <ul className="nav nav-pills common-tab gap-16" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link rounded-pill bg-white text-md fw-medium text-neutral-500 flex-center w-100 gap-8 active" id="pills-categories-tab" data-bs-toggle="pill" data-bs-target="#pills-categories" type="button" role="tab" aria-controls="pills-categories" aria-selected="true">
                  Publish
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link rounded-pill bg-white text-md fw-medium text-neutral-500 flex-center w-100 gap-8" id="pills-design-tab" data-bs-toggle="pill" data-bs-target="#pills-design" type="button" role="tab" aria-controls="pills-design" aria-selected="false">
                  Pending
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link rounded-pill bg-white text-md fw-medium text-neutral-500 d-flex justify-content-center align-items-center w-100 gap-2" id="pills-webDesign-tab" data-bs-toggle="pill" data-bs-target="#pills-webDesign" type="button" role="tab" aria-controls="pills-webDesign" aria-selected="false">
                  Draft
                </button>
              </li>                        
            </ul>
          </div>
        </div>
        
        <div className="tab-content" id="pills-tabContent">
          {/* Publish Tab */}
          <div className="tab-pane fade show active" id="pills-categories" role="tabpanel" aria-labelledby="pills-categories-tab" tabIndex={0}>
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Finance</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/enroll-student-img4.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Annette Black</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Design</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/user-two-img5.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Jenny Wilson</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Data & Tech</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/testimonial-five-img2.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Courtney Henry</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="900">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Creative Arts</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/savannah-nguyen.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Savannah Nguyen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Business</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/user-two-img4.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Eleanor Pena</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Health</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/reviewer-img2.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Arlene McCoy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Tab */}
          <div className="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab" tabIndex={0}>
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Finance</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/enroll-student-img4.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Annette Black</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Design</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/user-two-img5.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Jenny Wilson</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Data & Tech</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/testimonial-five-img2.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Courtney Henry</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="900">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Creative Arts</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/savannah-nguyen.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Savannah Nguyen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Business</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/user-two-img4.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Eleanor Pena</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Health</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/reviewer-img2.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Arlene McCoy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Draft Tab */}
          <div className="tab-pane fade" id="pills-webDesign" role="tabpanel" aria-labelledby="pills-webDesign-tab" tabIndex={0}>
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Finance</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/enroll-student-img4.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Annette Black</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Design</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/user-two-img5.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Jenny Wilson</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Data & Tech</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/testimonial-five-img2.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Courtney Henry</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="900">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Creative Arts</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/savannah-nguyen.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Savannah Nguyen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Business</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/user-two-img4.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Eleanor Pena</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
                <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
                  <div className="course-item__thumb rounded-12 overflow-hidden">
                    <a href="/course-details" className="w-100 h-100">
                      <img src="/assets/images/thumbs/dashbord-courses-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                    </a>
                  </div>
                  <div className="course-item__content">
                    <div>
                      <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">Health</span>
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
                    <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 flex-wrap">
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
                        <img src="/assets/images/thumbs/reviewer-img2.png" alt="" className="w-28 h-28" />
                        <span className="fw-normal text-14 text-neutral-400">Arlene McCoy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mb-24 mt-24">
          <ul className="d-flex align-items-center gap-12 text-center align-items-center justify-content-center">
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              <i className="ph-bold ph-caret-left"></i>
            </li>
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              1
            </li>
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              2
            </li>
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              3
            </li>
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              <i className="ph-bold ph-dots-three"></i>
            </li>
            <li className="bg-white border-neutral-30 border w-40 h-40 rounded-circle text-24 align-items-center justify-content-center d-flex text-neutral-700 hover-bg-main-600 hover-text-white transition-04">
              <i className="ph-bold ph-caret-right"></i>
            </li>
          </ul>
        </div>
      </div>
      {/* ============message profile end========== */}
    </>
  );
}
