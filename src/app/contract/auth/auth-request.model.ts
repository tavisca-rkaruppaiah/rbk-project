export class AuthRequest{
    constructor(public email:string, public password:string, public returnSecureToken:boolean){}
}