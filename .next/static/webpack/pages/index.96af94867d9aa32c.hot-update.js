"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./data/Projects.js":
/*!**************************!*\
  !*** ./data/Projects.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst PROJECTS = [\n    {\n        name: \"PawPoints\",\n        imagePath: \"/pics/pawpoints.png\",\n        description: \"\\n        _Svelte_, _Google Firebase_, _TypeScript_, and _Tailwind.css_-based website to allow users\\n        to track and feed local stray cats. Visuals created with _Mapbox_, project containerized\\n        using _Docker_. Won 1st place overall (out of 54 teams) at NewHacks 2023, for which my\\n        team was awarded $600.\\n      \",\n        link: \"https://devpost.com/software/pawpoints\"\n    },\n    {\n        name: \"Once Upon a Chat\",\n        imagePath: \"/pics/onceuponachat.jpg\",\n        description: \"\\n        _React.js_, _Next.js_, _Google Firebase_, _TypeScript_, and _Tailwind.css_-based website\\n        allowing users to upload WhatsApp group chats and get reports on top messagers and top\\n        users (it's kind of like Spotify Wrapped, but for WhatsApp). Authentication and database\\n        done with _Google Firebase_, word cloud done with _react-wordcloud_. Created for\\n        UofTHacks 2024.\\n      \",\n        link: \"https://devpost.com/software/once-upon-a-chat\"\n    },\n    {\n        name: \"Writing Center Website\",\n        imagePath: \"/pics/writingcenterwebsite.png\",\n        description: \"\\n        _Python Flask_, _SQLite_ and _Bulma.css_-based website I built for my high school's\\n        writing center to manage edit requests. Includes an authentication system managing 300+\\n        accounts, an editor feedback system, and email notification system which has sent 2,000+\\n        emails to 500+ email addresses. Has been used by 900+ students to complete edit\\n        requests. Hosted on DigitalOcean since October 2022. You can see it in action\\n        [here](https://www.youtube.com/watch?v=K8xT3u3Lj24) and\\n        [here](https://www.youtube.com/watch?v=4iq2oe5fs0g).\\n      \",\n        link: \"http://198.199.123.9/\"\n    },\n    {\n        name: \"MIDI Vocal Harmonizer\",\n        imagePath: \"/pics/harmonizer.png\",\n        description: \"\\n      A _Python_ tool for auto-tuning vocals to multi-voice MIDI arrangements using the [PSOLA\\n      algorithm](https://en.wikipedia.org/wiki/PSOLA) (allowing any user to simulate a choir\\n      of themselves, given a recording of them singing and a MIDI file of the corresponding\\n      sheet music). You can check out demos of this\\n      [here](https://drive.google.com/file/d/1iUiS8SRIryN8G8qwq9o78cquQxJUPypE/view?usp=drive_link)\\n      and [here](https://drive.google.com/file/d/1KdWddgADgaVQdM9znTTMILs2XiYXQube/view?usp=sharing).\\n      Built with _Librosa_, _NumPy_, and _Jupyter Notebook_.\\n    \",\n        link: \"https://github.com/sonofthomp/midi-harmonizer\"\n    },\n    {\n        name: \"Layover Calculator\",\n        imagePath: \"/pics/layovercalculator.png\",\n        description: \"\\n        _Python Flask_, _SQL_, _Bootstrap_, and _Yelp API_-based website allowing users to find\\n        local activities (restaurants, hotels, and other business) near airports during\\n        layovers. Includes an account system, and allows users to upvote/downvote attractions.\\n        Built for my high school Software Development class.\\n      \",\n        link: \"https://github.com/SNirloy/p1_api/tree/main\"\n    },\n    {\n        name: \"Personal Blog\",\n        imagePath: \"/pics/blog.png\",\n        description: \"\\n        My personal blog. I've written several posts about CS & math-related topics that\\n        interest me, including SHA-256 encryption, 12-tone equal temperament, and the\\n        Mandelbrot set.\\n      \",\n        link: \"https://www.gabe.biz/blog/index.html\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (PROJECTS);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL1Byb2plY3RzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxXQUFXO0lBQ2Y7UUFDRUMsTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLGFBQWM7UUFNZEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLGFBQWM7UUFPZEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLGFBQWM7UUFTZEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLGFBQWM7UUFTZEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLGFBQWM7UUFNZEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLGFBQWM7UUFLZEMsTUFBTTtJQUNSO0NBQ0Q7QUFFRCwrREFBZUosUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL1Byb2plY3RzLmpzP2M1OWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUFJPSkVDVFMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlBhd1BvaW50c1wiLFxuICAgIGltYWdlUGF0aDogXCIvcGljcy9wYXdwb2ludHMucG5nXCIsXG4gICAgZGVzY3JpcHRpb246IGBcbiAgICAgICAgX1N2ZWx0ZV8sIF9Hb29nbGUgRmlyZWJhc2VfLCBfVHlwZVNjcmlwdF8sIGFuZCBfVGFpbHdpbmQuY3NzXy1iYXNlZCB3ZWJzaXRlIHRvIGFsbG93IHVzZXJzXG4gICAgICAgIHRvIHRyYWNrIGFuZCBmZWVkIGxvY2FsIHN0cmF5IGNhdHMuIFZpc3VhbHMgY3JlYXRlZCB3aXRoIF9NYXBib3hfLCBwcm9qZWN0IGNvbnRhaW5lcml6ZWRcbiAgICAgICAgdXNpbmcgX0RvY2tlcl8uIFdvbiAxc3QgcGxhY2Ugb3ZlcmFsbCAob3V0IG9mIDU0IHRlYW1zKSBhdCBOZXdIYWNrcyAyMDIzLCBmb3Igd2hpY2ggbXlcbiAgICAgICAgdGVhbSB3YXMgYXdhcmRlZCAkNjAwLlxuICAgICAgYCxcbiAgICBsaW5rOiBcImh0dHBzOi8vZGV2cG9zdC5jb20vc29mdHdhcmUvcGF3cG9pbnRzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk9uY2UgVXBvbiBhIENoYXRcIixcbiAgICBpbWFnZVBhdGg6IFwiL3BpY3Mvb25jZXVwb25hY2hhdC5qcGdcIixcbiAgICBkZXNjcmlwdGlvbjogYFxuICAgICAgICBfUmVhY3QuanNfLCBfTmV4dC5qc18sIF9Hb29nbGUgRmlyZWJhc2VfLCBfVHlwZVNjcmlwdF8sIGFuZCBfVGFpbHdpbmQuY3NzXy1iYXNlZCB3ZWJzaXRlXG4gICAgICAgIGFsbG93aW5nIHVzZXJzIHRvIHVwbG9hZCBXaGF0c0FwcCBncm91cCBjaGF0cyBhbmQgZ2V0IHJlcG9ydHMgb24gdG9wIG1lc3NhZ2VycyBhbmQgdG9wXG4gICAgICAgIHVzZXJzIChpdCdzIGtpbmQgb2YgbGlrZSBTcG90aWZ5IFdyYXBwZWQsIGJ1dCBmb3IgV2hhdHNBcHApLiBBdXRoZW50aWNhdGlvbiBhbmQgZGF0YWJhc2VcbiAgICAgICAgZG9uZSB3aXRoIF9Hb29nbGUgRmlyZWJhc2VfLCB3b3JkIGNsb3VkIGRvbmUgd2l0aCBfcmVhY3Qtd29yZGNsb3VkXy4gQ3JlYXRlZCBmb3JcbiAgICAgICAgVW9mVEhhY2tzIDIwMjQuXG4gICAgICBgLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9kZXZwb3N0LmNvbS9zb2Z0d2FyZS9vbmNlLXVwb24tYS1jaGF0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIldyaXRpbmcgQ2VudGVyIFdlYnNpdGVcIixcbiAgICBpbWFnZVBhdGg6IFwiL3BpY3Mvd3JpdGluZ2NlbnRlcndlYnNpdGUucG5nXCIsXG4gICAgZGVzY3JpcHRpb246IGBcbiAgICAgICAgX1B5dGhvbiBGbGFza18sIF9TUUxpdGVfIGFuZCBfQnVsbWEuY3NzXy1iYXNlZCB3ZWJzaXRlIEkgYnVpbHQgZm9yIG15IGhpZ2ggc2Nob29sJ3NcbiAgICAgICAgd3JpdGluZyBjZW50ZXIgdG8gbWFuYWdlIGVkaXQgcmVxdWVzdHMuIEluY2x1ZGVzIGFuIGF1dGhlbnRpY2F0aW9uIHN5c3RlbSBtYW5hZ2luZyAzMDArXG4gICAgICAgIGFjY291bnRzLCBhbiBlZGl0b3IgZmVlZGJhY2sgc3lzdGVtLCBhbmQgZW1haWwgbm90aWZpY2F0aW9uIHN5c3RlbSB3aGljaCBoYXMgc2VudCAyLDAwMCtcbiAgICAgICAgZW1haWxzIHRvIDUwMCsgZW1haWwgYWRkcmVzc2VzLiBIYXMgYmVlbiB1c2VkIGJ5IDkwMCsgc3R1ZGVudHMgdG8gY29tcGxldGUgZWRpdFxuICAgICAgICByZXF1ZXN0cy4gSG9zdGVkIG9uIERpZ2l0YWxPY2VhbiBzaW5jZSBPY3RvYmVyIDIwMjIuIFlvdSBjYW4gc2VlIGl0IGluIGFjdGlvblxuICAgICAgICBbaGVyZV0oaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1LOHhUM3UzTGoyNCkgYW5kXG4gICAgICAgIFtoZXJlXShodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTRpcTJvZTVmczBnKS5cbiAgICAgIGAsXG4gICAgbGluazogXCJodHRwOi8vMTk4LjE5OS4xMjMuOS9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTUlESSBWb2NhbCBIYXJtb25pemVyXCIsXG4gICAgaW1hZ2VQYXRoOiBcIi9waWNzL2hhcm1vbml6ZXIucG5nXCIsXG4gICAgZGVzY3JpcHRpb246IGBcbiAgICAgIEEgX1B5dGhvbl8gdG9vbCBmb3IgYXV0by10dW5pbmcgdm9jYWxzIHRvIG11bHRpLXZvaWNlIE1JREkgYXJyYW5nZW1lbnRzIHVzaW5nIHRoZSBbUFNPTEFcbiAgICAgIGFsZ29yaXRobV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUFNPTEEpIChhbGxvd2luZyBhbnkgdXNlciB0byBzaW11bGF0ZSBhIGNob2lyXG4gICAgICBvZiB0aGVtc2VsdmVzLCBnaXZlbiBhIHJlY29yZGluZyBvZiB0aGVtIHNpbmdpbmcgYW5kIGEgTUlESSBmaWxlIG9mIHRoZSBjb3JyZXNwb25kaW5nXG4gICAgICBzaGVldCBtdXNpYykuIFlvdSBjYW4gY2hlY2sgb3V0IGRlbW9zIG9mIHRoaXNcbiAgICAgIFtoZXJlXShodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFpVWlTOFNSSXJ5TjhHOHF3cTlvNzhjcXVReEpVUHlwRS92aWV3P3VzcD1kcml2ZV9saW5rKVxuICAgICAgYW5kIFtoZXJlXShodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLZFdkZGdBRGdhVlFkTTl6blRUTUlMczJYaVlYUXViZS92aWV3P3VzcD1zaGFyaW5nKS5cbiAgICAgIEJ1aWx0IHdpdGggX0xpYnJvc2FfLCBfTnVtUHlfLCBhbmQgX0p1cHl0ZXIgTm90ZWJvb2tfLlxuICAgIGAsXG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vc29ub2Z0aG9tcC9taWRpLWhhcm1vbml6ZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGF5b3ZlciBDYWxjdWxhdG9yXCIsXG4gICAgaW1hZ2VQYXRoOiBcIi9waWNzL2xheW92ZXJjYWxjdWxhdG9yLnBuZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBgXG4gICAgICAgIF9QeXRob24gRmxhc2tfLCBfU1FMXywgX0Jvb3RzdHJhcF8sIGFuZCBfWWVscCBBUElfLWJhc2VkIHdlYnNpdGUgYWxsb3dpbmcgdXNlcnMgdG8gZmluZFxuICAgICAgICBsb2NhbCBhY3Rpdml0aWVzIChyZXN0YXVyYW50cywgaG90ZWxzLCBhbmQgb3RoZXIgYnVzaW5lc3MpIG5lYXIgYWlycG9ydHMgZHVyaW5nXG4gICAgICAgIGxheW92ZXJzLiBJbmNsdWRlcyBhbiBhY2NvdW50IHN5c3RlbSwgYW5kIGFsbG93cyB1c2VycyB0byB1cHZvdGUvZG93bnZvdGUgYXR0cmFjdGlvbnMuXG4gICAgICAgIEJ1aWx0IGZvciBteSBoaWdoIHNjaG9vbCBTb2Z0d2FyZSBEZXZlbG9wbWVudCBjbGFzcy5cbiAgICAgIGAsXG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vU05pcmxveS9wMV9hcGkvdHJlZS9tYWluXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlBlcnNvbmFsIEJsb2dcIixcbiAgICBpbWFnZVBhdGg6IFwiL3BpY3MvYmxvZy5wbmdcIixcbiAgICBkZXNjcmlwdGlvbjogYFxuICAgICAgICBNeSBwZXJzb25hbCBibG9nLiBJJ3ZlIHdyaXR0ZW4gc2V2ZXJhbCBwb3N0cyBhYm91dCBDUyAmIG1hdGgtcmVsYXRlZCB0b3BpY3MgdGhhdFxuICAgICAgICBpbnRlcmVzdCBtZSwgaW5jbHVkaW5nIFNIQS0yNTYgZW5jcnlwdGlvbiwgMTItdG9uZSBlcXVhbCB0ZW1wZXJhbWVudCwgYW5kIHRoZVxuICAgICAgICBNYW5kZWxicm90IHNldC5cbiAgICAgIGAsXG4gICAgbGluazogXCJodHRwczovL3d3dy5nYWJlLmJpei9ibG9nL2luZGV4Lmh0bWxcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IFBST0pFQ1RTO1xuIl0sIm5hbWVzIjpbIlBST0pFQ1RTIiwibmFtZSIsImltYWdlUGF0aCIsImRlc2NyaXB0aW9uIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/Projects.js\n"));

/***/ })

});