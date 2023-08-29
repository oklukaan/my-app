"use client"
import { useEffect, useState } from "react";
import dataInformation from '@/data.json';
import Seatle from "@/components/Seatle";
import '@/app/details/[id]/details.css'


interface FlightData {
  id?: number;
  city?: string;
  flight?: string;
  date?: string;
  arrival?: string;
  empty_seats?: number;
  filled_seats?: number;
  price?: number;
}

interface DetailPageParams {
  id: string;
}

const DetailPage = ({ params }: { params: DetailPageParams }) => {
  const [targetData, setTargetData] = useState<FlightData | null>(null);

  useEffect(() => {
    const id = parseInt(params.id);
    const targetData = dataInformation.find((item) => item.id === id);
    setTargetData(targetData || null);
  }, [params.id]);

  if (!targetData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container m-0-auto">
      {/* <h1>Detail Page {targetData.id}</h1>
      <p>City: {targetData.city}</p>
      <p>Flight: {targetData.flight}</p>
      <p>Date: {targetData.date}</p>
      <p>Arrival: {targetData.arrival}</p>
      <p>Empty Seats: {targetData.empty_seats}</p>
      <p>Filled Seats: {targetData.filled_seats}</p>
      <p>Price: {targetData.price}</p> */}
      <div className="rows">
        <div className="col">
        <div className="title">Kalkış Yeri {'=>'}</div>
          <div className="title">Variş Yeri {'=>'}</div>
          <div className="title">Koltuk Fiyatı {'=>'}</div>
          <div className="title">Boş Koltuk {'=>'}</div>
          <div className="title">Dolu Koltuk {'=>'}</div>
        </div>
        <div className="col">
          <div className="text">{targetData.city}</div>
          <div className="text">{targetData.arrival}</div>
          <div className="text">{targetData.price} TL</div>
          <div className="text">{targetData.empty_seats}</div>
          <div className="text">{targetData.filled_seats}</div>
        </div>
  
      </div>
      <Seatle city={targetData.city} arrival={targetData.arrival}  price={targetData.price} emptySeats={targetData.empty_seats}  filledSeats={targetData.filled_seats}/>
      
    </div>
  );
};

export default DetailPage;
