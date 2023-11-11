import { CSSClasses } from '../data/types'

const colorDark = '#222'
const colorDark2 = '#666'
const colorGray = '#e3e3e3'
const colorWhite = '#fff'

const styles: CSSClasses = {
  dark: {
    color: colorDark,
  },

  white: {
    color: colorWhite,
  },

  'center': {
    textAlign: 'center'
  },

  'bg-dark': {
    backgroundColor: colorDark2,
  },

  'bg-gray': {
    backgroundColor: colorGray,
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },

  'w-auto': {
    flex: 1,
    paddingRight: '8px',
  },

  'ml-30': {
    flex: 1,
  },

  'w-100': {
    width: '100%',
  },

  'w-50': {
    width: '50%',
  },

  'w-55': {
    width: '55%',
  },

  'w-45': {
    width: '45%',
  },

  'w-60': {
    width: '60%',
  },

  'w-40': {
    width: '40%',
  },

  'w-48': {
    width: '48%',
  },

  'w-17': {
    width: '17%',
  },

  'w-18': {
    width: '18%',
  },

  row: {
    borderBottom: `1px solid ${colorGray}`,
  },

  'mt-40': {
    marginTop: '40px',
  },

  'mt-30': {
    marginTop: '30px',
  },

  'mt-20': {
    marginTop: '20px',
  },

  'mt-10': {
    marginTop: '10px',
  },

  'mb-5': {
    marginBottom: '5px',
  },

  'p-4-8': {
    padding: '4px 8px',
  },

  'p-5': {
    padding: '5px',
  },

  'pb-10': {
    paddingBottom: '10px',
  },

  right: {
    textAlign: 'right',
  },

  bold: {
    fontWeight: 'bold',
  },

  'fs-16': {
    fontSize: '16px'
  },

  'fs-20': {
    fontSize: '20px',
  },

  'fs-30': {
    fontSize: '20px',
  },

  'fs-38': {
    fontSize: '45px'
  },

  'fs-45': {
    fontSize: '45px',
  },

  page: {
    fontFamily: 'Nunito',
    fontSize: '13px',
    color: '#555',
    padding: '40px 35px',
  },

  span: {
    padding: '4px 12px 4px 0',
  },

  logo: {
    display: 'block',
  },

  'letter-spacing': {
    letterSpacing: '3px'
  },

  'border-right': {
    borderRight: '1px solid black',
    paddingRight: '24px'
  },
  'border-left': {
    borderLeft: '1px solid black',
    paddingLeft: '44px',
    paddingBottom: '24px',
    marginLeft: '8px'
  },

  'border-top': {
    borderTop: '1px solid black',
    paddingTop: '24px'
  },

  'stepper-thumb': {
    content: '',
    height: '8px',
    width: '8px',
    position: 'absolute',
    left: '-4px',
    marginTop: '8px',
    border: '1px solid #888',
    backgroundColor: '#888',
    borderRadius: '100%'
  },
  
  'stepper': {
    position: 'relative',
    borderLeft: '1px solid #ccc',
    paddingLeft: '22px'
  },

  'rounded': {
    borderRadius: '100%',
    objectFit: 'cover'
  }
}

export default styles
