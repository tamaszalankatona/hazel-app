import { Injectable } from '@angular/core';

export interface TimezonesLabelAndOffsetI {
  value: string;
  label: string;
}

@Injectable({
  providedIn: 'root',
})
export class TimezoneService {
  //get all timezones
  private getAllTimezones(): string[] {
    return Intl.supportedValuesOf('timeZone');
  }

  //get offset of timezone
  private getTimezoneOffset(timezone: string): string {
    const parts = new Intl.DateTimeFormat('en', {
      timeZone: timezone,
      timeZoneName: 'longOffset',
    }).formatToParts(new Date());

    const offset = parts.find((p) => p.type === 'timeZoneName')?.value ?? '';

    return offset;
  }

  //get all timezone label and offset
  public getTimezonesLabelAndOffset(): TimezonesLabelAndOffsetI[] {
    const timezones: string[] = this.getAllTimezones();
    const formattedTimezonesList = timezones.map((timezone) => ({
      value: timezone,
      label: `${timezone} (${this.getTimezoneOffset(timezone)})`,
    }));

    return formattedTimezonesList;
  }

  //get user's current timezone
  public getCurrentTimezone(): TimezonesLabelAndOffsetI {
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const formattedTimezone = {
      value: currentTimezone,
      label: `${currentTimezone} (${this.getTimezoneOffset(currentTimezone)})`,
    };

    return formattedTimezone;
  }
}
