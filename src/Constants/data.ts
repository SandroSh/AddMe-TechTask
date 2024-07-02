export type ExtraInfoType = {
  id: number;
  titleBeforSubmit: string;
  titleAfterSubmit: string;
  placeholder: string;
  inputName: string;
};

export const extraInfo: ExtraInfoType[] = [
  {
    id: 1,
    titleBeforSubmit: "Portfolio not Provided",
    titleAfterSubmit: "Portfolio",
    placeholder: "https//:example.com",
    inputName: "portfolio",
  },
  {
    id: 2,
    titleBeforSubmit: "Github not Provided",
    titleAfterSubmit: "Github",
    placeholder: "https//:github/username.com",
    inputName: "github",
  },
  {
    id: 3,
    titleBeforSubmit: "Linkedin not Provided",
    titleAfterSubmit: "Linkedin",
    placeholder: "https//:linkedin/username_ID.com",
    inputName: "linkedin",
  },
  {
    id: 4,
    titleBeforSubmit: "Email not Provided",
    titleAfterSubmit: "Send an Email",
    placeholder: "GiaBaghashvili@gmail.com",
    inputName: "email",
  },
];
