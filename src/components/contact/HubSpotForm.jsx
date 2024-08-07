import React, { useEffect } from 'react';

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "45057484",
          formId: "baec50db-3a61-46d0-8e4f-4ba39e30972a"
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="hubspotForm"></div>;
};

export default HubSpotForm;
