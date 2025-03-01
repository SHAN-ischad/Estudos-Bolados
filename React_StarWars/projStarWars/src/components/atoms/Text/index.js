import React from "react"
import { Text } from "./style"

export const CunstomText = ({ children, color }) => {
    return (
        <Text color={color} >
            {children}
        </Text>

    )
}

