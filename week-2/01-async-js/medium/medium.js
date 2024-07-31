const fs = require("fs").promises;

//  1  //

// async function cleanFile(filePath) {
//   try {
//     // Read the file
//     const data = await fs.readFile(filePath, "utf-8");

//     // Remove extra spaces
//     const cleanedData = data.replace(/\s+/g, " ").trim();

//     // Write the cleaned data back to the same file
//     await fs.writeFile(filePath, cleanedData, "utf-8");

//     console.log("File cleaned successfully");
//   } catch (error) {
//     console.error("Error cleaning the file:", error);
//   }
// }

// // Specify the path to the file
// const filePath = "./1-file-cleaner.md";
// cleanFile(filePath);

//  2  //

// const now = new Date();

// let hours = now.getHours();
// let minutes = now.getMinutes();
// let secs = now.getSeconds();

// secs < 10 ? (secs = "0" + secs) : null;

// let ampm;
// hours > 12 ? (ampm = "PM") : (ampm = "AM");

// console.log(`${hours}:${minutes}:${secs} ${ampm}`);
