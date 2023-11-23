import { useState } from "react";

function useName() {
  const storedName = localStorage.getItem("name");
  const [name, setName] = useState(storedName ? storedName : "");
  const saveName = (name: string) => {
    localStorage.setItem("name", name);
    setName(name);
  };

  return { name, setName: saveName };
}
export default useName;
