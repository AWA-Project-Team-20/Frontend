import React from 'react'
import styled from 'styled-components'



const AboutInfoContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 100%;
`;

const AboutContent = styled.div`
font-family: 'Muli', sans-serif;
letter-spacing: 1px;
font-variant: small-caps;
font-style: italic;
font-size: 20px;
line-height: 200%;

`;





const AboutInfo   = () => {
    return (
        <>
         <AboutInfoContainer>
            <AboutContent>
            <p>Once upon a time... </p>
            <p>A group of four friends were struggling with the situation with no proper food delivery services in Oulu area.</p>
            <p>They came up with an idea which was going to change the future of restaurant business...</p>
            <p>A website were the customer would be able to browse restaurants and their menus, and order the food to their doorsteps.</p>
            <p>After six weeks of serious programming, negotiating with restaurant owners and testing, the FoodApp was published.</p>
            <p></p>
            <p>And The Heroes behind this project:</p>
            <p>Aleksi Kalliokoski, Front end developer. <a href="https://github.com/Akllu">Github</a></p>
            <p>Jussi Sahlström, A very bad front end developer. <a href="https://github.com/jussisahlstrom">Github</a></p>
            <p>Danila Timoshchenko, Backend magician. <a href="https://github.com/jazzman1825">Github</a> </p>
            <p>Erik Myllylä, Backend and sleeping. <a href="https://github.com/SMiLY36">Github</a> </p>
            
            <img src="https://cdn.discordapp.com/attachments/748180001291108435/905792656100167701/C34A5648-35AC-4116-8676-CAE9868BAD12.jpg" width="500" height="600"></img>
            <p>When we had the idea "on the table"..</p>
            </AboutContent>
          

         </AboutInfoContainer>

        </>
    )
}

export default AboutInfo