const log = (callback) => {
  log.count = log.count || 0;
  var count = log.count++;
  setTimeout(() => {
    console.log(count);
    callback && callback();
  }, (Math.random() * 1000) % 10);
};

const cb = () => {
  if (log.count > 100) {
    return;
  }
  return log(cb);
};
cb();
