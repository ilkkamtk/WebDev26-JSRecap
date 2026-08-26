'use strict';

// eslint-disable-next-line no-unused-vars
async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('fetchData error ' + response.statusText);
  }
  return await response.json();
}
