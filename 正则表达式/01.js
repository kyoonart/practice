let hd = 'sdsafnskakdbv021sa20vsavsav2222'
let nums = [...hd].filter(a => !Number.isNaN(parseInt(a))).join('')
console.log(nums);