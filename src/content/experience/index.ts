import { allExperiences } from "contentlayer/generated";

export const experiences = allExperiences.sort((a, b) =>
  b.startedAt.localeCompare(a.startedAt)
);

export const currentExperience = experiences[0];