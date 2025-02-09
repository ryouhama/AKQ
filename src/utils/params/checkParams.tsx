export type ParamChecker = <T = string>(value: T) => boolean;

export const checkUserId: ParamChecker = (value) => {
  if (value === "") return false;
  const userId = Number(value);
  if (!Number.isInteger(userId) || userId <= 0) return false;
  return true;
};
