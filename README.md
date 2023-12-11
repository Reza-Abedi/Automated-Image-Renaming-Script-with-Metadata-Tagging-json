# Automated-Image-Renaming-Script-with-Metadata-Tagging-json
In various scenarios, users may find the need to organize and rename multiple image files efficiently. Whether for archiving, categorization, or any other purpose, a well-structured naming convention enhances file management. This script addresses this need by automating the process of renaming JPG images within a specified folder.

This Node.js script provides a convenient solution for renaming a batch of JPG images within a specified folder. The script utilizes the File System (fs) and Path modules to navigate and manipulate files. With a focus on simplicity and customization, the script renames JPG files in the targeted folder, appending a "Meta_" prefix to each file name, along with an incremented index. This approach ensures a systematic and organized naming convention, allowing users to easily identify and manage their image files.


##Features:
###Modularity: 
The script employs ES module syntax, showcasing the use of modern JavaScript features.
Ease of Use: Users only need to specify the folder path, and the script handles the rest.
Customization: Users can easily adjust the naming pattern by modifying the newFileName variable, tailoring it to their preferences.

## Usage:
###Installation: 
Ensure Node.js is installed on the system.
###Configuration: 
Set the folderPath variable to the desired folder containing JPG images.
### Execution: 
Run the script using the command node script_name.js.
### Example:
Assuming a folder path of \images, the script renames JPG files to follow the pattern "Meta_new_name_index.jpg."


Author: M.Reza Abedi 
