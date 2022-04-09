import React from "react";

export default function Youtubevideo() {
  return (
    <div className=" bg-brand-light w-8/10  md:w-3/5 md:mt-24 flex-1 p-2 rounded-lg shadow-xl max-w-7xl mx-4 md:mx-auto sm:p-3">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="rounded"
          width="560"
          height="300"
          src="https://www.youtube.com/embed/pzQCrkTC1Tg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
