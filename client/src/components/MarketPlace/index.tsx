import React,{ useState, useEffect } from 'react';
import Layout from '../Layout';
import { Component } from './Card';
import axios from 'axios';
import { url } from '@/env';


import { useAccount} from "wagmi";



interface Drug {
  drugName: string;
  compositions: Composition[];
  units: number;
  totalDosage: number;
  price: number;
  expiryDate: string;
}
interface Composition {
  name: string;
  dosage: string;
}

interface Product extends Drug {
  vendorWalletAddress: string;
  _id:string
}



const MarketPlace: React.FC = () => {

  const [data, setData] = useState<Product[]>();
  const { isConnected, address } = useAccount();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(()=>{
    const fetchData = () => {
      try {
        const body={address:address}

        axios.post(url+'/read/getItems',body)
        .then((response)=>{
          setData(response.data);
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  },[]);


  const p: Product = {
    drugName: "Dolo",
    compositions: [{ name: "Acetaminophen", dosage: "500" },
    { name: "Caffeine", dosage: "65" }
    ],
    units: 100,
    totalDosage: 56500,
    price: 29.99,
    expiryDate: "2025-12-31",
    vendorWalletAddress: "0x123abc456def",
    _id:"123"
  }

  return (
    <Layout >

      {data === undefined ? (
        <div>Fetching data from Backend...</div>
      ) : (
        <div className="flex flex-col items-center py-12 px-4 lg:px-20">
          {data.map((item) => (
            <Component key={item._id} data={item} /> // Use key prop for performance
          ))}
        </div>
      )}
    </Layout>
  );
};

export default MarketPlace;
