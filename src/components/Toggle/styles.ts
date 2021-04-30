import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.color.font};
    font-size: 1.6rem;
`;

export const ToggleSwitch = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.color.secondary,
        offColor: theme.color.secondary,
    })
)<ReactSwitchProps>`
    margin: 0 0.5rem;
`;

