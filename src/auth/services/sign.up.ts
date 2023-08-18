import { ControllerArgs, HttpStatus } from "../../core";

// OOP BASED APPROACH
export class SignUp {

    constructor(){}

    sign = async ({ input }: ControllerArgs) => {
        const { firstName, lastName, email, password } = input;

        // ADD LOGIC HERE.

        return {
            code: HttpStatus.CREATED,
            message: "User registered successfully.",
            data: "",
        }
    }
}

export default new SignUp();



// FUNCTION BASED APPROACH.
export const signUp = async ({ input }: ControllerArgs) => {
    
    const { firstName, lastName, email, password } = input;

    // ADD LOGIC HERE.

    return {
        code: HttpStatus.CREATED,
        message: "User registered successfully.",
    }
}

