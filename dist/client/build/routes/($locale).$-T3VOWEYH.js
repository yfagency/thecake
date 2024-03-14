import {
  createHotContext
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-JRXE2EKJ.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-P5MQTD6C.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-SVHZQSAC.js";

// app/routes/($locale).$.jsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).$.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).$.jsx"
  );
  import.meta.hot.lastModified = "1710397574098.81";
}
function CatchAllPage() {
  return null;
}
_c = CatchAllPage;
var _c;
$RefreshReg$(_c, "CatchAllPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CatchAllPage as default
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/routes/($locale).$-T3VOWEYH.js.map
