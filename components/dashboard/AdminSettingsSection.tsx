import React from 'react';

export default function AdminSettingsSection() {
  return (
    <>
      {/* ============Feedbacks start============ */}
      <div className="px-24 py-24">
        {/* Account Settings */}
        <div className="px-40 py-40 bg-white rounded-10 mb-24">
          <h4 className="text-16 fw-medium text-neutral-700 mb-0 border-bottom-dashed pb-24">Account Settings</h4>
          <div className="mt-24">
            <h4 className="text-18 fw-normal text-neutral-700 mb-16">Profile Photo</h4>

            <form onSubmit={(e) => e.preventDefault()} className="border-bottom-dashed pb-24">
              <div className="avatar-upload">
                <div className="d-flex align-items-center gap-40 flex-wrap">
                  <div className="avatar-preview flex-shrink-0">
                    <div id="imagePreview" style={{ backgroundImage: "url(/assets/images/thumbs/testimonials-three-img3.png)" }}></div>
                  </div>
                  <div className="avatar-edit">
                    <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                  </div>
                  <div className="d-flex align-items-center gap-16 flex-wrap">
                    <label htmlFor="imageUpload" className="bg-main-600 px-24 py-12 rounded-12 fw-semibold text-16 text-white transition-04 hover-bg-main-700 cursor-pointer mb-0">Upload Image</label>
                    <button type="reset" className="border-main-600 border px-24 py-12 rounded-12 fw-semibold text-16 text-main-600 hover-bg-main-50 transition-04">Cancel</button>
                  </div>
                </div>
              </div>
            </form>   

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mt-24 row align-items-center gy-4 mb-24">
                <div className="col-lg-6">
                  <h4 className="text-18 fw-medium text-neutral-700 mb-16">First Name</h4>
                  <input type="text" defaultValue="Courtney" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
                </div>
                <div className="col-lg-6">
                  <h4 className="text-18 fw-medium text-neutral-700 mb-16">Last Name</h4>
                  <input type="text" defaultValue="Henry" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
                </div>
              </div>

              <div className="w-100 mb-24">
                <h4 className="text-18 fw-medium text-neutral-700 mb-16">Gmail</h4>
                <input type="text" defaultValue="Example@email.com" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
              </div>

              <div className="w-100 mb-24">
                <h4 className="text-18 fw-medium text-neutral-700 mb-16">
                  Phone <span className="text-neutral-100">(Optional)</span>
                </h4>
                <input type="text" placeholder="Example@email.com" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
              </div>

              <div className="mb-24">
                <h4 className="text-18 fw-medium text-neutral-700 mb-16">Gender :</h4>
                <div className="d-flex align-items-center gap-24 flex-wrap">
                  <div className="form-check common-check common-radio mb-0">
                    <input className="form-check-input" type="radio" name="gender" id="Male" defaultChecked />
                    <label className="form-check-label fw-normal flex-grow-1" htmlFor="Male">Male</label>
                  </div>
                  <div className="form-check common-check common-radio mb-0">
                    <input className="form-check-input" type="radio" name="gender" id="Female" />
                    <label className="form-check-label fw-normal flex-grow-1" htmlFor="Female">Female</label>
                  </div>
                  <div className="form-check common-check common-radio mb-0">
                    <input className="form-check-input" type="radio" name="gender" id="Other" />
                    <label className="form-check-label fw-normal flex-grow-1" htmlFor="Other">Other</label>
                  </div>
                </div>
              </div>

              <div className="mb-24">
                <h4 className="text-18 fw-medium text-neutral-700 mb-16">Tagline :</h4>
                <div className="border-neutral-30 border rounded-16">
                  <div className="px-32 py-16">
                    <div className="editor">
                      <div id="editor" className="bg-neutral-20 border-0 border-top border-neutral-30 w-100">
                        <textarea className="w-100 border-0 bg-transparent h-166-px focus-visible-outline text-14 fw-normal text-neutral-700 p-12" defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-40">
                  <div className="form-check common-check mb-16">
                    <input className="form-check-input rounded-circle" type="checkbox" name="privacyPolicy" id="privacyPolicyCheck" />
                    <label className="form-check-label fw-normal flex-grow-1" htmlFor="privacyPolicyCheck">I agree to the privacy & policy</label>
                  </div>
                  <div className="form-check common-check mb-0">
                    <input className="form-check-input rounded-circle" type="checkbox" name="termsCheck" id="termsCheckDefault" />
                    <label className="form-check-label fw-normal flex-grow-1" htmlFor="termsCheckDefault">I agree with all terms & conditions</label>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-16">
                  <button type="submit" className="bg-main-600 px-24 py-12 rounded-12 fw-semibold text-white hover-bg-main-700 transition-03 border-0">Save Change</button>
                  <button type="button" className="border-main-600 border bg-transparent px-24 py-12 fw-semibold rounded-12 hover-bg-main-50 transition-03 text-main-600">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Address */}
        <div className="px-40 py-40 bg-white rounded-10 mb-24">
          <h4 className="text-16 fw-medium text-neutral-700 mb-0 border-bottom-dashed pb-24">Address</h4>
          <div className="mt-24">
            <form onSubmit={(e) => e.preventDefault()} className="mb-44">
              <div className="w-100">
                <h4 className="text-18 fw-medium text-neutral-700 mb-16">Location</h4>
                <input type="text" placeholder="Select Country" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
              </div>
              <div className="mt-24 row align-items-center gy-4 mb-24 flex-wrap">
                <div className="col-lg-6">
                  <h4 className="text-18 fw-medium text-neutral-700 mb-16">Address 1</h4>
                  <input type="text" placeholder="Enter Address" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
                </div>
                <div className="col-lg-6">
                  <h4 className="text-18 fw-medium text-neutral-700 mb-16">Address 2 <span className="text-neutral-100">(optional)</span></h4>
                  <input type="text" placeholder="Enter Address" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
                </div>
              </div>
              <div className="w-100">
                <h4 className="text-18 fw-medium text-neutral-700 mb-16">Zip Code</h4>
                <input type="text" placeholder="Enter Code" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
              </div>
              <div className="d-flex align-items-center gap-16 mt-32">
                <button type="submit" className="bg-main-600 px-24 py-12 fw-semibold rounded-12 text-white hover-bg-main-700 transition-03 border-0">Save Change</button>
                <button type="button" className="border-main-600 border bg-transparent px-24 py-12 fw-semibold rounded-12 hover-bg-main-50 transition-03 text-main-600">Cancel</button>
              </div>
            </form>
          </div>
        </div>

        {/* Change Password */}
        <div className="ps-40 pe-60 py-40 bg-white rounded-10 mb-24">
          <h4 className="text-16 fw-medium text-neutral-700 mb-0 border-bottom-dashed pb-24">Change Password</h4>
          <form onSubmit={(e) => e.preventDefault()} className="mt-24 mb-40">
            <div className="row gy-4 align-items-center mb-24 flex-wrap">
              <div className="col-sm-6 col-xs-6">
                <label htmlFor="oldPassword" className="fw-medium text-base text-neutral-800 mb-16">Old Password</label>
                <div className="position-relative">
                  <input type="password" className="form-control ps-32 pe-60 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" id="oldPassword" placeholder="***********" />
                  <span className="toggle-password text-16 position-absolute inset-inline-end-3-percent inset-block-start-18-px ph-bold ph-eye-closed cursor-pointer" id="#oldPassword"></span>
                </div>
              </div>
              <div className="col-sm-6 col-xs-6">
                <label htmlFor="newPassword" className="fw-medium text-base text-neutral-800 mb-16">New Password</label>
                <div className="position-relative">
                  <input type="password" className="form-control ps-32 pe-60 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" id="newPassword" placeholder="***********" />
                  <span className="toggle-password text-16 position-absolute inset-inline-end-3-percent inset-block-start-18-px ph-bold ph-eye-closed cursor-pointer" id="#newPassword"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-12 px-0">
              <label htmlFor="confirmPassword" className="fw-medium text-base text-neutral-800 mb-16">Confirm Password</label>
              <div className="position-relative">
                <input type="password" className="form-control ps-32 pe-60 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" id="confirmPassword" placeholder="***********" />
                <span className="toggle-password text-16 position-absolute inset-inline-end-3-percent inset-block-start-18-px ph-bold ph-eye-closed cursor-pointer" id="#confirmPassword"></span>
              </div>
            </div>
            
            <div className="mt-40 mb-40">
              <h4 className="fw-medium text-18 text-neutral-700 mb-16">New password must contain :</h4>
              <div>
                <ul className="list-unstyled">
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
                    <span className="fw-normal text-14 text-neutral-700">At least 1 uppercase letter (A-Z)</span>
                  </li>
                  <li className="d-flex align-items-center gap-12 mb-12">
                    <span className="w-6 h-6 bg-main-600 rounded-circle"></span>
                    <span className="fw-normal text-14 text-neutral-700">At least 1 number (0-9)</span>
                  </li>
                  <li className="d-flex align-items-center gap-12 mb-12">
                    <span className="w-6 h-6 bg-main-600 rounded-circle"></span>
                    <span className="fw-normal text-14 text-neutral-700">At least 1 special character</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="d-flex align-items-center gap-16 flex-wrap">
              <button type="submit" className="bg-main-600 px-24 py-12 rounded-12 fw-semibold text-white hover-bg-main-700 transition-03 border-0">Save Change</button>
              <button type="button" className="border-main-600 border bg-transparent px-24 py-12 fw-semibold rounded-12 hover-bg-main-50 transition-03 text-main-600">Cancel</button>
            </div>
          </form>
        </div>

        {/* Privacy */}
        <div className="px-40 py-40 bg-white rounded-10 mb-24">
          <h4 className="text-16 fw-medium text-neutral-700 mb-0 border-bottom-dashed pb-24">Privacy</h4>
          <form onSubmit={(e) => e.preventDefault()} className="mt-24 mb-40">
            <span className="fw-normal text-18 text-neutral-700 mb-16 d-block">Who can see your profile photo?</span>
            <div className="w-100">
              <input type="text" defaultValue="Anyone" className="px-32 py-16 fw-normal text-14 text-neutral-700 w-100 bg-neutral-20 border-neutral-30 border rounded-14 focus-visible-outline focus-border-main-600" />
            </div>
            <div className="d-flex align-items-center gap-16 flex-wrap mt-32">
              <button type="submit" className="bg-main-600 px-24 py-12 fw-semibold rounded-12 text-white hover-bg-main-700 transition-03 border-0">Save Change</button>
              <button type="button" className="border-main-600 border bg-transparent px-24 py-12 fw-semibold rounded-12 hover-bg-main-50 transition-03 text-main-600">Cancel</button>
            </div>
          </form>
        </div>

        {/* Delete Account */}
        <div className="px-40 py-40 bg-white rounded-10">
          <h4 className="text-16 fw-medium text-neutral-700 mb-0 border-neutral-40 border-bottom pb-24">Delete Account</h4>
          <div className="mt-24">
            <div className="mb-40">
              <p className="fw-normal text-14 text-neutral-700 mb-16">When you delete your account, you lose access to Front account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.</p>
              <div className="form-check common-check mb-0">
                <input className="form-check-input rounded-circle" type="checkbox" name="deleteAccountConfirm" id="deleteAccountConfirmCheck" />
                <label className="form-check-label fw-normal flex-grow-1" htmlFor="deleteAccountConfirmCheck">Confirm that I want to delete my account.</label>
              </div>
            </div>
            <button type="button" className="border-main-600 border bg-transparent px-24 py-12 fw-semibold rounded-12 hover-bg-main-50 transition-03 text-main-600">Cancel</button>
          </div>
        </div>
      </div>
      {/* ============Feedbacks end============ */}
    </>
  );
}
