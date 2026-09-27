import { INVITE_TTL_MS } from 'src/constants/household-invitation.constants';

export const inviteExpirationInHours = (): string => {
  return `${INVITE_TTL_MS / (60 * 60 * 1000)} hours`;
};
