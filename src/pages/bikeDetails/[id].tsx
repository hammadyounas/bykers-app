import React from "react";
import BikeDetailsPage from "@/components/pages/LandingPage/BikeDetails";
import Navbar from "@/components/pages/Header/Navbar";
import Footer from "@/components/pages/Footer/Footer";

interface BikeDetailsProps {
  id: string;
  _id: string;
  title: string;
  images: string[]; // Assuming images are URLs
  selling_price: string;
  condition: string;
  engine: string;
  total_mileage: string;
  petrol_capacity_per_litre: string;
  type: string;
}

const BikeDetails: React.FC<BikeDetailsProps> = ({
  id,
  title,
  _id,
  images,
  selling_price,
  condition,
  engine,
  total_mileage,
  petrol_capacity_per_litre,
  type,
}) => {
  return (
    <div>
      <Navbar />
      <BikeDetailsPage
        id={id}
        title={title}
        _id={_id}
        images={images}
        selling_price={selling_price}
        condition={condition}
        engine={engine}
        total_mileage={total_mileage}
        petrol_capacity_per_litre={petrol_capacity_per_litre}
        type={type}
      />
      <Footer />
    </div>
  );
};

export default BikeDetails;
