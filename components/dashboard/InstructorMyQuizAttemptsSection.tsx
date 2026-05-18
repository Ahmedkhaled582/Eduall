import React from 'react';

export default function InstructorMyQuizAttemptsSection() {
  return (
    <div className="w-100 animate-fade-in">
      {/* ============Feedbacks start============ */}
      <div className="px-24 py-24 bg-white rounded-10">
        <div className="d-flex align-items-center gap-8 justify-content-between">
          <h6 className="mb-0 fw-medium">Quiz Attempts</h6>
          <button type="button" className="toggle-student-dashbord-button text-neutral-900 text-24 d-xl-none d-block">
            <i className="ph-bold ph-list"></i>
          </button>
        </div>

        <div className="mb-24">
          <div className="">
            <table id="example-five" className="display min-w-max w-100 overflow-x-auto">
              <thead>
                <tr className="bg-main-25">
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Quiz</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Date</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Qus</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">TM</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">CA</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Result</th>
                  <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Financial Planning for Millennials</h6>
                      <span className="fw-normal text-12 text-neutral-500">Brooklyn Simmons</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">4</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">7</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">1</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-success-500 border-neutral-30 border rounded-pill bg-main-05 px-16 py-8">Pass</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Photography for Beginners</h6>
                      <span className="fw-normal text-12 text-neutral-500">Ralph Edwards</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">4</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">4</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">8</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-success-500 border-neutral-30 border rounded-pill bg-main-05 px-16 py-8">Pass</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Adobe Photoshop Essentials</h6>
                      <span className="fw-normal text-12 text-neutral-500">Cameron Williamson</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">9</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">3</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">1</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-warning-600 border-neutral-30 border rounded-pill bg-warning-5 px-16 py-8">Fail</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Leadership and Management Essentials</h6>
                      <span className="fw-normal text-12 text-neutral-500">Kristin Watson</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">6</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">1</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">2</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-success-500 border-neutral-30 border rounded-pill bg-main-05 px-16 py-8">Pass</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Web Development Bootcamp</h6>
                      <span className="fw-normal text-12 text-neutral-500">Annette Black</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">4</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">1</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">6</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-success-500 border-neutral-30 border rounded-pill bg-main-05 px-16 py-8">Pass</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Digital Marketing Fundamentals</h6>
                      <span className="fw-normal text-12 text-neutral-500">Courtney Henry</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">4</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">3</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">2</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-warning-600 border-neutral-30 border rounded-pill bg-warning-5 px-16 py-8">Fail</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Digital Marketing 101</h6>
                      <span className="fw-normal text-12 text-neutral-500">Bessie Cooper</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">2</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">3</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">5</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-success-500 border-neutral-30 border rounded-pill bg-main-05 px-16 py-8">Pass</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Introduction to Python Programming</h6>
                      <span className="fw-normal text-12 text-neutral-500">Albert Flores</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">6</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">3</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">8</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-warning-600 border-neutral-30 border rounded-pill bg-warning-5 px-16 py-8">Fail</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Social Media Strategy</h6>
                      <span className="fw-normal text-12 text-neutral-500">Esther Howard</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">8</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">6</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">9</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-warning-600 border-neutral-30 border rounded-pill bg-warning-5 px-16 py-8">Fail</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Project Management Fundamentals</h6>
                      <span className="fw-normal text-12 text-neutral-500">Jane Cooper</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">2</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">5</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">7</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-success-500 border-neutral-30 border rounded-pill bg-main-05 px-16 py-8">Pass</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Social Media Strategy</h6>
                      <span className="fw-normal text-12 text-neutral-500">Jacob Jones</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">9</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">8</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">6</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-warning-600 border-neutral-30 border rounded-pill bg-warning-5 px-16 py-8">Fail</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover-bg-neutral-20 transition-03">
                  <td className="py-28 px-20 shadow-none">
                    <div>
                      <h6 className="fw-medium text-14 text-neutral-500 mb-5">Creative Writing Essentials</h6>
                      <span className="fw-normal text-12 text-neutral-500">Cody Fisher</span>
                    </div>
                  </td>
                  <td className="text-14 fw-normal text-neutral-500 py-28 px-20 shadow-none">January 20, 2025</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">1</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">6</td>
                  <td className="py-28 px-20 shadow-none text-14 fw-normal text-neutral-500">5</td>
                  <td className="py-22 px-16 shadow-none">
                    <span className="text-12 fw-normal text-warning-600 border-neutral-30 border rounded-pill bg-warning-5 px-16 py-8">Fail</span>
                  </td>
                  <td className="py-28 px-20 shadow-none">
                    <div className="d-flex align-items-center gap-12">
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-pencil-simple-line"></i>
                      </button>
                      <button type="button" className="text-neutral-500 text-24 hover-text-main-600 transition-03">
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
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
