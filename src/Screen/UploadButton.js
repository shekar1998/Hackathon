import React, { useCallback, useState } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';

export function MyDropzone() {
  const [Files, setFiles] = useState([]);
  const [Files1, setFiles1] = useState('');

  //   const onDrop = useCallback((acceptedFiles) => {
  //     console.log(acceptedFiles);
  //     return acceptedFiles;
  //   }, []);
  //   // @ts-ignore
  //   setfirst(onDrop);

  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function humanFileSize(bytes, dp = 1) {
    const thresh = 1024;

    if (Math.abs(bytes) < thresh) {
      return bytes + ' B';
    }

    const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let u = -1;
    const r = 10 ** dp;

    do {
      bytes /= thresh;
      ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

    return bytes.toFixed(dp) + ' ' + units[u];
  }

  return (
    <div className='fileUploadMainContainer'>
      <Dropzone onDrop={(acceptedFiles) => setFiles(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              {/* <input {...getInputProps()} /> */}
              <div className='fileUploadContain'>
                <div className='UploadContainer'>
                  <div className='Upload'>
                    <img
                      className='UploadImage'
                      src='https://cdn-icons-png.flaticon.com/128/5305/5305480.png'
                      alt='Italian Trulli'
                    />
                    <div className='FileType'>Browse .jpg, .png, .gif</div>
                  </div>
                  <button className='UploadButton'>Browse Files</button>
                </div>
              </div>
            </div>
            <div className='SelecteFileContanier'>
              {Files.length != 0 ? (
                Files.map((data) => {
                  let imageFile =
                    data.path.indexOf('.xlsx') >= 0 || data.path.indexOf('cvs') >= 0
                      ? 'https://cdn-icons-png.flaticon.com/128/4726/4726040.png'
                      : 'https://cdn-icons-png.flaticon.com/128/4725/4725970.png';
                  let size = humanFileSize(data.size);

                  return (
                    <div className='SelectedFileMain'>
                      <div className='SelectedFileNameContainer'>
                        <img className='FileView' src={imageFile} alt='Italian Trulli' />
                        <div className='FileViewDetails'>
                          <p className='SelecteFileText'>{data.path}</p>
                          <p className='SelecteFileTextSize'>{size}</p>
                        </div>
                      </div>
                      <img
                        className='DeletingFileButton'
                        src='https://cdn-icons-png.flaticon.com/128/1828/1828843.png'
                        alt='Italian Trulli'
                      />
                    </div>
                  );
                })
              ) : (
                <div>File Not Uploaded</div>
              )}
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}
