/* =========================================================
   ROOM DATA
========================================================= */

const rooms = [

    {
        id: 1,
        name: "Standard Room",
        type: "Standard",
        price: 3500,
        guests: 2,
        size: "280 sq.ft",
        bed: "Queen Bed",
        rating: 4.5,
        available: true,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
        description:
            "A comfortable and elegant room designed for a relaxing stay. Perfect for couples and solo travellers.",
        features: [
            "📶 Free Wi-Fi",
            "❄️ Air Conditioning",
            "🚿 Private Bathroom",
            "📺 Smart TV",
            "☕ Tea & Coffee",
            "🧹 Daily Housekeeping"
        ]
    },

    {
        id: 2,
        name: "Deluxe Room",
        type: "Deluxe",
        price: 5500,
        guests: 3,
        size: "420 sq.ft",
        bed: "King Bed",
        rating: 4.8,
        available: true,
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
        description:
            "Spacious deluxe accommodation featuring elegant interiors, premium amenities and beautiful views.",
        features: [
            "📶 Free Wi-Fi",
            "❄️ Air Conditioning",
            "🛁 Luxury Bathroom",
            "📺 Smart TV",
            "🍳 Breakfast Included",
            "🏊 Pool Access"
        ]
    },

    {
        id: 3,
        name: "Premium Room",
        type: "Premium",
        price: 7000,
        guests: 3,
        size: "520 sq.ft",
        bed: "King Bed",
        rating: 4.9,
        available: true,
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=85",
        description:
            "Enjoy premium comfort with beautifully designed interiors, larger living space and upgraded amenities.",
        features: [
            "📶 High-Speed Wi-Fi",
            "❄️ Air Conditioning",
            "🛁 Bathtub",
            "📺 Smart TV",
            "🍳 Breakfast Included",
            "🌅 Garden View"
        ]
    },

    {
        id: 4,
        name: "Luxury Suite",
        type: "Suite",
        price: 9500,
        guests: 4,
        size: "750 sq.ft",
        bed: "King Bed",
        rating: 5.0,
        available: true,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85",
        description:
            "Our most luxurious accommodation with a separate living area, premium interiors and exclusive services.",
        features: [
            "📶 Premium Wi-Fi",
            "❄️ Central AC",
            "🛁 Luxury Bathtub",
            "📺 55-inch Smart TV",
            "🍳 Breakfast Included",
            "🌅 Resort View"
        ]
    },

    {
        id: 5,
        name: "Garden Deluxe",
        type: "Deluxe",
        price: 6000,
        guests: 3,
        size: "450 sq.ft",
        bed: "King Bed",
        rating: 4.8,
        available: true,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=85",
        description:
            "A peaceful deluxe room overlooking the lush resort gardens.",
        features: [
            "📶 Free Wi-Fi",
            "❄️ Air Conditioning",
            "🌿 Garden View",
            "📺 Smart TV",
            "🍳 Breakfast",
            "🧹 Housekeeping"
        ]
    },

    {
        id: 6,
        name: "Royal Suite",
        type: "Suite",
        price: 12000,
        guests: 4,
        size: "900 sq.ft",
        bed: "King Bed",
        rating: 5.0,
        available: false,
        image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1000&q=85",
        description:
            "A royal experience with spacious interiors and exclusive resort privileges.",
        features: [
            "📶 Premium Wi-Fi",
            "❄️ Central AC",
            "🛁 Jacuzzi",
            "📺 Smart TV",
            "🍽️ Private Dining",
            "🌅 Panoramic View"
        ]
    }

];


/* =========================================================
   VARIABLES
========================================================= */

let selectedRoom = null;
let selectedPaymentMethod = "UPI";


/* =========================================================
   LOAD ROOMS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderRooms();

    setMinimumDates();

});


/* =========================================================
   RENDER ROOM CARDS
========================================================= */

function renderRooms(filter = "all") {

    const container = document.getElementById("roomsContainer");

    container.innerHTML = "";

    let filteredRooms = rooms;

    if (filter !== "all") {

        filteredRooms = rooms.filter(
            room => room.type === filter
        );

    }


    filteredRooms.forEach(room => {

        const card = document.createElement("div");

        card.className = "room-card";

        card.innerHTML = `

            <div
                class="room-image"
                style="background-image:url('${room.image}')"
            >

                <span class="room-status ${
                    room.available
                    ? "available"
                    : "unavailable"
                }">

                    ${
                        room.available
                        ? "● Available"
                        : "● Booked"
                    }

                </span>

            </div>


            <div class="room-info">

                <div class="room-type">
                    ${room.type.toUpperCase()}
                </div>

                <h3>${room.name}</h3>

                <div class="rating">
                    ★★★★★ ${room.rating}
                </div>

                <div class="room-features">

                    <span>👤 ${room.guests}</span>

                    <span>🛏 ${room.bed}</span>

                    <span>📐 ${room.size}</span>

                </div>


                <div class="room-bottom">

                    <div class="price">

                        <strong>
                            ₹${room.price.toLocaleString("en-IN")}
                        </strong>

                        <span>/ night</span>

                    </div>


                    <div class="room-actions">

                        <button
                            class="details-btn"
                            onclick="viewRoom(${room.id})"
                        >
                            Details
                        </button>

                        <button
                            class="book-btn"
                            onclick="openBooking(${room.id})"
                            ${!room.available ? "disabled" : ""}
                        >
                            ${room.available ? "Book Now" : "Booked"}
                        </button>

                    </div>

                </div>

            </div>
        `;


        container.appendChild(card);

    });

}


/* =========================================================
   FILTER ROOMS
========================================================= */

function filterRooms(type, button) {

    document
        .querySelectorAll(".filter-btn")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    renderRooms(type);

}


/* =========================================================
   VIEW ROOM DETAILS
========================================================= */

function viewRoom(roomId) {

    const room = rooms.find(r => r.id === roomId);

    if (!room) return;


    const content = document.getElementById("roomDetailsContent");

    content.innerHTML = `

        <p class="section-label">
            ${room.type.toUpperCase()} ROOM
        </p>

        <h2>${room.name}</h2>

        <img
            class="detail-image"
            src="${room.image}"
            alt="${room.name}"
        >

        <div class="rating">
            ★★★★★ ${room.rating} / 5
        </div>

        <div class="detail-price">
            ₹${room.price.toLocaleString("en-IN")}
            <small>/ night</small>
        </div>

        <p style="color:#707871;line-height:1.7">
            ${room.description}
        </p>

        <div class="detail-features">

            ${room.features.map(feature => `
                <div class="detail-feature">
                    ${feature}
                </div>
            `).join("")}

        </div>

        <p style="margin-bottom:15px">
            👤 Maximum ${room.guests} guests
            &nbsp;&nbsp; • &nbsp;&nbsp;
            🛏 ${room.bed}
            &nbsp;&nbsp; • &nbsp;&nbsp;
            📐 ${room.size}
        </p>

        <button
            class="full-book-btn"
            onclick="openBooking(${room.id})"
            ${!room.available ? "disabled" : ""}
        >

            ${
                room.available
                ? "Book This Room →"
                : "Currently Unavailable"
            }

        </button>

    `;

    openModal("roomModal");

}


/* =========================================================
   OPEN BOOKING
========================================================= */

function openBooking(roomId) {

    const room = rooms.find(r => r.id === roomId);

    if (!room || !room.available) return;

    selectedRoom = room;


    document.getElementById("bookingRoomInfo").innerHTML = `

        <div class="booking-room-summary">

            <strong>${room.name}</strong>

            <span style="float:right">
                ₹${room.price.toLocaleString("en-IN")} / night
            </span>

            <br>

            <small>
                ${room.type} • ${room.bed} • Up to ${room.guests} guests
            </small>

        </div>

    `;


    const checkIn = document.getElementById("checkIn").value;

    const checkOut = document.getElementById("checkOut").value;

    const guests = document.getElementById("guests").value;


    if (checkIn) {

        document.getElementById("bookingCheckIn").value = checkIn;

    }

    if (checkOut) {

        document.getElementById("bookingCheckOut").value = checkOut;

    }

    document.getElementById("bookingGuests").value = guests;


    updatePrice();


    closeModal("roomModal");

    openModal("bookingModal");

}


/* =========================================================
   PRICE CALCULATION
========================================================= */

function calculateNights() {

    const checkIn =
        document.getElementById("bookingCheckIn").value;

    const checkOut =
        document.getElementById("bookingCheckOut").value;


    if (!checkIn || !checkOut) return 0;


    const start = new Date(checkIn);

    const end = new Date(checkOut);


    const difference =
        end.getTime() - start.getTime();


    return Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

}


function updatePrice() {

    if (!selectedRoom) return;


    const nights = calculateNights();


    if (nights <= 0) {

        document.getElementById("priceSummary").innerHTML = `

            <p style="color:#a33232">
                Please select a valid check-in and check-out date.
            </p>

        `;

        return;

    }


    const roomCost =
        selectedRoom.price * nights;


    const taxes =
        Math.round(roomCost * 0.12);


    const total =
        roomCost + taxes;


    document.getElementById("priceSummary").innerHTML = `

        <div class="price-line">

            <span>
                ₹${selectedRoom.price.toLocaleString("en-IN")}
                × ${nights} night(s)
            </span>

            <strong>
                ₹${roomCost.toLocaleString("en-IN")}
            </strong>

        </div>


        <div class="price-line">

            <span>Taxes & Fees (12%)</span>

            <strong>
                ₹${taxes.toLocaleString("en-IN")}
            </strong>

        </div>


        <div class="price-line total-line">

            <span>Total</span>

            <strong>
                ₹${total.toLocaleString("en-IN")}
            </strong>

        </div>

    `;

}


/* Update price whenever dates change */

document.addEventListener("change", event => {

    if (
        event.target.id === "bookingCheckIn" ||
        event.target.id === "bookingCheckOut"
    ) {

        updatePrice();

    }

});


/* =========================================================
   CHECK AVAILABILITY
========================================================= */

function checkAvailability() {

    const checkIn =
        document.getElementById("checkIn").value;

    const checkOut =
        document.getElementById("checkOut").value;


    if (!checkIn || !checkOut) {

        alert("Please select both check-in and check-out dates.");

        return;

    }


    if (new Date(checkOut) <= new Date(checkIn)) {

        alert("Check-out date must be after check-in date.");

        return;

    }


    document
        .getElementById("rooms")
        .scrollIntoView({ behavior: "smooth" });


    setTimeout(() => {

        alert(
            "Great! Available rooms are shown below."
        );

    }, 500);

}


/* =========================================================
   CONTINUE TO PAYMENT
========================================================= */

function continueToPayment() {

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const checkIn =
        document.getElementById("bookingCheckIn").value;

    const checkOut =
        document.getElementById("bookingCheckOut").value;


    if (!name) {

        alert("Please enter your full name.");

        return;

    }


    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;

    }


    if (!checkIn || !checkOut) {

        alert("Please select your check-in and check-out dates.");

        return;

    }


    const nights = calculateNights();


    if (nights <= 0) {

        alert("Please select valid dates.");

        return;

    }


    if (!selectedRoom.available) {

        alert("Sorry, this room is no longer available.");

        return;

    }


    const guests =
        document.getElementById("bookingGuests").value;


    if (Number(guests) > selectedRoom.guests) {

        alert(
            `This room allows maximum ${selectedRoom.guests} guests.`
        );

        return;

    }


    const roomCost =
        selectedRoom.price * nights;


    const taxes =
        Math.round(roomCost * 0.12);


    const total =
        roomCost + taxes;


    selectedRoom.currentBooking = {

        name,
        phone,
        checkIn,
        checkOut,
        guests,
        nights,
        roomCost,
        taxes,
        total

    };


    document.getElementById("paymentSummary").innerHTML = `

        <div class="confirmation-box">

            <div class="confirmation-row">

                <span>Room</span>

                <strong>
                    ${selectedRoom.name}
                </strong>

            </div>

            <div class="confirmation-row">

                <span>Stay</span>

                <strong>
                    ${nights} Night(s)
                </strong>

            </div>

            <div class="confirmation-row">

                <span>Guest</span>

                <strong>
                    ${name}
                </strong>

            </div>

            <div class="confirmation-row">

                <span>Total Amount</span>

                <strong>
                    ₹${total.toLocaleString("en-IN")}
                </strong>

            </div>

        </div>

    `;


    closeModal("bookingModal");

    openModal("paymentModal");

}


/* =========================================================
   PAYMENT METHOD
========================================================= */

function selectPayment(method, button) {

    selectedPaymentMethod = method;


    document
        .querySelectorAll(".payment-method")
        .forEach(btn => btn.classList.remove("active"));


    button.classList.add("active");


    const fields =
        document.getElementById("paymentFields");


    if (method === "UPI") {

        fields.innerHTML = `

            <label>UPI ID</label>

            <input
                type="text"
                id="upiId"
                placeholder="example@upi"
            >

        `;

    }


    else if (method === "Card") {

        fields.innerHTML = `

            <label>Card Number</label>

            <input
                type="text"
                maxlength="16"
                placeholder="XXXX XXXX XXXX XXXX"
            >

            <br><br>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">

                <input
                    type="text"
                    placeholder="MM/YY"
                >

                <input
                    type="password"
                    placeholder="CVV"
                >

            </div>

        `;

    }


    else {

        fields.innerHTML = `

            <label>Select Bank</label>

            <select style="width:100%;padding:13px;border:1px solid #ddd;border-radius:5px">

                <option>State Bank of India</option>
                <option>HDFC Bank</option>
                <option>ICICI Bank</option>
                <option>Axis Bank</option>
                <option>Punjab National Bank</option>

            </select>

        `;

    }

}


/* =========================================================
   MAKE PAYMENT
========================================================= */

function makePayment() {

    if (!selectedRoom || !selectedRoom.currentBooking) {

        alert("Booking information missing.");

        return;

    }


    const booking = selectedRoom.currentBooking;


    const bookingId =
        "PRS" +
        Date.now().toString().slice(-6);


    const bookingData = {

        id: bookingId,

        roomId: selectedRoom.id,

        room: selectedRoom.name,

        name: booking.name,

        phone: booking.phone,

        checkIn: booking.checkIn,

        checkOut: booking.checkOut,

        guests: booking.guests,

        nights: booking.nights,

        amount: booking.total,

        paymentMethod: selectedPaymentMethod,

        status: "Confirmed",

        createdAt: new Date().toISOString()

    };


    let bookings =
        JSON.parse(
            localStorage.getItem("paradiseBookings")
        ) || [];


    bookings.push(bookingData);


    localStorage.setItem(
        "paradiseBookings",
        JSON.stringify(bookings)
    );


    /*
       Mark room unavailable
    */

    selectedRoom.available = false;


    renderRooms();


    closeModal("paymentModal");


    document.getElementById("confirmationDetails").innerHTML = `

        <div class="confirmation-box">

            <div class="confirmation-row">

                <span>Booking ID</span>

                <strong>${bookingId}</strong>

            </div>

            <div class="confirmation-row">

                <span>Guest</span>

                <strong>${booking.name}</strong>

            </div>

            <div class="confirmation-row">

                <span>Room</span>

                <strong>${selectedRoom.name}</strong>

            </div>

            <div class="confirmation-row">

                <span>Check-in</span>

                <strong>${formatDate(booking.checkIn)}</strong>

            </div>

            <div class="confirmation-row">

                <span>Check-out</span>

                <strong>${formatDate(booking.checkOut)}</strong>

            </div>

            <div class="confirmation-row">

                <span>Payment</span>

                <strong>₹${booking.total.toLocaleString("en-IN")}</strong>

            </div>

        </div>

    `;


    openModal("confirmationModal");

}


/* =========================================================
   MY BOOKINGS
========================================================= */

function openMyBookings() {

    const bookings =
        JSON.parse(
            localStorage.getItem("paradiseBookings")
        ) || [];


    const container =
        document.getElementById("myBookingsContent");


    if (bookings.length === 0) {

        container.innerHTML = `

            <div class="no-bookings">

                <div style="font-size:50px">
                    🧳
                </div>

                <h3>No bookings yet</h3>

                <p>
                    Your confirmed reservations will appear here.
                </p>

            </div>

        `;

    }


    else {

        container.innerHTML = bookings
            .slice()
            .reverse()
            .map(booking => `

                <div class="booking-item">

                    <div class="booking-item-header">

                        <span class="booking-id">
                            ${booking.id}
                        </span>

                        <span class="confirmed-badge">
                            ✓ CONFIRMED
                        </span>

                    </div>


                    <h3>
                        ${booking.room}
                    </h3>


                    <p>
                        👤 ${booking.name}
                    </p>

                    <p>
                        📅
                        ${formatDate(booking.checkIn)}
                        →
                        ${formatDate(booking.checkOut)}
                    </p>

                    <p>
                        👥 ${booking.guests} Guest(s)
                    </p>

                    <p>
                        💳
                        ${booking.paymentMethod}
                    </p>


                    <div style="
                        margin-top:15px;
                        font-size:18px;
                        font-weight:700;
                        color:#ad7b45;
                    ">

                        ₹${booking.amount.toLocaleString("en-IN")}

                    </div>

                </div>

            `)
            .join("");

    }


    openModal("myBookingsModal");

}


/* =========================================================
   DATE FORMAT
========================================================= */

function formatDate(dateString) {

    const date = new Date(dateString);


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   MODALS
========================================================= */

function openModal(id) {

    document
        .getElementById(id)
        .classList.add("show");

}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("show");

}


/* Close modal by clicking outside */

document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            modal.classList.remove("show");

        }

    });

});


/* =========================================================
   SET MINIMUM DATES
========================================================= */

function setMinimumDates() {

    const today =
        new Date().toISOString().split("T")[0];


    document.getElementById("checkIn").min = today;

    document.getElementById("checkOut").min = today;

    document.getElementById("bookingCheckIn").min = today;

    document.getElementById("bookingCheckOut").min = today;

}