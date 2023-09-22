import React from "react";
 import ContactUs from "./ContactUs";

const  Contact = () => {

  const detailHaandler = async (detail) => {
    try {
      const response = await fetch(
        "https://react-ecommerce-bbea7-default-rtdb.firebaseio.com/details.json",
        {
          method: "POST",
          body: JSON.stringify(detail),
        }
      );

      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
     <ContactUs onDetailMovie={detailHaandler}/>
    </div>
  );
 
}
export default Contact;
