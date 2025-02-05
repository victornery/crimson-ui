import { Args, ArgTypes } from '@storybook/react';

export const disabledArgTypes: Partial<ArgTypes<Args>> = {
  css: { table: { disable: true } },
  ref: { table: { disable: true } },
  fw: { table: { disable: true } },
  lh: { table: { disable: true } },
  justify: { table: { disable: true } },
  align: { table: { disable: true } },
  flexDir: { table: { disable: true } },
  p: { table: { disable: true } },
  px: { table: { disable: true } },
  py: { table: { disable: true } },
  pt: { table: { disable: true } },
  pr: { table: { disable: true } },
  pb: { table: { disable: true } },
  pl: { table: { disable: true } },
  m: { table: { disable: true } },
  mt: { table: { disable: true } },
  mr: { table: { disable: true } },
  mb: { table: { disable: true } },
  ml: { table: { disable: true } },
  mx: { table: { disable: true } },
  my: { table: { disable: true } },
  gridGap: { table: { disable: true } },
  gridColumnGap: { table: { disable: true } },
  gridRowGap: { table: { disable: true } },
  '@mobile': { table: { disable: true } },
};
