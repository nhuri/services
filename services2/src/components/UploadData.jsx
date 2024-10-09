import React, { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import "@tensorflow/tfjs";
import * as cocoML from "@tensorflow-models/coco-ssd";
import { storage } from '../firebase-config';

const UploadData = () => {
  let [img, setImg] = useState(null);
  let [pred, setPrediction] = useState([]);

  useEffect(() => {
    getDownloadURL(ref(storage, "cat.jpeg")).then(function (url) {
      console.log("File available at", url);
      setImg(url);
    });
  });

  function uploadData(event) {
    let file = event.target.files[0];
    setImg(file);
    let storageRef = ref(storage, file.name);
    uploadBytes(storageRef, file).then((data) => {
      console.log(data);
    });
  }

  let imgWithNoLink = document.querySelector('img');
  console.log(imgWithNoLink)

  function loadModel() {
    cocoML.load().then(function (model) {
      console.log(model);
      model.detect(imgWithNoLink).then(function (prediction) {
        console.log(prediction);
        setPrediction(prediction);
      });
    });
  }

  return (
    <div>
      <input type="file" onChange={uploadData} />
      <img src={'cat.jpeg'} alt="" />
      <button onClick={loadModel}>Load</button>
      {pred.map(function (data) {
        return (
          <li>
            {data.class} - {Math.floor(data.score * 100)} %
          </li>
        )
      })}
    </div>
  );
};

export default UploadData;