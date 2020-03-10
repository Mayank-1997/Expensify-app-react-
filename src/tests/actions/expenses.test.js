import {addExpense , editExpense, removeExpense } from '../../actions/expenses';

test( 'should edit the expenses',() => {

const action =editExpense('123abc',{note: 'New note value'});
expect(action).toEqual(
{
    type:'EDIT_EXPENSE',
    id:'123abc',
    updates:
    {
       note:'New note value' 
    }
}

); 

}); 


test('should add an expense in the expense object',()=>{

const expensedata={
    description:'Rent',
    amount:2000,
    createdAt:1000,
    note:'This is the note for this expense'
};

const action=addExpense(expensedata);
expect(action).toEqual(
    {
    type:'ADD_EXPENSE',
    expense:{
     ...expensedata,
     id:expect.any(String)

    }    
    });

});

test('should add an default expense in the expense object',()=>{

    const expensedata={
        description:' ',
        amount:0,
        createdAt:0,
        note:' '
    };
    
    const action=addExpense(expensedata);
    expect(action).toEqual(
        {
        type:'ADD_EXPENSE',
        expense:{
            description:' ',
            amount:0,
            createdAt:0,
            note:' ',
          id:expect.any(String)
    
        }    
        });
    
    });