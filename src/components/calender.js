import {Component} from 'react';
class Calender extends Component{
    // constructor(props){
    //     super(props)
    // }
    
    render(){
        var renderCalender = function(){
            const date = new Date();
            const renderCalendar = () => {
                const monthDays = document.querySelector(".days");
                document.querySelector(".date p").innerHTML = `Tháng ${date.getMonth()+1} năm ${date.getFullYear()}`;
                date.setDate(1);
                const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
                const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
                const firstDayIndex = date.getDay();
                const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
                const nextDays = 7 - lastDayIndex -1;
                let days = "";
                for (let x = firstDayIndex; x > 0; x--) {
                    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
                }
                for (let i = 1; i <= lastDay; i++) {
                    if (i === new Date().getDate() &&date.getMonth() === new Date().getMonth()) {
                        days += `<div class="today">${i}</div>`;
                    } else {
                        days += `<div>${i}</div>`;
                    }
                }
                for (let j = 1; j <= nextDays; j++) {
                    days += `<div class="next-date">${j}</div>`;
                }
                monthDays.innerHTML = days;
            };
            document.querySelector(".prev").addEventListener("click", () => {
            date.setMonth(date.getMonth() - 1);//0->11
            renderCalendar();
            });
            document.querySelector(".next").addEventListener("click", () => {
            date.setMonth(date.getMonth() + 1);
            renderCalendar();
            });
            renderCalendar();
        }
        window.addEventListener('load',renderCalender);
        return (
            <div className="calendar" style={{display: (this.props.openCalender >0 && this.props.openCalender <3) ? 'block' : 'none'}}>
                <div className="month">
                <i className="fas fa-angle-left prev"></i>
                <div className="date">
                    <p>Tháng 9 năm 2021</p>
                </div>
                <i className="fas fa-angle-right next"></i>
                </div>
                <div className="weekdays">
                <div>CN</div>
                <div>T2</div>
                <div>T3</div>
                <div>T4</div>
                <div>T5</div>
                <div>T6</div>
                <div>T7</div>
                </div>
                <div className="days"></div>
            </div>
        )
    }
}
export default Calender;