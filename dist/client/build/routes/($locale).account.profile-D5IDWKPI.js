import {
  require_jsx_dev_runtime
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-LEC4TUWW.js";
import {
  Form,
  useActionData,
  useNavigation,
  useOutletContext
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-N4WRVMA3.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-QHA57KLM.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-GSFMRAPZ.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-HAPMB4FX.js";
import {
  createHotContext
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-JRXE2EKJ.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-P5MQTD6C.js";
import {
  __toESM
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-SVHZQSAC.js";

// app/routes/($locale).account.profile.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).account.profile.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).account.profile.jsx"
  );
  import.meta.hot.lastModified = "1710397580937.6746";
}
var meta = () => {
  return [{
    title: "Profile"
  }];
};
function AccountProfile() {
  _s();
  const account = useOutletContext();
  const {
    state
  } = useNavigation();
  const action = useActionData();
  const customer = action?.customer ?? account?.customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-profile", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "My profile" }, void 0, false, {
      fileName: "app/routes/($locale).account.profile.jsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.profile.jsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PUT", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Personal information" }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", children: "First name" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "firstName", name: "firstName", type: "text", autoComplete: "given-name", placeholder: "First name", "aria-label": "First name", defaultValue: customer.firstName ?? "", minLength: 2 }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 130,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", children: "Last name" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "lastName", name: "lastName", type: "text", autoComplete: "family-name", placeholder: "Last name", "aria-label": "Last name", defaultValue: customer.lastName ?? "", minLength: 2 }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      action?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: action.error }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 136,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 135,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 134,
        columnNumber: 26
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 138,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: state !== "idle", children: state !== "idle" ? "Updating" : "Update" }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 139,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.profile.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.profile.jsx",
    lineNumber: 123,
    columnNumber: 10
  }, this);
}
_s(AccountProfile, "ESq5n4UNxLQdC87RexB90ndxeMw=", false, function() {
  return [useOutletContext, useNavigation, useActionData];
});
_c = AccountProfile;
var _c;
$RefreshReg$(_c, "AccountProfile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AccountProfile as default,
  meta
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/routes/($locale).account.profile-D5IDWKPI.js.map
