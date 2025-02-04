const fs = require('fs');
const path = require('path');

// Specify the directory containing your Markdown files
const docsDir = path.join(__dirname, 'content', 'docs'); // Corrected path

// Function to update image tags
const updateImageTags = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf-8');
    const updatedContent = content.replace(/<img src="([^"]+)"(.*?)\/?>/g, (match, src, attrs) => {
        // Add width attribute if it doesn't exist
        if (!attrs.includes('width=')) {
            return `<img src="${src}" width="YOUR_WIDTH_VALUE" alt="Description of the image" />`; // Update width value and alt text
        }
        return match; // Return unchanged if width already exists
    });

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
};

// Read all Markdown files in the specified directory
const updateMarkdownFiles = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            updateMarkdownFiles(filePath); // Recursively update in subdirectories
        } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
            updateImageTags(filePath);
        }
    });
};

// Start the update process
updateMarkdownFiles(docsDir);
console.log('Image tags updated successfully!');
