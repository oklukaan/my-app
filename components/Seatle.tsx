import React from 'react';
import '@/components/seatle.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SeatleProps {
    emptySeats?: number;
    filledSeats?: number;
  }
  


const Seatle: React.FC<SeatleProps> = ({emptySeats,filledSeats}) => {
    const notify = () => toast("En Fazla 5 adet koltuk seçebilirsiniz !");

    console.log("emptySeats",filledSeats,emptySeats);
    const [seatle, setSeatle] = useState<any[]>([]);
    const [warning,setWarning] =useState(Boolean);


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
            <ToastContainer />
        </div>
    )
}

export default Seatle