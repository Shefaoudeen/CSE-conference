import React from "react";

const RegHome = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[75%] text-justify text-xl flex flex-col gap-6 leading-[28px]">
        <h1 className="text-3xl font-bold">
          REGISTATION FEE AND PUBLICATIONS ARTICLE PUBLICATION CHARGES
        </h1>
        <p>
          Each submission may include one main author and up to two co-authors.
          Only papers presented at the conference will be considered for
          publication.
        </p>
        <p>
          Upon acceptance, authors must pay the Article Processing Charges
          (APC). Further details regarding payment and publication will be
          communicated via email.
        </p>
        <p>
          Authors must select a publication option as part of the review
          process, which is required for forwarding the paper to the journal for
          further evaluation and publication.
        </p>
        <p>
          The details regarding various options for publications will be updated
          soon
        </p>
      </div>
    </div>
  );
};

export default RegHome;
