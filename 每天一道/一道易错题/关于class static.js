class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
    }

    constructor({ newColor = "green" } = {}) {
        this.newColor = newColor;
    }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");
// colorChange方法是静态的。 静态方法仅在创建它们的构造函数中存在，并且不能传递给任何子级。
// 由于freddie是一个子级对象，函数不会传递，所以在freddie实例上不存在freddie方法：抛出TypeError。