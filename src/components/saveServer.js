const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.post("/saveData", (req, res) => {
  const requestData = req.body;

  // Save the requestData to a JSON file

  // Read the existing data from the file (if any)
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading data:", err);
      return res.status(500).json({ error: "Error reading data" });
    }

    let existingData = [];
    try {
      // Parse the existing data as JSON and convert it to an array
      existingData = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return res.status(500).json({ error: "Error parsing JSON" });
    }

    // Append the new data as an object to the array
    existingData.push(requestData);

    // Write the updated array of objects back to the JSON file
    fs.writeFile(
      "data.json",
      JSON.stringify(existingData, null, 2),
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing data:", writeErr);
          return res.status(500).json({ error: "Error writing data" });
        }

        console.log("Data added successfully!");
        res.json({ message: "Data added successfully" });
      }
    );
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
