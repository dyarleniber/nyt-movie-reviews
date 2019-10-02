export function criticsRequest() {
  return {
    type: '@critics/CRITICS_REQUEST',
  };
}

export function criticsSuccess(result) {
  return {
    type: '@critics/CRITICS_SUCCESS',
    payload: { result },
  };
}

export function criticsFailure() {
  return {
    type: '@critics/CRITICS_FAILURE',
  };
}
