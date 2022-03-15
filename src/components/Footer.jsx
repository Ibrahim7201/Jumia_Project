import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../styles/Footer.css";
import Logo from "../assets/jumia-logo---2.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#323232",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //API-Required
  };
  return (
    <React.Fragment>
      <Container>
        {" "}
        <div className="Footer">
          <div className="Footer-top">
            <div className="Footer-top-img">
              <img src={Logo} alt="" />
            </div>
            <div className="Footer-top-middle">
              <h4>NEW TO JUMIA?</h4>
              <p>Subscribe to our newsletter to get updates on our latest offers!</p>
              <div>
                <form className="Footer-top-form" onSubmit={handleSubmit}>
                  <input value={email} onChange={handleChange} placeholder="Enter email address" />
                  <span>Male</span>
                  <span>Female</span>
                </form>
              </div>
            </div>
            <div className="Footer-top-right">
              <div className="Footer-top-right-top">
                <div className="Footer-top-right-top-logo">
                  <span className="material-icons market">local_grocery_store</span>
                </div>
                <div className="Footer-top-right-top-content">
                  <p style={{ fontWeight: "bold" }}>DOWNLOAD JUMIA FREE APP</p>
                  <p>Get access to exclusive offers!</p>
                </div>
              </div>
              <div className="Footer-top-right-bottom">
                <div className="Footer-top-right-store">
                  <div className="Footer-top-right-store-logo">
                    <i class="fab fa-google-play"></i>
                  </div>
                  <div className="Footer-top-right-store-content">
                    <h6>GET IT ON</h6>
                    <p>Google Play</p>
                  </div>
                </div>
                <div className="Footer-top-right-store">
                  <div className="Footer-top-right-store-logo">
                    <i class="fab fa-apple"></i>
                  </div>
                  <div className="Footer-top-right-store-content">
                    <h6>Download on the</h6>
                    <p>App Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Footer-bottom">
            {" "}
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Item style={{ border: "0px", boxShadow: "0 0 0 0" }}>
                    <h4>LET US HELP YOU</h4>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>How to buy on Jumia?</p>
                    <p>How to pay on Jumia?</p>
                    <p>Delivery timelines</p>
                    <p>Report a product</p>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item style={{ border: "0px", boxShadow: "0 0 0 0" }}>
                    <h4>JUMIA CAREERS</h4>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Jumia Express</p>
                    <p>Jumia Mall</p>
                    <p>Jumia Logistics Services</p>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item style={{ border: "0px", boxShadow: "0 0 0 0" }}>
                    <h4>MAKE MONEY WITH JUMIA</h4>
                    <p>Sell on Jumia</p>
                    <p>Become a Logistics Service Partner</p>
                    <p>Become a Sales Consultant (J-Force )</p>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item style={{ border: "0px", boxShadow: "0 0 0 0" }}>
                    <h4>JUMIA INTERNATIONAL</h4>
                    <p>Algeria</p>
                    <p>Ivory Coast</p>
                    <p>Ghana</p>
                    <p>Morocco</p>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item style={{ border: "0px", boxShadow: "0 0 0 0" }}>
                    <h4>JOIN US ON</h4>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-youtube"></i>
                  </Item>
                </Grid>{" "}
                <Grid item xs={3}>
                  <Item style={{ border: "0px", boxShadow: "0 0 0 0" }}>
                    <h4>PAYMENT METHODS</h4>
                    <i class="fas fa-cash-register"></i>
                    <i class="fab fa-cc-mastercard"></i>
                    <i class="fab fa-cc-visa"></i>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
