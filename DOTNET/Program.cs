using System;
using System.Collections.Generic;

namespace DOTNET
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = { 2, 3, 6, 4, 10, 7, 18, 20, 43, 11, 7, 90, 5, 8, 1 };

            System.Console.WriteLine(DCP20200322.AngleBetweenClockHands("00:59"));
        }


        /*
        Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.
        For example, for the input [1, 2, 3, 10], you should return 7.
        Do this in O(N) time.
        */
        static public int FindSmallestNumNotSubset(int[] arr) {
            var curr = 0;
            var allSum = 0;  // sum of all the array values

            for (var i = 0; i < arr.Length; i++) {
                System.Console.WriteLine(allSum);
                curr = arr[i];

                if (curr - allSum > 1) 
                    return ++allSum;

                allSum += curr;
            }
            return ++allSum;
        }


        /*
        
        */
    }
}
