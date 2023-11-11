import React from "react";
import logoInvoice from "../images/landing_page/logoInvoice.png";
import "../css/main.css";

function navbar() {
  return (
    <div className="tw-h-16  tw-w-full tw-flex tw-justify-start tw-sm:flex tw-sm:justify-start tw-items-center tw-top-0 tw-mb-16">
      <div className="tw-relative tw-left-6 tw-w-20 tw-py-1.5 tw-px-1.5  tw-sm:py-2.5 tw-sm:px-3.5 tw-sm:w-32 tw-rounded-br-xl tw-rounded-bl-xl tw-mb-2 tw-text-primary-font-color tw-bg-secondary-color">
        <img
          className="tw-z-2 tw-m-auto tw-h-14 tw-sm:h-auto tw-sm:mt-10"
          src={logoInvoice}
        />
      </div>
      {/* <img className='w-8 h-8' src='https://app-cdn.acelitchi.com/prod/app/10/2/3979475375754501350.webp' /> */}
    </div>
  );
}

export default navbar;
