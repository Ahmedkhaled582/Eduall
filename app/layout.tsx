import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "EduAll - LMS, Tutors, Education & Online Course",
  description: "EduAll - LMS, Tutors, Education & Online Course Html Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/assets/images/logo/favicon.png" />
        {/* Third-party CSS that cannot be bundled via globals.css */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/select2.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/css/plyr.css" />
        <link rel="stylesheet" href="/assets/css/editor-quill.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/dataTables.dataTables.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}

        {/* jQuery — must load first, before all plugins */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/boostrap.bundle.min.js"   strategy="afterInteractive" />
        <Script src="/assets/js/select2.min.js"           strategy="afterInteractive" />
        <Script src="/assets/js/phosphor-icon.js"         strategy="afterInteractive" />
        <Script src="/assets/js/slick.min.js"             strategy="afterInteractive" />
        <Script src="/assets/js/counter.min.js"           strategy="afterInteractive" />
        <Script src="/assets/js/magnific-popup.min.js"    strategy="afterInteractive" />
        <Script src="/assets/js/jquery-ui.js"             strategy="afterInteractive" />
        <Script src="/assets/js/marquee.min.js"           strategy="afterInteractive" />
        <Script src="/assets/js/apexcharts.js"            strategy="afterInteractive" />
        <Script src="/assets/js/plyr.js"                  strategy="afterInteractive" />
        <Script src="/assets/js/editor-quill.js"          strategy="afterInteractive" />
        <Script src="/assets/js/dataTables.min.js"        strategy="afterInteractive" />
        <Script src="/assets/js/vanilla-tilt.min.js"      strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js"               strategy="afterInteractive" />
        <Script src="/assets/js/aos.js"                   strategy="afterInteractive" />
        <Script src="/assets/js/main.js"                  strategy="afterInteractive" />
      </body>
    </html>
  );
}
