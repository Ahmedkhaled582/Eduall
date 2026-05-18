import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EdullAll - LMS, Tutors, Education & Online Course Html Template",
};

export default function Page() {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `<!--==================== Preloader Start ====================-->
  <div class="preloader">
    <img src="/assets/images/icons/preloader.gif" alt="">
  </div>
<!--==================== Preloader End ====================-->

<!--==================== Overlay Start ====================-->
<div class="overlay"></div>
<!--==================== Overlay End ====================-->

<!--==================== Sidebar Overlay End ====================-->
<div class="side-overlay"></div>
<!--==================== Sidebar Overlay End ====================-->

<!-- ==================== Scroll to Top End Here ==================== -->
<div class="progress-wrap">
  <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
  </svg>
</div>
<!-- ==================== Scroll to Top End Here ==================== -->

<!-- ==================== Mobile Menu Start Here ==================== -->
<div class="mobile-menu scroll-sm d-lg-none d-block">
    <button type="button" class="close-button"><i class="ph ph-x"></i> </button>
    <div class="mobile-menu__inner">
        <a href="/" class="mobile-menu__logo">
            <img src="/assets/images/logo/logo.png" alt="Logo">
        </a>
        <div class="mobile-menu__menu">
            
<ul class="nav-menu flex-align nav-menu--mobile">
    <li class="nav-menu__item has-submenu activePage">
        <a href="javascript:void(0)" class="nav-menu__link">Home</a>
        <ul class="nav-submenu scroll-sm">
            <li class="nav-submenu__item activePage">
                <a href="/" class="nav-submenu__link hover-bg-neutral-30"> Home LMS</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/index-2" class="nav-submenu__link hover-bg-neutral-30"> Home Online Course</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/index-3" class="nav-submenu__link hover-bg-neutral-30"> Home University</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/index-4" class="nav-submenu__link hover-bg-neutral-30"> Home Tutor</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/index-5" class="nav-submenu__link hover-bg-neutral-30"> Home Kindergarten</a>
            </li>
        </ul>   
    </li>
    <li class="nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link">Courses</a>
         <ul class="nav-submenu scroll-sm">
            <li class="nav-submenu__item">
                <a href="/course" class="nav-submenu__link hover-bg-neutral-30"> Course Grid View</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/course-list-view" class="nav-submenu__link hover-bg-neutral-30"> Course List View</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/course-details" class="nav-submenu__link hover-bg-neutral-30"> Course Details</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/lesson-details" class="nav-submenu__link hover-bg-neutral-30"> Lesson Details</a>
            </li>
        </ul>
    </li>
    <li class="nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link">Pages</a>
         <ul class="nav-submenu scroll-sm">
            <li class="nav-submenu__item">
                <a href="/about" class="nav-submenu__link hover-bg-neutral-30"> About</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/about-two" class="nav-submenu__link hover-bg-neutral-30"> About Two</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/about-three" class="nav-submenu__link hover-bg-neutral-30"> About Three</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/about-four" class="nav-submenu__link hover-bg-neutral-30"> About Four</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/pricing-plan" class="nav-submenu__link hover-bg-neutral-30">Pricing Plan</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor" class="nav-submenu__link hover-bg-neutral-30"> Instructor</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-two" class="nav-submenu__link hover-bg-neutral-30"> Instructor Two</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/instructor-details" class="nav-submenu__link hover-bg-neutral-30"> Instructor Details</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/tutor" class="nav-submenu__link hover-bg-neutral-30"> Premium Tutors</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/tutor-details" class="nav-submenu__link hover-bg-neutral-30"> Premium Tutors Details</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/faq" class="nav-submenu__link hover-bg-neutral-30">FAQ</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/tuition-jobs" class="nav-submenu__link hover-bg-neutral-30">Tuition Jobs</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/events" class="nav-submenu__link hover-bg-neutral-30">Events</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/event-details" class="nav-submenu__link hover-bg-neutral-30">Event Details</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/apply-admission" class="nav-submenu__link hover-bg-neutral-30">Apply Admission</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/gallery" class="nav-submenu__link hover-bg-neutral-30">Gallery</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/privacy-policy" class="nav-submenu__link hover-bg-neutral-30">Privacy Policy</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/favorite-course" class="nav-submenu__link hover-bg-neutral-30">Favorite Course</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/find-tutors" class="nav-submenu__link hover-bg-neutral-30">Find Best Tutors</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/book-online-class" class="nav-submenu__link hover-bg-neutral-30">Book Online Class</a>
            </li>
        </ul>
    </li>
    <li class="nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link">Product</a>
         <ul class="nav-submenu scroll-sm">
            <li class="nav-submenu__item">
                <a href="/product" class="nav-submenu__link hover-bg-neutral-30"> Product</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/product-details" class="nav-submenu__link hover-bg-neutral-30"> Product Details</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/cart" class="nav-submenu__link hover-bg-neutral-30">Cart</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/checkout" class="nav-submenu__link hover-bg-neutral-30">Checkout</a>
            </li>
        </ul>
    </li>
    <li class="nav-menu__item has-submenu">
        <a href="javascript:void(0)" class="nav-menu__link">Blog</a>
         <ul class="nav-submenu scroll-sm">
            <li class="nav-submenu__item">
                <a href="/blog" class="nav-submenu__link hover-bg-neutral-30"> Blog Grid</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/blog-list" class="nav-submenu__link hover-bg-neutral-30"> Blog List</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/blog-classic" class="nav-submenu__link hover-bg-neutral-30"> Blog Classic</a>
            </li>
            <li class="nav-submenu__item">
                <a href="/blog-details" class="nav-submenu__link hover-bg-neutral-30"> Blog Details</a>
            </li>
        </ul>
    </li>
    <li class="nav-menu__item">
        <a href="/contact" class="nav-menu__link">Contact</a>
    </li>
</ul>

            <div class="d-sm-none d-block mt-24">
                <div class="header-select border border-neutral-30 bg-main-25 rounded-pill position-relative">
    <span class="select-icon position-absolute top-50 translate-middle-y inset-inline-start-0 z-1 ms-lg-4 ms-12 text-xl pointer-event-none d-flex">
        <i class="ph-bold ph-squares-four"></i>
    </span>
    <select class="js-example-basic-single border-0" name="state">
        <option value="1" selected disabled>Categories</option>
        <option value="1">Design</option>
        <option value="1">Development</option>
        <option value="1">Architecture</option>
        <option value="1">Life Style</option>
        <option value="1">Data Science</option>
        <option value="1">Marketing</option>
        <option value="1">Music</option>
        <option value="1">Typography</option>
        <option value="1">Finance</option>
        <option value="1">Motivation</option>
    </select>
</div>
            </div>
            
        </div>
    </div>
</div>
<!-- ==================== Mobile Menu End Here ==================== -->

<!-- ==========admin dashbord start=========== -->
<section class="dashbord bg-main-25">
    <div>
        <!-- ========Dashdord Sidebar start======== -->
         <div class="px-20 py-24 max-w-288-px bg-white h-100">
              <img src="/assets/images/logo/logo.png" alt="" class="">
              <span class="w-100 border-main-100 border mb-24 mt-24"></span>
              <div>
                <span class="text-neutral-500 fw-normal text-14 mb-8">Welcome Henry,</span>
                <ul>
                    <li class="mb-8">
                        <a href="/dashboard" class="fw-medium d-flex align-items-center gap-8 text-neutral-500 hover-bg-main-600 px-24 py-12 hover-text-white rounded-12 item-hover">
                        <span class="text-20 text-main-600 item-hover__text transition-03"><i class="ph-bold ph-house"></i></span>
                        Dashboard</a>
                    </li>
                    <li class="mb-8">
                        <a href="/dashboard" class="fw-medium d-flex align-items-center gap-8 text-neutral-500 hover-bg-main-600 px-24 py-12 hover-text-white rounded-12 item-hover">
                        <span class="text-20 text-main-600 item-hover__text transition-03"><i class="ph-bold ph-house"></i></span>
                        My Profile</a>
                    </li>
                    <li class="mb-8">
                        <a href="/dashboard" class="fw-medium d-flex align-items-center gap-8 text-neutral-500 hover-bg-main-600 px-24 py-12 hover-text-white rounded-12 item-hover">
                        <span class="text-20 text-main-600 item-hover__text transition-03"><i class="ph-bold ph-house"></i></span>
                        Dashboard</a>
                    </li>
                </ul>
              </div>
         </div>
        <!-- ========Dashdord Sidebar end======== -->
    </div>
</section>
<!-- ==========admin dashbord end============ -->
    <!-- Jquery js -->
    <!-- Bootstrap Bundle Js -->
    <!-- select2 Js -->
    <!-- Phosphor Icon Js -->
    <!-- Slick js -->
    <!-- Slick js -->
    <!-- magnific popup -->
    <!-- Jquery Ui js -->
    <!-- marquee js -->
    <!-- plyr Js -->
    <!-- vanilla Tilt -->
    <!-- wow -->
    
    <!-- main js -->`
      }}
    />
  );
}
