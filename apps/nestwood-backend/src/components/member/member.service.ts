import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import {Model} from "mongoose"
import { Member } from '../../libs/dto/Member';

@Injectable()
export class MemberService {
    constructor(@InjectModel("Member")
    private readonly memberModel: Model<Member>) {}


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
