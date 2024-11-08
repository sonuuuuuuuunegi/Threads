// Resource: https://docs.uploadthing.com/api-reference/react#generatereacthelpers
// Copy paste (be careful with imports)

// import { generateReactHelpers } from "@uploadthing/react/hooks";

// import type { OurFileRouter } from "@/app/api/uploadthing/core";

// export const { useUploadThing, uploadFiles } =
//   generateReactHelpers<OurFileRouter>();


// import { generateComponents } from "@uploadthing/react";

// import type { OurFileRouter } from "~/app/api/uploadthing/core";

// export const { UploadButton, UploadDropzone } =
//   generateComponents<OurFileRouter>();


//   import {
//     generateUploadButton,
//     generateUploadDropzone,
//   } from "@uploadthing/react";
  
//   import type { OurFileRouter } from "~/app/api/uploadthing/core";
  
//   export const UploadButton = generateUploadButton<OurFileRouter>();
//   export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
  

import { generateReactHelpers } from "@uploadthing/react";
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

  
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
