import { useState } from "react";


export function SearchApi() {

  const [data, setData] = useState('');
  const url = 'https://countries.trevorblades.com/graphql';

  const query =`{
    __schema {
      queryType {
        fields {
          name
        }
      }
    }
  }
  `
  async function makeRequest(endpoint: string, query: string) {
      const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({query})
      });

      const res = await response.json()

      console.log(res.data.__schema)
  }

  makeRequest(url, query);


  return (
    <div className="p-[20px] bg-cyan-50 absolute top-[80px] left-[100px]">
      <form action="">
        <input type="text" />
        <button>Check</button>
      </form>
      <h1>Hello World</h1>
    </div>
  );
}

