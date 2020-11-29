import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import privacyJson from "./privacyJson.json";
import privacyJsonEn from "./privacyJson-en.json";

const language = process.env.REACT_APP_MAIN_LANGUAGE;

function Privacy() {
  const [content, setContent] = useState<{ html: string[] }>(privacyJson);
  useEffect(() => {
    language === "en" && setContent(privacyJsonEn);
  }, []);

  return (
    <section className="section content-padding">
      <div className="content font-normal">{parse(content.html.join(" "))}</div>
    </section>
  );
}

export default Privacy;
