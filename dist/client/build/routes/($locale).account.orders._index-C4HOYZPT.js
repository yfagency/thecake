import {
  Money,
  Sr,
  flattenConnection
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-XXXEFVTP.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-VI4NOKQS.js";
import {
  require_jsx_dev_runtime
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-LEC4TUWW.js";
import {
  Link,
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

// app/routes/($locale).account.orders._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).account.orders._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).account.orders._index.jsx"
  );
  import.meta.hot.lastModified = "1710397580580.9302";
}
var meta = () => {
  return [{
    title: "Orders"
  }];
};
function Orders() {
  _s();
  const {
    customer
  } = useLoaderData();
  const {
    orders
  } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "orders", children: orders.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersTable, { orders }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 75,
    columnNumber: 30
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 75,
    columnNumber: 64
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s(Orders, "yijW26QhKvLyTUDP0qUPm3wKw78=", false, function() {
  return [useLoaderData];
});
_c = Orders;
function OrdersTable({
  orders
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "acccount-orders", children: orders?.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sr, { connection: orders, children: ({
    nodes,
    isLoading,
    PreviousLink,
    NextLink
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 99,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 98,
        columnNumber: 17
      }, this),
      nodes.map((order) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderItem, { order }, order.id, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 102,
          columnNumber: 20
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 105,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 104,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 97,
      columnNumber: 16
    }, this);
  } }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 90,
    columnNumber: 31
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 109,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_c2 = OrdersTable;
function EmptyOrders() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You haven't placed any orders yet." }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/collections", children: "Start Shopping \u2192" }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 118,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 117,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 114,
    columnNumber: 10
  }, this);
}
_c3 = EmptyOrders;
function OrderItem({
  order
}) {
  const fulfillmentStatus = flattenConnection(order.fulfillments)[0]?.status;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/account/orders/${order.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [
        "#",
        order.number
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 134,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: new Date(order.processedAt).toDateString() }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: order.financialStatus }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      fulfillmentStatus && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: fulfillmentStatus }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 138,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.totalPrice }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/account/orders/${btoa(order.id)}`, children: "View Order \u2192" }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 140,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 131,
    columnNumber: 10
  }, this);
}
_c4 = OrderItem;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "Orders");
$RefreshReg$(_c2, "OrdersTable");
$RefreshReg$(_c3, "EmptyOrders");
$RefreshReg$(_c4, "OrderItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Orders as default,
  meta
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/routes/($locale).account.orders._index-C4HOYZPT.js.map
