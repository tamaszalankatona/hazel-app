import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../endpoints.constants';
import { CreateHouseholdModel, HouseholdResponseModel } from './household.models';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class HouseholdApiService {
  private readonly http = inject(HttpClient);

  setActiveHousehold(householdId: string): Observable<void> {
    return this.http.patch<void>(
      `${BASE_URL}${API_ENDPOINTS.household.prefix}${API_ENDPOINTS.household.active}`,
      { householdId },
      { withCredentials: true },
    );
  }

  createHousehold(data: CreateHouseholdModel): Observable<HouseholdResponseModel> {
    return this.http.post<HouseholdResponseModel>(
      `${BASE_URL}${API_ENDPOINTS.household.prefix}${API_ENDPOINTS.household.create}`,
      data,
      {
        withCredentials: true,
      },
    );
  }
}
