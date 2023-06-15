export const required = (value) => {
  if(value) {
    return undefined;
  }
  return 'Field is required';
}

export const maxLength = (maxLength) => (value) => {
  if(value.length > maxLength) {
    return `A post must contain no more than ${maxLength} symbols.`;
  }
  return undefined;
}