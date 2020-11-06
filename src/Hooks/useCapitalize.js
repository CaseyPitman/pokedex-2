import React, { useEffect } from "react";

const useCapitalize = word => {
  const [capitalizedWord, setCapitalizedWord] = useState("");

  useEffect(() => {
    setCapitalizedWord(wordcharAt(0).toUpperCase() + word.slice(1));
  }, [word]);

  return [capitalizedWord];
};

export default useCapitalize;