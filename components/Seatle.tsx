import React from 'react';
import '@/components/seatle.css';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Router  from 'next/router';

interface SeatleProps {
    emptySeats?: number;
    filledSeats?: number;
    city?: string;
    price?:number;
    arrival?:string;
  }
  


const Seatle: React.FC<SeatleProps> = ({emptySeats,filledSeats,price,city,arrival}) => {
    const notify = () => toast("En Fazla 5 adet koltuk seçebilirsiniz !");

    console.log("emptySeats",filledSeats,emptySeats,city,arrival);
    const [seatle, setSeatle] = useState<any[]>([]);
    const [warning,setWarning] =useState(Boolean);
    const [totalPrice,setTotalPrice]=useState<any>("");
    const [myCity,setCity]=useState<any>(city);
    const [myArrival,setMyArrival]=useState<any>(arrival);


    const [myPrice ,setMyPrice]=useState<any>(price)


    const array: number[] = [1, 2, 3,4,5,6,7,8,9,10,11,12];

    const handleSeatClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const clickedSeat = event.target.value;
        setSeatle(prevSeats => {
          // Eğer daha önce seçilmişse çıkar, değilse ekleyerek yeni durumu döndür
          if (prevSeats.includes(clickedSeat)) {
            return prevSeats.filter(seat => seat !== clickedSeat);
          } else {
            if (prevSeats.length < 5) {
                
                return [...prevSeats, clickedSeat];
              } else {
                setWarning(true);
                notify();
                return prevSeats; 
              }
          }
        });
      };
      useEffect(() => {
        const newTotalPrice = seatle.length * myPrice;
        setTotalPrice(newTotalPrice);
      }, [seatle]);
      if(seatle.length === 5)  notify();
 

   
      
    console.log("set",seatle);
    return (
        <div className="plane">

            <div className="exit"></div>
            <ol>
                <li>
                    {array.map(e=>(
                        <ol className="seats" key={e}>
                        <div className="left-group">
                            <li className="seat">
                                <input 
                                value={`${e}A`} 
                                type="checkbox" 
                                id={`${e}A`} 
                                disabled={seatle.length === 5 && !seatle.includes(`${e}A`)}
                                onChange={handleSeatClick}/>
                                <label htmlFor={`${e}A`}>{e}A</label>
                            </li>
                            <li className="seat">
                                <input 
                                value={`${e}B`} 
                                type="checkbox" 
                                id={`${e}B`}  
                                disabled={seatle.length === 5 && !seatle.includes(`${e}B`) }
                                onChange={handleSeatClick}/>
                                <label htmlFor={`${e}B`}>{e}B</label>
                            </li>
                        </div>
                        <div className='right-group'>
                            <li className="seat">
                                <input 
                                type="checkbox" 
                                id={`${e}D`} 
                                value={`${e}D`}
                                onChange={handleSeatClick}
                                disabled={seatle.length === 5 && !seatle.includes(`${e}D`)}
                                />
                                <label htmlFor={`${e}D`}>{e}D</label>
                            </li>
                            <li className="seat">
                                <input 
                                type="checkbox" 
                                id={`${e}E`}
                                value={`${e}E`}
                                disabled={seatle.length === 5 && !seatle.includes(`${e}E`)}
                                onChange={handleSeatClick} />
                                <label htmlFor={`${e}E`}>{e}E</label>
                            </li>
                        </div>
                    </ol>
                    ))}
                    
                </li>

            </ol>
            {warning && (<div>En fazla 6 tane koltuk seçilebilir</div>)}
            <div className="exit"></div>
            <div className='basket'>
               
                <div className='col'>
                    <div className='row'>Total Price</div>
                    <div className='row'>{totalPrice}</div>
                </div>
                <div className='col'>
                    <div className='row'>
                    <Link className='btn btn-primary payment'
        href={{
          pathname: '/payment',
          query: {
            totalPrice: totalPrice,
            city:myCity,
            arrival:myArrival,
            seatle:seatle
          }
        }}
      >
                        Ödeme Sayfası
                        </Link>
                    </div>
                </div>
               


            </div>
            <ToastContainer />
        </div>
    )
}

export default Seatle