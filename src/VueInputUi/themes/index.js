import { ShadeColor, HexToRgba, isColorName, colorNameToHex } from '@/utils/ColorTransfomer'

export default ({ dark, color, lightColor, darkColor, validColor, borderRadius }) => {
  return {
    '--input-ui-primary-color': color,
    '--input-ui-primary-color-transparency': isColorName(color) ? HexToRgba(colorNameToHex(color), 0.7) : HexToRgba(color, 0.7),
    '--input-ui-second-color': dark ? 'rgba(255, 255, 255, 0.7)' : '#747474',
    '--input-ui-third-color': dark ? 'rgba(255, 255, 255, 0.7)' : '#CCC',
    '--input-ui-bg-color': dark ? darkColor : lightColor,
    '--input-ui-hover-color': dark ? ShadeColor(darkColor, 20) : ShadeColor(lightColor, -8),
    '--input-ui-valid-color': validColor,
    '--input-ui-muted-color': dark ? 'rgba(255, 255, 255, 0.3)' : '#747474',
    '--input-ui-border-radius': `${borderRadius}px`,
    '--input-ui-error-color-transparency': HexToRgba(colorNameToHex('orangered'), 0.7),
    '--input-ui-valid-color-transparency': isColorName(validColor) ? HexToRgba(colorNameToHex(validColor), 0.7) : HexToRgba(validColor, 0.7)
  }
}
