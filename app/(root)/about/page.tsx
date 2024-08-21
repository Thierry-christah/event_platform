"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div className="wrapper my-10 text-center">
      <h1 className="h1-bold mb-6">About Me</h1>
      <div className="flex flex-col items-center gap-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary-500">
          <Image
            src="/assets/images/profile.jpg" // Update this to the correct path of your image
            alt="Creator profile"
            width={128}
            height={128}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="mt-8 max-w-xl mx-auto text-center p-regular-16">
        <p className="mb-4">
          Hello, I'm Chaste Djaziri, a passionate developer with a keen
          interest in building impactful digital experiences. My journey in
          technology started at a young age, and over the years, I've honed my
          skills in various programming languages and frameworks.
        </p>
        <p className="mb-4">
          I am currently studying at Ecole des Sciences Byimana, where I focus
          on Mathematics, Physics, and Computer Science. My passion lies in
          creating efficient, scalable, and user-friendly applications that
          solve real-world problems.
        </p>
        <p className="mb-4">
          Outside of coding, I enjoy sharing knowledge and contributing to
          open-source projects. I believe in continuous learning and always
          strive to stay updated with the latest trends in technology.
        </p>
      </div>
      <div className="mt-8 max-w-xl mx-auto text-center p-regular-16">
        <h2 className="h2-bold mb-4">Contact Information</h2>
        <p className="mb-2">
          <strong>Email:</strong> <a href="mailto:habimanahirwa@gmail.com">habimanahirwa@gmail.com</a>
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> +250794578640
        </p>
        <p className="mb-2">
          <strong>Website:</strong> <a href="https://chanime.ccr8.pro" target="_blank" rel="noopener noreferrer">https://chanime.ccr8.pro</a>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
