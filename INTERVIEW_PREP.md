# Interview Readiness Pack (MERN Stack)

Use this as a checklist 2 days before any interview.

## 1. Project Depth (Defensibility)
For **QuizKar**, **Doubt Solver**, and **Music App**, you must be able to answer:
- [ ] If I wanted to add a 'Group' feature to your app, which file would I modify?
- [ ] What happens in your code when the user enters a wrong password? (Walk through the flow: UI -> API -> Bcrypt -> Response).
- [ ] Why did you choose MongoDB instead of MySQL? (Good answer: "I needed a flexible schema for student doubts which can have variable tags and nested replies.")

## 2. Technical Concepts (The "Why")
- [ ] **Auth:** What is the difference between LocalStorage and Cookies for storing JWT? (Be ready for this!).
- [ ] **React:** Why use `useEffect`? What happens if you forget the dependency array?
- [ ] **Node:** What is Middleware? How did you use it in your projects? (Example: "I used it to check for JWT tokens before allowing a user to post a doubt.")
- [ ] **Database:** How do you prevent two users from creating a quiz with the same ID? 

## 3. Debugging Drill
If an interviewer says: "Your music app isn't loading songs," describe your steps:
1. "I'll open Chrome DevTools and check the **Network tab** for 404 or 500 errors."
2. "I'll check the **Console** for JavaScript errors."
3. "I'll check the **Backend logs** to see if the file path is being retrieved from the DB."

## 4. Behavioral Alignment
- **"Tell me about a challenge":** Talk about the time you struggled with WebRTC or Socket.io and how you fixed it.
- **"What are you learning now?":** "I'm currently focusing on strengthening my DSA in C++ to improve my problem-solving logic for backend development."

## 5. Resume ↔ Portfolio Matching
- [ ] Does your resume list the exact same projects as your portfolio?
- [ ] Are the dates the same?
- [ ] Can you point to a specific line of code in GitHub for every "Skill" listed on your resume?
