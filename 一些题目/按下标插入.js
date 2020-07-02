function injectSections(arr1, arr2) {
    if (arr1.length < 0 && arr2.length < 0) {
        return;
    }
    arr2.sort((a, b) => a.index - b.index);
    let arr = [],
        j = 0;
    arr1.forEach((item, index) => {
        arr2[j] && arr2[j].index === index && arr.push(arr2[j++].content);
        arr.push(arr1[index]);
    });
    return arr;
}
console.log(
    injectSections(
        ["item1", "item2", "item3", "item4", "item5"],
        [
            { content: "section1", index: 0 },
            { content: "section2", index: 2 },
        ]
    )
);
