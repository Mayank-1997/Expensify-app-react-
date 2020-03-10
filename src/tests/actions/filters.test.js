import moment from 'moment';
import { setTextFilter,sortByDate,sortByAmount,setStartDate, setEndDate} from '../../actions/filters';

test( 'should generate set start date object',() =>
{
const action =setStartDate(moment(0));
expect(action).toEqual(
{
type:'SET_START_DATE',
startDate:moment(0)

})
});

test( 'should generate  end date object',() =>
{
const action =setEndDate(moment(0));
expect(action).toEqual(
{
type:'SET_END_DATE',
endDate:moment(0)

})
});


test( 'sort by amount',() =>
{
const action =sortByAmount( );
expect(action).toEqual(
{
type:'SORT_BY_AMOUNT',


})
});

test( 'sort by Date',() =>
{
const action =sortByDate( );
expect(action).toEqual(
{
type:'SORT_BY_DATE',


})
});

test( 'set text filter',() =>
{
const action =(setTextFilter('c'));
expect(action).toEqual(
{
type:'SET_TEXT_FILTER',
text:'c'


})
});
test( 'set  default text filter',() =>
{
const action =(setTextFilter(' '));
expect(action).toEqual(
{
type:'SET_TEXT_FILTER',
text:' '


})
});

