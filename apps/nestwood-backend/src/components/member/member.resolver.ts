
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { Member } from '../../libs/dto/Member';
import { LoginInput, MemberInput } from '../../libs/dto/member.input';
import { MemberService } from './member.service';

@Resolver()
export class MemberResolver {
    constructor(private readonly memberService: MemberService) {}


    @Mutation(() => Member)
    public async signup(@Args("input") input: MemberInput): Promise<Member> {
        console.log("Mutation signup");
        console.log("Sign up mutation", input)
        return await this.memberService.signup(input);
    }

    @Mutation(() => Member)
    public async login(@Args("input") input: LoginInput): Promise<Member> {
        console.log("Mutaution login");
        return  await this.memberService.login(input);
    }

    @Mutation(() => String)
    public async updateMember(): Promise<string> {
        console.log("Mutaution updateMember");
        return  await this.memberService.updateMember();
    }

    
    @Query(() => String)
    public async getMember(): Promise<string> {
        console.log("Query getMember");
        return  await this.memberService.getMember();
    }

}
