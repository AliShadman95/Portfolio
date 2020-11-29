import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import CookieJson from "./cookieJson.json";
import CookieJsonEN from "./cookieJson-en.json";

const language = process.env.REACT_APP_MAIN_LANGUAGE;

function Cookie() {
  const [content, setContent] = useState<{ html: string[] }>(CookieJson);
  useEffect(() => {
    language === "en" && setContent(CookieJsonEN);
  }, []);

  return (
    <section className="section content-padding">
      <div className="content font-normal">{parse(content.html.join(" "))}</div>
    </section>
  );
}

export default Cookie;
