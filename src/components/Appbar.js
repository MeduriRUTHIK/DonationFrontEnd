import React from "react";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        HumbleHands
      </Link>
      <div style={styles.navLinks}>
        <Link to="/life" style={styles.link}>
          Life
        </Link>
        <Link to="/csr" style={styles.link}>
          CSR
        </Link>
        <Link to="/explore-campaigns" style={styles.link}>
          Explore Campaigns
        </Link>
        <Link to="/start-campaign" style={styles.link}>
          Start A Campaign
        </Link>
        <Link to="/donation" style={styles.donateButton}>
          Donate
        </Link>
        <Link to="/login" style={styles.link}>
          Join Us/Login
        </Link>
      </div>
    </nav>
  );
};

// Define the styles object here
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ff6b6b",
    padding: "10px 20px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
  donateButton: {
    color: "#ff6b6b",
    backgroundColor: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "16px",
    textDecoration: "none",
  },
};

export default Appbar;
