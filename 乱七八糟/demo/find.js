const record = [
  {
    avatar: "http://dwz.date/dses",
    email: "chenliting@kuaishou.com",
    id: "121",
    phone: "15709255483",
    roleId: "1570",
    roleName: "陈婷婷",
    userName: "陈婷婷",
  },
  {
    avatar: "http://dwz.date/dses",
    email: "chenliting@kuaishou.com",
    id: "111",
    phone: "15709255483",
    roleId: "1570",
    roleName: "陈婷婷",
    userName: "梧",
  },
  {
    avatar: "http://dwz.date/dses",
    email: "chenliting@kuaishou.com",
    id: "124",
    phone: "15709255483",
    roleId: "1570",
    roleName: "陈婷婷",
    userName: "陈晨",
  },
  {
    avatar: "http://dwz.date/dses",
    email: "chenliting@kuaishou.com",
    id: "1242",
    phone: "15709255483",
    roleId: "1570",
    roleName: "陈婷婷",
    userName: "晨",
  },
  {
    avatar: "http://dwz.date/dses",
    email: "chenliting@kuaishou.com",
    id: "124s",
    phone: "15709255483",
    roleId: "1570",
    roleName: "陈婷婷",
    userName: "陈",
  },
];
const ids = ["1242", "124s"];
record.forEach((item) => {
  if (ids.find((id) => item.id === id)) {
    console.log(item);
  }
});

// let x = ids.find((id) => id === "1242");
// console.log(x);
// console.log([...new Set(ids)]);
for (let i = 0; i <= ids.length - 1; i++) {
  for (let j = i + 1; j <= ids.length - 1; j++) {
    if (ids[i] === ids[j]) {
      ids.splice(j, 1);
      j--;
    }
  }
}

const newIds = [];
const id = "1242";
ids.forEach((item) => {
  if (item !== id) {
    newIds.push(item);
  }
});
console.log(newIds);
