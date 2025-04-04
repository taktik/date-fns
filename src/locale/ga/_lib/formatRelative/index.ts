import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
    lastWeek: "eeee 'seo caite ag' p",
    yesterday: "'inné ag' p",
    today: "inniu ag' p",
    tomorrow: "'amárach ag' p",
    nextWeek: "eeee 'ag' p",
    other: 'P',
};

export const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

