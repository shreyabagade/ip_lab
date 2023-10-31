const fs = require('fs');

// File path
const filePath = 'example.txt';

// Task: Create a file
fs.writeFile(filePath, 'This is the initial content.', (err) => {
  if (err) throw err;
  console.log('File created successfully.');

  // Task: Read data from the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data read from the file:', data);

    // Task: Write data to the file
    const newData = 'New content added.';
    fs.writeFile(filePath, newData, (err) => {
      if (err) throw err;
      console.log('Data written to the file.');

      // Task: Rename the file
      const newFilePath = 'renamed_file.txt';
      fs.rename(filePath, newFilePath, (err) => {
        if (err) throw err;
        console.log('File renamed successfully.');

        // Task: Append data to the file
        const additionalData = '\nAdditional data appended.';
        fs.appendFile(newFilePath, additionalData, (err) => {
          if (err) throw err;
          console.log('Data appended to the file.');

          // Task: Read the updated data from the file
          fs.readFile(newFilePath, 'utf8', (err, updatedData) => {
            if (err) throw err;
            console.log('Updated data read from the file:', updatedData);

            // Task: Delete the file
            fs.unlink(newFilePath, (err) => {
              if (err) throw err;
              console.log('File deleted successfully.');
            });
          });
        });
      });
    });
  });
});
