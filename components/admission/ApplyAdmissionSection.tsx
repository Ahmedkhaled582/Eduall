import React from 'react';

export default function ApplyAdmissionSection() {
  return (
    <>
      {/* ================================ Apply For Admission Section Start =================================== */}
      <section className="py-120">
        <div className="container">
          <div className="border border-neutral-30 rounded-12 bg-main-25 p-24">
            <form onSubmit={(e) => e.preventDefault()}>
              <h3 className="mb-24">Apply for Admission</h3> 
    
              {/* Personal information Start */}
              <div className="border border-neutral-30 rounded-12 bg-white p-24">
                <h5 className="mb-0">Personal information</h5>
                <span className="d-block border border-main-50 my-24 border-dashed"></span>
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <label htmlFor="name" className="text-neutral-700 text-lg fw-medium mb-12">Student Name <span className="text-danger-600">*</span> </label>
                    <input type="text" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="name" placeholder="Enter Your Name..." />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email" className="text-neutral-700 text-lg fw-medium mb-12">Email <span className="text-danger-600">*</span> </label>
                    <input type="email" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="email" placeholder="Enter Your Email..." />
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="Phone" className="text-neutral-700 text-lg fw-medium mb-12">Phone <span className="text-danger-600">*</span> </label>
                    <input type="tel" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="Phone" placeholder="Enter Your Number..." />
                  </div>
                  <div className="col-sm-12">
                    <label className="text-neutral-700 text-lg fw-medium mb-12">Gender <span className="text-danger-600">*</span> </label>
                    <div className="flex-align gap-24">
                      <div className="form-check common-check common-radio mb-0">
                        <input className="form-check-input" type="radio" name="gender" id="Male" />
                        <label className="form-check-label fw-normal flex-grow-1" htmlFor="Male">Male</label>
                      </div>
                      <div className="form-check common-check common-radio mb-0">
                        <input className="form-check-input" type="radio" name="gender" id="Female" />
                        <label className="form-check-label fw-normal flex-grow-1" htmlFor="Female">Female</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="dateBirth" className="text-neutral-700 text-lg fw-medium mb-12">Date of birth <span className="text-danger-600">*</span> </label>
                    <input type="date" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="dateBirth" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="selectCity" className="text-neutral-700 text-lg fw-medium mb-12">Select city <span className="text-danger-600">*</span> </label>
                    <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="selectCity" defaultValue="">
                      <option value="">Dhaka</option>
                      <option value="chandpur">Chandpur</option>
                      <option value="rajshahi">Rajshahi</option>
                      <option value="rangpur">Rangpur</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="khulna">Khulna</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="selectState" className="text-neutral-700 text-lg fw-medium mb-12">Select city <span className="text-danger-600">*</span> </label>
                    <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="selectState" defaultValue="">
                      <option value="">Uttara</option>
                      <option value="mirpur">Mirpur</option>
                      <option value="baddha">Baddha</option>
                      <option value="gulshan">Gulshan</option>
                      <option value="banani">Banani</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="selectCountry" className="text-neutral-700 text-lg fw-medium mb-12">Select Country <span className="text-danger-600">*</span> </label>
                    <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="selectCountry" defaultValue="">
                      <option value="">Bangladesh</option>
                      <option value="pakistan">Pakistan</option>
                      <option value="bhutan">Bhutan</option>
                      <option value="nepal">Nepal</option>
                      <option value="australia">Australia</option>
                      <option value="england">England</option>
                    </select>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="zipCode" className="text-neutral-700 text-lg fw-medium mb-12">Zip code <span className="text-danger-600">*</span> </label>
                    <input type="text" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="zipCode" placeholder="Enter code..." />
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="address" className="text-neutral-700 text-lg fw-medium mb-12">Your address </label>
                    <textarea className="common-input bg-main-25 rounded-24 border-transparent focus-border-main-600" id="address" placeholder="Enter Your address..."></textarea>
                  </div>
                </div>
              </div>
              {/* Personal information End */}
    
              {/* Parent detail Start */}
              <div className="border border-neutral-30 rounded-12 bg-white p-24 mt-24">
                <h5 className="mb-0"> Parent details </h5>
                <span className="d-block border border-main-50 my-24 border-dashed"></span>
                <div className="row gy-4">
                  <div className="col-sm-12">
                    <label className="text-neutral-700 text-lg fw-medium mb-12">Gender <span className="text-danger-600">*</span> </label>
                    <div className="flex-align gap-24">
                      <div className="form-check common-check common-radio mb-0">
                        <input className="form-check-input" type="radio" name="parentGender" id="Mr" />
                        <label className="form-check-label fw-normal flex-grow-1" htmlFor="Mr">Mr.</label>
                      </div>
                      <div className="form-check common-check common-radio mb-0">
                        <input className="form-check-input" type="radio" name="parentGender" id="Mrs" />
                        <label className="form-check-label fw-normal flex-grow-1" htmlFor="Mrs">Mrs.</label>
                      </div>
                      <div className="form-check common-check common-radio mb-0">
                        <input className="form-check-input" type="radio" name="parentGender" id="Ms" />
                        <label className="form-check-label fw-normal flex-grow-1" htmlFor="Ms">Ms.</label>
                      </div>
                      <div className="form-check common-check common-radio mb-0">
                        <input className="form-check-input" type="radio" name="parentGender" id="Dr" />
                        <label className="form-check-label fw-normal flex-grow-1" htmlFor="Dr">Dr.</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="fullname" className="text-neutral-700 text-lg fw-medium mb-12">Full Name <span className="text-danger-600">*</span> </label>
                    <input type="text" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="fullname" placeholder="Enter Your Name..." />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="relation" className="text-neutral-700 text-lg fw-medium mb-12">Relation with applicant <span className="text-danger-600">*</span> </label>
                    <input type="text" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="relation" placeholder="Enter relation" />
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="PhoneParent" className="text-neutral-700 text-lg fw-medium mb-12">Phone <span className="text-danger-600">*</span> </label>
                    <input type="tel" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="PhoneParent" placeholder="Enter Your Number..." />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="emailParent" className="text-neutral-700 text-lg fw-medium mb-12">Email <span className="text-danger-600">*</span> </label>
                    <input type="email" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="emailParent" placeholder="Enter Your Email..." />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="jobTitle" className="text-neutral-700 text-lg fw-medium mb-12">Job Title <span className="text-danger-600">*</span> </label>
                    <input type="text" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="jobTitle" placeholder="Job title" />
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="addressParent" className="text-neutral-700 text-lg fw-medium mb-12">Home address</label>
                    <textarea className="common-input bg-main-25 rounded-24 border-transparent focus-border-main-600" id="addressParent" placeholder="Enter Your address..."></textarea>
                  </div>
                </div>
              </div>
              {/* Parent detail End */}
    
              {/* Education Start */}
              <div className="border border-neutral-30 rounded-12 bg-white p-24 mt-24">
                <h5 className="mb-0">Education</h5>
                <span className="d-block border border-main-50 my-24 border-dashed"></span>
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <label htmlFor="ssName" className="text-neutral-700 text-lg fw-medium mb-12">School or college name <span className="text-danger-600">*</span> </label>
                    <input type="text" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="ssName" placeholder="Enter Name..." />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="passYear" className="text-neutral-700 text-lg fw-medium mb-12">Year of passing <span className="text-danger-600">*</span> </label>
                    <input type="text" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="passYear" placeholder="Enter year" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="boardUniversity" className="text-neutral-700 text-lg fw-medium mb-12">Board of university <span className="text-danger-600">*</span> </label>
                    <input type="text" className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600" id="boardUniversity" placeholder="Enter board..." />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="classGrad" className="text-neutral-700 text-lg fw-medium mb-12">Class grad <span className="text-danger-600">*</span> </label>
                    <select className="common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14" id="classGrad" defaultValue="1st">
                      <option value="1st">1st Class</option>
                      <option value="2nd">2nd Class</option>
                      <option value="3rd">3rd Class</option>
                    </select>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="addressEducation" className="text-neutral-700 text-lg fw-medium mb-12">School or college address</label>
                    <textarea className="common-input bg-main-25 rounded-24 border-transparent focus-border-main-600" id="addressEducation" placeholder="Enter address..."></textarea>
                  </div>
                  <div className="col-sm-12">
                    <button type="submit" className="btn btn-main rounded-pill flex-center gap-8 mt-16">
                      Submit Now
                      <i className="ph-bold ph-arrow-up-right d-flex text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* Education End */}
            </form>
          </div>
        </div>
      </section>
      {/* ================================ Apply For Admission Section End =================================== */}
    </>
  );
}
