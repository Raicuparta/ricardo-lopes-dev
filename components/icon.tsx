import { twMerge } from 'tailwind-merge';
import assets, { IconName } from '../svg-assets';

type Props = {
  name: IconName;
  className?: string;
};

export const Icon = ({ name, className }: Props) => {
  const SvgIcon = assets[name];
  return <SvgIcon className={twMerge('fill-current', className)} />;
};
