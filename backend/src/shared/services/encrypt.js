import bcrypt from "bcrypt";

const salt = 10;
export const passwordHashing = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, salt);
};

export const compareHash = (plainPassword, dbHashPassword) => {
  return bcrypt.compareSync(plainPassword, dbHashPassword);
};
