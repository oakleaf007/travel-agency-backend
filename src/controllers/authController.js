import User from "../config/userSchema.js";
import bcrypt from "bcrypt";



// signup controller
export const signUp = async (req, res) => {
    try {
        const { name, email, password, contact, address, gender, dob, id } = req.body;

        // Validation: Fixed the '!role,' syntax error from your snippet
        if (  !name || !email || !password) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const emailLower = email.toLowerCase();

   
        const saltRounds = 10;
        const hashedPass = await bcrypt.hash(password, saltRounds);

      
        const newUser = await User.create({
         
            name,
            email: emailLower,
            password: hashedPass,
       
            contact,
            address,
            gender,
            dob
        });

        res.status(201).json({ success: true, message: "User created successfully" });

    } catch (err) {
        console.error(err);
        
        if (err.code === 11000) {
            return res.status(409).json({ message: "Email or ID already exists" });
        }
        res.status(500).json({ message: err.message });
    }
};

// signin controller
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password required" });
        }

        const emailLower = email.toLowerCase();

        const user = await User.findOne({ email: emailLower });

        if (!user) {
            return res.status(404).json({ success: false, message: "No user found" });
        }

      

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const userRes = user.toObject();
        delete userRes.password;
        console.log(userRes);
      

        res.json({ 
            success: true, 
            message: "Login successful", 
           
            user:userRes
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};