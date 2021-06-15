import React from 'react';
import BaseSelect from 'react-select';
import { ThemeContext } from '../App';
export const Select = (props) => {
  const theme = React.useContext(ThemeContext);
  console.log(theme);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      zIndex: theme.zIndex['10'],
      fontFamily: theme.fontFamily.sans.join(','),
      fontSize: theme.fontSize.base,
      borderColor: state.isFocused
        ? theme.colors.teal['500']
        : theme.colors.gray['300'],
      borderWidth: theme.borderWidth['2'],
      outline: 'none',
      boxShadow: 'none',
      '&:hover': {
        borderColor: state.isFocused
          ? theme.colors.teal['500']
          : theme.colors.gray['500'],
      },
    }),
    menu: (provided) => ({
      ...provided,
      fontFamily: theme.fontFamily.sans.join(','),
      fontSize: theme.fontSize['text-base'],
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? theme.colors.teal['500']
        : theme.colors.white,
      '&:hover': {
        ...provided['&:hover'],
        backgroundColor: theme.colors.teal['700'],
        color: theme.colors.white,
      },
    }),
  };

  return <BaseSelect styles={customStyles} {...props} />;
};