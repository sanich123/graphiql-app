import { changeUrlData, changeDataQuery, changeDataMutation } from "@/redux/api-data/api-data";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './search-api.module.scss';


export default function SearchApi() {

  const queryQuery = `{
    __schema {
      queryType {
        fields {
          name
          description
        }
      }
    }
  }
  `;

  const queryMutation = `{
    __schema {
      mutationType {
        fields {
          name
        }
      }
    }
  }
  `


  async function makeRequest1(endpoint: string, query: string) {
      const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({query})
      });
      const res = await response.json()
      dispatch(changeDataQuery(JSON.stringify(res)));
      console.log(res);
  }

  async function makeRequest2(endpoint: string, query: string) {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({query})
    });
    const res = await response.json()
    dispatch(changeDataMutation(JSON.stringify(res)));
    console.log(res);
}


  const urlInput = React.useRef(null);
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.apiData.urlData);


  async function changeUrl(event: React.SyntheticEvent) {
    event.preventDefault();
    const url = await urlInput.current;
    console.log(url.value);
    const dataQuery = await makeRequest1(url.value, queryQuery);
    const dataMutation = await makeRequest2(url.value, queryMutation);
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

