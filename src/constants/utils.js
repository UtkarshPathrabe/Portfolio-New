import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export const getDateDiffInDays = (date2, date1) => Math.ceil(Math.abs(new Date(date2 * 1000) - new Date(date1 * 1000)) / (1000 * 60 * 60 * 24));

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const reactSvgComponentToMarkupString = (Component) => `data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(createElement(Component)))}`;
