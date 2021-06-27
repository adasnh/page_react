import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSize } from '../../styledHelpers/FontSizes';
import { Colors } from '../../styledHelpers/Colors';


const Message = styled.div`

   h1{
    position:relative;
    left:30%;
    font-size: ${fontSize["40"]}
   }
`;

const Page = styled.div`
  .back{   
    position:relative;
    left: 43%;
    top:30px;
    font-weight: 700;
    color: ${Colors.blue};
    font-size: ${fontSize["24"]};

  }

  .back:hover {
      color:lightblue;
  }

`;

export const NotFound: FC = () => {
    return(

        <Page>
            <Message>
            <h1>404 - Not Found!</h1>
           </Message>
            <Link className ="back"to="/">
            Go Back
            </Link>
        </Page>
    );

}
