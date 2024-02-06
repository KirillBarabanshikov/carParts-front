import { SessionDto } from '@/entities/session/api/types.ts';
import { Session } from '@/entities/session/model/types.ts';

export function mapSession(dto: SessionDto): Session {
  return {
    accessToken: `${dto.token_type} ${dto.access_token}`,
  };
}
