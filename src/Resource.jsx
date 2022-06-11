import React from "react";
import resourcesData from "./data/resourcesData";
import ResourceCard from "./components/ResourceCard";

export default function Resource() {
  return (
    <div>
      <section className="mx-auto mt-12 mb-12 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-4">
        <article className="col-auto mb-10">
          <div className="mb-20 text-center">
            <h1 className="title-font mb-4 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
              Resources
            </h1>
          </div>
          <section className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {resourcesData.map(resources => (
              <ResourceCard resources={resources} key={resources.title} />
            ))}
          </section>
        </article>
      </section>
    </div>
  );
}
