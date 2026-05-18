import React from 'react';

export default function AdminReviewsSection() {
  return (
    <>
      {/* ============Feedbacks start============ */}
      <div className="px-24 py-24">
        <div className="px-24 py-24 bg-white rounded-10">
          <div className="d-flex align-items-center justify-content-between mb-24">
            <h6 className="mb-0 fw-medium">Reviews</h6>
          </div>
          <div className="mb-24">
            <div className="overflow-y-auto">
              <table id="example-five" className="display min-w-max w-100">
                <thead>
                  <tr className="bg-main-25 border-bottom border-neutral-30">
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20 text-start">Course</th>
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20 text-start">Reviews</th>
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20 text-start">Feedback</th>
                    <th className="text-12 fw-medium text-neutral-500 py-16 px-20 text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">Automation System</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">Laboratory Expansion</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">Cleanroom Upgrade</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">Quality Control</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">Analytical Equipment</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">Vaccine Development</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">Packaging Line</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">IT Infrastructure</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">Clinical Trials</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">Clinical Trials</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">Cold Chain</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
                      <div className="d-flex align-items-center gap-12 justify-content-end">
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-pencil-simple-line"></i></button>
                        <button type="button" className="text-24 text-neutral-500"><i className="ph-bold ph-trash"></i></button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover-bg-neutral-20 border-bottom transition-03">
                    <td className="py-28 px-20 shadow-none text-start">
                      <span className="fw-normal text-12 text-neutral-500">IT Infrastructure</span>
                    </td>
                    <td className="text-14 fw-normal py-28 px-20 shadow-none text-start">
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
                    <td className="py-28 px-20 shadow-none text-start">(3 Reviews)</td>
                    <td className="py-28 px-20 shadow-none">
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
