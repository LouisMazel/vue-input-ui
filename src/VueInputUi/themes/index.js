import { ShadeColor, HexToRgba, isColorName, colorNameToHex } from 'color-transformer-ui'

export default ({ color, lightColor, darkColor, validColor, borderRadius, errorColor }) => {
  return {
    '--vue-input-ui-primary-color': color,
    '--vue-input-ui-second-color-light': '#747474',
    '--vue-input-ui-second-color-dark': 'rgba(255, 255, 255, 0.7)',
    '--vue-input-ui-third-color-light': '#CCC',
    '--vue-input-ui-third-color-dark': 'rgba(255, 255, 255, 0.7)',
    '--vue-input-ui-bg-color-light': lightColor,
    '--vue-input-ui-bg-color-dark': darkColor,
    '--vue-input-ui-error-color': errorColor,
    '--vue-input-ui-valid-color': validColor,
    '--vue-input-ui-hover-color-light': ShadeColor(lightColor, -8),
    '--vue-input-ui-hover-color-dark': ShadeColor(darkColor, 20),
    '--vue-input-ui-muted-color-light': '#747474',
    '--vue-input-ui-muted-color-dark': 'rgba(255, 255, 255, 0.3)',
    '--vue-input-ui-primary-color-transparency': isColorName(color) ? HexToRgba(colorNameToHex(color), 0.7) : HexToRgba(color, 0.7),
    '--vue-input-ui-error-color-transparency': isColorName(errorColor) ? HexToRgba(colorNameToHex(errorColor), 0.7) : HexToRgba(errorColor, 0.7),
    '--vue-input-ui-valid-color-transparency': isColorName(validColor) ? HexToRgba(colorNameToHex(validColor), 0.7) : HexToRgba(validColor, 0.7),
    '--vue-input-ui-border-radius': `${borderRadius}px`
  }
}
