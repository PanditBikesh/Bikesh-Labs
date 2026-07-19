export interface Certification {
  title: string;

  issuer: string;

  issueDate: string;

  credentialId?: string;

  skills: string[];

  image: string;

  pdf?: string;

  verify?: string;
}