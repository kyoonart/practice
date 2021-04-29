let inArr = [
  {
    companyId: "A",
    customerId: "C1",
  },
  {
    companyId: "B",
    customerId: "C2",
  },
  {
    companyId: "B",
    customerId: "C4",
  },
  {
    companyId: "A",
    customerId: "C3",
  },
  {
    companyId: "A",
    customerId: "C3",
  },
  {
    companyId: "D",
    customerId: "C3",
  },
];
let outArr = [
  {
    companyId: "A",
    customers: ["C1", "C3"],
  },
  {
    companyId: "B",
    customers: ["C2"],
  },
];
const res = [];
const map = new Map();
inArr.forEach((item, index) => {
  if (map.has(item["companyId"])) {
    res.forEach((it, i) => {
      if (it["companyId"] === item["companyId"]) {
        if (!it["customers"].includes(item["customerId"])) {
          it["customers"].push(item["customerId"]);
        }
      }
    });
  } else {
    res.push({
      companyId: item["companyId"],
      customers: [item["customerId"]],
    });
    map.set(item["companyId"], true);
  }
});
console.log(res);
