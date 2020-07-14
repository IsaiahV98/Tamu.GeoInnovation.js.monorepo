import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { OpenIdProvider, UserService } from '@tamu-gisc/oidc/provider-nest';

@Injectable()
export class AppService {
  constructor(private readonly userService: UserService) {}

  async getSignedInAccount(req: Request, res: Response) {
    const ctx = OpenIdProvider.provider.app.createContext(req, res);
    const session = await OpenIdProvider.provider.Session.get(ctx);
    return await this.userService.accountRepo.findByKeyShallow('guid', session.account);
  }
}
