export function getCleanData(data: any) {
  if (typeof data === 'object') {
    return Object.fromEntries(Object.entries(data).filter(([, v]) => !!v));
  }

  return data;
}
