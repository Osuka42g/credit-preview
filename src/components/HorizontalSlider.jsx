import React from 'react';
import Slider from 'react-input-slider';

export default (props) => {
  const { step, min, max, value, onChange, } = props;

  return (
    <Slider
      axis="x"
      xstep={step}
      xmin={min}
      xmax={max}
      x={value}
      onChange={({ x }) => onChange(x)}
      styles={{ track: { width: '100%' } }}
    />
  );
}
