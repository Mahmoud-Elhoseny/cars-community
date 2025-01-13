import { manufacturers } from './../constants/index';
import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}
export interface CustomFilter {
  filter: string;
  setFilter: (filter: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combined_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: (filter: string) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
