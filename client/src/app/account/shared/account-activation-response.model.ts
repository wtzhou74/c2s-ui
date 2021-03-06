export class AccountActivationResponse {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  birthDate: Date;
  genderCode: string;
  verified: boolean;
}
