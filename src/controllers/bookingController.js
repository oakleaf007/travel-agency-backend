import Booking from  "../config/bookingSchema.js"

export const createBooking = async (req, res) => {
    try {
        const { id, bookingDate, contact, email, persons, places, notification } = req.body;

        console.log(req.body)
        if (!id || !bookingDate || !contact || !email || !persons || !places) {
            return res.status(400).json({ 
                success: false, 
                message: "All fields are required to complete the booking." 
            });
        }


        const newBooking = await Booking.create({
            userId: id,
            bookingDate,
            contact,
            email,
            persons,
            places,
            notification: notification || false
        });

        res.status(201).json({
            success: true,
            message: "Your trip has been booked!",
            booking: newBooking
        });

    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong on the server.",
            error: error.message
        });
    }
};



export const getBookingById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
      
        const booking = await Booking.find({userId:id});
        console.log(booking)
        if (!booking) {
            return res.status(404).json({ 
                success: false, 
                message: "Booking not found" 
            });
        }

        res.status(200).json({
            success: true,
            data: booking
        });

    } catch (error) {
    
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ message: "Invalid Booking ID format" });
        }
        res.status(500).json({ message: error.message });
    }
};

export const deleteBooking = async(req, res)=>{
    try{
        const {id} = req.params;

    const result = await Booking.deleteOne({userId: id});
      
      if (!result) {
            return res.status(404).json({ 
                success: false, 
                message: "Booking not found" 
            });
        }
          res.status(200).json({
            success: true,
            
        });


    }catch(err){
        console.error(err);
        res.status(500).json({ message: error.message });
    }
}