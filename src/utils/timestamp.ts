import moment from "moment"
import { timezone } from "@/config"
import * as cx from "@/config/constants"

const getMomentTime = (ts?: Date) => moment(ts).locale(timezone)


export default {
  /**
   * Get year
   * @param ts (Optional) Date object
   * @returns Year
   */
  getYear: (ts?: Date): number =>
    parseInt(getMomentTime(ts).format('YYYY')),

  /**
   * Get formatted date
   * @param ts (Optional) Date object
   * @returns Date in format YYYY-MM-DD
   */
  getFullDate: (ts?: Date): string =>
    getMomentTime(ts).format(cx.TS_FULL_DATE),

  /**
   * Get formatted date
   * @param ts (Optional) Date object
   * @returns Date in format YYYYMMDD
   */
  getCompactDate: (ts?: Date): string =>
    getMomentTime(ts).format(cx.TS_COMPACT_DATE),

  /**
   * Get formatted time
   * @param ts (Optional) Date object
   * @returns Time in format HH:mm:ss
   */
  getTime: (ts?: Date): string =>
    getMomentTime(ts).format(cx.TS_FULL_TIME)
}
