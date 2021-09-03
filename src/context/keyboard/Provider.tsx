import React, { useState } from 'react';
import Context from './context'

interface Props { }

export const Provider: React.FunctionComponent<Props> = props => {

  const [data, setData] = useState({});

  function handleSet(data: any) {
    setData(data)
  }

  return (
    <Context.Provider value={{ data, setData: handleSet }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider