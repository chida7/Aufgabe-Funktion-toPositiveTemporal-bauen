
type PositiveTemporal =
  | { days: string }
  | { weeks: string }
  | { months: string }
  | { years: string }
  | { hours: string }
  | { minutes: string };

const toPositiveTemporal = (amount: string, unit: string, nonNegative?: boolean | string): PositiveTemporal | string => {
  let minimized = unit.toLowerCase();
  if (amount === '0' && !(nonNegative === true || nonNegative === 'nonNegative')){
    return `amount zero in toPositiveTemporal is invalid, unit: ${unit}`;
  }
  let temporal: PositiveTemporal ;
  switch (minimized) {
    case 'd' :
    case 'day':
      temporal = { days: amount } as PositiveTemporal;
      break;
    case 'w' :
    case 'week':
      temporal = { weeks: amount } as PositiveTemporal;
      break;
    case 'm' :
    case 'month':
      temporal = { months: amount } as PositiveTemporal;
      break;
    case 'y':
    case 'year':
      temporal = { years: amount } as PositiveTemporal;
      break;
    case 'h':
    case 'hour':
      temporal = { hours: amount } as PositiveTemporal;
      break;
    case 'min':
    case 'minute':
      temporal = { minutes: amount } as PositiveTemporal;
      break;
    default:
      return `Invalid time unit: ${unit}`;
  }

  return temporal;

};

export default toPositiveTemporal;
