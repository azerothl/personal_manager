import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import DayCard  from './index';

export default {
  title: 'Components/dayCard',
  component: DayCard,
  args: {
    year: 123,
    month: 123,
    day: 123,
    weekday: 123,
    activities: 123,
    onClick: 'any' as unknown as any
  },
} as ComponentMeta<typeof DayCard>;

const Template: ComponentStory<typeof DayCard> = (args) => (
  <DayCard {...args} />
);

export const Story = Template.bind({});
Story.args = {};
