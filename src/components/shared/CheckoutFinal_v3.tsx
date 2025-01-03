import React, { useEffect, useState } from "react";
import { IEvent } from "../../lib/database/models/event.model"; // Updated import path
import { Button } from "../ui/button";

const CheckoutFinal = ({ event, userId }: { event: IEvent; userId: string }) => {
  const [transactionId, setTransactionId] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, []);

  const handleBuyNow = () => {
    alert("You've registered!");

    // Logic to save user info in the database
    const order = {
      eventId: event._id,
      buyerId: userId,
      transactionId: transactionId,
    };

    saveOrder(order);
    setShowQRCode(true);
  };

  const saveOrder = async (orderData: { eventId: string; buyerId: string; transactionId: string; }) => {
    // Call the API or function to save the order
    // Example: await saveOrderToDatabase(orderData);
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleBuyNow(); }}>
        <input
          type="text"
          placeholder="Transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          required
        />
        <Button type="submit" role="link" size="lg" className="button sm:w-fit">
          {event.isFree ? "Get Registered" : "Buy Ticket"}
        </Button>
      </form>

      {showQRCode && (
        <div className="qr-popup">
          <img src="path/to/your/gpay-qr-code.png" alt="Google Pay QR Code" />
          <button onClick={() => setShowQRCode(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutFinal;
