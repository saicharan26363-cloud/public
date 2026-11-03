import express from 'express';
import { db } from './firebase'; // Imports the database config we set up earlier
import { collection, addDoc } from "firebase/firestore";

const app = express();
app.use(express.json());

// 1. Create a test endpoint to write data
app.post('/api/test-db', async (req, res) => {
  try {
    const docRef = await addDoc(collection(db, "test_connections"), {
      status: "Database connected successfully!",
      timestamp: new Date()
    });
    
    res.status(200).json({ 
      success: true, 
      message: "Data saved to Firebase!", 
      documentId: docRef.id 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: (error as Error).message 
    });
  }
});

// 2. Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});