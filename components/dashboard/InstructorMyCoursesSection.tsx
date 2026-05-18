import React from 'react';

export default function InstructorMyCoursesSection() {
  return (
    <div className="w-100 animate-fade-in">
      <div>
        <div className="d-flex align-items-center gap-8 justify-content-between flex-wrap">
          <div className="d-flex align-items-center gap-16 flex-wrap">
            <h6 className="text-white">Enrolled Courses</h6>
            <button type="button" className="toggle-student-dashbord-button text-white text-24 d-xl-none d-block">
              <i className="ph-bold ph-list"></i>
            </button>
          </div>
          <div className="nav-tab-wrapper p-16 d-inline-block" data-aos="zoom-out">
            <ul className="nav nav-pills common-tab gap-8" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 py-8 active" id="pills-categories-tab" data-bs-toggle="pill" data-bs-target="#pills-categories" type="button" role="tab" aria-controls="pills-categories" aria-selected="true">
                  Publish
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100" id="pills-design-tab" data-bs-toggle="pill" data-bs-target="#pills-design" type="button" role="tab" aria-controls="pills-design" aria-selected="false">
                  Pending
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100" id="pills-programming-tab" data-bs-toggle="pill" data-bs-target="#pills-programming" type="button" role="tab" aria-controls="pills-programming" aria-selected="false">
                  Draft
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-categories" role="tabpanel" aria-labelledby="pills-categories-tab" tabIndex={0}>
            {/* progress Courses start  */}
            <div className="row gy-4">
              {[
                { img: "dashbord-courses-img1.png", tag: "Finance", title: "Financial Accounting" },
                { img: "dashbord-courses-img2.png", tag: "Design", title: "Introduction to Animation" },
                { img: "dashbord-courses-img3.png", tag: "Data & Tech", title: "Graphic Design" },
                { img: "dashbord-courses-img4.png", tag: "Creative Arts", title: "UI/UX Design Principles" },
                { img: "dashbord-courses-img5.png", tag: "Business", title: "Cybersecurity Essentials" },
                { img: "dashbord-courses-img6.png", tag: "Health", title: "Nutrition and Healthy" }
              ].map((course, idx) => (
                <div key={idx} className="col-xl-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={(600 + idx * 200).toString()}>
                  <div className="course-item bg-white rounded-16 p-12 box-shadow-md">
                    <div className="course-item__thumb rounded-12 overflow-hidden">
                      <a href="/course-details" className="w-100 h-100">
                        <img src={`/assets/images/thumbs/${course.img}`} alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                      </a>
                    </div>
                    <div className="course-item__content">
                      <div>
                        <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">{course.tag}</span>
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
                        <h4 className="mb-24">
                          <a href="/course-details" className="link text-line-2 fw-semibold">{course.title}</a>
                        </h4>
                      </div>

                      <div className="flex-between gap-8 mt-28 flex-wrap border-neutral-30 border-top pt-24">
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
                          <img src="/assets/images/thumbs/instructor-dashboard-my-courses.png" alt="" className="w-28 h-28" />
                          <span className="fw-normal text-14 text-neutral-400">Jenny Wilson</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* progress Courses end  */}

            <div className="d-flex align-items-center text-center gap-12 justify-content-center mt-32">
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                <i className="ph-bold ph-caret-left"></i>
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                1
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                2
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                3
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                <i className="ph-bold ph-dots-three"></i>
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                <i className="ph-bold ph-caret-right"></i>
              </button>
            </div>
          </div>
          
          <div className="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab" tabIndex={0}>
            {/* progress Courses start  */}
            <div className="row gy-4">
              {[
                { img: "dashbord-courses-img1.png", tag: "Finance", title: "Financial Accounting" },
                { img: "dashbord-courses-img2.png", tag: "Design", title: "Introduction to Animation" },
                { img: "dashbord-courses-img3.png", tag: "Data & Tech", title: "Graphic Design" },
                { img: "dashbord-courses-img4.png", tag: "Creative Arts", title: "UI/UX Design Principles" },
                { img: "dashbord-courses-img5.png", tag: "Business", title: "Cybersecurity Essentials" },
                { img: "dashbord-courses-img6.png", tag: "Health", title: "Nutrition and Healthy" }
              ].map((course, idx) => (
                <div key={idx} className="col-xl-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={(600 + idx * 200).toString()}>
                  <div className="course-item bg-white rounded-16 p-12 box-shadow-md">
                    <div className="course-item__thumb rounded-12 overflow-hidden">
                      <a href="/course-details" className="w-100 h-100">
                        <img src={`/assets/images/thumbs/${course.img}`} alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                      </a>
                    </div>
                    <div className="course-item__content">
                      <div>
                        <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">{course.tag}</span>
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
                        <h4 className="mb-24">
                          <a href="/course-details" className="link text-line-2 fw-semibold">{course.title}</a>
                        </h4>
                      </div>

                      <div className="flex-between gap-8 mt-28 flex-wrap border-neutral-30 border-top pt-24">
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
                          <img src="/assets/images/thumbs/instructor-dashboard-my-courses.png" alt="" className="w-28 h-28" />
                          <span className="fw-normal text-14 text-neutral-400">Jenny Wilson</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* progress Courses end  */}

            <div className="d-flex align-items-center text-center gap-12 justify-content-center mt-32">
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                <i className="ph-bold ph-caret-left"></i>
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                1
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                2
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                3
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                <i className="ph-bold ph-dots-three"></i>
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                <i className="ph-bold ph-caret-right"></i>
              </button>
            </div>
          </div>

          <div className="tab-pane fade" id="pills-programming" role="tabpanel" aria-labelledby="pills-programming-tab" tabIndex={0}>
            {/* progress Courses start  */}
            <div className="row gy-4">
              {[
                { img: "dashbord-courses-img1.png", tag: "Finance", title: "Financial Accounting" },
                { img: "dashbord-courses-img2.png", tag: "Design", title: "Introduction to Animation" },
                { img: "dashbord-courses-img3.png", tag: "Data & Tech", title: "Graphic Design" },
                { img: "dashbord-courses-img4.png", tag: "Creative Arts", title: "UI/UX Design Principles" },
                { img: "dashbord-courses-img5.png", tag: "Business", title: "Cybersecurity Essentials" },
                { img: "dashbord-courses-img6.png", tag: "Health", title: "Nutrition and Healthy" }
              ].map((course, idx) => (
                <div key={idx} className="col-xl-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={(600 + idx * 200).toString()}>
                  <div className="course-item bg-white rounded-16 p-12 box-shadow-md">
                    <div className="course-item__thumb rounded-12 overflow-hidden">
                      <a href="/course-details" className="w-100 h-100">
                        <img src={`/assets/images/thumbs/${course.img}`} alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
                      </a>
                    </div>
                    <div className="course-item__content">
                      <div>
                        <span className="px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03 d-inline-block">{course.tag}</span>
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
                        <h4 className="mb-24">
                          <a href="/course-details" className="link text-line-2 fw-semibold">{course.title}</a>
                        </h4>
                      </div>

                      <div className="flex-between gap-8 mt-28 flex-wrap border-neutral-30 border-top pt-24">
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
                          <img src="/assets/images/thumbs/instructor-dashboard-my-courses.png" alt="" className="w-28 h-28" />
                          <span className="fw-normal text-14 text-neutral-400">Jenny Wilson</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* progress Courses end  */}

            <div className="d-flex align-items-center text-center gap-12 justify-content-center mt-32">
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                <i className="ph-bold ph-caret-left"></i>
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                1
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                2
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                3
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                <i className="ph-bold ph-dots-three"></i>
              </button>
              <button type="button" className="text-neutral-900 text-24 w-40 h-40 border-neutra-30 border rounded-circle hover-bg-main-600 hover-text-white transition-03 align-items-center justify-content-center d-flex">
                <i className="ph-bold ph-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
