using System;
using System.Collections.Generic;
using System.Text;

namespace DOTNET
{
    static public class DCP20200322
    {
        /// <summary>
        /// Given a clock time in hh:mm format, determine, to the 
        /// nearest degree, the angle between the hour and the minute hands.
        ///
        /// Bonus: When, during the course of a day, will the angle be zero?
        /// </summary>
        static public int AngleBetweenClockHands(string time)
        {
            // make sure the format is correct
            if (!ValidTimeFormat(time))
            {
                return -1;
            }

            string[] hourMin = time.Split(':');

            // convert the string to ints
            if (!float.TryParse(hourMin[0], out float hour)   || 
                !float.TryParse(hourMin[1], out float minute) || 
                hour > 23 || minute > 59)
            {
                return -1;
            }
            if (hour >= 12)
            {
                hour -= 12;
            }

            // do the fancy maths
            float minuteAngle = minute * 360 / 60;
            float hourAngle = (hour / 12 * 360) + (minuteAngle / 12);
            int angleDiff = (int)Math.Round(hourAngle - minuteAngle);

            angleDiff = Math.Abs(angleDiff);
            if (angleDiff > 180)
            {
                angleDiff = 360 - angleDiff;
            }

            return angleDiff;
        }

        static public int AngleBetweenClockHandsLessReadable(string time)
        {
            if (!ValidTimeFormat(time)) { return -1; }
            if (!float.TryParse(time.Split(':')[0], out float hour) ||
                !float.TryParse(time.Split(':')[1], out float minute) ||
                hour > 23 || minute > 59) { return -1; }
            if (hour >= 12) { hour -= 12; }
            int angleDiff = (int)Math.Round(((hour / 12 * 360) + ((minute * 360 / 60) / 12)) - (minute * 360 / 60));
            return angleDiff > 180 ? Math.Abs(360 - angleDiff) : Math.Abs(angleDiff);
        }
        static private bool ValidTimeFormat(string time)
        {
            if (time.Length != 5)
            {
                return false;
            }
            for (int i = 0; i < time.Length; i++)
            {
                if (i != 2 && !int.TryParse(time[i].ToString(), out int _))
                {
                    return false;
                }
                else if (i == 2 && time[i] != ':')
                {
                    return false;
                }
            }

            return true;
        }

    }
}
