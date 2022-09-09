export class Timer {
  // 当前日期
  date: Date;
  // 年
  year: number;
  // 月
  month: string;
  // 日
  day: string;
  constructor () {
    this.date = new Date();
    this.year = this.date.getFullYear();
    const month = this.date.getMonth() + 1;
    this.month = month > 9 ? ''+ month : '0' + month;
    const day = this.date.getDate();
    this.day = day > 9 ? '' + day : '0' + day;
  }
  // 获取日期的开始
  startTime(time: number): number {
    const now = new Date(time);
    return now.setHours(0,0,0,0)
  }

  // 获取日期的结束
  endTime(time: number): number {
    const now = new Date(time);
    return now.setHours(23,59,59,999)
  }
  // 加天
  addDay(day: number) {
    const date = new Date();
    return new Date(date.setDate(date.getDate() + day + 1))
  }


  // 今天开始
  get beginToday(): number {
    return new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime()
  }
  // 今天结束
  get endToday(): number {
    return this.endTime(this.beginToday)
  }
  // 昨天开始
  get beginYesterDay(): number {
    return this.startTime(this.beginToday - 24 * 60 * 60 * 1000)
  }
  // 昨天结束
  get endYesterDay(): number {
    return this.endTime(this.beginToday - 24 * 60 *60 * 1000)
  }
  // 本月第一天
  get nowMonthBeginDay(): number{
    const current = this.date;
    const currentM = current.getMonth();
    const year = current.getFullYear();
    // 第一天
    return new Date(year, currentM, 1).getTime()
  }
  // 本月最后一天
  get nowMonthEndDay(): number{
    const current = this.date;
    const year = current.getFullYear();
    const month = current.getMonth() + 1;
    return new Date(year, month, 0).getTime()
  }
  // 今天范围
  get todayRange(){
    return {
      from: this.beginToday,
      to: this.endToday
    }
  }
  // 昨天范围
  get yesterDayRange(){
    return {
      from: this.beginYesterDay,
      to: this.endYesterDay 
    }
  }
  // 近7天
  get recentSevenday() {
    return {
      from: this.addDay(-7).getTime(),
      to: this.date.getTime()
    }
  }

  // 本月范围
  get nowMounthRange(){
    return {
      from: this.nowMonthBeginDay,
      to: this.nowMonthEndDay
    }
  }

}