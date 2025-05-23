(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/libs/data.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "sidebarItems": (()=>sidebarItems)
});
const sidebarItems = [
    {
        title: "beranda",
        subtitle: "Ringkasan",
        description: "Menampilkan ringkasan aktivitas dan performa sistem.",
        icon: "/icons/home.svg",
        icon_active: "/icons/home-active.svg"
    },
    {
        title: "ekonomi",
        subtitle: "Ekonomi",
        description: "Informasi dan statistik terkait ekonomi daerah.",
        icon: "/icons/ekonomi.svg",
        icon_active: "/icons/ekonomi-active.svg"
    },
    {
        title: "infrastruktur",
        subtitle: "Infrastruktur",
        description: "Data dan indikator seputar pembangunan infrastruktur.",
        icon: "/icons/infrastruktur.svg",
        icon_active: "/icons/infrastruktur-active.svg"
    },
    {
        title: "sosial",
        subtitle: "Sosial",
        description: "Data sosial dan kesejahteraan masyarakat.",
        icon: "/icons/sosial.svg",
        icon_active: "/icons/sosial-active.svg"
    },
    {
        title: "kesehatan",
        subtitle: "Kesehatan",
        description: "Indikator kesehatan masyarakat dan fasilitas layanan.",
        icon: "/icons/kesehatan.svg",
        icon_active: "/icons/kesehatan-active.svg"
    },
    {
        title: "pendidikan",
        subtitle: "Pendidikan",
        description: "Data terkait sistem dan capaian pendidikan.",
        icon: "/icons/pendidikan.svg",
        icon_active: "/icons/pendidikan-active.svg"
    },
    {
        title: "pariwisata",
        subtitle: "Pariwisata",
        description: "Informasi dan statistik pariwisata daerah.",
        icon: "/icons/pariwisata.svg",
        icon_active: "/icons/pariwisata-active.svg"
    },
    {
        title: "lingkungan",
        subtitle: "Lingkungan",
        description: "Data terkait kondisi dan pelestarian lingkungan.",
        icon: "/icons/lingkungan.svg",
        icon_active: "/icons/lingkungan-active.svg"
    },
    {
        title: "kependudukan",
        subtitle: "Kependudukan",
        description: "Data demografi dan statistik kependudukan.",
        icon: "/icons/kependudukan.svg",
        icon_active: "/icons/kependudukan-active.svg"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/sidebar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Sidebar = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sidebar-content bg-white w-full h-full ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[70px] bg-main-blue flex justify-center items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/opendata-logo.png",
                    alt: "Logo",
                    width: 200,
                    height: 42,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/components/sidebar.js",
                    lineNumber: 13,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sidebar.js",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 w-full h-full p-4 h-custom-100-70",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sidebarItems"].map((item, index)=>{
                    const isActive = pathname === `/dashboards/${item.title}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/dashboards/${item.title}`,
                        className: `flex items-center py-2 px-8 rounded-full ${isActive ? "bg-main-blue/10 text-main-blue" : "hover:bg-gray-100 text-gray-500"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: isActive ? item.icon_active : item.icon,
                                alt: item.title,
                                width: 26,
                                height: 26,
                                className: "object-contain md:mr-4 lg:md-8"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.js",
                                lineNumber: 31,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold hidden md:block",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.js",
                                lineNumber: 38,
                                columnNumber: 29
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/sidebar.js",
                        lineNumber: 24,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/sidebar.js",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sidebar.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/navbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boxicons$2f$dist$2f$boxicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/boxicons/dist/boxicons.js [app-client] (ecmascript)");
'use client';
;
;
const Navbar = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "navbar-content w-full fix shadow-[inset_8px_0_6px_-6px_rgba(0,0,0,0.8)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[70px] bg-dark-blue flex items-center justify-between px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-bold text-xl",
                    children: "Excecutive Dashboard"
                }, void 0, false, {
                    fileName: "[project]/components/navbar.js",
                    lineNumber: 8,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("box-icon", {
                    type: "solid",
                    name: "chevron-down"
                }, void 0, false, {
                    fileName: "[project]/components/navbar.js",
                    lineNumber: 9,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/navbar.js",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/navbar.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_fcb1b3e1._.js.map