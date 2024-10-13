import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo.svg"
            alt="carepulse"
            width={1000}
            height={1000}
            className="mb-12 w-fit h-10"
          />
        </div>
      </section>
    </div>
  );
};

export default Register;
