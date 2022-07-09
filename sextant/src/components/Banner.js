
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #918987;
    height: 40px;
`;

const Title = styled.h3`
    font-size: 20px;
    text-align: center;
    align-self: center;
    padding-bottom: 10px;
    color: #000000;
`;

function Banner(){
    return (
        <Wrapper>
            <Title> Sextant page </Title>
        </Wrapper>
    ); 
};

export default Banner;