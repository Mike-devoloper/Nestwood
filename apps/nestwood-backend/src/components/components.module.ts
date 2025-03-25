import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { AuthModule } from './auth/auth.module';
import { FollowModule } from './follow/follow.module';
import { CommentModule } from './comment/comment.module';
import { BoardArticleModule } from './board-article/board-article.module';
import { OrderModule } from './order/order.module';
import { LikeModule } from './like/like.module';
import { ProductModule } from './product/product.module';

@Module({
    imports: [ 
    MemberModule, AuthModule, FollowModule, CommentModule, BoardArticleModule, OrderModule, LikeModule, ProductModule]
})
export class ComponentsModule {}
