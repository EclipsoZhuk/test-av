export interface userState {
  infoProfile: {
    fullName: string;
    subtitle: string;
    description: string;
    country: string;
    city: string;
    email: string;
  };
}

export interface authState {
  user: {
    username: string;
    password: string;
  } | null;
}

export interface messageState {
  inbox: {
    id: number;
    avatar: string;
    title: string;
    email: string;
    description: string;
  }[];
}
