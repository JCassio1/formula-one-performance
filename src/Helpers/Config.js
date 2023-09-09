export const BASE_URL = 'https://ergast.com/api/f1/'

export const DATA_FETCH_LIMIT = 1000

export const STYLES = {
  img: { height: '30%', width: '20%' },
  sponsorLogo: { height: '10%', width: '5%' },
  cardBorderRadius: { borderRadius: '11px' },
  cardBgColor: { backgroundColor: 'rgb(22, 21, 30)' },
  colorWhite: { color: 'white' },
  cardTitle: { fontSize: 28, fontWeight: 'bold', color: 'white' },
  cardBadge: { fontSize: 17, fontWeight: 'bold' },
  marginBottom: function (pixels) {
    return { marginBottom: `${pixels}px` }
  },
  marginRight: function (pixels) {
    return { marginRight: `${pixels}px` }
  },
  minWidth: function (pixels) {
    return { minWidth: `${pixels}px` }
  }
}
