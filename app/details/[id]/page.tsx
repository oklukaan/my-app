"use client"
import { useEffect, useState } from "react";
import dataInformation from '@/data.json';

interface FlightData {
  id: number;
  city: string;
  flight: string;
  date: string;
  arrival: string;
  empty_seats: number;
  filled_seats: number;
  price: number;
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
    <div>
      <h1>Detail Page {targetData.id}</h1>
      <p>City: {targetData.city}</p>
      <p>Flight: {targetData.flight}</p>
      <p>Date: {targetData.date}</p>
      <p>Arrival: {targetData.arrival}</p>
      <p>Empty Seats: {targetData.empty_seats}</p>
      <p>Filled Seats: {targetData.filled_seats}</p>
      <p>Price: {targetData.price}</p>
    </div>
  );
};

export default DetailPage;
