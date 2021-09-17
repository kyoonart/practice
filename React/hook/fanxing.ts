function getValue<T>(o: T, key: keyof T) {
  return o[key];
}
