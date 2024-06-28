export const kelvinToCelsius = (kelvin: number): number => {
  const celsius = kelvin - 273.15;
  return Number(celsius.toFixed(1));
};
