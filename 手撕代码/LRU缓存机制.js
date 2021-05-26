var LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    // 存在即更新
    let temp = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, temp);
    return temp;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    // 存在即更新（删除后加入）
    this.cache.delete(key);
  } else if (this.cache.size >= this.capacity) {
    // 不存在即加入
    // 缓存超过最大值，则移除最近没有使用的
    this.cache.delete(this.cache.keys().next().value);
  }
  this.cache.set(key, value);
};

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let index = this.cache.findIndex((item) => item.key === key);
  if (index === -1) {
    return -1;
  }
  // 删除此元素后插入到数组第一项
  let value = this.cache[index].value;
  this.cache.splice(index, 1);
  this.cache.unshift({
    key,
    value,
  });
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let index = this.cache.findIndex((item) => item.key === key);
  // 想要插入的数据已经存在了，那么直接提升它就可以
  if (index > -1) {
    this.cache.splice(index, 1);
  } else if (this.cache.length >= this.capacity) {
    // 若已经到达最大限制，先淘汰一个最久没有使用的
    this.cache.pop();
  }
  this.cache.unshift({ key, value });
};

// 解析  最近最少使用缓存机制获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
// 写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = [];
};
// 获取值时
//  查找缓存中是否存在这个数据
// 1: 不存在=>return -1
// 2:存在 => 删除 => 然后在缓存数组开头存入数据=>返回对应的value
LRUCache.prototype.get = function (key) {
  let index = this.cache.findIndex((item) => item.key === key);
  if (index === -1) return -1;
  let value = this.cache[index].value;
  this.cache.splice(index, 1);
  this.cache.unshift({ key, value });
  return value;
};
// 增加数据时
//  查找缓存是否已经存在
// 存在的话 删除 然后 插入缓存数组前面
//  不存在 直接插入缓存数组前面
//  如果缓存数组满了 删除没有使用过的数据 也就缓存数组的最后一位
LRUCache.prototype.put = function (key, value) {
  let index = this.cache.findIndex((item) => item.key === key);
  if (index > -1) {
    this.cache.splice(index, 1);
  } else if (this.cache.length >= this.capacity) {
    this.cache.pop();
  }
  this.cache.unshift({ key, value });
};
