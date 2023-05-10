import { changeUrlData } from "@/redux/api-data/api-data";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './search-api.module.scss';


export function SearchApi() {

  const [data, setData] = useState('');
  const url = 'https://countries.trevorblades.com/graphql';

  const query =`{
    __schema {
      queryType {
        fields {
          name
          description
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


  const urlInput = React.useRef(null);
  const dispatch = useDispatch();
  // const text = useSelector((state: RootState) => state.textInput.textInput);


  const changeUrl = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const url = urlInput.current;
    // dispatch(changeUrlData(url.value))
    // console.log(url.value);
  }


  return (
    <div className={styles.allSearchApi}>
      <form className={styles.formApi}>
        <button onClick={changeUrl}>Check</button>
        <input
          className={styles.inputApi}
          type="text"
          ref={urlInput}
        />
      </form>
    </div>
  );
}

