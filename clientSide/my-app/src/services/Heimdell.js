import axios from 'axios';


function uploadFile(file, metadata) {
    const formData = new FormData();
    formData.append("file", file);
    const metadataobj = JSON.stringify(metadata);
    formData.append("metadata", metadataobj);

    axios.post("http://localhost:8080/file/upload", formData)
        .then(response => {
            console.log(response.data);
            alert("file added succesfully");


            if (response.data !== null) {
                const downloadUrl = "http://localhost:8080/file/download/" + response.data;
            } else {
                alert("Error Occurred! No file returned");
            }
        })
        .catch(error => {
            console.error(error);
            alert("Error Occurred! Unable to upload the file");
        });
}

const downloadFile = async (fileId, filename, dept, sem, sub, unit) => {
    try {
      const response = await axios.get(
        '/api/download', 
        {
          responseType: 'blob', 
          params: {
            fileId,
          },
        }
      );
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };


export const Heimdall = {
    uploadFile,
    download,
}
