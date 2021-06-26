interface info {
  name: string;
  age: number;
}
type dataIndex = keyof info;
const arrx: dataIndex[] = ["age", "name"];
arrx.push("name");
