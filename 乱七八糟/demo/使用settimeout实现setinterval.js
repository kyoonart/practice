const setintervalbysettimeouts = (fn, delay) => {
  setTimeout(() => fn(), delay);
  let fx = () => setTimeout(() => fn());
  setTimeout(() => setintervalbysettimeouts(fx, delay), delay);
};
// setintervalbysettimeouts(() => console.log("1"), 2000);

const setIntervalM = (fn, delay) => {
  const inner = () => {
    setTimeout(inner, delay);
    try {
      fn.call(null);
    } catch (error) {}
  };
  setTimeout(inner, delay);
};
setIntervalM(() => console.log("2"), 2000);

function setInterval1(fn, delay) {
  const inner = () => {
    setTimeout(inner, delay);
    try {
      fn.call(null);
    } catch (error) {}
  };
  setTimeout(inner, delay);
}
