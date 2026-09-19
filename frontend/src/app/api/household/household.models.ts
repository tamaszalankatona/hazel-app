export interface CreateHouseholdModel {
  name: string;
  timezone: string;
  // invitationCode: string;
}

export interface HouseholdResponseModel {
  id: string;
  name: string;
  timezone: string;
  updatedAt: string;
  createdAt: string;
  deletedAt: string | null;
}
