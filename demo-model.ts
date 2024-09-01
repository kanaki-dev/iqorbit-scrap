// const data = {
//   aptitude: [
//     {
//       id: '1',
//       question: 'Today it is Thursday.After 132 days,it will be',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Option CExplanation:Since each day of the week is repeated after 7 days.After 133 days,it will be thursday.So one day before that would be Wednesday.'
//     },
//     {
//       id: '2',
//       question: 'A train 120 meters long is running with a speed of 60 km/hr. In what time will it pass a boy who is running at 6 km/hr in the direction opposite to that in which the train is going?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Speed of train relative to boy= `(60 + 6)` km/hr = 66 km/hr`= [66 xx 5/18]` m/sec = `[55/3]` m/sec.Time taken to pass the boy=` [120 xx 3/55]` sec = 6.54 seconds'
//     },
//     {
//       id: '3',
//       question: 'Devesh can cover a certain distance in 1 hour 24 minutes by covering two-third of the distance at 6 km/hour and the rest at 7 km/hr. Calculate total distance.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Let the total distance be x , then`[{(2/3) x }/6 ] + [{(1/3) x }/7 ] = 7/5``=> x/9 + x/21 = 7/5``=> 7x = 63``=> x = 9` Therefore , total distance = `6 km`'
//     },
//     {
//       id: '4',
//       question: 'Find the H.C.F, if the numbers are in the ratio of 4 : 5 : 6 and their L.C.M. is 2400.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Let the numbers be 3x, 4x and 5x.Then,their L.C.M. = 120x.So, 120x = 2400 or x = 20.=>The numbers are (4 x 20), (5 x 20) and (6 x 20).Hence, required H.C.F = 20.'
//     },
//     {
//       id: '5',
//       question: 'What is the value of c , If 8 is 4% of a, and 4 is 8% of b. c equals b/a.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Let be the 4% of a is 4a/100.Since this equals 8, we have 4a/100=8.Solving for a yields a=8×`(100/4)`=200.Also, 8% of b equals 8b/100, and this equals 4. Hence, we have `(8/100)`×b=4. Solving for b yields  b = 50.Now, c=`b/a`=`50/200`=`1/4.`'
//     },
//     {
//       id: '6',
//       question: 'P and Q take part in 100 m race. P runs at 6kmph. P gives Q a start of 8 m and still beats him by 8 seconds. The speed of Q is:',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: '`speed =( 6**5/18)m/sec) = (30/18) m/sec`Time taken by P to cover 100 m = `(100 ** 18/30)`m/sec =60 secTime taken by Q to cover 92 m = (60 + 8) = 68 sec.Q\'s speed =`("Distance"/"Time"**18/5) kmph =(92/68 ** 18/5)` kmph = 4.86kmph.'
//     },
//     {
//       id: '7',
//       question: 'Find the speed of the boat in still water, if a boat covers a certain distance upstream in 2 hours, while it comes back in 1`1/2` hours. If the speed of the stream be 3 kmph.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Let the speed of the boat in still water be x kmph. Then,Speed downstream = (x + 3) kmph,Speed upstream = (x - 3)kmph.`(x - 3) * 2 = (x + 3) * 3/2`4x - 12 = 3x + 9x = 21kmph.'
//     },
//     {
//       id: '8',
//       question: "In covering a distance of 40 km, Kamlesh takes 2 hours more than Pankaj. If Kamlesh doubles his speed, then he would take 1 hour less than Pankaj. Then what is Kamlesh's speed?",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Let Kamlesh’s speed be x km/hr.Then, `40/x - 40/(2x) = 4`8x = 40x = 5 km/hr'
//     },
//     {
//       id: '9',
//       question: 'Find the speed of the train, if a train 142 m long passes a pole in 6 seconds.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Speed = `[142/6]` m/sec= `[23.6 ** 18/5]` km/hr = 84.9 km/hr'
//     },
//     {
//       id: '10',
//       question: 'The rate at which a sum becomes four times of itself in 25 years at S.I.,will be:',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Let sum = x. Then, S.I. = 3xRate = `[100 ** (S.I.) / P**T] %`= `[100 ** (3x) / x ** 25]% = 12%`'
//     },
//     {
//       id: '11',
//       question: 'Sum of present ages of A, B and C is 92 years. If 4 years ago, the ratio of their ages were 1:2:3 respectively, find A’s present age.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Sum of present ages of A, B and C is = 92 yearsTherefore , Sum of their ages 4 years ago = 92 – (4 * 3)= 80 years.4 years ago ratio of the ages of A , B and C was = 1:2:3Therefore, A’s age four years ago = `1/6` * 80 = 13.3 years.So , A’s present age =13.3 + 4 = 17.3 years'
//     },
//     {
//       id: '12',
//       question: 'Mayur takes thrice as long to row a distance against the stream as to row the same distance in favor of the stream. The ratio of the speed of the boat(in still water) and the stream is:',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Let speed in still water be x and speed of stream be y(Speed in still water) : (Speed of stream)=x:yDistance is same, then time taken downstream is t, and time taken to travel upstream is 3t.d=d`[(x+y) / t] = [(x-y) / (3t)]` x+y= 3x-3y2x = 4y`x/y = 4/2 = 2/1`x:y = 2:1'
//     },
//     {
//       id: '13',
//       question: 'If 120 km is done by train and the rest by car, then it takes 8 hours for a 600 km journey. Of 200 km is done by train and the rest by car, then it takes 20 minutes more. Then what would be the ratio of the speed of the train to that of the car?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Let speed of the train be x km/hr and of the car be y km/hr.Then, `120/x + 480/y = 8`=> `1/x + 4/y = 1/5`    --- (i)And, `200/x + 400/y = 25/3`=> `1/x + 2/y = 1/24`    --- (ii)Solving (i) and (ii), we get x = 60 and y = 80.Ratio of speeds = 60: 80 = 3:4'
//     },
//     {
//       id: '14',
//       question: '2 years ago A’s age was 6 times of B’s age. 6 years after the ratio between the ages of A and B becomes 10 : 3. What is A’s present age?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Older ratio = 6:1Newer ratio = 10:3Let 2 years ago ages of B and A were x and 6x respectively.`[ (6x+8)/ (x+8)] = 10/3``18x +24 = 10x + 80``8x = 56` `x=7 years`Therefore , 2 years ago , A’s age was 6 * 7 = 42 yearsTherefore, A’s present age = 42 + 2 = 44'
//     },
//     {
//       id: '15',
//       question: 'Find the product of `(8.77 xx 8.77xx 8.77+ 4.23xx 4.23 xx 4.23)/(8.77 xx 8.77 -8.77 xx 4.23+ 4.23 xx 4.23)`   ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: '= `((8.77)^3 + (4.23)^3) / ((8.77)^2 - (8.77 xx 4.23)+ (4.23)^2)`   = `(a^3 + b^3)/ (a^2 - ab+ b^2)`   = `(a+b)`   = `8.77+4.23 `   = `13`'
//     },
//     {
//       id: '16',
//       question: 'A guy bought 10 pencils for Rs. 50 and sold them for Rs. 60.What is his gain in terms of percentage?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: '`"Gain%"=("Gain"/"C.P")*100=20%`'
//     },
//     {
//       id: '17',
//       question: '3 years back average age of A and B was 32. Today average age of A,B and C is 30. What is the age of C?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: '3 years back average age of A and B is`((A-3)+(B-3))/2 = 32`Hence A+B=70Today average of A,B and C is 30 i.e.`(A+B+C)/3=30`A+B+C=90Hence C=A+B+C-A-B=20'
//     },
//     {
//       id: '18',
//       question: 'What is the unit digit in 2^30?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Cyclicity of 2 = 4 D = d * Q + R30 = 4 * 7 + 2 30/4 = Remainder 2, 22 = 4Notes:Cyclicity of 2, 3, 7, 8 => 4Cyclicity of 4, 9 => 2Cyclicity of 1, 5, 6 => 1'
//     },
//     {
//       id: '19',
//       question: 'If each edge of a cube is increased by 50%, find the percentage increase in its surface area.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Let the edge = `a` cm So increase by `50%` = `a+a/2 = 3a/2`Total surface Area of original cube = `6a^2`TSA of new cube = `6(3a/2)^2``6 xx 9a^2/4 = 13.5a^2`Increase in area = `13.5a^2 - 6a^2 = 7.5a^2` `7.5a^2` Increase % = `(7.5a^2)/(6a^2) xx 100 = 125%`'
//     },
//     {
//       id: '20',
//       question: 'I walk a certain distance and ride the car back taking a total time of 33 Minutes. I could walk both sides in 45 min. How long would it take me to ride both ways?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Time taken in walking a certain distance from X and Y = 22 `1/2` Min Time taken in riding the same distance = 33 - 22 `1/2` = 10 `1/2` Min It will take 21 Min (10 `1/2` * 2) to ride both ways.'
//     },
//     {
//       id: '21',
//       question: 'If 9th of the month falls on the day preceding Sunday, then on what day will 1st of the month fall?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'As per the question 9th of the Month=Saturday. (Day preceding Sunday)Day name repeats after 7 days.Therefore 9 minus 7=2nd of the given month is also Saturday.Then 1st of the given month= Saturday Minus one day = Friday'
//     },
//     {
//       id: '22',
//       question: 'The average of five numbers is 27. If one number is excluded, the average becomes 25. The excluded number is ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: '(27*5)-(25*4)135-10035'
//     },
//     {
//       id: '23',
//       question: 'A man can do a piece of work in 60 hours. If he takes his son with him and both work together then the work is finished in 40 hours. How many hours will the son take to do the same job, if he worked alone on the job?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'If the man takes 60 hours to complete the work, then he will finish (1/60)thof the work in 1 hour.Let us assume that his son takes x hours to finish the same work.If they work together for 1 hour they will finish `1/60 + 1/x = 1/40` of the work.Therefore,x=120The son, working alone would take 120 hours to complete the work.'
//     },
//     {
//       id: '24',
//       question: 'I forgot the last digit of a 7 digit telephone number. If one randomly dial the final three digits after correctly dialling the four, then what is the chance of dialling the correct number?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'It is given that last three digits are randomly dialled. Then each of the digit can be selected out of 10 digits in 10 ways.Hence required probability= `1/10 * 1/10 * 1/10`= `1/1000`'
//     },
//     {
//       id: '25',
//       question: 'Find the remainder when 6799 is divided by 7.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Remainder of `((67^99)/7)`==R==>`((63+4)^99)/7`63 is divisible by 7 for any power, so required remainder will depend on the power of 4.Require remainder:`(4^99)/7==R==>(4^(96+3))/7``4^3/7==> 64/7==> (63+1)/7==R==>1`'
//     },
//     {
//       id: '26',
//       question: 'On 5th December 1993, Nirmala and Raju celebrated their anniversary on Sunday. What will be the day of their anniversary in 1997 ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Normal year jump +1 gain; Leap year jump +2 gain.Sunday plus five days'
//     },
//     {
//       id: '27',
//       question: 'A sum of money placed at compound interest doubles itself in 4 years. In how many years will it amount to 8 times?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Let,Principal = Rs. 100.Amount = Rs. 200.Rate = r%Time = 4 years.Now,`A = P*[1+ (r/100)]^n`;`200 = 100*[1+(r/100)]^4`;`2 = [1+(r/100)]^4`; ........... (i)If sum become 8 times in the time n years,then,`8 = (1+(r/100))^n`;`2^3 = (1+(r/100))^n`; ........(ii)Using eqn (i) in (ii), we get;`([1+(r/100)]^4)^3 = (1+(r/100))^n`;`[1+(r/100)]^12 = (1+(r/100))^n`;Thus, n = 12 years.'
//     },
//     {
//       id: '28',
//       question: 'The average temperature for Wednesday, Thursday and Friday was 40oC. The average for Thursday, Friday and Saturday was 41oC. If temperature on Saturday was 42oC, what was the temperature on Wednesday?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Average temperature for Wednesday, Thursday and Friday = 40oCTotal temperature = 3*40 = 120oCAverage temperature for Thursday, Friday and Saturday = 41oCTotal temperature = 41*3 = 123oCTemperature on Saturday = 42oCNow,(Thursday + Friday + Saturday) - (Wednesday + Thursday + Friday) = 123-120;Saturday - Wednesday = 3Wednesday = 42-3 = 39oC.'
//     },
//     {
//       id: '29',
//       question: 'The difference between simple and compound interest for the fourth year is Rs. 7280 at 20% p.a. What is the principal sum?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Difference between CI and SI for nth year,= `((Pr) /100) *[(1 +(r /100))^(n-1) -1]`→ `7280 = ((P*20)/100) *[(1.2)^3-1]`→ P = 50000.'
//     },
//     {
//       id: '30',
//       question: 'Half percent, written as a decimal, is',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'As we know, 1% = 1/100Hence, (1/2)% = (1/2 * 1/100) = 1/200 = 0.005'
//     },
//     {
//       id: '31',
//       question: 'The remainder when 1010+ 10100+101000+ . . . . . . + 101000000000 is divided by 7 is',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Number of terms in the series = 10.(We can get it easily by pointing the number of zeros in power of terms.In 1st term number of zero is 1, 2nd term 2, and 3rd term 3 and so on.)1010/7, Written as,(7+3)(4*2+2)/7The remainder will depend on,32/7So, remainder will be 2.10100/7, Can be written as,3100/7.Or, 325*4/7Or, 34/7.Remainder = 1101000/7, Remainder = 21010000/7, Remainder = 1So, we get alternate 2 and 1 as remainder, five times each.So, required remainder is given by(2+1+2+1+2+1+2+1+2+1)/7= 15/7Remainder: 1'
//     },
//     {
//       id: '32',
//       question: 'The number of oranges in three basket are in the ratio 3 : 4 : 5. In which ratio the no. of oranges in first two basket must be increased so that the new ratio becomes 5 : 4 : 3 ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Let,B1 : B2 : B3 = 3x : 4x : 5xAgain,B1 : B2 : B3 = 5y : 4y : 3yNumber of oranges remain constant in third basket as increase in oranges takes place only in first two baskets.Hence, 5x = 3y `x=(3y)/5`and,3x : 4x : 5x → `(9y) /5 : (12y) /5 : (15y) /5 = 9y : 12y : 15y`And, 5y : 4y : 3y → 25y : 20y : 15yTherefore, Increment in first basket = 16.Increment in second basket = 8.Thus, Required ratio = 16 /8 = 2 : 1'
//     },
//     {
//       id: '33',
//       question: 'The cost of setting up a magazine is Rs. 2800. The cost of paper and ink etc is Rs. 80 per 100 copies and printing cost is Rs. 160 per 100 copies. In last month 2000 copies were printed but only 1500 copies could be sold at Rs. 5 each. Total 25% profit on the sale price was realized. There is one more resource of income from magazine which is advertising. What sum of money obtained from the advertising in magazine?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Set up cost = Rs. 2800Paper etc = Rs. 1600Printing cost = Rs. 3200Total cost = Rs. 7600Total sale price = 1500*5 = 7500Let amount obtained from advertising be x then,(7500+x)-7600 = 25 % of 7500x = 1975.'
//     },
//     {
//       id: '34',
//       question: 'Today is Monday. After 63 days, it will be :',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Each day of the week is repeated after 7 days.`63/7`=`9`, Remainder:0So, after 63 days, it will be Monday.'
//     },
//     {
//       id: '35',
//       question: 'Avinash covers a distance of 8km in 50 minutes. If he covers 3km distance in 2/5th of time then, What speed should he maintain to cover the remaining distance in the remaining time?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Total distance = 8 Km  Total time = 50 minutes Time taken to cover the distence of 3 Km = `50**(2/5) = 20 min = 1/3 hours` Remaining distance = 8 - 3 = 5 Km  Required speed = `5/((1/3)) = 15 Kmph`'
//     },
//     {
//       id: '36',
//       question: 'Fresh fruit contains 68% water and dry fruit contains 20% water. How much dry fruit can be obtained from 100 kg of fresh fruits ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'The fruit content in both the fresh fruit and dry fruit is the same.Given, fresh fruit has 68% water. So remaining 32% is fruit content. Weight of fresh fruits is 100kgDry fruit has 20% water. So remaining 80% is fruit content. Let weight of dry fruit be y kg.Fruit % in freshfruit = Fruit% in dryfruit`(32/100) ** 100 = (80/100 ) ** y`We get, y = 40 kg'
//     },
//     {
//       id: '37',
//       question: "In a two-digit number, the digit in the unit's place is more than twice the digit in ten's place by 1. If the digits in the unit's place and the ten's place are interchanged, difference between the newly formed number and the original number is less than the original number by 1. What is the original number ?",
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Let the ten's digit be x. Then, unit's digit = 2x + 1.[10x + (2x + 1)] - [{10 (2x + 1) + x} - {10x + (2x + 1)}] = 1<=> (12x + 1) - (9x + 9) = 1 <=> 3x = 9, x =  3.So, ten's digit = 3 and unit's digit = 7. Hence, original number = 37."
//     },
//     {
//       id: '38',
//       question: 'Find the odd man out?396, 462, 572, 427, 671, 264.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'In each number except 427, the middle digit is the sum of other two.'
//     },
//     {
//       id: '39',
//       question: 'Three numbers are in the ratio 4 : 5 : 6 and their average is 25. The largest number is :',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Let the numbers be 4x, 5x and 6x.Then, `(4x + 5x + 6x ) / 3 = 25`  => 5x = 25=> x = 5. Largest number  6x = 30.'
//     },
//     {
//       id: '40',
//       question: 'The diagonal of a rectangle is  cm and its area is 20 sq. cm. Theperimeter of the rectangle must be:',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: '`sqrt(l^2+b^2) = sqrt(41)` (or) `l^2+b^2 = 41`Also, `lb = 20``(l+b)^2 = l^2 + b^2 + 2lb``= 41 + 40 = 81``(l + b) = 9`Perimeter = `2(l + b) = 18 cm`'
//     },
//     {
//       id: '41',
//       question: "A and B invest in a business in the ratio 3 : 2. If 5% of the total profit goes to charity and A's share is Rs. 855, the total profit is :",
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Let the total profit be Rs. 100.After paying to charity, A's share  =  = Rs. 57.If A's share is Rs. 57, total profit = Rs. 100.If A's share is Rs. 855, total profit  =  = 1500."
//     },
//     {
//       id: '42',
//       question: 'What annual installment will discharge a debt of Rs 1092 due in 3 years at 12% simple interest?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Let each instalment be Rs.x .Then, `[x + (x ** 12 ** 1)/100] + [ x + (x **12 ** 2)/100] + x =1092` `( (28x)/25 ) + ( (31x)/25 ) + x = 1092` `(28x + 31x + 25x) = (1092 ** 25)` `x = (1092 ** 25)/84= 325` Each instalment = Rs. 325'
//     },
//     {
//       id: '43',
//       question: 'A mixture contains alcohol and water in the ratio 4 : 3. If 5 liters of water is added to the mixture, the ratio becomes 4: 5. Find the quantity of alcohol in the given mixture.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Let the quantity of alcohol and water be 4x litres and 3x litres respectively20x = 4(3x+5)8x = 20x = 2.5Quantity of alcohol = (4 x 2.5) litres = 10 litres.'
//     },
//     {
//       id: '44',
//       question: 'The total age of A and B is 12 years more than the total age of B and C. C is how many years younger than A ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: '(A+B) - (B+C) = 12A - C = 12.C is younger than A by 12 years.'
//     },
//     {
//       id: '45',
//       question: 'When 0.36 is written in simplest form, the sum of the numerator and the denominator is :',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: '0.36 = 36/100 = 9/25.Sum of the numerator and denominator is 9 + 25 = 34'
//     },
//     {
//       id: '46',
//       question: 'Jack takes 20 minutes to jog around the race course one time, and 25 minutes to jog around a second time. What is his average speed in miles per hour for the whole jog if the course is 3 miles long?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Average speed = total distance / total timeTotal distance covered = 6 miles; total time = 45 minutes = 0.75 hoursAverage speed = 6/ 0.75 = 8 miles/hour'
//     },
//     {
//       id: '47',
//       question: 'The greatest number which on dividing 1657 and 2037 leaves remainders 6 and 5 respectively, is:',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Required number = H.C.F. of (1657 - 6) and (2037 - 5)= H.C.F. of 1651 and 2032 = 127.'
//     },
//     {
//       id: '48',
//       question: 'The interger value of x at which inequality fails,3x + 12  18',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'For x=2, 3(2)+ 12 = 06+12=18 so 18<18 is not possible since 18=18 and hence inequality fails'
//     },
//     {
//       id: '49',
//       question: 'If 6th March, 2005 is Monday, what was the day of the week on 6th March, 2004?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'The year 2004 is a leap year. So, it has 2 odd days.But, Feb 2004 not included because we are calculating from March 2004 to March 2005.So it has 1 odd day only.The day on 6th March, 2005 will be 1 day beyond the day on 6th March, 2004.Given that, 6th March, 2005 is Monday.6th March, 2004 is Sunday (1 day before to 6th March, 2005).'
//     },
//     {
//       id: '50',
//       question: 'The maximum gap between two successive leap year is?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'This can be illustrated with an example.Ex: 1896 is a leap year.The next leap year comes in 1904 (1900 is not a leap year).To eliminate this error, the Gregorian calendar stipulates that a year that is evenly divisible by 100 (for example, 1900) is a leap year only if it is also evenly divisible by 400. This is because they are evenly divisible by 100 but not by 400.'
//     },
//     {
//       id: '51',
//       question: 'What was the day of the week on 20 may, 1985 ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Here Number of odd days in 1600 years = 0 Number of odd days in 300 years from 1600 to 1900 = 5*3 = 2 week + 1 odd day= 1 odd day Number of odd days in 84 years= 21 leap year + 63 days = 21*2 + 63*1 = 105 days = 0 odd days Number of odd days in 20 may = 31 days of Jan. + 28 days of feb + 31 days of mar. + 30 days in april + 20 days in may = 140 days = 0 odd day So total number of odd days = 0+1+0+0=1 = Monday'
//     },
//     {
//       id: '52',
//       question: 'A clock loses 1% time during the first week and then gains 2% time during the next one week. If the clock was set right at 12 noon on a Sunday, what will be the time shown by the clock exactly 14 days from the time it was set right?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The clock loses 1% time during the first week. In a day there are 24 hours and in a week there are 7 days. Therefore, there are 7 * 24 = 168 hours in a week. If the clock loses 1% time during the first week, then it will show a time which is 1% of 168 hours less than 12 Noon at the end of the first week = 1.68 hours less. Subsequently, the clock gains 2% during the next week. The second week has 168 hours and the clock gains 2% time = 2% of 168 hours = 3.36 hours more than the actual time. As it lost 1.68 hours during the first week and then gained 3.36 hours during the next week, the net result will be a -1.68 + 3.36 = 1.68 hour net gain in time. So the clock will show a time which is 1.68 hours more than 12 Noon two weeks from the time it was set right. 1.68 hours = 1 hour and 40.8 minutes = 1 hour + 40 minutes + 48 seconds. i.e. 1 : 40 : 48 P.M.'
//     },
//     {
//       id: '53',
//       question: 'A runs 25% faster than B and is able to allow B a lead of 7 meters to end a race in dead heat. What is the length of the race?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'A runs 25% as fast as B. That is, if B runs 100m in a given time, then A will run 125m in the same time In other words, if A runs 5m in a given time, then B will run 4m in the same time. Therefore, if the length of a race is 5m, then A can give B a start of 1m so that they finish the race in a dead heat. Start : length of race :: 1 : 5 In this question, we know that the start is 7m. Hence, the length of the race will be 7 * 5 = 35m.'
//     },
//     {
//       id: '54',
//       question: 'The driver of a maruti car driving at a speed of 68km/h locates a bus 40m ahead of him. After 10sec the bus is 60m behind. The speed of the bus is',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Let the speed of the bus be x m/s speed of the car = 68km/hr (or) `170/9` m/s in 10s the car covers a distance of 100m (40m + 60m = 100m) at a speed of (`170/9` – x)m/s distance = speed*time`100 = (170/9 -x) **10` x = `80/9` m/sNow convert it to km/hr which is 32 km/hr'
//     },
//     {
//       id: '55',
//       question: 'A train 150 m long is running with a speed of 68 kmph. In what time will it pass a man who is running at 8 kmph in the same direction in which the train is going?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Speed of the train relative to man = (68 - 8) kmph = (60* `5/18`) m/sec = (`50/3`)m/sec Time taken by the train to cross the man I = Time taken by It to cover 150 m at `50/3` m / sec = 150 *`3/ 50` sec = 9 sec'
//     },
//     {
//       id: '56',
//       question: 'A shepherd has 1 million sheep at the beginning of Year 2000. The numbers grow by x during the year. A famine hits his village in the next year and many of his sheep die. The sheep population decreases by y during 2001 and at the beginning of 2002 the shepherd finds that he is left with 1 million sheep. Which of the following is correct?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Let us assume the value of x to be 10%Therefore, the number of sheep in the herd at the beginning of year 2001 (end of 2000) will be 1 million + 10% of 1 million = 1.1 million In 2001, the numbers decrease by y% and at the end of the year the number sheep in the herd = 1 million. i.e., 0.1 million sheep have died in 2001. In terms of the percentage of the number of sheep alive at the beginning of 2001,it will be `(0.1/1.1) ** 100% = 9.09%` From the above illustration it is clear that x>yx'
//     },
//     {
//       id: '57',
//       question: 'A person starting with 64 rupees and making 6 bets, wins three times and loses three times, the wins and loses occurring in random order. The chance for a win is equal to the chance for a loss. If each wager is for half the money remaining at the time of the bet, then the final result is:',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'As the win leads to multiplying the amount by 1.5 and loss leads to multiplying the amount by 0.5, we will multiply initial amount by 1.5 thrice and by 0.5 thrice (in any order).The overall resultant will remain same.So final amount with the person will be (in all cases):=64(1.5)(1.5)(1.5)(0.5)(0.5)(0.5)= Rs 27Hence the final result is: 64-27 =37'
//     },
//     {
//       id: '58',
//       question: 'A magician holds one six-sided die in his left hand and two in his right. What is the probability the number on the dice in his left hand is greater than the sum of the dice in his right?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The only way to roll higher on one die is if the magicians rolls between 2 and 5, inclusive, with two dice. Where he to roll a six with two dice than there is no way he could eclipse that number by rolling one die.Below is the probability of rolling a certain number with two dice.‘2’ – 1/36‘3’ – 2/36‘4’ – 3/36‘5’-  4/36Now the only numbers a magician can roll with the one die and win is between 3 and 6, inclusive. The chances of rolling any are always 1/6.Next, we have to combine the probability distribution relating to two dice with that relating to the one.The chances of a magician rolling any given number with one die are 1/6. So let’s start with the lowest number he can roll: a ‘3.’ To win with this roll, he will have to roll a ‘2’ with two dice, the odds of which are 1/36. So .So the chances of him rolling a ‘3’ with one die and winning are 1/216.Let’s repeat this logic for the next roll, ‘4.’ Chances of rolling are 1/6. Only way a ‘4’ wins is if he rolls a ‘2’ or a ‘3’ with two dice.Odds of rolling a ‘2’ with two dice  + odds of rolling a ‘3’ with two dice = . Combine this with the odds of rolling a ‘4’ ( which is 1/6): .If he rolls a ‘5’ with one die, he can win if he rolls a ‘4’ with two dice, the probability is 3/36. He can also win if he rolls a ‘2’ or a ‘3’ with two dice, the number outcomes we just found: 3/36. So we add Next, if he rolls a ‘6’ on one die, he can beat ‘2’ through ‘5’ with the two dice. Number of ways to roll a ‘5’ = 4/36. Combining this with the odds of rolling a ‘6’ on one die with the odds or rolling ‘2’, ‘3’, ‘4’, or ‘5’ with the two dice we get: 10/216.You may be wondering why I left the denominator as 216. Well, this allows us to add up all the instances he can possibly win:'
//     },
//     {
//       id: '59',
//       question: '2, 12, 36, 80, 150,..',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The series is 13 + 12, 23 + 22, 33 + 32'
//     },
//     {
//       id: '60',
//       question: "The average age of a class of 22 students is 21 years. The average increased by 1 when the teacher's age also included. What is the age of the teacher?",
//       options: [Array],
//       correctAnswer: 'd',
//       desc: '`"Total age of all students" /22 = 21 `Total age of all students= 22 *21`"Total age of all students + age of the teacher"/(22+1) = 21+1`Total age of all students + age of the teacher = 22 * 23Age of the teacher = 23×22 – 22×21 = 22(23-21) = 22×2 = 44'
//     },
//     {
//       id: '61',
//       question: "Ayisha's age is 1/6th of her father's age. Ayisha's father's age will be twice the age of Shankar's age after 10 years. If Shankar's eighth birthday was celebrated two years before, then what is Ayisha 's present age.?",
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "Consider Ayisha's present age = x Then her father's age = 6x Given that Ayisha 's father's age will be twice the age of Shankar's age after 10 years => Shankar's age after 10 years = `1/2`(6x + 10) = 3x + 5 Also given that Shankar's eight birthdays was celebrated two years before So his current age is 8 + 2 = 10 years old => Shankar's age after 10 years = 10 + 10 = 20 => 3x + 5 = 20 => x = 5 Therefore, Ayisha 's present age = 5 years"
//     },
//     {
//       id: '62',
//       question: 'My brother is 3 years elder to me. My father was 28 years of age when my sister was born while my mother was 26 years of age when I was born. If my sister was 4 years of age when my brother was born, then what was the age my father when my brother was born?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "Let my age = xThen, My brother's age = x + 3 My mother's age = x + 26 My sister's age = (x + 3) + 4 = x + 7 My father's age = (x + 7) + 28 = x + 35 => age my father when my brother was born = x + 35 – (x + 3) = 32"
//     },
//     {
//       id: '63',
//       question: "A is as much younger than B as he is older than C. If the sum of the ages of B and C is 50 years, what is exactly the difference between B and A's age?",
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "Age of C < Age of A < Age of B Given that sum of the ages of B and C is 50 years. Let's take B's age = x and C's age = 50-x Now we need to find out B's age – A's age. But we cannot find out this with the given data."
//     },
//     {
//       id: '64',
//       question: "Sobha's father was 38 years of age when she was born while her mother was 36 years old when her brother four years younger to her was born. What is the difference between the ages of her parents?",
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "Let Sobha's age = x and her brother's age = x-4 Sobha's father's age = x + 38 Sobha's mother's age = (x - 4) + 36=> Sobha's father's age - Sobha's mother's age  = (x + 38) – [(x - 4) + 36] = x + 38 – x + 4 – 36 = 6"
//     },
//     {
//       id: '65',
//       question: 'An error 2% in excess is made while measuring the side of a square. What is the percentage of error in the calculated area of the square?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Error = 2% while measuring the side of a square. Let the correct value of the side of the square = 100 Then the measured value = 100 + (2% of 100) = 100 +2 = 102 (∵ error 2% in excess) Correct Value of the area of the square = 100 × 100 = 10000Calculated Value of the area of the square = 102 × 102 = 10404Error = 10404 - 10000 = 404Percentage Error=4.04%ErrorActual Value×100=40410000×100=4.04%'
//     },
//     {
//       id: '66',
//       question: 'A towel, when bleached, lost 20% of its length and 10% of its breadth. What is the percentage of decrease in area?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Solution 1: Let original length = 100 and original breadth = 100 Then original area = 100 × 100 = 10000 Lost 20% of length => New length = Original length - (20% of Original Length)100- (20% of 100) = 100-20 = 80Lost 10% of breadth => New breadth= Original breadth - (10% of original breadth)= 100 - (10% of 100) = 100-10 = 90New area = 80 × 90 = 7200 Decrease in area = Original Area - New Area = 10000 - 7200 = 2800 Percentage of decrease in area = `(2800/10000) * 100 = 28%`'
//     },
//     {
//       id: '67',
//       question: 'The length of a room is 5.5 m and width is 3.75 m. What is the cost of paying the floor by slabs at the rate of Rs. 800 per sq. metre.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Area = 5.5 × 3.75 sq. metre.Cost for 1 sq. metre. = Rs. 800Hence total cost = 5.5 × 3.75 × 800 = 5.5 × 3000 = Rs. 16500'
//     },
//     {
//       id: '68',
//       question: 'The length of a rectangle is twice its breadth. If its length is decreased by 5 cm and breadth is increased by 5 cm, the area of the rectangle is increased by 75 sq.cm. What is the length of the rectangle?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Let breadth = x cm Then length = 2x cm Area = lb = x × 2x = 2x2 New length = (2x - 5) New breadth = (x + 5) New Area = lb = (2x - 5)(x + 5) But given that new area = initial area + 75 sq.cm. => (2x - 5)(x + 5) = 2x2 + 75 => 2x2 + 10x - 5x - 25 = 2x2 + 75 => 5x - 25 = 75 => 5x = 75 + 25 = 100 => x = 1005 = 20 cmLength = 2x = 2 × 20 = 40cm'
//     },
//     {
//       id: '69',
//       question: 'If the difference between the length and breadth of a rectangle is 23 m and its perimeter is 206 m, what is its area?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'l - b = 23 ....(Equation 1)perimeter = 2(l + b) = 206=> l + b = 103 ....(Equation 2)(Equation 1) + (Equation 2) => 2l = 23 + 103 = 126=> l = 1262 = 63 metreSubstituting this value of l in (Equation 1), we get63 - b = 23=> b = 63 - 23 = 40 metreArea = lb = 63 × 40 = 2520 m2'
//     },
//     {
//       id: '70',
//       question: 'What is the least number of squares tiles required to pave the floor of a room 15 m 17 cm long and 9 m 2 cm broad?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'l = 15 m 17 cm = 1517 cm b = 9 m 2 cm = 902 cm Area = 1517 × 902 cm2 Now we need to find out HCF(Highest Common Factor) of 1517 and 902.Hence, HCF of 1517 and 902 = 41 Hence, side length of largest square tile we can take = 41 cm Area of each square tile = 41 × 41 `"cm"^2`Number of tiles required = `(1517 * 902)/(41 * 41) = 37 * 22 = 814`'
//     },
//     {
//       id: '71',
//       question: 'Find the odd man out:4, 9, 256, 529, 573',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: '573 is not a perfect square'
//     },
//     {
//       id: '72',
//       question: 'In a single throw of two dice , find the probability that neither a doublet nor a total of 8 will appear.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'n(S) = 36A = {(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6)}B = { (2, 6), (3, 5), (4, 4), (5, 3), (6, 2) } Required probability = `10/36 = 5/18` Note: (4,4) occurs in both. Count once.'
//     },
//     {
//       id: '73',
//       question: 'A division of a company consists of seven men and five women.  If two of these twelve employees are randomly selected as representatives of the division, what is the probability that both representatives will be female?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'First, the denominator. We have twelve different people, and we want a combination of two selected from these twelve.  We will use the formula :`nC2 = (n(n-1))/2`which, for profound mathematical reasons we need not address here, is also the formula for the sum of the first (n – 1) positive integers.  Here`12C2 = (12*(11))/2 = 6 * 11 = 66`That’s the total number of pairs we could pick from the twelve employees.  That’s our denominator.For the numerator, we want every combination of two from the five female employees.  That’s`5C2 = (5*(4))/2 = 5 * 2 = 10`That’s the  number of pairs of female employees we could pick from the five.  That’s our numerator.probability = `10/66 = 5/33`Answer = Option D'
//     },
//     {
//       id: '74',
//       question: 'What day of the week does May 28 2006 fall on ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: '28th May 2006 = (2005 years + period from 1-Jan-2006 to 28-May-2006)We know that number of odd days in 400 years = 0Hence the number of odd days in 2000 years = 0 (Since 2000 is a perfect multiple of 400)Number of odd days in the period 2001-2005= 4 normal years + 1 leap year = 4 x 1 + 1 x 2 = 6Days from 1-Jan-2006 to 28-May-2006 = 31 (Jan) + 28 (Feb) + 31 (Mar) + 30 (Apr) + 28(may)= 148148 days = 21 weeks + 1 day = 1 odd dayTotal number of odd days = (0 + 6 + 1) = 7 odd days = 0 odd day0 odd day = SundayHence May 28 2006 is Sunday.'
//     },
//     {
//       id: '75',
//       question: 'How many days are there in x weeks x days ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'x weeks x days = (7×x)+x=7x+x= 8x days'
//     },
//     {
//       id: '76',
//       question: 'The calendar for the year 2007 will be the same for the year',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Take the year 2014 given in the choice.Total odd days in the period 2007-2013 = 5 normal years + 2 leap year = 5 x 1 + 2 x 2 = 9 odd days = 2 odd day (As we can reduce multiples of 7 from odd days which will not change anything)Take the year 2016 given in the choice.Number of odd days in the period 2007-2015 = 7 normal years + 2 leap year = 7 x 1 + 2 x 2 = 11 odd days = 4 odd days (Even if the odd days were 0, calendar of 2007 will not be same as the calendar of 2016 because 2007 is not a leap year whereas 2016 is a leap year. In fact, you can straight away ignore this choice due to this fact without even bothering to check the odd days) Take the year 2017 given in the choice.Number of odd days in the period 2007-2016 = 7 normal years + 3 leap year = 7 x 1 + 3 x 2 = 13 odd days = 6 odd days Take the year 2018 given in the choice.Number of odd days in the period 2007-2017 = 8 normal years + 3 leap year = 8 x 1 + 3 x 2 = 14 odd days = 0 odd day (As we can reduce multiples of 7 from odd days which will not change anything)Also, both 2007 and 2018 are not leap years. Since total odd days in the period 2007-2017 = 0 and both 2007 and 2018 are of same type, 2018 will have the same calendar as that of 2007'
//     },
//     {
//       id: '77',
//       question: 'Arun went for a movie nine days ago. He goes to watch movies only on Thursdays. What day of the week is today?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Clearly it can be understood from the question that 9 days ago was a ThursdayNumber of odd days in 9 days = 2 (As 9-7 = 2, reduced perfect multiple of 7 from total days)Hence today = (Thursday + 2 odd days) = Saturday'
//     },
//     {
//       id: '78',
//       question: 'If the seventh day of a month is three days earlier than Friday, What day will it be on the nineteenth day of the month?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Given that seventh day of a month is three days earlier than Friday'
//     },
//     {
//       id: '79',
//       question: 'X and Y invest Rs.21000 and Rs.17500 respectively in a business. At the end of the year, they make a profit of Rs.26400. What is the share of X in the profit?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Ratio of the investment = `21000 : 17500 = 210 : 175 = 42 : 35 = 6 : 5`Share of X in the profit = `26400 ** (6/11) = 2400 ** 6 = 14400`'
//     },
//     {
//       id: '80',
//       question: 'Kamal started a business with Rs.25000 and after 4 months, Kiran joined him with Rs.60000. Kamal received Rs.58000 including 10% of profit as commission for managing the business. What amount did Kiran receive?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Ratio of the profits = 25000*12 : 60000*8= 25*12 : 60*8 = 5*3 : 12:2 = 5 : 4*2 = 5:8Let the total profit = x. Then Kamal received `(10x)/100 = x/10` as commission for managing the businessRemaining profit = `x- x/10 = (9x)/10` which is shared in the ration 5:8Kamal's share = `x/10 + ((9x)/10) * (5/13) = 58000`=> `x + 9x(5/13) = 580000`=> `x(1 + 45/13) = 580000`=> `x ( 58/13) = 580000`=> `x ( 1/13) = 10000`=> `x = 130000`Kiran's share = 130000 - 58000 = 72000"
//     },
//     {
//       id: '81',
//       question: "A & B partner in a business , A contribute 1/4 of the capital for 15 months & B received 2/3 of the profit . For how long B's money was used ?",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: "B received 2/3 of the profit=> A : B = `1/3 : 2/3 = 1:2`Let the total capital = xThen A's capital = `x/4`B's capital = `x – x/4 = (3x)/4`Assume B's money was used for b monthsThen A:B = `(x/4)**15 : ((3x)/4)**b = 1 : 2`=> `15/4 : (3b)/4 = 1 : 2`=> `15 : 3b = 1 : 2`=> `5 : b = 1 : 2`=> `5/b = 1/ 2`=> `b = 5**2 = 10`"
//     },
//     {
//       id: '82',
//       question: 'There are 10 items in a box, out of which 3 are defective. 2 items are taken one after the other. What is the probability that both of them are defective?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'probability = `3C2/10C2 = ((3!) / (2! * 1!))/((10!) / (8! * 2!)) = 1/15``1/15 * 4/4 = 4/60`'
//     },
//     {
//       id: '83',
//       question: 'A vendor sold the item at Rs. 500 with a profit margin of 25%. What is the cost price of the item?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'We know,`Profit % = ((Selli ng Price - Cost Price))/(Cost Price) * 100` `=>25 = ((500-x))/(x)*100` => 125x = 50000=> x = 400'
//     },
//     {
//       id: '84',
//       question: 'A shopkeeper bought a box of 100 toffees for Rs. 200. His son ate 10 toffees (ofcourse, without paying!). At what S.P should each toffee be sold so shopkeeper makes an overall profit of 20%?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'C.P for shopkeeper = Rs.200Required Profit % = 20%=> Required Total S.P = 1.2 * 200 = Rs. 240Toffees Left = 100 - 10 = 90S.P for Each Toffee = 240/90 = Rs. 2.67'
//     },
//     {
//       id: '85',
//       question: 'A petrol pump owner mixes 1 litre of solvent in 9 litres of Petrol. The cost price of solvent is Rs. 10 per litre and that of petrol is Rs.70 per litre. The selling price of the mixture is Rs. 76.8 per litre. What is the profit percentage?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'C.P. of 10 litres of Mixture = 10*1+70*9 = Rs.640S.P. of 10 litres of Mixture = 76.8 * 10 = Rs. 768Thus Profit % = `((768-640)/640)*100`=> Profit % = 20%'
//     },
//     {
//       id: '86',
//       question: 'Let N be the greatest number that will divide 1305, 4665 and 6905, leaving the same remainder in each case. The sum of the digits in N is :',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'N = H.C.F of (4655-1305), (6905-4655) and (6905-1305) = H.C.F of 3360, 2240 and 5600N= 1120, hence sum of digits in N= (1+1+2+0)= 4'
//     },
//     {
//       id: '87',
//       question: 'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Let the speeds of the two trains be x m/sec and y m/sec respectively. Then, length of the first train = 27x metres, and length of the second train = 17y metres.`(27x+17y)/(x+y) = 23`27x + 17y = 23x + 23y4x = 6y`x/y = 3/2`'
//     },
//     {
//       id: '88',
//       question: 'The length of a room is 5.5 m and width is 3.75 m. Find the cost of paving the floor by slabs at the rate of Rs.800 per sq. metre.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Area of the floor = (5.5 x 3.75) m2 = 20.625 m2.Cost of paving = Rs. (800 x 20.625) = Rs.16500.'
//     },
//     {
//       id: '89',
//       question: 'A rectangular parking space is marked out by painting three of its sides. If the length of the unpainted side is 9 feet, and the sum of the lengths of the painted sides is 37 feet, then what is the area of the parking space in square feet?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Clearly, we have : length(l) = 9 ft.and l+2b = 37 ft.i.e., 9+2b = 37        2b = 37-9       2b = 28       So, the breadth(b) = 14 ft.Area = (l x b) = (9 x 14) sq.ft. =126 sq.ft.'
//     },
//     {
//       id: '90',
//       question: 'The difference between the length and breadth of a rectangle is 23 m. If its perimeter is 206 m, then its area in m2 is',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'The difference between the length and breadth is = 23 m.i.e., (l - b) = 23-------- eq.(1)And perimeter = 206 m.i.e., 2(l + b) = 206       l + b = 103---------eq.(2)By solving eq.(1) and (2), we get length(l) = 63 and breadth(b) = 40.So, Area = ( l x b ) = (63 x 40) m2 = 2520 m2.'
//     },
//     {
//       id: '91',
//       question: 'What will be the cost of gardening 1 meter broad boundary around a rectangular plot having perimeter of 340 meters at the rate of Rs.10 per square meter?',
//       options: [Array],
//       correctAnswer: 'answer',
//       desc: 'Perimeter of the boundary = 2(L + b) = 340Area of the boundary = [(L + 2)(b + 2) - Lb]                                    = [Lb + 2L + 2b + 4 - Lb]                                    = 2(L + b) + 4                                    = 340 + 4                                     =344.Cost of gardening = Rs. (344 X 10)                                = Rs.3440'
//     },
//     {
//       id: '92',
//       question: 'Given that 27th February 2003 is a Thursday. What day of the week was 27th February 1603?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'After every 400 years, the same day occurs.Thus, if 27th February 2003 is Thursday, before 400 years i.e., on 27th February 1603 has to be Thursday.'
//     },
//     {
//       id: '93',
//       question: '2 meters broad pathway is to be constructed around a rectangular plot on the inside. The area of the plot is 96 sq.m. The rate of construction is Rs.50 per square meter. Find the total cost of the construction?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Area of the plot = Lb = 96 sq. m.Area of pathway = [(L - 4)(b - 4) - Lb]                            = [Lb - 4L - 4b +16 - Lb]                            = 16 - 4(L + b)And here we don not have value of (L + b)So,Data is inadequate.'
//     },
//     {
//       id: '94',
//       question: 'My father was 30 years of age when my sister was born. My mother was 38 years of age when I was born. My sister was 6 years of age when my brother was born who is 3 years elder to me. What was the age of my father and my mother during the birth of my brother?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'My brother was born 6 years after my sister was born and 3 years before I was born. Age of father during my brother’s birth = (30 + 6) = 36 years. Age of mother during my brother’s birth = (38 – 3) = 35 years. Hence, during the birth of my brother, my father was 36 years old and my mother was 35 years old.'
//     },
//     {
//       id: '95',
//       question: "The ratio of the current ages of Ajay and Vijay is 7:4. The ratio between Ajay's age 6 years ago and Vijay's age 6 years from now is 1:1. Find the ratio between Ajay's age after 12 years  and Vijay's age 12 years ago.",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Let the current age of Ajay and Vijay be 7x and 4x respectively.`(7x – 6) / (4x + 6) = 1/1` 7x – 6 = 4x + 6 3x = 12 x = 4 Therefore, `(7x + 12) / (4x – 12) = (7**4 + 12) / (4 ** 4 -12) = 40/4 = 10/1`'
//     },
//     {
//       id: '96',
//       question: 'Functions f and g are defined by:f(x) = 1/x + 3x and g(x) = -1/x + 6x - 4The domain  of (f+g)(x) is:',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: '(f + g)(x) = f(x) + g(x) = (1/x + 3x) + (-1/x + 6x - 4)(f + g)(x) = 9 x - 4 Domain of f + g is given by the interval (-infinity , 0) U (0 , + infinity)'
//     },
//     {
//       id: '97',
//       question: 'The range of the function f(x)= x2 - 4x + 9 is:',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'h(x) = x 2 - 4 x + 9 = x 2 - 4 x + 4 - 4 + 9 = (x - 2) 2 + 5(x - 2) 2 >= 0(x - 2) 2 + 5 >= 5Hence minimum value h(x) can have is 5 and maximum can go upto + infinity. So the range is [5 , + infinity)'
//     },
//     {
//       id: '98',
//       question: 'The avergae of weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg.What might be the weight of new person?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Let Average of the 7 people who are same be 'X'The person who is replaced is of 65kg.Then, given problem is:`('X' + 65)/8 + 2.5 = ('X' + 'New Person')/8``('X' + 85)/8 =  ('X' + 'New Person')/8`Therefore, 'New Person' = 85;"
//     },
//     {
//       id: '99',
//       question: 'The captain of a cricket team of 11 players is 26 years old and the wicket keeper is 3 years older. If the ages of these two are excluded the average age of remaining players is one year less than the average age whole team. What is the average age of the team?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Let the average age of the team is x years.11x - (26+29) = 9(x-1)x = 23'
//     },
//     {
//       id: '100',
//       question: 'How many days are there in a leap year?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Leap year Contains 366 days.'
//     },
//     ... 17 more items
//   ],
//   'data-interpretation': [
//     {
//       id: '1',
//       question: 'The following pie-charts show the distribution of students of graduate and post-graduate levels in seven different institutes in a town. Distribution of students at graduate and post-graduate levels in seven institutesWhat is the total number of graduate and post-graduate level students in the institute R?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Required number = (17% of 27300) + (14% of 24700)= 4641 + 3458 = 8099.'
//     },
//     {
//       id: '2',
//       question: 'YearSalaryFuelandTransportBonusInterestonLoansTaxes1998288983.0023.48319993421122.5232.510820003241013.8441.67420013361333.6836.48820024201423.9649.498Study the following table chart and answer the questions based on it.Expenditures of a Company(in Lakh Rupees) per Annum Over the given Years.What is the average amount of interest per year which the company had to pay during this period ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Average amount of interest paid by the Company during the given period will be 23.4+32.5+41.6+36.4+49.45lakh=36.66lakhs'
//     },
//     {
//       id: '3',
//       question: 'YearSalaryFuelandTransportBonusInterestonLoansTaxes1998288983.0023.48319993421122.5232.510820003241013.8441.67420013361333.6836.48820024201423.9649.498Study the following table chart and answer the questions based on it.Expenditures of a Company(in Lakh Rupees) per Annum Over the given Years.The total amount of bonus paid by the company during the given period is approximately what percent of the total amount of salary paid during this period ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Here we simply need to calculate that bonus is what percent of salary.We will just sum all bonus and salary to get the percentage as below,(3.00+2.52+3.84+3.68+3.96288+342+324+336+420∗100)%=(171710∗100)%=1%approx.'
//     },
//     {
//       id: '4',
//       question: 'YearSalaryFuelandTransportBonusInterestonLoansTaxes1998288983.0023.48319993421122.5232.510820003241013.8441.67420013361333.6836.48820024201423.9649.498Study the following table chart and answer the questions based on it.Expenditures of a Company(in Lakh Rupees) per Annum Over the given Years.Total expenditure on all these items in 1998 was approximately what percent of the total expenditure in 2002 ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Required percentage we can easily calculate from the above table chart.Required percentage will be,(288+98+3.00+23.4+83420+142+3.96+49.4+98∗100)%=(495.4713.36∗100)%=69.45%'
//     },
//     {
//       id: '5',
//       question: 'YearSalaryFuelandTransportBonusInterestonLoansTaxes1998288983.0023.48319993421122.5232.510820003241013.8441.67420013361333.6836.48820024201423.9649.498Study the following table chart and answer the questions based on it.Expenditures of a Company(in Lakh Rupees) per Annum Over the given Years.The ratio between the total expenditure on Taxes for all the years and the total expenditure on Fuel and Transport for all the years respectively is approximately?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Required Ratio will be(83+108+74+88+98)/(98+112+101+133+142)=(451/586)=10:13'
//     },
//     {
//       id: '6',
//       question: 'Year  Heavy Light Commercial Vehicles Cars Jeeps Two Wheelers 1990 2664232 153340 1991 45 60242 172 336 1992 72 79 248 210 404 1993 81 93 280 241 411 1994 107 112 266 235 442 Total 331 408 1268 1011 1933Study the following table carefully and answer the questions given below it:Number of Different categories of vehicles sold in the country over the years (in thousands)In which of the following years was the number of light commercial vehicles sold approximately 25% of the number of 2-wheelers sold?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'In the year 1994, Number of light commercial vehicles sold were 112Number of 2-wheelers sold were 442So,(112442∗100)=25.33%'
//     },
//     {
//       id: '7',
//       question: 'Year  Heavy Light Commercial Vehicles Cars Jeeps Two Wheelers 1990 2664232 153340 1991 45 60242 172 336 1992 72 79 248 210 404 1993 81 93 280 241 411 1994 107 112 266 235 442 Total 331 408 1268 1011 1933Study the following table carefully and answer the questions given below it:Number of Different categories of vehicles sold in the country over the years (in thousands)If the same percentage increase in the number of Heavy Vehicle as in 1994 over 1993 is expected in 1995, approximately how many heavy vehicles will be sold in 1995?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'In this question, by referring the table chart, first we need to calculate the increase(in percentage) in sale of Heavy Vehicle in 1994 over 1993Heavy Vehicle sold in 1993 = 81Heavy Vehicle sold in 1993 = 107Increase = 107 - 81 = 26Now 26 is what percent of 81 ?(2681∗100)%=32% aprox.So increase in sale were 32% in 1994, so get the answer we need to calculate the 132% of 107.132100∗107=141.24'
//     }
//   ],
//   'verbal-ability': [
//     {
//       id: '1',
//       question: 'Solve as per the direction given aboveA) When I were a newspaper journalistB) I always relied on the news editor andC) the subs to put things right.D) no errors',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'When I was a newspaper journalist.'
//     },
//     {
//       id: '2',
//       question: 'As far the issue of land encroachment (1)/ in villages is concerned, people will (2)/ have to make a start from their villages by sensitizing and educating the villagers about the issue. (3)/ No error (4)/',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Sentence 1 is wrong. It should be as far as the issue...So, Answer: (A) Option 1'
//     },
//     {
//       id: '3',
//       question: 'The country has adequate laws but problems arise (1) / when these are not (2) / implemented in letter and spirit. (3) /No error (4)',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "Sentence doesn't contain any error.So, Answer: (D) Option 4"
//     },
//     {
//       id: '4',
//       question: 'At one point, it looked as if an area of agreement would ________ specially over the issue of productivity linked wages.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Emerge is the correct answer'
//     },
//     {
//       id: '5',
//       question: 'She knew everything better than anybody else, and it was an affront to her ______ vanity that you should disagree with her.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Overstrung is the correct answer'
//     },
//     {
//       id: '6',
//       question: 'The earth is at present in great danger because of ______ pollution which is going on at an incredible rapid pace.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Colossal is the correct answer'
//     },
//     {
//       id: '7',
//       question: 'Arrange the given statements in a logical order to form a meaningful sentence.A. where to he was exiledB. Napoleon Bonaparte escaped from ElbaC. after the signing of the Treaty of FontainebleauD. a remote island off the coast of ItalyE. one year earlierThe Proper sequence should be:',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4'
//     },
//     {
//       id: '8',
//       question: 'Arrange the sentences in a sequence to make a coherent paragraph.A. It has offices at both Bangalore and Mumbai.B. Out of these, perhaps Goldman Sachs is the most well known in India.C. Some of the leading ones include Goldman Sachs, Lehman Brothers etc.D. There are many investment banks.The Proper sequence should be:',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Option 3'
//     },
//     {
//       id: '9',
//       question: 'To cut the Gordian Knot',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option A.'
//     },
//     {
//       id: '10',
//       question: 'To keep the wolf away from the door',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1'
//     },
//     {
//       id: '11',
//       question: 'Gift of the gab',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2.'
//     },
//     {
//       id: '12',
//       question: 'The boy laughed at the beggar.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4.'
//     },
//     {
//       id: '13',
//       question: 'Do you understand what I mean?',
//       options: [Array],
//       correctAnswer: 'c,d',
//       desc: 'Answer: Option 3.'
//     },
//     {
//       id: '14',
//       question: "Don't laugh at me.",
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4.'
//     },
//     {
//       id: '15',
//       question: 'FRATERNIZE: AMIABLE',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Option 3.'
//     },
//     {
//       id: '16',
//       question: 'COLLAGE: IMAGES',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1.'
//     },
//     {
//       id: '17',
//       question: 'POSTSCRIPT: LETTER',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Option 3.'
//     },
//     {
//       id: '18',
//       question: 'Fatigue',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4.'
//     },
//     {
//       id: '19',
//       question: 'Subtle',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1.'
//     },
//     {
//       id: '20',
//       question: 'Precocious',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2.'
//     },
//     {
//       id: '21',
//       question: 'Stimulating',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1.'
//     },
//     {
//       id: '22',
//       question: 'Temerity',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2.'
//     },
//     {
//       id: '23',
//       question: 'Cryptic',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1.'
//     },
//     {
//       id: '24',
//       question: "Research shows that young children who are read to on a regular basis will grow up to be better readers. When children sit in their parent's lap and listen to stories, they are learning about the pleasures of reading and the patterns of language. When you see children turning the pages of a book, looking at the pictures, and telling the story, often from memory, they are engaged in what is called emergent literacy. Parents can foster this early language and literacy development by talking with their children, telling them stories, reading to them every day, and surrounding them with books.  1. The writer's main point is that",
//       options: [Array],
//       correctAnswer: 'a,c',
//       desc: 'Answer: Option A.'
//     },
//     {
//       id: '25',
//       question: "Research shows that young children who are read to on a regular basis will grow up to be better readers. When children sit in their parent's lap and listen to stories, they are learning about the pleasures of reading and the patterns of language. When you see children turning the pages of a book, looking at the pictures, and telling the story, often from memory, they are engaged in what is called emergent literacy. Parents can foster this early language and literacy development by talking with their children, telling them stories, reading to them every day, and surrounding them with books. 2. Emergent literacy is best defined as",
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option D.'
//     },
//     {
//       id: '26',
//       question: '1. The maddening traffic congestion at the junction outside the University everyday is not only because four roads converge at one point.A. Evacuation of traffic from each of the four arterial roads is a task as these hurdles slow down the vehicles. B. Peak hour traffic then piles up for several km on all the four roads. C. Pot holes, water logging and dug up roadsides are also to blame. D. The daily commuters often fume at the wastage of time and fuel.6. According to experts, poor quality of roads slows down vehicles compounding the infrastructural problems at this junction.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1.'
//     },
//     {
//       id: '27',
//       question: '1. The researchers examine a psychological advantage that pioneering companies often encounter.A. But they caution that this advantage must be weighed against the existence of inexpensive local products, underdeveloped communication infrastructure, and cultural fragmentation. B. Customers in emerging markets tend to be strongly loyal to first – mover brands, even after viable alternatives appear. C. First – movers there have the opportunity to seize loyal consumers – if only they can reach them. D. In Myanmar, for example, there is only one television set per hundred people.6. The bottom line, according to the study, is that it does not always pay to move first.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4.'
//     },
//     {
//       id: '28',
//       question: 'If we have so many young people with good qualifications (1)_____ for a job, how come there is such a (2)_____ of good talent in the market? Millions of students graduate every year in India and enter the job market, but in reality, they are (3)______. The bulk of our diploma, vocational, engineering and management graduates come from institutions that (4)_____ them poorly and are unable to assist them with good job opportunities. On the other hand, organisations have a short-term focus on talent where buying existing talent seems easier than (5)______in-house. (1).______',
//       options: [Array],
//       correctAnswer: 'c,d',
//       desc: 'ANSWER : applying'
//     },
//     {
//       id: '29',
//       question: 'If we have so many young people with good qualifications (1)_____ for a job, how come there is such a (2)_____ of good talent in the market? Millions of students graduate every year in India and enter the job market, but in reality, they are (3)______. The bulk of our diploma, vocational, engineering and management graduates come from institutions that (4)_____ them poorly and are unable to assist them with good job opportunities. On the other hand, organisations have a short-term focus on talent where buying existing talent seems easier than (5)______in-house.(2)__________ ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'ANSWER : scarcity'
//     },
//     {
//       id: '30',
//       question: 'If we have so many young people with good qualifications (1)_____ for a job, how come there is such a (2)_____ of good talent in the market? Millions of students graduate every year in India and enter the job market, but in reality, they are (3)______. The bulk of our diploma, vocational, engineering and management graduates come from institutions that (4)_____ them poorly and are unable to assist them with good job opportunities. On the other hand, organisations have a short-term focus on talent where buying existing talent seems easier than (5)______in-house(3)._____',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'ANSWER : unemployable'
//     },
//     {
//       id: '31',
//       question: 'If we have so many young people with good qualifications (1)_____ for a job, how come there is such a (2)_____ of good talent in the market? Millions of students graduate every year in India and enter the job market, but in reality, they are (3)______. The bulk of our diploma, vocational, engineering and management graduates come from institutions that (4)_____ them poorly and are unable to assist them with good job opportunities. On the other hand, organisations have a short-term focus on talent where buying existing talent seems easier than (5)______in-house.(4)._____',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'ANSWER : train'
//     },
//     {
//       id: '32',
//       question: 'If we have so many young people with good qualifications (1)_____ for a job, how come there is such a (2)_____ of good talent in the market? Millions of students graduate every year in India and enter the job market, but in reality, they are (3)______. The bulk of our diploma, vocational, engineering and management graduates come from institutions that (4)_____ them poorly and are unable to assist them with good job opportunities. On the other hand, organisations have a short-term focus on talent where buying existing talent seems easier than (5)______in-house.(5)._____',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'ANSWER : building'
//     },
//     {
//       id: '33',
//       question: "(1) A case in point is the programme involving the Sardar Sarovar Dam which would displace about two lakh people.(2) Critics decry the fact that a major development institution appears to absorb more capital than it distributes to borrowers.(3)For all its faults critics however, concede that the bank remains a relatively efficient instrument for distribution of development-aid money.(4) One of the key complaint focuses on this non-profit bank's recent profitability.(5) Although the lives of millions of people around the globe have been improved by the bank and it is now under fire.(6) The bank is also being blamed for large scale resettlement to make way for dams and other construction project.Q:Which will come second?",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option (2).'
//     },
//     {
//       id: '34',
//       question: "(1) A case in point is the programme involving the Sardar Sarovar Dam which would displace about two lakh people.(2) Critics decry the fact that a major development institution appears to absorb more capital than it distributes to borrowers.(3)For all its faults critics however, concede that the bank remains a relatively efficient instrument for distribution of development-aid money.(4) One of the key complaint focuses on this non-profit bank's recent profitability.(5) Although the lives of millions of people around the globe have been improved by the bank and it is now under fire.(6) The bank is also being blamed for large scale resettlement to make way for dams and other construction project.Q:Which will come Sixth?",
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option (1).'
//     },
//     {
//       id: '35',
//       question: "(1) A case in point is the programme involving the Sardar Sarovar Dam which would displace about two lakh people.(2) Critics decry the fact that a major development institution appears to absorb more capital than it distributes to borrowers.(3)For all its faults critics however, concede that the bank remains a relatively efficient instrument for distribution of development-aid money.(4) One of the key complaint focuses on this non-profit bank's recent profitability.(5) Although the lives of millions of people around the globe have been improved by the bank and it is now under fire.(6) The bank is also being blamed for large scale resettlement to make way for dams and other construction project.Q:Which will come fourth?",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option (2)'
//     },
//     {
//       id: '36',
//       question: "(1) A case in point is the programme involving the Sardar Sarovar Dam which would displace about two lakh people.(2) Critics decry the fact that a major development institution appears to absorb more capital than it distributes to borrowers.(3)For all its faults critics however, concede that the bank remains a relatively efficient instrument for distribution of development-aid money.(4) One of the key complaint focuses on this non-profit bank's recent profitability.(5) Although the lives of millions of people around the globe have been improved by the bank and it is now under fire.(6) The bank is also being blamed for large scale resettlement to make way for dams and other construction project.Q:Which will come first?",
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option (4).'
//     },
//     {
//       id: '37',
//       question: 'Which of the following words is correctly spelt?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'ANSWER: Option 3.'
//     },
//     {
//       id: '38',
//       question: 'Foremost',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Hindmost : furthest back, latest or ultramodern.Mature : fully developed physically, full-grown.Premature : occurring or done before the usual or proper time, too early.Unimportant : lacking in importance or significance.So, antonym is Unimportant'
//     },
//     {
//       id: '39',
//       question: 'Terrible',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Soothing : having a gentle calming effect.Frightening and Scaring have similar meaning as Terrible.Delectable: delicious or humorous extremely attractive.Terrible: unattractive So opposite of Terrible is Delectable.'
//     },
//     {
//       id: '40',
//       question: 'Abstain',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Hoard : a stock or store of money or valued objects, typically one that is secret or carefully guarded.Tolerate : bear, forbear, forebear, abide.Forbear : bear, forbear, forebear, abide.Begin : commence, induct.Abstain : restrain oneself from doing or enjoying something.Antonym of Abstain is Begin.'
//     },
//     {
//       id: '41',
//       question: 'Supposing if / it rains / what shall / we do?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "Delete 'supposing'If it rains what shall we do?Answer: (A) Option 1"
//     },
//     {
//       id: '42',
//       question: 'Find the correctly spelt word.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Adulation is the correctly spelt word'
//     },
//     {
//       id: '43',
//       question: 'Find the correctly spelt word.',
//       options: [Array],
//       correctAnswer: 'a,c',
//       desc: 'Affevdavit is the correctly spelt word.'
//     },
//     {
//       id: '44',
//       question: 'It was him / who came running / into the classroom.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Change, It was him → It was heAnswer: (A)'
//     },
//     {
//       id: '45',
//       question: 'The capital of Yemen / is situating / 2190 meters above / the sea level.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Change, is situating → is situatedAnswer: Option B'
//     },
//     {
//       id: '46',
//       question: "Although alarmed by the __________, professor Symes had no reason to doubt the ________ of his student's results, for his student was nothing if not reliable",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Implications-veracity'
//     },
//     {
//       id: '47',
//       question: 'Archaeology is a poor profession; only ____ sums are available for excavating sites and even more ____ amounts for preserving the excavations.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'paltry-meager'
//     },
//     {
//       id: '48',
//       question: 'His characteristically ____ views on examination methods at university level have aroused ____ in those who want to introduce innovative and flexible patterns of assessment.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'hidebound - antagonism'
//     },
//     {
//       id: '49',
//       question: 'The officer who had neglected to file his income tax returns had to ____',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'pay a fine'
//     },
//     {
//       id: '50',
//       question: 'With great efforts his son succeeded in convincing him not to donate his entire wealth to an orphanage _______',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'and make an orphan of himself'
//     },
//     {
//       id: '51',
//       question: 'Mahesh need not have purchased the bag, means ________',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'it was not necessary for Mahesh to purchase the bag but he has purchased it'
//     },
//     {
//       id: '52',
//       question: 'To make clean breast of',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'To confess without of reserve'
//     },
//     {
//       id: '53',
//       question: "To keeps one's temper",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'To hold back anger'
//     },
//     {
//       id: '54',
//       question: 'To take a leaf out of somebody’s book',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'To take him as model'
//     },
//     {
//       id: '55',
//       question: 'To leave someone in the lurch',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'None of these'
//     },
//     {
//       id: '56',
//       question: 'It makes no odds',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'It is not important'
//     },
//     {
//       id: '57',
//       question: 'Luxuriant',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Abundant'
//     },
//     {
//       id: '58',
//       question: 'Memorable',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'worth remembering'
//     },
//     {
//       id: '59',
//       question: 'Officious',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'interfering'
//     },
//     {
//       id: '60',
//       question: 'Populous',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Populated(thickly)'
//     },
//     {
//       id: '61',
//       question: 'Vocation',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Occupation'
//     },
//     {
//       id: '62',
//       question: 'Illegible',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'not readable'
//     },
//     {
//       id: '63',
//       question: 'Illicit',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Illegal'
//     },
//     {
//       id: '64',
//       question: 'Defer',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Postpone'
//     },
//     {
//       id: '65',
//       question: 'Proscribe',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'prohibit sale and publication'
//     },
//     {
//       id: '66',
//       question: 'Imperious',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Proud'
//     },
//     {
//       id: '67',
//       question: 'CHASTE',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Defiled'
//     },
//     {
//       id: '68',
//       question: 'Mean',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Nice'
//     },
//     {
//       id: '69',
//       question: 'Beautiful',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Ugly'
//     },
//     {
//       id: '70',
//       question: 'Happy',
//       options: [Array],
//       correctAnswer: 'a,d',
//       desc: 'Painful'
//     },
//     {
//       id: '71',
//       question: 'Vicious',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Gentle'
//     },
//     {
//       id: '72',
//       question: 'Sahil sharma makes tea.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Tea is made by Sahil sharmaNote : Rule to make active voice of Simple present sentence :  Passive subject + is/are/am + third form of verb + by + passive object.'
//     },
//     {
//       id: '73',
//       question: 'We hate him.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'He is hated by us.'
//     },
//     {
//       id: '74',
//       question: 'He is making a film',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer : A film is being made by him.Note : Rule to make active voice of Present Continuous Tense :  Passive subject + is/are/am + being + third form of verb + by + passive object'
//     },
//     {
//       id: '75',
//       question: 'My friends are watching the match.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'The match is being watched by my friends.'
//     },
//     {
//       id: '76',
//       question: "I am tired as I am working since 7 O'clock in the morning.",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'I have been working'
//     },
//     {
//       id: '77',
//       question: 'Jeans was not permitted in our college',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'were'
//     },
//     {
//       id: '78',
//       question: "He suggested that, we should be bound by a code of conduct, isn't it?",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: "Shouldn't we?"
//     },
//     {
//       id: '79',
//       question: 'Sheela told her teacher to explain the chapter once again.',
//       options: [Array],
//       correctAnswer: 'answer',
//       desc: 'asked her teacher'
//     },
//     {
//       id: '80',
//       question: "Let's buy a new sari with the annual bonus,can we?",
//       options: [Array],
//       correctAnswer: 'a,c',
//       desc: 'shall we?'
//     },
//     {
//       id: '81',
//       question: 'None of the guests were introduced to the bride.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'was introduced'
//     },
//     {
//       id: '82',
//       question: 'Because of his mastery in his field,his suggestions are wide accepted',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'are widely accepted'
//     },
//     {
//       id: '83',
//       question: 'Young men and women should get habituatedto reading and writing about current affairs.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'used'
//     },
//     {
//       id: '84',
//       question: "At one's wit's end",
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Perplexed'
//     },
//     {
//       id: '85',
//       question: "At one's fingertips",
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Complete knowledgeExample: All formula's of quantitative aptitude are at his fingertips."
//     },
//     {
//       id: '86',
//       question: 'All in all',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Most important'
//     },
//     {
//       id: '87',
//       question: 'Apple Pie Order',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'In perfect orderExplanation:Example: On the eve of inspection every thing was kept in apple pie order.'
//     },
//     {
//       id: '88',
//       question: 'Above board',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'honest and straightforwardExplanation:Example: Shikha is very popular for her above board conduct.'
//     },
//     {
//       id: '89',
//       question: 'Bid defiance',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'to ignoreExample : His girl friend bade defiance to his wish to go for movie and instead they went for lunch in hotel'
//     },
//     {
//       id: '90',
//       question: 'Bury the hatchet',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'to make peaceExplanation:Example : His family members should bury the hatched to make peace in his home.'
//     },
//     {
//       id: '91',
//       question: 'Blaze the trail',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'To start a movementExplanation:Example : All great people names are written in history who blazed the trail for their nations.'
//     },
//     {
//       id: '92',
//       question: 'Find correct sequence of sentence :P: on youngsters in the cities and the villagesQ: The effectR: of the cinemaS: on the school and college going is very bad',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2( QRSP )'
//     },
//     {
//       id: '93',
//       question: 'Find correct sequence of sentence :P: not indeed in the sense that education has been universalQ: Our country has been a land of learningR: and the learned man has been held in higher esteem than the warrior or administratorS: but in the sense that education has been universal',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer : Option 3 (QPSR)'
//     },
//     {
//       id: '94',
//       question: 'Find the correct sequence of sentences :P: to protect vegetables from coldQ: in view of the prevailing weather conditionsR: farmers to smoke their fields during the nightS: agricultural experts have advised',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2(QSRP)'
//     },
//     {
//       id: '95',
//       question: "Find the correct sequence of sentences:P: in my heart of heartsQ: to hear his voiceR: I wasn't sure what I really wishedS: through that window once more",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer : Option 2(RPQS)'
//     },
//     {
//       id: '96',
//       question: 'Find the correct sequence of sentences :P: only five or six new onesQ: to have been found, althoughR: there are over 31,000 documented meteoritesS: are found every year',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer : Option 3(RQPS)'
//     },
//     {
//       id: '97',
//       question: 'Paw:Cat then Hoof: ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Paw is foot of Cat. Hoof is foot of Horse'
//     },
//     {
//       id: '98',
//       question: 'Solve as per the direction given above.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'No error.Answer: Option D'
//     },
//     {
//       id: '99',
//       question: 'Solve as per the direction above.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'awaiting for the arrival of the chief guest.Answer: (B)'
//     },
//     {
//       id: '100',
//       question: 'Solve as per the direction given above.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'since for five years.'
//     },
//     ... 6 more items
//   ],
//   'logical-reasoning': [
//     {
//       id: '1',
//       question: 'Complete the series 1,6,13,22,33,..',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Pattern is +5, +7, +9, +11So next number will be +13=> 33+13 = 46'
//     },
//     {
//       id: '2',
//       question: 'Shoe',
//       options: [Array],
//       correctAnswer: 'answer',
//       desc: 'All shoes have a sole of some sort.Not all shoes are made of leather (choice 2); nor do they all have laces (choice 3).Walking (choice 4) is not essential to a shoe.'
//     },
//     {
//       id: '3',
//       question: 'At a conference, 12 members shook hands with each other before & after the meeting. How many total number of hand shakes occurred?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'The first person shook hands with 11 remaining people, the second person also shook hands with 11 people, but we count 10, as the hand shake with the first person has already been counted. Then add 9 for the third person, 8 for the fourth one & proceeding in this fashion we get: 11 + 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 66. Hence 66 hand shakes took place before & 66 after the meeting, for a total of 132.'
//     },
//     {
//       id: '4',
//       question: 'The day after the day after tomorrow is four days before Monday. What day is it today?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Four days before Monday is Thursday, simply because four days after Thursday is Monday. Besides, day after the day after tomorrow is Thursday only if present day is Monday.'
//     },
//     {
//       id: '5',
//       question: '6, 12, 1, 13, 5 is to flame as 2, 12, 15, 1, 20 is to ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: '6,12,1,13,5 each number in the break up signifies the corresponding letter in the alphabet. (viz. 6->f, 12->l...etc.)Similarly 2,12,15,1,20 which signifies bloat.'
//     },
//     {
//       id: '6',
//       question: "Statement: Why don't you invite Anthony for the Christmas party this year?Assumptions:1. Anthony is not from the same city.2. Unless invited Anthony will not attend the party.",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: "Anthony's place of living is not mentioned in the statement. So, I is not implicit. Assumption II follows from the statement and so it is implicit."
//     },
//     {
//       id: '7',
//       question: 'A study of native born residents in Newland found that two-thirds of the children developed considerable levels of nearsightedness after starting school, while their illiterate parents and grandparents, who had no opportunity for formal schooling, showed no signs of this disability. If the above statements are true, which of the following conclusions is most strongly supported by them?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'According to the above stated passage only the argument " The nearsightedness in the children is caused by the ...........visual stress required by reading and other class work." will be true'
//     },
//     {
//       id: '8',
//       question: 'In alphabet series, some alphabets are missing which are given in that order as one of the alternatives below it. Choose the correct alternative.G4T, J10R, M20P, P43N, S90L',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The first letter of each term is moved three steps forward and the last letter is moved two steps backward to obatin the corresponding letters of the next term.The numbers follow the sequence x 2 + 1, x 2 + 2, x 2 + 3, x 2 + 4.So, 10 is wrong and must be replaced by (4 x 2 + 1)  i.e. 9.'
//     },
//     {
//       id: '9',
//       question: 'In alphabet series, some alphabets are missing which are given in that order as one of the alternatives below it. Choose the correct alternative.adb _ ac _ da _ cddcb _ dbc _ cbda',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The series is adbc acbd abcd dcba dbca cbda.Thus, the letters equidistant from the beginning and the end of series are the same'
//     },
//     {
//       id: '10',
//       question: 'In following questions, three sequence of alphabets/numerals are provided which correspond to each other in some way. Find out alphabets/numerals that come in the blank places.Choose the correct option_ A D A C B _ _ B D C C 1 3 _ _ 1 2 4 2 _ _ _ _ a _ _ b _ _ c d ? ? ? ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Clearly, b corresponds to A.1 corresponds to C and a corresponds to 1.So, a corresponds to C.2 corresponds to B and d corresponds to 2.So, d corresponds to B.So, the remaining lettter  i.e., c corresponds to D.Thus, BDCC corresponds  to d, c, a, a.'
//     },
//     {
//       id: '11',
//       question: 'Museum is related to Curator in the same way as Prison is related to ..',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer:Option 3'
//     },
//     {
//       id: '12',
//       question: 'Moon : Satellite : : Earth : ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Moon is a satellite and earth is a planet'
//     },
//     {
//       id: '13',
//       question: '1 : 1 : : 25 : ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'The relationship is x : x^2'
//     },
//     {
//       id: '14',
//       question: 'Mrs. Jansen recently moved to Arizona. She wants to fill her new backyard with flowering plants. Although she is an experienced gardener, she isn"t very well-versed in what plants will do well in the Arizona climate. Also, there is a big tree in her backyard making for shady conditions and she isn"t sure what plants will thrive without much direct sunlight. Her favorite gardening catalog offers several backyard seed packages. Which one should Mrs. Jansen choose?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'The Treehouse Collection will provide lush green plants with delicate colorful flowers that thrive in shady and partially shady locations.'
//     },
//     {
//       id: '15',
//       question: 'Rita, an accomplished pastry chef who is well known for her artistic and exquisite wedding cakes, opened a bakery one year ago and is surprised that business has been so slow. A consultant she hired to conduct market research has reported that the local population doesn"t think of her shop as one they would visit on a daily basis but rather a place they"d visit if they were celebrating a special occasion. Which of the following strategies should Rita employ to increase her daily business?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Placing a series of ads in the local newspaper that advertise the wide array of breads'
//     },
//     {
//       id: '16',
//       question: "The car dealer found that there was a tremendous response for the new XYZ's car-booking with long queues of people complaining about the duration of business hours and arrangements.Courses of Action:I. People should make their arrangement of lunch and snacks while going for car XYZ's booking and be ready to spend several hours.II. Arrangement should be made for more booking desks and increased business hours to serve more people in less time.",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: "Seeing the tremendous response, the dealer must make suitable arrangements and deploy more personnel to take care of customers so that they don't have to wait excessively long for booking. So, only course II follows."
//     },
//     {
//       id: '17',
//       question: 'The Asian Development Bank has approved a $285 million loan to finance a project to construct coal ports by Paradip and Madras Port Trusts.Courses of Action:I. India should use financial assistance from other international financial organisations to develop such ports in other places.II. India should not seek such financial assistance from the international financial agencies.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Clearly, such projects shall be an asset and a source of income to the country later on. So, course I shall follow.'
//     },
//     {
//       id: '18',
//       question: 'Statements:I.The government has recently fixed the fees for professional courses offered by the unaided institutions which are much lower than the fees charged last year.II.The parents of the aspiring students launched a severe agitation last year protesting against the high fees charged by the unaided institutions.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Statement II is the cause and statement I is its effect'
//     },
//     {
//       id: '19',
//       question: 'Choose the word which is least like the others word in a group?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Calendar is least like others in the group.'
//     },
//     {
//       id: '20',
//       question: 'Here are some words translated from an artificial language.krekinblaf means workforcedritakrekin means groundworkkrekinalti means workplaceWhich word could mean "someplace"?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "Krekin means work; blaf means force; drita means ground; and alti means place. Drita means ground, so that rules out choices b and d. Choice c isn't correct because blaf means force. That leaves choice a as the only possible answer."
//     },
//     {
//       id: '21',
//       question: 'Here are some words translated from an artificial language.relftaga means carefreeotaga means carefulfertaga means carelessWhich word could mean "aftercare"?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'In this language, the root word taga, which means care, follows the affix (relf, oâ€“, or ferâ€“). Therefore, in the word aftercare, the root word and the affix would be reversed in the artificial language. The only choice, then, is tagazen, because tagafer would mean less care'
//     },
//     {
//       id: '22',
//       question: 'Statement: Should the railways immediately stop issuing free passes to all its employees?Arguments:I. No. The employees have the right to travel free.II. Yes. This will help railways to provide better facility.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer : Option 4Explanation:The free passes given to railway employees is a privilege for them, not their right. So, argument I does not hold. Argument II seems to be vague.'
//     },
//     {
//       id: '23',
//       question: 'Statement : Should number of holidays of government employees be reduced ?Arguments :I. Yes. Our government employees are having maximum number of holidays among the other countries of the world.II. Yes. It will lead to increased productivity of government offices.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2'
//     },
//     {
//       id: '24',
//       question: 'Statement : Should government stop spending huge amounts of money on international sports ?Arguments :I. Yes. This money can be utilised for poor.II. No. Sports-persons will be frustrated and will not get international exposure.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:Clearly spending money on sports can not be avoided merely for social economic problems.But Argument II is strong. Be a sports man and then think on this question.'
//     },
//     {
//       id: '25',
//       question: 'Statement : Should education be made compulsory for all children up to the age of 14 ?Arguments :I. Yes. This will help to eradicate the system of forced employment of children.II. Yes. This would increase the standard of living.',
//       options: [Array],
//       correctAnswer: 'a,d',
//       desc: 'Answer: Option 1Explanation:If the children are educated they can’t be forced in child labour and moreoverthey will know their rights.'
//     },
//     {
//       id: '26',
//       question: 'Statement: Should students union in universities be abolished ?Arguments :I. Yes. Students can pay full attention to their career development.II. No. All the great leaders had been students union leaders.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer : Option 1'
//     },
//     {
//       id: '27',
//       question: 'Complete the series 3, 7, 23, 95, ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: '3( *2 +1)→ 7( *3 +2) → 23( *4 +3)→ 95( *5 +4)→ 479.'
//     },
//     {
//       id: '28',
//       question: 'Statement : Company X has marketed the product. Go ahead, purchase it if price and quality are your considerations.Conclusions :I. The product must be good in quality.II. The price of product must be reasonable.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: ''
//     },
//     {
//       id: '29',
//       question: 'Statement : The world is neither good nor evil, each man manufactures a world for himself.Conclusions :I. Some people find this world quite good.II. Some people find this world quite bad.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4'
//     },
//     {
//       id: '30',
//       question: 'Statement : Good voice is a natural gift but one has to keep practising to improve and excel well in the field of music.Conclusions :I. Natural gifts need nurturing and care.II. Even though your voice is not good, one can keep practising.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '31',
//       question: 'Statement : All the organised persons find time for rest. Sunita, in-spite of her busy schedule, finds time for rest.Conclusions :I. Sunita is an organised person.II. Sunita is an industrious person.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: ''
//     },
//     {
//       id: '32',
//       question: 'Statement : Until our country achieves economic equality, political freedom and democracy would be meaningless.Conclusions :I. Political freedom and democracy go hand in hand.II. Economic equality leads to real political freedom and democracy.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '33',
//       question: 'Statement : It is desirable to put the child in school at the of 5 or so.Assumptions :I. At that age the child reaches appropriate level of development and is ready to learn.II. The schools do not admit children after six years of age.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '34',
//       question: 'Statement : We must settle all the payment due to our suppliers within three working days.Assumptions :I. We will always have necessary funds in our account to settle the bills.II. We are capable of verifying and clearing the bills in less than three working days.',
//       options: [Array],
//       correctAnswer: 'b,d',
//       desc: ''
//     },
//     {
//       id: '35',
//       question: 'Statement : The chairman and secretary of the housing society have requested society members to use water economically to help society save on water tax.Assumptions :I. Majority of members of society are likely to follow the request.II. It is desirable to reduce expenditure wherever possible.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '36',
//       question: 'Statement : Savita made an application to the bank for a loan of Rs 180000 by mortgaging his house to the bank and promised to repay it in 5 years.Assumptions:I. The bank has a practice of granting loans for Rs. 100000 and above.II. The bank accepts house as collateral security against such loans.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4'
//     },
//     {
//       id: '37',
//       question: "The only true education comes through the stimulation of the child's power by the demands of the social situations in which he finds himself. Through these demands he is stimulated to act as a member of a unity, to emerge from his original narrowness of action and feeling, and to conceive himself from the standpoint of the welfare of the group to which he belongs.The passage best supports the statement that real education.",
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4'
//     },
//     {
//       id: '38',
//       question: 'Though the waste of time or the expenditure on fashions is very large, yet fashions have come to stay. They will not go, what may. However, what is now required is that strong efforts should be made to displace the excessive craze for fashion from the minds of these youngsters.The passage best supports the statement that :',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer:Option 3'
//     },
//     {
//       id: '39',
//       question: 'It is up to our government and planners to devise ways and means for the mobilisation of about ten crore workers whose families total up about forty crore men, women and children. Our agriculture is over-manned. A lesser number of agriculturists would mean more purchasing or spending power to every agriculturist. This will result in the shortage of man-power for many commodities to be produced for which there will be a new demand from a prosperous agrarian class. This shortage will be removed by surplus man-power released from agriculture as suggested above.The passage best supports the statement that:',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2'
//     },
//     {
//       id: '40',
//       question: 'Satisfaction with co-workers, promotion opportunities, the nature of work, and pay goes with high performance among those with strong growth needs. Among those with weak growth needs, no such relationship is present - and, infact, satisfaction with promotion opportunities goes with low performanceThis passage best supports the statement that:',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Option 3'
//     },
//     {
//       id: '41',
//       question: 'The press should not be afraid of upholding and supporting a just and righteous cause. It should not be afraid of criticising the government in a healthy manner. The press has to be eternally vigilant to protect the rights of the workers, backward and suppressed sections of the society. It should also give a balanced view of the things so that people can be helped in the formation of a healthy public opinion.The passage best supports the statement that',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Option 3'
//     },
//     {
//       id: '42',
//       question: "Question : Why haven't Indian scientists made such headway in any field after independence ?I. Indian scientists are not provided with up to date laboratory facilities.II.Indian scientists regard that knowledge of western science advances is enough for a nation to advance.",
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1'
//     },
//     {
//       id: '43',
//       question: 'Question : What time does the office starts working ?I. Some employees reach office at 9:00 am.II. Some employees reach office at 4:00 pm.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4'
//     },
//     {
//       id: '44',
//       question: "Question : Out of A, B, C and D, who was selected by the interview panel ?I. C's interview was much better than A and D.II. B has better qualification and experience than other three.",
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4'
//     },
//     {
//       id: '45',
//       question: 'Question : Does drinking coffee leads to headache ?I. Overstimulation of pancreas leads to headache.II. Coffee contains caffeine which excessively stimulates pancreas.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4'
//     },
//     {
//       id: '46',
//       question: 'Complete the series 7, 26, 63, 124, 215, 342, ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The terms are given in a series(23 -1) = 7(33 -1) = 26(43 -1) = 63(53 -1) = 124(63 -1) = 215(73 -1) = 342So, the missing term is,(83 -1) = 511.'
//     },
//     {
//       id: '47',
//       question: 'Complete the series 165, 195, 255, 285, 345, ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Each number of given series is 15 multiplied by a prime number.15*11, 15*13, 15*17, 15*19, 15*23. . . . So, Missing number is15*29 = 435.'
//     },
//     {
//       id: '48',
//       question: 'Complete the Series 34, 45, 56, 67.......',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: '34(+11) → 45(+11) → 56(+11) →67 (+11) → 78.'
//     },
//     {
//       id: '49',
//       question: 'In the following number series a wrong number is given. Find out the wrong number.150, 450, 750, 1060, 1350, 1650, 1950',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'By adding 300 to each term, we get the next term. 1060 is wrong term. It should be 1050.'
//     },
//     {
//       id: '50',
//       question: 'Complete the series 5690, 5121, 4552, 3983, 3414, 2845, ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'By subtracting 569, we get the next term.Required number,= 2845-569= 2276.'
//     },
//     {
//       id: '51',
//       question: 'Complete the series 6, 13, 28, 59, ?, 249.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'First term → 6Second term → (6*2+1) = 13Third term → (13*2+2) = 28Fourth term → (28*2+3) = 59Fifth term → (59*2+4) = 122Sixth term → (122*2+5) = 249So, the required term = 122.'
//     },
//     {
//       id: '52',
//       question: 'Complete the series 4, 8, 10, 14, 16, 20, ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Above series contains two sub-series in it.4, 10, 16, 228, 14, 20Each of both term there is difference of 6 i.e. next term is 6 greater than previous term.'
//     },
//     {
//       id: '53',
//       question: 'Complete the series 9, 17, 33, 65, ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'First term → 9Second term → (9 *2 -1) = 17Third term → (17 *2 -1) = 33Fourth term → (33 *2 -1) = 65Fifth term → (65 *2 -1) = 129'
//     },
//     {
//       id: '54',
//       question: 'Complete the series 2, 3, 6, 15, ?, 123',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'First term → 2Second term → (2 *3 -3) = 3Third term → (3 *3 -3) = 6Fourth term → (6 *3 - 3) = 15sixth term → (15 *3 - 3) = 42'
//     },
//     {
//       id: '55',
//       question: 'In the following number series a wrong number is given. Find out the wrong number.1, 3, 10, 21, 64, 129, 356, 777',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'The given pattern is,2nd term → 1*2+1 = 33rd term → 3*3+1 = 104th term → 10*2+1 = 215th term → 21*3+1 = 646th term → 64*2+1 = 1297th term → 129*3+1= 388So, 7th term 356 is wrong and must be replaced by 388.'
//     },
//     {
//       id: '56',
//       question: 'Complete the series 9, 27, 31, 155, 161, 1127, ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Given pattern is,2nd term → 9*3 = 273rd term → 27+4 = 314th term → 31*5 = 1555th term → 155+6 = 161.6th term → 161*7 = 1127Missing term → 1127+8 = 1135.'
//     },
//     {
//       id: '57',
//       question: 'Complete the series 2, 7, 27, 107, 427, ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The pattern is,2nd term → 2 +(5 *12) = 73rd term → 7 +(5 *22) = 274th term → 27 +(5 *42) = 1075th term → 107 +(5 *82) = 427Missing term → 427 +(5 *162) = 1707'
//     },
//     {
//       id: '58',
//       question: 'Sunday, Monday, Wednesday, Saturday, Wednesday, Monday, .....',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Sunday to Monday = no gapMonday to Wednesday = One day gap.Wednesday to Saturday = Two days gap.Saturday to Wednesday = Three days gap.Wednesday to Monday = Four days gap.In the next term there must be five days and six days gap.So, Next term would be Sunday, Sunday.'
//     },
//     {
//       id: '59',
//       question: 'Complete the series 2816, ? , 176, 44, 11.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Logic: Next term = Previous term /42816 /4 = 704704 /4 = 176.176 /4 = 44.44 /4 = 11.'
//     },
//     {
//       id: '60',
//       question: 'Complete the series 113, 225, 449, ? , 1793',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: '113113 * 2 = 226 -1 = 225225 * 2 = 450 -1 = 449449 * 2 = 898 - 1 = 897897 * 2 = 1794 -1 = 1793'
//     },
//     {
//       id: '61',
//       question: 'Which of the following will come in place of the question mark (?) in the following sequence?PRODUCTIVITY, RODUCTIVIT, ODUCTIVI, ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'PRODUCTIVITY = RODUCTIVIT.(Bold letters are removed.)RODUCTIVIT = ODUCTIVI.ODUCTIVI = DUCTIV.'
//     },
//     {
//       id: '62',
//       question: 'Complete the series 6, 24, 60,120, 210, ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'First Number = 1 *2 *3 = 6Second Number = 2*3*4 = 24Third Number = 3*4*5 = 60Fourth Number = 4*5*6 = 120Fifth Number = 5*6*7 = 210Sixth Number = 6*7*8 = 336.Alternatively,2*2*2-2=63*3*3-3=244*4*4-4=605*5*5-5=1206*6*6-6=2107*7*7-7=336.'
//     },
//     {
//       id: '63',
//       question: 'Complete the series 6, 11, 31, 121, 601, ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'First Term = 6.Second term = 6*2 -1 = 11.Third term = 11* 3 - 2 = 31.Fourth term = 31 *4 - 3 = 124 -3 = 121.Fifth term = 121*5 - 4 = 601.Sixth term = 601 *6 = 3606 - 5 = 3601.'
//     },
//     {
//       id: '64',
//       question: 'Complete the series 7, 11, 19, 35, 67, ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Last Term *2 - 3 = Next Term.First Term = 7.Second Term = 7 *2 -3 = 11.Third Term = 11 *2 - 3 = 19.Fourth Term = 19 *2 - 3 = 35.Fifth Term = 35 *2 - 3 = 67.Sixth Term = 67 *2 -3 = 131.'
//     },
//     {
//       id: '65',
//       question: 'Complete the series 8, 22, 64, 190, 568, ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Logic:Previous Term *3 - 2 = Next term.First Term = 8.Second term = 8 *3 - 2 = 24 -2 = 22.Third term = 22 *3 -2 = 64.Fourth term = 64 *3 -2 = 190.Fifth Term = 190 *3 - 2 = 568.Sixth Term = 568 *3 -2 = 1704 -2 = 1702.'
//     },
//     {
//       id: '66',
//       question: 'Complete the series 5760, 2880, 960, 240, 48, ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'First Term = 5760.Second term = 5760 /2 = 2880.Third Term = 2880/3 = 960.Fourth term = 960/4 = 240.Fifth term = 240/5 = 48.So,Required term = 48/6 = 8.'
//     },
//     {
//       id: '67',
//       question: 'Statement :Should there be a complete ban on manufacture of fire-crackers in India ?Arguments :I. No, this will render thousands of workers jobless.II. Yes, the fire-cracker manufacture use child labour to a large extent.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Argument I is strong because when manufacturing of fire crackers is banned, a large workers involved in manufacturing it, will be jobless but II is vague because to stop child labour, it is not necessary to close the industry.'
//     },
//     {
//       id: '68',
//       question: 'Statement : Should election expenses to Central and State legislatures be met by the government ?Arguments :I. Yes, it will put an end to political corruption.II. No, it is not used in any country.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'As parties who are rich, spend more money in conversing, banners etc., to support the position while other parties are not able to meet these facilities. Therefore, the election expenses met by the Government, will put the political corruption to an end. Hence, I argument is strong.'
//     },
//     {
//       id: '69',
//       question: 'Statement : Should the educated people work in villages ?Arguments :I. Yes, because they can revolutionize agriculture and revamp rural atmosphere.II. No, the educated should be employed in cities only otherwise their education will go waste.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'By working of educated people in villages, their education will not be wasted but their will be the proper use of their education. On account of their education they will revolutionize agriculture and revamp rural atmosphere.'
//     },
//     {
//       id: '70',
//       question: 'Statement : Should all the foreign investment be concentrated only in few States ?Arguments :I. No, this goes against the all round economic development of the country.II. Yes, as most of the States do not have the requisite infrastructure to attract foreign investments.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Harmonic development in all States is not possible so second argument is strong.'
//     },
//     {
//       id: '71',
//       question: 'Statement : Should there be only one rate of interest for term deposits of varying durations in banks ?Arguments :I. No, People will refrain from keeping money for longer duration resulting into reduction of liquidity level of banks.II. Yes. This will be much simple for the common people and they may be encouraged to keep more money in banks.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'The proposed scheme would discourage people from keeping deposit for longer durations and not draw in more funds. So, only argument I holds.'
//     },
//     {
//       id: '72',
//       question: 'Statement : Should the sex determination test during pregnancy be completely banned ?Arguments :I. Yes, this leads to indiscriminate female foeticide and eventually will lead to social imbalance.II. No, people have a right to know about their unborn child.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Parents indulging in sex determination of their unborn child generally do so as they want to keep only a boy child and do away with girl child. So, argument I hold strong. Also, people have right to know only about the health, development and general well-being of the child before its birth, and not the sex. So, argument II does not hold strong.'
//     },
//     {
//       id: '73',
//       question: 'Statement : Should Government close down loss making public sector enterprise ?Arguments :I. No. All employees will lose their jobs, security and earning, what would they do.II. Yes, in a competitive world the rule is survival is of the fittest.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Closing, down public-sector enterprise ill definitely throw the engaged person out of employment. So, argument I hold strong. also, closing down is no solution for a loss- making enterprise. Rather , its causes of failure should be studied, canalized and the essential reforms implemented. Even if this does not work out, the enterprise may be privatized. So, argument II is vague.'
//     },
//     {
//       id: '74',
//       question: "Statement : Should all the criminal convicted for committing murder be awarded capital punishment ?Arguments :I. Yes, this will be a significant step towards reducing cases of murder in future.II. No, nobody has the right to take any person's life irrespective the acts of such individuals.",
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Argument I is strong because by giving capital punishment to murderers, the cases of murdering will be reduced. Argument II is weak because by doing so there will be increase in such criminal cases day-by-day.'
//     },
//     {
//       id: '75',
//       question: 'Statement : Should there be a maximum ceiling imposed on the earnings of an individual in an organization ?Arguments :I. Yes, this is the only way to create more opportunities for those who seek professional training.II. No, this will dilute the quality of professional training as all such colleges may not be equipped to conduct such course.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Both the arguments are strong because by doing so, students will get more opportunities and it is also correct that without any affiliation the quality of training will decrease.'
//     },
//     {
//       id: '76',
//       question: 'Statement : Should the Government restrict all political and religious processions without prior permission of the government ?Arguments :I. Yes, such processions lead to riots many times.II. No, this is against the human rights in a democratic country.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Either I or II is strong. Generally the undesirable elements in processions do so wrong things with the purpose to disturb the peace. Hence restrictions for such processions is necessary. But in democratic country this is against the human race.'
//     },
//     {
//       id: '77',
//       question: 'Mutiny is a conspiracy among a group of individuals to openly oppose, change or overthrow an authority to which they are subject. Which situation below is the best example of a Mutiny?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: The Indian rebellion of 1857 was a period of armed uprising in India against British colonial power.'
//     },
//     {
//       id: '78',
//       question: 'Quid pro quo mean "a favour for a favour" . Which situation below can be the best example of a Quid pro quo ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Relationships that understand the need for a healthy give and take balance are less likely to fail because both partners know and understand the value of the other.'
//     },
//     {
//       id: '79',
//       question: 'Theo is relating to deities. Which statement is below a example of Theo?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: The center piece to the circus is the famous statue of Eros, the pagan god of love.'
//     },
//     {
//       id: '80',
//       question: "The diagnostic term 'mental retardation' is finally being eliminated in the upcoming international classifications of diseases and disorders. Which situation below is the best example of a Mental Retardation?",
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Sandra diagnosed before age 18 that includes below-average general intellectual function, and a lack of the skills necessary for daily living.'
//     },
//     {
//       id: '81',
//       question: 'Knowledge',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Learning'
//     },
//     {
//       id: '82',
//       question: 'Country',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Law and order'
//     },
//     {
//       id: '83',
//       question: 'Restaurant',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: None of these'
//     },
//     {
//       id: '84',
//       question: 'Antique',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: None of these'
//     },
//     {
//       id: '85',
//       question: 'Statement: If you are a good artist, then we have definitely a job for you.Conclusion :I. You are a good artist.II. We are in need of good artist.Both I and II follows',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Conclusion II follows from the statement because in the statement it is given that if you are a good artist then we have definitely a job for you. From this, it is clear that we are in need of a good artist.'
//     },
//     {
//       id: '86',
//       question: 'Statement : Books without knowledge of life are useless..Conclusion :I. All books contain knowledge of life.II. People should try to gain the knowledge of life.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'None of the conclusion follows from the statement.'
//     },
//     {
//       id: '87',
//       question: 'Statement : Now-a-days, the sale of television sets of company X has increased.Conclusion :I. The sale of television sets of other company has decreased.II. The sale of television sets of company X was nil in past.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'In the statement, nothing is said about the sale of television sets of the other companies. Hence, conclusion I is not valid while the second conclusion is not related to the statement. Hence, it is also not valid.'
//     },
//     {
//       id: '88',
//       question: 'Statement : The cabinet of state X took certain steps to tackle the milk glut in the state as the cooperative and government dairies failed to use the available milk. - News report.Conclusion :I. The milk production of State X is more than its need.II. The Government and co-operative daries in State X are not equipped in terms of resources and technology to handle such excess milk.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "The use of the term 'milk glut' makes I implicit. Also, the fact that the cooperatives and Government dairies failed to use the available milk indicates that they lack the proper infrastructure to handle such quantities of Milk. So, II also Follows."
//     },
//     {
//       id: '89',
//       question: "Statement: Women's organizations is India have welcomed the amendment of the Industrial Employment Rules 1946 to curb sexual harassment at the work place.Conclusion :I. Sexual harassment of women at work place is more prevalent in India as compared to other developed countries.II. Many organizations in India will stop recruiting women to avoid such problems.",
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'The fact that a certain rule has been more welcomed in a certain country does not imply that the problem is more prevalent there. So, I does not follows. Also, The amendment seeks to discourage only sexual harassment of women and shall in no way discourage employment of women. So, II does not follow.'
//     },
//     {
//       id: '90',
//       question: "Statement : India's economy is depending mainly on forests.Conclusion :I. Tree should be preserved to improve Indian economy.II. India wants only maintenance of forests to improve economic conditions",
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "It is mentioned in the the statement that India's economy depends mainly on forests. This means that forests should be preserved. So, I follows. But, that only preservation of forests can improve the economy, cannot be said. So, II does not follow."
//     },
//     {
//       id: '91',
//       question: 'Statement : Reading makes a full man, conference a ready man writing an exact man.Conclusion :I. Pointed and precise expression comes only through extensive writing.II. Extensive reading makes a complete man.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'I follows from the fact that writing makes an exact man. Conclusion II also directly follows from the statement.'
//     },
//     {
//       id: '92',
//       question: 'Statement: Modern man influences his destiny by the choice he makes unlike in the past.Conclusion:I. Earlier there were less options available to them.II. There was no desire in the past to influence the destiny.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Conclusion I is directly related to the statement. Hence, Conclusion I is valid, while the conclusion II is not related to the statement so it is not valid.'
//     },
//     {
//       id: '93',
//       question: 'Statement : Most of the Indian States existed before independence.Conclusion :I. Some Indian States existed before independence.II. Some Indian States did not exist before independence.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'According to the statement most of the Indian states existed before independence. It means not all the Indian States existed before independence. Hence, II conclusion is logically valid.'
//     },
//     {
//       id: '94',
//       question: 'Statement : Should new big industries be started in Kolkata ?Arguments :I. Yes. It will create job opportunities.II. No. It will further add the pollution of the city.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Opening new industries is advantageous in creating more job opportunities mean while it further increases the pollution of the city. So, either of arguments is strong.'
//     },
//     {
//       id: '95',
//       question: 'Statement : Today out of the world population of several thousand million, the majority of men have to live under governments which refuse them personal liberty and the right to dissent.Conclusion :I. People are indifferent to personal liberty and the right to dissent.II. People desire personal liberty and the right to dissent.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'It is mentioned in the statement that most people are forced to live under Governments which refuse them from personal liberty and the right to dissent. This means that they are not indifferent to these rights but have a desire for them. So, only I follows.'
//     },
//     {
//       id: '96',
//       question: 'In a certain code FIRE is coded as DGPC. What will be the last letter of the coded word for SHOT.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'D is used for F.G is used for I.P is used for R.andC is used for E. Thus, it is clear that each letter of the word FIRE stands for each corresponding letter of the coded word DGPC two places ahead. By applying the same principle, the letters QFMR will stand for SHOT. Hence, the last letter of the coded word is R.'
//     },
//     {
//       id: '97',
//       question: 'If TOUR is written in a certain code as 1234, CLEAR as 56784 and SPARE as 90847, what will be the 5thdigit for SCULPTURE in the same code ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "By, comparing letters and digit, we getT = 1O = 2 U = 3 R = 4 C = 5 L = 6 E = 7 A = 8 S = 9 and P = 0 As the 5thletter is SCULPTURE is P and '0' is used for P, therefore, 5th digit is the required code which is '0'."
//     },
//     {
//       id: '98',
//       question: 'If in a certain language PROSE is coded as PPOQE, how is LIGHT coded in that code ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'In the given code,PROSE = PPOQEThe first, third and fifth letters are same but in the place of second and fourth letters previous two letters are used. So, LIGHT = LGGFT.'
//     },
//     {
//       id: '99',
//       question: 'If SUMMER is coded RUNNER, the code for WINTER is',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'UMMER = RUNNERIn the given code, second, fifth and sixth letters are same. The first letter of the word (S → R) is moved one step backward, while the two middle letters (M → N and M → N) each moved one step forward to obtain the corresponding letters of the code. So,WINTER = VIOUER.'
//     },
//     {
//       id: '100',
//       question: 'Smoke : Pollution : : War : ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Pollution is the result of the Smoke.Similarly, Destruction is the result of the War.'
//     },
//     ... 7 more items
//   ],
//   'verbal-reasoning': [
//     {
//       id: '1',
//       question: 'Scribble : Write : : Stammer : ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer:Speak'
//     },
//     {
//       id: '2',
//       question: 'Breeze : Cyclone : : Drizzle : ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer:Downpour'
//     },
//     {
//       id: '3',
//       question: 'In following question, a number series is given with one term missing. Choose the correct alternative that will follow same pattern and fill in the blank spaces.1, 2, 3, 5, x, 13',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: 81+2=3, 3+2=5, similarly, 5+3=8'
//     },
//     {
//       id: '4',
//       question: 'In following question, a number series is given with one term missing. Choose the correct alternative that will follow the same pattern and fill in the blank space.1, 3, 4, 8, 15, 27, x',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: 50 (27+ sum of 2 numbers preceeding it, i.e. 23)'
//     },
//     {
//       id: '5',
//       question: 'Find the Odd one out :Arrow , Axe , Knife , Dagger , Sword',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer : Arrow'
//     },
//     {
//       id: '6',
//       question: 'Find odd one out :Brick , Heart , Bridge , Spade , Club',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer:Brick'
//     },
//     {
//       id: '7',
//       question: 'Dilip is the brother of Rahul. Sujata is the sister of Atul. Rahul is the son of Sujata. How is Dilip related to Sujata ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Dilip is son of Sujata'
//     },
//     {
//       id: '8',
//       question: 'In a family of six persons A, B, C, D, E and F, there are two married couples. (ii) D is the grandmother of A and mother of B.(iii) C is the wife of B and mother of F.(iv) F is the grand daughter of E.Which of the following is true ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'A is the brother of F'
//     },
//     {
//       id: '9',
//       question: 'Arrange the following words in a meaningful sequence :1. Patient 2. Diagnosis 3.Bill 4. Doctor 5. Treatment',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: '1, 4, 2, 5, 3'
//     },
//     {
//       id: '10',
//       question: 'Arrange the following words in a meaningful sequence :1. Index 2. Contents 3. Title 4. Chapters 5. Introduction',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: '3, 2, 5, 4, 1'
//     },
//     {
//       id: '11',
//       question: 'A man said to a lady, "The son of your only brother is the brother of my wife." What is the lady to the man.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Since, the son of the only brother of the lady is the nephew of the lady, therefore, the wife of the man is the niece of the lady. Hence, the lady is the sister of the father-in-law of the man.'
//     },
//     {
//       id: '12',
//       question: 'Arun said, "This girl is the wife of the grandson of my mother." Who is Arun to the girl?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Mother's grandson → Son. Son's wife → Daughter-in-law."
//     },
//     {
//       id: '13',
//       question: 'A, B and C are sisters, D is the brother of E and E is the daughter of B. How is A related to D ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "E is the daughter of B and D is the brother of E. So, D is the son of B. Also, A is the sister of B. Thus, A is D's aunt."
//     },
//     {
//       id: '14',
//       question: "P's father is Q's son. M is the paternal uncle of P and N is the Brother of Q. How is N related to M ?",
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "P's father is Q's son. So, Q is P's grandfather. M is the paternal uncle of P. So M is the brother of P's father. This means that M is also Q's son. N is the brother of Q. Thus, N is the paternal uncle of P."
//     },
//     {
//       id: '15',
//       question: 'Statements: All green are pink. Some pink are black.Some black are blue.  All blue are white.Conclusions:I. Some black are white.  II. Some blue are pink. III. Some pink are green.IV. No green is white.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option (2).'
//     },
//     {
//       id: '16',
//       question: 'Statements: Some soccer are live.Some cover are plastic. Some plastic are real.Conclusions: I. Some plastic are liveII. Some cover are real',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option (4).'
//     },
//     {
//       id: '17',
//       question: 'A is son of C while C and Q are the sisters to one another. Z is the mother of Q. If P is the son of Z, Which one of the following statements is correct ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Since, C and Q are sisters to one another and A is the son of C. Hence, C is the mother of Q, therefore, Z is maternal grandfather of A. As P is the son of Z. Hence, P is the maternal uncle of A.'
//     },
//     {
//       id: '18',
//       question: `Looking at a portrait of a man, Sanjay said, "His mother is the wife of my father's son. Brothers and sisters I have none." At whose portrait was Sanjay Looking.`,
//       options: [Array],
//       correctAnswer: 'answer',
//       desc: "Since, Sanjay has neither a sister nor a brother, therefore, Sanjay is the only son of his father. Hence, the mother of the portrait is wife of Sanjay. Therefore, the portrait is the wife of the Sanjay. Therefore, portrait was of Sanjay's son."
//     },
//     {
//       id: '19',
//       question: 'If A is the brother of B and K, D is the the mother of B and E is the father of A. Which one of the following statement is not definitely true ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'In the family, E is the father whose wife is D. E has three children A, B and K out of which A is the son. Hence, A cannot be the father of K.'
//     },
//     {
//       id: '20',
//       question: 'Introducing a lady, a man said, "Her mother is the only daughter of my mother-in-law." What is the man to the lady ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Since, the mother-in-law of the man is the mother of the lady, therefore, the lady is the daughter of the man.'
//     },
//     {
//       id: '21',
//       question: `Introducing a woman, a man said, "Her mother's husband's sister is my aunt." How man is related to the woman ?`,
//       options: [Array],
//       correctAnswer: 'b',
//       desc: "Her mother's husband means her father and her father's sister is man's aunt. Therefore, the man and woman may be cousin."
//     },
//     {
//       id: '22',
//       question: `Leela, who is Sohan's daughter, says to Latika, "Your mother Alka is the younger sister of my father who is the third child of Gajanan." What is the relation of Gajanan to Latika ?`,
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'As Alka is the sister of Sohan and Sohan is the third child of Gajanan, therefore, Alka will be the daughter of Gajanan. But Latika is the daughter of Alka, so, Gajanan will be grandfather of Latika.'
//     },
//     {
//       id: '23',
//       question: "Old man's son is my son's uncle, then what relation has the old man me ?",
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "Since, Old man's son is my son's uncle.My Son's Uncle = My Brother.So, old man's son is my brother. Hence, the old man is my father."
//     },
//     {
//       id: '24',
//       question: 'There are five persons sitting on a bench. Blue eyed lady sitting in the middle is my mother. At the extreme left, the man with grey hair is my maternal uncle. Lady sitting at the extreme right is having a pimple on her nose and is the wife of person who is sitting between blue eyed lady and grey haired man and has a pointed nose. A lady having marks on her face is the younger sister of the blue eyed lady and sitting on the remaining fifth place. The person having a pointed nose is the son of the blue eyed lady. What is the lady having marks on her face to the man sitting at extreme left ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "The man sitting at the extreme left is my maternal uncle and the lady having marks on her face is my mother's sister. Hence, the lady having marks on her face is the sister of the man sitting at the extreme left."
//     },
//     {
//       id: '25',
//       question: `Akash said to Mohit, "That boy in blue shirt is younger of the two brothers of the daughter of my father's wife." How is the boy in the blue shirt related to Akash ?`,
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "The daughter of Akash's father's wife is the sister of Akash and brother of the daughter is the brother of Akash."
//     },
//     {
//       id: '26',
//       question: "A girl introduced a boy as the son of the daughter of father of her uncle. The boy is girl's :",
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "Daughter of uncle's father → Uncle's sister → Mother.Mother's son → Brother."
//     },
//     {
//       id: '27',
//       question: "Suresh's sister is the wife of Ram. Ram is Rani's brother. Ram's father is Madhur. Sheetal is Ram's grandmother. Rema is Sheetal's daughter-in-law. Rohit is Rani's brother's son. Who is Rohit to Suresh ?",
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Suresh sister's husband → Ram.Ram's sister → Rani.Rani's brother's son → RohitRohit is the Nephew of Suresh."
//     },
//     {
//       id: '28',
//       question: "Vinod introduces Vishal as the son of the only brother of his father's wife. How is Vinod related to Vishal ?",
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Vinod's father → Uncle of Vishal.Vinod's Cousin → Vishal."
//     },
//     {
//       id: '29',
//       question: 'Pointing to a man, Roshani said that his wife is the only daughter-in-law of my father-in-law Mohan. How is the man related to Mohan?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Son'
//     },
//     {
//       id: '30',
//       question: 'Mark answer :I. The Central Government has recently declared to finish the rebate on farming.II. The Central Government faced financial loss on account of giving rebate on farming for the last few years.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'As the Central Government faced financial loss on accounts of giving rebate on farming for the last few years, therefore, they declared to finish the rebate on farming. Hence, II is the cause while I is the effect.'
//     },
//     {
//       id: '31',
//       question: 'Mark answer :I. Many people visited the religious place during weekend. II. Few people visited the religious place during the week days.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Clearly, lesser number of people is visiting a place during the week days and more people are visiting during the weekend, both imply events that go together, and must have happened due to a common cause such as, it being a holiday during the weekend.'
//     },
//     {
//       id: '32',
//       question: "Mark answer :I. Ram's father was ill.II. Ram brought medicine after consulting the doctor.",
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "As Ram's father was ill so he brought medicine on the advice of doctor. Therefore, Statement I is cause and II is the effect."
//     },
//     {
//       id: '33',
//       question: 'Mark answer :I. The price of vegetables have been increased considerably during this summer.II. There are tremendous increase in the temperature during this summer thereby damaging crops greatly.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Damage of crops due to high temperature may have resulted in a short supply of vegetables and hence an increase in their prices. Thus, statement II is cause and I is its effect.'
//     },
//     {
//       id: '34',
//       question: 'Mark answer :I. The prices of petrol and diesel in the domestic market have remained unchanged for the past few months.II. The crude oil prices in the international market have gone up substantially in the last few month.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'The prices of petrol and diesel in domestic market remains same in last few month while Price of crude oil have been increased in international market this mean that these are baked by independent causes.'
//     },
//     {
//       id: '35',
//       question: 'Mark answer :I. Rural and semi-urban areas in the country have been suffering due to load shedding for quite some time.II. If the Government is not able to overcome the power crisis, load shedding will be extended even to the urban areas.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'The facts given in statements are clearly the result of acute power shortage. So, both the satements I and II are independent causes.'
//     },
//     {
//       id: '36',
//       question: 'Mark answer :I. There is sharp decline in the production of oil seeds this year.II. The Government has decided to increase the import quantum of edible oil.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'There is sharp decline in the production of oil seeds this year. Therefore, The Government has decided to increase the import quantum of edible oil. Statement II is effect of Statement I.'
//     },
//     {
//       id: '37',
//       question: 'Mark answer :I. Many people in the area are reported to be suffering from Malaria.II. Private Medical Practitioner in the area have decided to close their clinics for few days.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Both the statement I and II are effects of independent causes. Because spreading malaria or to be suffering from malaria may be due to mosquitoes or dirtiness. But the decision of Private practitioners to close the clinics may be due to other cause.'
//     },
//     {
//       id: '38',
//       question: 'Mark answer :I. The state Government has announced special tax package for the new industries to be set-up in the State.II. Last year the state Government had hiked the taxes for all industrial activities in the State.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Because due to hike of taxes last year the State Government has announced special tax package the new industries to be set-up in the State.'
//     },
//     {
//       id: '39',
//       question: 'Mark answer :I. The vegetables price in the local market have increase manifold during the past few days.II. Incessant rains have created flood like situation in most rural parts of the State.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The transportation gets effected due to the flood created by incessant rains in the most rural parts of the State. Therefore, on account of this, it is possible to increase the vegetable prices in the local market.'
//     },
//     {
//       id: '40',
//       question: 'Mark answer :I. Police authority has recently increased vigil during the evening hours in the locality.II. There has been considerable reduction in the incidents of petty crimes in the locality.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Since, police authority has recently increased vigil during the evening hours in the locality therefore, the petty crimes have reduced considerably.'
//     },
//     {
//       id: '41',
//       question: 'Mark answer :I. There was huge rush of people to the temple last Sunday the 15th of the month.II. The temple authority had decided to close down the temple for repairs from 17th of the month.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Since, the temple authority had decided to close down the temple for repairs from 17th of the month, hence, there was a huge rush of people to the temple on last Sunday, 15th of the month.'
//     },
//     {
//       id: '42',
//       question: 'Mark answer :I. A huge truck overturned on the middle of the road last night.II. The police had cordoned off the entire area in the locality last morning for half of the day.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Since, a huge truck overturned on the middle of the road last night, so, the police had cordoned off the the entire area in the locality last morning for half of the day.'
//     },
//     {
//       id: '43',
//       question: 'Mark answer :I. Importance of Yoga and exercise is being realized by all sections of the society.II. There is an increasing awareness about health in the society particularly among middle aged of people.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'As, the awareness about health in the society is increasing particularly among middle-aged group of people so the importance of Yoga and exercise is being realized by all sections of the society.'
//     },
//     {
//       id: '44',
//       question: "Mark answer :I. It is the aim of the city's civic authority to get the air pollution reduced by 20% in the next two month.II. The number of asthma cases in the city is constantly increasing.",
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The increase in number of asthma cases must have alerted the authorities to take action to control air pollution that triggers the diseases.'
//     },
//     {
//       id: '45',
//       question: 'Mark answer :I. The Reserve bank of India has recently put restrictions on few small banks in the country.II. The small banks in the private and co-operative sector in India are not in a position to withstand the competitions of the bigger in the public sector.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The inability of the small banks to compete with the bigger ones shall not ensure security and good services to the customers, which is an essential concomitant that has to be looked into by the Reserve Bank.'
//     },
//     {
//       id: '46',
//       question: 'Statements :Some Poets are poems. No poem is song.Conclusions :I. Some Poems are not songs.II. Some songs are poems.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: ''
//     },
//     {
//       id: '47',
//       question: 'Statement:All the harmoniums are instruments. All instruments are flutes.Conclusion :I. All the flutes are instruments.II. All the harmoniums are flutes.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'From the following Statement we have these diagram: Only II conclusion follows.'
//     },
//     {
//       id: '48',
//       question: 'What is the value of X, if X and Y are two distinct integers and their product is 30?Statement 1: X is an odd integer.Statement 2: X > Y',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: B'
//     },
//     {
//       id: '49',
//       question: "Which one of the following is always associated with 'Justice' ?",
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Legitimate: Because justice can only be given according to law.'
//     },
//     {
//       id: '50',
//       question: 'In India a widow can marry her brother-in-law although a man cannot marry the sister of his dead wife',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'As there is no such tradition hence this will happen sometimes.'
//     },
//     {
//       id: '51',
//       question: 'Laugh : Joy : : Weep : ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Laugh indicates the Joy.Similarly, Weep indicates the Grief.'
//     },
//     {
//       id: '52',
//       question: 'A boy is sitting on the back seat of a car. When the driver suddenly starts the car, the boy experiences a backward force -',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "Always. When a car suddenly starts, the lower part of the boy's body will be in motion while his upper part will be at rest. Hence he will always experience a backward force."
//     },
//     {
//       id: '53',
//       question: 'Which of the following is always found in BRAVERY ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Courage is the root of bravery.'
//     },
//     {
//       id: '54',
//       question: 'Which one of the following is always with BARGAIN ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Bargain is only possible when exchange takes place.'
//     },
//     {
//       id: '55',
//       question: 'Which of the following is always associated with TREE ??',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Without roots trees cannot exist.'
//     },
//     {
//       id: '56',
//       question: 'A river always has -',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'River cannot be formed without banks.'
//     },
//     {
//       id: '57',
//       question: 'If we are going early in the morning towards the south, the sun will be visible at our left --',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Early in the morning the sun is in the direction of east. If we are going towards the south, our face will be in the direction of south and our left hand will be in the direction of east. Hence, if we go early in the morning towards the south, the sun will always be visible at our left.'
//     },
//     {
//       id: '58',
//       question: 'A man walks 1 km to East and then he turns to South and walks 5 km. Again he turns to East and walks 2 km. After this he turns to North and walks 9 km. Now, how far is he from his starting point?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Man's Movement :  The last position of the man is P and OEP is a Right angled triangle in whichEP = 3 km and OE = 4 kmThus,OP = √(32 +42)OP = √25OP = 5 km."
//     },
//     {
//       id: '59',
//       question: 'I walk 30 metres in North-West direction from my house and then 30 metres in South-west direction. After this I walk 30 metres in South-East direction. Now, I turn to my house, in what direction am I going?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Movements are as follows:  Now, I am going in North-East Direction.'
//     },
//     {
//       id: '60',
//       question: 'A man faces towards north. Turning to his right, he walks 25 metes. He then turns to his left and walks 30 metres. Next, he moves 25 metres to his right. He then turns to his right again and walks 55 metres. Finally, he turns to the right and moves 40 metres. In which direction is he from his starting point ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Man's Movement :  Finally he is towards the South-East from his starting Point."
//     },
//     {
//       id: '61',
//       question: 'If South-East becomes North and South becomes North-East and all the rest directions are changed in the same manner, the what will be the direction for West ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'If South-east becomes North and North East becomes West, therefore, the whole figure moves through 1350. Hence, West will be South-East.See, Actual figure is rotating 1350 anticlockwise. So, When West will be rotated by same degree anticlockwise. It will hold the place of south-East.'
//     },
//     {
//       id: '62',
//       question: 'If Rahim moves 20 metres in East direction and then turns to his left and then moves 15 metres and then he turns to his right and moves 25 metres. After this he turns to his right and moves 15 metres. Now, how far is he from starting point ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "Rahim\\'s Movement  Therefore, the distance of Rahim from his starting point,= 20 +25= 45 metres"
//     },
//     {
//       id: '63',
//       question: 'Who is facing U?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: P'
//     },
//     {
//       id: '64',
//       question: 'Who is immediate right of P?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: T'
//     },
//     {
//       id: '65',
//       question: 'Who is immediate left of S?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: U'
//     },
//     {
//       id: '66',
//       question: 'Who are the neighbors of Q?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: R and T'
//     },
//     {
//       id: '67',
//       question: 'Which of the following statements are not true?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Q is immediate right of P'
//     },
//     {
//       id: '68',
//       question: 'In a chess tournament each of six players will play every other player exactly once. How many matches will be played during the tournament ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: 15I. matches of first player with other 5 playersII. matches of second player with 4 players other than the first playerIII. matches of third player with 3 players other than the first player and second player.IV. matches of fourth player with 2 players other than the first player, second player and third player.V. matches of fifth player with 1 player other than the first player, second player, third player and fourth player.So total matches will be 5+4+3+2+1 = 15'
//     },
//     {
//       id: '69',
//       question: 'A, B, C and D play a game of cards. A says to B. "If I give you 8 cards, you will have as many as C has and I shall have 3 less than what C has. Also if I take 8 cards from C, I shall have twice as many as D has." If B and D together have 50 cards, how many cards have A got?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: 40Let no. of cards with B be:D=50-x C=x+8A=x+5+8= x+13x+13+6 = 2(50-x)x= 27Cards with A = 27+13 =40'
//     },
//     {
//       id: '70',
//       question: 'Reena is twice as old as Sunita. Three years ago, she was three times as old as Sunita. How old (years) is Reena now ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: 12Let Present age of Reena= x yearspresent age of Sunita = x/2 yearsx-3 = 3(x/2-3)x= 12 years'
//     },
//     {
//       id: '71',
//       question: `Pointing towards Rita, Nikhil said, "I am the only son of her mother's son." How is Rita related to Nikhil?`,
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "Rita's mother's son -----> Rita's brother.So, Nikhil is the son of Rita's brother.i.e., Rita is Nikhil's aunt."
//     },
//     {
//       id: '72',
//       question: 'Pointing to a lady, a man said, "The son of her only brother is the brother of my wife." How is the lady related to the man?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "Wife's brother -----> Brother-in-law.Son of lady's brother is the brother-in-law of the man.So, lady's brother is man's father-in-law.i.e., the lady is the sister of man's father-in-law."
//     },
//     {
//       id: '73',
//       question: `Pointing to Ketan, Namrata said, "he is the son of my father's only son." How is Ketan's mother related to Namrata?`,
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Namrata's father's only son -----> Namrata's brother.So, Ketan is the son of Namrata's brother.Thus, Ketan's mother is the wife of Namrata's brother.i.e., Namrata's sister-in-law."
//     },
//     {
//       id: '74',
//       question: `Looking at a portrait of a man, Harsh said, "His mother is the wife of my father's son. Brothers and sisters I have one." At whose portrait was Harsh looking?`,
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "Since Harsh has no brother and sister, so he is his father's only son.So, wife of Harsh's father's son -----> Harsh's wife.Thus, Harsh's wife is the man's mother or the man is Harsh's son."
//     },
//     {
//       id: '75',
//       question: 'Pointing towards a girl in the picture, Sarita said, "She is the mother of the Neha whose father is my son." How is Sarita related to the girl in the picture?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "Neha is the daughter of Sarita's son, and the girl is Neha's mother.So, the girl is Sarita's son's wife.i.e., Sarita is the girl's mother-in-law."
//     },
//     {
//       id: '76',
//       question: `Pointing to Kapil, Shilpa said, "His mother's brother is the father of my son Ashish." How is Kapil related to Shilpa?`,
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Father of Shilpa's son -----> Shilpa's husband.So, Kapil is the son of sister of Shilpa's husband.Thus, Kapil is Shilpa's nephew."
//     },
//     {
//       id: '77',
//       question: `Pointing to a photograph, Arun said, "She is the mother of my son's wife's daughter." How is Arun related to the lady?`,
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "Arun's son's wife's daughter -----> Arun's son's daughter.Mother of daughter of Arun's son -----> Wife of Arun's son.So, Arun s the father-in-law of the lady."
//     },
//     {
//       id: '78',
//       question: 'Arrange the given words in a meaningful sequence and then choose the most appropriate sequence:1. Honey2. Flower3. Bee4. Wax',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: '2,3,1,4'
//     },
//     {
//       id: '79',
//       question: 'Arrange the given words in a meaningful sequence and then choose the most appropriate sequence:1. Site2. Plan3. Rent4. Money5. Building6. Construction',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'The meaningful sequence is:Money, site, plan, construction, building and rent.'
//     },
//     {
//       id: '80',
//       question: 'Arrange the given words in a meaningful sequence and then choose the most appropriate sequence:1. Sentence2. Chapter3. Letter4. Book5. Word6. Paragraph',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The meaningful sequence is:Book, Chapter, Paragraph, Sentence, Word, Letter.'
//     },
//     {
//       id: '81',
//       question: 'Arrange the given words in a meaningful sequence and then choose the most appropriate sequence:1. Book2. Pulp3. Timber4. Jungle5. Paper',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'The meaningful sequence is:Jungle, Timber, Pulp, Paper, Book.'
//     },
//     {
//       id: '82',
//       question: 'Arrange the given words in a meaningful sequence and then choose the most appropriate sequence:1. College2. Child3. Salary4. School5. Employment',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The meaningful sequence is:Child, School, College, Employment, Salary.'
//     },
//     {
//       id: '83',
//       question: 'Choose the odd one out: Nylon, cotton, terylene, polyester',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'All except Cotton are synthetic fibres, while cotton is a natural fibre.'
//     },
//     {
//       id: '84',
//       question: 'Choose the odd one out: Nagpur, Ranchi, Bhopal, Bangalore',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'All except Nagpur are capital cities.'
//     },
//     {
//       id: '85',
//       question: 'Choose the odd one out: Sitar, Drum, Veena, Guitar',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'All except Drum are string instruments'
//     },
//     {
//       id: '86',
//       question: 'Choose the odd one out: Ring, Bangle, Ornament, Necklace',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'All except Ornament are different types of ornaments.'
//     },
//     {
//       id: '87',
//       question: 'Choose the odd one out: Cube, square, triangle, rectangle',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'All except Cube are two-dimensional plane figures.'
//     },
//     {
//       id: '88',
//       question: 'Choose the odd one out: Papaya, guava, litchi, watermelon',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'All except Watermelon grow on trees, while watermelon grows on creepers.'
//     },
//     {
//       id: '89',
//       question: 'Choose the odd one out: Jump, Walk, Think, Swim',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'All except Think denote physical activities.'
//     },
//     {
//       id: '90',
//       question: 'Statement:Some pearls are jewels. Some Jewls are ornaments.Conclusion :I. Some jewels are pearls.II. Some ornaments are jewels.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'From the following Statement we have these diagram: Both I and II follows.'
//     },
//     {
//       id: '91',
//       question: 'Statement:Some kings are queens. All the queens are beautiful.Conclusion :I. All the kings are beautifulII. All the queens are kings.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'From the following Statement we have these diagram:'
//     },
//     {
//       id: '92',
//       question: 'Statement:Some papers are pens. All the pencils are pensConclusion :I. Some pens are pearls.II. Some pens are papers.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'From the following Statement we have these diagram:'
//     },
//     {
//       id: '93',
//       question: 'Statement:Some hens are cows. All the cows are horses.Conclusion :I. Some horses are hens.II. Some hens are horses.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'From the following Statement we have these diagram:'
//     },
//     {
//       id: '94',
//       question: 'Statement:Some dogs are bats. Some bats are cats.Conclusion :I. Some dogs are cats.II. Some cats are dogs.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'From the following Statement we have these diagram:'
//     },
//     {
//       id: '95',
//       question: 'Statement:All the pencils are pens. All the pens are Inks.Conclusion :I.All the pencils are inks.II. Some inks are pencils.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'From the following Statement we have these diagram:Both I and II follows.'
//     },
//     {
//       id: '96',
//       question: 'Statement:All the poets are goats. Some goats are trees.Conclusion :I.Some poets are trees.II. Some trees are goats.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'From the following Statement we have these diagram: Only II follows.'
//     }
//   ],
//   'non-verbal-reasoning': [
//     {
//       id: '1',
//       question: 'Float : Sink :: Boat : ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Float means above water and sink means under water. In same way, Boat floats on water and submarine moves under water.'
//     },
//     {
//       id: '2',
//       question: 'Water: Dam:: Trade: ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Water is conductd by Dam and trade is conducted by trade policy.'
//     },
//     {
//       id: '3',
//       question: 'Gravity is related to pull in the same way as Magnetism is related to :',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Gravity is related to pull in same way Magnetism is related to Attraction.'
//     },
//     {
//       id: '4',
//       question: '12 is related to 36 in the same way 17 is related to ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: '12*3 = 3617*3 = 51'
//     },
//     {
//       id: '5',
//       question: '1, 9, 25, 49, ?, 121. What will come at the place of question mark ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: '12 = 1.32 = 9.52 = 25.72 = 49.92 = 81.112 = 121.'
//     },
//     {
//       id: '6',
//       question: '4, 7, 12, 19, 28, ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'First term,4Second,4+3 = 7.Third,7+5 = 12.Fourth,12+7 = 19.Fifth,19+9 = 28.Therefore,28+11 = 39 will be the required term.'
//     },
//     {
//       id: '7',
//       question: '6, 11, 21, 36, 56, ?',
//       options: [Array],
//       correctAnswer: 'c,d',
//       desc: '6 (+5)→ 11 (+10)→ 21 (+15)→ 36 (+20)→ 56 (+25) → 81'
//     },
//     {
//       id: '8',
//       question: '10, 100, 200, 310, ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: '1st term : 102nd term : 100 = 10+903rd term : 200 = 100+1004th term : 310 = 200+1105th Term: 430 = 310+120Therefore, the answer is 430.'
//     },
//     {
//       id: '9',
//       question: '8, 28, 116, 584, ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: '8 (*3 +4)→28 (*4 +4)→116 (*5 +4)→584 (*6 +4)→3508'
//     },
//     {
//       id: '10',
//       question: 'Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it ?a_bbc_aab_cca_bbcc',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The pattern is,aabbccaabbccaabbcc.The pattern aabbcc is repeated.'
//     },
//     {
//       id: '11',
//       question: 'Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it ?_ bc _ ca _ aba _ c _ ca',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'The series is, abc b ca c aba b c b ca.The letters are changing their place in a cycling order.'
//     },
//     {
//       id: '12',
//       question: 'Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it ?_ ab _ b _ aba _ _ abab.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'aabab / aabab / aabab.The pattern is repeated aabab.'
//     },
//     {
//       id: '13',
//       question: 'Insect : Disease :: War : ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Insect invites disease and War invites destruction.'
//     },
//     {
//       id: '14',
//       question: 'Book : Cover :: Painting : ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Cover is used to protect book in same way and frame is use to protect painting.'
//     },
//     {
//       id: '15',
//       question: 'Interest : Money lender :: Salary : ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Interest is given to money lender and salary is given to employees.Mind it wages are given to Workers.'
//     },
//     {
//       id: '16',
//       question: 'Asthma : Lungs :: Conjunctivitis : ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'As Asthma is a disease of Lungs similarly Conjunctivitis is a disease of Eyes.'
//     },
//     {
//       id: '17',
//       question: 'Dismay : Joy :: Tend : ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Dismay and Joy are opposite to each other same way Tend and Ignore are also opposite to each other.'
//     },
//     {
//       id: '18',
//       question: 'Thermometer : Temperature :: Glucometer : ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Thermometer is used to measure Temperature similarly Glucometer use to measure Blood sugar.'
//     },
//     {
//       id: '19',
//       question: 'Communicable disease : Malaria :: Non-communicable disease : ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Cancer is non-communicable disease.'
//     },
//     {
//       id: '20',
//       question: '6 : 36 :: 9 : ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: '6*6 = 36.9*9 = 81.'
//     },
//     {
//       id: '21',
//       question: 'Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it ?bca _ b _ aabc _ a _ caa',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'The series is, bcaa / bcaa / bcaa / bcaa.bcaa pattern is reapeated.'
//     },
//     {
//       id: '22',
//       question: '384 : ? :: 216 : 63',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: '216/4 = 54, and 216/3 = 7272+54 = 126/2 = 63.384/4 = 96, and 384/3 = 128.128+96 = 224, 224/2 = 112.'
//     },
//     {
//       id: '23',
//       question: 'Air : Atmosphere :: Water : ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Atmosphere is the biggest unit which contains Air similarly Ocean is the biggest unit which contains Water.'
//     },
//     {
//       id: '24',
//       question: 'Obey : Defy :: Work : ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Defy is antonym of Obey in same way Rest is antonym of Work.'
//     },
//     {
//       id: '25',
//       question: 'Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it ?b _ac _ cc _ cb _ ab _ ac',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'The series is, baac / accb / cbba / baac'
//     },
//     {
//       id: '26',
//       question: 'Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it ?aab _ aa _ bbb _ aaa _ bbba',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The series is, aabb / aaabbb / aaaabbbb / a.Thus letters are repeated twice, then thrice then four times and so on.'
//     },
//     {
//       id: '27',
//       question: '_ bcc _ ac _ aabb _ ab _ cc.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'The series is, bbccaa / ccaabb / aabbcc.'
//     },
//     {
//       id: '28',
//       question: 'b _ ccacca _ ba _ bbc _ bc _ a.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'The series is,bbcca / ccaab / aabbc / bbcca.'
//     },
//     {
//       id: '29',
//       question: 'Light : Sun :: Heat : ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Sun gives us Light in same way Fire gives us Heat.'
//     },
//     {
//       id: '30',
//       question: 'Oil : Lamp :: Wax : ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Lamp contains Oil in same way Candle contains Wax.'
//     },
//     {
//       id: '31',
//       question: 'Parrot : Cage :: Man : ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Parrot is captured in Cage in same way Man is captured in Prison.'
//     },
//     {
//       id: '32',
//       question: 'Mango : Fruit :: Potato : ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Mango is Fruit in same way Potato is modified Stem.'
//     },
//     {
//       id: '33',
//       question: 'Dog : Bark :: Goat : ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Dog makes noise known as Bark and Goat makes noise known as Bleat.'
//     },
//     {
//       id: '34',
//       question: 'A university library budget committee must reduce exactly five of eight areas of expenditure — G, L, M, N, P, R, S, and W — in accordance with the following conditions:If both G and S are reduced, W is also reduced.If N is reduced, neither R nor S is reduced.If P is reduced, L is not reduced.Of the three areas L, M, and R, exactly two are reduced. If both M and R are reduced, which one of the following is a pair of areas neither of which could be reduced?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "This question concerns a committee's decision about which five of eight areas of expenditure to reduce. The question requires you to suppose that M and R are among the areas that are to be reduced, and then to determine which pair of areas could not also be among the five areas that are reduced.The fourth condition given in the passage on which this question is based requires that exactly two of M, R, and L are reduced. Since the question asks us to suppose that both M and R are reduced, we know that L must not be reduced:The second condition requires that if N is reduced, neither R nor S is reduced. So N and R cannot both be reduced. Here, since R is reduced, we know that N cannot be. Thus, adding this to what we've determined so far, we know that L and N are a pair of areas that cannot both be reduced if both M and R are reduced:Answer choice (C) is therefore the correct answer, and you are done."
//     },
//     {
//       id: '35',
//       question: 'Seven piano students — T, U, V, W, X, Y, and Z — are to give a recital, and their instructor is deciding the order in which they will perform. Each student will play exactly one piece, a piano solo. In deciding the order of performance, the instructor must observe the following restrictions:X cannot play first or second.W cannot play until X has played.Neither T nor Y can play seventh.Either Y or Z must play immediately after W plays.V must play either immediately after or immediately before U plays. If V plays first, which one of the following must be true?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'This question deals with an ordering relationship defined by a set of conditions concerning when seven piano students will perform. As an aid in visualizing this problem you can draw a simple diagram that shows the seven recital slots arranged in order from left to right. Student V is shown in the first slot, as specified by the supposition that "V plays first":We can immediately fill in one of the empty slots in the diagram. The condition that "V must play either immediately after or immediately before U plays" tells us that U must occupy the second slot in the recital schedule. This is shown below:Since the question asks us what must be true, we can eliminate incorrect responses by showing that they could be false. Response (A) is incorrect because the statement that "T plays sixth" is not necessarily true — we can place T in one of the slots other than sixth and still meet all the conditions of the problem. One such recital schedule, with T playing third, is shown in the diagram below:This schedule can be derived as follows:A check will verify that this schedule meets the conditions of the problem, including the one that "Either Y or Z must play immediately after W plays."The schedule shown in the diagram also demonstrates that response (B)is incorrect. In it, X plays fourth, so it is not correct that the statement, "X plays third," must be true.Response (C), "Z plays seventh," is the credited response. We can show Z must be seventh by demonstrating that:To demonstrate that Z can play seventh, you can refer to the schedule that was developed for the discussion of response (A), above. In it, Z plays seventh, and the supposition given in the question and all the conditions in the passage are met.To demonstrate that Z cannot play in a slot other than seventh, we can attempt to find another student to play seventh. We already know that neither U nor V can play seventh. Hence, there are four remaining players: T, W, X, and Y. However, a review of the conditions shows that none of those players can play seventh:Since Z can play seventh and no other player can, then the statement that Z must play seventh is correct and (C) is the credited response.Response (D) is incorrect because it is not necessarily true that "T plays immediately after Y." In our discussion of response (A), we developed a schedule in which T plays third and Y plays sixth, yet all conditions are satisfied.'
//     },
//     {
//       id: '36',
//       question: 'Seven piano students — T, U, V, W, X, Y, and Z — are to give a recital, and their instructor is deciding the order in which they will perform. Each student will play exactly one piece, a piano solo. In deciding the order of performance, the instructor must observe the following restrictions:X cannot play first or second.W cannot play until X has played.Neither T nor Y can play seventh.Either Y or Z must play immediately after W plays.V must play either immediately after or immediately before U plays. If U plays third, what is the latest position in which Y can play?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'This question involves the same original conditions as the previous problem, but it begins with an additional supposition: "U plays third." You must determine what effect this supposition would have on the possible positions in which Y can appear in the recital schedule.The correct response is (D): Y can play as late as sixth. The diagram below shows a recital order that meets all the conditions and has Y performing in the sixth position:One strategy for arriving at this solution is to work backward to see which position is the latest in which we can place Y and at the same time produce a recital schedule that meets all the conditions.Using that approach, we immediately see that Y cannot play as late as seventh, because of the condition that "Neither T nor Y can play seventh." Backing up and placing Y sixth, we can begin to fill in the schedule, as follows:This schedule has five empty slots, into which we must fit players T, V, W, X, and Z. The following is a series of reasoning steps that can be used:'
//     },
//     {
//       id: '37',
//       question: 'A charitable foundation awards grants in exactly four areas — medical services, theater arts, wildlife preservation, and youth services — each grant being in one of these areas. One or more grants are awarded in each of the four quarters of a calendar year. Additionally, over the course of a calendar year, the following must obtain:Grants are awarded in all four areas.No more than six grants are awarded.No grants in the same area are awarded in the same quarter or in consecutive quarters.Exactly two medical services grants are awarded.A wildlife preservation grant is awarded in the second quarter. If a wildlife preservation grant and a youth services grant are awarded in the same quarter of a particular calendar year, then any of the following could be true that year EXCEPT:',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: `This question deals with the awarding of grants during the quarters of a calendar year. As an aid in visualizing this problem, we can set up a simple table with columns representing the four quarters. Since the fifth condition in the passage states that "[a] wildlife preservation grant is awarded in the second quarter," we know that all possible solutions for any question based on the passage must include a wildlife preservation grant awarded in the second quarter, which we can represent like this:The particular question here begins with the added supposition that "a wildlife preservation grant and a youth services grant are awarded in the same quarter of a particular calendar year." One possible way this could be satisfied is to have a youth services grant awarded in the second quarter in addition to the wildlife grant awarded in that quarter:Another possibility would be to have a wildlife preservation grant and a youth services grant both being awarded in some quarter other than the second quarter. Given the condition that "[n]o grants in the same area are awarded in the same quarter or in consecutive quarters," the only quarter in which a wildlife preservation grant could be awarded in addition to the second quarter is the fourth quarter. So the only alternative way to satisfy the added supposition is if both a wildlife preservation grant and a youth services grant are awarded in the fourth quarter:So far, then, we've determined that for this question there must be a youth services grant awarded in the second quarter or the fourth quarter.Each of the incorrect answer choices for this question is a statement that could be true. The question asks you to identify the exception; that is, you need to find the statement that cannot be true. The correct answer choice is (D), which states: "A youth services grant is awarded in the third quarter." This could not be true without violating the third condition, which specifies that "[n]o grants in the same area are awarded in the same quarter or in consecutive quarters." We saw above that a youth services grant must either be awarded in the second quarter or the fourth quarter. On either possibility, awarding a youth services grant in the third quarter would result in two consecutive quarters where the youth services grant is awarded:or:In both cases, two youth services grants would be awarded in consecutive quarters, in violation of the third condition.To see that each of the other answer choices could be true, it will suffice to construct a possible outcome for each one that is consistent with the supposition given in the question and the conditions in the passage. Consider the following possible outcome:A quick check of the conditions shows that this satisfies all of the conditions for the problem:Notice that in this possible outcome, a medical services grant is awarded in the second quarter (answer choice (A)) and a theater arts grant is awarded in the first quarter (answer choice (B)). So answer choices (A) and (B) are both incorrect.Now consider the following possible outcome:A check of the conditions shows that this satisfies the supposition and all of the conditions. In this outcome, a theater arts grant is awarded in the second quarter (answer choice (C), so answer choices (C) is also incorrect.`
//     },
//     {
//       id: '38',
//       question: "From a group of seven people — J, K, L, M, N, P, and Q — exactly four will be selected to attend a diplomat's retirement dinner. Selection conforms to the following conditions:Either J or K must be selected, but J and K cannot both be selected.Either N or P must be selected, but N and P cannot both be selected.N cannot be selected unless L is selected.Q cannot be selected unless K is selected. If P is not selected to attend the retirement dinner, then exactly how many different groups of four are there each of which would be an acceptable selection?",
//       options: [Array],
//       correctAnswer: 'c',
//       desc: `This question adds a new supposition to the original set of conditions — "P is not selected to attend the retirement dinner." The task is to determine all of the different possible selections that are compatible with this new supposition. A compatible solution is one that violates neither the new supposition nor the original conditions.Since the second condition states "[e]ither N or P must be selected...," we can infer from the new supposition (P is not selected) and the second condition (either N or P, but not both, is selected) that N is selected. And since N is selected, we know from the third condition that L is selected. In other words every acceptable selection must include both L and N.We are now in a good position to enumerate the groups of four which would be acceptable selections. The first condition specifies that either J or K, but not both, must be selected. So you need to consider the case where J (but not K) is selected and the case in which K (but not J) is selected. Let's first consider the case where J (but not K) is selected. In this case, Q is not selected, since the fourth condition tells you that if K is not selected, then Q cannot be selected either. Since exactly four people must be selected, and since P, K, and Q are not selected, M, the only remaining person, must be selected. Since M's selection does not violate any of the conditions or the new supposition, N, L, J, and M is an acceptable selection; in fact, it is the only acceptable selection when K is not selected. So far we have one acceptable selection, but we must now examine what holds in the case where K is selected.Suppose that K is selected. In this case J is not selected, but Q may or may not be selected. If Q is selected, it is part of an acceptable selection — N, L, K, and Q. If Q is not selected, remembering that J and P are also not selected, M must be selected. This gives us our final acceptable selection — N, L, K, and M.Thus there are exactly three different groups of four which make up acceptable selections, and (C) is the correct response.`
//     },
//     {
//       id: '39',
//       question: "From a group of seven people — J, K, L, M, N, P, and Q — exactly four will be selected to attend a diplomat's retirement dinner. Selection conforms to the following conditions:Either J or K must be selected, but J and K cannot both be selected.Either N or P must be selected, but N and P cannot both be selected.N cannot be selected unless L is selected.Q cannot be selected unless K is selected. There is only one acceptable group of four that can be selected to attend the retirement dinner if which one of the following pairs of people is selected?",
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'The way in which this question is phrased is rather complex, and so it is important to get very clear what exactly is being asked. Unlike other questions which give you a new supposition to consider in conjunction with the original conditions, this question asks you to determine what is needed, in addition to the original conditions, to guarantee that only one group of four is acceptable.One way to approach this question is to consider each option individually, and determine for each option whether only one acceptable group of four can be selected when the pair indicated in the option is selected. You may wish to vary the order in which the options are considered according to personal preferences. In the discussion here, we will consider the answer choices in order from (A) through to (E).Choice (A): When both J and L are selected, K cannot be selected (first condition). Consequently Q cannot be selected (fourth condition). More than one group of four is acceptable under these circumstances, however: J, L, M, and N may be selected, and J, L, M, and P may be selected.Choice (B): When K and M are both selected, J cannot be selected (first condition). Other than that, anyone else could be selected. This leaves more than one acceptable group of four. K, L, M, and N may be selected; K, L, M, and P may be selected; and K, M, P, and Q may be selected.Choice (C): When L and N are both selected, P cannot be selected (second condition), but, as in the case of option (B), anyone else can be selected. This leaves more than one acceptable group of four: J, L, M, and N may be selected; K, L, M, and N may be selected; and K, L, N, and Q may be selected.Choice (D): When M and Q are both selected, K must be selected (fourth condition), and hence J cannot be selected (first condition). Furthermore, N cannot be selected: if N were selected, then L would also have to be selected (third condition), and this would violate the restriction that exactly four people are to be selected. And since N cannot be selected, P must be selected (second condition). Thus when M and Q are both selected, both K and P must be selected as well, and only one group of four — K, M, P, and Q — is acceptable. (D) is therefore the correct response.'
//     },
//     {
//       id: '40',
//       question: 'On a particular Saturday, a student will perform six activities — grocery shopping, hedge trimming, jogging, kitchen cleaning, laundry, and motorbike servicing. Each activity will be performed once, one at a time. The order in which the activities are performed is subject to the following conditions:Grocery shopping has to be immediately after hedge trimming.Kitchen cleaning has to be earlier than grocery shopping.Motorbike servicing has to be earlier than laundry.Motorbike servicing has to be either immediately before or immediately after jogging. If laundry is earlier than kitchen cleaning, then hedge trimming must be :',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'This problem is concerned with determining the order in which six activities will be performed. As with many questions involving relative ordering or ranking, it is likely that you will find it useful to diagram the various relationships given in the passage.The first condition in the passage tells us that grocery shopping has to be immediately after hedge trimming, which we can abbreviate as follows:1. HGThe second condition tells us that kitchen cleaning has to be earlier than grocery shopping, which we can abbreviate as follows, where "..." is used to represent "earlier than" (which means any time before, including immediately before):2. K ... GThe third condition tells us that motorbike servicing has to be earlier than laundry, and the fourth condition tells us that motorbike servicing has to be either immediately before or immediately after jogging. These conditions can be abbreviated as follows, where the / symbol is used to represent "or":3. M ... L 4. MJ / JMNotice that the information specified in these four conditions can be collapsed into two ordering statements:I. K ... HG (first and second conditions) II. MJ / JM ... L (third and fourth conditions)Question 7 introduces the new supposition "laundry is earlier than kitchen cleaning":L ... KThis new supposition works to further collapse the ordering statements in I and II to the single statement below; that is, if L must be earlier than K, then we know that the activities must be ordered like this:MJ / JM ... L ... K ... HGSo, with the addition of the new supposition, there are exactly two possible orderings of the six activities, differing only with respect to whether motorbike servicing is immediately before or immediately after jogging:Question 7 asks what position hedge trimming must be in, given the new supposition. What we see here is that hedge trimming must be the fifth activity performed, and so answer choice (A) is correct.'
//     },
//     {
//       id: '41',
//       question: "On a particular Saturday, a student will perform six activities — grocery shopping, hedge trimming, jogging, kitchen cleaning, laundry, and motorbike servicing. Each activity will be performed once, one at a time. The order in which the activities are performed is subject to the following conditions:Grocery shopping has to be immediately after hedge trimming.Kitchen cleaning has to be earlier than grocery shopping.Motorbike servicing has to be earlier than laundry.Motorbike servicing has to be either immediately before or immediately after jogging. Which one of the following, if substituted for the condition that motorbike servicing has to be earlier than laundry, would have the same effect in determining the order of the student's activities?",
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "This question asks you to select the condition which, if substituted for the third condition in the passage (repeated below), would have the same effect as the original condition.Third condition: Motorbike servicing has to be earlier than laundry.In this case, you can deduce that the correct answer choice is (C):(C) Jogging has to be earlier than laundry.The fourth condition in the passage tells you that motorbike servicing has to be either immediately before or immediately after jogging. That is, M and J must be ordered as a block, either MJ or JM, with respect to the other four activities. Thus, if, as the original third condition states, M has to be earlier than L, then we know that J must also be earlier than L. Conversely, if, as the new condition in answer choice (C) states, J has to be earlier than L, then we know that M must also be earlier than L. In short, the third condition and answer choice (C) have exactly the same effect. Therefore, answer choice (C) is correct.Another way to approach this kind of question is to attempt to eliminate all of the incorrect answer choices. Under this approach, you want to rule out any answer choice that does either of the following:Let's see how this approach would enable us to eliminate answer choices (A), (B) and (D).Consider the condition presented in answer choice (A):(A) Laundry has to be one of the last three activities.We can first ask whether this condition would rule out outcomes that the original third condition allows. To answer this question, we must simply determine whether there is an outcome allowed by the original third condition along with the other conditions in which laundry is one of the first three activities. Here is such an outcome:Because the original third condition allows this outcome, but the condition in answer choice (A) does not, answer choice (A) cannot be correct.Consider answer choice (B):(B) Laundry has to be either immediately before or immediately after jogging.Again, we want to first determine whether this new condition would rule out outcomes that the original third condition allows. To answer this question, we must simply determine whether there is at least one outcome allowed by the original third condition along with the other conditions in which laundry is neither immediately before nor immediately after jogging. Here is one such outcome:This outcome, although allowed by the original third condition, would be ruled out by the alternative condition given in answer choice (B). Thus, answer choice (B) cannot be correct.Next consider answer choice (D):(D) Laundry has to be earlier than hedge trimming.Again, we want to first determine whether this new condition would rule out outcomes that the original third condition allows. To answer this question, we must simply determine whether there is at least one outcome allowed by the original third condition along with the other conditions in which laundry is not earlier than hedge trimming. One such outcome was given immediately above: since L is not earlier than H in this outcome, it would be ruled out by the condition in answer choice (D). So, answer choice (D) rules out an outcome that the original third condition allows, and therefore (D) cannot be the correct answer choice."
//     },
//     {
//       id: '42',
//       question: 'Four students are sitting on a bench in a classroom . Suresh is sitting leftside of Rajeev . Manoj is sitting to the right side of Rajeev . Ravi is sitting between Rajeev and Manoj .Who is sitting in the second position from left hand side in the bench ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Suresh is to the left of Rajeev. Manoj is sitting to the right of Rajeev. Ravi is sitting between Rajeev and Manoj. Hence by arranging students in the appropriate positions we will get the correct sequence.'
//     },
//     {
//       id: '43',
//       question: '',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option D'
//     },
//     {
//       id: '44',
//       question: '',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option B'
//     },
//     {
//       id: '45',
//       question: '',
//       options: [Array],
//       correctAnswer: 'a,d',
//       desc: 'Answer: Option A,D'
//     },
//     {
//       id: '46',
//       question: '',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option B'
//     },
//     {
//       id: '47',
//       question: '',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Option C'
//     },
//     {
//       id: '48',
//       question: '',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option B'
//     },
//     {
//       id: '49',
//       question: '',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option A'
//     },
//     {
//       id: '50',
//       question: '',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Option C'
//     },
//     {
//       id: '51',
//       question: '',
//       options: [Array],
//       correctAnswer: 'b,c',
//       desc: 'Answer: Option B'
//     },
//     {
//       id: '52',
//       question: '',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option D'
//     },
//     {
//       id: '53',
//       question: '',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option D'
//     },
//     {
//       id: '54',
//       question: '',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option D'
//     },
//     {
//       id: '55',
//       question: '',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option D'
//     },
//     {
//       id: '56',
//       question: 'Find out the alternative figure which contains figure (X) as its part.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '57',
//       question: 'Find out the alternative figure which contains figure (X) as its part.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: ''
//     },
//     {
//       id: '58',
//       question: 'Find out the alternative figure which contains figure (X) as its part.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '59',
//       question: 'Find out the alternative figure which contains figure (X) as its part.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: ''
//     },
//     {
//       id: '60',
//       question: 'Find out the alternative figure which contains figure (X) as its part.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '61',
//       question: 'Find out the alternative figure which contains figure (X) as its part.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: ''
//     },
//     {
//       id: '62',
//       question: '',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: A'
//     },
//     {
//       id: '63',
//       question: '',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: C'
//     },
//     {
//       id: '64',
//       question: '',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: B'
//     },
//     {
//       id: '65',
//       question: '',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: A'
//     },
//     {
//       id: '66',
//       question: 'Group the given figures into three classes using each figure only once.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'ANSWER: 1,4,7; 2,6,9; 3,5,8'
//     },
//     {
//       id: '67',
//       question: 'Group the given figures into three classes using each figure only once.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'ANSWER: 1,5 ; 2,3; 4,6'
//     },
//     {
//       id: '68',
//       question: 'Group the given figures into three classes using each figure only once.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'ANSWER: 1,4 ; 2,5 ; 3,6'
//     },
//     {
//       id: '69',
//       question: 'Group the given figures into three classes using each figure only once.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'ANSWER: C. 2,5,6; 3,8,9 ; 1,4,7'
//     },
//     {
//       id: '70',
//       question: 'Find out which of the figure (a), (b), (c), (d) can be formed from the pieces given in fig. (X).',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'ANSWER: (b)'
//     },
//     {
//       id: '71',
//       question: 'Find out which of the figure (a), (b), (c), (d) can be formed from the pieces given in fig. (X).',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'ANSWER: (b)'
//     },
//     {
//       id: '72',
//       question: 'Find out which of the figure (a), (b), (c), (d) can be formed from the pieces given in fig. (X).',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'ANSWER: (c)'
//     },
//     {
//       id: '73',
//       question: 'Choose a figure which would most closely resemble the unfolded form of Figure (B).',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'ANSWER: 2'
//     },
//     {
//       id: '74',
//       question: 'Choose a figure which would most closely resemble the unfolded form of Figure (C).',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'ANSWER: 1'
//     },
//     {
//       id: '75',
//       question: 'Choose a figure which would most closely resemble the unfolded form of Figure (C).',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'ANSWER: None of these'
//     },
//     {
//       id: '76',
//       question: 'Select the figure which satisfies the same conditions of placement of the dots as in fig. (X).',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'ANSWER: (d)'
//     },
//     {
//       id: '77',
//       question: 'Select the figure which satisfies the same conditions of placement of the dots as in fig. (X).',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'ANSWER: (b)'
//     },
//     {
//       id: '78',
//       question: 'Select the figure which satisfies the same conditions of placement of the dots as in fig. (X).',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'ANSWER: (a)'
//     },
//     {
//       id: '79',
//       question: 'A cube is painted blue on two adjacent surfaces and black on the surfaces opposite to blue surfaces and green on the remaining faces. Now the cube is cut into 216 smaller cubes of equal size.Q. How many smaller cubes will have no surface painted?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'ANSWER: 64'
//     },
//     {
//       id: '80',
//       question: 'A cube is painted blue on two adjacent surfaces and black on the surfaces opposite to blue surfaces and green on the remaining faces. Now the cube is cut into 216 smaller cubes of equal size.Q. How many smaller cubes have less than three surfaces painted?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'ANSWER: 144'
//     },
//     {
//       id: '81',
//       question: 'The figure given on the left hand side, in each problem, is folded to form a cube. Choose from amongst the alternatives (a), (b), (c), (d), and the cubes that are similar to the cube formed.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'ANSWER: (b)'
//     },
//     {
//       id: '82',
//       question: 'Which number is opposite to number 3?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'ANSWER: 1'
//     },
//     {
//       id: '83',
//       question: 'Choose the figure which is different from the rest.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'ANSWER: C'
//     },
//     {
//       id: '84',
//       question: 'Choose the figure which is different from the rest.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'ANSWER: D'
//     },
//     {
//       id: '85',
//       question: 'Choose the figure which is different from the rest.',
//       options: [Array],
//       correctAnswer: 'answer',
//       desc: 'ANSWER: C'
//     },
//     {
//       id: '86',
//       question: 'Choose the alternative which is closely resembles the water image of the given combination.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'ANSWER: C'
//     },
//     {
//       id: '87',
//       question: 'Choose the alternative which is closely resembles the water image of the given combination.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'ANSWER: C'
//     },
//     {
//       id: '88',
//       question: 'Choose the alternative which is closely resembles the water image of the given combination.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'ANSWER: A'
//     },
//     {
//       id: '89',
//       question: 'Select the alternative which represents three out of the five alternative figures which when fitted into each other would form a complete square.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'ANSWER: 125'
//     },
//     {
//       id: '90',
//       question: 'Select the alternative which represents three out of the five alternative figures which when fitted into each other would form a complete square.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'ANSWER: 125'
//     }
//   ],
//   puzzles: [
//     {
//       id: '1',
//       question: 'In a row of trees, a tree is 7th from left end and 14th from right end. How many trees are there in the row ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Total number of trees,= 7+14-1= 20'
//     },
//     {
//       id: '2',
//       question: 'Ramesh ranks 13th in the class of 33 students. There are 5 students below Suresh rankwise. How many students are there between Ramesh and Suresh ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: '123456789101112Ramesh19202526Suresh54321Required number,= 33 - (13+6)= 14.'
//     },
//     {
//       id: '3',
//       question: 'If each of the digits in the number 92581473 is arranged in ascending order, what will be the difference between the digits which are fourth from the right and third from left in the new arrangement? The ascending order of the number is 123456789.',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'The ascending order of the number is 123456789.Required difference,6-3 = 3.'
//     },
//     {
//       id: '4',
//       question: 'How many such pairs of letters are there in the word SENDING, each of which has as many letters between its two letters as there are between them in the English alphabets?',
//       options: [Array],
//       correctAnswer: 'c,d',
//       desc: 'I(N)G S(ENDI)ND(IN)G'
//     },
//     {
//       id: '5',
//       question: 'A Parking lot Contains 160 Vehicles. Each Vehicle is either a car or a truck, and each vehicle is either red or green. 70 vehicles are red, and 120 vehicles are cars. If there are 18 green trucks, how many red cars are there?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Total number of Vehicles = 160There are 70 red vehicles thus rest 90 are green vehicles,out of which 18 are green trucks then we get,Green cars = 90 - 18 = 72. Given, Number of cars = 120.Then, number of red cars,= 120 - 72 = 48 Red cars.'
//     },
//     {
//       id: '6',
//       question: 'A man is 24 years, older than his son. In two years, his age will be twice the age of his son. The present age of his son is ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Let the present age of his son be X years.So, present age of his father = X+24 (as he is 24 years older than his son)After 2 years, father's age become (X+24+2) years and Son's age will be (X+2).Now, according to question,X+24+2 = 2*(X +2)Or, X = 22 years.Son's present age = 22 years."
//     },
//     {
//       id: '7',
//       question: 'M scores more run than N but less than P. Q scores more than N but less than M. Who is the lowest scorer?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'M scores more run than N.(M > N) M scores less than P. (P >M >N) Q scores more than N but less than M. So, Sequence of scoring run is P >M>Q>N. So, N is the lowest scorer.'
//     },
//     {
//       id: '8',
//       question: 'Harish sits on the right of Satish. Satish sits between Manish and Girish. Who sits farthest to the right?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Sequence of seating from right to left is:Harish, Manish Satish and Girish.So, Girish sits farthest to right.'
//     },
//     {
//       id: '9',
//       question: 'B is twice as old as A but twice younger than F. C is half the age of A but is twice older than d. Who is the second oldest ?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Let, A = xThen, B = 2xand, F = 4xC = x/2and D = x/4Thus, The second oldest is B.'
//     },
//     {
//       id: '10',
//       question: 'Grass in lawn grows equally thick and in a uniform rate. It takes 24 days for 70 cows and 60 days for 30 cows to eat the whole of the grass. How many cows are needed to eat the grass in 96 days?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Let initially X grass was present there,and it is increasing by Y grass per day, then for the first condition We get,X+24*y = 24*70 ----(1)For the 2nd condition, we have,X+60*Y = 60*30----(2) Now, On solving equation (1) and (2), we getX = 1600 andY = 10 /3Third Condition,X+96*Y = 96 *N -----(3) [N = Number of Cows required]Putting the values of X and Y in equation (3), We getN = 20.'
//     },
//     {
//       id: '11',
//       question: 'At college, 70% of the students studied Maths, 75% studied English, 85% studied French and 80% studied German. What percentage at least must have studied all 4?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Solution is 10'
//     },
//     {
//       id: '12',
//       question: 'Every station on the railway system sells tickets to every other station. Some new stations were added. 46 sets of additional sets of tickets were required. How many new stations have been added? How many stations were there originally?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'New Stations-2Original Stations-11'
//     },
//     {
//       id: '13',
//       question: 'You have 59 cubic blocks. What is the minimum number that needs to be taken away in order to construct a solid cube with none left over?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The next cube number below 64(4 ×4 ×4) is 27(3 ×3 ×3). In order to construct a solid cube, therefore, with none left over, 59 – 27 = 32 blocks need to be taken away.'
//     },
//     {
//       id: '14',
//       question: '5 friends live in the same road A, B, C, D, E. The numbers of B, C, D when multiplied together equals 1260. The numbers B,C, D when added equal twice E’s number, and is even. A’s number is half as much again as E’s. The road numbers run from 2 to 222. What are the 5 house numbers?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'A 36 B 4 C 9 D 35 E 24'
//     },
//     {
//       id: '15',
//       question: 'How many cases do you need if you have to pack 112 pairs of shoes into cases that each hold 28 shoes?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: '112 pairs of shoes = 224 shoes.= 224 ÷ 28 = 8.'
//     },
//     {
//       id: '16',
//       question: 'On taking delivery of a consignment of eggs the market stall owner was furious to find that several were cracked. In fact, on counting them up in order to assess the damage he found that 72 were cracked, which was 12 per cent of the total consignment. How many eggs in total were in the consignment?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: '= 72 ÷ 12 × 100 = 600.'
//     },
//     {
//       id: '17',
//       question: 'Gordon is twice as old as Tony was when Gordon was as old as Tony is now. The combined age of Gordon and Tony is 112 years. How old are Gordon and Tony now?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'When Gordon was 48, Tony was 32(ie half the age Gordon is now).'
//     },
//     {
//       id: '18',
//       question: 'A factory was cutting rolls of cloth into 1 metre lengths,from a 200 metre roll. How long would it take for the machine to cut the roll if each cut took 4 secs?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: '200m would only take 199 cuts not 200199 × 4 sec = 13.27 mins.'
//     },
//     {
//       id: '19',
//       question: 'A photograph measuring 8.5 by 7.5 cm is to be enlarged. If the enlargement of the longer side is 13.6 cm,what is the length of the smaller side?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: '= (13.6 ÷ 8.5) × 7.5 = 12 cm.'
//     },
//     {
//       id: '20',
//       question: 'A bag of potatoes weighs 50 lbs divided by half of its weight. How much does the bag of potatoes weigh?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: '50÷5 = 10.'
//     },
//     {
//       id: '21',
//       question: 'A man has 53 socks in his drawer: 21 identical blue,15 identical black and 17 identical red. The lights are fused and he is completely in the dark. How many socks must he take out to make 100 per cent certain he has a pair of black socks?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'If he takes out 38 socks,although it is very unlikely,it is possible they could all be blue and red. To make 100 percent certain that he also has a pair of black socks he must take out a further two socks.'
//     },
//     {
//       id: '22',
//       question: 'Which two words are closest in meaning?conclave,medley,theme,conglomeration,dissertation,augury',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Medley,Conglomeration shares the same Meaning'
//     },
//     {
//       id: '23',
//       question: 'A number of 9 digits has the following properties:•The number comprising the leftmost two digits is divisible by 2, that comprising the leftmost three digits is divisible by 3, the leftmost four by 4, the leftmost five by 5, and so on for the nine digits of the number i.e. the number formed from the first n digits is divisible by n, 2<=n<=9.•Each digit in the number is different i.e. no digits are repeated.•The digit 0 does not occur in the numberi.e. it is comprised only of the digits 1-9 in some order.Find the number.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'One way to solve it is Trial-&-Error. You can make it bit easier as odd positions will always occupy ODD numbers and even positions will always occupy EVEN numbers. Further 5th position will contain 5 as 0 does not occur.'
//     },
//     {
//       id: '24',
//       question: 'Vipul was studying for his examinations and the lights went off. It was around 1:00 AM. He lighted two uniform candles of equal length but one thicker than the other. The thick candle is supposed to last six hours and the thin one two hours less. When he finally went to sleep, the thick candle was twice as long as the thin one.For how long did Vipul study in candle light?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Assume that the initial lenght of both the candle was L and Vipul studied for X hours.In X hours, total thick candle burnt = XL/6In X hours, total thin candle burnt = XL/4After X hours, total thick candle remaining = L - XL/6After X hours, total thin candle remaining = L - XL/4Also, it is given that the thick candle was twice as long as the thin one when he finally went to sleep.(L - XL/6) = 2(L - XL/4)(6 - X)/6 = (4 - X)/2(6 - X) = 3*(4 - X)6 - X = 12 - 3X2X = 6X = 3'
//     },
//     {
//       id: '25',
//       question: 'If you started a business in which you earned Rs.1 on the first day, Rs.3 on the second day, Rs.5 on the third day, Rs.7 on the fourth day, & so on.How much would you have earned with this business after 50 years (assuming there are exactly 365 days in every year)?',
//       options: [Array],
//       correctAnswer: 'a,b',
//       desc: 'To begin with, you want to know the total number of days: 365 x 50 = 18250.By experimentation, the following formula can be discovered, & used to determine the amount earned for any particular day: 1 + 2(x-1), with x being the number of the day. Take half of the 18250 days, & pair them up with the other half in the following way: day 1 with day 18250, day 2 with day 18249, & so on, & you will see that if you add these pairs together, they always equal Rs.36500.Multiply this number by the total number of pairs (9125), & you have the amount you would have earned in 50 years.'
//     },
//     {
//       id: '26',
//       question: 'Raj has a jewel chest containing Rings, Pins and Ear-rings. The chest contains 26 pieces. Raj has 2 1/2 times as many rings as pins, and the number of pairs of earrings is 4 less than the number of rings.How many earrings does Raj have?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Assume that there are R rings,P pins and E pair of ear-rings.It is given that, he has 2 1/2 times as many rings as pins.R = (5/2) * P or P = (2*R)/5And, the number of pairs of earringsis 4 less than the number of rings.E = R - 4 or R = E + 4Also, there are total 26 pieces.R + P + 2*E = 26R + (2*R)/5 + 2*E = 265*R + 2*R + 10*E = 1307*R + 10*E = 1307*(E + 4) + 10*E = 1307*E + 28 + 10*E = 13017*E = 102E = 6Hence, there are 6 pairs of Ear-rings i.e. total 12 Ear-rings'
//     },
//     {
//       id: '27',
//       question: 'Three friends divided some bullets equally. After all of them shot 4 bullets the total number of bullets remaining is equal to the bullets each had after division.Find the original number divided.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Assume that initial there were 3*X bullets.So they got X bullets each after division.All of them shot 4 bullets. So now they have (X - 4) bullets each.But it is given that, after they shot 4 bullets each, total number of bullets remaining is equal to the bullets each had after division i.e. X  Therefore, the equation is3 * (X - 4) = X3 * X - 12 = X2 * X = 12X = 6Therefore the total bullets before division is = 3 * X = 18'
//     },
//     {
//       id: '28',
//       question: 'A certain street has 1000 buildings. A sign-maker is contracted to number the houses from 1 to 1000. How many zeroes will he need?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Divide 1000 building numbers into groups of 100 each as follow:(1..100), (101..200), (201..300), ....... (901..1000)For the first group, sign-maker will need 11 zeroes.For group numbers 2 to 9, he will require 20 zeroes each.And for group number 10, he will require 21 zeroes.The total numbers of zeroes required are= 11 + 8*20 + 21= 11 + 160 + 21= 192'
//     },
//     {
//       id: '29',
//       question: 'A worker earns a 5% raise. A year later, the worker receives a 2.5% cut in pay, & now his salary is Rs. 22702.68. What was his salary to begin with?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Assume his salary was Rs. XHe earns 5% raise. So his salary is (105*X)/100A year later he receives 2.5% cut. So his salary is ((105*X)/100)*(97.5/100) which is Rs. 22702.68Hence, solving equation ((105*X)/100)*(97.5/100) = 22702.68X = 22176'
//     },
//     {
//       id: '30',
//       question: 'Rearrange the first four letters, in any way, of the word DECISION. Find how many words can be formed by using all the four words.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer is one'
//     },
//     {
//       id: '31',
//       question: 'In a lake, there are 10 steps labelled using alphabets from A to J. Starting from step A, every minute a frog jumps to the 4th step from where it started - that is from the step A it would go to the step E and from E it would go to the step I and from I it would go to C etc. Where would the frog be at the 60th minute if it starts at the step A ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The steps are labelled using alphabets from A to J.TO MAKE IT EASY, WE HAVE ASSIGNED NUMBERS TO THE STEPS AS FOLLOWS:Labelled with alphabets : A B C D E F G H I JLabelled with numbers : 1 2 3 4 5 6 7 8 9 10The frog takes total 60 minutes and takes 4 step length jumps every time.Thus, 1st minute : 1 + 4 = 5th step (E)2nd minute : 5 + 4 = 9th step (I)3rd minute : 9 + 4 = 3rd step (C)4th minute : 3 + 4 = 7th step (G)5th minute : 7 + 4 = 11 = 10+1 = 1st step (A)The same process is repeated 12 x 5 times.Then, the jumping positions are1 5 9 3 71 5 9 3 7 1 5 9 3 7 and so on.After 15 cycles, frog will be in the 1st position i.e., at 5th minute, 10th minute, 15minutes....60th minute frog will be in the 1st position.i.e., at 60th'
//     },
//     {
//       id: '32',
//       question: 'In a family there are several brothers and sisters. Every 2 boys have brothers as many as sisters and each girl has 2 brothers less than twice as many brothers as sisters. Now find the number of boys and girls.',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Let B be the number of brothers and S be the number of sisters in the family.Consider any two boys. They would be having (B - 2) brothers (excluding the two). But this number is equal to the number of sisters they have.Therefore,B - 2 = S or , B - S = 2 ............(1) Each girl will have (S - 1) sisters. Twice the number of sisters = 2(S - 1).Since, each girl has twice as many brothers as sisters, we have, 2(S-1)-2 = B2S - 4 = B ........... (2)Substituting, eqn (2) in Eqn (1), we get2S - 4 - S = 2S = 6On substituting S = 6 in eqn (1) , we get B - 6 = 2B = 8.'
//     },
//     {
//       id: '33',
//       question: 'In a caravan, in addition to 50 hens, there are 45 goats and 8 camels with some keepers. If the total number of feet be 224 more than the number of heads in the caravan, find the number of keepers.',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Number of Keepers is 15'
//     },
//     {
//       id: '34',
//       question: 'Which letter is exactly midway between H and S in the given alphabet?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer is None'
//     },
//     {
//       id: '35',
//       question: 'Shan is 55 years old, Sthian is 5 years junior to Shan and 6 years senior to Balan. The youngest brother of Balan is Devan and he is 7 years junior to him. So what is the age difference between Devan and Shan ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Age of Shan = 55 years Age of Sathian = 55-5 = 50 years Age of Balan = 50-6 = 44 years Age of Deven = 44-7 = 37 years Thus, difference between Devan and Shan,= 55 -37= 18.'
//     },
//     {
//       id: '36',
//       question: 'Six persons A, B, C, D, E and Fare sitting in a circle. B is between F and C; A is between E and D; F is to the left of D. Who is between A and F?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer is D'
//     },
//     {
//       id: '37',
//       question: "Rohit was walking on the street, one boy requested him to donate for cancer patients welfare fund. He gave him a rupee more than half the money he had. He walked a few more steps. Then came a girl who requested him to donate for poor people's fund for which he gave two rupees more than half the money he had then. After that, again a boy approached him for an orphanage fund. He gave three rupees more than half of what he had. At last he had just one rupee remaining in his hand. How much amount did Ram have in his pocket when he started?",
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Let X be the rupees he initially had.He gave for the cancer fund one rupee more than half of what he had.i.e.,[1 +(X/2)].Remaining money = X-(1+X/2) = [(X/2) - 1.he gave for poor people's, rupee 2 more than half what he remain with,= [2+{1/2*(X/2-1)}]= [2+{(X-2)/4}]= (6+X)/4Now, remaining money = ((X/2)-1) - ((6+X)/4)= (X-10)/4.Again he gave 3 rupees more than half of what he had for orphanage,[3+(1/2*((X-10)/4))] = 3+[(X-10)/8]= (14+X)/8now left money,[{(X-10)/4]-[(14+X)/8]}= [(2X-X-20-14)/8] = (X-34)/8As given, finally he had one rupee remaining so (X-34)/8 = 1So,X-34 = 8X = 8+34 = 42Hence, Rohit had Rs. 42 initially in his pocket."
//     },
//     {
//       id: '38',
//       question: 'If Football is called Cricket, Cricket is called Basketball, Basketball is called Badminton, Badminton is called Volleyball, Volleyball is called Hockey and Hockey is called Golf, then which of the following games is not played using a ball?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Badminton is played without any ball and in the question Badminton is called Volleyball.'
//     },
//     {
//       id: '39',
//       question: 'Each vowel of the word GLADIOLUS is substituted with the next letter of the English alphabetical series and each consonant is substituted with the letters preceding it. How many vowels will be present in the new arrangement?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'G → F L → KA → BD → CI → JO → PL → KU → VS → RThus,GLADIOLUS = FKBCJPKVR.'
//     },
//     {
//       id: '40',
//       question: `A lad was asked his age by his friend . The lad said, "The number you get when you subtract 25 times my age from twice the square of my age will be thrice your age". If the friend's age is 14, then the age of the lad is :`,
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '41',
//       question: 'A family went for a vacation. Unfortunately, it rained daily for 13 days when they were there. But whenever it rained in the mornings, they had clear afternoons and vice versa. In all, they enjoyed 11 mornings and 12 afternoons. How many days in all did they stay there?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '42',
//       question: 'If we substitute 1 to 24 indicating hours on the dial of a clock day and night by the letters of the English alphabet their order starting withC which letter will represent 16 hours?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'The alphabet starting with C, so1st Hour = C2nd Hour = D3rd Hour = E, and So on. Then we get,16th Hour = R.16 hour is represented by letter R.'
//     },
//     {
//       id: '43',
//       question: 'A man used to rob the computers and He is active only for quarter of a year. He robs three computers Vayu, Tejas and Agni. January was unfortunate month for Tejas. Vayu was stolen in March. Now he used three tools Pliers, Screwdriver and Hook to rob all the parts from the computer and Make His own computer. He Rob Monitor from Tejas but Does not use hook. He robs Printer from Vayu and Use Pliers. And from Third Computer he robs Keyboard. i) In which month was Agni stolen? ii) Which tool was used for Tejas?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'January was unfortunate for Tejas, means Tejas was stolen in January.Vayu was stolen in March. So, Agni was stolen in February.He robs Printer from Vayu, uses Pliers. Hook was not used for Tejas for Screwdriver was used to rob Tejas.'
//     },
//     {
//       id: '44',
//       question: 'SUNDAYMONDAYTUESDAYWEDNESDAYTHURSDAYFRIDAYSATURDAYWhat day comes three days after the day which comes two days after the day which comes immediately after the day which comes two days after Monday?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'The answer is Tuesday'
//     },
//     {
//       id: '45',
//       question: 'You have 59 cubic blocks. What is the minimum number that needs to be taken away in order to construct a solid cube with none left over?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'The next cube number below 64(4 ×4 ×4) is 27(3 ×3 ×3).In order to construct a solid cube, therefore, with none left over,59 – 27 = 32 blocks need to be taken away.'
//     },
//     {
//       id: '46',
//       question: 'In a party of 35 people there are twice as many women as children and twice as many children as men. How many of each are there?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'IF x = the number of men,then x + 2x + 4x = 35.Therefore 7x = 35.So X = 5.'
//     },
//     {
//       id: '47',
//       question: 'A blind man had only black or white socks. In his drawer he had 4 socks. He went to the drawer and took out 2 socks. The chances that he had a pair of white socks was 1/2. What were the chances that he had drawn out a pair of black socks?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer is 0'
//     },
//     {
//       id: '48',
//       question: 'A photograph measuring 8.5 by 7.5 cm is to be enlarged. If the enlargement of the longer side is 13.6 cm, what is the length of the smaller side?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: '= (13.6 ÷ 8.5) × 7.5= 12 cm.'
//     },
//     {
//       id: '49',
//       question: 'A driving school claims an average test pass rate of 76.8 percent. What is the least number of pupils required to achieve this result?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: '96 passes out of 125 give an average of 76.8%.'
//     },
//     {
//       id: '50',
//       question: 'A farmer told his labourer to pick 896,809 apples and pack them into as few boxes as possible, each having the same number of apples. How many boxes did he use?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: '= 947 × 947 apples.= 896,809.'
//     },
//     {
//       id: '51',
//       question: 'In a school, there were five teachers.A and B were teaching Hindi and English.C and D were teaching English and Geography.D and A were teaching Mathematics and HindiE and B were teaching History and French.More than two teachers were teaching which subject ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2 Explanation:Above information can be analysed as below:Hence, Three teachers were teaching Hindi -- A, B and C.'
//     },
//     {
//       id: '52',
//       question: 'In a school, there were five teachers.A and B were teaching Hindi and English.C and D were teaching English and Geography.D and A were teaching Mathematics and HindiE and B were teaching History and French.D, B and A were teaching which of the following subjects ?',
//       options: [Array],
//       correctAnswer: 'b,c',
//       desc: 'Answer : Option 2 Explanation:Above information can be analysed as below:Hence, D, B and A were teaching Hindi'
//     },
//     {
//       id: '53',
//       question: 'A farmer told his labourer to pick 896,809 apples and pack them into as few boxes as possible, each having the same number of apples. How many boxes did he use?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Ans: 947 X 947 Apples       = 896,809 Apples'
//     },
//     {
//       id: '54',
//       question: 'A man has 53 socks in his drawer: 21 identical blue, 15 identical black and 17 identical red. The lights are fused and he is completely in the dark. How many socks must he take out to make 100 per cent certain he has a pair of black socks?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Option 3, (40 socks)Explanation.If he takes out 38 socks, although it is very unlikely, it is possible they could all be blue and red. To make 100 percent certain that he also has a pair of black socks he must take out a further two socks.'
//     },
//     {
//       id: '55',
//       question: 'In a party of 35 people there are twice as many women as children and twice as many children as men. How many of each are there?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: 5 men, 10 children and 20 women.Explanation.IF x = the number of men,then x + 2x + 4x = 35.Therefore 7x = 35.So X = 5.'
//     },
//     {
//       id: '56',
//       question: 'A card player holds 13 cards of four suits, of which seven are black and six are red. There are twice as many hearts as clubs and twice as many diamonds as hearts. How many spades does he hold?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: 6.Explanation.The player holds 1 club, 2 hearts and 4 diamonds.As he holds 13 cards (or seven black cards), it follows that there must be 6 spades.'
//     },
//     {
//       id: '57',
//       question: 'A B C D E F G HWhat letter comes two to the right of the letter which is immediately to the left of the letter that comes three to the right of the letter that comes midway between the letter two to the left of the letter C and the letter immediately to the right of the letter F?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2'
//     },
//     {
//       id: '58',
//       question: 'A train moving at 49 mph meets and is passed by a train moving at 63 mph. A passenger in the first train noted that the second train took AS seconds to pass him. How long is the second train?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '59',
//       question: 'You have 59 cubic blocks. What is the minimum number that needs to be taken away in order to construct a solid cube with none left over?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'The next cube number below 64(4 ×4 ×4) is 27(3 ×3 ×3).In order to construct a solid cube, therefore, with none left over,59 – 27 = 32 blocks need to be taken away'
//     },
//     {
//       id: '60',
//       question: 'A blind man had only black or white socks. In his drawer he had 4 socks. He went to the drawer and took out 2 socks. The chances that he had a pair of white socks was 1/2. What were the chances that he had drawn out a pair of black socks?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1'
//     },
//     {
//       id: '61',
//       question: 'A driving school claims an average test pass rate of 76.8 percent. What is the least number of pupils required to achieve this result?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2(125).Explanation:96 passes out of 125 give an average of 76.8%.'
//     },
//     {
//       id: '62',
//       question: 'Barbara visited her High School friend, Natasha after their 25th school reunion.“What a nice pair of children you have, are they twins?“, Barbara asked.“No my sister is older than I”, said Natasha’s son Philip.“The square of my age plus the cube of her age is 7148” 62 said Philip is missing.“The square of my age plus the cube of his age is 5274”, said Matilda. How old were they?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer : Option 4'
//     },
//     {
//       id: '63',
//       question: 'A bag contains 64 balls of eight different colours. There are eight of each colour (including red). What is the least number you would have to pick, without looking, to be sure of selecting 3 red balls?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer:Option 3 (59)Explanation.The first 56 balls could be of all colours except red. This would leave 8 balls, all of which are red, so any three chosen would be red.'
//     },
//     {
//       id: '64',
//       question: 'Insert the missing number?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Clearly, (1st row)x(2nd row)x(3rd row) = 4th row.In the first column, 6x5x4 = 120.In the second column, 6x7x3 = 126.Let the missing number in the third column be x.Then, 8x5xX = 320.40X =320X = 8.'
//     },
//     {
//       id: '65',
//       question: 'Insert the missing number?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'In the first column, 2x1+1 = 3.In the second column, 14 x 7 + 7 = 105.Let the missing number in the third column be x.Then (x+1)9=117 or 9x=108. Therefore x=12.'
//     },
//     {
//       id: '66',
//       question: 'Insert the missing character?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1ExplanationThe letters in the second and third rows are five steps ahead of those in the first and second rows respectively. So, the missing letter will be five steps ahead of F, which is K'
//     },
//     {
//       id: '67',
//       question: 'Insert the missing number?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2(3).Explanation:In the first column, 12×6 = 72; 18÷6 = 3.In the third column, 16×8 = 128; 32÷8 = 4.In the second column, 14×8 = 112.So, the missing number = 24÷8 = 3.'
//     },
//     {
//       id: '68',
//       question: 'Insert the missing number?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2(3).Explanation:In the first column, 12×6 = 72; 18÷6 = 3.In the third column, 16×8 = 128; 32÷8 = 4.In the second column, 14×8 = 112.So, the missing number = 24÷8 = 3.'
//     },
//     {
//       id: '69',
//       question: 'What number should replace the question mark?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: 0ption 1Explanation:Looking at lines of numbers from the top : 9×8 = 72; 72×8 = 576; 576×8 = 4608;'
//     },
//     {
//       id: '70',
//       question: 'What number shoud replace the question mark ?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4Explanation:It is the sum of the two digits(9 + 8) in the quadrant opposite'
//     },
//     {
//       id: '71',
//       question: 'What number should replace the question mark?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Explanation:91 ÷ 13 = 7'
//     },
//     {
//       id: '72',
//       question: 'What number should replace the question mark?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Explanation:( 73 + 25) ÷ 2 = 49.'
//     },
//     {
//       id: '73',
//       question: 'How many lines appear below?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer: Option 3'
//     },
//     {
//       id: '74',
//       question: 'Which number is the odd one out?84129, 32418, 47632, 36119, 67626, 72927',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:All the others are three digit numbers followed by their square root, eg 361 followed by its square root, 19.'
//     },
//     {
//       id: '75',
//       question: 'What is the missing letter?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:Start at A and work clockwise to alternate segments in the sequence ABcDefGhijKlmnoPqrstuV.'
//     },
//     {
//       id: '76',
//       question: 'A Z B Y D W G T ? ?Which two letters come next?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1Explanation.There are two alternate sequence. Starting at A, ABcDefGhijK; starting at Z, ZYxWvuTsrqP'
//     },
//     {
//       id: '77',
//       question: 'A B C D E F G HWhat letter is two letters to the left of the letter immediately to the right of the letter three letters to the right of the letter A?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4'
//     },
//     {
//       id: '78',
//       question: 'Which logically is the odd one out?dosage, before, volume, simple, curate',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4Explanation:The rest have alternate consonant/vowel arrangement.'
//     },
//     {
//       id: '79',
//       question: 'In a game of whist, GEORGE partnered MARY, while TED had to select a partner from ANN, EDNA, JOAN or ANGELA. Whom did he choose?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1Explanation:Give each letter a number according to its position in the alphabet.TED = 20 + 5 + 4(29)ANN = 1 + 14 + 14(29)(George and Mary each add to 57).'
//     },
//     {
//       id: '80',
//       question: 'What letter is two letters above the letter two letters to the left of the letter immediately above the letter three letters to the right of the letter Q?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1'
//     },
//     {
//       id: '81',
//       question: 'What comes next in this series?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4Explanation:There are three separate series.Starting with the first letter and taking every third letter there after – ITALY.Starting with the second letter and taking every third letter there after – SPAIN, from the third letter – INDIA.'
//     },
//     {
//       id: '82',
//       question: 'Which is the odd one out?heptagon, triangle, hexagon, cube, pentagon',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4Explanation:It is a three dimensional figure. The rest are all two dimensional figures.'
//     },
//     {
//       id: '83',
//       question: 'Which is the odd one out?congregation, dispersion, compilation, convocation, aggregation',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:It means scattering, the rest are gathering.'
//     },
//     {
//       id: '84',
//       question: 'Which is the odd one out?femur, mandible, fibula, tibia, patella',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:It is the jaw bone, the rest are bones in the leg.'
//     },
//     {
//       id: '85',
//       question: 'Which is the odd one out?femur, mandible, fibula, tibia, patella',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:It is the jaw bone, the rest are bones in the leg.'
//     },
//     {
//       id: '86',
//       question: 'Which word in brackets is most opposite to the word in capitals?PROSCRIBE (allow, stifle, promote, verify, indict)',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4'
//     },
//     {
//       id: '87',
//       question: 'Which word in brackets is most opposite to the word in capitals?PROSCRIBE (allow, stifle, promote, verify, indict)',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4'
//     },
//     {
//       id: '88',
//       question: 'What number should replace the question mark?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1Explanation:Top left a third of bottom right, bottom rights is three less than top right and top right is half of bottom left.​'
//     },
//     {
//       id: '89',
//       question: 'What number is logically missing from the sequence below?348269, 284315, ****, 8438, 4811, 842, 86',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:Each number is the sum of the last two digits of the previous number, preceded by the remaining numbers in reverse.'
//     },
//     {
//       id: '90',
//       question: 'Which number is the odd one out?9678 4572 5261 5133 3527 6895 7768',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:In the others the sum of the first two numbers is equal to the sum of the second two numbers for example 5 + 2 = 6 + 1'
//     },
//     {
//       id: '91',
//       question: 'What number should replace the question mark?10, 10,9, 7, 7, ?, 4, 4, 3, 1',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:The sequence progresses – 0, –1, –2 repeated.'
//     },
//     {
//       id: '92',
//       question: 'Simplify: + 6 – 22 × 3 – 8',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:= + 6 – ( 22 × 3) – 8= + 6 – 66 – 8 = – 68.'
//     },
//     {
//       id: '93',
//       question: 'Complete this sequence?2 3 4 9 16 81 256',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer: Option 1Explanation:×1, ×2, ×3, ×4'
//     },
//     {
//       id: '94',
//       question: 'What number should replace the question mark?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer Option 1Explanation:Add five starightdown;Add ten sideways;Add fifteen diagonally.'
//     },
//     {
//       id: '95',
//       question: 'What number should replace the question mark?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:The numbers in each line contain the digits 1 – 9 once each only.'
//     },
//     {
//       id: '96',
//       question: 'What is X?',
//       options: [Array],
//       correctAnswer: 'b,c',
//       desc: 'Answer: Option 3Explanation:Spaced correctly, the series becomes 13 15 17 19 2(1)'
//     },
//     {
//       id: '97',
//       question: 'Which number is the odd one out?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:The rest are in anagram pairs, i.e.8674/6847, 2493/3429, 1376/7163, 2197/1927'
//     },
//     {
//       id: '98',
//       question: 'What two terms complete this series?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option 4Explanation:There are two separate series. The letters advance missing first two (A to D). then three (D to H) and so on. After M there must be five missing letters, bringing us to S. The numbers advance in the same way.'
//     },
//     {
//       id: '99',
//       question: 'What number should replace the question mark?1, 2, 6, 12, 36, 72, ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explanation:×2, ×3 repeated.'
//     },
//     {
//       id: '100',
//       question: 'What number should replace the question mark?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer: Option 2Explantion:(6×11) + 24 = 90'
//     }
//   ],
//   'c-programming': [
//     {
//       id: '1',
//       question: 'What is the output of the program given below ?#includeint main()\n' +
//         '{\n' +
//         '    enum status { pass, fail, atkt};\n' +
//         '    enum status stud1, stud2, stud3;\n' +
//         '    stud1 = pass;\n' +
//         '    stud2 = atkt;\n' +
//         '    stud3 = fail;\n' +
//         '    printf("%d, %d, %d\\n", stud1, stud2, stud3);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer:Option CExplanation :enum takes the format like {0,1,2..) so pass=0, fail=1, atkt=2stud1 = pass (value is 0)stud2 = atkt (value is 2)stud3 = fail (value is 1)Hence it prints 0, 2, 1'
//     },
//     {
//       id: '2',
//       question: 'What will be the output of the program in 16 bit platform (Turbo C under DOS)?#includeint main()\n' +
//         '{\n' +
//         '    externint i;\n' +
//         '    i = 20;\n' +
//         '    printf("%d\\n", sizeof(i));\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "Answer:Option DExplanation :Linker Error : Undefined symbol 'i'The statement extern int i specifies to the compiler that the memory for 'i' is allocated in some other program and that address will be given to the current program at the time of linking. But linker finds that no other variable of name 'i' is available in any other program with memory space allocated for it. Hence a linker error has occurred."
//     },
//     {
//       id: '3',
//       question: 'Which of the following statements should be used to obtain a remainder after dividing 3.14 by 2.1 ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '4',
//       question: 'What are the types of linkages?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer:Option CExplanation :External Linkage-> means global, non-static variables and functions.Internal Linkage-> means static variables and functions with file scope.None Linkage-> means Local variables.'
//     },
//     {
//       id: '5',
//       question: 'Which of the following special symbol allowed in a variable name?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer:Option DExplanation :Variable names in C are made up of letters (upper and lower case) and digits. The underscore character ("_") is also permitted. Names must not begin with a digit.Examples of valid (but not very descriptive) C variable names:=> foo=> Bar=> BAZ=> foo_bar=> _foo42=> _=> QuUx'
//     },
//     {
//       id: '6',
//       question: 'Which of the following is not user defined data type?1 :struct book\n' +
//         '{\n' +
//         '    char name[10];\n' +
//         '    float price;\n' +
//         '    int pages;\n' +
//         '};2 :longint l = 2.35;3 :enum day {Sun, Mon, Tue, Wed};',
//       options: [Array],
//       correctAnswer: 'answer',
//       desc: 'Answer:Option BExplanation :C data types classification are    Primary data types       1. int       2.char       3. float       4. double       5.void    Secondary data types (or) User-defined data type       1. Array       2. Pointer       3. Structure       4. Union       5. EnumSo, clearly long int l = 2.35; is not User-defined data type.(i.e.long int l = 2.35; is the answer.)'
//     },
//     {
//       id: '7',
//       question: 'What is the output of the program?#includeint main()\n' +
//         '{\n' +
//         '    int x = 10, y = 20, z = 5, i;\n' +
//         '    i = x < y < z;\n' +
//         '    printf("%d\\n", i);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer:Option BExplanation :Since x < y turns to be TRUE it is replaced by 1. Then 1 < z is compared and to be TRUE. The 1 is assigned to i.'
//     },
//     {
//       id: '8',
//       question: 'What is the output of the program?#includeint main()\n' +
//         '{\n' +
//         '    externint fun(float);\n' +
//         '    int a;\n' +
//         '    a = fun(3.14);\n' +
//         '    printf("%d\\n", a);\n' +
//         '    return0;\n' +
//         '}\n' +
//         'int fun(int aa)\n' +
//         '{\n' +
//         '    return (int)++aa;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer:Option DExplanation :2 Errors1. Type mismatch in redeclaration of fun2. Type mismatch in parameter aa'
//     },
//     {
//       id: '9',
//       question: 'What is the output of the program?#includeint main(){    int a[5] = {2, 3};    printf("%d, %d, %d\\n", a[2], a[3], a[4]);    return 0;}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer: Option DExplanation :When an automatic array is partially initialized, the remaining elements are initialized to 0.'
//     },
//     {
//       id: '10',
//       question: 'In the following program how long will the for loop get executed?#includeint main(){    int i=5;    for(;scanf("%s", &i); printf("%d\\n", i));    return 0;}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: "Answer:Option DExplanation :During the for loop execution scanf() ask input and then printf() prints that given input. This process will be continued repeatedly because, scanf() returns the number of input given, the condition is always true(user gives a input means it reurns '1').Hence this for loop would get executed infinite times."
//     },
//     {
//       id: '11',
//       question: 'What will be output of the following? #include<stdio.h>int main()\n' +
//         '{\n' +
//         '    float a=0.7;\n' +
//         '    if(a < 0.7)\n' +
//         '        printf("Cn");\n' +
//         '    else\n' +
//         '        printf("C++n");\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "Answer : Option AExplanation : if(a < 0.7) here a is a float variable and 0.7 is a double constant. The float variable a is less than double constant 0.7. Hence the if condition is satisfied and it prints 'C' Output:0.7000000000 0.6999999881"
//     },
//     {
//       id: '12',
//       question: 'A float occupies 4 bytes. if the hexadecimal equivalent of each of these bytes is A,B,C and D, then when this float is stored in memory, these bytes get stored in the order',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer : Option B'
//     },
//     {
//       id: '13',
//       question: 'We want to round off x, a float to an int value. The correct way to do so would be',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer : Option A'
//     },
//     {
//       id: '14',
//       question: 'What will be output of the program ? #include<stdio.h>#include<math.h>int main()\n' +
//         '{\n' +
//         '    printf("%d, %d, %dn", sizeof(3.14f), sizeof(3.14), sizeof(3.14l));\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Answer : Option CExplanation : sizeof(3.14f) here '3.14f' specifies the float data type. Hence size of float is 4 bytes.sizeof(3.14) here '3.14' specifies the double data type. Hence size of float is 8 bytes.sizeof(3.14l) here '3.14l' specifies the long double data type. Hence size of float is 10 bytes.Note: If you run the above program in Linux platform (GCC Compiler) it will give 4, 8, 12 as output. If you run in Windows platform (TurboC Compiler) it will give 4, 8, 10 as output. Because, C is a machine dependent language."
//     },
//     {
//       id: '15',
//       question: 'By default any real number is treated as :',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer : Option B'
//     },
//     {
//       id: '16',
//       question: 'What will be output of the following ? #include<stdio.h>#include<math.h>int main()\n' +
//         '{\n' +
//         '    printf("%fn", sqrt(36.0));\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer : Option CExplanation :printf("%fn", sqrt(36.0)); It prints the square root of 36 in the float format(i.e 6.000000).Declaration Syntax: double sqrt(double x) calculates and return the positive square root of the given number.'
//     },
//     {
//       id: '17',
//       question: 'Binary equivalent of 5.375 is',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer : Option B'
//     },
//     {
//       id: '18',
//       question: 'Which error you are likely to get when you run the following program?    #include<stdio.h>    main()    {       struct emp       {         char name[20];         float sal;       }       struct emp e[10];       int i;       for(i=0;i<=9;i++)       scanf("%s, %f",e[i].name,&e[i].sal);       return 0;    }',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer : Option B'
//     },
//     {
//       id: '19',
//       question: 'If the binary equivalent of 5.375 in normalised form is 0100 0000 1010 1100 0000 0000 0000 0000, what would be the output of the following program?    #include<stdio.h>    int main()    {        float a =5.375;        char *p;        int i;        p = (char*)&a;        for(i=0;i<=3;i++)             printf("%02x", (unsigned char)p[i]);        return 0;    }',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer : Option C'
//     },
//     {
//       id: '20',
//       question: 'What will be the output of the following program :#include<stdio.h>\n' +
//         'main()\n' +
//         '{\n' +
//         '\tint a=555,b=*ptr,*ptr=&a;\n' +
//         '        printf("%d %d %d",++a,--b,*ptr++);\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer : Option A'
//     },
//     {
//       id: '21',
//       question: 'What will be the output of the following program :#include<stdio.h>void main()\n' +
//         '{\n' +
//         '\tfloat val=5.75;\n' +
//         '\t  int *ptr=&val;\n' +
//         '\t  printf("%.2f %.2f",*(float *)ptr,val);\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer : Option B'
//     },
//     {
//       id: '22',
//       question: 'What will be the output of the following program :#include<stdio.h>\n' +
//         'main()\n' +
//         '{\n' +
//         '\tint a=5u,*b,**c,***d,****e;\n' +
//         '\t  b=&a;\n' +
//         '\t  c=&b;\n' +
//         '\t  d=&c;\n' +
//         '\t  e=&d;\n' +
//         '\t  printf("%u %u %u %u",*b-5,**c-11,***d-6,65535+****e);\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer : Option B'
//     },
//     {
//       id: '23',
//       question: 'What will be the output of the following program :#include<stdio.h>void main()\n' +
//         '{\n' +
//         '\tint (*a)[5];\n' +
//         '\tprintf("%d %d",sizeof(*a),sizeof(a));\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer : Option D'
//     },
//     {
//       id: '24',
//       question: 'What will be output of following program? #include<stdio.h>#include<string.h>int main()\n' +
//         '{\n' +
//         '    int register a;\n' +
//         '    scanf("%d",&a);  // say a = 10\n' +
//         '    printf("%d",a);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer : Option DExplanation :Register data type stores in CPU. So it has not any memory address. Hence we cannot write &a.'
//     },
//     {
//       id: '25',
//       question: 'What will be the output of the following program :#include<stdio.h>\n' +
//         'main()\n' +
//         '{\n' +
//         '\tint val=1234;\n' +
//         '\tint* ptr=&val;\n' +
//         '\tprintf("%d %d",val,*ptr++);\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer : Option A'
//     },
//     {
//       id: '26',
//       question: 'In which header file is the NULL macro defined?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer : Option CExplanation :The macro "NULL" is defined in locale.h, stddef.h, stdio.h, stdlib.h, string.h, time.h, and wchar.h.'
//     },
//     {
//       id: '27',
//       question: 'What will be output of following program? #include<stdio.h>#include<string.h>int main()\n' +
//         '{\n' +
//         '    int a,b,c,d;\n' +
//         '    char *p = (char*)0;\n' +
//         '    int *q = (int*q)0;\n' +
//         '    float *r = (float*)0;\n' +
//         '    double *s = 0;\n' +
//         '    a = ( int)(p+1);\n' +
//         '    b = ( int)(q+1);\n' +
//         '    c = ( int)(r+1);\n' +
//         '    d = ( int)(s+1);\n' +
//         '    printf("%d %d %d %d",a,b,c,d);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer : Option BExplanation :Address + 1 = next address'
//     },
//     {
//       id: '28',
//       question: 'What will be output of following program? #include<stdio.h>#include<string.h>int main()\n' +
//         '{\n' +
//         '    int a,b,c,d;\n' +
//         '    char *p = (char*)0;\n' +
//         '    int *q = (int*q)0;\n' +
//         '    float *r = (float*)0;\n' +
//         '    double *s = 0;\n' +
//         '    a = ( int)(p+1);\n' +
//         '    b = ( int)(q+1);\n' +
//         '    c = ( int)(r+1);\n' +
//         '    d = ( int)(s+1);\n' +
//         '    printf("%d %d %d %d",a,b,c,d);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer : Option BExplanation :Address + 1 = next address'
//     },
//     {
//       id: '29',
//       question: 'What will be the output of the following program :#include<stdio.h>\n' +
//         'main()\n' +
//         '{\n' +
//         '\tint val=1234;\n' +
//         '\tint* ptr=&val;\n' +
//         '\tprintf("%d %d",++val,*ptr);\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer : Option D'
//     },
//     {
//       id: '30',
//       question: 'What will be the output of the following program :#include<stdio.h>\n' +
//         'main()\n' +
//         '{\n' +
//         '\tint a=555,*ptr=&a,b=*ptr=777;\n' +
//         '\tprintf("%d %d",--*&b,*(int *)&b);\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer : Option B'
//     },
//     {
//       id: '31',
//       question: 'How will you free the allocated memory ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer:Option B'
//     },
//     {
//       id: '32',
//       question: 'What is the similarity between a structure, union and enumeration?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer:Option C'
//     },
//     {
//       id: '33',
//       question: 'Point out the error in the program?struct emp\n' +
//         '{\n' +
//         '    int ecode;\n' +
//         '    struct emp *e;\n' +
//         '};',
//       options: [Array],
//       correctAnswer: 'a,c',
//       desc: ''
//     },
//     {
//       id: '34',
//       question: 'Point out the error in the program?typedefstruct data mystruct;\n' +
//         'struct data\n' +
//         '{\n' +
//         '    int x;\n' +
//         '    mystruct *b;\n' +
//         '};',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '35',
//       question: 'Point out the error in the program?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    struct a\n' +
//         '    {\n' +
//         '        float category:5;\n' +
//         '        char scheme:4;\n' +
//         '    };\n' +
//         '    printf("size=%d", sizeof(struct a));\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '36',
//       question: 'Point out the error in the program?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    struct emp\n' +
//         '    {\n' +
//         '        char name[20];\n' +
//         '        float sal;\n' +
//         '    };\n' +
//         '    struct emp e[10];\n' +
//         '    int i;\n' +
//         '    for(i=0; i<=9; i++)\n' +
//         '        scanf("%s %f", e[i].name, &e[i].sal);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '37',
//       question: 'Point out the error in the program?#include < stdio.h >#include < string.h >void modify(struct emp*);\n' +
//         'struct emp\n' +
//         '{\n' +
//         '    char name[20];\n' +
//         '    int age;\n' +
//         '};\n' +
//         'int main()\n' +
//         '{\n' +
//         '    struct emp e = {"Sanjay", 35};\n' +
//         '    modify(&e);\n' +
//         '    printf("%s %d", e.name, e.age);\n' +
//         '    return0;\n' +
//         '}\n' +
//         'void modify(struct emp *p)\n' +
//         '{\n' +
//         '     p ->age=p->age+2;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '38',
//       question: 'Point out the error in the program in 16-bit platform?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    struct bits\n' +
//         '    {\n' +
//         '        int i:40;\n' +
//         '    }bit;\n' +
//         '\n' +
//         '    printf("%d\\n", sizeof(bit));\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '39',
//       question: 'Point out the error in the program?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    struct emp\n' +
//         '    {\n' +
//         '        char n[20];\n' +
//         '        int age;\n' +
//         '    };\n' +
//         '    struct emp e1 = {"Dravid", 23};\n' +
//         '    struct emp e2 = e1;\n' +
//         '    if(e1 == e2)\n' +
//         '        printf("The structure are equal");\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'answer',
//       desc: ''
//     },
//     {
//       id: '40',
//       question: 'Point out the error in the program?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    struct emp\n' +
//         '    {\n' +
//         '        char n[20];\n' +
//         '        int age;\n' +
//         '    };\n' +
//         '    struct emp e1 = {"Dravid", 23};\n' +
//         '    struct emp e2 = e1;\n' +
//         '    if(e1 == e2)\n' +
//         '        printf("The structure are equal");\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'answer',
//       desc: ''
//     },
//     {
//       id: '41',
//       question: 'Point out the error in the program?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    struct bits\n' +
//         '    {\n' +
//         '        float f:2;\n' +
//         '    }bit;\n' +
//         '\n' +
//         '    printf("%d\\n", sizeof(bit));\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'answer',
//       desc: ''
//     },
//     {
//       id: '42',
//       question: 'Point out the error in the program?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    struct bits\n' +
//         '    {\n' +
//         '        float f:2;\n' +
//         '    }bit;\n' +
//         '\n' +
//         '    printf("%d\\n", sizeof(bit));\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '43',
//       question: 'Point out the error in the program?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    struct emp\n' +
//         '    {\n' +
//         '        char name[25];\n' +
//         '        int age;\n' +
//         '        float bs;\n' +
//         '    };\n' +
//         '    struct emp e;\n' +
//         '    e.name = "Suresh";\n' +
//         '    e.age = 25;\n' +
//         '    printf("%s %d\\n", e.name, e.age);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '44',
//       question: 'Assunming, integer is 2 byte, What will be the output of the program?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    printf("%x\\n", -1>>1);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '45',
//       question: 'If an unsigned int is 2 bytes wide then, What will be the output of the program ?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    unsignedint m = 32;\n' +
//         '    printf("%x\\n", ~m);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'answer',
//       desc: ''
//     },
//     {
//       id: '46',
//       question: 'Assuming a integer 2-bytes, What will be the output of the program?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    printf("%x\\n", -1<<3);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b,d',
//       desc: ''
//     },
//     {
//       id: '47',
//       question: 'If an unsigned int is 2 bytes wide then, What will be the output of the program ?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    unsignedint a=0xffff;\n' +
//         '    ~a;\n' +
//         '    printf("%x\\n", a);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '48',
//       question: 'What will be the output of the program?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    unsignedchar i = 0x80;\n' +
//         '    printf("%d\\n", i<<1);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '49',
//       question: 'What will be the output of the program?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    printf("%d >> %d %d >> %d\\n", 4 >> 1, 8 >> 1);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '50',
//       question: 'What will be the output of the program?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    char c=48;\n' +
//         '    int i, mask=01;\n' +
//         '    for(i=1; i<=5; i++)\n' +
//         '    {\n' +
//         '        printf("%c", c|mask);\n' +
//         '        mask = mask<<1;\n' +
//         '    }\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '51',
//       question: 'What will be the output of the program?# define P printf("%d\\n", -1^~0);#define M(P) int main()\\\n' +
//         '             {\\\n' +
//         '                P\\\n' +
//         '                return0;\\\n' +
//         '             }\n' +
//         'M(P)',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '52',
//       question: 'What will be the output of the program ?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    int i=32, j=0x20, k, l, m;\n' +
//         '    k=i|j;\n' +
//         '    l=i&j;\n' +
//         '    m=k^l;\n' +
//         '    printf("%d, %d, %d, %d, %d\\n", i, j, k, l, m);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '53',
//       question: 'What will be the output of the program?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    printf("%d %d\\n", 32<<1, 32<<0);\n' +
//         '    printf("%d %d\\n", 32<<-1, 32<<-0);\n' +
//         '    printf("%d %d\\n", 32>>1, 32>>0);\n' +
//         '    printf("%d %d\\n", 32>>-1, 32>>-0);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '54',
//       question: 'What will be the output of the program?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    unsignedint res;\n' +
//         '    res = (64 >>(2+1-2)) & (~(1<<2));\n' +
//         '    printf("%d\\n", res);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '55',
//       question: 'What will be the output of the program ?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    int i=4, j=8;\n' +
//         '    printf("%d, %d, %d\\n", i|j&j|i, i|j&&j|i, i^j);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '56',
//       question: 'Which header file should be included to use functions like malloc() and calloc()?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '57',
//       question: 'What will be the output of the program?#include < stdio . h >#include < stdlib . h >int main()\n' +
//         '{\n' +
//         '    int *p;\n' +
//         '    p = (int *) malloc (20); /* Assume p has address of 1314 */free(p);\n' +
//         '    printf("%u", p);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '58',
//       question: 'What will be the output of the program (16-bit platform)?#include < stdio . h >#include < stdlib . h >int main()\n' +
//         '{\n' +
//         '    int *p;\n' +
//         '    p = (int *) malloc (20);\n' +
//         '    printf("%d\\n", sizeof (p));\n' +
//         '    free(p);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '59',
//       question: 'What will be the output of the program?#include < stdio . h >#includeint main()\n' +
//         '{\n' +
//         '    char *s;\n' +
//         '    char *fun();\n' +
//         '    s = fun();\n' +
//         '    printf("%s\\n", s);\n' +
//         '    return0;\n' +
//         '}\n' +
//         'char *fun()\n' +
//         '{\n' +
//         '    char buffer[30];\n' +
//         '    strcpy(buffer, "RAM");\n' +
//         '    return (buffer);\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '60',
//       question: 'Assume integer is 2 bytes wide. What will be the output of the following code?#include < stdio . h >#include < stdlib . h >#define MAXROW 3#define MAXCOL 4int main()\n' +
//         '{\n' +
//         '    int (*p)[MAXCOL];\n' +
//         '    p = (int (*) [MAXCOL]) malloc( MAXROW *sizeof (*p));\n' +
//         '    printf("%d, %d\\n", sizeof(p), sizeof(*p));\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '61',
//       question: 'How many bytes of memory will the following code reserve?#include < stdio . h >#include < stdlib . h >int main()\n' +
//         '{\n' +
//         '    int *p;\n' +
//         '    p = (int *)malloc(256 * 256);\n' +
//         '    if(p == NULL)\n' +
//         '        printf("Allocation failed");\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '62',
//       question: 'Point out the error in the following program.#include#include < stdlib . h >int main()\n' +
//         '{\n' +
//         '    int *a[3];\n' +
//         '    a = (int*) malloc ( sizeof (int) *3);\n' +
//         '    free(a);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '63',
//       question: 'Point out the error in the following program.#include#include < stdlib . h >int main()\n' +
//         '{\n' +
//         '    char *ptr;\n' +
//         '    *ptr = (char)malloc(30);\n' +
//         '    strcpy(ptr, "RAM");\n' +
//         '    printf("%s", ptr);\n' +
//         '    free(ptr);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '64',
//       question: 'How will you free the memory allocated by the following program?#include#include#define MAXROW 3#define MAXCOL 4int main()\n' +
//         '{\n' +
//         '    int **p, i, j;\n' +
//         '    p = (int **) malloc(MAXROW * sizeof(int*));\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer:Option D'
//     },
//     {
//       id: '65',
//       question: 'What will the function rewind() do?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: ''
//     },
//     {
//       id: '66',
//       question: 'What will the function rewind() do?',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: ''
//     },
//     {
//       id: '67',
//       question: 'What will be the output of the program?#include < stdio . h >#includeint main()\n' +
//         '{\n' +
//         '    float i = 2.5;\n' +
//         '    printf("%f, %d", floor(i), ceil(i));\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Answer :Option CExplanation :Both ceil() and floor() return the integer found as a double. floor(2.5) returns the largest integral value(round down) that is not greater than 2.5. So output is 2.000000. ceil(2.5) returns 3, while converting the double to int it returns '0'.  So, the output is '2.000000,"
//     },
//     {
//       id: '68',
//       question: 'What will be the output of the program?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    int i;\n' +
//         '    i = scanf("%d %d", &i, &i);\n' +
//         '    printf("%d\\n", i);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '69',
//       question: 'What will be the output of the program?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    int i;\n' +
//         '    char c;\n' +
//         '    for(i=1; i <= 5; i++)\n' +
//         '    {\n' +
//         `        scanf("%c", &c); /* given input is 'b' */\n` +
//         '        ungetc(c, stdout);\n' +
//         '        printf("%c", c);\n' +
//         '        ungetc(c, stdin);\n' +
//         '    }\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '70',
//       question: 'What will be the output of the program?#include < stdio . h >#includeint main()\n' +
//         '{\n' +
//         '    char *i = "55.555";\n' +
//         '    int result1 = 10;\n' +
//         '    float result2 = 11.111;\n' +
//         '    result1 = result1+atoi(i);\n' +
//         '    result2 = result2+atof(i);\n' +
//         '    printf("%d, %f", result1, result2);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '71',
//       question: 'What will be the output of the program?#include < stdio . h >#includeint main()\n' +
//         '{\n' +
//         '    char dest[] = {97, 97, 0};\n' +
//         '    char src[] = "aaa";\n' +
//         '    int i;\n' +
//         '    if((i = memcmp(dest, src, 2))==0)\n' +
//         '        printf("Got it");\n' +
//         '    elseprintf("Missed");\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '72',
//       question: 'Point out the error in the following program.#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    fprintf("Ambition Box");\n' +
//         '    printf("%.ef", 2.0);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '73',
//       question: 'Point out the error in the following program.#include < stdio . h >#include < string . h >int main()\n' +
//         '{\n' +
//         '    char str1[] = "Learn through Ambition Box\\0.com",  str2[120];\n' +
//         '    char *p;\n' +
//         "    p = (char*) memccpy(str2, str1, 'i', strlen(str1));\n" +
//         "    *p = '\\0';\n" +
//         '    printf("%s", str2);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: ''
//     },
//     {
//       id: '74',
//       question: 'Point out the error in the following program.#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    char str[] = "Ambition box";\n' +
//         '    printf("%.#s %2s", str, str);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: ''
//     },
//     {
//       id: '75',
//       question: 'How many times "Ambition Box" is get printed?#includeint main()\n' +
//         '{\n' +
//         '    int x;\n' +
//         '    for(x=-1; x<=10; x++)\n' +
//         '    {\n' +
//         '        if(x < 5)\n' +
//         '            continue;\n' +
//         '        elsebreak;\n' +
//         '        printf("Ambition Box");\n' +
//         '    }\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '76',
//       question: 'How many times the while loop will get executed if a short int is 2 byte wide?#includeint main()\n' +
//         '{\n' +
//         '    int j=1;\n' +
//         '    while(j <= 255)\n' +
//         '    {\n' +
//         '        printf("%c %d\\n", j, j);\n' +
//         '        j++;\n' +
//         '    }\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer :Option BExplanation : The while(j <= 255) loop will get executed 255 times. The size short int(2 byte wide) does not affect the while() loop.'
//     },
//     {
//       id: '77',
//       question: 'Which of the following is not logical operator?',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: "Answer :Option AExplanation :Bitwise operators: & is a Bitwise AND operator. Logical operators: && is a Logical AND operator. || is a Logical OR operator. ! is a NOT operator. So, '&' is not a Logical operator."
//     },
//     {
//       id: '78',
//       question: 'In mathematics and computer programming, which is the correct order of mathematical operators ?',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: 'Answer :Option BExplanation :Simply called as BODMAS (Brackets, Order, Division, Multiplication, Addition and Subtraction). Mnemonics are often used to help students remember the rules, but the rules taught by the use of acronyms can be misleading. In the United States the acronym PEMDAS is common. It stands for Parentheses, Exponents, Multiplication, Division, Addition, Subtraction. In other English speaking countries, Parentheses may be called Brackets, or symbols of inclusion and Exponentiation may be called either Indices, Powers or Orders, and since multiplication and division are of equal precedence, M and D are often interchanged, leading to such acronyms as BEDMAS, BIDMAS, BODMAS, BERDMAS, PERDMAS, and BPODMAS.'
//     },
//     {
//       id: '79',
//       question: 'What will be the output of the program?#include<stdio.h>int main()\n' +
//         '{\n' +
//         '    int a = 500, b = 100, c;\n' +
//         '    if(!a >= 400)\n' +
//         '        b = 300;\n' +
//         '    c = 200;\n' +
//         '    printf("b = %d c = %d\\n", b, c);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: `Answer :Option DExplanation :Initially variables a = 500, b = 100 and c is not assigned.Step 1: if(!a >= 400)Step 2: if(!500 >= 400)Step 3: if(0 >= 400)Step 4: if(FALSE) Hence the if condition is failed.Step 5: So, variable c is assigned to a value '200'.Step 6: printf("b = %d c = %d\\n", b, c); It prints value of b and c. Hence the output is "b = 100 c = 200"`
//     },
//     {
//       id: '80',
//       question: 'What will be the output of the program?#include<stdio.h>int main()\n' +
//         '{\n' +
//         '    unsignedint i = 65535; /* Assume 2 byte integer*/while(i++ != 0)\n' +
//         '        printf("%d",++i);\n' +
//         '    printf("\\n");\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: `Answer :Option AExplanation :Here unsigned int size is 2 bytes. It varies from 0,1,2,3, ... to 65535.Step 1:unsigned int i = 65535;Step 2: Loop 1: while(i++ != 0) this statement becomes while(65535 != 0). Hence the while(TRUE) condition is satisfied. Then the printf("%d", ++i); prints '1'(variable 'i' is already increemented by '1' in while statement and now increemented by '1' in printf statement) Loop 2: while(i++ != 0) this statement becomes while(1 != 0). Hence the while(TRUE) condition is satisfied. Then the printf("%d", ++i); prints '3'(variable 'i' is already increemented by '1' in while statement and now increemented by '1' in printf statement) ....The while loop will never stops executing, because variable i will never become '0'(zero). Hence it is an 'Infinite loop'.`
//     },
//     {
//       id: '81',
//       question: 'What will be the output of the program?#includeint main()\n' +
//         '{\n' +
//         '    int x = 10, y = 20;\n' +
//         '    if(!(!x) && x)\n' +
//         '        printf("x = %d\\n", x);\n' +
//         '    elseprintf("y = %d\\n", y);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer :Option CExplanation :The logical not operator takes expression and evaluates to true if the expression is false and evaluates to false if the expression is true. In other words it reverses the value of the expression.Step 1: if(!(!x) && x) Step 2: if(!(!10) && 10) Step 3: if(!(0) && 10) Step 3: if(1 && 10) Step 4: if(TRUE) here the if condition is satisfied. Hence it prints x = 10.'
//     },
//     {
//       id: '82',
//       question: 'What will be the output of the program?#includeint main()\n' +
//         '{\n' +
//         '    char j=1;\n' +
//         '    while(j < 5)\n' +
//         '    {\n' +
//         '        printf("%d, ", j);\n' +
//         '        j = j+1;\n' +
//         '    }\n' +
//         '    printf("\\n");\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: ''
//     },
//     {
//       id: '83',
//       question: 'Point out the error, if any in the for loop.#includeint main()\n' +
//         '{\n' +
//         '    int i=1;\n' +
//         '    for(;;)\n' +
//         '    {\n' +
//         '        printf("%d\\n", i++);\n' +
//         '        if(i>10)\n' +
//         '           break;\n' +
//         '    }\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'd',
//       desc: 'Answer :Option DExplanation :Step 1: for(;;) this statement will genereate infinite loop.Step 2: printf("%d\\n", i++); this statement will print the value of variable i and increement i by 1(one).Step 3: if(i>10) here, if the variable i value is greater than 10, then the for loop breaks.Hence the output of the program is 1 2 3 4 5 6 7 8 9 10'
//     },
//     {
//       id: '84',
//       question: 'Point out the error, if any in the program.#includeint main()\n' +
//         '{\n' +
//         '    int a = 10;\n' +
//         '    switch(a)\n' +
//         '    {\n' +
//         '    }\n' +
//         '    printf("This is c program.");\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer :Option CExplanation :There can exists a switch statement, which has no case.'
//     },
//     {
//       id: '85',
//       question: 'Point out the error, if any in the program.#includeint main()\n' +
//         '{\n' +
//         '    int i = 1;\n' +
//         '    switch(i)\n' +
//         '    {\n' +
//         '        printf("This is c program.");\n' +
//         '        case1:\n' +
//         '            printf("Case1");\n' +
//         '            break;\n' +
//         '        case2:\n' +
//         '            printf("Case2");\n' +
//         '            break;\n' +
//         '    }\n' +
//         'return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Answer :Option CExplanation :switch(i) becomes switch(1), then the case 1: block is get executed. Hence it prints "Case1".printf("This is c program."); is ignored by the compiler.Hence there is no error and prints "Case1".'
//     },
//     {
//       id: '86',
//       question: 'Point out the error, if any in the while loop.#includeint main()\n' +
//         '{\n' +
//         '    int i=1;\n' +
//         '    while()\n' +
//         '    {\n' +
//         '        printf("%d\\n", i++);\n' +
//         '        if(i>10)\n' +
//         '           break;\n' +
//         '    }\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Answer :Option AExplanation :The while() loop must have conditional expression or it shows "Expression syntax" error. Example: while(i > 10){ ... }'
//     },
//     {
//       id: '87',
//       question: 'In C, if you pass an array as an argument to a function, what actually gets passed?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: "Answer : Option CExplanation :The statement 'C' is correct. When we pass an array as a funtion argument, the base address of the array will be passed."
//     },
//     {
//       id: '88',
//       question: 'What will be the output of the program ?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    int a[5] = {5, 1, 15, 20, 25};\n' +
//         '    int i, j, m;\n' +
//         '    i = ++a[1];\n' +
//         '    j = a[1]++;\n' +
//         '    m = a[i++];\n' +
//         '    printf("%d, %d, %d", i, j, m);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '89',
//       question: 'What will be the output of the program ?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    staticint a[2][2] = {1, 2, 3, 4};\n' +
//         '    int i, j;\n' +
//         '    staticint *p[] = {(int*)a, (int*)a+1, (int*)a+2};\n' +
//         '    for(i=0; i<2; i++)\n' +
//         '    {\n' +
//         '        for(j=0; j<2; j++)\n' +
//         '        {\n' +
//         '            printf("%d, %d, %d, %d\\n", *(*(p+i)+j), *(*(j+p)+i), \n' +
//         '                                    *(*(i+p)+j), *(*(p+j)+i));\n' +
//         '        }\n' +
//         '    }\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '90',
//       question: 'What will be the output of the program ?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    void fun(int, int[]);\n' +
//         '    int arr[] = {1, 2, 3, 4};\n' +
//         '    int i;\n' +
//         '    fun(4, arr);\n' +
//         '    for(i=0; i<4; i++)\n' +
//         '        printf("%d,", arr[i]);\n' +
//         '    return0;\n' +
//         '}\n' +
//         'void fun(int n, int arr[])\n' +
//         '{\n' +
//         '    int *p=0;\n' +
//         '    int i=0;\n' +
//         '    while(i++ < n)\n' +
//         '        p = &arr[i];\n' +
//         '    *p=0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '91',
//       question: 'What will be the output of the program if the array begins at address 65486?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    int arr[] = {12, 14, 15, 23, 45};\n' +
//         '    printf("%u, %u\\n", arr, &arr);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '92',
//       question: 'What will be the output of the program if the array begins 1200 in memory?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    int arr[]={2, 3, 4, 1, 6};\n' +
//         '    printf("%u, %u, %u\\n", arr, &arr[0], &arr);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '93',
//       question: 'Which of the following is correct way to define the function fun() in the below program?#includeint main()\n' +
//         '{\n' +
//         '    int a[3][4];\n' +
//         '    fun(a);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '94',
//       question: 'Which of the following statements are correct about an array? 1: The array int num[26]; can store 26 elements. 2: The expression num[1] designates the very first element in the array. 3: It is necessary to initialize the array at the time of declaration. 4: The declaration num[SIZE] is allowed if SIZE is a macro.',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '95',
//       question: 'Point out the error in the program?#include < stdio.h >#include < stdlib.h >int main()\n' +
//         '{\n' +
//         '    unsignedchar;\n' +
//         '    FILE *fp;\n' +
//         '    fp=fopen("trial", "r");\n' +
//         '    if(!fp)\n' +
//         '    {\n' +
//         '        printf("Unable to open file");\n' +
//         '        exit(1);\n' +
//         '    }\n' +
//         '    fclose(fp);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '96',
//       question: "Point out the error in the program?#include < stdio.h >/* Assume there is a file called 'file.c' in c:\\tc directory. */int main()\n" +
//         '{\n' +
//         '    FILE *fp;\n' +
//         '    fp=fopen("c:\\tc\\file.c", "r");    \n' +
//         '    if(!fp) \n' +
//         '      printf("Unable to open file.");        \n' +
//         '\n' +
//         '    fclose(fp);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '97',
//       question: 'Point out the error/warning in the program?#include < stdio.h >int main()\n' +
//         '{\n' +
//         '    unsignedchar ch;\n' +
//         '    FILE *fp;\n' +
//         '    fp=fopen("trial", "r");\n' +
//         '    while((ch = getc(fp))!=EOF)\n' +
//         '        printf("%c", ch);\n' +
//         '    fclose(fp);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: ''
//     },
//     {
//       id: '98',
//       question: 'Point out the correct statements about the program?#includeint main()\n' +
//         '{\n' +
//         '    FILE *fptr;\n' +
//         '    char str[80];\n' +
//         '    fptr = fopen("f1.dat", "w");\n' +
//         '    if(fptr == NULL)\n' +
//         '        printf("Cannot open file");\n' +
//         '    else\n' +
//         '    {\n' +
//         '        while(strlen(gets(str))>0)\n' +
//         '        {\n' +
//         '            fputs(str, fptr);\n' +
//         '            fputs("\\n", fptr);\n' +
//         '        }\n' +
//         '        fclose(fptr);\n' +
//         '    }\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     {
//       id: '99',
//       question: 'What is x in the following program?#include < stdio . h >int main()\n' +
//         '{\n' +
//         '    typedefchar (*(*arrfptr[3])())[10];\n' +
//         '    arrfptr x;\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: ''
//     },
//     {
//       id: '100',
//       question: 'What will be the output of the program?#includetypedefstruct error {int warning, err, exception;} ERROR;\n' +
//         'int main()\n' +
//         '{\n' +
//         '    ERROR e;\n' +
//         '    e.err=1;\n' +
//         '    printf("%d\\n", e.err);\n' +
//         '    return0;\n' +
//         '}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: ''
//     },
//     ... 3 more items
//   ],
//   'c-sharp-programming': [
//     {
//       id: '1',
//       question: 'Correct Declaration of Values to variables ‘a’ and ‘b’?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'a) Although,declaration of ‘b’ and ‘a’ are correct but initialization of value to ‘b’ should be ‘int’ datatype not float. b) Missing declaration type of ‘b’. c) correctly declared datatypes ‘a’ and ‘b’. d) ‘b’ can’t be assigned values before declaration.'
//     },
//     {
//       id: '2',
//       question: 'Select error in the given program :1.static Void Main(String[] args)2. {3. constint m =100;4. int n =10;5. constint k = n /5*100* n ;6. Console.WriteLine(m * k);7. Console.ReadLine();8. }',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: '’k’ should be declared as const int k = 10/5 * 100*10 i.e only constant values should be assigned to a constant. Output :Error 1 – The expression being assigned to ‘k’ must be constant.'
//     },
//     {
//       id: '3',
//       question: 'Correct output for code is?1. staticvoid Main(string[] args)2. {3. float a = 10.553f;4. long b = 12L;5. int c;6. c = Convert.ToInt32(a + b);7. Console.WriteLine(c);8. }',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'The two datatype ‘float’ and ‘long’ after arithmetic operation completely converted to nearest whole number 23. Output : 23.'
//     },
//     {
//       id: '4',
//       question: 'Select the output for the relevant code set:1. staticvoid Main(string[] args)2. {3. int a =4, b =5, c =7, u =9;4. int h;5. h =(Convert.ToInt32(u < b))+(a + b--)+2;6. Console.WriteLine(h);7. Console.WriteLine(b);8. Console.WriteLine(u < b);9. }',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: "Step 1: Convert.ToInt32(u < b)(Evaluate result as 9 < 5 which is false in nature.So, solution is converted from 'false' to '0').Step 2: (a + b--) evaluated as 4 + 5 = 9 + 2 =11. Step 3: u < b evaluated as 'False' without being converted to '0'.Output : 11 4 False"
//     },
//     {
//       id: '5',
//       question: 'What is the output of the following code?static void Main(string[] args){     int a = 5 ;     if(Convert.ToBoolean((.002f)-(0.1f)))     Console.WriteLine("Sachin Tendulkar");    elseif(a ==5)     Console.WriteLine("Rahul Dravid");     else     Console.WriteLine("Ms Dhoni");     Console.ReadLine();}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: '(0.002 – 0.1f) not equivalent to zero hence it is true. So,only first if clause will execute and print:Sachin Tendulkar on console.As,first condition is always true so no else if statement will be executed. Output: Sachin Tendulkar'
//     },
//     {
//       id: '6',
//       question: 'Select the correct ‘if statement’ to be filled in the given set of code :static void Main(string [] args){     int[]num ={50, 65, 56, 88, 43, 52};      int even =0, odd =0;     for(int i =0;i < num.Length;i++)     {          /*_________________*/     }     Console.WriteLine("Even Numbers:"+even);     Console.WriteLine("Odd Numbers:"+odd);     Console.ReadLine();}',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'int []num = {50, 65, 56, 88, 43, 52}; int even = 0,odd = 0; for (int i = 0 ;i < num.Length ;i++) { if (num[i] % 2 == 0) { even += 1; } else { odd += 1; } } Console.WriteLine("Even Numbers: " +even); Console.WriteLine("Odd Numbers: " +odd); Console.ReadLine()'
//     },
//     {
//       id: '7',
//       question: 'Select a convenient declaration and initialization of a floating point number:',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'We cannot implicitly convert a “double” number directly to any other datatype.Here, its float we have to add the required datatype to number as : float somevariable = (float)12.502D; or Double somevariable = (Double)12.502D;'
//     },
//     {
//       id: '8',
//       question: 'Correct way to define a value 6.28 in a variable ‘a’ where value cannot be modified ?',
//       options: [Array],
//       correctAnswer: 'c',
//       desc: 'Const is a reserve keyword whenever they are declared with any variables.The value stored in that variable always remain fixed.Any modification done to change value of that variable results in error.Hence, options a, b and d are rejected because value is not declared fixed.Now, for value ‘c’ and ‘d’ only option ‘c’ is correct because for value ‘d’ while declaring a constant variable we need to provide a constant value too as provided in ‘c’. So, option ‘c’ is correct way of declaration of constant variable.'
//     },
//     {
//       id: '9',
//       question: 'Why does a float variable stop incrementing at number ‘16777216’ in given code in C#?float = 0 ;while(true){     a++;     if ( a > 16777216 )      break;}',
//       options: [Array],
//       correctAnswer: 'b',
//       desc: '16777216 is exactly 224, and would be represented as 32-bit float like so: sign = 0 (positive number) exponent = 24 (stored as 24 + 127 = 151 = 10010111) mantissa = . 0 As 32 bits floating-point representation: 0 10010111 00000000000000000000000 Therefore: Value = (+ 1) * 2 ^ 24 * (1. 0 + . 0) = 2 ^ 24 = 16777216 Now let’s look at the number 16777217, or exactly 224 + 1: sign and exponent are the same. Mantissa should have to be exactly 2-24 so that (+ 1) * 2 ^ 24 * (1. 0 + 2 ^-24) = 2 ^ 24 + 1 = 16777217 and here lies the actual problem . The mantissa cannot have the value 2-24 because it only has 23 bits, so the number 16777217 just cannot be represented with the accuracy of 32-bit floating points numbers.'
//     },
//     {
//       id: '10',
//       question: 'Select the output for the following set of Code :staticvoid Main(string[] args){    int a =8, b =6, c =10;    int d = a * c *2/ Convert.ToInt32(Math.Pow((c - b), 2));    if(d ==(c = Convert.ToInt32(Math.Sqrt(a * a + b * b)))&& c ==10)     {         Console.WriteLine("figure is hypotenuse");      }      else      {         Console.WriteLine("figure is square");      }}',
//       options: [Array],
//       correctAnswer: 'a',
//       desc: 'Solving the expression for ‘c’ we get c==10 in if first condition as (c == Convert.ToInt32(Math.Sqrt(a * a + b * b))). The logical condition when d == (c = 10) suits here . Similarly, going for second condition where c ==10 as ‘&&’ operator exists between both given condition and at last both are evaluated to true as c == 10. So, only first statement is executed. Output :Figure is square'
//     }
//   ]
// }
