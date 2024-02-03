# Health Link

Health Link is a cutting-edge platform designed to provide a virtual bridge between patients and doctors, offering remote medical consultations and a comprehensive suite of features tailored to enhance the healthcare experience. With the platform, patients can easily search for and select doctors by name or specialization, request video consultations, and receive personalized medical records post-consultation. This system not only ensures that patients receive timely and efficient healthcare services from the comfort of their homes but also significantly reduces the risk of exposure to contagious diseases in hospital settings.

## Platform Overview

### Users and Functionality

- **Users**: Health Link caters to three types of users: patients, doctors, and administrative staff. It allows registered users to log in, while new users can sign up as patients.
- **Doctor Selection and Consultation**: Patients can search for and select doctors based on specialization or name. They can request video consultations, during which doctors can access the patient's medical records to aid in diagnosis.
- **Medical Records**: After consultations, patients receive medical records containing advice or treatment plans. Doctors have the capability to view, edit, and delete medical records for their patients.
- **User Profiles**: All registered users can view and modify their profiles. Administrative staff are responsible for managing doctor profiles within the system.

### Technology Stack

- **Frontend**: The client-side of the website is built using React and TailwindCSS, offering a responsive and user-friendly interface.
- **Backend**: The server-side utilizes Node.js and Express for RESTful API services.
- **Real-time Communication**: Socket.io is employed to manage online/offline statuses of doctors, facilitating real-time interactions. It supports features like online presence indicators and private consultation rooms.
- **Video Consultations**: The integration of WebRTC and PeerJS enables high-quality video consultations, with PeerJS simplifying the peer-to-peer connection setup.
- **Database**: MongoDB, along with the Mongoose library, is used for data storage, providing a flexible and scalable solution for managing user data and medical records.

## Project Setup

To run Health Link locally:

1. **Environment Setup**: Create a `config.env` file in the backend directory with necessary environment variables (e.g., database URL, API path, JWT secret).

```plaintext
NODE_ENV=development
PORT=5000
MONGO_URI=<Your MongoDB Url>
API_URL=/api/v1
secret=<Your secret code for JWT>


2. **Backend Setup**:

Install dependencies and start the backend server with the following commands:

```plaintext
cd backend
npm install
npm start


3. **Frontend Setup**:

Install dependencies and launch the React frontend with the following commands:

cd frontend
npm install
npm start


## API Overview

Health Link provides comprehensive API routes for managing patients, doctors, staff, medical records, and specializations. It supports operations like registration, login, and CRUD operations for medical records and user profiles, ensuring secure access through JWT authentication. Additionally, it offers advanced features like filtering, sorting, field limiting, and pagination to efficiently manage and query data.


## API Documentation

#### API url : https://harmore.herokuapp.com

#### Patient Route (Need JWT token)

| Endpoint            | HTTP Method | CRUD Method | Result               | Authorization                         |
| ------------------- | ----------- | ----------- | -------------------- | ------------------------------------- |
| /api/v1/patient     | GET         | READ        | Get all patients     | Doctor, Staff                         |
| /api/v1/patient/:id | GET         | READ        | Get a single patient | Doctor, Staff, Patient(with match id) |
| /api/v1/patient     | POST        | CREATE      | Add a patient        | Staff                                 |
| /api/v1/patient/:id | PUT         | UPDATE      | Update a patient     | Patient(with match id)                |
| /api/v1/patient/:id | DELETE      | DELETE      | Delete a patient     | Staff                                 |

#### Doctor Route (Need JWT token)

| Endpoint           | HTTP Method | CRUD Method | Result              | Authorization                         |
| ------------------ | ----------- | ----------- | ------------------- | ------------------------------------- |
| /api/v1/doctor     | GET         | READ        | Get all doctor      | Paitent, Staff                        |
| /api/v1/doctor/:id | GET         | READ        | Get a single doctor | Patient, Staff, Doctor(with match id) |
| /api/v1/doctor     | POST        | CREATE      | Add a doctor        | Staff                                 |
| /api/v1/doctor/:id | PUT         | UPDATE      | Update a doctor     | Doctor(with match id)                 |
| /api/v1/doctor/:id | DELETE      | DELETE      | Delete a doctor     | Staff                                 |

#### Staff Route (Need JWT token)

| Endpoint          | HTTP Method | CRUD Method | Result             | Authorization |
| ----------------- | ----------- | ----------- | ------------------ | ------------- |
| /api/v1/staff     | GET         | READ        | Get all staffs     | Staff         |
| /api/v1/staff/:id | GET         | READ        | Get a single staff | Staff         |
| /api/v1/staff     | POST        | CREATE      | Add a staff        | Staff         |
| /api/v1/staff/:id | PUT         | UPDATE      | Update a staff     | staff         |
| /api/v1/staff/:id | DELETE      | DELETE      | Delete a staff     | Staff         |

#### Medical Record Route (Need JWT token)

| Endpoint                  | HTTP Method | CRUD Method | Result                     | Authorization   |
| ------------------------- | ----------- | ----------- | -------------------------- | --------------- |
| /api/v1/medicalRecord     | GET         | READ        | Get all medicalRecords     | Patient, Doctor |
| /api/v1/medicalRecord/:id | GET         | READ        | Get a single medicalRecord | Patient, Doctor |
| /api/v1/medicalRecord     | POST        | CREATE      | Add a medicalRecord        | Doctor          |
| /api/v1/medicalRecord/:id | PUT         | UPDATE      | Update a medicalRecord     | Doctor          |
| /api/v1/medicalRecord/:id | DELETE      | DELETE      | Delete a medicalRecord     | Doctor          |

#### Specialization Route (Need JWT token)

| Endpoint                   | HTTP Method | CRUD Method | Result                      | Authorization          |
| -------------------------- | ----------- | ----------- | --------------------------- | ---------------------- |
| /api/v1/specialization     | GET         | READ        | Get all specializations     | Patient, Doctor, Staff |
| /api/v1/specialization/:id | GET         | READ        | Get a single specialization | Patient, Staff         |
| /api/v1/specialization     | POST        | CREATE      | Add a specialization        | Staff                  |
| /api/v1/specialization/:id | PUT         | UPDATE      | Update a specialization     | Staff                  |
| /api/v1/specialization/:id | DELETE      | DELETE      | Delete a specialization     | Staff                  |

#### Authentication Route (Don't need JWT token)

| Endpoint                 | HTTP Method | CRUD Method | Result                    | Authorization    |
| ------------------------ | ----------- | ----------- | ------------------------- | ---------------- |
| /api/v1/patient/login    | POST        | CREATE      | Create JWT Token          | Registed Patient |
| /api/v1/patient/register | POST        | CREATE      | Create an patient account | All users        |
| /api/v1/doctor/login     | POST        | CREATE      | Create JWT Token          | Doctor           |
| /api/v1/staff/login      | POST        | CREATE      | Create JWT Token          | Staff            |

#### Filtering

| Example                                            | Result                                                   |
| -------------------------------------------------- | -------------------------------------------------------- |
| /api/v1/medicalRecord?doctor=123456&patient=789102 | Get medical record that match the doctorID and patientID |
| /api/v1/doctor/123456,213123                       | Get the information of the two doctors                   |

#### Sorting

| Example                         | Result                                   |
| ------------------------------- | ---------------------------------------- |
| /api/v1/medicalRecord?sort=date | Medical Record sort by date              |
| /api/v1/patient?sort=-name      | Patient sort by name in descending order |

#### Field Limiting

| Example                           | Result                 |
| --------------------------------- | ---------------------- |
| /api/v1/patient?fields=name,email | Show only patient name |

#### Pagination

| Example                       | Result                                                   |
| ----------------------------- | -------------------------------------------------------- |
| /api/v1/doctor?page=2&limit=5 | Get the information in page 2 and have 5 doctor per page |