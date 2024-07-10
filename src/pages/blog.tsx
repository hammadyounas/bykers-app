import Blog from '@/components/pages/BlogPage/Blog';
import Footer from '@/components/pages/Footer/Footer';
import Navbar from '@/components/pages/Header/Navbar';
import Head from 'next/head'; // Import Head for managing document head content
import React from 'react';

export default function BlogPage() {
  return (
    <div>
      <Head>
        {/* Insert Tawk.to script in the head section */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/65d484558d261e1b5f62acf4/1i2ebkr34';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </Head>
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
}
