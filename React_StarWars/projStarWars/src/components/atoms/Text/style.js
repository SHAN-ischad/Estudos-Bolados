import styled from 'styled-components/native'

export const Text = styled.Text`
font-size: 20px;
color: ${({ color }) => color || 'white'};
font-weight: bold;
margin-top: 15px;
`