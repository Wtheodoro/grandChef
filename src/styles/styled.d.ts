import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string

        color: {
            primary: string
            primaryShadow: string
            secondary: string
            secondaryShadow: string
            tertiary: string
            borderColor: string
            font: string
            title: string
            sectionA: string
            sectionB: string
            sectionC: string
        }
    }
}