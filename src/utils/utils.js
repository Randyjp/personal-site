export function simpleColorValidation(field, validState) {
  if (field === '') {
    return null;
  }

  return validState ? 'success' : 'danger';
}

export function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export function isExternalLink(url) {
  const regex = /^(https|^\/static\/)?/i;
  return regex.test(url);
}
