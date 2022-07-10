
import styled from 'styled-components';
import Fetch from './Fetch';
import Client from './Client';

// styled component for titles
const CardTitle = styled.div`
    color: #263238};
    font-size: 18px;
    font-weight: normal;
    height: 18px;
    marging: 20px;
`;

// styled component for contents
const CardComponent = styled.div`
    align-self: center;
    marging: 30px;
    font-size: 26px;
`;

// the wrapper just to give specific look
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    padding: 5px;
    align-self: center;
    marging: 10px;
    background-color: #e0e0e0;
    border-radius: 10px;
    &:hover {
    cursor: pointer;
  }
`;

// use props to manage titles an children
function Card({title, children}) {
    return (
        <div>
            <CardWrapper>
            
                <CardTitle>
                    {title}
                </CardTitle>
                
                <CardComponent>
                   {children}
                </CardComponent>
                
            </CardWrapper>
        </div>
    ); 
}

export default Card;