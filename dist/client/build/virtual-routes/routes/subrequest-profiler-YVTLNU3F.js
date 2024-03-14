import {
  favicon_default
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-A4EUSYOS.js";
import {
  Cn
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-XXXEFVTP.js";
import {
  require_jsx_runtime
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-VI4NOKQS.js";
import {
  Link
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-N4WRVMA3.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-QHA57KLM.js";
import {
  require_react
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-GSFMRAPZ.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-HAPMB4FX.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-JRXE2EKJ.js";
import "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-P5MQTD6C.js";
import {
  __toESM
} from "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_shared/chunk-SVHZQSAC.js";

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/routes/subrequest-profiler.jsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react8 = __toESM(require_react(), 1);

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/RequestWaterfall.jsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/FlameChartWrapper.jsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);

// node_modules/use-resize-observer/dist/bundle.esm.js
var import_react = __toESM(require_react());
function useResolvedElement(subscriber, refOrElement) {
  var lastReportRef = (0, import_react.useRef)(null);
  var refOrElementRef = (0, import_react.useRef)(null);
  refOrElementRef.current = refOrElement;
  var cbElementRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(function() {
    evaluateSubscription();
  });
  var evaluateSubscription = (0, import_react.useCallback)(function() {
    var cbElement = cbElementRef.current;
    var refOrElement2 = refOrElementRef.current;
    var element = cbElement ? cbElement : refOrElement2 ? refOrElement2 instanceof Element ? refOrElement2 : refOrElement2.current : null;
    if (lastReportRef.current && lastReportRef.current.element === element && lastReportRef.current.subscriber === subscriber) {
      return;
    }
    if (lastReportRef.current && lastReportRef.current.cleanup) {
      lastReportRef.current.cleanup();
    }
    lastReportRef.current = {
      element,
      subscriber,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: element ? subscriber(element) : void 0
    };
  }, [subscriber]);
  (0, import_react.useEffect)(function() {
    return function() {
      if (lastReportRef.current && lastReportRef.current.cleanup) {
        lastReportRef.current.cleanup();
        lastReportRef.current = null;
      }
    };
  }, []);
  return (0, import_react.useCallback)(function(element) {
    cbElementRef.current = element;
    evaluateSubscription();
  }, [evaluateSubscription]);
}
function extractSize(entry, boxProp, sizeType) {
  if (!entry[boxProp]) {
    if (boxProp === "contentBoxSize") {
      return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
    }
    return void 0;
  }
  return entry[boxProp][0] ? entry[boxProp][0][sizeType] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    entry[boxProp][sizeType]
  );
}
function useResizeObserver(opts) {
  if (opts === void 0) {
    opts = {};
  }
  var onResize = opts.onResize;
  var onResizeRef = (0, import_react.useRef)(void 0);
  onResizeRef.current = onResize;
  var round = opts.round || Math.round;
  var resizeObserverRef = (0, import_react.useRef)();
  var _useState = (0, import_react.useState)({
    width: void 0,
    height: void 0
  }), size = _useState[0], setSize = _useState[1];
  var didUnmount = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(function() {
    didUnmount.current = false;
    return function() {
      didUnmount.current = true;
    };
  }, []);
  var previous = (0, import_react.useRef)({
    width: void 0,
    height: void 0
  });
  var refCallback = useResolvedElement((0, import_react.useCallback)(function(element) {
    if (!resizeObserverRef.current || resizeObserverRef.current.box !== opts.box || resizeObserverRef.current.round !== round) {
      resizeObserverRef.current = {
        box: opts.box,
        round,
        instance: new ResizeObserver(function(entries) {
          var entry = entries[0];
          var boxProp = opts.box === "border-box" ? "borderBoxSize" : opts.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
          var reportedWidth = extractSize(entry, boxProp, "inlineSize");
          var reportedHeight = extractSize(entry, boxProp, "blockSize");
          var newWidth = reportedWidth ? round(reportedWidth) : void 0;
          var newHeight = reportedHeight ? round(reportedHeight) : void 0;
          if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
            var newSize = {
              width: newWidth,
              height: newHeight
            };
            previous.current.width = newWidth;
            previous.current.height = newHeight;
            if (onResizeRef.current) {
              onResizeRef.current(newSize);
            } else {
              if (!didUnmount.current) {
                setSize(newSize);
              }
            }
          }
        })
      };
    }
    resizeObserverRef.current.instance.observe(element, {
      box: opts.box
    });
    return function() {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.instance.unobserve(element);
      }
    };
  }, [opts.box, round]), opts.ref);
  return (0, import_react.useMemo)(function() {
    return {
      ref: refCallback,
      width: size.width,
      height: size.height
    };
  }, [refCallback, size.width, size.height]);
}

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/FlameChartWrapper.jsx
var useResizeObserver2 = useResizeObserver;
var FlameChartWrapper = (props) => {
  const boxRef = (0, import_react2.useRef)(null);
  const canvasRef = (0, import_react2.useRef)(null);
  const flameChart = (0, import_react2.useRef)(null);
  useResizeObserver2({
    ref: boxRef,
    onResize: ({ width = 0, height = 0 }) => {
      if (props.onResize) {
        props.onResize(flameChart.current, width, height);
      } else {
        flameChart.current?.resize(width, height - 3);
      }
    }
  });
  const initialize = (0, import_react2.useCallback)(() => {
    const {
      data,
      marks,
      waterfall,
      timeseries,
      settings,
      colors,
      plugins,
      timeframeTimeseries
    } = props;
    if (canvasRef.current && boxRef.current) {
      const { width = 0, height = 0 } = boxRef.current.getBoundingClientRect();
      canvasRef.current.width = width;
      canvasRef.current.height = height - 3;
      flameChart.current = new flameChartJs.FlameChart({
        canvas: canvasRef.current,
        data,
        marks,
        waterfall,
        timeseries,
        timeframeTimeseries,
        settings,
        colors,
        plugins
      });
    }
  }, [props]);
  const setBoxRef = (0, import_react2.useCallback)(
    (ref) => {
      const isNewRef = ref !== boxRef.current;
      boxRef.current = ref;
      if (isNewRef) {
        initialize();
      }
    },
    [initialize]
  );
  const setCanvasRef = (0, import_react2.useCallback)(
    (ref) => {
      const isNewRef = ref !== canvasRef.current;
      canvasRef.current = ref;
      if (isNewRef) {
        initialize();
      }
    },
    [initialize]
  );
  (0, import_react2.useEffect)(() => {
    if (props.data) {
      flameChart.current?.setNodes(props.data);
    }
  }, [props.data]);
  (0, import_react2.useEffect)(() => {
    if (props.marks) {
      flameChart.current?.setMarks(props.marks);
    }
  }, [props.marks]);
  (0, import_react2.useEffect)(() => {
    if (props.waterfall) {
      flameChart.current?.setWaterfall(props.waterfall);
    }
  }, [props.waterfall]);
  (0, import_react2.useEffect)(() => {
    if (props.timeseries) {
      flameChart.current?.setTimeseries(props.timeseries);
    }
  }, [props.timeseries]);
  (0, import_react2.useEffect)(() => {
    if (props.timeframeTimeseries) {
      flameChart.current?.setTimeframeTimeseries(props.timeframeTimeseries);
    }
  }, [props.timeframeTimeseries]);
  (0, import_react2.useEffect)(() => {
    if (props.settings && flameChart.current) {
      flameChart.current.setSettings(props.settings);
      flameChart.current.renderEngine.recalcChildrenSizes();
      flameChart.current.render();
    }
  }, [props.settings]);
  (0, import_react2.useEffect)(() => {
    if (props.position) {
      flameChart.current?.setFlameChartPosition(props.position);
    }
  }, [props.position]);
  (0, import_react2.useEffect)(() => {
    if (props.zoom) {
      flameChart.current?.setZoom(props.zoom.start, props.zoom.end);
    }
  }, [props.zoom]);
  (0, import_react2.useEffect)(() => {
    if (props.onSelect) {
      flameChart.current?.on("select", props.onSelect);
    }
    return () => {
      if (props.onSelect) {
        flameChart.current?.removeListener("select", props.onSelect);
      }
    };
  }, [props.onSelect]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: `100%` }, className: props.className, ref: setBoxRef, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { ref: setCanvasRef }) });
};

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/lib/useDebugNetworkServer.jsx
var import_react3 = __toESM(require_react(), 1);
var nextEventId = 0;
var SUBREQUEST_PROFILER_ENDPOINT = "/debug-network-server";
var LOCAL_STORAGE_SETTINGS_KEY = "h2-debug-network-settings";
function getSettings() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY) ?? "{}");
  } catch {
    return {};
  }
}
function setSettings(settings) {
  localStorage.setItem(
    LOCAL_STORAGE_SETTINGS_KEY,
    JSON.stringify({ ...getSettings(), ...settings })
  );
}
function useDebugNetworkServer() {
  const serverEvents = (0, import_react3.useRef)({
    mainRequests: [],
    subRequests: {},
    allRequests: {},
    hidePutRequests: true,
    preserveLog: false,
    activeEventId: void 0,
    hideNotification: void 0
  });
  const [timestamp, setTimestamp] = (0, import_react3.useState)();
  function triggerRender() {
    setTimestamp((/* @__PURE__ */ new Date()).getTime());
  }
  (0, import_react3.useEffect)(() => {
    try {
      const debugNetworkSettings = getSettings();
      serverEvents.current.hidePutRequests = debugNetworkSettings.hidePutRequests ?? true;
      serverEvents.current.preserveLog = debugNetworkSettings.preserveLog ?? false;
      serverEvents.current.hideNotification = debugNetworkSettings.hideNotification ?? void 0;
      triggerRender();
    } catch {
    }
  }, []);
  function clearServerEvents() {
    fetch(SUBREQUEST_PROFILER_ENDPOINT, { method: "DELETE" }).catch(
      (error) => console.error("Could not clear history:", error)
    );
    serverEvents.current = {
      ...serverEvents.current,
      mainRequests: [],
      subRequests: {},
      allRequests: {},
      activeEventId: void 0
    };
  }
  function serverEventHandler(onEvent) {
    return (event) => {
      const data = JSON.parse(event.data);
      const id = `event-${nextEventId++}`;
      onEvent({
        ...data,
        id
      });
      setTimeout(triggerRender, 0);
    };
  }
  (0, import_react3.useEffect)(() => {
    const evtSource = new EventSource(SUBREQUEST_PROFILER_ENDPOINT, {
      withCredentials: true
    });
    const mainRequestHandler = serverEventHandler((data) => {
      const cleanData = {
        ...data,
        url: data.url.replace(location.origin, "")
      };
      if (serverEvents.current.preserveLog) {
        serverEvents.current.mainRequests = [
          ...serverEvents.current.mainRequests,
          cleanData
        ];
      } else {
        serverEvents.current.mainRequests = [cleanData];
      }
      serverEvents.current.allRequests[cleanData.id] = cleanData;
    });
    evtSource.addEventListener("Request", mainRequestHandler);
    const subRequestHandler = serverEventHandler((data) => {
      let groupEvents = serverEvents.current.subRequests[data.requestId] || [];
      groupEvents = [...groupEvents, data];
      serverEvents.current.subRequests = {
        ...serverEvents.current.subRequests,
        [data.requestId]: groupEvents
      };
      serverEvents.current.allRequests[data.id] = data;
    });
    evtSource.addEventListener("Sub request", subRequestHandler);
    return () => {
      evtSource.removeEventListener("Request", mainRequestHandler);
      evtSource.removeEventListener("Sub request", subRequestHandler);
      evtSource.close();
    };
  }, []);
  function clear() {
    clearServerEvents();
    triggerRender();
  }
  function setHidePutRequests(hidePutRequests) {
    serverEvents.current.hidePutRequests = hidePutRequests;
    setSettings({ hidePutRequests });
    triggerRender();
  }
  function setPreserveLog(preserveLog) {
    serverEvents.current.preserveLog = preserveLog;
    setSettings({ preserveLog });
    triggerRender();
  }
  function setActiveEventId(eventId) {
    serverEvents.current.activeEventId = eventId;
  }
  function setHideNotification(hideNotification) {
    serverEvents.current.hideNotification = hideNotification;
    setSettings({ hideNotification });
    triggerRender();
  }
  return {
    serverEvents: serverEvents.current,
    clear,
    setHidePutRequests,
    setPreserveLog,
    setActiveEventId,
    setHideNotification,
    timestamp
  };
}
function buildRequestData({
  serverEvents,
  buildMainRequest,
  buildSubRequest
}) {
  const calcDuration = (time) => time - (serverEvents.mainRequests[0]?.startTime ?? 0);
  let items = [];
  serverEvents.mainRequests.forEach((mainRequest) => {
    const mainResponseStart = calcDuration(mainRequest.endTime);
    let mainResponseEnd = mainResponseStart;
    const subRequestItems = [];
    const subRequests = serverEvents.subRequests[mainRequest.requestId] || [];
    subRequests.forEach((subRequest) => {
      const subRequestEnd = calcDuration(subRequest.endTime);
      if (subRequest.cacheStatus !== "PUT") {
        mainResponseEnd = Math.max(mainResponseEnd, subRequestEnd);
      }
      const subRequestItem = buildSubRequest(subRequest, {
        requestStart: calcDuration(subRequest.startTime),
        requestEnd: subRequestEnd,
        responseStart: -1,
        responseEnd: -1
      });
      if (serverEvents.hidePutRequests) {
        subRequest.cacheStatus !== "PUT" && subRequestItems.push(subRequestItem);
      } else {
        subRequestItems.push(subRequestItem);
      }
    });
    items.push(
      buildMainRequest(mainRequest, {
        requestStart: calcDuration(mainRequest.startTime),
        responseStart: mainResponseStart,
        responseEnd: mainResponseEnd,
        requestEnd: -1
      })
    );
    items = items.concat(subRequestItems);
  });
  return items;
}

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/RequestWaterfall.jsx
var STYLE_FONT = "10px Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif";
var resizeTimeout;
function RequestWaterfall({
  serverEvents,
  config
}) {
  const items = buildRequestData({
    serverEvents,
    buildMainRequest: (mainRequest, timing) => {
      return {
        name: mainRequest.url,
        intervals: "mainRequest",
        timing,
        meta: [
          {
            name: "id",
            value: mainRequest.id,
            color: "black"
          }
        ]
      };
    },
    buildSubRequest: (subRequest, timing) => {
      return {
        name: `${subRequest.cacheStatus} ${subRequest.displayName ?? subRequest.url}`.trim(),
        intervals: "request",
        timing,
        meta: [
          {
            name: "id",
            value: subRequest.id,
            color: "black"
          }
        ]
      };
    }
  });
  const data = {
    items: [
      {
        // Workaround a bug in flame-chart-js where the first item onSelect is not triggered
        name: "padding-request",
        intervals: "request",
        timing: {
          requestStart: 0,
          responseStart: 0,
          responseEnd: 0,
          requestEnd: -1
        }
      },
      ...items
    ],
    intervals: {
      mainRequest: [
        {
          name: "server",
          color: config.colors.server,
          type: "block",
          start: "requestStart",
          end: "responseStart"
        },
        {
          name: "streaming",
          color: config.colors.streaming,
          type: "block",
          start: "responseStart",
          end: "responseEnd"
        }
      ],
      request: [
        {
          name: "request",
          color: config.colors.subRequest,
          type: "block",
          start: "requestStart",
          end: "requestEnd"
        }
      ]
    }
  };
  const onSelect = (data2) => {
    const eventIdMeta = data2?.node?.meta?.filter(
      (meta) => meta.name === "id"
    )?.[0];
    if (eventIdMeta) {
      setTimeout(() => {
        window.setActiveEventId && window.setActiveEventId(eventIdMeta.value);
        document.querySelector(`#request-table__row-${eventIdMeta.value}`)?.scrollIntoView();
      }, 0);
    }
  };
  const settings = (0, import_react4.useMemo)(
    () => ({
      options: {
        tooltip: () => {
        }
      },
      styles: {
        main: {
          blockHeight: 22,
          font: STYLE_FONT,
          tooltipShadowBlur: 1
        },
        timeframeSelectorPlugin: {
          font: STYLE_FONT,
          waterfallStrokeOpacity: 1,
          waterfallFillOpacity: 0.1
        },
        timeGridPlugin: {
          font: STYLE_FONT
        },
        waterfallPlugin: {
          defaultHeight: 500
        }
      }
    }),
    []
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    FlameChartWrapper,
    {
      waterfall: data,
      onSelect,
      settings,
      onResize: (flameChart, width, height) => {
        flameChart?.setSettings({
          ...settings,
          styles: {
            ...settings.styles,
            waterfallPlugin: {
              defaultHeight: height
            }
          }
        });
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          flameChart?.resize(width, height);
        }, 50);
      }
    }
  );
}

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/RequestTable.jsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);
function RequestTable({
  serverEvents,
  activeEventId,
  setActiveEventId
}) {
  let totalMainRequests = 0;
  let totalSubRequest = 0;
  const items = buildRequestData({
    serverEvents,
    buildMainRequest: (mainRequest, timing) => {
      totalMainRequests++;
      return {
        id: mainRequest.id,
        requestId: mainRequest.requestId,
        url: mainRequest.url,
        status: mainRequest.responseInit?.status ?? 0,
        cacheStatus: mainRequest.cacheStatus,
        duration: timing.responseEnd - timing.requestStart
      };
    },
    buildSubRequest: (subRequest, timing) => {
      if (serverEvents.hidePutRequests) {
        subRequest.cacheStatus !== "PUT" && totalSubRequest++;
      } else {
        totalSubRequest++;
      }
      return {
        id: subRequest.id,
        requestId: subRequest.requestId,
        url: subRequest.displayName ?? subRequest.url,
        status: subRequest.responseInit?.status ?? 0,
        cacheStatus: subRequest.cacheStatus,
        duration: timing.requestEnd - timing.requestStart
      };
    }
  });
  (0, import_react5.useEffect)(() => {
    if (!serverEvents.preserveLog && activeEventId) {
      const selectedItem = items.find((item) => item.id === activeEventId);
      if (!selectedItem) {
        setActiveEventId(void 0);
      }
    }
  }, [serverEvents.preserveLog]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: "request-table", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { id: "request-table__header", className: "grid-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid-cell", children: "Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid-cell", children: "Cache" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid-cell", children: "Time" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: "request-table__content", children: items.map((row) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        id: `request-table__row-${row.id}`,
        tabIndex: 0,
        className: `grid-row${activeEventId === row.id ? " active" : ""}${row.status >= 400 ? " error" : ""}`,
        onClick: () => setActiveEventId(row.id),
        onKeyUp: (event) => {
          if (event.code === "Space")
            setActiveEventId(row.id);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid-cell", children: row.url }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid-cell", children: row.cacheStatus }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grid-cell", children: [
            row.duration,
            "ms"
          ] })
        ]
      },
      row.id
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { id: "request-table__footer", children: [
      totalMainRequests,
      " request",
      totalMainRequests > 1 ? "s" : "",
      " |",
      " ",
      totalSubRequest,
      " sub request",
      totalSubRequest > 1 ? "s" : ""
    ] })
  ] }) });
}

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/assets/favicon-dark.svg
var favicon_dark_default = "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_assets/favicon-dark-7S53UTHZ.svg";

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/RequestDetails.jsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_react6 = __toESM(require_react(), 1);

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/IconClose.jsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function IconClose(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "svg",
    {
      width: "20px",
      height: "20px",
      ...props,
      stroke: props.stroke || "currentColor",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("title", { children: "Close" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "line",
          {
            x1: "4.44194",
            y1: "4.30806",
            x2: "15.7556",
            y2: "15.6218",
            strokeWidth: "1.25"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "line",
          {
            y1: "-0.625",
            x2: "16",
            y2: "-0.625",
            transform: "matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)",
            strokeWidth: "1.25"
          }
        )
      ]
    }
  );
}

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/RequestDetails.jsx
var useResizeObserver3 = useResizeObserver;
var TABS = {
  1: "General",
  2: "Headers",
  3: "Cache",
  4: "Data"
};
function RequestDetails({
  serverEvents,
  activeEventId,
  setActiveEventId
}) {
  const [activeTab, setActiveTab] = (0, import_react6.useState)(1);
  if (!activeEventId) {
    return null;
  }
  const requestInfo = serverEvents.allRequests[activeEventId];
  if (!requestInfo) {
    return null;
  }
  function activeTabClass(tab) {
    return activeTab === tab ? " active" : "";
  }
  function TabButton(key) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        tabIndex: 0,
        className: `tab${activeTabClass(key)}`,
        onClick: () => setActiveTab(key),
        onKeyUp: (event) => {
          if (event.code === "Space")
            setActiveTab(key);
        },
        children: TABS[key]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { id: "request-detail", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { id: "request-detail-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(TabButtonsBar, { children: [
        TabButton(1),
        !!requestInfo.responseInit?.headers && TabButton(2),
        !!requestInfo.cache && TabButton(3),
        !!requestInfo.responsePayload && TabButton(4)
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { id: "close-request-detail", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          className: "plain icon",
          onClick: () => {
            setActiveEventId(void 0);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(IconClose, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "tabPanels pad", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { id: "tab1-panel", className: `tabPanel${activeTabClass(1)}`, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grid-layout", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DetailsRow, { rowName: "Name", value: requestInfo.displayName }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DetailsRow, { rowName: "Request URL", value: requestInfo.url }),
        requestInfo.responseInit ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          DetailsRow,
          {
            rowName: "Status",
            value: `${requestInfo.responseInit?.status} ${requestInfo.responseInit?.statusText}`
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          DetailsRow,
          {
            rowName: "GraphiQL",
            value: requestInfo.graphiqlLink,
            type: "url"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          DetailsRow,
          {
            rowName: "Location",
            text: requestInfo.stackLine,
            value: requestInfo.stackLink,
            type: "url"
          }
        )
      ] }) }),
      !!requestInfo.responseInit?.headers && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { id: "tab2-panel", className: `tabPanel${activeTabClass(2)}`, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "grid-layout", children: Object.entries(requestInfo.responseInit?.headers).map(
        ([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DetailsRow, { rowName: value[0], value: value[1] }, key)
      ) }) }),
      !!requestInfo.cache && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { id: "tab3-panel", className: `tabPanel${activeTabClass(3)}`, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grid-layout", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DetailsRow, { rowName: "Status", value: requestInfo.cache?.status }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          DetailsRow,
          {
            rowName: "Cache-Control",
            value: requestInfo.cache?.strategy
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          DetailsRow,
          {
            rowName: "Cache Key",
            value: requestInfo.cache?.key?.toString()
          }
        )
      ] }) }),
      !!requestInfo.responsePayload && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { id: "tab4-panel", className: `tabPanel${activeTabClass(4)}`, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("pre", { className: "code-json", children: JSON.stringify(requestInfo.responsePayload, void 0, 2) }) })
    ] })
  ] });
}
function TabButtonsBar({ children }) {
  const [fadeClass, setFadeClass] = (0, import_react6.useState)("");
  const scrollBarRef = (0, import_react6.useRef)(null);
  useResizeObserver3({
    ref: scrollBarRef,
    onResize: () => {
      if (scrollBarRef.current) {
        setFade(scrollBarRef.current);
      }
    }
  });
  function setFade(target) {
    if (target.scrollWidth === target.clientWidth) {
      setFadeClass("");
      return;
    }
    const scrollRange = target.scrollWidth - target.clientWidth;
    if (target.scrollLeft > 10 && target.scrollLeft < scrollRange - 10) {
      setFadeClass("fadeLeftRight");
    } else if (target.scrollLeft <= 10) {
      setFadeClass("fadeRight");
    } else if (target.scrollLeft > scrollRange - 10) {
      setFadeClass("fadeLeft");
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      id: "tab-buttons-wrapper",
      onResize: (event) => setFade(event.currentTarget),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "div",
          {
            id: "tabButtons",
            ref: scrollBarRef,
            className: "flex-row gap-tiny",
            onScroll: (event) => setFade(event.currentTarget),
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: `fadCover ${fadeClass}` })
      ]
    }
  );
}
function DetailsRow({
  rowName,
  value,
  text,
  type = "string"
}) {
  if (!rowName || !value) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "gridTitle", children: rowName }),
    type === "url" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Link, { target: "_blank", to: value, children: text ?? value }),
    type === "string" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "word-break-all", children: text ?? value })
  ] });
}

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/IconDiscard.jsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function IconDiscard(props) {
  const fillColor = props.fill || "#333333";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("title", { children: "Clear" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            d: "M11.5 8.25C11.9142 8.25 12.25 8.58579 12.25 9V13.25C12.25 13.6642 11.9142 14 11.5 14C11.0858 14 10.75 13.6642 10.75 13.25V9C10.75 8.58579 11.0858 8.25 11.5 8.25Z",
            fill: fillColor
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            d: "M9.25 9C9.25 8.58579 8.91421 8.25 8.5 8.25C8.08579 8.25 7.75 8.58579 7.75 9V13.25C7.75 13.6642 8.08579 14 8.5 14C8.91421 14 9.25 13.6642 9.25 13.25V9Z",
            fill: fillColor
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.24994 5.25C7.24994 3.73122 8.48116 2.5 9.99994 2.5C11.5187 2.5 12.7499 3.73122 12.7499 5.25H15.75C16.1642 5.25 16.5 5.58579 16.5 6C16.5 6.41421 16.1642 6.75 15.75 6.75H14.9999L14.9998 12.2001C14.9998 13.8802 14.9997 14.7203 14.6728 15.362C14.3851 15.9265 13.9262 16.3854 13.3617 16.673C12.72 17 11.8799 17 10.1997 17H9.79999C8.11978 17 7.27968 17 6.63793 16.673C6.07343 16.3854 5.61448 15.9264 5.32687 15.3619C4.99989 14.7202 4.9999 13.8801 4.99994 12.1999L5.00005 6.75H4.25C3.83579 6.75 3.5 6.41421 3.5 6C3.5 5.58579 3.83579 5.25 4.25 5.25H7.24994ZM8.74994 5.25C8.74994 4.55964 9.30958 4 9.99994 4C10.6903 4 11.2499 4.55964 11.2499 5.25H8.74994ZM6.50007 6.75H13.4999L13.4998 12.2001C13.4998 13.0649 13.4986 13.6233 13.4639 14.0483C13.4305 14.4558 13.374 14.6068 13.3362 14.681C13.1924 14.9632 12.963 15.1927 12.6807 15.3365C12.6065 15.3743 12.4555 15.4308 12.048 15.4641C11.623 15.4988 11.0646 15.5 10.1997 15.5H9.79999C8.93513 15.5 8.37671 15.4988 7.95169 15.4641C7.54418 15.4308 7.3931 15.3743 7.31893 15.3365C7.03668 15.1927 6.80721 14.9632 6.6634 14.681C6.62561 14.6068 6.56909 14.4557 6.53581 14.0482C6.50109 13.6232 6.49994 13.0648 6.49995 12.1999L6.50007 6.75Z",
            fill: fillColor
          }
        )
      ]
    }
  );
}

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/assets/debug-network.css?url
var debug_network_default = "http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/_assets/debug-network-DR2W2KSW.css?url";

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/routes/subrequest-profiler.jsx
var links = () => {
  return [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: favicon_default
    },
    {
      rel: "stylesheet",
      href: debug_network_default
    }
  ];
};
var WATERFALL_CONFIG = {
  colors: {
    server: "#2ED389",
    streaming: "#33CCFF",
    subRequest: "#FFCC00"
  }
};
function DebugNetwork() {
  const {
    serverEvents,
    clear,
    timestamp,
    setHidePutRequests,
    setPreserveLog,
    setHideNotification
  } = useDebugNetworkServer();
  const isEmptyState = serverEvents.mainRequests.length === 0;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      id: "server-network-timing",
      className: `${serverEvents.hideNotification ? "" : "withNotification"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Cn,
          {
            src: "https://unpkg.com/flame-chart-js@2.3.2/dist/index.min.js",
            suppressHydrationWarning: true
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          NotificationBanner,
          {
            hideNotification: serverEvents.hideNotification,
            setHideNotification
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DebugHeader, {}),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
          id: "main",
          className: `${isEmptyState ? " empty" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              OptionsAndLegend,
              {
                serverEvents,
                clearCallback: clear,
                setHidePutRequests,
                setPreserveLog
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { id: "request-waterfall", className: "pad", children: isEmptyState ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(EmptyState, {}) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "request-waterfall-chart", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              RequestWaterfall,
              {
                serverEvents,
                config: WATERFALL_CONFIG
              },
              timestamp
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RequestInfo, { serverEvents })
          ]
        })
      ]
    }
  );
}
function NotificationBanner({
  hideNotification,
  setHideNotification
}) {
  if (hideNotification) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
    className: "notification",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { id: "close-notification", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          className: "plain icon",
          onClick: () => {
            setHideNotification(true);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconClose, {})
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "Note: You may need to turn on 'Disable Cache' for your navigating window." })
    ]
  });
}
function EmptyState() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
    id: "empty-view",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-large bold", children: "Navigate to your app" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-normal", children: "Open your localhost to initiate subrequest profiler" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Link, { to: "/", target: "_blank", className: "link-margin-top", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { className: "primary", children: "Open app" }) })
    ]
  });
}
function DebugHeader() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("header", { className: "justify-between text-large", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
    className: "flex-row",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { className: "logo", src: favicon_dark_default, alt: "Hydrogen logo" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { children: "Subrequest Profiler" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "pill", children: "Development" })
    ]
  }) });
}
function OptionsAndLegend({
  serverEvents,
  clearCallback,
  setHidePutRequests,
  setPreserveLog
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
    id: "options-and-legend",
    className: "justify-between pad",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
        className: "flex-row text-large",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", {
            id: "buttonClear",
            onClick: () => clearCallback(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconDiscard, {}),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "Clear" })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
            className: "form-control",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "input",
                {
                  id: "hidePutRequests",
                  type: "checkbox",
                  checked: serverEvents.hidePutRequests,
                  onChange: (event) => setHidePutRequests(event.target.checked)
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { htmlFor: "hidePutRequests", children: "Hide cache update requests (PUT)" })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
            className: "form-control",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "input",
                {
                  id: "preserveLog",
                  type: "checkbox",
                  checked: serverEvents.preserveLog,
                  onChange: (event) => setPreserveLog(event.target.checked)
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { htmlFor: "preserveLog", children: "Preserve Log" })
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
        className: "flex-row text-normal gap-small",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
            className: "legend flex-row",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "bold-1", children: "Main Request" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", {
                className: "flex-row gap-small",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    "span",
                    {
                      className: "swatch",
                      style: {
                        backgroundColor: WATERFALL_CONFIG.colors.server
                      }
                    }
                  ),
                  "Time on server"
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", {
                className: "flex-row gap-small",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    "span",
                    {
                      className: "swatch",
                      style: {
                        backgroundColor: WATERFALL_CONFIG.colors.streaming
                      }
                    }
                  ),
                  "Time to stream to client"
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "legend flex-row", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", {
            className: "flex-row gap-small",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "span",
                {
                  className: "swatch",
                  style: {
                    backgroundColor: WATERFALL_CONFIG.colors.subRequest
                  }
                }
              ),
              "Sub request"
            ]
          }) })
        ]
      })
    ]
  });
}
function RequestInfo({ serverEvents }) {
  const [activeEventId, setActiveEventId] = (0, import_react8.useState)();
  (0, import_react8.useEffect)(() => {
    window.setActiveEventId = setActiveEventId;
  }, []);
  (0, import_react8.useEffect)(() => {
    if (!activeEventId) {
      setActiveEventId(void 0);
    }
  }, [activeEventId]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
    id: "request-info",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        RequestTable,
        {
          serverEvents,
          activeEventId,
          setActiveEventId
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "div",
        {
          id: "request-details-panel",
          className: `${activeEventId ? "active" : ""}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            RequestDetails,
            {
              serverEvents,
              activeEventId,
              setActiveEventId
            }
          )
        }
      )
    ]
  });
}
export {
  DebugNetwork as default,
  links
};
//# sourceMappingURL=http://localhost:3100/mini-oxygen/00000/11111/22222/33333/build/virtual-routes/routes/subrequest-profiler-YVTLNU3F.js.map
