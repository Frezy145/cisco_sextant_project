
import styled from 'styled-components';
import Fetch from './Fetch';


const CardTitle = styled.div`
    color: #263238};
    font-size: 18px;
    font-weight: normal;
    align-self: top;
    height: 18px;
`;

const CardComponent = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-around;
    marging: 30px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    marging: 10px;
    background-color: #e0e0e0;
    border-radius: 10px;
    &:hover {
    cursor: pointer;
  }
`;

function Card() {
    return (
        <div>
            <CardWrapper>
                <CardTitle>IPv4 and IPv6 adresses</CardTitle>
                <CardComponent>
                   <Fetch url='https://api.ipify.org?format=json'/>
                   <div>----</div>
                   <Fetch url='https://api64.ipify.org?format=json'/>
                </CardComponent>
            </CardWrapper>
        </div>
    ); 
}

export default Card;