import Destination from "../config/placeSchema.js";




export const createDestination = async (req, res) => {
    try {
        console.log(req.body);
       
        const { image, place, price, days, description } = req.body;

      
        if (!image || !place || !price || !days || !description) {
            return res.status(400).json({ 
                success: false, 
                message: "Please fill all fields" 
            });
        }

     
        const newDestination = new Destination({
            image,
            place,
            price,
            days,
            description
        });

       
        await newDestination.save();

        res.status(201).json({
            success: true,
            message: "Destination added successfully!",
            data: newDestination
        });

    } catch (error) {
        console.error("Controller Error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Internal Server Error" 
        });
    }
};

export const getPlaces = async(req, res)=>{

    try{
        const places = await Destination.find().sort({createdAt: -1});
        res.status(200).json({
            success: true,
            count: places.length,
            data: places
        });
    }catch (error) {
        console.error("Fetch Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch places"
        });
    }

}