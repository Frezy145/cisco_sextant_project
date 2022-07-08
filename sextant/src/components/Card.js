

import styled from 'styled-components'


const CardTitle = styled.div`
    color: #263238};
    font-size: 18px;
    font-weight: normal;
    align-self: top;
    height: 18px;
`

const CardComponent = styled.div`
    align-self: center;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    marging: 10px;
    background-color: #e0e0e0;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    &:hover {
    cursor: pointer;
  }
`

function Card({ title }) {
    return (
        <div>
            <CardWrapper>
                <CardTitle>{title} </CardTitle>
                <CardComponent>Components</CardComponent>
            </CardWrapper>
        </div>
    ); 
}

export default Card;