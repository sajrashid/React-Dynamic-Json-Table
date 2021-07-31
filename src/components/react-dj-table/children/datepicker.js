import { ACTIONS } from '../reducers/actions'
import React from "react"

const DatePicker = ({ state, dispatch }) => {
    const options = state.options || {}
    const styles = options.rowCss || ''
    const cssClasses = `selected ${styles}`
    const idColIdx = options.idCol ? Object.keys(state.json[0]).indexOf(options.idCol) : 0
    // const isEditable = options.editable || false
    // Months array
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    // Days of the Week
    const daysOfWeek = ['S','M','T','W','TH','F','SA'];
    const gridsize = 42; //Total number of date boxes in the grid
    let isSelectedDateSelected = state.selectedDate 
    const searchable = options.searchable || false

    const month = new Date().getMonth()
    const year = new Date().getFullYear()

    // console.log('DatePicker::SelectedDate', selectedDate)

    function handleDateClick(e) {
        
        console.log('DatePicker::handleDateClick')

    }

        // The following function builds an array of objects with dates to be displayed in the grid
    function datesForGrid (year, month1) {
        console.log('%c year', 'colour: purple' ,year)
        console.log('%c month', 'colour: purple' ,month1)

        // year = 2021
        // month1 = 'May'

        // days array holds all the days to be populated in the grid
        var dates = [];
        // Day on which the month starts
        var firstDay = new Date(year, month1).getDay(); 
        // Total number of days in the month
        var totalDaysInMonth = new Date(year, month1 + 1, 0).getDate();
        // Total number of days in the previous month
        var totalDaysInPrevMonth = new Date(year, month1, 0).getDate();


        console.log('firstDay',firstDay)
        console.log('totalDaysInMonth',totalDaysInMonth)
        console.log('totalDaysInMonth',totalDaysInMonth)
        console.log('totalDaysInPrevMonth',totalDaysInPrevMonth)
        
        // Days from prev month to show in the grid
        for(var i = 1; i <= firstDay; i++) {
        var prevMonthDate = totalDaysInPrevMonth - firstDay + i;
        console.log('key1 before', Date(year, month1 + 1, i).toLocaleString())
        
        var key1 = new Date(year, month -1, prevMonthDate).toLocaleString();    
        console.log('key1 after', Date(year, month1 + 1, i).toLocaleString())

        dates.push({key: key1, date: prevMonthDate, monthClass:'prev'});
        }
        // Days of the current month to show in the grid
        var today = new Date();
        for(i = 1; i <= totalDaysInMonth; i++) {
        var key2 = new Date(year, month1, i).toLocaleString();
        if(i === today.getDate() && month1 === today.getMonth() && year === today.getFullYear()) {
            dates.push({key: key2, date: i, monthClass: 'current', todayClass: 'today'})
        } else{ 
            dates.push({key: key2, date: i, monthClass: 'current'});
        }
        }
        
        // If there is space left over in the grid, then show the dates for the next month
        if(dates.length < gridsize) {
        var count = gridsize - dates.length;
        for( i = 1; i <= count; i++) {

            var key3 = new Date(year, month1 + 1, i).toLocaleString();
            console.log('key3', Date(year, month1 + 1, i).toLocaleString())
            dates.push({key: key3, date: i, monthClass:'next'});
        }
        }
        return dates;
    }

    function makeCells () {

        console.log("datesForGrid",datesForGrid(new Date().getFullYear(), new Date().getMonth()))
        const dateArray = datesForGrid(new Date().getFullYear(), new Date().getMonth())
        const trArray = []
        console.log('%c dateArray','color: green', dateArray)

        var a = new Date()
        var today = a.getDate()   

        console.log('today',today)
             

        var i=0;
        for(i=0;i<=41; i=i+7) {
            console.log('dateArray',dateArray[i].date)
                    
                    trArray.push(<tr>
                        <td className={dateArray[i+0].todayClass ? 'today ' + dateArray[i+0].monthClass : dateArray[i+0].monthClass }>{dateArray[i+0].date}</td>
                        <td className={dateArray[i+1].todayClass ? 'today ' + dateArray[i+1].monthClass : dateArray[i+1].monthClass }>{dateArray[i+1].date}</td>
                        <td className={dateArray[i+2].todayClass ? 'today ' + dateArray[i+2].monthClass : dateArray[i+2].monthClass }>{dateArray[i+2].date}</td>
                        <td className={dateArray[i+3].todayClass ? 'today ' + dateArray[i+3].monthClass : dateArray[i+3].monthClass }>{dateArray[i+3].date}</td>
                        <td className={dateArray[i+4].todayClass ? 'today ' + dateArray[i+4].monthClass : dateArray[i+4].monthClass }>{dateArray[i+4].date}</td>
                        <td className={dateArray[i+5].todayClass ? 'today ' + dateArray[i+5].monthClass : dateArray[i+5].monthClass }>{dateArray[i+5].date}</td>
                        <td className={dateArray[i+6].todayClass ? 'today ' + dateArray[i+6].monthClass : dateArray[i+6].monthClass }>{dateArray[i+6].date}</td>
                        </tr> )
                    

        }


        
       
        return trArray
        // for(let i=0;i<7;i++) {
        //     datesForGrid(year, months).map((date, index) => {
        //     return <td>{date}</td>
        // })
    }

    const generateTableBody = () => { 


            //makeCells()
        
        // return datesForGrid(year, months).map((date, index) => {
            // return <td>{date}</td>
        // })
    }

    const generateTableHeader = () => {
        return daysOfWeek.map(day => <td>{day}</td>)
    }

    const createCalendar = () => {

        console.log('%c state', 'colour: blue', state )


        
        if (state.selectedDate) {
            
        } 

        return null
    }

    return (
        <React.Fragment>
            {   isSelectedDateSelected &&
                <div className="calendar-nav">
                   
                    <table className="fred" onChange={handleDateClick}>
                        <thead>
                            <tr>
                                {generateTableHeader()}
                            </tr>
                        </thead>
                        <tbody>
                                    {makeCells()}

                        </tbody>
                    </table>



                </div>
            }
        </React.Fragment>

    )
}
export default DatePicker



  
  
  
