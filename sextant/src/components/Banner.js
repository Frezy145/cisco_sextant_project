
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    
`

const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    padding-bottom: 30px;
    color: #000000;
`

function Banner(){
    return (
        <Wrapper>
            <Title> Sextant page </Title>
        </Wrapper>
    ); 
}

export default Banner;