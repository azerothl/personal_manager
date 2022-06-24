import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import  HourGrid  from './index';

export default {
  title: 'Components/HourGrid',
  component: HourGrid,
  args: {
    activities: [] as unknown as {}
  },
} as ComponentMeta<typeof HourGrid>;

const Template: ComponentStory<typeof HourGrid> = (args) => (
  <HourGrid {...args} />
);

export const Empty = Template.bind({});
Empty.args = {};
export const OneActivity = Template.bind({});
OneActivity.args = {
    activities: [{label:'test activity', start:1015, end:1245}]
}
export const MultiActivities = Template.bind({});
MultiActivities.args = {
  activities: [
    {
      "label": "test activity",
      "start": 1015,
      "end": 1245,
      "color": "#f1e1c7f4"
    },
    {
      "label": "test activity 2",
      "start": 600,
      "end": 830,
      "draggable": false
    },
    {
      "label": "test new column",
      "start": 100,
      "end": 615,
      "color": "#d1d2d4f4"
    },
    {
      "label": "test new column 2",
      "start": 430,
      "end": 1345,
      "color": "#c1e5d7f4"
    }
  ]
}