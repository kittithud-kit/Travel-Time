import React from "react";
import LayoutPage from "./LayoutPage";

function PageMaps() {
  return (
    <LayoutPage>
      <h1>แหล่งท่องเที่ยวใกล้ฉัน</h1>
      <div className="divmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d980051.5066606859!2d101.80753900811276!3d16.357337402490305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z4LmB4Lir4Lil4LmI4LiH4LiX4LmI4Lit4LiH4LmA4LiX4Li14LmI4Lii4Lin!5e0!3m2!1sth!2sth!4v1707076823321!5m2!1sth!2sth"
          width="1200"
          height="700"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="Maps"
        ></iframe>
      </div>
    </LayoutPage>
  );
}

export default PageMaps;
