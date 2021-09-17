// 基本的思路

function useScroll() {
  const [value, setValue] = useState(0);
  React.useEffect(() => {
    const onScroll = (e) => {
      setValue(
        e.target.scrollTop || window.pageYOffset || document.body.scrollTop
      );
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return value;
}
