import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 权限判断
    // 获取session
    context.switchToHttp().getRequest().session;
    console.log(
      context.switchToHttp().getRequest().session,
      'context.switchToHttp().getRequest().session',
    );
    return true;
  }
}
