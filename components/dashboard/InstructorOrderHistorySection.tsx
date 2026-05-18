import React from 'react';

export default function InstructorOrderHistorySection() {
  return (
    <div className="w-100 animate-fade-in">
      {/* ============Feedbacks start============ */}
      <div className="px-24 py-24 bg-white rounded-10">
        <div className="d-flex align-items-center gap-8 justify-content-between">
          <h6 className="mb-0 fw-medium">Order History</h6>
          <button type="button" className="toggle-student-dashbord-button text-neutral-900 text-24 d-xl-none d-block">
            <i className="ph-bold ph-list"></i>
          </button>
        </div>
        <div className="mb-24">
          <div className="">
            <table id="example-five" className="display min-w-max w-100 overflow-x-auto">
              <thead>
                <tr className="bg-main-25">
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Order ID</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Course Name</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Date</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Price</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#40922</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">PHP</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 92.93</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-success-600 bg-success-50 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">Success</span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#40922</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">React Courses</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 92.93</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-main-600 bg-main-05 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">Processing</span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#73920</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">Angular Courses</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 832</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-danger-300 bg-danger-50 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">Cancelled</span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#50924</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">Vuejs Courses</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 837.92</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-success-600 bg-success-50 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">Success</span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#63508</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">Objective C Courses</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 74.03</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-success-600 bg-success-50 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">Success</span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#91829</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">React Courses</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 73.02</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-warning-600 bg-warning-5 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">On Hold</span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#50929</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">Python Courses</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 91.83</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-success-600 bg-success-50 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">Success</span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#57394</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">Jango Courses</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 4500</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-main-600 bg-main-05 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">Processing</span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#89281</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">CSS3 Courses</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 802</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-danger-300 bg-danger-50 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">Cancelled</span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#29202</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">Swift Courses</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 783.83</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-warning-600 bg-warning-5 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">On Hold</span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#49463</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">Java Courses</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 839</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-main-600 bg-main-05 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">Processing</span>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <span className="fw-normal text-14 text-neutral-500">#84744</span>
                  </td>
                  <td className="text-14 fw-normal py-28 px-20 shadow-none text-neutral-500 text-14">LaravelCourses</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-neutral-500">$ 45.99</td>
                  <td className="py-22 px-16 shadow-none text-neutral-500">
                    <span className="text-danger-300 bg-danger-50 text-12 fw-normal px-20 py-8 border-neutral-30 border rounded-pill">Cancelled</span>
                  </td>
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
      {/* ============Feedbacks end============ */}
    </div>
  );
}
