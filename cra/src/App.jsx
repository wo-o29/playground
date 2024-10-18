import React, { useState, useEffect } from "react";

// Thenable 객체
const thenable = {
  then: function (onFulfilled) {
    setTimeout(() => onFulfilled("Thenable 값입니다!"), 2000);
  },
};

function App() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    async function fetchValue() {
      const result = await thenable;
      setValue(result);
    }
    fetchValue();
  }, []);

  return (
    <div>
      <h2>Thenable 값:</h2>
      {value ? <p>{value}</p> : <p>로딩 중...</p>}
    </div>
  );
}

export default App;
