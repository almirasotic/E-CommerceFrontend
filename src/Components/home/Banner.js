import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "../home/banner.css";

const data = [
    "https://images.ctfassets.net/7iq7c2o7xfbl/6UwbaH1fp6A5QS2tNF1y72/6b29bcc1068e8b0b478c26783bce2e30/LeBron_1918x585-1.webp",
    " https://images.ctfassets.net/7iq7c2o7xfbl/6lNFmtjGYI11gUD6Fzo2U5/7f3af74f2c188a2d29cfc3f6c834e640/New_Children-s_Books_for_Spring_Web_Banner.webp",
    "https://images.ctfassets.net/7iq7c2o7xfbl/533kJNnyCbz11ZfW18Pv41/87b7e81ba8efef3f1fcf56311611b180/Romantic_Comedy_1918x585.webp",
    "https://images.ctfassets.net/7iq7c2o7xfbl/5RmvUYyUoEV8vXabHcaLJh/98971a24a13d892b3acb32692522b4d6/Just_Landed_15_April_Banner_1918x585-1.webp"
]

// console.log(data);

const Banner = () => {
    return (
        <>

            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

            </Carousel>
            
        </>
    )
}

export default Banner;
