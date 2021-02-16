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
            <button onClick={slideUp} style={{marginLeft: tabData.leftMargin, backgroundColor: tabData.bgColor, wordWrap:'break-word'}} className="sliderBtn">{tabData.title}</button>
            {/* <a href="#">Hi</a> */}
            <main style={contentStyle}>    
                <p className="tabBody" dangerouslySetInnerHTML={{__html: tabData.body}}></p>
                {/* {tabData.body   } */}
            </main>
        </div>
    )
}
// const tabStyle = {
//     fontSize: 'auto',
//     paddingTop: '4px',
//     fontFamily: 'Consolas',
//     border: 'none',
//     borderTopLeftRadius: '25px',
//     borderTopRightRadius: '25px',
//     outline: 'none'
// }

const contentStyle = {
    fontSize: '20px',
    fontFamily: 'Consolas',
    paddingTop: '5vw',
    outline: 'none',
    backgroundcolor: '#638C71',
}

export default Slider
