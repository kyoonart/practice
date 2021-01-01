const appcontext = React.createContext({
  userName: "zh_CN",
});
const Nav=React.FC<{}>=()=>{
  const {userName} = useContext(appcontext);
  return <div>
    {userName}
  </div>
}