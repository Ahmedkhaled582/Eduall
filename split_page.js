const fs = require('fs');

const content = fs.readFileSync('app/page.tsx', 'utf8');

// Find the start of the Explore Course Section
const splitMarker = '<!-- ================================== Explore Course Section Start =========================== -->';
const splitIndex = content.indexOf(splitMarker);

if (splitIndex === -1) {
  console.log('Split marker not found!');
  process.exit(1);
}

const remainingHtml = content.slice(splitIndex);

// We need to extract just the HTML string part, so we need to find where the string ends.
// The string ends with `}} />` or similar. We know the end of the file is:
//       }}
//     />
//   );
// }

const endMarker = '`\n      }}';
const htmlContent = remainingHtml.split(endMarker)[0];

const newPageTsx = `import React from 'react';
import Preloader from '@/components/layout/Preloader';
import MobileMenu from '@/components/layout/MobileMenu';
import Header from '@/components/layout/Header';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Banner from '@/components/home/Banner';
import BrandSlider from '@/components/home/BrandSlider';
import Features from '@/components/home/Features';

export const metadata = {
  title: "EduAll - LMS, Tutors, Education & Online Course Html Template",
};

export default function Page() {
  return (
    <>
      <Preloader />
      <div className="overlay"></div>
      <div className="side-overlay"></div>
      <ProgressWrap />
      <MobileMenu />
      <Header />
      <Banner />
      <BrandSlider />
      <Features />
      
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: \`\n\${htmlContent}\n\`
        }}
      />
    </>
  );
}
`;

fs.writeFileSync('app/page.tsx', newPageTsx);
console.log('Successfully updated app/page.tsx!');
