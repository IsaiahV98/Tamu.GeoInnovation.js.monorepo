import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

import { County, User } from '@tamu-gisc/covid/common/entities';

import { BaseService } from '../base/base.service';

@Injectable()
export class CountiesService extends BaseService<County> {
  constructor(
    @InjectRepository(County) private repo: Repository<County>,
    @InjectRepository(User) private userRepo: Repository<User>
  ) {
    super(repo);
  }

  public search(keyword: string) {
    return this.repo.find({
      where: {
        name: Like(`%${keyword}%`)
      }
    });
  }

  public searchCountiesForState(statefips: number, keyword: string) {
    return this.repo.find({
      where: {
        stateFips: statefips,
        name: Like(`%${keyword}%`)
      }
    });
  }

  public getCountiesForState(stateFips: number) {
    return this.repo.find({
      where: {
        stateFips
      }
    });
  }

  /**
   * Register a county to a user.
   */
  public async associateUserWithCounty(countyFips: number, email: string) {
    const user = await this.userRepo.findOne({
      where: {
        email
      },
      relations: ['claimedCounties']
    });

    if (!user) {
      throw new Error('Invalid email.');
    }

    // Check if the claim by countyFips being requested is already existing.
    const claimedCountyIsSame = user.claimedCounties.findIndex((c) => c.countyFips === countyFips) > -1;

    if (user.claimedCounties.length > 0 && claimedCountyIsSame) {
      return user;
    } else {
      const county = await this.repo.findOne({ where: { countyFips } });

      if (!county) {
        throw new Error('Invalid county fips.');
      }

      user.claimedCounties = [county];

      return user.save();
    }
  }

  public async getClaimsForUser(email: string) {
    return this.userRepo.findOne({
      where: {
        email
      },
      relations: ['claimedCounties']
    });
  }
}
