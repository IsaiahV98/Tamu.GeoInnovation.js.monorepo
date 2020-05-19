import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryValue, CountyClaim, CountyClaimInfo, County } from '@tamu-gisc/covid/common/entities';

import { WebsitesController } from './websites.controller';
import { WebsitesService } from './websites.service';

describe('Websites Controller', () => {
  let controller: WebsitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WebsitesService, 
        {
          provide: getRepositoryToken(CategoryValue), 
          useClass: Repository

        },
        WebsitesService,
        {
          provide: getRepositoryToken(County),
          useClass: Repository
        },
        WebsitesService,
        {
          provide: getRepositoryToken(CountyClaim),
          useClass: Repository
        },
        WebsitesService,
        {
          provide: getRepositoryToken(CountyClaimInfo),
          useClass: Repository
        }
      ],
      controllers: [WebsitesController]
    }).compile();

    controller = module.get<WebsitesController>(WebsitesController);
  });

  
  it('should be defined', () => {
    expect(controller).toBeUndefined;
  });
});