import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import "./App.css";

function App() {
  function handleSubmit() {
    console.log("submit");
  }

  return (
    <div className="App">
      <div className="background" />
      <header>
        <img src="logo.jpeg" />
      </header>
      <div className="container-1">
        <div
          style={{
            fontFamily: "inital",
            fontSize: "xxx-large",
            color: "white",
            // margin: "56px 20%",
            whiteSpace: "pre-wrap",
          }}
        >
          Prompt, Reliable, Quality Service Serving Saskatoon Since 1994
        </div>
        <div
          style={{
            fontFamily: "inital",
            fontSize: "xxx-large",
            color: "white",
            // margin: "56px 20%",
            whiteSpace: "pre-wrap",
          }}
        >
          JRL Shuttle Services
        </div>
        <div
          style={{
            fontFamily: "inital",
            fontSize: "xxx-large",
            color: "white",
            // margin: "56px 20%",
            whiteSpace: "pre-wrap",
          }}
        >
          110-309 Fairmont Drive Saskatoon SK S7M 5G7
        </div>
        <div
          style={{
            fontFamily: "inital",
            fontSize: "xxx-large",
            color: "white",
            // margin: "56px 20%",
            whiteSpace: "pre-wrap",
          }}
        >
          adm.jrlshuttleservices@gmail.com
        </div>
        <div
          style={{
            fontFamily: "inital",
            fontSize: "xxx-large",
            color: "white",
            // margin: "56px 20%",
            whiteSpace: "pre-wrap",
          }}
        >
          306-975-2222 306-220-5444
        </div>
        <div
          style={{
            fontFamily: "inital",
            fontSize: "xxx-large",
            color: "white",
            // margin: "56px 20%",
            whiteSpace: "pre-wrap",
          }}
        >
          306-975-2222 306-220-5444
        </div>
      </div>
      <div className="container-2">
        <div className="contact-us">
          <div
            style={{
              fontFamily: "inital",
              fontSize: "xxx-large",
              color: "cornflowerblue",
              margin: "56px 20%",
            }}
          >
            Contact Us
          </div>

          <form
            style={{
              padding: "0 56px",
            }}
            onSubmit={(e: any) => {
              e.preventDefault();
              console.log(e.target[0].value);
              console.log(e.target[2].value);
              console.log(e.target[4].value);
            }}
          >
            <FormControl
              style={{
                width: "100%",
              }}
            >
              <TextField
                style={{
                  marginTop: "12px",
                }}
                required
                id="email"
                label="Email address"
              />
              <TextField
                style={{
                  marginTop: "12px",
                }}
                required
                id="name"
                label="Name"
              />
              <TextField
                style={{
                  marginTop: "12px",
                }}
                id="message"
                label="Message"
                multiline
                required
                rows={4}
              />

              <Button
                style={{
                  marginTop: "12px",
                  maxWidth: "72px",
                }}
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                // className={classes.submit}
                // onClick={handleSubmit}
              >
                Submit
              </Button>
            </FormControl>
          </form>
          {/* <button>send email</button> */}
        </div>
        <iframe
          scrolling="no"
          loading="lazy"
          frameBorder="0"
          className="map"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=110-309%20Fairmont%20Drive%20Saskatoon%20SK%20S7M%205G7+(JRL%20Shuttle%20Services)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Find Population on Map</a>
        </iframe>
      </div>
      <footer>
        <span style={{ textAlign: "left" }}>
          CopyRight @2023 JRL Shuttle Services - Saskatoon - All rights reserved
        </span>
        <span style={{ textAlign: "right" }}>
          Powered by Chao Li, Sean Wang, and Will
        </span>
      </footer>
    </div>
  );
}

export default App;
