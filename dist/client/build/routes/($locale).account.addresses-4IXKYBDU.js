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

// app/routes/($locale).account.addresses.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).account.addresses.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).account.addresses.jsx"
  );
  import.meta.hot.lastModified = "1710397579949.7212";
}
var meta = () => {
  return [{
    title: "Addresses"
  }];
};
function Addresses() {
  _s();
  const {
    customer
  } = useOutletContext();
  const {
    defaultAddress,
    addresses
  } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-addresses", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Addresses" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 303,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 304,
      columnNumber: 7
    }, this),
    !addresses.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You have no addresses saved." }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 305,
      columnNumber: 34
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Create address" }, void 0, false, {
          fileName: "app/routes/($locale).account.addresses.jsx",
          lineNumber: 307,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewAddressForm, {}, void 0, false, {
          fileName: "app/routes/($locale).account.addresses.jsx",
          lineNumber: 308,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 306,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 310,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 311,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 312,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExistingAddresses, { addresses, defaultAddress }, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 313,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 305,
      columnNumber: 72
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 302,
    columnNumber: 10
  }, this);
}
_s(Addresses, "slqt7cvAHz5a6LUGkUsirwmalVU=", false, function() {
  return [useOutletContext];
});
_c = Addresses;
function NewAddressForm() {
  const newAddress = {
    address1: "",
    address2: "",
    city: "",
    company: "",
    territoryCode: "",
    firstName: "",
    id: "new",
    lastName: "",
    phoneNumber: "",
    zoneCode: "",
    zip: ""
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddressForm, { addressId: "NEW_ADDRESS_ID", address: newAddress, defaultAddress: null, children: ({
    stateForMethod
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: stateForMethod("POST") !== "idle", formMethod: "POST", type: "submit", children: stateForMethod("POST") !== "idle" ? "Creating" : "Create" }, void 0, false, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 339,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 338,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 335,
    columnNumber: 10
  }, this);
}
_c2 = NewAddressForm;
function ExistingAddresses({
  addresses,
  defaultAddress
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Existing addresses" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 355,
      columnNumber: 7
    }, this),
    addresses.nodes.map((address) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddressForm, { addressId: address.id, address, defaultAddress, children: ({
      stateForMethod
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: stateForMethod("PUT") !== "idle", formMethod: "PUT", type: "submit", children: stateForMethod("PUT") !== "idle" ? "Saving" : "Save" }, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 360,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: stateForMethod("DELETE") !== "idle", formMethod: "DELETE", type: "submit", children: stateForMethod("DELETE") !== "idle" ? "Deleting" : "Delete" }, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 363,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 359,
      columnNumber: 13
    }, this) }, address.id, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 356,
      columnNumber: 39
    }, this))
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 354,
    columnNumber: 10
  }, this);
}
_c3 = ExistingAddresses;
function AddressForm({
  addressId,
  address,
  defaultAddress,
  children
}) {
  _s2();
  const {
    state,
    formMethod
  } = useNavigation();
  const action = useActionData();
  const error = action?.error?.[addressId];
  const isDefaultAddress = defaultAddress?.id === addressId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: addressId, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "addressId", defaultValue: addressId }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 392,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", children: "First name*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 393,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "First name", autoComplete: "given-name", defaultValue: address?.firstName ?? "", id: "firstName", name: "firstName", placeholder: "First name", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 394,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", children: "Last name*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 395,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Last name", autoComplete: "family-name", defaultValue: address?.lastName ?? "", id: "lastName", name: "lastName", placeholder: "Last name", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 396,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "company", children: "Company" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 397,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Company", autoComplete: "organization", defaultValue: address?.company ?? "", id: "company", name: "company", placeholder: "Company", type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 398,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "address1", children: "Address line*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 399,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Address line 1", autoComplete: "address-line1", defaultValue: address?.address1 ?? "", id: "address1", name: "address1", placeholder: "Address line 1*", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 400,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "address2", children: "Address line 2" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 401,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Address line 2", autoComplete: "address-line2", defaultValue: address?.address2 ?? "", id: "address2", name: "address2", placeholder: "Address line 2", type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 402,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "city", children: "City*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 403,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "City", autoComplete: "address-level2", defaultValue: address?.city ?? "", id: "city", name: "city", placeholder: "City", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 404,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "zoneCode", children: "State / Province*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 405,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "State/Province", autoComplete: "address-level1", defaultValue: address?.zoneCode ?? "", id: "zoneCode", name: "zoneCode", placeholder: "State / Province", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 406,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "zip", children: "Zip / Postal Code*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 407,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Zip", autoComplete: "postal-code", defaultValue: address?.zip ?? "", id: "zip", name: "zip", placeholder: "Zip / Postal Code", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 408,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "territoryCode", children: "Country Code*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 409,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "territoryCode", autoComplete: "country", defaultValue: address?.territoryCode ?? "", id: "territoryCode", name: "territoryCode", placeholder: "Country", required: true, type: "text", maxLength: 2 }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 410,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phoneNumber", children: "Phone" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 411,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Phone Number", autoComplete: "tel", defaultValue: address?.phoneNumber ?? "", id: "phoneNumber", name: "phoneNumber", placeholder: "+16135551111", pattern: "^\\+?[1-9]\\d{3,14}$", type: "tel" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 412,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { defaultChecked: isDefaultAddress, id: "defaultAddress", name: "defaultAddress", type: "checkbox" }, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 414,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "defaultAddress", children: "Set as default address" }, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 415,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 413,
      columnNumber: 9
    }, this),
    error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 419,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 418,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 417,
      columnNumber: 18
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 421,
      columnNumber: 18
    }, this),
    children({
      stateForMethod: (method) => formMethod === method ? state : "idle"
    })
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 391,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 390,
    columnNumber: 10
  }, this);
}
_s2(AddressForm, "74FQ1ihT4Sgu/BMW7XTRtj5zjJM=", false, function() {
  return [useNavigation, useActionData];
});
_c4 = AddressForm;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "Addresses");
$RefreshReg$(_c2, "NewAddressForm");
$RefreshReg$(_c3, "ExistingAddresses");
$RefreshReg$(_c4, "AddressForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Addresses as default,
  meta
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/routes/($locale).account.addresses-4IXKYBDU.js.map
