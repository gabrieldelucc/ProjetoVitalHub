import styled from "styled-components";

//import lib linear gradient
import { LinearGradient } from "expo-linear-gradient";
import { BoxTitleHeader, SubTitleHeader } from "../Header/Style";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fafafa;
`;

export const ContainerHeader = styled(LinearGradient).attrs({
  colors: ["#60BFC5", "#496BBA"],
  start: { x: -0.05, y: 1.08 },
  end: { x: 1, y: 0 },
})`
  width: 100%;
  padding: 20px;
  padding-bottom: 22px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px 4px 15px #00000014;
`;

export const ContainerLogo = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;
`;

export const ContainerScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const ContainerImage = styled.View`
  width: 100%;
  height: 280px;
  margin-bottom: 20px;

  align-items: center;
  justify-content: flex-start;
`;

export const ContainerFlex = styled.View`
  width: 90%;

  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerSelClinica = styled(ContainerScroll)`
  width: 90%;
`;
export const ContainerIntScroll = styled.View`
  width: 100%;
  align-items: center;
`;

export const InverseBox = styled(BoxTitleHeader)`
  align-items: end;
  padding: 0px;
`;
export const ContainerInputHorario = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;

export const ContainerInputProntuario = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;

export const ContainerCheck = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTopicoAgendamento = styled.View`
  align-items: start;
  width: 90%;
  height: fit-content;
`;
