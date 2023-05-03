import React from 'react';
import Td from './Td';

export default function Trow(props) {
  return (
    <>
        {props.data.map((obj,i) =>
        {
            return (<Td  data={obj} key={i}></Td>)
        })}
    </>
  )
}
