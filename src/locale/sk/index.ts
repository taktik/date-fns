import type { Locale } from '../types.js'
import formatDistance from './_lib/formatDistance/index.js'
import formatLong from './_lib/formatLong/index.js'
import formatRelative from './_lib/formatRelative/index.js'
import localize from './_lib/localize/index.js'
import match from './_lib/match/index.js'

/**
 * @category Locales
 * @summary Slovak locale.
 * @language Slovak
 * @iso-639-2 slk
 * @author Marek Suscak [@mareksuscak](https://github.com/mareksuscak)
 */
const locale: Locale = {
  code: 'sk',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
}

export default locale
