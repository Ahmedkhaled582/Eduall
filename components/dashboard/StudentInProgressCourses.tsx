import React from 'react';

export default function StudentInProgressCourses() {
  return (
    <>
      <h5 className="mb-16 text-neutral-500">In progress Courses</h5>
      <div className="row gy-4">

        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="600">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img5.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div className="">
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
                <div className="">
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>

                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-25 w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%"}}>
                      </div>
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
                  <img src="/assets/images/thumbs/student-dashbord-img2.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Eleanor Pena</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img1.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div className="">
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
                <div className="">
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>

                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-25 w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%"}}>
                      </div>
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
                  <img src="/assets/images/thumbs/enroll-student-img4.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Annette Black</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img3.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div className="">
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
                <div className="">
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>

                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-25 w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%"}}>
                      </div>
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
                  <img src="/assets/images/thumbs/testimonial-five-img2.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Courtney Henry</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img4.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div className="">
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
                <div className="">
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>

                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-25 w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%"}}>
                      </div>
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
                  <img src="/assets/images/thumbs/savannah-nguyen.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Savannah Nguyen</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img2.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div className="">
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
                <div className="">
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>

                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-25 w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%"}}>
                      </div>
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
                  <img src="/assets/images/thumbs/user-two-img5.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Jenny Wilson</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-duration="800">
          <div className="course-item bg-white rounded-16 p-12 h-100 box-shadow-md">
            <div className="course-item__thumb rounded-12 overflow-hidden">
              <a href="/course-details" className="w-100 h-100">
                <img src="/assets/images/thumbs/dashbord-courses-img6.png" alt="Course Image" className="course-item__img rounded-12 cover-img transition-2" />
              </a>
            </div>
            <div className="course-item__content">
              <div className="">
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
                <div className="">
                  <span className="text-neutral-700 text-20 fw-medium">Complete</span>
                </div>

                <div className="progress-wrapper d-flex align-items-center flex-column gap-4" data-perc="85%">
                  <div className="h-50-px position-relative w-100 d-flex">
                    <span className="floating-label position-absolute text-14 text-main-600 fw-normal radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center" style={{"left":"85%","bottom":"30px"}}>
                      85%
                    </span>
                    <div className="progress mt-auto h-25 w-100 bg-primary-50 rounded-pill" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={50}>
                      <div className="progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible" style={{"width":"85%"}}>
                      </div>
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
                  <img src="/assets/images/thumbs/reviewer-img2.png" alt="" className="w-28 h-28" />
                  <span className="fw-normal text-14 text-neutral-400">Arlene McCoy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
