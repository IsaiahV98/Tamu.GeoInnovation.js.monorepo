import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WebsiteType } from '@tamu-gisc/covid/common/entities';
import { EnvironmentService } from '@tamu-gisc/common/ngx/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassificationsService {
  public resource: string;

  constructor(private env: EnvironmentService, private http: HttpClient) {
    this.resource = this.env.value('covid_api_url') + 'source-types';
  }

  public getClassifications() {
    return this.http.get<Array<WebsiteType>>(this.resource);
  }
}
