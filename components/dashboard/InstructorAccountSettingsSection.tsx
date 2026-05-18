import React from 'react';

export default function InstructorAccountSettingsSection() {
  return (
    <div className="w-100 overflow-y-auto animate-fade-in">  
      {/* ============Feedbacks start============ */}
      <div className="px-40 py-40 bg-white rounded-10 mb-24">
        <div className="d-flex align-items-center gap-16 justify-content-between flex-wrap border-bottom-dashed-main pb-24">
          <h4 className="text-16 fw-medium text-neutral-700 mb-0">Account Settings</h4>
          <button type="button" className="toggle-student-dashbord-button text-neutral-900 text-32 d-xl-none d-block">
            <i className="ph-bold ph-list"></i>
          </button>
        </div>
        <div className="mt-24">
          <h4 className="text-18 fw-normal text-neutral-700 mb-16">Profile Photo</h4>
          <form action="#" className="border-bottom-dashed-main pb-24" onSubmit={(e) => e.preventDefault()}>
            <div className="avatar-upload ">
              <div className="d-flex align-items-center gap-40 flex-wrap">
                <div className="avatar-preview flex-shrink-0">
                  <div id="imagenextPreview" style={{"backgroundImage":"url(/assets/images/thumbs/instructor-dashboard-img3.png)"}} className="">
                  </div>
                </div>
                <div className="avatar-edit">
                  <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                </div>
                <div className="d-flex align-items-center gap-16 flex-wrap">
                  <label htmlFor="imageUpload" className="bg-main-600 px-24 py-12 rounded-12 fw-semibold text-16 text-white transition-04 hover-bg-main-700 cursor-pointer">Upload Image</label>
                  <button type="reset" className="border-main-600 border px-24 py-12 rounded-12 fw-semibold text-16 text-main-600 hover-bg-main-50 transition-04">Cancel</button>
                </div>
              </div>
            </div>
          </form>   

          <div className="mt-24 row align-items-center gy-4 mb-24">
            <div className="col-lg-6">
              <h4 className="text-18 fw-medium text-neutral-700 mb-16">First Name</h4>
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Courtney" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
              </form>
            </div>
            <div className="col-lg-6">
              <h4 className="text-18 fw-medium text-neutral-700 mb-16">Last Name</h4>
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Henry" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
              </form>
            </div>
          </div>

          <div className="w-100 mb-24">
            <h4 className="text-18 fw-medium text-neutral-700 mb-16">Gmail</h4>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Example@email.com " className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
            </form>
          </div>

          <div className="w-100 mb-24">
            <h4 className="text-18 fw-medium text-neutral-700 mb-16">Phone <span className="text-neutral-100">(Optional)</span></h4>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Example@email.com" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
            </form>
          </div>

          <div className="mb-24">
            <h4 className="text-18 fw-medium text-neutral-700 mb-16">Gender :</h4>
            <div className="d-flex align-items-center gap-24 flex-wrap">
              <div className="form-check common-check common-radio mb-0">
                <input className="form-check-input" type="radio" name="gender" id="Male" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Male">
                  Male
                </label>
              </div>
              <div className="form-check common-check common-radio mb-0">
                <input className="form-check-input" type="radio" name="gender" id="Female" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Female">
                  Female
                </label>
              </div>
              <div className="form-check common-check common-radio mb-0">
                <input className="form-check-input" type="radio" name="gender" id="Other" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Other">
                  Other
                </label>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h4 className="text-18 fw-medium text-neutral-700 mb-16">Tagline :</h4>
            <div className="border-neutral-30 border rounded-16">
              <div className="px-32 py-16">
                <div className="student-editor">
                  <div id="student-editor" className="bg-neutral-20 border-0 border-top border-neutral-30 w-100">
                    <p className="h-166-px focus-visible-outline text-14 fw-normal text-neutral-700">I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-40">
              <div className="form-check common-check mb-16">
                <input className="form-check-input rounded-circle" type="checkbox" name="tutorType" id="Collage" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="Collage">I agree to the privacy & policy</label>
              </div>
              <div className="form-check common-check mb-0">
                <input className="form-check-input rounded-circle" type="checkbox" name="tutorType" id="collage" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="collage">I agree with all terms & conditions</label>
              </div>
            </div>
            <div className="d-flex align-items-center gap-16 flex-wrap">
              <button type="button" className="bg-main-600 px-24 py-12 rounded-12 fw-semibold text-white hover-bg-main-700 transition-03">
                Save Change
              </button>
              <button type="button" className="border-main-600 border px-24 py-12 fw-semibold rounded-12 hover-bg-main-50 transition-03 ">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-40 py-40 bg-white rounded-10 mb-24">
        <h4 className="text-16 fw-medium text-neutral-700 mb-0 border-bottom-dashed-main pb-24">Address</h4>
        <div className="mt-24">
          <div className="mb-44">
            <div className="w-100">
              <h4 className="text-18 fw-medium text-neutral-700 mb-16">Location</h4>
              <select className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600">
                <option value="1">Select Country</option>
                <option value="1">Bangladesh</option>
                <option value="1">Pakistan</option>
                <option value="1">France</option>
                <option value="1">Japan</option>
              </select>
            </div>
            <div className="mt-24 row align-items-center gy-4 mb-24 flex-wrap">
              <div className="col-lg-6">
                <h4 className="text-18 fw-medium text-neutral-700 mb-16">Address 1</h4>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Enter Address" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
                </form>
              </div>
              <div className="col-lg-6">
                <h4 className="text-18 fw-medium text-neutral-700 mb-16">Address 2 <span className="text-neutral-100">(optional)</span></h4>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Enter Address" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
                </form>
              </div>
            </div>
            <div className="w-100">
              <h4 className="text-18 fw-medium text-neutral-700 mb-16">Zip Code</h4>
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Enter Code" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
              </form>
            </div>
          </div>
          <div className="d-flex align-items-center gap-16 flex-wrap">
            <button type="button" className="bg-main-600 px-24 py-12 fw-semibold rounded-12 text-white hover-bg-main-700 transition-03">
              Save Change
            </button>
            <button type="button" className="border-main-600 border px-24 py-12 fw-semibold rounded-12 hover-bg-main-50 transition-03 ">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="ps-40 pe-60 py-40 bg-white rounded-10 mb-24">
        <h4 className="text-16 fw-medium text-neutral-700 mb-0 border-bottom-dashed-main pb-24">Change Password</h4>
        <div className="mt-24 mb-40">
          <div className="row gy-4 align-items-center mb-24 flex-wrap ">
            <div className="col-sm-6 col-xs-6">
              <label htmlFor="oldPassword" className="fw-medium text-base text-neutral-800 mb-16">Old Password</label>
              <div className="position-relative">
                <input type="password" className="form-control ps-32 pe-60 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" id="oldPassword" placeholder="***********" />
                <span className="student-toggle-password text-16 position-absolute inset-inline-end-3-percent inset-block-start-18-px ph-bold ph-eye-closed" id="#oldPassword"></span>
              </div>
            </div>
            <div className="col-sm-6 col-xs-6">
              <label htmlFor="newPassword" className="fw-medium text-base text-neutral-800 mb-16">New Password</label>
              <div className="position-relative">
                <input type="password" className="form-control ps-32 pe-60 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" id="newPassword" placeholder="***********" />
                <span className="student-toggle-password text-16 position-absolute inset-inline-end-3-percent inset-block-start-18-px ph-bold ph-eye-closed" id="#newPassword"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <label htmlFor="confirmPassword" className="fw-medium text-base text-neutral-800 mb-16">Confirm Password</label>
            <div className="position-relative">
              <input type="password" className="form-control ps-32 pe-60 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" id="confirmPassword" placeholder="***********" />
              <span className="student-toggle-password text-16 position-absolute inset-inline-end-3-percent inset-block-start-18-px ph-bold ph-eye-closed" id="#confirmPassword"></span>
            </div>
          </div>
        </div>
        <div className="mb-40">
          <h4 className="fw-medium text-18 text-neutral-700 mb-16">New password must contain :</h4>
          <div>
            <ul>
              <li className="d-flex align-items-center gap-12 mb-12">
                <span className="w-6 h-6 bg-main-600 rounded-circle"></span>
                <span className="fw-normal text-14 text-neutral-700">At least 8 characters</span>
              </li>
              <li className="d-flex align-items-center gap-12 mb-12">
                <span className="w-6 h-6 bg-main-600 rounded-circle"></span>
                <span className="fw-normal text-14 text-neutral-700">At least 1 lower letter (a-z)</span>
              </li>
              <li className="d-flex align-items-center gap-12 mb-12">
                <span className="w-6 h-6 bg-main-600 rounded-circle"></span>
                <span className="fw-normal text-14 text-neutral-700">At least 1 uppercase letter(A-Z)</span>
              </li>
              <li className="d-flex align-items-center gap-12 mb-12">
                <span className="w-6 h-6 bg-main-600 rounded-circle"></span>
                <span className="fw-normal text-14 text-neutral-700">At least 1 number (0-9)</span>
              </li>
              <li className="d-flex align-items-center gap-12 mb-12">
                <span className="w-6 h-6 bg-main-600 rounded-circle"></span>
                <span className="fw-normal text-14 text-neutral-700">At least 1 special characters</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center gap-16 flex-wrap">
          <button type="button" className="bg-main-600 px-24 py-12 rounded-12 fw-semibold text-white hover-bg-main-700 transition-03">
            Save Change
          </button>
          <button type="button" className="border-main-600 border px-24 py-12 fw-semibold rounded-12 hover-bg-main-50 transition-03 ">
            Cancel
          </button>
        </div>
      </div>

      <div className="px-40 py-40 bg-white rounded-10 mb-24">
        <h4 className="text-16 fw-medium text-neutral-700 mb-0 border-bottom-dashed-main pb-24">Privacy</h4>
        <div className="mt-24 mb-40">
          <span className="fw-normal text-18 text-neutral-700 mb-16">Who can see your profile photo?</span>
          <div className="w-100">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Anyone" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
            </form>
          </div>
        </div>
        <div className="d-flex align-items-center gap-16 flex-wrap">
          <button type="button" className="bg-main-600 px-24 py-12 fw-semibold rounded-12 text-white hover-bg-main-700 transition-03">
            Save Change
          </button>
          <button type="button" className="border-main-600 border px-24 py-12 fw-semibold rounded-12 hover-bg-main-50 transition-03 ">
            Cancel
          </button>
        </div>
      </div>

      <div className="px-40 py-40 bg-white rounded-10">
        <h4 className="text-16 fw-medium text-neutral-700 mb-0 border-neutral-40 border-bottom pb-24">Privacy</h4>
        <div className="mt-24">
          <div className="mb-40">
            <p className="fw-normal text-14 text-neutral-700 mb-16">When you delete your account, you lose access to Front account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.</p>
            <div className="form-check common-check mb-0">
              <input className="form-check-input rounded-circle" type="checkbox" name="tutorType" id="school-Collage" />
              <label className="form-check-label fw-normal flex-grow-1" htmlFor="school-Collage">Confirm that I want to delete my account.</label>
            </div>
          </div>
          <button type="button" className="border-main-600 border px-24 py-12 fw-semibold rounded-12 hover-bg-main-50 transition-03 ">
            Cancel
          </button>
        </div>
      </div>
      {/* ============Feedbacks end============ */}
    </div>
  );
}
