export function searchCriticsRequest() {
  return {
    type: '@critics/SEARCH_REQUEST',
  };
}

export function searchCriticsSuccess(critics) {
  return {
    type: '@critics/SEARCH_SUCCESS',
    payload: { critics },
  };
}

export function searchCriticsFailure() {
  return {
    type: '@critics/SEARCH_FAILURE',
  };
}
