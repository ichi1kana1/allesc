import React, {useState} from 'react';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import 'date-fns';

export function Schedule() {
    const [date, setDate] = useState(new Date())
    const month_days = [
        {'20210401': { is_holiday: false }},
        {'20210402': { is_holiday: false }},
        {'20210403': { is_holiday: true }},
        {'20210404': { is_holiday: true }},
        {'20210405': { is_holiday: false }}
    ]
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       date: new Date(2019, 4, 17),
    //       //月のデータ
    //       month_days: {
    //         20190501: { is_holiday: true },
    //         20190502: { is_holiday: true },
    //         20190503: { is_holiday: true },
    //         20190506: { is_holiday: true },
    //         20190514: { text: 'バシャログ執筆' },
    //         20190517: { text: 'バシャログ出稿' }
    //       }
    //     };
    //     this.getTileClass = this.getTileClass.bind(this);
    //     this.getTileContent = this.getTileContent.bind(this);
    //   }
    
      // state の日付と同じ表記に変換
      function getFormatDate(date) {
        return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
      }
    
      //日付のクラスを付与 (祝日用)
      function getTileClass({ date, view }) {
        // 月表示のときのみ
        if (view !== 'month') {
          return '';
        }
        const day = getFormatDate(date);
        return (month_days[day] && month_days[day].is_holiday) ?
          'holiday' : '';
      }
    
      //日付の内容を出力
    //   function getTileContent({ date, view }) {
    //     // 月表示のときのみ
    //     if (view !== 'month') {
    //       return null;
    //     }
    //     const day = getFormatDate(date);
    //     return (
    //       <p>
    //         <br />
    //         {(month_days[day] && month_days[day].text) ?
    //           month_days[day].text : ' '
    //         }
    //       </p>
    //     );
    //   }
    return (
        <Calendar
        locale="ja-JP"
        value={date}
        //tileClassName={getTileClass}
        //tileContent={getTileContent}
      />
    )
}
