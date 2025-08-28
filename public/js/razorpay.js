document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("checkIn").setAttribute("min", today);
  document.getElementById("checkOut").setAttribute("min", today);

  const pricePerNight = parseInt(document.getElementById("pricePerNight").innerText);
  const nightsCountEl = document.getElementById("nightsCount");
  const subTotalEl = document.getElementById("subTotal");
  const gstAmountEl = document.getElementById("gstAmount");
  const grandTotalEl = document.getElementById("grandTotal");

  function calculateTotal() {
    const checkInVal = document.getElementById("checkIn").value;
    const checkOutVal = document.getElementById("checkOut").value;

    const checkInDate = new Date(checkInVal);
    const checkOutDate = new Date(checkOutVal);

    if (checkInVal && checkOutVal && checkOutDate > checkInDate) {
      const diffTime = checkOutDate - checkInDate;
      const nights = diffTime / (1000 * 60 * 60 * 24);

      const subTotal = nights * pricePerNight;
      const gst = subTotal * 0.18;
      const grandTotal = subTotal + gst;

      nightsCountEl.innerText = nights;
      subTotalEl.innerText = subTotal.toFixed(2);
      gstAmountEl.innerText = gst.toFixed(2);
      grandTotalEl.innerText = grandTotal.toFixed(2);
    }
  }

  document.getElementById("checkIn").addEventListener("change", calculateTotal);
  document.getElementById("checkOut").addEventListener("change", calculateTotal);
});

document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!currUser) {
    alert("❌ Please login to book this listing.");
    window.location.href = "http://localhost:8080/login";
    return;
  }

  const checkInVal = document.getElementById("checkIn").value;
  const checkOutVal = document.getElementById("checkOut").value;
  const guests = document.getElementById("guests").value;

  const checkInDate = new Date(checkInVal);
  const checkOutDate = new Date(checkOutVal);

  if (isNaN(checkInDate) || isNaN(checkOutDate)) {
    alert("❌ Please select both Check-In and Check-Out dates.");
    return;
  }
  if (checkOutDate <= checkInDate) {
    alert("❌ Check-Out date must be after Check-In date.");
    return;
  }

  // Calculate nights & amount with GST
  const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
  const pricePerNight = parseInt(document.getElementById("pricePerNight").innerText);
  const subTotal = nights * pricePerNight;
  const gst = subTotal * 0.18;
  const grandTotal = subTotal + gst;

  const bookingData = {
    listing: document.getElementById("listingId").value,
    user: currUser,
    checkIn: checkInVal,
    checkOut: checkOutVal,
    guests: guests
  };

  // --- 1. Create order from backend ---
  const res = await fetch("/api/bookings/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: grandTotal }) // pass total with GST
  });

  if (!res.ok) {
    alert("❌ Failed to create payment order. Please try again.");
    return;
  }

  const order = await res.json();

  // --- 2. Open Razorpay Checkout ---
  const options = {
    key: razorpay_key_id,
    amount: order.amount,
    currency: order.currency,
    name: "StayEase Booking",
    description: "Booking Payment",
    order_id: order.id,
    handler: async function (response) {
      const verifyRes = await fetch("/api/bookings/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...response,
          booking: bookingData
        })
      });

      const result = await verifyRes.json();
      if (result.success) {
        alert("✅ Booking Confirmed!");
        window.location.reload();
      } else {
        alert("❌ Payment Failed: " + result.error);
      }
    },
    theme: { color: "#000000" }
  };

  const rzp = new Razorpay(options);
  rzp.open();
});