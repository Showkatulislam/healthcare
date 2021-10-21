import { useEffect, useState } from "react";

const useData = () => {
  const [doctors, setData] = useState([]);
  useEffect(() => {
    fetch("/Fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(er => console.log(er))
  }, []);

  return [doctors,setData];
};
export default useData;