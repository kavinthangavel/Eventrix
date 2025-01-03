import React, { useState } from "react";
import { IEvent } from "@/lib/database/models/event.model";
import { Button } from "../ui/button";
import { registerForEvent } from "@/lib/actions/order.actions";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleRegistration = async () => {
    const order = {
      eventId: event._id,
      eventTitle: event.title,
      isFree: event.isFree,
      buyerId: userId,
    };

    await registerForEvent(order);

    if (event.isFree) {
      setShowPopup(true); // Show popup for free events
    } else {
      // Redirect to Google Form for paid events
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSfz7tZmQJLTg9PY07mneE5Qk0K_y2QUpfAgvuSOOpgHaWh6XQ/viewform?usp=header";
    }
  };

  return (
    <div>
      <Button
        type="button"
        role="link"
        size="lg"
        className="button sm:w-fit"
        onClick={handleRegistration}
      >
        {event.isFree ? "Get Registered" : "Buy Ticket"}
      </Button>

      {showPopup && (
        <div className="popup bg-white border rounded shadow-lg p-4 fixed inset-0 flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-lg font-bold mb-2">Registration Successful!</h2>
            <p>You have been successfully registered for the event.</p>
            <Button
              className="mt-4"
              onClick={() => setShowPopup(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
