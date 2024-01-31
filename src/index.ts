
type PositiveTemporal =
  | { days: string }
  | { weeks: string }
  | { months: string }
  | { years: string }
  | { hours: string }
  | { minutes: string };

const toPositiveTemporal = (amount: string, unit: string, nonNegative?: boolean | string): PositiveTemporal | string => {
  const minimized = new RegExp(`${unit}`, 'i');
  if (amount === '0' && !(nonNegative === true || nonNegative === 'nonNegative')){
    return `amount zero in toPositiveTemporal is invalid, unit: ${unit}`;
  }
  let temporal: PositiveTemporal ;
  switch (true) {
    case minimized.test('d') || minimized.test('day'):
      temporal = { days: amount } as PositiveTemporal;
      break;
    case minimized.test('w') || minimized.test('week'):
      temporal = { weeks: amount } as PositiveTemporal;
      break;
    case minimized.test('m') || minimized.test('month'):
      temporal = { months: amount } as PositiveTemporal;
      break;
    case minimized.test('y') || minimized.test('year'):
      temporal = { years: amount } as PositiveTemporal;
      break;
    case minimized.test('h') || minimized.test('hour'):
      temporal = { hours: amount } as PositiveTemporal;
      break;
    case minimized.test('min') || minimized.test('minute'):
      temporal = { minutes: amount } as PositiveTemporal;
      break;
    default:
      return `Invalid time unit: ${unit}`;
  }

  return temporal;

};

export default toPositiveTemporal;
