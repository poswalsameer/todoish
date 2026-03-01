import React from 'react'
import { Text } from 'ink'

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [
    parseInt(result[1]!, 16),
    parseInt(result[2]!, 16),
    parseInt(result[3]!, 16)
  ] : [0, 0, 0]
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)
}

function lerpColor(c1: string, c2: string, t: number) {
  const [r1, g1, b1] = hexToRgb(c1)
  const [r2, g2, b2] = hexToRgb(c2)
  const r = Math.round(r1! + (r2! - r1!) * t)
  const g = Math.round(g1! + (g2! - g1!) * t)
  const b = Math.round(b1! + (b2! - b1!) * t)
  return rgbToHex(r, g, b)
}

export interface GradientTextProps {
  text: string
  colors: string[]
}

export function GradientText({ text, colors }: GradientTextProps) {
  const lines = text.split('\n')
  const maxLength = Math.max(...lines.map(l => l.length))
  const [c1, c2] = colors

  return (
    <>
      {lines.map((line, lineIndex) => (
        <Text key={lineIndex}>
          {line.split('').map((char, charIndex) => {
            const t = maxLength > 1 ? charIndex / (maxLength - 1) : 0
            const color = lerpColor(c1!, c2!, t)
            return <Text key={charIndex} color={color} bold>{char}</Text>
          })}
        </Text>
      ))}
    </>
  )
}
