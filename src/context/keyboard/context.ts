import React from 'react';

const Context = React.createContext<{data:any,setData:(any:any) => void}>({data: {},setData:() => {} });

export default Context