export type UserSource = {
  id: number;
  address: {
    city: string;
    state: string;
    country: string;
  };
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  employment: {
    title: string;
  };
  date_of_birth: string;
};

export type User = Omit<UserSource, "address" | "employment"> & {
  city: UserSource["address"]["city"];
  state: UserSource["address"]["state"];
  country: UserSource["address"]["country"];
  title: UserSource["employment"]["title"];
};
