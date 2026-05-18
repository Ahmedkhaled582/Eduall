import React from 'react';

export default function AdminDashboardSection() {
  return (
    <>
      {/* =====dashbord body item start===== */}
      <div className="px-24 py-24">
        <h4 className="fw-semibold text-neutral-500 text-20 ">Dashboard</h4>
        <div className="row gy-4">
          <div className="col-xl-4 col-sm-6">
            <div className="px-20 py-20 bg-white rounded-10">
              <div className="d-flex gap-16 justify-content-between mb-12">
                <div>
                  <span className="fw-normal text-14 text-neutral-400 mb-4">Total Courses</span>
                  <h6 className="text-18 fw-semibold text-neutral-500 mb-0">2000+</h6>
                </div>
                <span className="w-44 h-44 bg-main-600 rounded-circle justify-content-center align-items-center d-flex">
                  <img src="/assets/images/icons/dashbord-item1.png" alt="" />
                </span>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6">
            <div className="px-20 py-20 bg-white rounded-10">
              <div className="d-flex gap-16 justify-content-between mb-12">
                <div>
                  <span className="fw-normal text-14 text-neutral-400 mb-4">Enrolled Courses</span>
                  <h6 className="text-18 fw-semibold text-neutral-500 mb-0">900+</h6>
                </div>
                <span className="w-44 h-44 bg-success-600 rounded-circle justify-content-center align-items-center d-flex">
                  <img src="/assets/images/icons/dashbord-item2.png" alt="" />
                </span>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6">
            <div className="px-20 py-20 bg-white rounded-10">
              <div className="d-flex gap-16 justify-content-between mb-12">
                <div>
                  <span className="fw-normal text-14 text-neutral-400 mb-4">Active Courses</span>
                  <h6 className="text-18 fw-semibold text-neutral-500 mb-0">100+</h6>
                </div>
                <span className="w-44 h-44 bg-warning-600 rounded-circle justify-content-center align-items-center d-flex">
                  <img src="/assets/images/icons/dashbord-item3.png" alt="" />
                </span>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6">
            <div className="px-20 py-20 bg-white rounded-10">
              <div className="d-flex gap-16 justify-content-between mb-12">
                <div>
                  <span className="fw-normal text-14 text-neutral-400 mb-4">Completed Courses</span>
                  <h6 className="text-18 fw-semibold text-neutral-500 mb-0">1000+</h6>
                </div>
                <span className="w-44 h-44 bg-warning-600 rounded-circle justify-content-center align-items-center d-flex">
                  <img src="/assets/images/icons/dashbord-item4.png" alt="" />
                </span>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6">
            <div className="px-20 py-20 bg-white rounded-10">
              <div className="d-flex gap-16 justify-content-between mb-12">
                <div>
                  <span className="fw-normal text-14 text-neutral-400 mb-4">Total Students</span>
                  <h6 className="text-18 fw-semibold text-neutral-500 mb-0">88,000+</h6>
                </div>
                <span className="w-44 h-44 bg-main-600 rounded-circle justify-content-center align-items-center d-flex">
                  <img src="/assets/images/icons/dashbord-item5.png" alt="" />
                </span>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6">
            <div className="px-20 py-20 bg-white rounded-10">
              <div className="d-flex gap-16 justify-content-between mb-12">
                <div>
                  <span className="fw-normal text-14 text-neutral-400 mb-4">Total Earnings</span>
                  <h6 className="text-18 fw-semibold text-neutral-500 mb-0">$956,542.00</h6>
                </div>
                <span className="w-44 h-44 bg-success-600 rounded-circle justify-content-center align-items-center d-flex">
                  <img src="/assets/images/icons/dashbord-item6.png" alt="" />
                </span>
              </div>
              <a href="#" className="text-12 fw-medium text-main-600 text-decoration-underline transition-03">View all</a>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="bg-white px-20 py-20 rounded-10 z-n1">
              <div className="d-flex align-items-center justify-content-between gpa-24">
                <span className="text-16 fw-medium text-neutral-400">Overview Information</span>
                <div className="d-flex align-items-center gap-8">
                  <span className="fw-medium text-12 text-neutral-400">Sort By :</span>
                  <select className="form-select text-12 w-auto pe-26 border-neutral-40 border bg-main-25 px-16 py-8 fw-normal">
                    <option value="1">Last 2 years</option>
                    <option value="1">Last 3 years</option>
                    <option value="1">Last 4 years</option>
                    <option value="1">Last 1 years</option>
                  </select>
                </div>
              </div>
              <span className="mt-20 mb-20 border-bottom-solid d-inline-block w-100"></span>
              <div id="react-chart"></div>
              <div className="d-flex justify-content-center text-center">
                <ul className="d-flex align-items-center gap-24">
                  <li className="text-14 fw-normal d-flex align-items-center gap-8 text-neutral-500">
                    <span className="w-6 h-6 bg-main-600 rounded-circle z-1 flex-shrink-0"></span>
                    Total Students
                  </li>
                  <li className="text-14 fw-normal d-flex align-items-center gap-8 text-neutral-500">
                    <span className="w-6 h-6 bg-warning-600 rounded-circle z-1 flex-shrink-0"></span>
                    Total Courses
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="px-20 py-20 bg-white rounded-10 z-n1">
              <div className="d-flex align-items-center justify-content-between gpa-24">
                <span className="text-14 fw-normal text-neutral-500">Reports</span>
                <div className="d-flex align-items-center gap-8">
                  <span className="fw-normal text-12 text-neutral-400">Sort By :</span>
                  <select className="form-select w-auto pe-26 border-neutral-40 border text-12 bg-main-25 px-16 py-8">
                    <option value="1">Weekly</option>
                    <option value="1">yearly</option>
                    <option value="1">monthly</option>
                    <option value="1">daly</option>
                  </select>
                </div>
              </div>
              <span className="mt-20 mb-20 border-bottom-solid d-inline-block w-100"></span>
              <div id="donutChart"></div>
              <span className="mt-20 mb-20 border-bottom-solid d-inline-block w-100"></span>
              <div className="d-flex align-items-center flex-wrap gap-20">
                <ul>
                  <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12 mb-16">
                    <span className="w-6 h-6 bg-primary-500 rounded-circle z-1"></span>
                    Total Courses
                  </li>
                  <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12">
                    <span className="w-6 h-6 bg-purple-500 rounded-circle z-1"></span>
                    Enrolled Courses
                  </li>
                </ul>
                <span className="h-50-px bg-neutral-40 w-1"></span>
                <ul>
                  <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12 mb-16">
                    <span className="w-6 h-6 bg-warning-700 rounded-circle z-1"></span>
                    Active Courses
                  </li>
                  <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12">
                    <span className="w-6 h-6 bg-success-600 rounded-circle z-1"></span>
                    Completed Courses
                  </li>
                </ul>
                <span className="h-50-px bg-neutral-40 w-1"></span>
                <ul>
                  <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12 mb-16">
                    <span className="w-6 h-6 bg-primary-700 rounded-circle z-1"></span>
                    Total Students
                  </li>
                  <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12">
                    <span className="w-6 h-6 bg-warning-500 rounded-circle z-1"></span>
                    Total Earnings
                  </li>
                </ul>
              </div>
              <span className="mt-20 border-bottom-solid d-inline-block w-100"></span>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="px-24 py-24 bg-white rounded-10">
              <div className="d-flex align-items-center justify-content-between mb-24">
                <h6 className="mb-0 fw-medium text-16 text-neutral-500">Popular Instructor</h6>
                <a href="#" className="text-12 fw-medium text-main-600 hover-underline transition-03">View all</a>
              </div>
              <div>
                <div className="overflow-x-auto">
                  <table id="example" className="display min-w-max">
                    <thead>
                      <tr className="bg-main-25 border-bottom flex-wrap">
                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Instructor</th>
                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Courses</th>
                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Students</th>
                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Reviews</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <img src="/assets/images/thumbs/testi-img2.png" alt="" className="w-32 h-32" />
                            <span className="fw-medium text-14 text-neutral-500">Kathryn Murphy</span>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">17</td>
                        <td className="py-22 text-14 fw-normal text-neutral-500 px-20 shadow-none">2132</td>
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                            <span className="text-20 text-warning-600">
                              <i className="ph-fill ph-star"></i>
                            </span>
                            4.8(55K+ Students)
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <img src="/assets/images/thumbs/user-two-img5.png" alt="" className="w-32 h-32" />
                            <span className="fw-medium text-14 text-neutral-500">Leslie Alexander</span>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">6</td>
                        <td className="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">234</td>
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                            <span className="text-20 text-warning-600">
                              <i className="ph-fill ph-star"></i>
                            </span>
                            4.8(55K+ Students)
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <img src="/assets/images/thumbs/user-two-img3.png" alt="" className="w-32 h-32" />
                            <span className="fw-medium text-14 text-neutral-500">Savannah Nguyen</span>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">12</td>
                        <td className="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">113</td>
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                            <span className="text-20 text-warning-600">
                              <i className="ph-fill ph-star"></i>
                            </span>
                            4.8(55K+ Students)
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <img src="/assets/images/thumbs/user-two-img1.png" alt="" className="w-32 h-32" />
                            <span className="fw-medium text-14 text-neutral-500">Ralph Edwards</span>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">13</td>
                        <td className="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">231</td>
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                            <span className="text-20 text-warning-600">
                              <i className="ph-fill ph-star"></i>
                            </span>
                            4.8(55K+ Students)
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <img src="/assets/images/thumbs/testimonial-five-img3.png" alt="" className="w-32 h-32" />
                            <span className="fw-medium text-14 text-neutral-500">Jane Cooper</span>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">8</td>
                        <td className="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">190</td>
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                            <span className="text-20 text-warning-600">
                              <i className="ph-fill ph-star"></i>
                            </span>
                            4.8(55K+ Students)
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <img src="/assets/images/thumbs/reviewer-img4.png" alt="" className="w-32 h-32" />
                            <span className="fw-medium text-14 text-neutral-500">Kristin Watson</span>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">1</td>
                        <td className="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">121</td>
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                            <span className="text-20 text-warning-600">
                              <i className="ph-fill ph-star"></i>
                            </span>
                            4.8(55K+ Students)
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-neutral-25 border-bottom transition-03">
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <img src="/assets/images/thumbs/reviewer-img3.png" alt="" className="w-32 h-32" />
                            <span className="fw-medium text-14 text-neutral-500">Wade Warren</span>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 px-20 shadow-none line-height-1 text-neutral-500">5</td>
                        <td className="py-22 px-20 text-14 fw-normal text-neutral-500 shadow-none">623</td>
                        <td className="py-22 px-20 shadow-none line-height-1">
                          <div className="fw-normal text-14 d-flex align-items-center gap-8 text-neutral-500">
                            <span className="text-20 text-warning-600">
                              <i className="ph-fill ph-star"></i>
                            </span>
                            4.8(55K+ Students)
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="px-24 py-24 bg-white rounded-10">
              <div className="d-flex align-items-center justify-content-between mb-24">
                <h6 className="mb-0 fw-medium text-16 text-neutral-500">Recent Course</h6>
                <a href="#" className="text-12 fw-medium text-main-600 hover-underline transition-03">View all</a>
              </div>
              <div>
                <div className="overflow-x-auto">
                  <table id="example-two" className="display min-w-max">
                    <thead>
                      <tr className="bg-main-25 border-bottom border-neutral-30">
                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Course Title | Hours</th>
                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Total Lesson</th>
                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Students</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 line-height-1 px-20 shadow-none">
                          <div className="d-flex align-items-center gap-12">
                            <a href="#">
                              <img src="/assets/images/thumbs/dashboard-img1.png" alt="" className="w-48 h-32" />
                            </a>
                            <div>
                              <h6 className="fw-medium text-14 mb-0 text-neutral-500">Vuejs Courses</h6>
                              <span className="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-14 fw-normal text-neutral-500 py-22 line-height-1 px-20 shadow-none">10</td>
                        <td className="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">193</td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 line-height-1 px-20 shadow-none">
                          <div className="d-flex align-items-center gap-12">
                            <a href="#">
                              <img src="/assets/images/thumbs/dashboard-img2.png" alt="" className="w-48 h-32" />
                            </a>
                            <div>
                              <h6 className="fw-medium text-14 mb-0 text-neutral-500">Swift Courses</h6>
                              <span className="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">16</td>
                        <td className="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">193</td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 line-height-1 px-20 shadow-none">
                          <div className="d-flex align-items-center gap-12">
                            <a href="#">
                              <img src="/assets/images/thumbs/dashboard-img3.png" alt="" className="w-48 h-32" />
                            </a>
                            <div>
                              <h6 className="fw-medium text-14 mb-0 text-neutral-500">Objective C Courses</h6>
                              <span className="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">5</td>
                        <td className="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">542</td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 line-height-1 px-20 shadow-none">
                          <div className="d-flex align-items-center gap-12">
                            <a href="#">
                              <img src="/assets/images/thumbs/dashboard-img4.png" alt="" className="w-48 h-32" />
                            </a>
                            <div>
                              <h6 className="fw-medium text-14 mb-0 text-neutral-500">NodeJS Courses</h6>
                              <span className="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">20</td>
                        <td className="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">321</td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 line-height-1 px-20 shadow-none">
                          <div className="d-flex align-items-center gap-12">
                            <a href="#">
                              <img src="/assets/images/thumbs/dashboard-img5.png" alt="" className="w-48 h-32" />
                            </a>
                            <div>
                              <h6 className="fw-medium text-14 mb-0 text-neutral-500">CSS3 Courses</h6>
                              <span className="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">12</td>
                        <td className="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">113</td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-22 line-height-1 px-20 shadow-none">
                          <div className="d-flex align-items-center gap-12">
                            <a href="#">
                              <img src="/assets/images/thumbs/dashboard-img6.png" alt="" className="w-48 h-32" />
                            </a>
                            <div>
                              <h6 className="fw-medium text-14 mb-0 text-neutral-500">Angular Courses</h6>
                              <span className="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">8</td>
                        <td className="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">4734</td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-neutral-25 border-bottom transition-03">
                        <td className="py-22 line-height-1 px-20 shadow-none">
                          <div className="d-flex align-items-center gap-12">
                            <a href="#">
                              <img src="/assets/images/thumbs/dashboard-img7.png" alt="" className="w-48 h-32" />
                            </a>
                            <div>
                              <h6 className="fw-medium text-14 mb-0 text-neutral-500">Jango Courses</h6>
                              <span className="fw-normal text-12 text-neutral-500">5 hr 45 min</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-14 fw-normal py-22 line-height-1 px-20 shadow-none text-neutral-500">7</td>
                        <td className="py-22 line-height-1 px-20 shadow-none text-14 fw-normal text-neutral-500">472</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="px-24 py-24 bg-white rounded-10">
              <div className="d-flex align-items-center justify-content-between mb-24">
                <h6 className="mb-0 fw-medium text-16 text-neutral-500">Notifications</h6>
                <a href="#" className="text-12 fw-medium text-main-600 hover-underline transition-03">View all</a>
              </div>
              <div>
                <div className="overflow-x-auto">
                  <table id="example-three" className="display min-w-max">
                    <thead>
                      <tr className="bg-main-25 border-bottom border-neutral-30">
                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Notification | Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notification-img1.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 text-neutral-500 mb-3 text-start">Sarah just posted something new. Take a look!</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">a minute ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notification-img2.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 text-neutral-500 mb-3 text-start">Trending content: 'Hidden Gems of the City.' You won't want to miss it!</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">3 hours ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notification-img3.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 text-neutral-500 mb-3 text-start">Trending content: 'Hidden Gems of the City.' You won't want to miss it!</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">3 weeks ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notification-img4.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 text-neutral-500 mb-3 text-start">Someone commented on your recent post 'Exploring the Wilderness': 'Amazing photos!</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">1 months ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notification-img5.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 text-neutral-500 mb-3 text-start">We've shared a fresh article: '10 Tips for Healthy Living.' Check it out!</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">3 months ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notification-img6.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 text-neutral-500 mb-3 text-start">Great news! Your content 'Epic Road Trip' is now featured on the homepage.</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">5 months ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notification-img7.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 text-neutral-500 mb-3 text-start">Join the discussion on our article 'Eco-Friendly Living.' Share your thoughts!</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">7 months ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="px-24 py-24 bg-white rounded-10">
              <div className="d-flex align-items-center justify-content-between mb-24">
                <h6 className="mb-0 fw-medium text-16 text-neutral-500">Notice Board</h6>
                <a href="#" className="text-12 fw-medium text-main-600 hover-underline transition-03">View all</a>
              </div>
              <div>
                <div className="overflow-x-auto">
                  <table id="example-four" className="display min-w-max">
                    <thead>
                      <tr className="bg-main-25 border-bottom border-neutral-30">
                        <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Notice | Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notice-img1.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 mb-3 text-neutral-500 text-start">Instructional Management Tools Software</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">a minute ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notice-img2.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 mb-3 text-neutral-500 text-start">Software Maintenance and Support</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">3 hours ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notice-img3.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 mb-3 text-neutral-500 text-line-1 text-start">Cloud computing capabilities to conduct a Zero Trust Pilot project</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">3 weeks ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notice-img4.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 mb-3 text-neutral-500 text-start">Legal Library Software</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">1 months ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notice-img5.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 mb-3 text-neutral-500 text-start">Judiciary Cloud Services </h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">3 months ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notice-img6.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 mb-3 text-neutral-500 text-start">CIPS Personnel Tracking System (PTS) Integration</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">5 months ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-bg-neutral-20 border-bottom transition-03">
                        <td className="py-20 px-20 shadow-none line-height-1">
                          <div className="d-flex align-items-center gap-12">
                            <span className="flex-shrink-0">
                              <img src="/assets/images/thumbs/dashbord-notice-img7.png" alt="" className="w-32 h-32" />
                            </span>
                            <div>
                              <h6 className="fw-medium text-14 mb-3 text-neutral-500 text-line-1 text-start">Cloud Operations, Security, Management and Optimization at Speed of Commercial (COSMOS)</h6>
                              <span className="fw-normal text-12 text-neutral-500 d-block text-start">7 months ago</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="px-24 py-24 bg-white rounded-10">
              <div className="d-flex align-items-center justify-content-between mb-24">
                <h6 className="mb-0 fw-medium text-16 text-neutral-500">Total Feedbacks</h6>
                <a href="#" className="text-12 fw-medium text-main-600 hover-underline transition-03">View all</a>
              </div>
              <div className="mb-24">
                <div className="overflow-x-auto">
                  <div className="min-w-max">
                    <div className="table-responsive">
                      <table id="example-five" className="display nowrap" style={{ width: '100%' }}>
                        <thead>
                          <tr className="bg-main-25 border-bottom border-neutral-30">
                            <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Course Name</th>
                            <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Rating</th>
                            <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Enrolled</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover-bg-neutral-20 border-bottom transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">Automation System</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">8</td>
                          </tr>
                          <tr className="hover-bg-neutral-20 border-bottom transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">Laboratory Expansion</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">13</td>
                          </tr>
                          <tr className="hover-bg-neutral-20 border-bottom transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">Cleanroom Upgrade</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">24</td>
                          </tr>
                          <tr className="hover-bg-neutral-20 border-bottom transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">Quality Control</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">30</td>
                          </tr>
                          <tr className="hover-bg-neutral-20 border-bottom transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">Analytical Equipment</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">11</td>
                          </tr>
                          <tr className="hover-bg-neutral-20 border-bottom transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">Vaccine Development</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">33</td>
                          </tr>
                          <tr className="hover-bg-neutral-20 border-bottom transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">Packaging Line</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">40</td>
                          </tr>
                          <tr className="hover-bg-neutral-20 border-bottom transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">IT Infrastructure</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">14</td>
                          </tr>
                          <tr className="hover-bg-neutral-20 border-bottom transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">Clinical Trials</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">36</td>
                          </tr>
                          <tr className="hover-bg-neutral-20 border-bottom transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">Clinical Trials</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">17</td>
                          </tr>
                          <tr className="hover-bg-neutral-20 border-bottom transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">Cold Chain</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">22</td>
                          </tr>
                          <tr className="hover-bg-neutral-20 transition-03">
                            <td className="py-28 px-20 shadow-none line-height-1">
                              <span className="fw-normal text-14 text-neutral-500">IT Infrastructure</span>
                            </td>
                            <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-1">
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
                            <td className="py-28 px-20 shadow-none line-height-1 fw-normal text-14 text-neutral-500">3</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-24 justify-content-between flex-wrap">
                <div className="form-check form-switch d-flex align-items-center gap-12">
                  <input className="form-check-input focus-box-shadow w-60 h-32 line-height-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label text-14 fw-normal text-neutral-500 line-height-1" htmlFor="flexSwitchCheckDefault">Dense</label>
                </div>
                <div className="d-flex align-items-center gap-40 flex-wrap">
                  <div className="d-flex align-items-center gap-16">
                    <span className="fw-normal text-14 text-neutral-500">Rows per page:</span>
                    <select className="form-select w-auto pe-32 text-14 fw-normal text-neutral-500 bg-transparent border-0" defaultValue="12">
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="11">11</option>
                      <option value="15">15</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-16">
                    <span className="fw-normal text-14 text-neutral-500">1-12 of 100</span>
                    <div className="d-flex align-items-center gap-8">
                      <span className="text-16 text-neutral-500">
                        <i className="ph-bold ph-caret-left"></i>
                      </span>
                      <span className="text-16 text-neutral-500">
                        <i className="ph-bold ph-caret-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =====dashbord body item end===== */}
    </>
  );
}
