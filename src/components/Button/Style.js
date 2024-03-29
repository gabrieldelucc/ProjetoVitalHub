import styled, { css } from "styled-components";

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 44px;

  background-color: #496bba;
  border-radius: 5px;
  border: 1px solid #496bba;

  margin-top: 15px;
  padding: 12px 8px 12px 8px;

  align-items: center;
  justify-content: center;
`;

export const ButtonGoogle = styled(Button)`
  background-color: #fafafa;
  flex-direction: row;
  gap: 10px;
`;
export const ButtonSecondary = styled(Button)`
  background-color: transparent;
  border: none;
`;
export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "MontserratAlternates_700Bold";
`;

export const ButtonSecondaryTitle = styled(ButtonTitle)`
  text-transform: capitalize;
  text-decoration: underline;
  color: #344f8f;
`;

export const ButtonModal = styled(Button)`
  width: 80%;
`;

export const ButtonCancel = styled.TouchableOpacity`
  width: 148px;
  height: 44px;

  margin-top: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-family: "MontserratAlternates_500Medium";
`;

export const ButtonClinica = styled(Button)``;

export const ButtonMedico = styled(Button)`
  margin-top: 90px;
`;

export const ButtonDataConfirm = styled(Button)`
  margin-top: 40px;
`;

export const CheckBox = styled.TouchableHighlight.attrs({
  underlayColor: "transparent",
})`
  width: 88px;
  height: 40px;
  border: 2px solid #49b3ba;
  border-radius: 5px;
  margin-top: 15px;
  padding: 5px;
  ${(props) =>
    props.clickButton
      ? css`
          background-color: #49b3ba;
        `
      : css`
          background-color: #fff;
        `}
`;

export const ButtonTi = styled(ButtonTitle)``;

export const ButtonContinuarConsulta = styled(Button) `

margin-top: 130px; 

`