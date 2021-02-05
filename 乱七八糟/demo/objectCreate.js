function ObjectCreate(protoType) {
  function F() {}
  F.prototype = protoType;
  F.prototype.constructor = F;
  return new F();
}
