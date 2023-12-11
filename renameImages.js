import * as fs from 'fs';
import * as path from 'path';

// Specify the folder path where your JPG images are located
const folderPath = '\images';

// Get a list of files in the folder
const files = fs.readdirSync(folderPath);

// Filter out only JPG files
const jpgFiles = files.filter(file => path.extname(file).toLowerCase() === '.jpg');

// Rename JPG files
jpgFiles.forEach((file, index) => {
  const oldFilePath = path.join(folderPath, file);
  const newFileName = `Meta_new_name_${index + 1}.jpg`; // Adjusted naming pattern
  const newFilePath = path.join(folderPath, newFileName);

  // Rename the file
  fs.renameSync(oldFilePath, newFilePath);

  console.log(`Renamed: ${file} to ${newFileName}`);
});

console.log('Rename process completed.');
