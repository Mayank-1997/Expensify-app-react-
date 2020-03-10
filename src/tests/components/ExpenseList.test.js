import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test("should print the expenses from fixtuers file",()=>
{
 const wrapper=shallow(<ExpenseList expenses={expenses}/>);
 expect(wrapper).toMatchSnapshot();

})

test("should render ExpenseList with empty message",()=>
{
 const wrapper=shallow(<ExpenseList expenses={[]}/>);
 expect(wrapper).toMatchSnapshot();

})