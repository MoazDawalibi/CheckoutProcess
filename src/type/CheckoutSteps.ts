import React from "react"

export type CheckoutSteps  = {
    onChange?: (e: React.ChangeEvent<any>) => void ,
    CurrentIndex:number,
    objectToEdit:any 
}