let img = document.document.getElementsByTagName("img");
const observer = new IntersectionObserver(changes => {
    //changes 是被观察的元素集合
    for (let i = 0, len = changes.length; i < len; i++) {
        let change = changes[i];
        // 通过这个属性判断是否在视口中
        if (change.isIntersecting) {
            const imgElement = change.target;
            imgElement.src = imgElement.getAttribute("data-src");
            observer.unobserve(imgElement);
        }
    }
})
observer.observe(img);

// 利用了浏览器自带的api IntersectionObserver  实现了监听scroll 节流 判断是否在视口中三大功能