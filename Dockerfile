# משתמשים בגרסה רשמית של פליירייט כבסיס
FROM mcr.microsoft.com/playwright:v1.58.2-noble

# הגדרת תיקיית העבודה בתוך הקונטיינר
WORKDIR /app

# התקנת Allure Commandline (כדי שנוכל לייצר דוחות ויזואליים)
# אנחנו מתקינים Java כי Allure דורש אותה להרצה
RUN apt-get update && apt-get install -y openjdk-11-jre-headless \
    && npm install -g allure-commandline --save-dev

# פקודת ברירת מחדל שמשאירה את הקונטיינר פעיל
CMD ["tail", "-f", "/dev/null"]