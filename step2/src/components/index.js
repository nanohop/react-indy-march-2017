

export people() {
  return fetch(`/api/people.json`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);
}

