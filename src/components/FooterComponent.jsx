import React from "react";


import { Footer } from "flowbite-react";

const FooterComponent = () => {
  return (
    <Footer className="bg-black rounded-none absolute bottom-0 min-w-full" container>
      <div className="w-full text-center text-white">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
          target="_blank"
            href="https://github.com/wraithio/all-for-one-reactaar"
            src="./public/gihublogoWHITE.png"
            alt="Github Logo"
            name="Repository"
          />
          <Footer.LinkGroup className="text-white flex justify-end flex-col">
            <Footer.Link>created by: Aaron Robinson</Footer.Link>
            <Footer.Link>CodeStack S7</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          className="text-white"
          href="#"
          by="Flowbite™"
          year={2025}
        />
      </div>
    </Footer>
  );
};

export default FooterComponent;
