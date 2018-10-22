import firebase from "../config/firebase";

export default {
  // Gets all Categories
  uploadImage: function(userId, file, name, cb) {
    var storageRef = firebase.storage().ref();

    var metadata = {
      contentType: "image"
    };
    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef
      .child(`${userId}/` + (name ? name : file.name))
      .put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed", // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused": // or 'paused'
            //console.log("Upload is paused");
            break;
          case "running": // or 'running'
            //console.log("Upload is running");
            break;
        }
      },
      function(error) {
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;

          case "storage/canceled":
            // User canceled the upload
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          cb(downloadURL);
        });
      }
    );
  }
};
