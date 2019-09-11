export function handleContextData(data) {
  return {
    type: 'HANDLEDATA',
    data
  };
}

export function cleanContextData() {
  return {
    type: 'CLEANDATA'
  };
}
