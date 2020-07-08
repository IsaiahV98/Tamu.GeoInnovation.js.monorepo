import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { BaseEntity, Repository } from 'typeorm';

import { BaseService } from './base.service';

describe('BaseService', () => {
  let baseService: BaseService<BaseEntity>;
  let repository: Repository<BaseEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseService, Repository, { provide: getRepositoryToken(BaseEntity), useClass: Repository }]
    }).compile();

    baseService = module.get<BaseService<BaseEntity>>(BaseService);
    repository = module.get(getRepositoryToken(BaseEntity));
  });

  describe('Validation ', () => {
    it('Service should be defined', () => {
      expect(baseService).toBeDefined();
    });
  });
  /* Implementation Testing?
  describe('getOne ', () => {
    it('Service should be defined', async () => {
      const mockedParamater = {};
      const expectedResult = new BaseEntity();
      jest.spyOn(baseService.repository, 'findOne').mockResolvedValue(expectedResult);
      expect(await baseService.getOne(mockedParamater)).toEqual(expectedResult);
    });
  });*/
});
