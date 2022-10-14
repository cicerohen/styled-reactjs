import { Icon, Props } from "../Icon";

export const Bars3IconOutlined = (props: Props) => {
  return (
    <Icon fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </Icon>
  );
};
