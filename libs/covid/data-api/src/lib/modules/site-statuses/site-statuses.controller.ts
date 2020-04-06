import { Controller } from '@nestjs/common';

import { SiteStatusType } from '@tamu-gisc/covid/common/entities';

import { SiteStatusesService } from './site-statuses.service';
import { BaseController } from '../base/base.controller';

@Controller('site-statuses')
export class SiteStatusesController extends BaseController<SiteStatusType> {
  constructor(private service: SiteStatusesService) {
    super(service);
  }
}
