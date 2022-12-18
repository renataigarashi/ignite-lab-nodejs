import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240) // primeiro parametro min, segundo max
  content: string;

  @IsNotEmpty()
  category: string;
}

// DTO - Data Transfer Object (só 'carregam' dados)
