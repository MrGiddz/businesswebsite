import PageIntro from "@/components/PageIntro";
import React from "react";

const page = () => {
  return (
    <>
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
          Stay up-to-date with the latest industry news as our marketing teams
          finds new ways to re-purpose old CSS tricks articles.
        </p>
      </PageIntro>
    </>
  );
};

export default page;
