import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import {Model} from "mongoose"
import { Member } from '../../libs/dto/Member';
import { LoginInput, MemberInput } from '../../libs/dto/member.input';
import { Message } from '../../libs/enums/common.enum';
import { MemberStatus } from '../../libs/enums/member.enum';


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

    public async login(input: LoginInput):Promise<Member> {
        const {memberNick, memberPassword} = input;
       const response: Member | null = await this.memberModel.findOne({memberNick: memberNick}).select('+memberPassword').exec()

       if(!response || response.memberStatus === MemberStatus.DELETE) {
        throw new InternalServerErrorException(Message.NO_MEMBER_NICK)
       } else if (response.memberStatus === MemberStatus.BLOCK) {
        throw new InternalServerErrorException(Message.BLOCKED_USER)
       }
       console.log("memberPAssword +> ", response.memberPassword)
       const isMatch = memberPassword === response.memberPassword;
       if(!isMatch) throw new InternalServerErrorException(Message.WRONG_PASSWORD)

       return response;
    }

    public async getMember():Promise<string> {
        return "getMember is execured"
    }

    public async updateMember():Promise<string> {
        return "updateMember is execured"
    }
}
