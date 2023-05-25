import axios from "axios";

async function getOK() {
  try {
    let response = await axios.get("http://localhost:3000/ok");
    console.log("___ getOK: ", response.status);
  } catch (e) {
    console.error("__ getOK failed: ", { ...e });
  }
}

async function getBadGateway() {
  try {
    let response = await axios.get("http://localhost:3000/badgateway");
    console.log("___ getBadGateway: ", response.status);
  } catch (e) {
    console.log("__ getBadGateway: ", e.response.status);
  }
}

getOK();
getBadGateway();
