import React from 'react';

export default function AdminQuizAttemptsSection() {
  return (
    <>
      {/* ============Feedbacks start============ */}
      <div className="px-24 py-24">
        <div className="px-24 py-24 bg-white rounded-10">
          <div className="mb-24">
            <h6 className="fw-medium text-16 text-neutral-500 mb-24">My Quiz Attempts</h6>
            <div className="row gy-4">
              <div className="col-lg-4 col-md-2">
                <div>
                  <span className="fw-normal text-14 text-neutral-500 mb-12 d-block">Courses</span>
                  <select className="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal text-neutral-700 line-height-105">
                    <option value="1">All</option>
                    <option value="2">Everyone</option>
                    <option value="3">One</option>  
                    <option value="4">Two</option>  
                  </select>
                </div>
              </div>

              <div className="col-lg-4 col-md-2">
                <div>
                  <span className="fw-normal text-14 text-neutral-500 mb-12 d-block">Sort By :</span>
                  <select className="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal text-neutral-700 line-height-105">
                    <option value="1">Default</option>
                    <option value="2">date</option>
                    <option value="3">Category</option>
                    <option value="4">Rating</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-4 col-md-2">
                <div>
                  <span className="fw-normal text-14 text-neutral-500 mb-12 d-block">Sort By Offer :</span>
                  <select className="form-select pe-24 border-neutral-40 border rounded-pill bg-main-25 px-20 py-10 w-100 text-12 fw-normal text-neutral-700 line-height-105">
                    <option value="1">Free</option>
                    <option value="2">Basic</option>
                    <option value="3">Standard</option>
                    <option value="4">Premium</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <div className="overflow-y-auto">
              <table id="example-five" className="display min-w-max w-100">
                <thead>
                  <tr className="bg-main-25 border-bottom border-neutral-30">
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20 text-start">Quiz</th>
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20 text-start">Date</th>
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20 text-start">Qus</th>
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20 text-start">TM</th>
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20 text-start">CA</th>
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20 text-start">Result</th>
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20 text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Financial Planning for Millennials</h4>
                      <span className="fw-normal text-12 text-neutral-500">Brooklyn Simmons</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">4</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">7</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">1</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Photography for Beginners</h4>
                      <span className="fw-normal text-12 text-neutral-500">Ralph Edwards</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">4</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">4</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">8</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Adobe Photoshop Essentials</h4>
                      <span className="fw-normal text-12 text-neutral-500">Cameron Williamson</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">9</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">3</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">1</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Leadership and Management Essentials</h4>
                      <span className="fw-normal text-12 text-neutral-500">Kristin Watson</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">6</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">1</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">2</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Web Development Bootcamp</h4>
                      <span className="fw-normal text-12 text-neutral-500">Annette Black</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">4</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">1</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">6</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Digital Marketing Fundamentals</h4>
                      <span className="fw-normal text-12 text-neutral-500">Courtney Henry</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">4</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">3</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">2</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Digital Marketing 101</h4>
                      <span className="fw-normal text-12 text-neutral-500">Bessie Cooper</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">2</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">3</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">5</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Introduction to Python Programming</h4>
                      <span className="fw-normal text-12 text-neutral-500">Albert Flores</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">6</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">3</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">8</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Social Media Strategy</h4>
                      <span className="fw-normal text-12 text-neutral-500">Esther Howard</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">8</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">6</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">9</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Project Management Fundamentals</h4>
                      <span className="fw-normal text-12 text-neutral-500">Jane Cooper</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">2</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">5</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">7</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-success-50 px-20 py-8 border-neutral-30 border rounded-pill text-success-600">Pass</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Social Media Strategy</h4>
                      <span className="fw-normal text-12 text-neutral-500">Jacob Jones</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">9</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">8</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">6</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <h4 className="fw-medium text-14 text-neutral-500 mb-1">Creative Writing Essentials</h4>
                      <span className="fw-normal text-12 text-neutral-500">Cody Fisher</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none line-height-105 text-start">January 20, 2025</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">1</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">6</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">5</td>
                    <td className="py-28 px-20 shadow-none line-height-105 text-start">
                      <span className="bg-warning-30 px-20 py-8 border-neutral-30 border rounded-pill text-warning-600">Fail</span>
                    </td>
                    <td className="py-28 px-20 shadow-none line-height-105">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="d-flex align-items-center gap-24 justify-content-between flex-wrap">
            <div className="form-check form-switch">
              <input className="form-check-input focus-box-shadow" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
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
                <div className="d-flex align-items-center gap-8">
                  <span className="text-20 text-neutral-500 cursor-pointer">
                    <i className="ph-bold ph-caret-left"></i>
                  </span>
                  <span className="text-20 text-neutral-500 cursor-pointer">
                    <i className="ph-bold ph-caret-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============Feedbacks end============ */}
    </>
  );
}
