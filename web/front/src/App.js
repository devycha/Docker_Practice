import React from 'react';
import './App.css';

function App() {
  const [datas, setDatas] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost/dev/data", {
      method: "GET",
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        setDatas(res.result);
      });
  }, []);




  return (
    <div className="App">
      {datas.map((data) => {
        return <div key={data.id}>{data.id}'s {data.value}</div>
      })}
    </div>
  );
}

export default App;
