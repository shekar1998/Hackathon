import { Uploader } from 'uploader';
import { UploadDropzone } from 'react-uploader';

// Get production API keys from Upload.io
const uploader = Uploader({
  apiKey: 'free',
});

// Customize the dropzone UI (see "customization"):
const options = { multi: true };

// Render the file upload dropzone:
const MyDropzoneComponent = () => (
  <UploadDropzone
    uploader={uploader} // Required.
    options={options} // Optional.
    width='600px' // Optional.
    height='375px' // Optional.
    onUpdate={(files) => {
      // Optional.
      if (files.length === 0) {
        console.log('No files selected.');
      } else {
        console.log('Files uploaded:');
        console.log(files.map((f) => f.fileUrl));
      }
    }}
  />
);
