import { Field, InputType, Int } from "@nestjs/graphql";
import { IsIn, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { MemberAuth, MemberType } from "../enums/member.enum";

@InputType()
export class MemberInput {
    @IsNotEmpty()
    @Length(3, 12)
    @Field(() => String)
    memberNick: string;

    @IsNotEmpty()
    @Length(5, 12)
    @Field(() => String)
    memberPassword: string;

    @IsNotEmpty()
    @Field(() => String)
    memberPhone: string;
    
    @IsOptional()
    @Field(() => MemberType, {nullable: true})
    memberType?: MemberType;

    @IsOptional()
    @Field(() => MemberAuth, {nullable: true})
    memberAuthType?: MemberAuth;
}

@InputType()
export class LoginInput {
    @IsNotEmpty()
    @Length(3, 12)
    @Field(() => String)
    memberNick: string;

    @IsNotEmpty()
    @Length(5, 12)
    @Field(() => String)
    memberPassword: string;
}
