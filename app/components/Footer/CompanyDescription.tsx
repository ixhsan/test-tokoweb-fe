import React from "react";

const CompanyDescription = () => {
  return (
    <div className="flex flex-col p-4 gap-8 md:order-first w-full min-w-[20vw] sm:w-1/2">
      <div className="w-1/2">
        <img src="/icons/footer-logo.svg" alt="footer-logo" />
      </div>
      <p className="text-lg font-gilroy font-medium text-abu leading-relaxed break-all">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        dolorem sunt esse ratione est doloribus dicta autem perferendis sit
        facere.
      </p>
      <div className="flex flex-row gap-4">
        <img src="/icons/footer-facebook.svg" alt="footer-facebook" />
        <img src="/icons/footer-twitter.svg" alt="footer-twitter" />
        <img src="/icons/footer-instagram.svg" alt="footer-instagram" />
      </div>
    </div>
  );
};

export default CompanyDescription;
