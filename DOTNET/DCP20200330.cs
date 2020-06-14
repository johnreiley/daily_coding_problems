using System;
using System.Collections.Generic;
using System.Text;

namespace DOTNET
{
    static public class DCP20200330
    {
        /// <summary>
        /// Given an unsorted array, in which all elements are 
        /// distinct, find a "peak" element in O(log N) time.
        ///
        /// An element is considered a peak if it is greater than 
        /// both its left and right neighbors. It is guaranteed 
        /// that the first and last elements are lower than all others.
        /// </summary>
        static public int FindPeakElement(int[] array)
        {
            if (array == null || array.Length < 2)
            {
                return 0;
            }
            else if (array.Length == 2)
            {
                return array[0] > array[1] ? 0 : 1;
            }

            int start = 0;
            int middle = array.Length / 2;
            int end = array.Length - 1;

            int midVal;
            int leftVal;
            int rightVal;

            do
            {
                midVal = array[middle];
                leftVal = array[middle - 1];
                rightVal = array[middle + 1];

                if (midVal > leftVal && midVal > rightVal)
                {
                    return middle;
                }
                else if (rightVal < leftVal)
                {
                    end = middle;
                    middle = ((end - start) / 2) + start;
                }
                else if (leftVal < rightVal)
                {
                    start = middle;
                    middle = ((end - start) / 2) + start;
                }
            }
            while (middle != start && middle != end);

            return 0;
        }
    }
}
