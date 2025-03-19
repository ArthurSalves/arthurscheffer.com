// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var Experience = defineDocumentType(() => ({
  name: "Experience",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    companyName: { type: "string", required: true },
    employmentType: { type: "string", required: true },
    position: { type: "string", required: true },
    startedAt: { type: "date", required: true },
    endedAt: { type: "date" },
    skills: { type: "list", required: true, of: { type: "string" } }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "./src/data", documentTypes: [Experience] });
export {
  Experience,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-NLA33R5V.mjs.map
