(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/tingkatkemiskinanchart.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des"
];
const data = {
    labels,
    datasets: [
        {
            label: "Tingkat Kemiskinan (%)",
            data: [
                75,
                75,
                60,
                55,
                40,
                35,
                40,
                25,
                20,
                15,
                15,
                10
            ],
            backgroundColor: "#2563EB",
            barThickness: 60,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        }
    ]
};
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "Tingkat Kemiskinan Provinsi Jawa Timur 2024",
            font: {
                size: 18
            },
            align: "start",
            padding: {
                top: 20,
                bottom: 40
            }
        },
        tooltip: {
            enabled: true
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            max: 100,
            ticks: {
                stepSize: 33.3,
                callback: function(value) {
                    if (value === 0) return "2021";
                    if (value === 33.3) return "2022";
                    if (value === 66.6) return "2023";
                    if (value === 100) return "2024";
                    return "";
                },
                color: "#6B7280"
            }
        }
    }
};
// Komponen chart
const TingkatKemiskinanChart = ()=>{
    _s();
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("2024");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-5 rounded-xl flex-1 shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-4 pb-4 border-b-2 border-main-blue/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "text-blue-600",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "M11.875 20q.1 0 .2-.05t.15-.1l8.2-8.2q.3-.3.438-.675t.137-.75q0-.4-.137-.763t-.438-.637l-4.25-4.25q-.275-.3-.638-.437T14.776 4q-.375 0-.75.138t-.675.437l-.275.275l1.85 1.875q.375.35.55.8t.175.95q0 1.05-.712 1.763t-1.763.712q-.5 0-.962-.175t-.813-.525L9.525 8.4L5.15 12.775q-.075.075-.112.163T5 13.125q0 .2.15.363t.35.162q.1 0 .2-.05t.15-.1l2.7-2.7q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.675 2.7q-.075.075-.112.163t-.038.187q0 .2.15.35t.35.15q.1 0 .2-.05t.15-.1l2.7-2.675q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.675 2.7q-.075.05-.112.15t-.038.2q0 .2.15.35t.35.15q.1 0 .188-.038t.162-.112l2.7-2.675q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.7 2.7q-.075.075-.112.163t-.038.187q0 .2.163.35t.362.15m-.025 2q-.925 0-1.637-.612t-.838-1.538q-.85-.125-1.425-.7t-.7-1.425q-.85-.125-1.412-.712T5.15 15.6q-.95-.125-1.55-.825t-.6-1.65q0-.5.188-.962t.537-.813L8.1 6.975Q8.675 6.4 9.513 6.4t1.412.575L12.8 8.85q.05.075.15.113t.2.037q.225 0 .375-.137t.15-.363q0-.1-.038-.2t-.112-.15L9.95 4.575q-.275-.3-.637-.437T8.55 4q-.375 0-.75.138t-.675.437L3.6 8.125q-.35.35-.5.825t-.075.95q.075.425-.175.75t-.675.375t-.75-.188t-.375-.662q-.15-.95.138-1.862T2.175 6.7L5.7 3.175Q6.3 2.6 7.038 2.3T8.55 2t1.513.3t1.312.875l.275.275l.275-.275q.6-.575 1.338-.875t1.512-.3t1.513.3t1.312.875L21.825 7.4q.575.575.875 1.325t.3 1.525t-.3 1.513t-.875 1.312l-8.2 8.175q-.35.35-.812.55t-.963.2M9.4 8"
                                }, void 0, false, {
                                    fileName: "[project]/components/tingkatkemiskinanchart.js",
                                    lineNumber: 84,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/tingkatkemiskinanchart.js",
                                lineNumber: 83,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-gray-500",
                                children: "Perkembangan Tingkat Kemiskinan Provinsi Jawa Timur (%)"
                            }, void 0, false, {
                                fileName: "[project]/components/tingkatkemiskinanchart.js",
                                lineNumber: 86,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tingkatkemiskinanchart.js",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: selectedYear,
                        onChange: (e)=>setSelectedYear(e.target.value),
                        className: "border-2 border-blue-600 text-blue-600 rounded-md py-2 px-4 text-sm font-bold cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                className: "text-blue-600",
                                value: "2024",
                                children: "2024"
                            }, void 0, false, {
                                fileName: "[project]/components/tingkatkemiskinanchart.js",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                className: "text-blue-600",
                                value: "2023",
                                children: "2023"
                            }, void 0, false, {
                                fileName: "[project]/components/tingkatkemiskinanchart.js",
                                lineNumber: 94,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                className: "text-blue-600",
                                value: "2022",
                                children: "2022"
                            }, void 0, false, {
                                fileName: "[project]/components/tingkatkemiskinanchart.js",
                                lineNumber: 95,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                className: "text-blue-600",
                                value: "2021",
                                children: "2021"
                            }, void 0, false, {
                                fileName: "[project]/components/tingkatkemiskinanchart.js",
                                lineNumber: 96,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tingkatkemiskinanchart.js",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tingkatkemiskinanchart.js",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                data: data,
                options: options
            }, void 0, false, {
                fileName: "[project]/components/tingkatkemiskinanchart.js",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tingkatkemiskinanchart.js",
        lineNumber: 80,
        columnNumber: 5
    }, this);
};
_s(TingkatKemiskinanChart, "byGbAWjNBJEwKBatj45nfVMW1o0=");
_c = TingkatKemiskinanChart;
const __TURBOPACK__default__export__ = TingkatKemiskinanChart;
var _c;
__turbopack_context__.k.register(_c, "TingkatKemiskinanChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/bjskesehatanchart.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const data = {
    labels: [
        'Belum Daftar',
        'Sudah Daftar'
    ],
    datasets: [
        {
            label: 'Progress',
            data: [
                15,
                85
            ],
            backgroundColor: [
                '#C084FC',
                '#2563EB'
            ],
            borderWidth: 2,
            cutout: '60%'
        }
    ]
};
const options = {
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: true
        }
    }
};
const legends = [
    {
        label: "Belum Daftar",
        color: "#C084FC",
        value: "15%"
    },
    {
        label: "Sudah Daftar",
        color: "#2563EB",
        value: "85%"
    }
];
const BpjsKesehatanChart = ()=>{
    _s();
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("2024");
    const average = ((15 + 85) / 2).toFixed(1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-5 rounded-xl flex-1 shadow-md max-h-[470px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-4 pb-4 border-b-2 border-main-blue/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "text-blue-600",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "M11.875 20q.1 0 .2-.05t.15-.1l8.2-8.2q.3-.3.438-.675t.137-.75q0-.4-.137-.763t-.438-.637l-4.25-4.25q-.275-.3-.638-.437T14.776 4q-.375 0-.75.138t-.675.437l-.275.275l1.85 1.875q.375.35.55.8t.175.95q0 1.05-.712 1.763t-1.763.712q-.5 0-.962-.175t-.813-.525L9.525 8.4L5.15 12.775q-.075.075-.112.163T5 13.125q0 .2.15.363t.35.162q.1 0 .2-.05t.15-.1l2.7-2.7q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.675 2.7q-.075.075-.112.163t-.038.187q0 .2.15.35t.35.15q.1 0 .2-.05t.15-.1l2.7-2.675q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.675 2.7q-.075.05-.112.15t-.038.2q0 .2.15.35t.35.15q.1 0 .188-.038t.162-.112l2.7-2.675q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.7 2.7q-.075.075-.112.163t-.038.187q0 .2.163.35t.362.15m-.025 2q-.925 0-1.637-.612t-.838-1.538q-.85-.125-1.425-.7t-.7-1.425q-.85-.125-1.412-.712T5.15 15.6q-.95-.125-1.55-.825t-.6-1.65q0-.5.188-.962t.537-.813L8.1 6.975Q8.675 6.4 9.513 6.4t1.412.575L12.8 8.85q.05.075.15.113t.2.037q.225 0 .375-.137t.15-.363q0-.1-.038-.2t-.112-.15L9.95 4.575q-.275-.3-.637-.437T8.55 4q-.375 0-.75.138t-.675.437L3.6 8.125q-.35.35-.5.825t-.075.95q.075.425-.175.75t-.675.375t-.75-.188t-.375-.662q-.15-.95.138-1.862T2.175 6.7L5.7 3.175Q6.3 2.6 7.038 2.3T8.55 2t1.513.3t1.312.875l.275.275l.275-.275q.6-.575 1.338-.875t1.512-.3t1.513.3t1.312.875L21.825 7.4q.575.575.875 1.325t.3 1.525t-.3 1.513t-.875 1.312l-8.2 8.175q-.35.35-.812.55t-.963.2M9.4 8"
                                }, void 0, false, {
                                    fileName: "[project]/components/bjskesehatanchart.js",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/bjskesehatanchart.js",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-gray-500",
                                children: "BPJS Kesehatan"
                            }, void 0, false, {
                                fileName: "[project]/components/bjskesehatanchart.js",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bjskesehatanchart.js",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: selectedYear,
                        onChange: (e)=>setSelectedYear(e.target.value),
                        className: "border-2 border-blue-600 text-blue-600 rounded-md py-2 px-4 text-sm font-bold cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                className: "text-blue-600",
                                value: "2024",
                                children: "2024"
                            }, void 0, false, {
                                fileName: "[project]/components/bjskesehatanchart.js",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                className: "text-blue-600",
                                value: "2023",
                                children: "2023"
                            }, void 0, false, {
                                fileName: "[project]/components/bjskesehatanchart.js",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                className: "text-blue-600",
                                value: "2022",
                                children: "2022"
                            }, void 0, false, {
                                fileName: "[project]/components/bjskesehatanchart.js",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                className: "text-blue-600",
                                value: "2021",
                                children: "2021"
                            }, void 0, false, {
                                fileName: "[project]/components/bjskesehatanchart.js",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bjskesehatanchart.js",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/bjskesehatanchart.js",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl text-gray-500 font-bold mb-8 mt-4",
                children: "Rasio Kepesertaan BPJS Kesehatan Provinsi Jawa Timur"
            }, void 0, false, {
                fileName: "[project]/components/bjskesehatanchart.js",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-8 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                            data: data,
                            options: options
                        }, void 0, false, {
                            fileName: "[project]/components/bjskesehatanchart.js",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/bjskesehatanchart.js",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-gray-500 font-medium text-xl",
                                children: "Persentasi rata - rata kepesertaan "
                            }, void 0, false, {
                                fileName: "[project]/components/bjskesehatanchart.js",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-6xl font-bold mb-14",
                                children: "81.8%"
                            }, void 0, false, {
                                fileName: "[project]/components/bjskesehatanchart.js",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            legends.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-3 h-3 inline-block rounded-full",
                                                    style: {
                                                        backgroundColor: item.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bjskesehatanchart.js",
                                                    lineNumber: 79,
                                                    columnNumber: 29
                                                }, this),
                                                item.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/bjskesehatanchart.js",
                                            lineNumber: 78,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/bjskesehatanchart.js",
                                            lineNumber: 85,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/components/bjskesehatanchart.js",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bjskesehatanchart.js",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/bjskesehatanchart.js",
                lineNumber: 69,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/bjskesehatanchart.js",
        lineNumber: 49,
        columnNumber: 9
    }, this);
};
_s(BpjsKesehatanChart, "byGbAWjNBJEwKBatj45nfVMW1o0=");
_c = BpjsKesehatanChart;
const __TURBOPACK__default__export__ = BpjsKesehatanChart;
var _c;
__turbopack_context__.k.register(_c, "BpjsKesehatanChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_5ffd29a4._.js.map