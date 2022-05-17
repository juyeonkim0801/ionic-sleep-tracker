--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--
*author: Ju Yeon Kim
*canvas group: A4 Group 10
*email: juyk4@uci.edu
*UCI id: juyk4

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
- 25 hours


3. What online resources did you consult when completing this assignment? (list specific URLs)
- redirecting pages
    https://developmobileapplications.com/how-to-redirect-from-one-page-to-another-in-ionic-4
    https://ionicframework.com/docs/angular/navigation
    https://www.freakyjolly.com/ionic-add-tabs-navigation-routing-in-ionic-angular-application/
    https://www.freakyjolly.com/ionic-tabs-bar-navigation-tutorial/

- tab bar
    https://www.youtube.com/watch?v=0QlEavSZDB0

- How to display current date and time using ionic
    https://stackoverflow.com/questions/69386953/how-to-display-current-date-and-time-using-ionic

- Using datetime
    https://stackoverflow.com/questions/67278666/how-do-i-set-my-ion-datetime-to-todays-date-automatically-without-needing-to-cl
    https://www.youtube.com/watch?v=iq_XIPml9_M
    https://www.damirscorner.com/blog/posts/20220107-DatePickerPopupInIonic6.html

- parseISO
    https://help.hcltechsw.com/dom_designer/9.0.1/reference/r_wpdr_standard_date_parseiso_r.html

- Ionic storage
    https://github.com/ionic-team/ionic-storage
    https://www.youtube.com/watch?v=vCfAe2esboU

- Set Default Font
    https://forum.ionicframework.com/t/ionic-5-changing-default-font-family/187141

- Calendar
    https://demo.mobiscroll.com/angular/eventcalendar/mobile-month-view
    https://devdactic.com/ionic-5-calendar-modal/


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
- None.


5. Is there anything special we need to know in order to run your code?
- Installation of 'date-fns' is needed.
    "npm i date-fns" inside the "sleeptracker" folder


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
- No.


7. Did you design your app specifically for iOS or Android, or both?
- Both


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
- Users can log overnight sleep by inputting their sleep date, sleep time, wake date, and wake time, using Ionic's datetime pickers.
- I decided to use modal instead of popover, since using popover might need users to scroll the screen.


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
- Users can view the cards that inform different levels of sleepiness, and then log sleepiness by using ion-select.
- It was easier to parse sleepiness data with ion-select.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
- Users can choose the date they would like to view by using a datetime picker, and the input generates two cards of sleep session and sleepiness.
- I decided not to import a calendar and use datetime instead, to keep the app screen as simple as possible. 


11. Which feature choose--using a native device resource, backing up logged data, or both?
- Backing up logged data


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
- None.


13. If you backed up logged data, where does it back up to?
- Ionic storage

14. How does your app implement or follow principles of good mobile design?
- A useful initial view:
    The app's initial view is a page where users can log overnight sleep sesssions.
    The app features a bottom tab bar to make the navigation between pages easier.

- The "uh-oh" button:
    Since user inputs are made by basic ionic widgets (e.g. datetime), it is easier for users to re-enter their inputs.

- Error prevention
    To prevent users to press buttons by mistake, buttons are disabled until inputs are logged.
    If the inputs are not valid (e.g. waketime preceeds sleeptime), users will be alerted and cannot log their data.

- Follow platform conventions
    The app's functions and designs work well in both iOS and Android.
