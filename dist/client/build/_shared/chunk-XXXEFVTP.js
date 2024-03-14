import {
  require_jsx_runtime
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-VI4NOKQS.js";
import {
  Link,
  useFetcher,
  useLocation,
  useNavigate,
  useNavigation
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-N4WRVMA3.js";
import {
  require_react
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-GSFMRAPZ.js";
import {
  __commonJS,
  __toESM
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-SVHZQSAC.js";

// node_modules/content-security-policy-builder/dist/index.js
var require_dist = __commonJS({
  "node_modules/content-security-policy-builder/dist/index.js"(exports, module) {
    "use strict";
    module.exports = function(_a) {
      var directives = _a.directives;
      var namesSeen = /* @__PURE__ */ new Set();
      var result = [];
      Object.keys(directives).forEach(function(originalName) {
        var name = originalName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        if (namesSeen.has(name)) {
          throw new Error("".concat(originalName, " is specified more than once"));
        }
        namesSeen.add(name);
        var value = directives[originalName];
        if (Array.isArray(value)) {
          value = value.join(" ");
        } else if (value === true) {
          value = "";
        }
        if (value) {
          result.push("".concat(name, " ").concat(value));
        } else if (value !== false) {
          result.push(name);
        }
      });
      return result.join("; ");
    };
  }
});

// node_modules/@shopify/hydrogen-react/dist/browser-prod/flatten-connection.mjs
function flattenConnection(connection) {
  if (!connection) {
    const noConnectionErr = `flattenConnection(): needs a 'connection' to flatten, but received '${connection ?? ""}' instead.`;
    {
      console.error(noConnectionErr + ` Returning an empty array`);
      return [];
    }
  }
  if ("nodes" in connection) {
    return connection.nodes;
  }
  if ("edges" in connection && Array.isArray(connection.edges)) {
    return connection.edges.map((edge) => {
      if (!(edge == null ? void 0 : edge.node)) {
        throw new Error(
          "flattenConnection(): Connection edges must contain nodes"
        );
      }
      return edge.node;
    });
  }
  return [];
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/Money.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/useMoney.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/ShopifyProvider.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/storefront-api-constants.mjs
var SFAPI_VERSION = "2024-01";

// node_modules/@shopify/hydrogen-react/dist/browser-prod/ShopifyProvider.mjs
var defaultShopifyContext = {
  storeDomain: "test",
  storefrontToken: "abc123",
  storefrontApiVersion: SFAPI_VERSION,
  countryIsoCode: "US",
  languageIsoCode: "EN",
  getStorefrontApiUrl() {
    return "";
  },
  getPublicTokenHeaders() {
    return {};
  },
  getShopifyDomain() {
    return "";
  }
};
var ShopifyContext = (0, import_react.createContext)(
  defaultShopifyContext
);
function useShop() {
  const shopContext = (0, import_react.useContext)(ShopifyContext);
  if (!shopContext) {
    throw new Error(`'useShop()' must be a descendent of <ShopifyProvider/>`);
  }
  return shopContext;
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/useMoney.mjs
function useMoney(money) {
  const { countryIsoCode, languageIsoCode } = useShop();
  const locale = languageIsoCode.includes("_") ? languageIsoCode.replace("_", "-") : `${languageIsoCode}-${countryIsoCode}`;
  if (!locale) {
    throw new Error(
      `useMoney(): Unable to get 'locale' from 'useShop()', which means that 'locale' was not passed to '<ShopifyProvider/>'. 'locale' is required for 'useMoney()' to work`
    );
  }
  const amount = parseFloat(money.amount);
  const options = (0, import_react2.useMemo)(
    () => ({
      style: "currency",
      currency: money.currencyCode
    }),
    [money.currencyCode]
  );
  const defaultFormatter = useLazyFormatter(locale, options);
  const nameFormatter = useLazyFormatter(locale, {
    ...options,
    currencyDisplay: "name"
  });
  const narrowSymbolFormatter = useLazyFormatter(locale, {
    ...options,
    currencyDisplay: "narrowSymbol"
  });
  const withoutTrailingZerosFormatter = useLazyFormatter(locale, {
    ...options,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  const withoutCurrencyFormatter = useLazyFormatter(locale);
  const withoutTrailingZerosOrCurrencyFormatter = useLazyFormatter(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  const isPartCurrency = (part) => part.type === "currency";
  const lazyFormatters = (0, import_react2.useMemo)(
    () => ({
      original: () => money,
      currencyCode: () => money.currencyCode,
      localizedString: () => defaultFormatter().format(amount),
      parts: () => defaultFormatter().formatToParts(amount),
      withoutTrailingZeros: () => amount % 1 === 0 ? withoutTrailingZerosFormatter().format(amount) : defaultFormatter().format(amount),
      withoutTrailingZerosAndCurrency: () => amount % 1 === 0 ? withoutTrailingZerosOrCurrencyFormatter().format(amount) : withoutCurrencyFormatter().format(amount),
      currencyName: () => {
        var _a;
        return ((_a = nameFormatter().formatToParts(amount).find(isPartCurrency)) == null ? void 0 : _a.value) ?? money.currencyCode;
      },
      // e.g. "US dollars"
      currencySymbol: () => {
        var _a;
        return ((_a = defaultFormatter().formatToParts(amount).find(isPartCurrency)) == null ? void 0 : _a.value) ?? money.currencyCode;
      },
      // e.g. "USD"
      currencyNarrowSymbol: () => {
        var _a;
        return ((_a = narrowSymbolFormatter().formatToParts(amount).find(isPartCurrency)) == null ? void 0 : _a.value) ?? "";
      },
      // e.g. "$"
      amount: () => defaultFormatter().formatToParts(amount).filter(
        (part) => ["decimal", "fraction", "group", "integer", "literal"].includes(
          part.type
        )
      ).map((part) => part.value).join("")
    }),
    [
      money,
      amount,
      nameFormatter,
      defaultFormatter,
      narrowSymbolFormatter,
      withoutCurrencyFormatter,
      withoutTrailingZerosFormatter,
      withoutTrailingZerosOrCurrencyFormatter
    ]
  );
  return (0, import_react2.useMemo)(
    () => new Proxy(lazyFormatters, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      get: (target, key) => {
        var _a;
        return (_a = Reflect.get(target, key)) == null ? void 0 : _a.call(null);
      }
    }),
    [lazyFormatters]
  );
}
function useLazyFormatter(locale, options) {
  return (0, import_react2.useMemo)(() => {
    let memoized;
    return () => memoized ?? (memoized = new Intl.NumberFormat(locale, options));
  }, [locale, options]);
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/Money.mjs
function Money({
  data,
  as,
  withoutCurrency,
  withoutTrailingZeros,
  measurement,
  measurementSeparator = "/",
  ...passthroughProps
}) {
  if (!isMoney(data)) {
    throw new Error(
      `<Money/> needs a valid 'data' prop that has 'amount' and 'currencyCode'`
    );
  }
  const moneyObject = useMoney(data);
  const Wrapper = as ?? "div";
  let output = moneyObject.localizedString;
  if (withoutCurrency || withoutTrailingZeros) {
    if (withoutCurrency && !withoutTrailingZeros) {
      output = moneyObject.amount;
    } else if (!withoutCurrency && withoutTrailingZeros) {
      output = moneyObject.withoutTrailingZeros;
    } else {
      output = moneyObject.withoutTrailingZerosAndCurrency;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Wrapper, { ...passthroughProps, children: [
    output,
    measurement && measurement.referenceUnit && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      measurementSeparator,
      measurement.referenceUnit
    ] })
  ] });
}
function isMoney(maybeMoney) {
  return typeof maybeMoney.amount === "string" && !!maybeMoney.amount && typeof maybeMoney.currencyCode === "string" && !!maybeMoney.currencyCode;
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/Image.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var React = __toESM(require_react(), 1);
var Image = React.forwardRef(
  ({
    alt,
    aspectRatio,
    crop = "center",
    data,
    decoding = "async",
    height = "auto",
    loader = shopifyLoader,
    loading = "lazy",
    sizes,
    src,
    srcSetOptions = {
      intervals: 15,
      startingWidth: 200,
      incrementSize: 200,
      placeholderWidth: 100
    },
    width = "100%",
    ...passthroughProps
  }, ref) => {
    const normalizedData = React.useMemo(() => {
      const dataWidth = (data == null ? void 0 : data.width) && (data == null ? void 0 : data.height) ? data == null ? void 0 : data.width : void 0;
      const dataHeight = (data == null ? void 0 : data.width) && (data == null ? void 0 : data.height) ? data == null ? void 0 : data.height : void 0;
      return {
        width: dataWidth,
        height: dataHeight,
        unitsMatch: Boolean(unitsMatch(dataWidth, dataHeight))
      };
    }, [data]);
    const normalizedProps = React.useMemo(() => {
      const nWidthProp = width || "100%";
      const widthParts = getUnitValueParts(nWidthProp.toString());
      const nWidth = `${widthParts.number}${widthParts.unit}`;
      const autoHeight = height === void 0 || height === null;
      const heightParts = autoHeight ? null : getUnitValueParts(height.toString());
      const fixedHeight = heightParts ? `${heightParts.number}${heightParts.unit}` : "";
      const nHeight = autoHeight ? "auto" : fixedHeight;
      const nSrc = src || (data == null ? void 0 : data.url);
      const nAlt = (data == null ? void 0 : data.altText) && !alt ? data == null ? void 0 : data.altText : alt || "";
      const nAspectRatio = aspectRatio ? aspectRatio : normalizedData.unitsMatch ? [
        getNormalizedFixedUnit(normalizedData.width),
        getNormalizedFixedUnit(normalizedData.height)
      ].join("/") : void 0;
      return {
        width: nWidth,
        height: nHeight,
        src: nSrc,
        alt: nAlt,
        aspectRatio: nAspectRatio
      };
    }, [
      width,
      height,
      src,
      data,
      alt,
      aspectRatio,
      normalizedData,
      passthroughProps == null ? void 0 : passthroughProps.key
    ]);
    const { intervals, startingWidth, incrementSize, placeholderWidth } = srcSetOptions;
    const imageWidths = React.useMemo(() => {
      return generateImageWidths(
        width,
        intervals,
        startingWidth,
        incrementSize
      );
    }, [width, intervals, startingWidth, incrementSize]);
    const fixedWidth = isFixedWidth(normalizedProps.width);
    if (fixedWidth) {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        FixedWidthImage,
        {
          aspectRatio,
          crop,
          decoding,
          height,
          imageWidths,
          loader,
          loading,
          normalizedProps,
          passthroughProps,
          ref,
          width
        }
      );
    } else {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        FluidImage,
        {
          aspectRatio,
          crop,
          decoding,
          imageWidths,
          loader,
          loading,
          normalizedProps,
          passthroughProps,
          placeholderWidth,
          ref,
          sizes
        }
      );
    }
  }
);
var FixedWidthImage = React.forwardRef(
  ({
    aspectRatio,
    crop,
    decoding,
    height,
    imageWidths,
    loader = shopifyLoader,
    loading,
    normalizedProps,
    passthroughProps,
    width
  }, ref) => {
    const fixed = React.useMemo(() => {
      const intWidth = getNormalizedFixedUnit(width);
      const intHeight = getNormalizedFixedUnit(height);
      const fixedAspectRatio = aspectRatio ? aspectRatio : unitsMatch(normalizedProps.width, normalizedProps.height) ? [intWidth, intHeight].join("/") : normalizedProps.aspectRatio ? normalizedProps.aspectRatio : void 0;
      const sizesArray = imageWidths === void 0 ? void 0 : generateSizes(imageWidths, fixedAspectRatio, crop);
      const fixedHeight = intHeight ? intHeight : fixedAspectRatio && intWidth ? intWidth * (parseAspectRatio(fixedAspectRatio) ?? 1) : void 0;
      const srcSet = generateSrcSet(normalizedProps.src, sizesArray, loader);
      const src = loader({
        src: normalizedProps.src,
        width: intWidth,
        height: fixedHeight,
        crop: normalizedProps.height === "auto" ? void 0 : crop
      });
      return {
        width: intWidth,
        aspectRatio: fixedAspectRatio,
        height: fixedHeight,
        srcSet,
        src
      };
    }, [
      aspectRatio,
      crop,
      height,
      imageWidths,
      loader,
      normalizedProps,
      width
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "img",
      {
        ref,
        alt: normalizedProps.alt,
        decoding,
        height: fixed.height,
        loading,
        src: fixed.src,
        srcSet: fixed.srcSet,
        width: fixed.width,
        style: {
          aspectRatio: fixed.aspectRatio,
          ...passthroughProps.style
        },
        ...passthroughProps
      }
    );
  }
);
var FluidImage = React.forwardRef(
  ({
    crop,
    decoding,
    imageWidths,
    loader = shopifyLoader,
    loading,
    normalizedProps,
    passthroughProps,
    placeholderWidth,
    sizes
  }, ref) => {
    const fluid = React.useMemo(() => {
      const sizesArray = imageWidths === void 0 ? void 0 : generateSizes(imageWidths, normalizedProps.aspectRatio, crop);
      const placeholderHeight = normalizedProps.aspectRatio && placeholderWidth ? placeholderWidth * (parseAspectRatio(normalizedProps.aspectRatio) ?? 1) : void 0;
      const srcSet = generateSrcSet(normalizedProps.src, sizesArray, loader);
      const src = loader({
        src: normalizedProps.src,
        width: placeholderWidth,
        height: placeholderHeight,
        crop
      });
      return {
        placeholderHeight,
        srcSet,
        src
      };
    }, [crop, imageWidths, loader, normalizedProps, placeholderWidth]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "img",
      {
        ref,
        alt: normalizedProps.alt,
        decoding,
        height: fluid.placeholderHeight,
        loading,
        sizes,
        src: fluid.src,
        srcSet: fluid.srcSet,
        width: placeholderWidth,
        ...passthroughProps,
        style: {
          width: normalizedProps.width,
          aspectRatio: normalizedProps.aspectRatio,
          ...passthroughProps.style
        }
      }
    );
  }
);
function shopifyLoader({ src, width, height, crop }) {
  if (!src) {
    return "";
  }
  const url = new URL(src);
  if (width) {
    url.searchParams.append("width", Math.round(width).toString());
  }
  if (height) {
    url.searchParams.append("height", Math.round(height).toString());
  }
  if (crop) {
    url.searchParams.append("crop", crop);
  }
  return url.href;
}
function unitsMatch(width = "100%", height = "auto") {
  return getUnitValueParts(width.toString()).unit === getUnitValueParts(height.toString()).unit;
}
function getUnitValueParts(value) {
  const unit = value.replace(/[0-9.]/g, "");
  const number = parseFloat(value.replace(unit, ""));
  return {
    unit: unit === "" ? number === void 0 ? "auto" : "px" : unit,
    number
  };
}
function getNormalizedFixedUnit(value) {
  if (value === void 0) {
    return;
  }
  const { unit, number } = getUnitValueParts(value.toString());
  switch (unit) {
    case "em":
      return number * 16;
    case "rem":
      return number * 16;
    case "px":
      return number;
    case "":
      return number;
    default:
      return;
  }
}
function isFixedWidth(width) {
  const fixedEndings = /\d(px|em|rem)$/;
  return typeof width === "number" || typeof width === "string" && fixedEndings.test(width);
}
function generateSrcSet(src, sizesArray, loader = shopifyLoader) {
  if (!src) {
    return "";
  }
  if ((sizesArray == null ? void 0 : sizesArray.length) === 0 || !sizesArray) {
    return src;
  }
  return sizesArray.map(
    (size, i) => `${loader({
      src,
      width: size.width,
      height: size.height,
      crop: size.crop
    })} ${sizesArray.length === 3 ? `${i + 1}x` : `${size.width ?? 0}w`}`
  ).join(`, `);
}
function generateImageWidths(width = "100%", intervals, startingWidth, incrementSize) {
  const responsive = Array.from(
    { length: intervals },
    (_, i) => i * incrementSize + startingWidth
  );
  const fixed = Array.from(
    { length: 3 },
    (_, i) => (i + 1) * (getNormalizedFixedUnit(width) ?? 0)
  );
  return isFixedWidth(width) ? fixed : responsive;
}
function parseAspectRatio(aspectRatio) {
  if (!aspectRatio)
    return;
  const [width, height] = aspectRatio.split("/");
  return 1 / (Number(width) / Number(height));
}
function generateSizes(imageWidths, aspectRatio, crop = "center") {
  if (!imageWidths)
    return;
  const sizes = imageWidths.map((width) => {
    return {
      width,
      height: aspectRatio ? width * (parseAspectRatio(aspectRatio) ?? 1) : void 0,
      crop
    };
  });
  return sizes;
}

// node_modules/@shopify/hydrogen/dist/production/index.js
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_content_security_policy_builder = __toESM(require_dist(), 1);
var ee = "2024.1.4";
var q = class extends Error {
  locations;
  path;
  extensions;
  constructor(t, r = {}) {
    let o = (r.clientOperation ? `[h2:error:${r.clientOperation}] ` : "") + t + (r.requestId ? ` - Request ID: ${r.requestId}` : "");
    super(o), this.name = "GraphQLError", this.extensions = r.extensions, this.locations = r.locations, this.path = r.path, this.stack = r.stack || void 0;
    try {
      this.cause = JSON.stringify({ ...typeof r.cause == "object" ? r.cause : {}, requestId: r.requestId });
    } catch {
      r.cause && (this.cause = r.cause);
    }
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
  toString() {
    let t = `${this.name}: ${this.message}`;
    if (this.path)
      try {
        t += ` | path: ${JSON.stringify(this.path)}`;
      } catch {
      }
    if (this.extensions)
      try {
        t += ` | extensions: ${JSON.stringify(this.extensions)}`;
      } catch {
      }
    return t += `
`, this.stack && (t += `${this.stack.slice(this.stack.indexOf(`
`) + 1)}
`), t;
  }
  toJSON() {
    return { name: "Error", message: "" };
  }
};
var fr = (0, import_react3.lazy)(() => import("http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/log-seo-tags-TY72EQWZ-OZUQE6QZ.js"));
function Sr({ connection: e, children: t = () => (console.warn("<Pagination> requires children to work properly"), null) }) {
  let n = useNavigation().state === "loading", { endCursor: o, hasNextPage: a, hasPreviousPage: s, nextPageUrl: i, nodes: c, previousPageUrl: u, startCursor: l } = Ir(e), p = (0, import_react3.useMemo)(() => ({ pageInfo: { endCursor: o, hasPreviousPage: s, hasNextPage: a, startCursor: l }, nodes: c }), [o, a, s, l, c]), f = (0, import_react3.useMemo)(() => (0, import_react3.forwardRef)(function(C, S) {
    return a ? (0, import_react3.createElement)(Link, { preventScrollReset: true, ...C, to: i, state: p, replace: true, ref: S }) : null;
  }), [a, i, p]), y = (0, import_react3.useMemo)(() => (0, import_react3.forwardRef)(function(C, S) {
    return s ? (0, import_react3.createElement)(Link, { preventScrollReset: true, ...C, to: u, state: p, replace: true, ref: S }) : null;
  }), [s, u, p]);
  return t({ state: p, hasNextPage: a, hasPreviousPage: s, isLoading: n, nextPageUrl: i, nodes: c, previousPageUrl: u, NextLink: f, PreviousLink: y });
}
function he(e) {
  let t = new URLSearchParams(e);
  return t.delete("cursor"), t.delete("direction"), t.toString();
}
function ne(e) {
  throw new Error(`The Pagination component requires ${"`" + e + "`"} to be a part of your query. See the guide on how to setup your query to include ${"`" + e + "`"}: https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/pagination#setup-the-paginated-query`);
}
function Ir(e) {
  e.pageInfo || ne("pageInfo"), typeof e.pageInfo.startCursor > "u" && ne("pageInfo.startCursor"), typeof e.pageInfo.endCursor > "u" && ne("pageInfo.endCursor"), typeof e.pageInfo.hasNextPage > "u" && ne("pageInfo.hasNextPage"), typeof e.pageInfo.hasPreviousPage > "u" && ne("pageInfo.hasPreviousPage");
  let t = useNavigate(), { state: r, search: n, pathname: o } = useLocation(), i = new URLSearchParams(n).get("direction") === "previous", c = (0, import_react3.useMemo)(() => !globalThis?.window?.__hydrogenHydrated || !r || !r?.nodes ? flattenConnection(e) : i ? [...flattenConnection(e), ...r.nodes] : [...r.nodes, ...flattenConnection(e)], [r, e]), u = (0, import_react3.useMemo)(() => {
    let y = globalThis?.window?.__hydrogenHydrated, m = !y || r?.pageInfo?.startCursor === void 0 ? e.pageInfo.startCursor : r.pageInfo.startCursor, C = !y || r?.pageInfo?.endCursor === void 0 ? e.pageInfo.endCursor : r.pageInfo.endCursor, S = !y || r?.pageInfo?.hasPreviousPage === void 0 ? e.pageInfo.hasPreviousPage : r.pageInfo.hasPreviousPage, g = !y || r?.pageInfo?.hasNextPage === void 0 ? e.pageInfo.hasNextPage : r.pageInfo.hasNextPage;
    return r?.nodes && (i ? (m = e.pageInfo.startCursor, S = e.pageInfo.hasPreviousPage) : (C = e.pageInfo.endCursor, g = e.pageInfo.hasNextPage)), { startCursor: m, endCursor: C, hasPreviousPage: S, hasNextPage: g };
  }, [i, r, e.pageInfo.hasNextPage, e.pageInfo.hasPreviousPage, e.pageInfo.startCursor, e.pageInfo.endCursor]), l = (0, import_react3.useRef)({ params: he(n), pathname: o });
  (0, import_react3.useEffect)(() => {
    window.__hydrogenHydrated = true;
  }, []), (0, import_react3.useEffect)(() => {
    (he(n) !== l.current.params || o !== l.current.pathname) && (l.current = { pathname: o, params: he(n) }, t(`${o}?${he(n)}`, { replace: true, preventScrollReset: true, state: { nodes: void 0, pageInfo: void 0 } }));
  }, [o, n]);
  let p = (0, import_react3.useMemo)(() => {
    let y = new URLSearchParams(n);
    return y.set("direction", "previous"), u.startCursor && y.set("cursor", u.startCursor), `?${y.toString()}`;
  }, [n, u.startCursor]), f = (0, import_react3.useMemo)(() => {
    let y = new URLSearchParams(n);
    return y.set("direction", "next"), u.endCursor && y.set("cursor", u.endCursor), `?${y.toString()}`;
  }, [n, u.endCursor]);
  return { ...u, previousPageUrl: p, nextPageUrl: f, nodes: c };
}
var j = `Shopify Hydrogen ${ee}`;
var Lt = "cartFormInput";
function Ie({ children: e, action: t, inputs: r, route: n, fetcherKey: o }) {
  let a = useFetcher({ key: o });
  return (0, import_jsx_runtime4.jsxs)(a.Form, { action: n || "", method: "post", children: [(t || r) && (0, import_jsx_runtime4.jsx)("input", { type: "hidden", name: Lt, value: JSON.stringify({ action: t, inputs: r }) }), typeof e == "function" ? e(a) : e] });
}
Ie.INPUT_NAME = Lt;
Ie.ACTIONS = { AttributesUpdateInput: "AttributesUpdateInput", BuyerIdentityUpdate: "BuyerIdentityUpdate", Create: "Create", DiscountCodesUpdate: "DiscountCodesUpdate", LinesAdd: "LinesAdd", LinesRemove: "LinesRemove", LinesUpdate: "LinesUpdate", NoteUpdate: "NoteUpdate", SelectedDeliveryOptionsUpdate: "SelectedDeliveryOptionsUpdate", MetafieldsSet: "MetafieldsSet", MetafieldDelete: "MetafieldDelete" };
function kr(e) {
  let t = {};
  for (let s of e.entries()) {
    let i = s[0], c = e.getAll(i);
    t[i] = c.length > 1 ? c : s[1];
  }
  let { cartFormInput: r, ...n } = t, { action: o, inputs: a } = r ? JSON.parse(String(r)) : {};
  return { action: o, inputs: { ...a, ...n } };
}
Ie.getFormInput = kr;
function an({ handle: e, options: t = [], variants: r = [], productPath: n = "products", children: o }) {
  let a = r instanceof Array ? r : flattenConnection(r), { searchParams: s, path: i, alreadyOnProductPage: c } = cn(e, n), u = t.filter((l) => l?.values?.length === 1);
  return (0, import_react3.createElement)(import_react3.Fragment, null, ...(0, import_react3.useMemo)(() => t.filter((l) => l?.values?.length > 1).map((l) => {
    let p, f = [];
    for (let y of l.values) {
      let m = new URLSearchParams(c ? s : void 0);
      m.set(l.name, y), u.forEach((d) => {
        m.set(d.name, d.values[0]);
      });
      let C = a.find((d) => d?.selectedOptions?.every((I) => m.get(I?.name) === I?.value)), S = s.get(l.name), g = S ? S === y : false;
      g && (p = y);
      let b = "?" + m.toString();
      f.push({ value: y, isAvailable: C ? C.availableForSale : true, to: i + b, search: b, isActive: g });
    }
    return o({ option: { name: l.name, value: p, values: f } });
  }), [t, a, o]));
}
function cn(e, t) {
  let { pathname: r, search: n } = useLocation();
  return (0, import_react3.useMemo)(() => {
    let o = /(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(r), a = o && o.length > 0;
    t = t.startsWith("/") ? t.substring(1) : t;
    let s = a ? `${o[0]}${t}/${e}` : `/${t}/${e}`;
    return { searchParams: new URLSearchParams(n), alreadyOnProductPage: s === r, path: s };
  }, [r, n, e, t]);
}
var Mt = (0, import_react3.createContext)(void 0);
var fn = Mt.Provider;
var tt = () => (0, import_react3.useContext)(Mt);
var Cn = (0, import_react3.forwardRef)((e, t) => {
  let r = tt();
  return (0, import_jsx_runtime4.jsx)("script", { suppressHydrationWarning: true, ...e, nonce: r, ref: t });
});

export {
  flattenConnection,
  Money,
  Image,
  Sr,
  Ie,
  an,
  tt,
  Cn
};
/*! Bundled license information:

@shopify/hydrogen/dist/production/index.js:
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/queries/cart *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesAdd *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartDiscountCodesUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartBuyerIdentityUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartNoteUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartSelectedDeliveryOptionsUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldsSet *)
  (*! @see https://shopify.dev/docs/api/storefront/2024-01/mutations/cartMetafieldDelete *)
*/
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-XXXEFVTP.js.map
