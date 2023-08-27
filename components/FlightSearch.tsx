"use client"

import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Link from 'next/link'
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";





interface FlightData {
  id: number;
  city: string;
  flight: string;
  date: string;
  arrival:string,
  empty_seats:number,
  filled_seats:number,
  price:number

}

interface FlightSearchProps {
  data: FlightData[];
}

const FlightSearch: React.FC<FlightSearchProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [departureCity, setDepartureCity] = useState<string>("");
  const [arrivalCity, setArrivalCity] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [searchResults, setSearchResults] = useState<FlightData[]>(data);
  const [warningMessage, setWarningMessage] = useState<string>("");
  const [value, SetValue] =useState<boolean>(false)

  
  const handleSearch = () => {
    
    if (!departureCity || !arrivalCity || !selectedDate) {
      setWarningMessage("Kalkış, varış ve tarihi boş bırakmayınız.");
      SetValue(false);
      return;
      
    }else{
      setWarningMessage("");
      SetValue(true);
    }
  
    const results: FlightData[] = data.filter(
      (item) =>
        (departureCity === "" || item.city === departureCity) &&
        (arrivalCity === "" || item.arrival === arrivalCity) &&
        (selectedDate === null || item.date === selectedDate.toLocaleDateString()) 
    );
    console.log("resul",results);
   

    setSearchResults(results);
   
  };

  const isSearchDisabled = !departureCity || !arrivalCity ||!selectedDate;

  return (
    <div className="main-form">
      <div className="custom-select">
     

      <select
        value={departureCity}
        onChange={(event) => setDepartureCity(event.target.value)}
      >

        <option value="">
          Kalkış Yeri Seçin
          </option>
        {data
        .filter((item, index, self) => self.findIndex(t => t.city === item.city) === index)
        .map((item) => (
          <option key={item.id} value={item.city}>
            {item.city}
          </option>
        ))}
      </select>
      <span className="custom-arrow"></span>
      </div>

      <div className="custom-select">
      <select
        value={arrivalCity}
        onChange={(event) => setArrivalCity(event.target.value)}
      >
        <option value="">Varış Yeri Seçin</option>
        {data
        .filter((item, index, self) => self.findIndex(t => t.city === item.city) === index)
        .map((item) => (
          <option key={item.id} value={item.city}>
            {item.city}
          </option>
        ))}
      </select>
      <span className="custom-arrow"></span>
      </div>

      <div className="custom-select">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        placeholderText="Tarih Seçin"
      />
      <span className="custom-arrow"></span>
      </div>

      
        { searchResults.length <1  && 
        (
          <div className="no-result">
            Malasef aradığınız kriterlere ait bir sefer bulunamadı
          </div>
        ) }
        {value && (
             <div className="modal-overlay">
             <div className="modal">
             <button className="close-button" onClick={()=>SetValue(false)}>X</button>
             <table className="table styled-table" >
               
             <thead>
             <tr>
             <td>Kalkış Yeri</td>
             <td>Varış Yeri</td>
             <td>Tarih</td>
             <td>Boş Koltuk</td>
             <td>Dolu Koltuk</td>
             <td>Numara</td>
             <td>Fiyat</td>
             <td>Detay</td>
             </tr>
             </thead>
           <tbody>
 
        
         { searchResults.map((item) => (
           <tr key={item.id}>
             <td>{item.city}</td>
             <td>{item.arrival}</td>
             <td>{item.date}</td>
             <td>{item.empty_seats}</td>
             <td>{item.filled_seats}</td>
             <td>{item.flight}</td>
             <td>{item.price} TL</td>
             <td> <Link href={`/details/${item.id}`}>Git <AiOutlineArrowRight/></Link></td>
 
           </tr>
        
         ))}
             </tbody>
             </table>
           </div>
         </div>

        )}
       
      <button className="search" onClick={handleSearch}>Aramayı Başlat</button>
      <p className="error-message">{warningMessage}</p>
    </div>
  );
};

export default FlightSearch;
