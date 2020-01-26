import React from "react";

const LeadersInfoCard = props => (
  <div
    className="col-sm"
    style={{
      margin: "auto",
      width: "280px",
      maxWidth: "280px",
      marginBottom: "60px",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 0 10px gray",
      MozBoxShadow: "0 0 10px gray",
      WebkitBoxShadow: "0 0 10px gray",
      borderRadius: "10px"
    }}
  >
    <div>
      <div
        className="row"
        style={{
          margin: "auto",
          background: `url('${props.LeaderImg}')`,
          height: "275px",
          width: "260px",
          backgroundSize: "cover",
          boxShadow: "0 0 10px gray",
          MozBoxShadow: "0 0 10px gray",
          WebkitBoxShadow: "0 0 10px gray",
          border: "4px solid white",
          borderRadius: "10px",
          backgroundPosition: "center",
          marginTop: "-30px"
        }}
        alt=""
      />
      <div className="row" style={{}}>
        <div
          className="col-sm"
          style={{
            padding: 25,
            textAlign: "center"
          }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#727272"
            }}
          >
            {props.LeaderTitle}
          </p>
          <p
            style={{
              fontSize: 24,
              fontWeight: "bolder",
              color: "#161616",
              paddingTop: "5px"
            }}
          >
            {props.LeaderName}
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#444444",
              paddingTop: "10px"
            }}
          >
            {props.LeaderDescription}
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "bfbfbf",
              paddingTop: "10px"
            }}
          >
            {props.Verso}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LeadersInfoCard;
