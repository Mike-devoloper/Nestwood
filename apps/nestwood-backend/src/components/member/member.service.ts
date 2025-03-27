import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import {Model} from "mongoose"
import { Member } from '../../libs/dto/Member';
import { MemberInput } from '../../libs/dto/member.input';


@Injectable()
export class MemberService {
    constructor(@InjectModel("Member")
    private readonly memberModel: Model<Member>) {}


    public async signup(input: MemberInput):Promise<Member> {
        //TRY to DO hash passwords
        try {
            const result = await this.memberModel.create(input);
            //Token Authentication
            return result;

        } catch (err){
            console.log("Error SignUp service.model ", err)
            throw new BadRequestException(err)
        }
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
