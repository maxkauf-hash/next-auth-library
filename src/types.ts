export type BackButtonProps = {
  href: string;
  label: string;
};

export type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  emailVerified: Date;
};

export type OnLoginSuccessProps = {
  onLoginSuccess: (user: User) => void;
};

export type FormErrorProps = {
  message?: string;
};

export type FormSuccessProps = {
  message?: string;
};

export type RegisterUserProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginUserProps = {
  email: string;
  password: string;
};
