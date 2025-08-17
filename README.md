# MMU-Notes

**Project Type:** Web Application  
**Team Name / Author:** **notTuff.exe**  


---

## **Overview**

**MMU Notes** is a web application designed to **centralize and simplify access to educational resources** for students at Multimedia University (MMU).  

Students can:  

- **Upload** lecture notes, assignments, and study materials.  
- **Search** for resources by faculty, level, program, and subject.  
- **Download** uploaded documents directly from the browser.  

The project uses **Google Sheets** as a lightweight backend and **file uploads** via a secure server.

---

## **Features**

- **Login System**  
  - Validates student emails ending with `@student.mmu.edu.my`.  
  - Checks password length (minimum 6 characters).  
  - Redirects successfully logged-in users to the main resource hub (`main1.html`).  

- **Upload Resources**  
  - Upload PDF, Word, or other document types.  
  - Specify **faculty, level, program, and subject**.  

- **Search Resources**  
  - Filter by **faculty, level, program, or subject**.  
  - Download files with a single click.  

- **Google Sheets Integration**  
  - Stores metadata: `faculty`, `level`, `program`, `subject`, `file URL`.  
  - Easy to query and shareable backend.  

- **User-Friendly UI**  
  - Simple, modern interface built with HTML, CSS, and JavaScript.  
  - Designed for fast navigation and minimal friction.  

---

## **Technologies Used**

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js, Multer (for file uploads)  
- **Database:** Google Sheets  
- **Other Libraries:**  
  - `cors` for cross-origin requests  
  - `googleapis` for Sheets API  

---

## **Installation & Setup**

1. **Clone the repository:**  
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
2. **Add Google credentials:**
   ```bash
   Place your credentials.json in the project root.
   Make sure your Google Sheet is shared with the service account email.
3. **Start the server:**
   ```bash
   node server.js
4. **Open in browser:**
   ```arduino
   http://localhost:5000/
5. **Folder Structure**
   
├─ frontend/
│   ├─ index1.html       # Login page
│   ├─ main1.html        # Main resource hub
│   ├─ style.css         # Login page styles
│   ├─ main1.css         # Main page styles
│   └─ mmu-logo.PNG      # Logo
├─ uploads/              # Uploaded files
├─ server.js             # Node.js server
└─ credentials.json      # Google API credentials
# Usage

1. Go to the login page: http://localhost:5000/

2. Enter a valid MMU student email and password.

3. On success, you will be redirected to the main page (main1.html).

4. Use the Upload Form to add new resources.

5. Use the Search Form to find and download files.

# Contact
* Developer : Chan Hui Ern
* Email : CHAN.HUI.ERN@student.mmu.edu.my
* GitHub Link : https://github.com/huiern88-sketch
* Developer : Lyna Boubakri
* Email : BOUBAKRI.LYNA1@student.mmu.edu.my
* GitHub Link : https://github.com/lynaboubakri
* Developer : Vinayagam A/L Murugan 
* Email : VINAYAGAM.MURUGAN@student.mmu.edu.my
* GitHub Link : https://github.com/vina-bot
* Developer : Nur Najwa Nabilah Bt Mohd Azrin
* Email : nur.najwa.nabilah@student.mmu.edu.my
* GitHub Link : https://github.com/najwazrin
  

