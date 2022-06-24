import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import  Button  from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    primary: { 
      control: 'boolean',
      defaultValue: false, 
    },
    backgroundColor: { control: 'color' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
        mapping: {
          small: <span>small</span>,
          medium: <span>medium</span>,
          large: <span>large</span>,
        },
      },
      defaultValue: 'medium',
    },
    rounded: {
      control: {
        type: 'select',
        options: ['none', 'small', 'medium', 'large'],
        mapping: {
          none: 'none',
          small: 'small',
          medium: 'medium',
          large: 'large',
        },
      },
    },
    label: { 
      control: 'text',
      defaultValue: 'Button', 
    },
    disabled: { 
      control: 'boolean',
      defaultValue: false,
    },
    onClick: {  
      control: 'function', 
      defaultValue: () => {},
    },
  },
  // args: {
  //   primary: 'boolean' as unknown as any,
  //   backgroundColor: 'string',
  //   size: "small",
  //   rounded: "small",
  //   label: 'string',
  //   onClick: '() => void' as unknown as any
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
    primary: false,
    label: 'Default'
}

export const disabled = Template.bind({});
disabled.args = {
    primary: false,
    disabled: true,
    label: 'Disabled'
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Primary',
};

export const Large = Template.bind({});
Large.args = {
    primary: false,
    size: 'large',
    label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
    primary: false,
    size: 'small',
    label: 'Small',
};

