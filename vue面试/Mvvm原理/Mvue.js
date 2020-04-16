const compileUtil = {
    getval(expr, vm) {
        return expr.split('.').reduce((data, currentval) => {
            return data[currentval]
        }, vm.$data)
    },
    setVal(expr, vm, inputVal) {
        return expr.split('.').reduce((data, currentval) => {
            data[currentval] = inputVal;
        }, vm.$data)
    },
    getTentcontval(expr, vm) {
        return expr.replace(/\{\{(.+?)\}\}/g, (...agrs) => {
            return this.getval(agrs[1], vm);
        })
    },
    text(node, expr, vm) {
        let value;
        if (expr.indexOf('{{') !== -1) {
            value = expr.replace(/\{\{(.+?)\}\}/g, (...agrs) => {
                // 绑定观察者 将来数据发生变化触发这里的回调函数  进行更新
                new Wather(vm, agrs[1], () => {
                    this.updater.textUpdata(node, this.getTentcontval(expr, vm));

                });
                return this.getval(agrs[1], vm);
            })
        } else {
            value = this.getval(expr, vm);
        }
        this.updater.textUpdata(node, value)
    },
    html(node, expr, vm) {
        const value = this.getval(expr, vm);
        new Wather(vm, expr, (newval) => {
            this.updater.htmlUpdata(node, newval);
        });
        this.updater.htmlUpdata(node, value)
    },
    model(node, expr, vm) {
        const value = this.getval(expr, vm);
        // 数据驱动视图
        new Wather(vm, expr, (newval) => {
            this.updater.modelUpdata(node, newval);
        });
        // 视图=>数据=>视图
        node.addEventListener('input', e => {
            this.setVal(expr, vm, e.target.value)
        })
        this.updater.modelUpdata(node, value)
    },
    on(node, expr, vm, eventName) {
        let fn = vm.$options.methods && vm.$options.methods[expr];
        node.addEventListener(eventName, fn.bind(vm), false)
    },
    bind(node, expr, vm, eventName) {
        this.updater.bindUpdata(node, value, vm, eventName)
    },
    updater: {
        textUpdata(node, value) {
            node.textContent = value
        },
        htmlUpdata(node, value) {
            node.innerHTML = value
        },
        modelUpdata(node, value) {
            node.value = value
        },
        bindUpdata(node, value, vm, eventName) {
            node.setAttribute('eventName', 'value')
        }
    }
}
class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        // console.log(this.el);
        // 1 获取文档碎片对象，放入内存中会减少页面的回流和重绘
        const fragment = this.node2Fragment(this.el);
        // console.log(fragment);
        //  2 编译模板
        this.compile(fragment);
        //3 追加子元素到根元素
        this.el.appendChild(fragment);

    };
    compile(fragment) {
        // 1 获取子节点
        const childNodes = fragment.childNodes;
        [...childNodes].forEach(child => {
            if (this.isElementNode(child)) {
                //是元素节点
                // 编译元素节点
                this.compileElement(child)
            } else {
                // 其他节点
                // 编译文本节点
                this.compileText(child)
            }
            // 递归
            if (child.childNodes && child.childNodes.length) {
                this.compile(child)
            }

        })
    };
    compileElement(node) {
        const attributes = node.attributes;
        [...attributes].forEach(item => {
            const { name, value } = item;
            if (this.isDirective(name)) { //这是指令 v-text v-heml....
                const [, dirctive] = name.split('-'); //text html  model on:click ...
                const [dirName, enentName] = dirctive.split(':'); // text  model on click 
                // 数据驱动视图
                compileUtil[dirName](node, value, this.vm, enentName);
                //删除有指令的标签的属性
                node.removeAttribute('v-' + dirctive);
            } else if (this.isElementNode(name)) {
                let [, eventName] = name.split('@');
                compileUtil['on'](node, value, this.vm, eventName);
            }

        })
    };
    compileText(node) {
            const content = node.textContent;
            if (/\{\{(.+?)\}\}/.test(content)) {
                compileUtil['text'](node, content, this.vm)
            }
        }
        // 判断是否是v-开头的属性
    isDirective(attrname) {
        return attrname.startsWith('v-')
    };
    isEvenDir(attrname) {
        return attrname.startsWith('@')
    };

    node2Fragment(el) {
        //   创建文档碎片
        const f = document.createDocumentFragment();
        let firstchild;
        while (firstchild = el.firstChild) {
            f.appendChild(firstchild);
        }
        return f;
    };
    isElementNode(node) {
        return node.nodeType === 1;
    }
}
class Mvue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        this.$options = options;
        if (this.$el) {
            //1： 实现数据的观察者；
            new Observer(this.$data)
                // 2：实现指令解析器
            new Compile(this.$el, this);
            this.proxyData(this.$data);
        }
    }
    proxyData(data) {
        for (let key in data) {
            Object.defineProperty(this, key, {
                get() {
                    return data[key];
                },
                set(newval) {
                    data[key] = newval;
                }
            })
        }
    }
}