export function simpleColorValidation(field, validState) {
  if (field === '') {
    return null;
  }

  return validState ? 'success' : 'danger';
}

export function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}
