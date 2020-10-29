let inArr = [{
        companyId: 'A',
        customerId: 'C1'
    },
    {
        companyId: 'B',
        customerId: 'C2',
    },
    {
        companyId: 'B',
        customerId: 'C4',
    },
    {
        companyId: 'A',
        customerId: 'C3'
    },
    {
        companyId: 'D',
        customerId: 'C3'
    }

]
let outArr = [{
        companyId: 'A',
        customers: ['C1', 'C3']
    },
    {
        companyId: 'B',
        customers: ['C2']
    }
]
let map = new Map()
let res = []
for (let i = 0; i < inArr.length; i++) {
    if (!map.has(inArr[i].companyId)) {
        map.set(inArr[i].companyId, inArr[i])
    } else {
        let obj = Array.isArray(map.get(inArr[i].companyId).customerId) ? map.get(inArr[i].companyId).customerId : [map.get(inArr[i].companyId).customerId]
        obj.push(inArr[i].customerId)
        let res = Object.assign({}, {
            companyId: inArr[i].companyId,
            customerId: obj
        })
        map.set(inArr[i].companyId, res)
    }
}
for (const k of map) {
    console.log(k)
    if (!Array.isArray(k[1].customerId)) {
        let id = [k[1].customerId]
        let obj = { companyId: k[0], customerId: id }
        res.push(obj)
    } else {
        res.push(k[1])
    }
}
console.log(inArr)
console.log(res);