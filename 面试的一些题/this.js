    let obj = {
        name: 'bytedance',
        getName() {
            console.log(this.kk);
        }
    }
    let fb = obj.getName;
    fb();

    function Arr(arr) {
        var len = arr.length,
            j,
            newArr = [],
            str = '';
        for (var i = 0; i < len; i++) {
            j = i;
            if (arr[i] + 1 === arr[j + 1]) {
                while (arr[j] + 1 === arr[j + 1]) {
                    str = '-->' + arr[j + 1];
                    j++;
                }
                str = arr[i] + str;
                newArr.push(str)
                i = j
            } else {
                newArr.push(arr[i].toString())
            }
        }
        console.log(newArr);
        return newArr;
    };
    Arr([0, 1, 2, 4, 5, 7, 13, 15, 16]);

    function test(a, b) {
        let a;
        console.log(a);

    }
    test(1, 2)