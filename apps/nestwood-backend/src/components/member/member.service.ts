import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {

    public async signup():Promise<string> {
        return "signup is execured"
    }

    public async login():Promise<string> {
        return "login is execured"
    }

    public async getMember():Promise<string> {
        return "getMember is execured"
    }

    public async updateMember():Promise<string> {
        return "updateMember is execured"
    }
}
