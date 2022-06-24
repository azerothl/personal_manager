import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import  Select  from './index';

export default {
    title: 'Components/select',
    component: Select,
    args: {
        datas: [] as unknown as {},
        current: 123,
        handleSelect: 'any' as unknown as any,
        showCurrent: 'boolean' as unknown as any,
        isDisabled: 'boolean' as unknown as any
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
    <Select { ...args } />
);

export const Default = Template.bind({});
Default.args = {
    datas: [{value:1,label:'toto'},{value:2,label:'tata'},{value:3,label:'titi'}],
    current: 1,
    handleSelect: () => {},
    showCurrent: true,
    isDisabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
    datas: [{value:1,label:'toto'},{value:2,label:'tata'},{value:3,label:'titi'}],
    current: 2,
    handleSelect: () => {},
    showCurrent: true,
    isDisabled: true
};

export const Description = Template.bind({});
Description.args = {
    datas: [{value:1,label:'toto',description:'toto description'},{value:2,label:'tata',description:'tata information'},{value:3,label:'titi',description:'titi desc...'}],
    current: 2,
    handleSelect: () => {},
    showCurrent: true,
    isDisabled: false
}

export const Icons = Template.bind({});
Icons.args = {
    datas: [{value:1,label:'facebook',icon:'/images/facebook.png'},{value:2,label:'linkedin',icon:'/images/linkedin.png'},{value:3,label:'twitter',icon:'/images/twitter.png'}],
    current: 2,
    handleSelect: () => {},
    showCurrent: true,
    isDisabled: false
};