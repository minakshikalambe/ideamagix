import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import logo from './images/326.jpg';
import doctorLogo from './images/doctor_img.png';
import mailLogo from './images/emailcon.jpg';
import callLogo from './images/call_logo.png';
import pngtree from './images/pngtree.png';
import image1 from './images/image 1.png';
import image2 from './images/image 2.png';
import image3 from './images/image 3.png';
import countryPicker from './images/countryPicker.png';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Banner from './images/Rectangle 3.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import bannerTwo from './images/Rectangle (13).png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Box sx={{}}>
      <Box sx={{ flexGrow: 1, paddingInline: 10 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={2.4} sx={{ display: "flex", }}>
            <Box sx={{}}>
              <img src={logo} height='80px' width='90px' />
            </Box>
            <Box sx={{ pl: 1 }}>
              <Typography sx={{ fontWeight: "600" }}>AAFIYA </Typography>
              <Typography sx={{ fontWeight: "600" }}>MEDIRETREATS</Typography>
              <Typography >Healing Globally...</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={3} sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box sx={{}}>
              <img src={doctorLogo} height='80px' width='90px' />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <img src={pngtree} height='40px' width='40px' />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", pl: 1 }}>
                <Typography sx={{}}>Second Medical Opinion </Typography>
                <Typography sx={{ fontWeight: "600" }}>MEDIRETREATS</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={2.1} sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <img src={callLogo} height='40px' width='40px' />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", pl: 1 }}>
                <Typography sx={{}}>Call Us On </Typography>
                <Typography sx={{ fontWeight: "600" }}>9420702898</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={2.4} sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <img src={mailLogo} height='40px' width='40px' />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", pl: 1 }}>
                <Typography sx={{}}>Email Us On </Typography>
                <Typography sx={{ fontWeight: "600" }}>info.dummyeamil@10.com</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={2.1} sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <img src={countryPicker} height='40px' />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: "50px", bgcolor: "#049FF6", marginTop: "20px", pb: "15px", paddingInline: 11 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{}}>
          <Grid item xs={2} sm={4} md={9}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
              textAlign: "center",
            }}>
            <Typography sx={{ fontWeight: "600" }}>Home</Typography>
            <Typography sx={{ fontWeight: "600" }}>About Us</Typography>
            <Typography sx={{ fontWeight: "600" }}>Treatment</Typography>
            <Typography sx={{ fontWeight: "600" }}>Destination</Typography>

            <Typography sx={{ fontWeight: "600" }}>Hospital</Typography>
            <Typography sx={{ fontWeight: "600" }}>FAQ's</Typography>
            <Typography sx={{ fontWeight: "600" }}>Blog</Typography>
            <Typography sx={{ fontWeight: "600" }}>Request A Quote</Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={3} sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, position: "relative" }}>
        <img src={Banner} style={{
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: -1,
          width: '100%', // Optional: Make the image cover the full width
          height: '80vh', // Optional: Maintain aspect ratio
        }} />
        <Box container spacing={2}
          sx={{
            display: "flex",
            height: '80vh',
            flexDirection: "column",
            justifyContent: "center",
            paddingInline: 11
          }}>
          <Box sx={{ display: "flex", color: "white", ml: 0.5 }}>
            <Typography sx={{ fontWeight: "600" }}>Home</Typography>
            <KeyboardArrowRightIcon />
            <Typography sx={{ fontWeight: "600" }}>About Us</Typography>
            <KeyboardArrowRightIcon />
            <Typography sx={{ fontWeight: "600" }}>Orthopedics</Typography>
            <KeyboardArrowRightIcon />
            <Typography sx={{ fontWeight: "600" }}>Knee Replacement</Typography>
          </Box>
          <Box sx={{ color: "white", mt: "20px" }}>
            <Typography variant="h3" component="h3" sx={{ fontWeight: "600" }}>Total Knee Replacement</Typography>
          </Box>
          <Box sx={{ color: "white", mt: "20px", ml: 0.5, width: "60%" }}>
            <Typography variant="h5" component="h5">
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
            </Typography>
          </Box>
          <Box size="large" sx={{ mt: "20px" }}>
            <Button variant='contained' sx={{ borderRadius: "none", width: "20%", fontSize: "15px", padding: "10px" }}>Enquire Now</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingInline: 11, height: "50px", pt: "10px" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{}}>
          <Grid item xs={2} sm={4} md={10}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
            }}>
            <Typography sx={{ fontWeight: "600", textDecoration: 'underline' }}>Overview</Typography>
            <Typography sx={{ fontWeight: "600" }}>Eligebility</Typography>
            <Typography sx={{ fontWeight: "600" }}>Preparation</Typography>
            <Typography sx={{ fontWeight: "600" }}>Destination</Typography>

            <Typography sx={{ fontWeight: "600" }}>About Treatment</Typography>
            <Typography sx={{ fontWeight: "600" }}>Post-Treatment Care</Typography>
            <Typography sx={{ fontWeight: "600" }}>Recovery Tips</Typography>
            <Typography sx={{ fontWeight: "600" }}>FAQ's</Typography>
            <Typography sx={{ fontWeight: "600" }}>Patient Tips</Typography>
          </Grid>
        </Grid>
        <hr />
      </Box>
      <Box sx={{ paddingInline: 11, pt: "10px" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={12} sm={12} md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
            <Typography variant='h4' sx={{ fontWeight: "600", fontSize: "30px" }}>Treatment overview </Typography>
            <Typography width={"90%"} mt={1}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</Typography>
            <Typography width={"90%"} mt={1}>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher
              Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself").
              Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added,
              and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself").
            </Typography>
            <Typography width={"90%"} mt={1}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}
            sx={{
              display: "flex",
              flexDirection: "row-reverse"
            }}>
            <img src={bannerTwo} />
          </Grid>
        </Grid>
        <hr />
      </Box>
      <Box sx={{ paddingInline: 11, pt: "10px" }}>
        <Slider {...settings}>
          <div >
            <img src={image1} />
            <h3 style={{ textAlign: "center" }}>Lorem ipsum</h3>
          </div>
          <div >
            <img src={image1} />
            <h3 style={{ textAlign: "center" }}>Lorem ipsum</h3>
          </div>
          <div >
            <img src={image1} />
            <h3 style={{ textAlign: "center" }}>Lorem ipsum</h3>
          </div>
          <div >
            <img src={image1} />
            <h3 style={{ textAlign: "center" }}>Lorem ipsum</h3>
          </div>
          <div >
            <img src={image1} />
            <h3 style={{ textAlign: "center" }}>Lorem ipsum</h3>
          </div>
          <div >
            <img src={image1} />
            <h3 style={{ textAlign: "center" }}>Lorem ipsum</h3>
          </div>
        </Slider>
        <hr style={{ marginTop: "30px" }} />
      </Box>
      <Box sx={{ paddingInline: 11, pt: "10px" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={12} sm={12} md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
            <Typography variant='h4' sx={{ fontWeight: "600", fontSize: "30px" }}>Eligebility For Treatment </Typography>
            <Typography width={"90%"} mt={1}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</Typography>
            <Typography width={"90%"} mt={1}>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher
              Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself").
              Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added,
              and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself").
            </Typography>
            <Typography width={"90%"} mt={1}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}
            sx={{
               mt:1
            }}>
            <Box sx={{border:"1px solid gray", p:5}}>
              <form>
              <Typography variant='h4' sx={{ fontWeight: "600", fontSize: "30px", fontStyle:"italic", color:"#008AFF"}}>Need Help</Typography>
              <Typography width={"90%"} color={"gray"} mt={1}>In publishing and graphic design, Lorem ipsum </Typography>
              <TextField id="outlined-basic" label="Full Name" variant="outlined" sx={{mt:2, width:"100%"}} />
              <TextField id="outlined-basic" label="Email" variant="outlined" sx={{mt:2, width:"100%"}} />
              <TextField id="outlined-basic" label="Phone Number" variant="outlined" sx={{mt:2, width:"100%"}} />
              <TextField id="outlined-basic" label="Message" multiline={4} variant="outlined" sx={{mt:2, width:"100%"}} />
              <Button variant='contained' sx={{ mt:2, borderRadius: "none", fontSize: "15px", padding: "10px", width:"100%" }}>Enquire Now</Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
