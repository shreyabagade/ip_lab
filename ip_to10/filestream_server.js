const fs = require('fs');

// Write to the file
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
   if (err) throw err;
   console.log('File created and content written.');

   // Read the file (1st read)
   fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log('File content (1st read):', data);

      // Append to the file
      fs.appendFile('example.txt', '\nThis is an appended line.', (err) => {
         if (err) throw err;
         console.log('Content appended to the file.');

         // Read the file after append (2nd read)
         fs.readFile('example.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log('File content after append (2nd read):', data);

            // Update the file
            fs.readFile('example.txt', 'utf8', (err, data) => {
               if (err) throw err;
               const updatedContent = data.replace('Hello', 'Hi');

               fs.writeFile('example.txt', updatedContent, (err) => {
                  if (err) throw err;
                  console.log('File updated.');

                  // Read the file after update (3rd read)
                  fs.readFile('example.txt', 'utf8', (err, data) => {
                     if (err) throw err;
                     console.log('File content after update (3rd read):', data);

                     // Rename the file
                     fs.rename('example.txt', 'renamed-example.txt', (err) => {
                        if (err) throw err;
                        console.log('File renamed to renamed-example.txt.');

                     });
                  });
               });
            });
         });
      });
   });
});


// Create an empty file
const fileName = 'delete-file.txt';
fs.open(fileName, 'w', (err, fileDescriptor) => {
   if (err) throw err;

   console.log(`File '${fileName}' has been created.`);

   // Close the file after creating it
   fs.close(fileDescriptor, (err) => {
      if (err) throw err;
      console.log(`File '${fileName}' has been closed.`);

      // Delete the newly created file
      fs.unlink('delete-file.txt', (err) => {
         if (err) throw err;
         console.log('File deleted delete-file.txt.');
      });
   });
});