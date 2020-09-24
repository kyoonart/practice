class HashTable {
    constructor() {
        this.items = {};
    }
    put(key, value) {
        const hash = this.keyToHash(key);
        this.items[hash] = value;
    }
    get(key) {
        return this.items[this.keyToHash(key)];
    }
    remove(key) {
        delete this.items[this.keyToHash(key)];
    }
    keyToHash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        hash = hash % 37; // 为了避免 hash 的值过⼤
        return hash;
    }
}
let kkb = new HashTable();
kkb.put("name", "kaikeba");
kkb.put("age", "6");
kkb.put("best", "⼤圣⽼师");
console.log(kkb.get("name"));
console.log(kkb.get("best"));
kkb.remove("name");
console.log(kkb.get("name"));