module.exports = {

"[project]/src/utils/runtime/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isServerSide": (()=>isServerSide)
});
function isServerSide() {
    return "undefined" === 'undefined';
}
}}),
"[project]/src/utils/conversion/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "stringToBase64": (()=>stringToBase64)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$runtime$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/runtime/index.tsx [app-ssr] (ecmascript)");
;
function stringToBase64(str) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$runtime$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServerSide"])() ? Buffer.from(str).toString('base64') : window.btoa(str);
}
}}),
"[project]/src/app/components/image/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Image": (()=>Image)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$conversion$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/conversion/index.tsx [app-ssr] (ecmascript)");
;
;
;
;
const shimmer = `
<svg version="1.1" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#262626" />
</svg>`;
const MINIMUM_IMAGE_SIZE_WITH_BLUR = 40;
function BaseImage(props) {
    const { width, height, ...otherProps } = props;
    const blurProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (width && Number(width) < MINIMUM_IMAGE_SIZE_WITH_BLUR) return {};
        if (height && Number(height) < MINIMUM_IMAGE_SIZE_WITH_BLUR) return {};
        return {
            placeholder: 'blur',
            blurDataURL: `data:image/svg+xml;base64,${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$conversion$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToBase64"])(shimmer)}`
        };
    }, [
        width,
        height
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        width: width,
        height: height,
        ...blurProps,
        ...otherProps
    }, void 0, false, {
        fileName: "[project]/src/app/components/image/index.tsx",
        lineNumber: 28,
        columnNumber: 12
    }, this);
}
const Image = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(BaseImage);
}}),
"[project]/src/app/components/pages/home/styles.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AboutContainerStyled": (()=>AboutContainerStyled),
    "DescriptionAboutSytled": (()=>DescriptionAboutSytled),
    "ImageContainerStyled": (()=>ImageContainerStyled),
    "NavBarStyled": (()=>NavBarStyled),
    "TextContainerStyled": (()=>TextContainerStyled),
    "TitleAboutStyled": (()=>TitleAboutStyled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const NavBarStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "styles__NavBarStyled",
    componentId: "sc-ccfecedf-0"
})`
    height: 90px;
    display: flex;
    align-items: center;
`;
const ImageContainerStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styles__ImageContainerStyled",
    componentId: "sc-ccfecedf-1"
})`
    > img {
        border-radius: 100%;
        margin-bottom: 35px;
        box-shadow: rgba(255, 153, 0, 0.2) 0px 20px 35px;
    }
`;
const AboutContainerStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.attrs((props)=>({
        style: {
            backgroundImage: `linear-gradient(${props.angle}deg, rgb(255, 255, 247) 1%, rgb(114, 114, 103) 107%)`
        }
    })).withConfig({
    displayName: "styles__AboutContainerStyled",
    componentId: "sc-ccfecedf-2"
})`
    margin-top: 35px;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const TitleAboutStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styles__TitleAboutStyled",
    componentId: "sc-ccfecedf-3"
})`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    word-break: keep-all;
    @media (max-width: 768px) {
        text-align: left;
    }

    > img {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        @media (max-width: 768px) {
            top: -15px;
            text-align: left;
            align-items: flex-start;
        }
    }

    @media (max-width: 768px) {
        font-size: 35px;
        align-items: flex-start;
    }
`;
const TextContainerStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styles__TextContainerStyled",
    componentId: "sc-ccfecedf-4"
})`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        align-items: flex-start;
    }
`;
const DescriptionAboutSytled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h1.withConfig({
    displayName: "styles__DescriptionAboutSytled",
    componentId: "sc-ccfecedf-5"
})`
    text-align: center;
    margin-top: 60px;
    font-size: 24px;
    @media (max-width: 768px) {
        align-items: flex-start;
        text-align: left;
    }
`;
}}),
"[project]/src/hooks/scroll-angle/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useScrollAngle": (()=>useScrollAngle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useScrollAngle(initialAngle = 214, factor = 50) {
    const [angle, setAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialAngle);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollY = window.scrollY;
            const newAngle = initialAngle + scrollY / window.innerHeight * factor;
            setAngle(newAngle);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, [
        initialAngle,
        factor
    ]);
    return angle;
}
}}),
"[project]/src/app/components/section/styles.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SectionStyled": (()=>SectionStyled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const SectionStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "styles__SectionStyled",
    componentId: "sc-8b76ede9-0"
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    width: 100%;
    min-height: 300px;
    border-radius: 30px;
    margin-top: 50px;
    margin-bottom: 50px;

    background-image: linear-gradient(2005deg, rgb(255, 255, 247) 8.55094%, rgb(114, 114, 103) 107.012%);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    > h2 {
        -webkit-text-fill-color: initial;
        display: flex;
        align-items: flex-start;
        width: 100%;
        color: orange;
    }
`;
}}),
"[project]/src/app/components/section/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$section$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/section/styles.ts [app-ssr] (ecmascript)");
;
;
const Section = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$section$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionStyled"], {
        id: props.id,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: props.title
            }, void 0, false, {
                fileName: "[project]/src/app/components/section/index.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            props.children
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/section/index.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Section;
}}),
"[project]/.contentlayer/generated/Experience/_index.json (json)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"companyName\":\"CWI Software\",\"employmentType\":\"Apprenticeship\",\"position\":\"Crescer\",\"startedAt\":\"2018-09-01T03:00:00.000Z\",\"endedAt\":\"2018-12-01T02:00:00.000Z\",\"skills\":[\"JavaScript\",\"React.js\",\"Object-oriented Programming\",\"Oracle Database\",\"SQL\",\"Java\"],\"body\":{\"raw\":\"\\nDuring this period, in addition to my leadership role, I also worked as a Frontend Software Engineer. Juggling both roles provided a great opportunity to enhance my time management skills and develop my ability to handle diverse individuals and situations. Some of my key achievements include:\\n\\n- Served as a technical reference, leading and supporting teams with over 30 engineers\\n- Led the migration of the Frontend of 8 e-commerces to React, Next.js and TypeScript\\n- Promoted the company's culture by delivering tech talks about several technologies and best practices\\n- Improved the performance of several Frontend applications by using caching and lazy loading strategies\\n\",\"code\":\"var Component=(()=>{var p=Object.create;var a=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var f=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),v=(n,e)=>{for(var r in e)a(n,r,{get:e[r],enumerable:!0})},s=(n,e,r,o)=>{if(e&&typeof e==\\\"object\\\"||typeof e==\\\"function\\\")for(let i of g(e))!y.call(n,i)&&i!==r&&a(n,i,{get:()=>e[i],enumerable:!(o=h(e,i))||o.enumerable});return n};var x=(n,e,r)=>(r=n!=null?p(u(n)):{},s(e||!n||!n.__esModule?a(r,\\\"default\\\",{value:n,enumerable:!0}):r,n)),b=n=>s(a({},\\\"__esModule\\\",{value:!0}),n);var l=f((k,c)=>{c.exports=_jsx_runtime});var S={};v(S,{default:()=>m,frontmatter:()=>j});var t=x(l()),j={type:\\\"Experience\\\",position:\\\"Crescer\\\",companyName:\\\"CWI Software\\\",employmentType:\\\"Apprenticeship\\\",startedAt:\\\"September 2018\\\",endedAt:\\\"December 2018\\\",skills:[\\\"JavaScript\\\",\\\"React.js\\\",\\\"Object-oriented Programming\\\",\\\"Oracle Database\\\",\\\"SQL\\\",\\\"Java\\\"]};function d(n){let e={li:\\\"li\\\",p:\\\"p\\\",ul:\\\"ul\\\",...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:\\\"During this period, in addition to my leadership role, I also worked as a Frontend Software Engineer. Juggling both roles provided a great opportunity to enhance my time management skills and develop my ability to handle diverse individuals and situations. Some of my key achievements include:\\\"}),`\\n`,(0,t.jsxs)(e.ul,{children:[`\\n`,(0,t.jsx)(e.li,{children:\\\"Served as a technical reference, leading and supporting teams with over 30 engineers\\\"}),`\\n`,(0,t.jsx)(e.li,{children:\\\"Led the migration of the Frontend of 8 e-commerces to React, Next.js and TypeScript\\\"}),`\\n`,(0,t.jsx)(e.li,{children:\\\"Promoted the company's culture by delivering tech talks about several technologies and best practices\\\"}),`\\n`,(0,t.jsx)(e.li,{children:\\\"Improved the performance of several Frontend applications by using caching and lazy loading strategies\\\"}),`\\n`]})]})}function m(n={}){let{wrapper:e}=n.components||{};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}return b(S);})();\\n;return Component;\"},\"_id\":\"experience/crescer-at-cwi-software copy 2.mdx\",\"_raw\":{\"sourceFilePath\":\"experience/crescer-at-cwi-software copy 2.mdx\",\"sourceFileName\":\"crescer-at-cwi-software copy 2.mdx\",\"sourceFileDir\":\"experience\",\"contentType\":\"mdx\",\"flattenedPath\":\"experience/crescer-at-cwi-software copy 2\"},\"type\":\"Experience\"},{\"companyName\":\"CWI Software\",\"employmentType\":\"Apprenticeship\",\"position\":\"Crescer\",\"startedAt\":\"2018-09-01T03:00:00.000Z\",\"endedAt\":\"2018-12-01T02:00:00.000Z\",\"skills\":[\"JavaScript\",\"React.js\",\"Object-oriented Programming\",\"Oracle Database\",\"SQL\",\"Java\"],\"body\":{\"raw\":\"\\nDuring this period, in addition to my leadership role, I also worked as a Frontend Software Engineer. Juggling both roles provided a great opportunity to enhance my time management skills and develop my ability to handle diverse individuals and situations. Some of my key achievements include:\\n\\n- Served as a technical reference, leading and supporting teams with over 30 engineers\\n- Led the migration of the Frontend of 8 e-commerces to React, Next.js and TypeScript\\n\\n\",\"code\":\"var Component=(()=>{var p=Object.create;var a=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var f=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),x=(n,e)=>{for(var r in e)a(n,r,{get:e[r],enumerable:!0})},s=(n,e,r,o)=>{if(e&&typeof e==\\\"object\\\"||typeof e==\\\"function\\\")for(let i of u(e))!y.call(n,i)&&i!==r&&a(n,i,{get:()=>e[i],enumerable:!(o=h(e,i))||o.enumerable});return n};var v=(n,e,r)=>(r=n!=null?p(g(n)):{},s(e||!n||!n.__esModule?a(r,\\\"default\\\",{value:n,enumerable:!0}):r,n)),j=n=>s(a({},\\\"__esModule\\\",{value:!0}),n);var d=f((w,c)=>{c.exports=_jsx_runtime});var _={};x(_,{default:()=>m,frontmatter:()=>S});var t=v(d()),S={type:\\\"Experience\\\",position:\\\"Crescer\\\",companyName:\\\"CWI Software\\\",employmentType:\\\"Apprenticeship\\\",startedAt:\\\"September 2018\\\",endedAt:\\\"December 2018\\\",skills:[\\\"JavaScript\\\",\\\"React.js\\\",\\\"Object-oriented Programming\\\",\\\"Oracle Database\\\",\\\"SQL\\\",\\\"Java\\\"]};function l(n){let e={li:\\\"li\\\",p:\\\"p\\\",ul:\\\"ul\\\",...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:\\\"During this period, in addition to my leadership role, I also worked as a Frontend Software Engineer. Juggling both roles provided a great opportunity to enhance my time management skills and develop my ability to handle diverse individuals and situations. Some of my key achievements include:\\\"}),`\\n`,(0,t.jsxs)(e.ul,{children:[`\\n`,(0,t.jsx)(e.li,{children:\\\"Served as a technical reference, leading and supporting teams with over 30 engineers\\\"}),`\\n`,(0,t.jsx)(e.li,{children:\\\"Led the migration of the Frontend of 8 e-commerces to React, Next.js and TypeScript\\\"}),`\\n`]})]})}function m(n={}){let{wrapper:e}=n.components||{};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}return j(_);})();\\n;return Component;\"},\"_id\":\"experience/crescer-at-cwi-software copy 3.mdx\",\"_raw\":{\"sourceFilePath\":\"experience/crescer-at-cwi-software copy 3.mdx\",\"sourceFileName\":\"crescer-at-cwi-software copy 3.mdx\",\"sourceFileDir\":\"experience\",\"contentType\":\"mdx\",\"flattenedPath\":\"experience/crescer-at-cwi-software copy 3\"},\"type\":\"Experience\"},{\"companyName\":\"CWI Software\",\"employmentType\":\"Apprenticeship\",\"position\":\"Crescer\",\"startedAt\":\"2018-09-01T03:00:00.000Z\",\"endedAt\":\"2018-12-01T02:00:00.000Z\",\"skills\":[\"JavaScript\",\"React.js\",\"Object-oriented Programming\",\"Oracle Database\",\"SQL\",\"Java\"],\"body\":{\"raw\":\"\\nDuring this period, in addition to my leadership role, I also worked as a Frontend Software Engineer. Juggling both roles provided a great opportunity to enhance my time management skills and develop my ability to handle diverse individuals and situations. Some of my key achievements include:\\n\\n- Served as a technical reference, leading and supporting teams with over 30 engineers\\n- Led the migration of the Frontend of 8 e-commerces to React, Next.js and TypeScript\\n- Promoted the company's culture by delivering tech talks about several technologies and best practices\\n- Improved the performance of several Frontend applications by using caching and lazy loading strategies\\n\",\"code\":\"var Component=(()=>{var p=Object.create;var a=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var f=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),v=(n,e)=>{for(var r in e)a(n,r,{get:e[r],enumerable:!0})},s=(n,e,r,o)=>{if(e&&typeof e==\\\"object\\\"||typeof e==\\\"function\\\")for(let i of g(e))!y.call(n,i)&&i!==r&&a(n,i,{get:()=>e[i],enumerable:!(o=h(e,i))||o.enumerable});return n};var x=(n,e,r)=>(r=n!=null?p(u(n)):{},s(e||!n||!n.__esModule?a(r,\\\"default\\\",{value:n,enumerable:!0}):r,n)),b=n=>s(a({},\\\"__esModule\\\",{value:!0}),n);var l=f((k,c)=>{c.exports=_jsx_runtime});var S={};v(S,{default:()=>m,frontmatter:()=>j});var t=x(l()),j={type:\\\"Experience\\\",position:\\\"Crescer\\\",companyName:\\\"CWI Software\\\",employmentType:\\\"Apprenticeship\\\",startedAt:\\\"September 2018\\\",endedAt:\\\"December 2018\\\",skills:[\\\"JavaScript\\\",\\\"React.js\\\",\\\"Object-oriented Programming\\\",\\\"Oracle Database\\\",\\\"SQL\\\",\\\"Java\\\"]};function d(n){let e={li:\\\"li\\\",p:\\\"p\\\",ul:\\\"ul\\\",...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:\\\"During this period, in addition to my leadership role, I also worked as a Frontend Software Engineer. Juggling both roles provided a great opportunity to enhance my time management skills and develop my ability to handle diverse individuals and situations. Some of my key achievements include:\\\"}),`\\n`,(0,t.jsxs)(e.ul,{children:[`\\n`,(0,t.jsx)(e.li,{children:\\\"Served as a technical reference, leading and supporting teams with over 30 engineers\\\"}),`\\n`,(0,t.jsx)(e.li,{children:\\\"Led the migration of the Frontend of 8 e-commerces to React, Next.js and TypeScript\\\"}),`\\n`,(0,t.jsx)(e.li,{children:\\\"Promoted the company's culture by delivering tech talks about several technologies and best practices\\\"}),`\\n`,(0,t.jsx)(e.li,{children:\\\"Improved the performance of several Frontend applications by using caching and lazy loading strategies\\\"}),`\\n`]})]})}function m(n={}){let{wrapper:e}=n.components||{};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}return b(S);})();\\n;return Component;\"},\"_id\":\"experience/crescer-at-cwi-software copy.mdx\",\"_raw\":{\"sourceFilePath\":\"experience/crescer-at-cwi-software copy.mdx\",\"sourceFileName\":\"crescer-at-cwi-software copy.mdx\",\"sourceFileDir\":\"experience\",\"contentType\":\"mdx\",\"flattenedPath\":\"experience/crescer-at-cwi-software copy\"},\"type\":\"Experience\"},{\"companyName\":\"CWI Software\",\"employmentType\":\"Apprenticeship\",\"position\":\"Crescer\",\"startedAt\":\"2018-09-01T03:00:00.000Z\",\"endedAt\":\"2018-12-01T02:00:00.000Z\",\"skills\":[\"JavaScript\",\"React.js\",\"Object-oriented Programming\",\"Oracle Database\",\"SQL\",\"Java\"],\"body\":{\"raw\":\"\\nDuring this period, in addition to my leadership role, I also worked as a Frontend Software Engineer. Juggling both roles provided a great opportunity to enhance my time management skills and develop my ability to handle diverse individuals and situations. Some of my key achievements include:\\n\\n- Served as a technical reference, leading and supporting teams with over 30 engineers\\n- Led the migration of the Frontend of 8 e-commerces to React, Next.js and TypeScript\\n- Promoted the company's culture by delivering tech talks about several technologies and best practices\\n- Improved the performance of several Frontend applications by using caching and lazy loading strategies\\n\",\"code\":\"var Component=(()=>{var p=Object.create;var a=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var f=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),v=(n,e)=>{for(var r in e)a(n,r,{get:e[r],enumerable:!0})},s=(n,e,r,o)=>{if(e&&typeof e==\\\"object\\\"||typeof e==\\\"function\\\")for(let i of g(e))!y.call(n,i)&&i!==r&&a(n,i,{get:()=>e[i],enumerable:!(o=h(e,i))||o.enumerable});return n};var x=(n,e,r)=>(r=n!=null?p(u(n)):{},s(e||!n||!n.__esModule?a(r,\\\"default\\\",{value:n,enumerable:!0}):r,n)),b=n=>s(a({},\\\"__esModule\\\",{value:!0}),n);var l=f((k,c)=>{c.exports=_jsx_runtime});var S={};v(S,{default:()=>m,frontmatter:()=>j});var t=x(l()),j={type:\\\"Experience\\\",position:\\\"Crescer\\\",companyName:\\\"CWI Software\\\",employmentType:\\\"Apprenticeship\\\",startedAt:\\\"September 2018\\\",endedAt:\\\"December 2018\\\",skills:[\\\"JavaScript\\\",\\\"React.js\\\",\\\"Object-oriented Programming\\\",\\\"Oracle Database\\\",\\\"SQL\\\",\\\"Java\\\"]};function d(n){let e={li:\\\"li\\\",p:\\\"p\\\",ul:\\\"ul\\\",...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:\\\"During this period, in addition to my leadership role, I also worked as a Frontend Software Engineer. Juggling both roles provided a great opportunity to enhance my time management skills and develop my ability to handle diverse individuals and situations. Some of my key achievements include:\\\"}),`\\n`,(0,t.jsxs)(e.ul,{children:[`\\n`,(0,t.jsx)(e.li,{children:\\\"Served as a technical reference, leading and supporting teams with over 30 engineers\\\"}),`\\n`,(0,t.jsx)(e.li,{children:\\\"Led the migration of the Frontend of 8 e-commerces to React, Next.js and TypeScript\\\"}),`\\n`,(0,t.jsx)(e.li,{children:\\\"Promoted the company's culture by delivering tech talks about several technologies and best practices\\\"}),`\\n`,(0,t.jsx)(e.li,{children:\\\"Improved the performance of several Frontend applications by using caching and lazy loading strategies\\\"}),`\\n`]})]})}function m(n={}){let{wrapper:e}=n.components||{};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}return b(S);})();\\n;return Component;\"},\"_id\":\"experience/crescer-at-cwi-software.mdx\",\"_raw\":{\"sourceFilePath\":\"experience/crescer-at-cwi-software.mdx\",\"sourceFileName\":\"crescer-at-cwi-software.mdx\",\"sourceFileDir\":\"experience\",\"contentType\":\"mdx\",\"flattenedPath\":\"experience/crescer-at-cwi-software\"},\"type\":\"Experience\"}]"));}}),
"[project]/.contentlayer/generated/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// NOTE This file is auto-generated by Contentlayer
__turbopack_context__.s({
    "allDocuments": (()=>allDocuments)
});
// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
var __TURBOPACK__imported__module__$5b$project$5d2f2e$contentlayer$2f$generated$2f$Experience$2f$_index$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/.contentlayer/generated/Experience/_index.json (json)");
;
;
;
const allDocuments = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f2e$contentlayer$2f$generated$2f$Experience$2f$_index$2e$json__$28$json$29$__["default"]
];
}}),
"[project]/.contentlayer/generated/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$contentlayer2$2f$dist$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/contentlayer2/dist/client/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$contentlayer$2f$generated$2f$Experience$2f$_index$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/.contentlayer/generated/Experience/_index.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$contentlayer$2f$generated$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.contentlayer/generated/index.mjs [app-ssr] (ecmascript) <locals>");
}}),
"[project]/.contentlayer/generated/Experience/_index.json (json) <export default as allExperiences>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "allExperiences": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$contentlayer$2f$generated$2f$Experience$2f$_index$2e$json__$28$json$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$contentlayer$2f$generated$2f$Experience$2f$_index$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/.contentlayer/generated/Experience/_index.json (json)");
}}),
"[project]/src/content/experience/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "currentExperience": (()=>currentExperience),
    "experiences": (()=>experiences)
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$contentlayer$2f$generated$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/.contentlayer/generated/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$contentlayer$2f$generated$2f$Experience$2f$_index$2e$json__$28$json$29$__$3c$export__default__as__allExperiences$3e$__ = __turbopack_context__.i("[project]/.contentlayer/generated/Experience/_index.json (json) <export default as allExperiences>");
;
const experiences = __TURBOPACK__imported__module__$5b$project$5d2f2e$contentlayer$2f$generated$2f$Experience$2f$_index$2e$json__$28$json$29$__$3c$export__default__as__allExperiences$3e$__["allExperiences"].sort((a, b)=>b.startedAt.localeCompare(a.startedAt));
const currentExperience = experiences[0];
}}),
"[project]/src/app/components/experience/styles.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ExperienceCardStyled": (()=>ExperienceCardStyled),
    "ExperinceDescriptionContainerStyled": (()=>ExperinceDescriptionContainerStyled),
    "SkillsContainerStyled": (()=>SkillsContainerStyled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
'use client';
;
const ExperienceCardStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styles__ExperienceCardStyled",
    componentId: "sc-1e8fbca3-0"
})`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    margin-bottom: 50px;
    margin-top: 50px;
`;
const SkillsContainerStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styles__SkillsContainerStyled",
    componentId: "sc-1e8fbca3-1"
})`
    display: flex;
    flex-direction: row;
`;
const ExperinceDescriptionContainerStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styles__ExperinceDescriptionContainerStyled",
    componentId: "sc-1e8fbca3-2"
})`
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 30px;
        margin-bottom: 10px;
    }

    > article {
        font-size: 1.25rem;
        margin-top: 20px;
        > p {
            margin-bottom: 20px;

            line-height: 1.75rem;
        }
        > ul > li {
            font-size: 1.125rem;
            line-height: 30px;
            list-style-position: inside;
            list-style-type: disc;
            list-style-type: circle;
            margin-bottom: 20px;
            display: list-item;
            text-align: -webkit-match-parent;
            unicode-bidi: isolate;
        }
    }
`;
}}),
"[project]/src/app/components/experience/time-line/styles.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EndedAtStyled": (()=>EndedAtStyled),
    "StartedAtStyled": (()=>StartedAtStyled),
    "TimeLineStyed": (()=>TimeLineStyed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const TimeLineStyed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styles__TimeLineStyed",
    componentId: "sc-101b7c14-0"
})`
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 68px;
    height: 100%;
    border-right: rgb(38, 38, 38) solid 2px;
    margin-right: 20px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(2005deg, rgb(255, 255, 247) 8.55094%, rgb(114, 114, 103) 107.012%);
`;
const EndedAtStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "styles__EndedAtStyled",
    componentId: "sc-101b7c14-1"
})`
    position: relative;
    -webkit-text-fill-color: initial;
    color: orange;
    line-height: 2rem;
    text-align: center;
    left: 5px;
    margin-top: 20px;
    background-color: rgb(13, 13, 13);
    min-width: 6px;
`;
const StartedAtStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "styles__StartedAtStyled",
    componentId: "sc-101b7c14-2"
})`
    position: relative;
    -webkit-text-fill-color: initial;
    color: orange;
    line-height: 2rem;
    text-align: center;
    left: 5px;
    margin-bottom: 20px;
    background-color: rgb(13, 13, 13);
    min-width: 6px;
`;
}}),
"[project]/src/app/components/experience/time-line/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$time$2d$line$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/experience/time-line/styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$fp$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/fp/format.js [app-ssr] (ecmascript)");
;
;
;
const TimeLine = ({ startedAt, endedAt })=>{
    const formatedStartedAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$fp$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])('MMM yyyy', new Date(startedAt));
    const formatedEndeddAt = endedAt ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$fp$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["format"])('MMM yyyy', new Date(endedAt)) : 'Present';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$time$2d$line$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimeLineStyed"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$time$2d$line$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EndedAtStyled"], {
                children: formatedEndeddAt
            }, void 0, false, {
                fileName: "[project]/src/app/components/experience/time-line/index.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$time$2d$line$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StartedAtStyled"], {
                children: formatedStartedAt
            }, void 0, false, {
                fileName: "[project]/src/app/components/experience/time-line/index.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/experience/time-line/index.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = TimeLine;
}}),
"[externals]/mdx-bundler/client/index.js [external] (mdx-bundler/client/index.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mdx-bundler/client/index.js", () => require("mdx-bundler/client/index.js"));

module.exports = mod;
}}),
"[project]/src/app/components/experience/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/experience/styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$time$2d$line$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/experience/time-line/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$contentlayer2$2f$dist$2f$hooks$2f$useMDXComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-contentlayer2/dist/hooks/useMDXComponent.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
const ExperienceCard = ({ companyName, employmentType, position, startedAt, endedAt, description, skills })=>{
    const Content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$contentlayer2$2f$dist$2f$hooks$2f$useMDXComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMDXComponent"])(description.code);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExperienceCardStyled"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$time$2d$line$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                startedAt: startedAt,
                endedAt: endedAt
            }, void 0, false, {
                fileName: "[project]/src/app/components/experience/index.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExperinceDescriptionContainerStyled"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: position
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/experience/index.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            companyName,
                            ", ",
                            employmentType
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/experience/index.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {}, void 0, false, {
                            fileName: "[project]/src/app/components/experience/index.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/experience/index.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkillsContainerStyled"], {
                        children: [
                            "Skills: ",
                            skills.join(', ')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/experience/index.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/experience/index.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/experience/index.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = ExperienceCard;
}}),
"[project]/src/hooks/type-writer/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTypeWriter": (()=>useTypeWriter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useTypeWriter(phrases) {
    const [phraseDisplayed, setPhraseDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(phrases[0]);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        isDeleting: false,
        actualIndexPhrase: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const actualPhrase = phrases[stateRef.current.actualIndexPhrase];
        if (phraseDisplayed === actualPhrase) {
            stateRef.current = {
                ...stateRef.current,
                isDeleting: true
            };
        }
        function typeCharacter() {
            setIsTyping(true);
            setPhraseDisplayed((prevText)=>prevText + actualPhrase[phraseDisplayed.length]);
        }
        function removeCharacter() {
            setIsTyping(true);
            const nextText = phraseDisplayed.slice(0, -1);
            setPhraseDisplayed(nextText);
            nextPhrases(nextText);
        }
        function nextPhrases(phrase) {
            if (phrase === '') {
                const nextIndex = stateRef.current.actualIndexPhrase < phrases.length - 1 ? stateRef.current.actualIndexPhrase + 1 : 0;
                stateRef.current = {
                    actualIndexPhrase: nextIndex,
                    isDeleting: false
                };
            }
        }
        if (!stateRef.current.isDeleting && phraseDisplayed !== actualPhrase) {
            setTimeout(typeCharacter, 150);
        } else if (phraseDisplayed !== '') {
            setIsTyping(false);
            const timeToRemove = phraseDisplayed === actualPhrase ? 2000 : 50;
            setTimeout(removeCharacter, timeToRemove);
        }
    }, [
        phraseDisplayed
    ]);
    return {
        phraseDisplayed,
        isTyping: isTyping
    };
}
}}),
"[project]/src/app/components/type-writer/styles.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BlinkingPipeStyled": (()=>BlinkingPipeStyled),
    "TypeWriterStyled": (()=>TypeWriterStyled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
const typewriterCursor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
`;
const TypeWriterStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styles__TypeWriterStyled",
    componentId: "sc-d8f18a83-0"
})`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    word-break: keep-all;
    @media (max-width: 768px) {
        text-align: left;
    }

    > img {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        @media (max-width: 768px) {
            top: -15px;
            text-align: left;
            align-items: flex-start;
        }
    }

    @media (max-width: 768px) {
        font-size: 35px;
        align-items: flex-start;
    }
`;
const BlinkingPipeStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "styles__BlinkingPipeStyled",
    componentId: "sc-d8f18a83-1"
})`
    display: inline-block;
    opacity: 1;
    animation-name: ${(props)=>props.isTyping ? null : typewriterCursor};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    -webkit-text-fill-color: initial;
`;
}}),
"[project]/src/app/components/type-writer/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$type$2d$writer$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/type-writer/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$type$2d$writer$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/type-writer/styles.ts [app-ssr] (ecmascript)");
;
;
;
const TypeWriter = ()=>{
    const testes = [
        'Software Engineer',
        'Innovative Problem Solver',
        'AWS Serveless'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$type$2d$writer$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeWriterStyled"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$type$2d$writer$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTypeWriter"])(testes).phraseDisplayed,
            ' ',
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$type$2d$writer$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlinkingPipeStyled"], {
                isTyping: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$type$2d$writer$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTypeWriter"])(testes).isTyping,
                children: "|"
            }, void 0, false, {
                fileName: "[project]/src/app/components/type-writer/index.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/type-writer/index.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = TypeWriter;
}}),
"[project]/src/app/components/pages/home/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$image$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/image/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$pages$2f$home$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/pages/home/styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$scroll$2d$angle$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/scroll-angle/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$section$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/section/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$experience$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/experience/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/experience/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$type$2d$writer$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/type-writer/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const HomeScreen = ()=>{
    const angle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$scroll$2d$angle$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAngle"])(214, 200);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$pages$2f$home$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutContainerStyled"], {
                angle: angle,
                id: "about",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$pages$2f$home$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageContainerStyled"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$image$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                            src: "/images/profile-photo.jpg",
                            width: 225,
                            height: 225,
                            alt: "Arthur Scheffer's picture with a orange background"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/pages/home/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/pages/home/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$pages$2f$home$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextContainerStyled"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$pages$2f$home$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleAboutStyled"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$pages$2f$home$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleAboutStyled"], {
                                        children: "Hey "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/pages/home/index.tsx",
                                        lineNumber: 35,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$image$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                        src: "/images/waving-hand.gif",
                                        width: 50,
                                        height: 50,
                                        alt: "gif of a hand waving"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/pages/home/index.tsx",
                                        lineNumber: 36,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$pages$2f$home$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleAboutStyled"], {
                                        children: ", Im Arthur"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/pages/home/index.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/pages/home/index.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$type$2d$writer$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/components/pages/home/index.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$pages$2f$home$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DescriptionAboutSytled"], {
                                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores non maxime voluptas, ratione fuga soluta reiciendis dignissimos modi veniam corporis, quasi, iste eligendi natus sequi est recusandae hic earum."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/pages/home/index.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/pages/home/index.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/pages/home/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$section$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "experience",
                title: "Experience",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$experience$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$experience$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currentExperience"],
                        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$experience$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currentExperience"]?.body
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/pages/home/index.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/experience",
                        children: " see more"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/pages/home/index.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/pages/home/index.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$section$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "posts",
                title: "Posts",
                children: "Comming Soon..."
            }, void 0, false, {
                fileName: "[project]/src/app/components/pages/home/index.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$section$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "contact",
                title: "Contact",
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vel ipsa. Fugit, in. Totam ullam et magni tempore quam delectus voluptatum. Possimus qui fugit illum laborum quis optio recusandae. Ea!"
            }, void 0, false, {
                fileName: "[project]/src/app/components/pages/home/index.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = HomeScreen;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__324f9530._.js.map