
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'


export const Experience = defineDocumentType(() => ({
  name: 'Experience',
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    companyName: { type: 'string', required: true },
    employmentType: {type : 'string', required: true }, 
    position: { type: 'string', required: true },
    startedAt: { type: 'date', required: true },
    endedAt: { type: 'date' },
    skills: { type: 'list', required: true, of: { type: "string" }}
  },
}))



export default makeSource({ contentDirPath: './src/data', documentTypes: [Experience] })