import { useActionState, useEffect, useState } from "react";
import axios from "axios";
import { UserData } from "./Component/USerData";
import { ShowData } from "./Component/ShowData";
function App() {
  const [userData, setUserData] = useState([]);
  const [index,setIndex] = useState(1);

  const handleData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`
    );

    setUserData(response.data);
  };

  useEffect(() => {
    handleData();
  }, [index]);

  let showUserData = "No User Found";

  if (userData.length > 0) {
    showUserData = userData.map((elem, idx) => {
      return (
       <UserData elem={elem} idx={idx} />
      );
    });
  }

  return (
   <ShowData  showUserData={showUserData} index={index} setIndex={setIndex}/>
  );
}

export default App;
