import React from 'react'


const slideUp = (event) =>{
    console.log(event.target.parentNode.getAttribute("style").indexOf("transform:"))
    let slideToggler = event.target.parentNode.getAttribute("style").indexOf("transform:")
    console.log(document.title)
    if(slideToggler!==-1){
        event.target.parentNode.style.transform = ''
        slideToggler=0;
    }
    else{
        event.target.parentNode.style.transform = 'translateY(-80vh)';
        slideToggler=-1;
        //window.close()
    }
}

const Slider = (tabData) => {
    return (
        <div className="slider"  style={{backgroundColor: tabData.bgColor}}>
            <button onClick={slideUp} style={{...tabStyle, marginLeft: tabData.leftMargin, backgroundColor: tabData.bgColor}} className="sliderBtn">{tabData.title}</button>
            {/* <a href="#">Hi</a> */}
            <main style={contentStyle}>
                <p>
                    {tabData.body}
                </p>
            </main>
        </div>
    )
}
const tabStyle = {
    fontSize: '16px',
    padding: '10px',
    width: '10.6vw',
    fontFamily: 'Consolas',
    border: 'none',
    borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px',
    outline: 'none',
    backgroundcolor: '#638C71',
}

const contentStyle = {
    fontSize: '20px',
    fontFamily: 'Consolas',
    paddingTop: '5vw',
    outline: 'none',
    backgroundcolor: '#638C71',
    justifyContent: 'flex-start',
    alignSelf: "left"
}

export default Slider
