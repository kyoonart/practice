const singletonify = (fn) => {
    const one = new fn();
    return new Proxy(fn, {
        construct(target, argumentsList, newTarget) {
            return one;
        },
    });
};
//单例模式（Singleton）是一种常用的软件设计模式，它保证我们系统中的某一个类在任何情况实例化的时候都获得同一个实例。例如：
