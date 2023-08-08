import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import Skills from "../components/Section/skill";

export default function Skill() {
  return (
    <>
      <Helmet>
        <title>Skill - Faizul Hassan Rhine</title>
      </Helmet>

      <PageLayout>
        <Skills />
      </PageLayout>
    </>
  );
}
