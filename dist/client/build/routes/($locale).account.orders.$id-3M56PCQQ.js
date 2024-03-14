import {
  Image,
  Money
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-XXXEFVTP.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-VI4NOKQS.js";
import {
  require_jsx_dev_runtime
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-LEC4TUWW.js";
import {
  useLoaderData
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

// app/routes/($locale).account.orders.$id.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).account.orders.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).account.orders.$id.jsx"
  );
  import.meta.hot.lastModified = "1710397580261.904";
}
var meta = ({
  data
}) => {
  return [{
    title: `Order ${data?.order?.name}`
  }];
};
function OrderRoute() {
  _s();
  const {
    order,
    lineItems,
    discountValue,
    discountPercentage,
    fulfillmentStatus
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-order", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "Order ",
      order.name
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Placed on ",
      new Date(order.processedAt).toDateString()
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Product" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Price" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Quantity" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 102,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Total" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 99,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: lineItems.map((lineItem, lineItemIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderLineRow, { lineItem }, lineItemIndex, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 109,
            columnNumber: 11
          }, this)
        )) }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tfoot", { children: [
          (discountValue && discountValue.amount || discountPercentage) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Discounts" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 114,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 113,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Discounts" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 117,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 116,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: discountPercentage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "-",
              discountPercentage,
              "% OFF"
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 120,
              columnNumber: 41
            }, this) : discountValue && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: discountValue }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 120,
              columnNumber: 100
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 119,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 112,
            columnNumber: 79
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 125,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 124,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 128,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 127,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.subtotal }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 131,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 130,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: "Tax" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 135,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Tax" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 139,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 138,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.totalTax }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 142,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 141,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: "Total" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 146,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Total" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 150,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 149,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.totalPrice }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 153,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 152,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 145,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Shipping Address" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 159,
          columnNumber: 11
        }, this),
        order?.shippingAddress ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("address", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: order.shippingAddress.name }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          order.shippingAddress.formatted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: order.shippingAddress.formatted }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 162,
            columnNumber: 50
          }, this) : "",
          order.shippingAddress.formattedArea ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: order.shippingAddress.formattedArea }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 163,
            columnNumber: 54
          }, this) : ""
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 160,
          columnNumber: 37
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No shipping address defined" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 164,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Status" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 165,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: fulfillmentStatus }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 167,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 166,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 158,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", href: order.statusPageUrl, rel: "noreferrer", children: "View Order Status \u2192" }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 173,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 172,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders.$id.jsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
}
_s(OrderRoute, "9HWCqBQJFE7TQ94oZg/lgQX+idw=", false, function() {
  return [useLoaderData];
});
_c = OrderRoute;
function OrderLineRow({
  lineItem
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      lineItem?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: lineItem.image, width: 96, height: 96 }, void 0, false, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 194,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 193,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: lineItem.title }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 197,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: lineItem.variantTitle }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 198,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 196,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 192,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 191,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.price }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 203,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 202,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: lineItem.quantity }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 205,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.totalDiscount }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 207,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 206,
      columnNumber: 7
    }, this)
  ] }, lineItem.id, true, {
    fileName: "app/routes/($locale).account.orders.$id.jsx",
    lineNumber: 190,
    columnNumber: 10
  }, this);
}
_c2 = OrderLineRow;
var _c;
var _c2;
$RefreshReg$(_c, "OrderRoute");
$RefreshReg$(_c2, "OrderLineRow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OrderRoute as default,
  meta
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/routes/($locale).account.orders.$id-3M56PCQQ.js.map
