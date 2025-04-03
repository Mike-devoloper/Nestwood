import { Injectable } from '@nestjs/common';
import * as brcrypt from "bcryptjs"

@Injectable()
export class AuthService {
    public async hashPassword(memberPassword:string):Promise<string> {
        const salt = await brcrypt.genSalt();
        return await brcrypt.hash(memberPassword, salt);
    }   

    public async comparePasswords(password: string, hashedPassword: string):Promise<boolean> {
        return await brcrypt.compare(password, hashedPassword);
    }
}

