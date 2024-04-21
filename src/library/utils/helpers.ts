export const classNames = (...classes: string[] | boolean[] | undefined[] | any) => {
  return classes.filter(Boolean).join(" ");
}

