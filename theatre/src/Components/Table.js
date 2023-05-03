import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Trow from './Trow';
import Userdata from './Userdata';

export default function Table() {

    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [movie, setMovie] = useState('');
    const [basicprice, setBasicprice] = useState('');
    const [noofBookedSeat, setNoofBookedSeat] = useState('');
    const [totalamount, setTotalamount] = useState('');
    const [tax, setTax] = useState('');


    useEffect(() =>
    {
        const f = async () =>
        {
            const response = await axios.get('Movies.json');
            setData([response.data]);
            setMovie(response.data.MovieName);
            setBasicprice(response.data.BasicPrice);
        } 
        f()
    },[]);

    useEffect(() =>
    {
        for(let obj of data)
        {
            setRows([obj.Rows]);
        }
    },[data])


  return (
    <div>
        <table className='border border-2'>
            <tbody>
                {rows.map((obj,i)=>
                {
                    return (<Trow data={obj} key={i} setNoofBookedSeat={setNoofBookedSeat} totalamount={totalamount} tax={tax}></Trow>)
                })}
            </tbody>    
        </table>
          <Userdata movie={movie} noofBookedSeat={noofBookedSeat} totalamount={totalamount} tax={tax}></Userdata>
    </div>
  )
}
